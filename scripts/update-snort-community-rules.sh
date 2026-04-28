#!/bin/sh
set -eu

RULE_DIR="${1:-security/snort/rules}"
RULE_URL="${SNORT_COMMUNITY_RULES_URL:-https://www.snort.org/downloads/community/snort3-community-rules.tar.gz}"
OUTPUT_FILE="${RULE_DIR}/community.rules"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "${TMP_DIR}"
}
trap cleanup EXIT INT TERM

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required to download Snort community rules." >&2
  exit 1
fi

mkdir -p "${RULE_DIR}"

curl -fsSL "${RULE_URL}" -o "${TMP_DIR}/community-rules.tar.gz"
tar -xzf "${TMP_DIR}/community-rules.tar.gz" -C "${TMP_DIR}"

find "${TMP_DIR}" -type f -name '*.rules' -exec cat {} \; > "${OUTPUT_FILE}"

echo "Updated ${OUTPUT_FILE} from ${RULE_URL}"
