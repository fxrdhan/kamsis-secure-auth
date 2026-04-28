- Snort Light
- Snort Dark

# Snort 3 Rule Writing Guide

[Print this book](https://docs.snort.org/print.html "Print this book")

Once we've got Snort set up to process traffic, it's now time to tell Snort _how_ to process traffic, and this is done through configuration. Snort configuration handles things like the setting of global variables, the different modules to enable or disable, performance settings, event logging policies, the paths to specific rules files to enable, and much more.

Snort 3 configuration is now all done in Lua, and these configuration options can be supplied to Snort in three different ways: via the command line, with a single Lua configuration file, or with multiple Lua configuration files.

There are **many** different configuration options that can be tuned in Snort, but luckily open-source Snort 3 comes with a set of standard configuration files that help get Snort users up and running quickly. These default files are located in the `lua/` directory, and the `snort.lua` and `snort_defaults.lua` files present there make up what is considered to be the the base configuration. This default config is an excellent template to build upon, and it can be plugged right into Snort for immediate use.

A big part of one's configuration is the enabling and tuning of Snort "modules", which at a high level control how Snort processes and handles network traffic. Snort contains modules to decipher raw packets, perform traffic normalization, determine whether or not a specific action should be taken against a particular packet, and also control how events should be logged. Snort features eight different types of modules:

- Basic Modules -> handle configuration for basic traffic and rule processing
- Codec Modules -> decode protocols and perform anomaly detection
- Inspector Modules -> analyze and process protocols
- IPS Action Modules -> enable custom actions that can be performed when an event occurs
- IPS Option Modules -> options set in Snort rules to set the detection parameters
- Search Engine -> perform pattern matching against packet data to determine which rules to evaluate
- SO Rule Modules -> perform detection not attainable with the existing IPS options
- Logger Modules -> control the output of events and packet data

A list and brief description of all Snort 3 modules can be seen with the `--help-modules` command:

```
$ snort --help-modules
```

Modules are enabled and configured in a configuration as Lua table literals. For example, the `stream_tcp` inspector module, which handles TCP flow tracking and stream normalization and reassembly, can enabled like so:

```lua
stream_tcp = { }
```

If a module is initialized as an _empty_ table, then that means the module is using its "default" settings. We can view these defaults with the `--help-config` argument:

```
$ snort --help-config stream_tcp
int stream_tcp.flush_factor = 0: flush upon seeing a drop in segment size after given number of non-decreasing segments { 0:65535 }
int stream_tcp.max_window = 0: maximum allowed TCP window { 0:1073725440 }
int stream_tcp.overlap_limit = 0: maximum number of allowed overlapping segments per session { 0:max32 }
int stream_tcp.max_pdu = 16384: maximum reassembled PDU size { 1460:32768 }
bool stream_tcp.no_ack = false: received data is implicitly acked immediately
enum stream_tcp.policy = 'bsd': determines operating system characteristics like reassembly { 'first' | 'last' | 'linux' | 'old_linux' | 'bsd' | 'macos' | 'solaris' | 'irix' | 'hpux11' | 'hpux10' | 'windows' | 'win_2003' | 'vista' | 'proxy' }
bool stream_tcp.reassemble_async = true: queue data for reassembly before traffic is seen in both directions
int stream_tcp.require_3whs = -1: don't track midstream sessions after given seconds from start up; -1 tracks all { -1:max31 }
bool stream_tcp.show_rebuilt_packets = false: enable cmg like output of reassembled packets
int stream_tcp.queue_limit.max_bytes = 4194304: don't queue more than given bytes per session and direction, 0 = unlimited { 0:max32 }
int stream_tcp.queue_limit.max_segments = 3072: don't queue more than given segments per session and direction, 0 = unlimited { 0:max32 }
int stream_tcp.small_segments.count = 0: number of consecutive (in the received order) TCP small segments considered to be excessive (129:12) { 0:2048 }
int stream_tcp.small_segments.maximum_size = 0: minimum bytes for a TCP segment not to be considered small (129:12) { 0:2048 }
int stream_tcp.session_timeout = 180: session tracking timeout { 1:max31 }
bool stream_tcp.track_only = false: disable reassembly if true
```

This command outputs the different settings for the given module, a description of each setting, and valid values for each one. The `max_pdu` setting, for example, can be set to an integer between 1460 and 32768 (inclusive).

Entries in Lua table literals are effectively just key-value pairs. If we wanted to set `stream_tcp.max_pdu` to its max setting, we would simply add a table entry like so:

```lua
stream_tcp =
{
    max_pdu = 32768
}
```

Other entries follow the same format and are separated by commas.

The default `snort.lua` configuration file enables and configures many of the core modules relied upon by Snort, and users are encouraged to go through that file and learn about the different ones using the `--help-module` and `--help-config` Snort commands.

Snort doesn't look for a specific configuration file by default, but you can pass one to it very easily with the `-c` argument:

```
$ snort -c $my_path/lua/snort.lua
```

This command simply validates the supplied configuration file, and if everything is in order, the output will include a message that says "Snort successfully validated the configuration".

Sometimes rule writers will want to experiment with a specific configuration to see how it might affect detection. Fortunately, Snort 3 provides the ability to run one-off custom Lua configurations directly from the command line using the `--lua` flag followed by a string enclosed in quotes containing the specific Lua configuration (or configurations) to set.

For example, the following `--lua` command sets the `enable_builtin_rules` boolean from the `ips` module to `true`:

```
$ snort -c $my_path/lua/snort.lua -R local.rules \
        --lua 'ips.enable_builtin_rules = true'
```

Note that the above `--lua` argument uses _dot notation_ to _extend_ any existing `ips` configuration present in one's Snort configuration file. However, users can also _override_ a given module's configuration using _curly braces_ instead of using dot notation.

The following argument, for example, overrides any existing `ips` configuration with the one specified:

```
$ snort -c $my_path/lua/snort.lua -R local.rules \
        --lua 'ips = { enable_builtin_rules = true }'
```

This above example sets `ips` back to its default settings, but then also sets `enable_builtin_rules` to `true`.

For those that are coming from Snort 2 and have a working 2.x configuration file, building Snort 3 also creates a binary named `snort2lua`, which can take one's old Snort 2 configuration and output one that can be plugged into Snort 3.

Running this command is as easy as invoking the binary followed by a `-c` option that points to the Snort 2 configuration file:

```
$ snort2lua -c snort.conf
```

If any errors occur during the conversion, they will be placed in a `snort.rej` file in the current working directory. Once all errors have been taken care of, `snort2lua` will output a `snort.lua` file that can then be passed directly to Snort 3.