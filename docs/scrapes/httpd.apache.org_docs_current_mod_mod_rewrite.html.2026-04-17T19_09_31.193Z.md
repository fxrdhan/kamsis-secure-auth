[Modules](https://httpd.apache.org/docs/current/mod/) \| [Directives](https://httpd.apache.org/docs/current/mod/directives.html) \| [FAQ](http://wiki.apache.org/httpd/FAQ) \| [Glossary](https://httpd.apache.org/docs/current/glossary.html) \| [Sitemap](https://httpd.apache.org/docs/current/sitemap.html)

Apache HTTP Server Version 2.4

![](https://httpd.apache.org/docs/current/images/feather.png)

[![<-](https://httpd.apache.org/docs/current/images/left.gif)](https://httpd.apache.org/docs/current/mod/)

[Apache](http://www.apache.org/) \> [HTTP Server](http://httpd.apache.org/) \> [Documentation](http://httpd.apache.org/docs/) \> [Version 2.4](https://httpd.apache.org/docs/current/) \> [Modules](https://httpd.apache.org/docs/current/mod/)

# Apache Module mod\_rewrite

Available Languages: [en](https://httpd.apache.org/docs/current/en/mod/mod_rewrite.html "English") \|
[fr](https://httpd.apache.org/docs/current/fr/mod/mod_rewrite.html "Français")

| [Description:](https://httpd.apache.org/docs/current/mod/module-dict.html#Description) | Provides a rule-based rewriting engine to rewrite requested<br>URLs on the fly |
| [Status:](https://httpd.apache.org/docs/current/mod/module-dict.html#Status) | Extension |
| [Module Identifier:](https://httpd.apache.org/docs/current/mod/module-dict.html#ModuleIdentifier) | rewrite\_module |
| [Source File:](https://httpd.apache.org/docs/current/mod/module-dict.html#SourceFile) | mod\_rewrite.c |

### Summary

The `mod_rewrite` module uses a rule-based rewriting
engine, based on a PCRE regular-expression parser, to rewrite requested URLs on
the fly. By default, `mod_rewrite` maps a URL to a filesystem
path. However, it can also be used to redirect one URL to another URL, or
to invoke an internal proxy fetch.

`mod_rewrite` provides a flexible and powerful way to
manipulate URLs using an unlimited number of rules. Each rule can have an
unlimited number of attached rule conditions, to allow you to rewrite URL
based on server variables, environment variables, HTTP headers, or time
stamps.

`mod_rewrite` operates on the full URL path, including the
path-info section. A rewrite rule can be invoked in
`httpd.conf` or in `.htaccess`. The path generated
by a rewrite rule can include a query string, or can lead to internal
sub-processing, external request redirection, or internal proxy
throughput.

A regular expression only needs quoting if it contains unescaped space,
in which case single and double quotes are equivalent.

Further details, discussion, and examples, are provided in the
[detailed mod\_rewrite documentation](https://httpd.apache.org/docs/current/rewrite/).

[![Support Apache!](https://www.apache.org/images/SupportApache-small.png)](https://www.apache.org/foundation/contributing.html)

### Topics

- ![](https://httpd.apache.org/docs/current/images/down.gif)[Logging](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#logging)

### Directives

- ![](https://httpd.apache.org/docs/current/images/down.gif)[RewriteBase](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritebase)
- ![](https://httpd.apache.org/docs/current/images/down.gif)[RewriteCond](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritecond)
- ![](https://httpd.apache.org/docs/current/images/down.gif)[RewriteEngine](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteengine)
- ![](https://httpd.apache.org/docs/current/images/down.gif)[RewriteMap](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritemap)
- ![](https://httpd.apache.org/docs/current/images/down.gif)[RewriteOptions](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions)
- ![](https://httpd.apache.org/docs/current/images/down.gif)[RewriteRule](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriterule)

### Bugfix checklist

- [httpd changelog](https://www.apache.org/dist/httpd/CHANGES_2.4)
- [Known issues](https://bz.apache.org/bugzilla/buglist.cgi?bug_status=__open__&list_id=144532&product=Apache%20httpd-2&query_format=specific&order=changeddate%20DESC%2Cpriority%2Cbug_severity&component=mod_rewrite)
- [Report a bug](https://bz.apache.org/bugzilla/enter_bug.cgi?product=Apache%20httpd-2&component=mod_rewrite)

### See also

- [Comments](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#comments_section)

[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#page-header)

## Logging

`mod_rewrite` offers detailed logging of its actions
at the `trace1` to `trace8` log levels. The
log level can be set specifically for `mod_rewrite`
using the `LogLevel` directive: Up to
level `debug`, no actions are logged, while `trace8`
means that practically all actions are logged.

Using a high trace log level for `mod_rewrite`
will slow down your Apache HTTP Server dramatically! Use a log
level higher than `trace2` only for debugging!


### Example

```config
LogLevel alert rewrite:trace3
```

### RewriteLog

Those familiar with earlier versions of
`mod_rewrite` will no doubt be looking for the
`RewriteLog` and `RewriteLogLevel`
directives. This functionality has been completely replaced by the
new per-module logging configuration mentioned above.


To get just the `mod_rewrite`-specific log
messages, pipe the log file through grep:

`
    tail -f error_log|fgrep '[rewrite:'\
`\
\
[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#page-header)\
\
## RewriteBaseDirective\
\
| [Description:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Description) | Sets the base URL for per-directory rewrites |\
| [Syntax:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Syntax) | `RewriteBase URL-path` |\
| [Default:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Default) | `None` |\
| [Context:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Context) | directory, .htaccess |\
| [Override:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Override) | FileInfo |\
| [Status:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Status) | Extension |\
| [Module:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Module) | mod\_rewrite |\
\
The `RewriteBase` directive specifies the\
URL prefix to be used for per-directory (htaccess)\
`RewriteRule` directives that\
substitute a relative path.\
\
This directive is _required_ when you use a relative path\
in a substitution in per-directory (htaccess) context unless any\
of the following conditions are true:\
\
- The original request, and the substitution, are underneath the\
`DocumentRoot`\
(as opposed to reachable by other means, such as\
`Alias`).\
- The _filesystem_ path to the directory containing the\
`RewriteRule`,\
suffixed by the relative\
substitution is also valid as a URL path on the server\
(this is rare).\
- In Apache HTTP Server 2.4.16 and later, this directive may be\
omitted when the request is mapped via\
`Alias`\
or `mod_userdir`.\
\
In the example below, `RewriteBase` is necessary\
to avoid rewriting to http://example.com/opt/myapp-1.2.3/welcome.html\
since the resource was not relative to the document root. This\
misconfiguration would normally cause the server to look for an "opt"\
directory under the document root.\
\
```config\
DocumentRoot "/var/www/example.com"\
AliasMatch "^/myapp" "/opt/myapp-1.2.3"\
<Directory "/opt/myapp-1.2.3">\
    RewriteEngine On\
    RewriteBase "/myapp/"\
    RewriteRule "^index\.html$"  "welcome.html"\
</Directory>\
```\
\
[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#page-header)\
\
## RewriteCondDirective\
\
| [Description:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Description) | Defines a condition under which rewriting will take place |\
| [Syntax:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Syntax) | ` RewriteCond<br>      TestString CondPattern [flags]` |\
| [Context:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Context) | server config, virtual host, directory, .htaccess |\
| [Override:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Override) | FileInfo |\
| [Status:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Status) | Extension |\
| [Module:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Module) | mod\_rewrite |\
\
The `RewriteCond` directive defines a\
rule condition. One or more `RewriteCond`\
can precede a `RewriteRule`\
directive. The following rule is then only used if both\
the current state of the URI matches its pattern, **and** if these conditions are met.\
\
_TestString_ is a string which can contain the\
following expanded constructs in addition to plain text:\
\
- **RewriteRule backreferences**: These are\
backreferences of the form **`$N`**\
(0 <= N <= 9). $1 to $9 provide access to the grouped\
parts (in parentheses) of the pattern, from the\
`RewriteRule` which is subject to the current\
set of `RewriteCond` conditions. $0 provides\
access to the whole string matched by that pattern.\
\
- **RewriteCond backreferences**: These are\
backreferences of the form **`%N`**\
(0 <= N <= 9). %1 to %9 provide access to the grouped\
parts (again, in parentheses) of the pattern, from the last matched\
`RewriteCond` in the current set\
of conditions. %0 provides access to the whole string matched by\
that pattern.\
\
- **RewriteMap expansions**: These are\
expansions of the form **`${mapname:key|default}`**.\
See [the documentation for\\
RewriteMap](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#mapfunc) for more details.\
\
- **Server-Variables**: These are variables of\
the form\
**`%{` _NAME\_OF\_VARIABLE_`}`**\
where _NAME\_OF\_VARIABLE_ can be a string taken\
from the following list:\
\
\
\
\
| HTTP headers: | connection & request: |  |\
| --- | --- | --- |\
| HTTP\_ACCEPT<br> HTTP\_COOKIE<br> HTTP\_FORWARDED<br> HTTP\_HOST<br> HTTP\_PROXY\_CONNECTION<br> HTTP\_REFERER<br> HTTP\_USER\_AGENT | AUTH\_TYPE<br> CONN\_REMOTE\_ADDR<br> CONTEXT\_PREFIX<br> CONTEXT\_DOCUMENT\_ROOT<br> IPV6<br> PATH\_INFO<br> QUERY\_STRING<br> REMOTE\_ADDR<br> REMOTE\_HOST<br> REMOTE\_IDENT<br> REMOTE\_PORT<br> REMOTE\_USER<br> REQUEST\_METHOD<br> SCRIPT\_FILENAME |  |\
| server internals: | date and time: | specials: |\
| DOCUMENT\_ROOT<br> SCRIPT\_GROUP<br> SCRIPT\_USER<br> SERVER\_ADDR<br> SERVER\_ADMIN<br> SERVER\_NAME<br> SERVER\_PORT<br> SERVER\_PROTOCOL<br> SERVER\_SOFTWARE | TIME\_YEAR<br> TIME\_MON<br> TIME\_DAY<br> TIME\_HOUR<br> TIME\_MIN<br> TIME\_SEC<br> TIME\_WDAY<br> TIME | API\_VERSION<br> CONN\_REMOTE\_ADDR<br> HTTPS<br> IS\_SUBREQ<br> REMOTE\_ADDR<br> REQUEST\_FILENAME<br> REQUEST\_SCHEME<br> REQUEST\_URI<br> THE\_REQUEST |\
\
\
These variables all\
correspond to the similarly named HTTP\
MIME-headers, C variables of the Apache HTTP Server or\
`struct tm` fields of the Unix system.\
Most are documented in the\
[Expressions doc](https://httpd.apache.org/docs/current/expr.html#vars), in the\
[Environment Variables doc](https://httpd.apache.org/docs/current/env.html),\
or the [CGI\\
specification](http://www.ietf.org/rfc/rfc3875).\
\
SERVER\_NAME and SERVER\_PORT depend on the values of\
`UseCanonicalName` and\
`UseCanonicalPhysicalPort`\
respectively.\
\
Those that are special to `mod_rewrite` include those below.\
`API_VERSION`This is the version of the Apache httpd module API\
(the internal interface between server and\
module) in the current httpd build, as defined in\
include/ap\_mmn.h. The module API version\
corresponds to the version of Apache httpd in use (in\
the release version of Apache httpd 1.3.14, for\
instance, it is 19990320:10), but is mainly of\
interest to module authors.`CONN_REMOTE_ADDR`Since 2.4.8: The peer IP address of the connection (see the\
`mod_remoteip` module).`HTTPS`Will contain the text "on" if the connection is\
using SSL/TLS, or "off" otherwise. (This variable\
can be safely used regardless of whether or not\
`mod_ssl` is loaded).`IS_SUBREQ`Will contain the text "true" if the request\
currently being processed is a sub-request,\
"false" otherwise. Sub-requests may be generated\
by modules that need to resolve additional files\
or URIs in order to complete their tasks.`REMOTE_ADDR`The IP address of the remote host (see the\
`mod_remoteip` module).`REQUEST_FILENAME`The full local filesystem path to the file or\
script matching the request, if this has already\
been determined by the server at the time\
`REQUEST_FILENAME` is referenced. Otherwise,\
such as when used in virtual host context, the same\
value as `REQUEST_URI`. Depending on the value of\
`AcceptPathInfo`, the\
server may have only used some leading components of the\
`REQUEST_URI` to map the request to a file.\
`REQUEST_SCHEME`Will contain the scheme of the request (usually\
"http" or "https"). This value can be influenced with\
`ServerName`.`REQUEST_URI`The path component of the requested URI,\
such as "/index.html". This notably excludes the\
query string which is available as its own variable\
named `QUERY_STRING`. The value returned for\
`REQUEST_URI`\
has already been %-decoded, to re-encode it pass it through\
the "escape" [mapping-function](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#mapfunc).\
`THE_REQUEST`The full HTTP request line sent by the\
browser to the server (e.g., "`GET\
                    /index.html HTTP/1.1`"). This does not\
include any additional headers sent by the\
browser. This value has not been unescaped\
(decoded), unlike most other variables below.\
\
If the _TestString_ has the special value `expr`,\
the _CondPattern_ will be treated as an\
[ap\_expr](https://httpd.apache.org/docs/current/expr.html). HTTP headers referenced in the\
expression will be added to the Vary header if the `novary`\
flag is not given.\
\
Other things you should be aware of:\
\
1. The variables SCRIPT\_FILENAME and REQUEST\_FILENAME\
    contain the same value - the value of the\
    `filename` field of the internal\
    `request_rec` structure of the Apache HTTP Server.\
    The first name is the commonly known CGI variable name\
    while the second is the appropriate counterpart of\
    REQUEST\_URI (which contains the value of the\
    `uri` field of `request_rec`).\
\
If a substitution occurred and the rewriting continues,\
    the value of both variables will be updated accordingly.\
\
If used in per-server context ( _i.e._, before the\
    request is mapped to the filesystem) SCRIPT\_FILENAME and\
    REQUEST\_FILENAME cannot contain the full local filesystem\
    path since the path is unknown at this stage of processing.\
    Both variables will initially contain the value of REQUEST\_URI\
    in that case. In order to obtain the full local filesystem\
    path of the request in per-server context, use an URL-based\
    look-ahead `%{LA-U:REQUEST_FILENAME}` to determine\
    the final value of REQUEST\_FILENAME.\
\
2. `%{ENV:variable}`, where _variable_ can be\
    any environment variable, is also available.\
    This is looked-up via internal\
    Apache httpd structures and (if not found there) via\
    `getenv()` from the Apache httpd server process.\
3. `%{SSL:variable}`, where _variable_ is the\
    name of an [SSL environment\\
    variable](https://httpd.apache.org/docs/current/mod/mod_ssl.html#envvars), can be used whether or not\
    `mod_ssl` is loaded, but will always expand to\
    the empty string if it is not. Example:\
    `%{SSL:SSL_CIPHER_USEKEYSIZE}` may expand to\
    `128`. These variables are available even without\
    setting the `StdEnvVars` option of the\
    `SSLOptions` directive.\
4. `%{HTTP:header}`, where _header_ can be\
    any HTTP MIME-header name, can always be used to obtain the\
    value of a header sent in the HTTP request.\
    Example: `%{HTTP:Proxy-Connection}` is\
    the value of the HTTP header\
    \`\``Proxy-Connection:`''.\
\
If a HTTP header is used in a condition this header is added to\
    the Vary header of the response in case the condition evaluates\
    to true for the request. It is **not** added if the\
    condition evaluates to false for the request. Adding the HTTP header\
    to the Vary header of the response is needed for proper caching.\
\
It has to be kept in mind that conditions follow a short circuit\
    logic in the case of the ' **`ornext|OR`**' flag\
    so that certain conditions might not be evaluated at all.\
\
5. `%{LA-U:variable}`\
    can be used for look-aheads which perform\
    an internal (URL-based) sub-request to determine the final\
    value of _variable_. This can be used to access\
    variable for rewriting which is not available at the current\
    stage, but will be set in a later phase.\
\
For instance, to rewrite according to the\
    `REMOTE_USER` variable from within the\
    per-server context (`httpd.conf` file) you must\
    use `%{LA-U:REMOTE_USER}` \- this\
    variable is set by the authorization phases, which come\
    _after_ the URL translation phase (during which\
    `mod_rewrite` operates).\
\
On the other hand, because `mod_rewrite` implements\
    its per-directory context (`.htaccess` file) via\
    the Fixup phase of the API and because the authorization\
    phases come _before_ this phase, you just can use\
    `%{REMOTE_USER}` in that context.\
\
6. `%{LA-F:variable}` can be used to perform an internal\
    (filename-based) sub-request, to determine the final value\
    of _variable_. Most of the time, this is the same as\
    LA-U above.\
\
_CondPattern_ is the condition pattern,\
a regular expression which is applied to the\
current instance of the _TestString_.\
_TestString_ is first evaluated, before being matched against\
_CondPattern_.\
\
_CondPattern_ is usually a\
_perl compatible regular expression_, but there is\
additional syntax available to perform other useful tests against\
the _Teststring_:\
\
1. You can prefix the pattern string with a\
    '`!`' character (exclamation mark) to negate the result\
    of the condition, no matter what kind of _CondPattern_ is used.\
\
2. You can perform lexicographical string comparisons:\
\
    **<CondPattern**Lexicographically precedes\
\
\
    Treats the _CondPattern_ as a plain string and\
    compares it lexicographically to _TestString_. True if\
    _TestString_ lexicographically precedes\
    _CondPattern_.**>CondPattern**Lexicographically follows\
\
\
    Treats the _CondPattern_ as a plain string and\
    compares it lexicographically to _TestString_. True if\
    _TestString_ lexicographically follows\
    _CondPattern_.**=CondPattern**Lexicographically equal\
\
\
    Treats the _CondPattern_ as a plain string and\
    compares it lexicographically to _TestString_. True if\
    _TestString_ is lexicographically equal to\
    _CondPattern_ (the two strings are exactly\
    equal, character for character). If _CondPattern_\
    is `""` (two quotation marks) this\
    compares _TestString_ to the empty string.**<=CondPattern**Lexicographically less than or equal to\
\
\
    Treats the _CondPattern_ as a plain string and\
    compares it lexicographically to _TestString_. True\
    if _TestString_ lexicographically precedes\
    _CondPattern_, or is equal to _CondPattern_\
    (the two strings are equal, character for character).**>=CondPattern**Lexicographically greater than or equal to\
\
\
    Treats the _CondPattern_ as a plain string and\
    compares it lexicographically to _TestString_. True\
    if _TestString_ lexicographically follows\
    _CondPattern_, or is equal to _CondPattern_\
    (the two strings are equal, character for character).\
\
\
### Note\
\
\
    The string comparison operator is part of the _CondPattern_\
    argument and must be included in the quotes if those are used. Eg.\
\
\
\
```config\
RewriteCond %{HTTP_USER_AGENT} "=This Robot/1.0"\
```\
\
3. You can perform integer comparisons:\
    **-eq**Is numerically **eq** ual to\
\
\
    The _TestString_ is treated as an integer, and is\
    numerically compared to the _CondPattern_. True if\
    the two are numerically equal.**-ge**Is numerically **g** reater than or **e** qual to\
\
\
    The _TestString_ is treated as an integer, and is\
    numerically compared to the _CondPattern_. True if\
    the _TestString_ is numerically greater than or equal\
    to the _CondPattern_.**-gt**Is numerically **g** reater **t** han\
\
\
    The _TestString_ is treated as an integer, and is\
    numerically compared to the _CondPattern_. True if\
    the _TestString_ is numerically greater than\
    the _CondPattern_.**-le**Is numerically **l** ess than or **e** qual to\
\
\
    The _TestString_ is treated as an integer, and is\
    numerically compared to the _CondPattern_. True if\
    the _TestString_ is numerically less than or equal\
    to the _CondPattern_. Avoid confusion with the\
    **-l** by using the **-L** or\
    **-h** variant.**-lt**Is numerically **l** ess **t** han\
\
\
    The _TestString_ is treated as an integer, and is\
    numerically compared to the _CondPattern_. True if\
    the _TestString_ is numerically less than\
    the _CondPattern_. Avoid confusion with the\
    **-l** by using the **-L** or\
    **-h** variant.**-ne**Is numerically **n** ot **e** qual to\
\
\
    The _TestString_ is treated as an integer, and is\
    numerically compared to the _CondPattern_. True if\
    the two are numerically different. This is equivalent to\
    `!-eq`.\
4. You can perform various file attribute tests:\
\
\
    **-d**Is **d** irectory.\
\
\
    Treats the _TestString_ as a pathname and tests\
    whether or not it exists, and is a directory.\
    **-f**Is regular **f** ile.\
\
\
\
    Treats the _TestString_ as a pathname and tests\
    whether or not it exists, and is a regular file.\
    **-F**Is existing file, via subrequest.\
\
\
    Checks whether or not _TestString_ is a valid file,\
    accessible via all the server's currently-configured\
    access controls for that path. This uses an internal\
    subrequest to do the check, so use it with care -\
    it can impact your server's performance!\
    **-h**Is symbolic link, bash convention.\
\
\
    See **-l**.\
    **-l**Is symbolic **l** ink.\
\
\
    Treats the _TestString_ as a pathname and tests\
    whether or not it exists, and is a symbolic link. May also\
    use the bash convention of **-L** or\
    **-h** if there's a possibility of confusion\
    such as when using the **-lt** or\
    **-le** tests.\
    **-L**Is symbolic link, bash convention.\
\
\
    See **-l**.**-s**Is regular file, with **s** ize.\
\
\
    Treats the _TestString_ as a pathname and tests\
    whether or not it exists, and is a regular file with size greater\
    than zero.**-U**\
\
Is existing URL, via subrequest.\
\
\
Checks whether or not _TestString_ is a valid URL,\
accessible via all the server's currently-configured\
access controls for that path. This uses an internal\
subrequest to do the check, so use it with care -\
it can impact your server's performance!\
\
\
\
This flag _only_ returns information about things\
like access control, authentication, and authorization. This flag\
_does not_ return information about the status code the\
configured handler (static file, CGI, proxy, etc.) would have\
returned.\
\
**-x**Has e **x** ecutable permissions.\
\
\
    Treats the _TestString_ as a pathname and tests\
    whether or not it exists, and has executable permissions.\
    These permissions are determined according to\
    the underlying OS.\
\
    For example:\
\
\
\
```config\
RewriteCond /var/www/%{REQUEST_URI} !-f\
RewriteRule ^(.+) /other/archive/$1 [R]\
```\
\
5. If the _TestString_ has the special value `expr`, the\
    _CondPattern_ will be treated as an\
    [ap\_expr](https://httpd.apache.org/docs/current/expr.html).\
\
\
    In the below example, `-strmatch` is used to\
    compare the `REFERER` against the site hostname,\
    to block unwanted hotlinking.\
\
\
\
```config\
RewriteCond expr "! %{HTTP_REFERER} -strmatch '*://%{HTTP_HOST}/*'"\
RewriteRule "^/images" "-" [F]\
```\
\
\
You can also set special flags for _CondPattern_ by appending\
**`[` _flags_`]`**\
as the third argument to the `RewriteCond`\
directive, where _flags_ is a comma-separated list of any of the\
following flags:\
\
- ' **`nocase|NC`**'\
( **n** o **c** ase)\
\
\
This makes the test case-insensitive - differences\
between 'A-Z' and 'a-z' are ignored, both in the\
expanded _TestString_ and the _CondPattern_.\
This flag is effective only for comparisons between\
_TestString_ and _CondPattern_. It has no\
effect on filesystem and subrequest checks.\
- ' **`ornext|OR`**'\
( **or** next condition)\
\
\
Use this to combine rule conditions with a local OR\
instead of the implicit AND. Typical example:\
\
\
\
```config\
RewriteCond "%{REMOTE_HOST}"  "^host1"  [OR]\
RewriteCond "%{REMOTE_HOST}"  "^host2"  [OR]\
RewriteCond "%{REMOTE_HOST}"  "^host3"\
RewriteRule ...some special stuff for any of these hosts...\
```\
\
\
\
\
Without this flag you would have to write the condition/rule\
pair three times.\
\
- ' **`novary|NV`**'\
( **n** o **v** ary)\
\
\
If a HTTP header is used in the condition, this flag prevents\
this header from being added to the Vary header of the response.\
\
\
Using this flag might break proper caching of the response if\
the representation of this response varies on the value of this header.\
So this flag should be only used if the meaning of the Vary header\
is well understood.\
\
\
**Example:**\
\
To rewrite the Homepage of a site according to the\
\`\``User-Agent:`'' header of the request, you can\
use the following:\
\
```config\
RewriteCond  "%{HTTP_USER_AGENT}"  "(iPhone|Blackberry|Android)"\
RewriteRule  "^/$"                 "/homepage.mobile.html"  [L]\
\
RewriteRule  "^/$"                 "/homepage.std.html"     [L]\
```\
\
Explanation: If you use a browser which identifies itself\
as a mobile browser (note that the example is incomplete, as\
there are many other mobile platforms), the mobile version of\
the homepage is served. Otherwise, the standard page is served.\
\
\
By default, multiple `RewriteCond`s\
are evaluated in sequence with an implied logical **AND**.\
If a condition fails, in the absence of an\
**`OR`** flag, the entire ruleset is abandoned,\
and further conditions are not evaluated.\
\
\
[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#page-header)\
\
## RewriteEngineDirective\
\
| [Description:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Description) | Enables or disables runtime rewriting engine |\
| [Syntax:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Syntax) | `RewriteEngine on|off` |\
| [Default:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Default) | `RewriteEngine off` |\
| [Context:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Context) | server config, virtual host, directory, .htaccess |\
| [Override:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Override) | FileInfo |\
| [Status:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Status) | Extension |\
| [Module:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Module) | mod\_rewrite |\
\
The `RewriteEngine` directive enables or\
disables the runtime rewriting engine. If it is set to\
`off` this module does no runtime processing at\
all. It does not even update the `SCRIPT_URx`\
environment variables.\
\
Use this directive to disable rules in a particular context,\
rather than commenting out all the `RewriteRule` directives.\
\
Note that rewrite configurations are not\
inherited by virtual hosts. This means that you need to have a\
`RewriteEngine on` directive for each virtual host\
in which you wish to use rewrite rules.\
\
`RewriteMap` directives\
of the type `prg`\
are not started during server initialization if they're defined in a\
context that does not have `RewriteEngine` set to\
`on`\
\
[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#page-header)\
\
## RewriteMapDirective\
\
| [Description:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Description) | Defines a mapping function for key-lookup |\
| [Syntax:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Syntax) | `RewriteMap MapName MapType:MapSource<br>    [MapTypeOptions]<br>` |\
| [Context:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Context) | server config, virtual host |\
| [Status:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Status) | Extension |\
| [Module:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Module) | mod\_rewrite |\
| [Compatibility:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Compatibility) | The 3rd parameter, MapTypeOptions, in only available from Apache<br>2.4.29 and later |\
\
The `RewriteMap` directive defines a\
_Rewriting Map_ which can be used inside rule\
substitution strings by the mapping-functions to\
insert/substitute fields through a key lookup. The source of\
this lookup can be of various types.\
\
The _MapName_ is\
the name of the map and will be used to specify a\
mapping-function for the substitution strings of a rewriting\
rule via one of the following constructs:\
\
**`${` _MapName_`:` _LookupKey_`}`**\
\
**`${` _MapName_`:` _LookupKey_`|` _DefaultValue_`}`**\
\
When such a construct occurs, the map _MapName_ is\
consulted and the key _LookupKey_ is looked-up. If the\
key is found, the map-function construct is substituted by\
_SubstValue_. If the key is not found then it is\
substituted by _DefaultValue_ or by the empty string\
if no _DefaultValue_ was specified. Empty values\
behave as if the key was absent, therefore it is not possible\
to distinguish between empty-valued keys and absent keys.\
\
For example, you might define a\
`RewriteMap` as:\
\
```config\
RewriteMap examplemap "txt:/path/to/file/map.txt"\
```\
\
You would then be able to use this map in a\
`RewriteRule` as follows:\
\
```config\
RewriteRule "^/ex/(.*)" "${examplemap:$1}"\
```\
\
The meaning of the _MapTypeOptions_ argument depends on\
particular _MapType_. See the\
[Using RewriteMap](https://httpd.apache.org/docs/current/rewrite/rewritemap.html) for\
more information.\
\
The following combinations for _MapType_ and\
_MapSource_ can be used:\
\
txtA plain text file containing space-separated key-value\
pairs, one per line. ( [Details ...](https://httpd.apache.org/docs/current/rewrite/rewritemap.html#txt))rndRandomly selects an entry from a plain text file ( [Details ...](https://httpd.apache.org/docs/current/rewrite/rewritemap.html#rnd))dbmLooks up an entry in a dbm file containing name, value\
pairs. Hash is constructed from a plain text file format using\
the `httxt2dbm`\
utility. ( [Details ...](https://httpd.apache.org/docs/current/rewrite/rewritemap.html#dbm))intOne of the four available internal functions provided by\
`RewriteMap`: toupper, tolower, escape or\
unescape. ( [Details ...](https://httpd.apache.org/docs/current/rewrite/rewritemap.html#int))prgCalls an external program or script to process the\
rewriting. ( [Details ...](https://httpd.apache.org/docs/current/rewrite/rewritemap.html#prg))dbd or fastdbdA SQL SELECT statement to be performed to look up the\
rewrite target. ( [Details ...](https://httpd.apache.org/docs/current/rewrite/rewritemap.html#dbd))\
\
Further details, and numerous examples, may be found in the [RewriteMap HowTo](https://httpd.apache.org/docs/current/rewrite/rewritemap.html)\
\
[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#page-header)\
\
## RewriteOptionsDirective\
\
| [Description:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Description) | Sets some special options for the rewrite engine |\
| [Syntax:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Syntax) | `RewriteOptions Options` |\
| [Context:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Context) | server config, virtual host, directory, .htaccess |\
| [Override:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Override) | FileInfo |\
| [Status:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Status) | Extension |\
| [Module:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Module) | mod\_rewrite |\
\
The `RewriteOptions` directive sets some\
special options for the current per-server or per-directory\
configuration. The _Option_ string can currently\
only be one of the following:\
\
`Inherit`\
\
This forces the current configuration to inherit the\
configuration of the parent. In per-virtual-server context,\
this means that the maps, conditions and rules of the main\
server are inherited. In per-directory context this means\
that conditions and rules of the parent directory's\
`.htaccess` configuration or\
`<Directory>`\
sections are inherited. The inherited rules are virtually copied\
to the section where this directive is being used. If used in\
combination with local rules, the inherited rules are copied behind\
the local rules. The position of this directive - below or above\
of local rules - has no influence on this behavior. If local\
rules forced the rewriting to stop, the inherited rules won't\
be processed.\
\
Rules inherited from the parent scope are applied\
**after** rules specified in the child scope.\
\
\
`InheritBefore`\
\
Like `Inherit` above, but the rules from the parent scope\
are applied **before** rules specified in the child scope.\
\
Available in Apache HTTP Server 2.3.10 and later.\
\
`InheritDown`\
\
If this option is enabled, all child configurations will inherit\
the configuration of the current configuration. It is equivalent to\
specifying `RewriteOptions Inherit` in all child\
configurations. See the `Inherit` option for more details\
on how the parent-child relationships are handled.\
\
Available in Apache HTTP Server 2.4.8 and later.\
\
`InheritDownBefore`\
\
Like `InheritDown` above, but the rules from the current\
scope are applied **before** rules specified in any child's\
scope.\
\
Available in Apache HTTP Server 2.4.8 and later.\
\
`IgnoreInherit`\
\
This option forces the current and child configurations to ignore\
all rules that would be inherited from a parent specifying\
`InheritDown` or `InheritDownBefore`.\
\
Available in Apache HTTP Server 2.4.8 and later.\
\
`AllowNoSlash`\
\
By default, `mod_rewrite` will ignore URLs that map to a\
directory on disk but lack a trailing slash, in the expectation that\
the `mod_dir` module will issue the client with a redirect to\
the canonical URL with a trailing slash.\
\
When the `DirectorySlash` directive\
is set to off, the `AllowNoSlash` option can be enabled to ensure\
that rewrite rules are no longer ignored. This option makes it possible to\
apply rewrite rules within .htaccess files that match the directory without\
a trailing slash, if so desired.\
\
Available in Apache HTTP Server 2.4.0 and later.\
\
`AllowAnyURI`\
\
When `RewriteRule`\
is used in `VirtualHost` or server context with\
version 2.2.22 or later of httpd, `mod_rewrite`\
will only process the rewrite rules if the request URI is a [URL-path](https://httpd.apache.org/docs/current/mod/directive-dict.html#Syntax). This avoids\
some security issues where particular rules could allow\
"surprising" pattern expansions (see [CVE-2011-3368](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-3368)\
and [CVE-2011-4317](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-4317)).\
To lift the restriction on matching a URL-path, the\
`AllowAnyURI` option can be enabled, and\
`mod_rewrite` will apply the rule set to any\
request URI string, regardless of whether that string matches\
the URL-path grammar required by the HTTP specification.\
\
Available in Apache HTTP Server 2.4.3 and later.\
\
### Security Warning\
\
Enabling this option will make the server vulnerable to\
security issues if used with rewrite rules which are not\
carefully authored. It is **strongly recommended**\
that this option is not used. In particular, beware of input\
strings containing the '`@`' character which could\
change the interpretation of the transformed URI, as per the\
above CVE names.\
\
`MergeBase`\
\
With this option, the value of `RewriteBase` is copied from where it's explicitly defined\
into any sub-directory or sub-location that doesn't define its own\
`RewriteBase`. This was the\
default behavior in 2.4.0 through 2.4.3, and the flag to restore it is\
available Apache HTTP Server 2.4.4 and later.\
\
`IgnoreContextInfo`\
\
When a relative substitution is made\
in directory (htaccess) context and `RewriteBase` has not been set, this module uses some\
extended URL and filesystem context information to change the\
relative substitution back into a URL. Modules such as\
`mod_userdir` and `mod_alias`\
supply this extended context info. Available in 2.4.16 and later.\
\
`LegacyPrefixDocRoot`\
\
Prior to 2.4.26, if a substitution was an absolute URL that matched\
the current virtual host, the URL might first be reduced to a URL-path\
and then later reduced to a local path. Since the URL can be reduced\
to a local path, the path should be prefixed with the document root.\
This prevents a file such as /tmp/myfile from being accessed when a\
request is made to http://host/file/myfile with the following\
`RewriteRule`.\
\
```config\
RewriteRule /file/(.*) http://localhost/tmp/$1\
```\
\
This option allows the old behavior to be used where the document\
root is not prefixed to a local path that was reduced from a\
URL. Available in 2.4.26 and later.\
\
[![top](https://httpd.apache.org/docs/current/images/up.gif)](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#page-header)\
\
## RewriteRuleDirective\
\
| [Description:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Description) | Defines rules for the rewriting engine |\
| [Syntax:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Syntax) | `RewriteRule<br>      Pattern Substitution [flags]` |\
| [Context:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Context) | server config, virtual host, directory, .htaccess |\
| [Override:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Override) | FileInfo |\
| [Status:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Status) | Extension |\
| [Module:](https://httpd.apache.org/docs/current/mod/directive-dict.html#Module) | mod\_rewrite |\
\
The `RewriteRule` directive is the real\
rewriting workhorse. The directive can occur more than once,\
with each instance defining a single rewrite rule. The\
order in which these rules are defined is important - this is the order\
in which they will be applied at run-time.\
\
_Pattern_ is\
a perl compatible regular\
expression. What this pattern is compared against varies depending\
on where the `RewriteRule` directive is defined.\
\
### What is matched?\
\
- In `VirtualHost` context,\
The _Pattern_ will initially be matched against the part of the\
URL after the hostname and port, and before the query string (e.g. "/app1/index.html").\
This is the (%-decoded) [URL-path](https://httpd.apache.org/docs/current/mod/directive-dict.html#Syntax).\
\
- In per-directory context (`Directory` and .htaccess),\
the _Pattern_ is matched against only a partial path, for example a request\
of "/app1/index.html" may result in comparison against "app1/index.html"\
or "index.html" depending on where the `RewriteRule` is\
defined.\
\
The directory path where the rule is defined is stripped from the currently mapped\
filesystem path before comparison (up to and including a trailing slash).\
The net result of this per-directory prefix stripping is that rules in\
this context only match against the portion of the currently mapped filesystem path\
"below" where the rule is defined.\
\
Directives such as `DocumentRoot` and `Alias`, or even the\
result of previous `RewriteRule` substitutions, determine\
the currently mapped filesystem path.\
\
\
- If you wish to match against the hostname, port, or query string, use a\
`RewriteCond` with the\
`%{HTTP_HOST}`, `%{SERVER_PORT}`, or\
`%{QUERY_STRING}` variables respectively.\
\
\
### Per-directory Rewrites\
\
- The rewrite engine may be used in [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html) files and in `<Directory>` sections, with some additional\
complexity.\
- To enable the rewrite engine in this context, you need to set\
"`RewriteEngine On`" **and**\
"`Options FollowSymLinks`" must be enabled. If your\
administrator has disabled override of `FollowSymLinks` for\
a user's directory, then you cannot use the rewrite engine. This\
restriction is required for security reasons.\
- See the `RewriteBase`\
directive for more information regarding what prefix will be added back to\
relative substitutions.\
- If you wish to match against the full URL-path in a per-directory\
(htaccess) RewriteRule, use the `%{REQUEST_URI}` variable in\
a `RewriteCond`.\
- The removed prefix always ends with a slash, meaning the matching occurs against a string which\
_never_ has a leading slash. Therefore, a _Pattern_ with `^/` never\
matches in per-directory context.\
- Although rewrite rules are syntactically permitted in `<Location>` and `<Files>` sections\
(including their regular expression counterparts), this\
should never be necessary and is unsupported. A likely feature\
to break in these contexts is relative substitutions.\
- The `If` blocks\
follow the rules of the _directory_ context.\
- By default, mod\_rewrite overrides rules when [merging sections](https://httpd.apache.org/docs/current/sections.html#merging) belonging to the same context. The `RewriteOptions` directive can change this behavior,\
for example using the _Inherit_ setting.\
- The `RewriteOptions` also regulates the\
behavior of sections that are stated at the same nesting level of the configuration. In the\
following example, by default only the RewriteRules stated in the second\
`If` block\
are considered, since the first ones are overridden. Using `RewriteOptions` Inherit forces mod\_rewrite to merge the two\
sections and consider both set of statements, rather than only the last one.\
\
```config\
<If "true">\
  # Without RewriteOptions Inherit, this rule is overridden by the next\
  # section and no redirect will happen for URIs containing 'foo'\
  RewriteRule foo http://example.com/foo [R]\
</If>\
<If "true">\
  RewriteRule bar http://example.com/bar [R]\
</If>\
```\
\
For some hints on [regular\\
expressions](https://httpd.apache.org/docs/current/glossary.html#regex "see glossary"), see\
the [mod\_rewrite\\
Introduction](https://httpd.apache.org/docs/current/rewrite/intro.html#regex).\
\
In `mod_rewrite`, the NOT character\
('`!`') is also available as a possible pattern\
prefix. This enables you to negate a pattern; to say, for instance:\
\`\` _if the current URL does **NOT** match this_\
_pattern_''. This can be used for exceptional cases, where\
it is easier to match the negative pattern, or as a last\
default rule.\
\
### Note\
\
When using the NOT character to negate a pattern, you cannot include\
grouped wildcard parts in that pattern. This is because, when the\
pattern does NOT match (ie, the negation matches), there are no\
contents for the groups. Thus, if negated patterns are used, you\
cannot use `$N` in the substitution string!\
\
The _Substitution_ of a\
rewrite rule is the string that replaces the original URL-path that\
was matched by _Pattern_. The _Substitution_ may\
be a:\
\
file-system pathDesignates the location on the file-system of the resource\
to be delivered to the client. Substitutions are only\
treated as a file-system path when the rule is configured in\
server (virtualhost) context and the first component of the\
path in the substitution exists in the file-systemURL-pathA `DocumentRoot`-relative path to the\
resource to be served. Note that `mod_rewrite`\
tries to guess whether you have specified a file-system path\
or a URL-path by checking to see if the first segment of the\
path exists at the root of the file-system. For example, if\
you specify a _Substitution_ string of\
`/www/file.html`, then this will be treated as a\
URL-path _unless_ a directory named `www`\
exists at the root or your file-system (or, in the case of\
using rewrites in a `.htaccess` file, relative to\
your document root), in which case it will\
be treated as a file-system path. If you wish other\
URL-mapping directives (such as `Alias`) to be applied to the\
resulting URL-path, use the `[PT]` flag as\
described below.Absolute URL\
\
If an absolute URL is specified,\
`mod_rewrite` checks to see whether the\
hostname matches the current host. If it does, the scheme and\
hostname are stripped out and the resulting path is treated as\
a URL-path. Otherwise, an external redirect is performed for\
the given URL. To force an external redirect back to the\
current host, see the `[R]` flag below.\
\
Note that a redirect (implicit or not) using an absolute URI\
will include the requested query-string, to prevent this see the\
`[QSD]` flag below.\
\
`-` (dash)A dash indicates that no substitution should be performed\
(the existing path is passed through untouched). This is used\
when a flag (see below) needs to be applied without changing\
the path.\
\
In addition to plain text, the _Substitution_ string can include\
\
1. back-references (`$N`) to the RewriteRule\
    pattern\
2. back-references (`%N`) to the last matched\
    RewriteCond pattern\
3. server-variables as in rule condition test-strings\
    (`%{VARNAME}`)\
4. [mapping-function](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#mapfunc) calls\
    (`${mapname:key|default}`)\
\
Back-references are identifiers of the form\
`$` **N**\
( **N** =0..9), which will be replaced\
by the contents of the **N** th group of the\
matched _Pattern_. The server-variables are the same\
as for the _TestString_ of a\
`RewriteCond`\
directive. The mapping-functions come from the\
`RewriteMap`\
directive and are explained there.\
These three types of variables are expanded in the order above.\
\
Rewrite rules are applied to the results of previous rewrite\
rules, in the order in which they are defined\
in the config file. The URL-path or file-system path (see ["What is matched?"](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#what_is_matched), above) is **completely**\
**replaced** by the _Substitution_ and the\
rewriting process continues until all rules have been applied,\
or it is explicitly terminated by an\
[`L` flag](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_l),\
or other flag which implies immediate termination, such as\
`END` or\
`F`.\
\
### Modifying the Query String\
\
By default, the query string is passed through unchanged. You\
can, however, create URLs in the substitution string containing\
a query string part. Simply use a question mark inside the\
substitution string to indicate that the following text should\
be re-injected into the query string. When you want to erase an\
existing query string, end the substitution string with just a\
question mark. To combine new and old query strings, use the\
`[QSA]` flag.\
\
Additionally you can set special actions to be performed by\
appending **`[` _flags_`]`**\
as the third argument to the `RewriteRule`\
directive. _Flags_ is a comma-separated list, surround by square\
brackets, of any of the flags in the following table. More\
details, and examples, for each flag, are available in the [Rewrite Flags document](https://httpd.apache.org/docs/current/rewrite/flags.html).\
\
| Flag and syntax | Function |\
| --- | --- |\
| B | Escape non-alphanumeric characters in backreferences _before_<br> applying the transformation. For similar escaping of server-variables, see<br> the "escape" [mapping-function](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#mapfunc). _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_b)_ |\
| BCTLS | Like \[B\], but only escape control characters and spaces.<br> _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_bctls)_ |\
| BNE | Characters of \[B\] or \[BCTLS\] which should **not** be escaped.<br> _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_bne)_ |\
| backrefnoplus\|BNP | If backreferences are being escaped, spaces should be escaped to<br> %20 instead of +. Useful when the backreference will be used in the<br> path component rather than the query string. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_bnp)_ |\
| chain\|C | Rule is chained to the following rule. If the rule fails,<br> the rule(s) chained to it will be skipped. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_c)_ |\
| cookie\|CO= _NAME_: _VAL_ | Sets a cookie in the client browser. Full syntax is:<br> CO= _NAME_: _VAL_: _domain_\[: _lifetime_\[: _path_\[: _secure_\[: _httponly_\[ _samesite_\]\]\]\]\] _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_co)_ |\
| discardpath\|DPI | Causes the PATH\_INFO portion of the rewritten URI to be<br> discarded. _[details\_<br>_...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_dpi)_ |\
| END | Stop the rewriting process immediately and don't apply any<br> more rules. Also prevents further execution of rewrite rules<br> in per-directory and .htaccess context. (Available in 2.3.9 and later)<br> _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_end)_ |\
| env\|E=\[!\] _VAR_\[: _VAL_\] | Causes an environment variable _VAR_ to be set (to the<br> value _VAL_ if provided). The form ! _VAR_ causes<br> the environment variable _VAR_ to be unset.<br> _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_e)_ |\
| forbidden\|F | Returns a 403 FORBIDDEN response to the client browser.<br> _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_f)_ |\
| gone\|G | Returns a 410 GONE response to the client browser. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_g)_ |\
| Handler\|H= _Content-handler_ | Causes the resulting URI to be sent to the specified<br> _Content-handler_ for processing. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_h)_ |\
| last\|L | Stop the rewriting process immediately and don't apply any<br> more rules. Especially note caveats for per-directory and<br> .htaccess context (see also the END flag). _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_l)_ |\
| next\|N | Re-run the rewriting process, starting again with the first<br> rule, using the result of the ruleset so far as a starting<br> point. _[details\_<br>_...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_n)_ |\
| nocase\|NC | Makes the pattern comparison case-insensitive.<br> _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_nc)_ |\
| noescape\|NE | Prevent mod\_rewrite from applying hexcode escaping of<br> special characters in the result of rewrites that result in <br> redirection. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_ne)_ |\
| nosubreq\|NS | Causes a rule to be skipped if the current request is an<br> internal sub-request. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_ns)_ |\
| proxy\|P | Force the substitution URL to be internally sent as a proxy<br> request. _[details\_<br>_...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_p)_ |\
| passthrough\|PT | Forces the resulting URI to be passed back to the URL<br> mapping engine for processing of other URI-to-filename<br> translators, such as `Alias` or<br> `Redirect`. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_pt)_ |\
| qsappend\|QSA | Appends any query string from the original request URL to<br> any query string created in the rewrite target. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_qsa)_ |\
| qsdiscard\|QSD | Discard any query string attached to the incoming URI.<br> _[details\_<br>_...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_qsd)_ |\
| qslast\|QSL | Interpret the last (right-most) question mark as the query string<br> delimiter, instead of the first (left-most) as normally used. <br> Available in 2.4.19 and later.<br> _[details\_<br>_...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_qsl)_ |\
| redirect\|R\[= _code_\] | Forces an external redirect, optionally with the specified<br> HTTP status code. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_r)_ |\
| skip\|S= _num_ | Tells the rewriting engine to skip the next _num_<br> rules if the current rule matches. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_s)_ |\
| type\|T= _MIME-type_ | Force the [MIME-type](https://httpd.apache.org/docs/current/glossary.html#mime-type "see glossary") of the target file<br> to be the specified type. _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_t)_ |\
| UnsafeAllow3F | Allows substitutions from URL's that may be unsafe.<br> _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_unsafe_allow_3f)_ |\
| UnsafePrefixStat | Allows potentially unsafe substitutions from a leading variable or backreference to a filesystem path.<br> _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_unsafe_prefix_stat)_<br> Available in Apache HTTP Server 2.4.60 and later. |\
| UNC | Prevents the merging of multiple leading slashes, as used by Windows UNC paths.<br> _[details ...](https://httpd.apache.org/docs/current/rewrite/flags.html#flag_unc)_<br> Available in Apache HTTP Server 2.4.62 and later. |\
\
### Home directory expansion\
\
When the substitution string begins with a string\
resembling "/~user" (via explicit text or backreferences), `mod_rewrite` performs\
home directory expansion independent of the presence or configuration\
of `mod_userdir`.\
\
This expansion does not occur when the _PT_\
flag is used on the `RewriteRule`\
directive.\
\
Here are all possible substitution combinations and their\
meanings:\
\
**Inside per-server configuration**\
**(`httpd.conf`)**\
\
**for request \`\``GET**\
**/somepath/pathinfo`'':**\
\
| Given Rule | Resulting Substitution |\
| --- | --- |\
| ^/somepath(.\*) otherpath$1 | invalid, not supported |\
| ^/somepath(.\*) otherpath$1 \[R\] | invalid, not supported |\
| ^/somepath(.\*) otherpath$1 \[P\] | invalid, not supported |\
| ^/somepath(.\*) /otherpath$1 | /otherpath/pathinfo |\
| ^/somepath(.\*) /otherpath$1 \[R\] | http://thishost/otherpath/pathinfo via external redirection |\
| ^/somepath(.\*) /otherpath$1 \[P\] | doesn't make sense, not supported |\
| ^/somepath(.\*) http://thishost/otherpath$1 | /otherpath/pathinfo |\
| ^/somepath(.\*) http://thishost/otherpath$1 \[R\] | http://thishost/otherpath/pathinfo via external redirection |\
| ^/somepath(.\*) http://thishost/otherpath$1 \[P\] | doesn't make sense, not supported |\
| ^/somepath(.\*) http://otherhost/otherpath$1 | http://otherhost/otherpath/pathinfo via external redirection |\
| ^/somepath(.\*) http://otherhost/otherpath$1 \[R\] | http://otherhost/otherpath/pathinfo via external redirection (the \[R\] flag is redundant) |\
| ^/somepath(.\*) http://otherhost/otherpath$1 \[P\] | http://otherhost/otherpath/pathinfo via internal proxy |\
\
**Inside per-directory configuration for**\
**`/somepath`**\
\
**(`/physical/path/to/somepath/.htaccess`, with**\
**`RewriteBase "/somepath"`)**\
\
**for request \`\``GET**\
**/somepath/localpath/pathinfo`'':**\
\
| Given Rule | Resulting Substitution |\
| --- | --- |\
| ^localpath(.\*) otherpath$1 | /somepath/otherpath/pathinfo |\
| ^localpath(.\*) otherpath$1 \[R\] | http://thishost/somepath/otherpath/pathinfo via external<br>redirection |\
| ^localpath(.\*) otherpath$1 \[P\] | doesn't make sense, not supported |\
| ^localpath(.\*) /otherpath$1 | /otherpath/pathinfo |\
| ^localpath(.\*) /otherpath$1 \[R\] | http://thishost/otherpath/pathinfo via external redirection |\
| ^localpath(.\*) /otherpath$1 \[P\] | doesn't make sense, not supported |\
| ^localpath(.\*) http://thishost/otherpath$1 | /otherpath/pathinfo |\
| ^localpath(.\*) http://thishost/otherpath$1 \[R\] | http://thishost/otherpath/pathinfo via external redirection |\
| ^localpath(.\*) http://thishost/otherpath$1 \[P\] | doesn't make sense, not supported |\
| ^localpath(.\*) http://otherhost/otherpath$1 | http://otherhost/otherpath/pathinfo via external redirection |\
| ^localpath(.\*) http://otherhost/otherpath$1 \[R\] | http://otherhost/otherpath/pathinfo via external redirection (the \[R\] flag is redundant) |\
| ^localpath(.\*) http://otherhost/otherpath$1 \[P\] | http://otherhost/otherpath/pathinfo via internal proxy |\
\
Available Languages: [en](https://httpd.apache.org/docs/current/en/mod/mod_rewrite.html "English") \|\
[fr](https://httpd.apache.org/docs/current/fr/mod/mod_rewrite.html "Français")\
\
Copyright 2026 The Apache Software Foundation.\
\
Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).\
\
[Modules](https://httpd.apache.org/docs/current/mod/) \| [Directives](https://httpd.apache.org/docs/current/mod/directives.html) \| [FAQ](http://wiki.apache.org/httpd/FAQ) \| [Glossary](https://httpd.apache.org/docs/current/glossary.html) \| [Sitemap](https://httpd.apache.org/docs/current/sitemap.html)