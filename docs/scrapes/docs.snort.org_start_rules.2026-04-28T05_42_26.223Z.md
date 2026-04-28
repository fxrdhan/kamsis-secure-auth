- Snort Light
- Snort Dark

# Snort 3 Rule Writing Guide

[Print this book](https://docs.snort.org/print.html "Print this book")

At its core, Snort is an intrusion detection system (IDS) and an intrusion prevention system (IPS), which means that it has the capability to detect intrusions on a network, and also prevent them. A configuration tells Snort how to process network traffic. It is the _rules_ that determine whether Snort acts on a particular packet.

Snort rules can be placed directly in one's Lua configuration file(s) via the `ips` module, but for the most part they will live in distinct `.rules` files that get "included". For example, say we had a `malware.rules` file in the same directory as our Lua configuration file. We could "include" that rules file like so:

```lua
ips = { include = 'malware.rules' }
```

If users want to include multiple `.rules` files, then they can do so like:

```lua
ips =
{
    rules = [[\
        include /path/to/rulesfile1.rules\
        include /path/to/rulesfile2.rules\
        …\
    ]]
}
```

Alternatively, a single rules file or a path to a rules directory can be passed directly to Snort on the command line. This is done either with the `-R` option for a single rules file or the `--rule-path` option to pass in a whole directory of rules files. This is convenient for when you need to verify or troubleshoot a rule or rules against a pcap.

For example, the below command will run all the rules present in `malware.rules` against the traffic in `bad.pcap`:

```
$ snort -c $my_path/lua/snort.lua -R malware.rules -r bad.pcap
```

The above command by default will output various statistics about the particular run. These include details about any identified applications, any detection events, types of services detected, and much more. The detection events will show _how many_ alerts fired on the provided traffic, but sometimes we want to know more than that.

Snort provides a few different "alert mode" options that can be set on the command line to tweak the way alerts are displayed. These modes include `cmg` which displays alerts alongside a hexdump of the alerting packet(s), as well as a few different `alert_*` modes shown below:

```
$ snort --help-modules | grep alert
alert_csv (logger): output event in csv format
alert_fast (logger): output event with brief text format
alert_full (logger): output event with full packet dump
alert_json (logger): output event in json format
alert_syslog (logger): output event to syslog
alert_talos (logger): output event in Talos alert format
alert_unixsock (logger): output event over unix socket
alerts (basic): configure alerts
```

These modes are set with the `-A` option followed by the desired alert mode, and we can focus solely on the alerts by also including the `-q` (quiet) flag. The `cmg` alert mode, for example, will look something like:

```
$ snort -q -c $my_path/lua/snort.lua -q -r get.pcap -R local.rules -A cmg
10/14-14:59:14.186063 [**] [1:0:0] "GET request" [**] [Classification: Web Application Attack] [Priority: 1] {TCP} 10.1.2.3:50284 -> 10.9.8.7:80

http_inspect.http_method[3]:
- - - - - - - - - - - -  - - - - - - - - - - - -  - - - - - - - - -
47 45 54                                          GET
- - - - - - - - - - - -  - - - - - - - - - - - -  - - - - - - - - -

http_inspect.http_version[8]:
- - - - - - - - - - - -  - - - - - - - - - - - -  - - - - - - - - -
48 54 54 50 2F 31 2E 31                           HTTP/1.1
- - - - - - - - - - - -  - - - - - - - - - - - -  - - - - - - - - -

http_inspect.http_uri[6]:
- - - - - - - - - - - -  - - - - - - - - - - - -  - - - - - - - - -
2F 68 65 6C 6C 6F                                 /hello
- - - - - - - - - - - -  - - - - - - - - - - - -  - - - - - - - - -

http_inspect.http_header[78]:
- - - - - - - - - - - -  - - - - - - - - - - - -  - - - - - - - - -
48 6F 73 74 3A 20 61 62  63 69 70 2D 68 6F 73 74  Host: ab cip-host
2E 6C 6F 63 61 6C 0D 0A  55 73 65 72 2D 41 67 65  .local.. User-Age
6E 74 3A 20 61 62 63 69  70 0D 0A 41 63 63 65 70  nt: abci p..Accep
74 2D 4C 61 6E 67 75 61  67 65 3A 20 65 6E 2D 75  t-Langua ge: en-u
73 0D 0A 41 63 63 65 70  74 3A 20 2A 2F 2A        s..Accep t: */*
- - - - - - - - - - - -  - - - - - - - - - - - -  - - - - - - - - -
```

The `alert_talos` is another useful mode that displays alerts in a format that is simple and easy-to-understand.

```
$ snort -q -c $my_path/lua/snort.lua -q -r get.pcap -R local.rules -A alert_talos

##### get.pcap #####
        [1:0:0] GET request (alerts: 1)
#####
```

Lastly, Some of the `alert_*` modes are customizable. `alert_csv` for example allows for customization of the different "fields" that can be outputted. The following example demonstrates a custom CSV alert configuration using the `--lua` command line flag:

```
$ snort -q -c $my_path/lua/snort/lua -r cmd_injection.pcap -R local.rules --lua 'alert_csv = { fields = "action pkt_num gid sid rev msg service src_addr src_port dst_addr dst_port", separator = "," }'
would_block,5,1,1000000,0,"Command injection detected",http,10.1.2.3,50284,10.9.8.7,80
would_block,6,1,1000000,0,"Command injection detected",http,10.1.2.3,50284,10.9.8.7,80
```

To protect networks, it's also important to make sure that our rules are blocking attacks appropriately, and the `dump` DAQ enables us to do just that.

Specifying the `-Q` option to enable inline mode and then setting the `--daq` to `dump` will "dump" the traffic that would've been passed through, emulating a real inline operation. The resulting traffic will be dumped, by default, to a file named `inline-out.pcap`:

```
$ snort3 -Q --daq dump -q -r get.pcap -R local.rules
```

In the above example, if the `local.rules` file contains a `block` rule that fires on some traffic in the `get.pcap` file, then the resulting `inline-out.pcap` file will contain only the traffic that was not blocked. We can use this functionality to test that our rules are preventing the actual attack packet(s) from getting through.

Lastly, just like with configuration files, `snort2lua` can also be used to convert old Snort 2 rules to Snort 3 ones. Pass the Snort 2 rules file to the `-c` option and then provide a filename for the new Snort 3 rules file to the `-r` option:

```
$ snort2lua -c in.rules -r out.rules
```

Note that if any errors occur during the conversion, `snort2lua` will output a `snort.rej` file that explains what went wrong:

```
$ snort2lua -c 2.rules -r 3.rules
ERROR: 1 errors occurred while converting
ERROR: see snort.rej for details
```