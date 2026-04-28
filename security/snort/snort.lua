---------------------------------------------------------------------------
-- AU7H Snort 3 IDS configuration
---------------------------------------------------------------------------

HOME_NET = os.getenv('SNORT_HOME_NET') or 'any'
EXTERNAL_NET = os.getenv('SNORT_EXTERNAL_NET') or 'any'

include 'snort_defaults.lua'

RULE_PATH = '/home/snorty/snort3/etc/rules/au7h'
HTTP_PORTS = '80 443 8080 8443'
SQL_SERVERS = HOME_NET

default_variables.paths.RULE_PATH = RULE_PATH
default_variables.ports.HTTP_PORTS = HTTP_PORTS
default_variables.nets.SQL_SERVERS = SQL_SERVERS

ips =
{
    enable_builtin_rules = true,
    include = RULE_PATH .. '/au7h.rules',
    variables = default_variables
}

alert_fast =
{
    file = true,
    packet = false,
    limit = 10
}
