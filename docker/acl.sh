#!/bin/sh
set -eu

ACL_CHAIN="${ACL_CHAIN:-AU7H_INPUT}"
ACL_WEB_CIDR="${ACL_WEB_CIDR:-0.0.0.0/0}"
ACL_DB_CIDR="${ACL_DB_CIDR:-}"
ACL_ALLOW_ICMP="${ACL_ALLOW_ICMP:-0}"
APP_PORT_HTTP="${APP_PORT_HTTP:-8080}"
APP_PORT_HTTPS="${APP_PORT_HTTPS:-8443}"
MYSQL_PORT="${MYSQL_PORT:-3306}"

if ! command -v iptables >/dev/null 2>&1; then
  echo "ACL requested, but iptables is not installed." >&2
  exit 1
fi

if ! iptables -w -L >/dev/null 2>&1; then
  echo "ACL requested, but this container cannot manage iptables. Add NET_ADMIN capability." >&2
  exit 1
fi

iptables -w -P INPUT DROP
iptables -w -P FORWARD DROP
iptables -w -P OUTPUT ACCEPT

iptables -w -N "${ACL_CHAIN}" 2>/dev/null || iptables -w -F "${ACL_CHAIN}"
iptables -w -C INPUT -j "${ACL_CHAIN}" 2>/dev/null || iptables -w -I INPUT 1 -j "${ACL_CHAIN}"

iptables -w -A "${ACL_CHAIN}" -i lo -j ACCEPT
iptables -w -A "${ACL_CHAIN}" -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -w -A "${ACL_CHAIN}" -p tcp -s "${ACL_WEB_CIDR}" -m multiport --dports "${APP_PORT_HTTP},${APP_PORT_HTTPS}" -j ACCEPT

if [ -n "${ACL_DB_CIDR}" ]; then
  iptables -w -A "${ACL_CHAIN}" -p tcp -s "${ACL_DB_CIDR}" --dport "${MYSQL_PORT}" -j ACCEPT
fi

if [ "${ACL_ALLOW_ICMP}" = "1" ]; then
  iptables -w -A "${ACL_CHAIN}" -p icmp --icmp-type echo-request -j ACCEPT
fi

iptables -w -A "${ACL_CHAIN}" -p tcp --dport "${MYSQL_PORT}" -j REJECT
iptables -w -A "${ACL_CHAIN}" -p tcp --dport 22 -j REJECT
iptables -w -A "${ACL_CHAIN}" -p icmp --icmp-type echo-request -j DROP
iptables -w -A "${ACL_CHAIN}" -j DROP

echo "AU7H ACL active: web ${APP_PORT_HTTP}/${APP_PORT_HTTPS} allowed from ${ACL_WEB_CIDR}; MySQL ${MYSQL_PORT} blocked except ACL_DB_CIDR."
