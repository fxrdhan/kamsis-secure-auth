[Modules](https://httpd.apache.org/docs/current/mod/) \| [Directives](https://httpd.apache.org/docs/current/mod/directives.html) \| [FAQ](http://wiki.apache.org/httpd/FAQ) \| [Glossary](https://httpd.apache.org/docs/current/glossary.html) \| [Sitemap](https://httpd.apache.org/docs/current/sitemap.html)

Apache HTTP Server Version 2.4

![](https://httpd.apache.org/docs/current/images/feather.png)

[![<-](https://httpd.apache.org/docs/current/images/left.gif)](https://httpd.apache.org/docs/current/)

[Apache](http://www.apache.org/) \> [HTTP Server](http://httpd.apache.org/) \> [Documentation](http://httpd.apache.org/docs/) \> [Version 2.4](https://httpd.apache.org/docs/current/)

# Server-Wide Configuration

Available Languages: [en](https://httpd.apache.org/docs/current/en/server-wide.html "English") \|
[fr](https://httpd.apache.org/docs/current/fr/server-wide.html "Français") \|
[ja](https://httpd.apache.org/docs/current/ja/server-wide.html "Japanese") \|
[ko](https://httpd.apache.org/docs/current/ko/server-wide.html "Korean") \|
[tr](https://httpd.apache.org/docs/current/tr/server-wide.html "Türkçe")

This document explains some of the directives provided by
the `core` server which are used to configure
the basic operations of the server.

[![Support Apache!](https://www.apache.org/images/SupportApache-small.png)](https://www.apache.org/foundation/contributing.html)

- ![](https://httpd.apache.org/docs/current/images/down.gif)[Server Identification](https://httpd.apache.org/docs/current/server-wide.html#identification)
- ![](https://httpd.apache.org/docs/current/images/down.gif)[File Locations](https://httpd.apache.org/docs/current/server-wide.html#locations)
- ![](https://httpd.apache.org/docs/current/images/down.gif)[Limiting Resource Usage](https://httpd.apache.org/docs/current/server-wide.html#resource)
- ![](https://httpd.apache.org/docs/current/images/down.gif)[Implementation Choices](https://httpd.apache.org/docs/current/server-wide.html#implementation)

### See also

- [Comments](https://httpd.apache.org/docs/current/server-wide.html#comments_section)

[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/server-wide.html#page-header)

## Server Identification

| Related Modules | Related Directives |
| --- | --- |
|  | - `ServerName`<br>- `ServerAdmin`<br>- `ServerSignature`<br>- `ServerTokens`<br>- `UseCanonicalName`<br>- `UseCanonicalPhysicalPort` |

The `ServerAdmin` and
`ServerTokens` directives
control what information about the server will be presented
in server-generated documents such as error messages. The
`ServerTokens` directive
sets the value of the Server HTTP response header field.

The `ServerName`,
`UseCanonicalName` and
`UseCanonicalPhysicalPort`
directives are used by the server to determine how to construct
self-referential URLs. For example, when a client requests a
directory, but does not include the trailing slash in the
directory name, httpd must redirect the client to the full
name including the trailing slash so that the client will
correctly resolve relative references in the document.

[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/server-wide.html#page-header)

## File Locations

| Related Modules | Related Directives |
| --- | --- |
|  | - `CoreDumpDirectory`<br>- `DocumentRoot`<br>- `ErrorLog`<br>- `Mutex`<br>- `PidFile`<br>- `ScoreBoardFile`<br>- `ServerRoot` |

These directives control the locations of the various files
that httpd needs for proper operation. When the pathname used
does not begin with a slash (/), the files are located relative
to the `ServerRoot`. Be careful
about locating files in paths which are writable by non-root users.
See the [security tips](https://httpd.apache.org/docs/current/misc/security_tips.html#serverroot)
documentation for more details.

[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/server-wide.html#page-header)

## Limiting Resource Usage

| Related Modules | Related Directives |
| --- | --- |
|  | - `LimitRequestBody`<br>- `LimitRequestFields`<br>- `LimitRequestFieldsize`<br>- `LimitRequestLine`<br>- `RLimitCPU`<br>- `RLimitMEM`<br>- `RLimitNPROC`<br>- `ThreadStackSize` |

The `LimitRequest`\*
directives are used to place limits on the amount of resources
httpd will use in reading requests from clients. By limiting
these values, some kinds of denial of service attacks can be
mitigated.

The `RLimit`\\* directives
are used to limit the amount of resources which can be used by
processes forked off from the httpd children. In particular,
this will control resources used by CGI scripts and SSI exec
commands.

The `ThreadStackSize`
directive is used with some platforms to control the stack size.

[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/server-wide.html#page-header)

## Implementation Choices

| Related Modules | Related Directives |
| --- | --- |
|  | - `Mutex` |

The `Mutex` directive can be used to change
the underlying implementation used for mutexes, in order to relieve
functional or performance problems with [APR](https://httpd.apache.org/docs/current/glossary.html#apr "see glossary")'s
default choice.

Available Languages: [en](https://httpd.apache.org/docs/current/en/server-wide.html "English") \|
[fr](https://httpd.apache.org/docs/current/fr/server-wide.html "Français") \|
[ja](https://httpd.apache.org/docs/current/ja/server-wide.html "Japanese") \|
[ko](https://httpd.apache.org/docs/current/ko/server-wide.html "Korean") \|
[tr](https://httpd.apache.org/docs/current/tr/server-wide.html "Türkçe")

Copyright 2026 The Apache Software Foundation.

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

[Modules](https://httpd.apache.org/docs/current/mod/) \| [Directives](https://httpd.apache.org/docs/current/mod/directives.html) \| [FAQ](http://wiki.apache.org/httpd/FAQ) \| [Glossary](https://httpd.apache.org/docs/current/glossary.html) \| [Sitemap](https://httpd.apache.org/docs/current/sitemap.html)