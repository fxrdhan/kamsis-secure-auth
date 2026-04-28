[Skip to Main Content](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#main)

[Hide Sidebar](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html "Hide Sidebar")

[Previous: Postinstallation Setup and Testing](https://dev.mysql.com/doc/refman/8.4/en/postinstallation.html "Previous: Postinstallation Setup and Testing")[Start](https://dev.mysql.com/doc/refman/8.4/en/index.html "Start")[Up: Postinstallation Setup and Testing](https://dev.mysql.com/doc/refman/8.4/en/postinstallation.html "Up: Postinstallation Setup and Testing")[Next: Starting the Server](https://dev.mysql.com/doc/refman/8.4/en/starting-server.html "Next: Starting the Server")

[Documentation Home](https://dev.mysql.com/doc/)

* * *

MySQL 8.4 Reference Manual

[Related Documentation](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html)

[MySQL 8.4 Release Notes](https://dev.mysql.com/doc/relnotes/mysql/8.4/en/)

[Download\\
this Manual](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html)

[PDF (US Ltr)](https://downloads.mysql.com/docs/refman-8.4-en.pdf)
\- 40.2Mb

[PDF (A4)](https://downloads.mysql.com/docs/refman-8.4-en.a4.pdf)
\- 40.3Mb

[Man Pages (TGZ)](https://downloads.mysql.com/docs/refman-8.4-en.man-gpl.tar.gz)
\- 262.1Kb

[Man Pages (Zip)](https://downloads.mysql.com/docs/refman-8.4-en.man-gpl.zip)
\- 367.7Kb

[Info (Gzip)](https://downloads.mysql.com/docs/mysql-8.4.info.gz)
\- 4.0Mb

[Info (Zip)](https://downloads.mysql.com/docs/mysql-8.4.info.zip)
\- 4.0Mb

[version 8.4](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html)

[9.7\\
current](https://dev.mysql.com/doc/refman/9.7/en/data-directory-initialization.html)

[9.6](https://dev.mysql.com/doc/refman/9.6/en/data-directory-initialization.html)

[9.5](https://dev.mysql.com/doc/refman/9.5/en/data-directory-initialization.html)

[9.4](https://dev.mysql.com/doc/refman/9.4/en/data-directory-initialization.html)

[9.3](https://dev.mysql.com/doc/refman/9.3/en/data-directory-initialization.html)

[9.2](https://dev.mysql.com/doc/refman/9.2/en/data-directory-initialization.html)

[9.1](https://dev.mysql.com/doc/refman/9.1/en/data-directory-initialization.html)

[9.0](https://dev.mysql.com/doc/refman/9.0/en/data-directory-initialization.html)

[8.0](https://dev.mysql.com/doc/refman/8.0/en/data-directory-initialization.html)

[5.7](https://dev.mysql.com/doc/refman/5.7/en/data-directory-initialization.html)

[8.0 \\
Japanese](https://dev.mysql.com/doc/refman/8.0/ja/data-directory-initialization.html)

[Show Sidebar](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html "Show Sidebar")

[MySQL 8.4 Reference Manual](https://dev.mysql.com/doc/refman/8.4/en/)  /
[...](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html)  / [Installing MySQL](https://dev.mysql.com/doc/refman/8.4/en/installing.html)  /
[Postinstallation Setup and Testing](https://dev.mysql.com/doc/refman/8.4/en/postinstallation.html)  /

Initializing the Data Directory


### 2.9.1 Initializing the Data Directory

After MySQL is installed, the data directory must be initialized,
including the tables in the `mysql` system
schema:

- For some MySQL installation methods, data directory
initialization is automatic, as described in
[Section 2.9, “Postinstallation Setup and Testing”](https://dev.mysql.com/doc/refman/8.4/en/postinstallation.html "2.9 Postinstallation Setup and Testing").


- For other installation methods, you must initialize the data
directory manually. These include installation from generic
binary and source distributions on Unix and Unix-like systems,
and installation from a ZIP Archive package on Windows.


This section describes how to initialize the data directory
manually for MySQL installation methods for which data directory
initialization is not automatic. For some suggested commands that
enable testing whether the server is accessible and working
properly, see [Section 2.9.3, “Testing the Server”](https://dev.mysql.com/doc/refman/8.4/en/testing-server.html "2.9.3 Testing the Server").

Note

The default authentication plugin is
`caching_sha2_password`, and the
`'root'@'localhost'` administrative account
uses `caching_sha2_password` by default.


[mysql\_native\_password](https://dev.mysql.com/doc/refman/8.4/en/native-pluggable-authentication.html "8.4.1.1 Native Pluggable Authentication")
(the default authentication plugin prior to MySQL 8.0) is still
supported but disabled by default as of MySQL 8.4.0 and removed
as of MySQL 9.0.0.

- [Data Directory Initialization Overview](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#data-directory-initialization-overview "Data Directory Initialization Overview")

- [Data Directory Initialization Procedure](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#data-directory-initialization-procedure "Data Directory Initialization Procedure")

- [Server Actions During Data Directory Initialization](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#data-directory-initialization-server-actions "Server Actions During Data Directory Initialization")

- [Post-Initialization root Password Assignment](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#data-directory-initialization-password-assignment "Post-Initialization root Password Assignment")


#### Data Directory Initialization Overview

In the examples shown here, the server is intended to run under
the user ID of the `mysql` login account.
Either create the account if it does not exist (see
[Create a mysql User and Group](https://dev.mysql.com/doc/refman/8.4/en/binary-installation.html#binary-installation-createsysuser "Create a mysql User and Group")), or
substitute the name of a different existing login account that
you plan to use for running the server.

1. Change location to the top-level directory of your MySQL
    installation, which is typically
    `/usr/local/mysql` (adjust the path name
    for your system as necessary):




```terminal
Press CTRL+C to copy


cd /usr/local/mysql
```




    Within this directory you can find several files and
    subdirectories, including the `bin`
    subdirectory that contains the server, as well as client and
    utility programs.


2. The [`secure_file_priv`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_secure_file_priv) system
    variable limits import and export operations to a specific
    directory. Create a directory whose location can be
    specified as the value of that variable:




```terminal
Press CTRL+C to copy


mkdir mysql-files
```




    Grant directory user and group ownership to the
    `mysql` user and `mysql`
    group, and set the directory permissions appropriately:




```terminal
Press CTRL+C to copy


chown mysql:mysql mysql-files
chmod 750 mysql-files
```

3. Use the server to initialize the data directory, including
    the `mysql` schema containing the initial
    MySQL grant tables that determine how users are permitted to
    connect to the server. For example:




```terminal
Press CTRL+C to copy


bin/mysqld --initialize --user=mysql
```




    For important information about the command, especially
    regarding command options you might use, see
    [Data Directory Initialization Procedure](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#data-directory-initialization-procedure "Data Directory Initialization Procedure").
    For details about how the server performs initialization,
    see
    [Server Actions During Data Directory Initialization](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#data-directory-initialization-server-actions "Server Actions During Data Directory Initialization").



    Typically, data directory initialization need be done only
    after you first install MySQL. (For upgrades to an existing
    installation, perform the upgrade procedure instead; see
    [Chapter 3, _Upgrading MySQL_](https://dev.mysql.com/doc/refman/8.4/en/upgrading.html "Chapter 3 Upgrading MySQL").) However, the command that
    initializes the data directory does not overwrite any
    existing `mysql` schema tables, so it is
    safe to run in any circumstances.


4. In the absence of any option files, the server starts with
    its default settings. (See
    [Section 7.1.2, “Server Configuration Defaults”](https://dev.mysql.com/doc/refman/8.4/en/server-configuration-defaults.html "7.1.2 Server Configuration Defaults").) To
    explicitly specify options that the MySQL server should use
    at startup, put them in an option file such as
    `/etc/my.cnf` or
    `/etc/mysql/my.cnf`. (See
    [Section 6.2.2.2, “Using Option Files”](https://dev.mysql.com/doc/refman/8.4/en/option-files.html "6.2.2.2 Using Option Files").) For example, you can use an
    option file to set the
    [`secure_file_priv`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_secure_file_priv) system
    variable.


5. To arrange for MySQL to start without manual intervention at
    system boot time, see [Section 2.9.5, “Starting and Stopping MySQL Automatically”](https://dev.mysql.com/doc/refman/8.4/en/automatic-start.html "2.9.5 Starting and Stopping MySQL Automatically").


6. Data directory initialization creates time zone tables in
    the `mysql` schema but does not populate
    them. To do so, use the instructions in
    [Section 7.1.15, “MySQL Server Time Zone Support”](https://dev.mysql.com/doc/refman/8.4/en/time-zone-support.html "7.1.15 MySQL Server Time Zone Support").


#### Data Directory Initialization Procedure

Change location to the top-level directory of your MySQL
installation, which is typically
`/usr/local/mysql` (adjust the path name for
your system as necessary):


```terminal
Press CTRL+C to copy


cd /usr/local/mysql
```

To initialize the data directory, invoke
[**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server") with the
[`--initialize`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize) or
[`--initialize-insecure`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure) option,
depending on whether you want the server to generate a random
initial password for the `'root'@'localhost'`
account, or to create that account with no password:

- Use [`--initialize`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize) for
“secure by default” installation (that is,
including generation of a random initial
`root` password). In this case, the
password is marked as expired and you must choose a new one.


- With [`--initialize-insecure`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure),
no `root` password is generated. This is
insecure; it is assumed that you intend to assign a password
to the account in a timely fashion before putting the server
into production use.


For instructions on assigning a new
`'root'@'localhost'` password, see
[Post-Initialization root Password Assignment](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#data-directory-initialization-password-assignment "Post-Initialization root Password Assignment").

Note

The server writes any messages (including any initial
password) to its standard error output. This may be redirected
to the error log, so look there if you do not see the messages
on your screen. For information about the error log, including
where it is located, see [Section 7.4.2, “The Error Log”](https://dev.mysql.com/doc/refman/8.4/en/error-log.html "7.4.2 The Error Log").


On Windows, use the [`--console`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_console)
option to direct messages to the console.

On Unix and Unix-like systems, it is important for the database
directories and files to be owned by the
`mysql` login account so that the server has
read and write access to them when you run it later. To ensure
this, start [**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server") from the system
`root` account and include the
[`--user`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_user) option as shown here:


```terminal
Press CTRL+C to copy


bin/mysqld --initialize --user=mysql
bin/mysqld --initialize-insecure --user=mysql
```

Alternatively, execute [**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server") while logged in
as `mysql`, in which case you can omit the
[`--user`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_user) option from the command.


On Windows, use one of these commands:


```terminal
Press CTRL+C to copy


bin\mysqld --initialize --console
bin\mysqld --initialize-insecure --console
```

Note

Data directory initialization might fail if required system
libraries are missing. For example, you might see an error
like this:


```terminal
Press CTRL+C to copy


bin/mysqld: error while loading shared libraries:
libnuma.so.1: cannot open shared object file:
No such file or directory
```

If this happens, you must install the missing libraries
manually or with your system's package manager. Then
retry the data directory initialization command.

It might be necessary to specify other options such as
[`--basedir`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_basedir) or
[`--datadir`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_datadir) if
[**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server") cannot identify the correct locations
for the installation directory or data directory. For example
(enter the command on a single line):


```terminal
Press CTRL+C to copy


bin/mysqld --initialize --user=mysql
  --basedir=/opt/mysql/mysql
  --datadir=/opt/mysql/mysql/data
```

Alternatively, put the relevant option settings in an option
file and pass the name of that file to
[**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server"). For Unix and Unix-like systems,
suppose that the option file name is
`/opt/mysql/mysql/etc/my.cnf`. Put these
lines in the file:


```ini
Press CTRL+C to copy


[mysqld]
basedir=/opt/mysql/mysql
datadir=/opt/mysql/mysql/data
```

Then invoke [**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server") as follows (enter the
command on a single line, with the
[`--defaults-file`](https://dev.mysql.com/doc/refman/8.4/en/option-file-options.html#option_general_defaults-file) option first):


```terminal
Press CTRL+C to copy


bin/mysqld --defaults-file=/opt/mysql/mysql/etc/my.cnf
  --initialize --user=mysql
```

On Windows, suppose that `C:\my.ini` contains
these lines:


```ini
Press CTRL+C to copy


[mysqld]
basedir=C:\\Program Files\\MySQL\\MySQL Server 8.4
datadir=D:\\MySQLdata
```

Then invoke [**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server") as follows (again, you
should enter the command on a single line, with the
[`--defaults-file`](https://dev.mysql.com/doc/refman/8.4/en/option-file-options.html#option_general_defaults-file) option first):


```terminal
Press CTRL+C to copy


bin\mysqld --defaults-file=C:\my.ini
   --initialize --console
```

Important

When initializing the data directory, you should not specify
any options other than those used for setting directory
locations such as [`--basedir`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_basedir) or
[`--datadir`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_datadir), and the
[`--user`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_user) option if needed.
Options to be employed by the MySQL server during normal use
can be set when restarting it following initialization. See
the description of the
[`--initialize`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize) option for further
information.

#### Server Actions During Data Directory Initialization

Note

The data directory initialization sequence performed by the
server does not substitute for the actions performed by
[**mysql\_secure\_installation**](https://dev.mysql.com/doc/refman/8.4/en/mysql-secure-installation.html "6.4.2 mysql_secure_installation — Improve MySQL Installation Security").

When invoked with the
[`--initialize`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize) or
[`--initialize-insecure`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure) option,
[**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server") performs the following actions during
the data directory initialization sequence:

1. The server checks for the existence of the data directory as
    follows:




   - If no data directory exists, the server creates it.


   - If the data directory exists but is not empty (that is,
      it contains files or subdirectories), the server exits
      after producing an error message:




     ```none
     Press CTRL+C to copy


     [ERROR] --initialize specified but the data directory exists. Aborting.
     ```




      In this case, remove or rename the data directory and
      try again.



      An existing data directory is permitted to be nonempty
      if every entry has a name that begins with a period
      (`.`).


2. Within the data directory, the server creates the
    `mysql` system schema and its tables,
    including the data dictionary tables, grant tables, time
    zone tables, and server-side help tables. See
    [Section 7.3, “The mysql System Schema”](https://dev.mysql.com/doc/refman/8.4/en/system-schema.html "7.3 The mysql System Schema").


3. The server initializes the
    [system\\
    tablespace](https://dev.mysql.com/doc/refman/8.4/en/glossary.html#glos_system_tablespace "system tablespace") and related data structures needed to
    manage [`InnoDB`](https://dev.mysql.com/doc/refman/8.4/en/innodb-storage-engine.html "Chapter 17 The InnoDB Storage Engine") tables.





Note





After [**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server") sets up the
`InnoDB` [system\\
tablespace](https://dev.mysql.com/doc/refman/8.4/en/glossary.html#glos_system_tablespace "system tablespace"), certain changes to tablespace
characteristics require setting up a whole new
[instance](https://dev.mysql.com/doc/refman/8.4/en/glossary.html#glos_instance "instance"). Qualifying
changes include the file name of the first file in the
system tablespace and the number of undo logs. If you do
not want to use the default values, make sure that the
settings for the
[`innodb_data_file_path`](https://dev.mysql.com/doc/refman/8.4/en/innodb-parameters.html#sysvar_innodb_data_file_path) and
[`innodb_log_file_size`](https://dev.mysql.com/doc/refman/8.4/en/innodb-parameters.html#sysvar_innodb_log_file_size)
configuration parameters are in place in the MySQL
[configuration\\
file](https://dev.mysql.com/doc/refman/8.4/en/glossary.html#glos_configuration_file "configuration file") _before_ running
[**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server"). Also make sure to specify as
necessary other parameters that affect the creation and
location of `InnoDB` files, such as
[`innodb_data_home_dir`](https://dev.mysql.com/doc/refman/8.4/en/innodb-parameters.html#sysvar_innodb_data_home_dir) and
[`innodb_log_group_home_dir`](https://dev.mysql.com/doc/refman/8.4/en/innodb-parameters.html#sysvar_innodb_log_group_home_dir).





If those options are in your configuration file but that
file is not in a location that MySQL reads by default,
specify the file location using the
[`--defaults-extra-file`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_defaults-extra-file)
option when you run [**mysqld**](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html "6.3.1 mysqld — The MySQL Server").

4. The server creates a `'root'@'localhost'`
    superuser account and other reserved accounts (see
    [Section 8.2.9, “Reserved Accounts”](https://dev.mysql.com/doc/refman/8.4/en/reserved-accounts.html "8.2.9 Reserved Accounts")). Some reserved accounts
    are locked and cannot be used by clients, but
    `'root'@'localhost'` is intended for
    administrative use and you should assign it a password.



    Server actions with respect to a password for the
    `'root'@'localhost'` account depend on how
    you invoke it:




   - With [`--initialize`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize) but not
      [`--initialize-insecure`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure),
      the server generates a random password, marks it as
      expired, and writes a message displaying the password:




     ```none
     Press CTRL+C to copy


     [Warning] A temporary password is generated for root@localhost:
     iTag*AfrH5ej
     ```

   - With
      [`--initialize-insecure`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure),
      (either with or without
      [`--initialize`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize) because
      [`--initialize-insecure`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure)
      implies [`--initialize`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize)),
      the server does not generate a password or mark it
      expired, and writes a warning message:




     ```none
     Press CTRL+C to copy


     [Warning] root@localhost is created with an empty password ! Please
     consider switching off the --initialize-insecure option.
     ```


For instructions on assigning a new
`'root'@'localhost'` password, see
[Post-Initialization root Password Assignment](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#data-directory-initialization-password-assignment "Post-Initialization root Password Assignment").


5. The server populates the server-side help tables used for
    the [`HELP`](https://dev.mysql.com/doc/refman/8.4/en/help.html "15.8.3 HELP Statement") statement (see
    [Section 15.8.3, “HELP Statement”](https://dev.mysql.com/doc/refman/8.4/en/help.html "15.8.3 HELP Statement")). The server does not populate the
    time zone tables. To do so manually, see
    [Section 7.1.15, “MySQL Server Time Zone Support”](https://dev.mysql.com/doc/refman/8.4/en/time-zone-support.html "7.1.15 MySQL Server Time Zone Support").


6. If the [`init_file`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_init_file) system
    variable was given to name a file of SQL statements, the
    server executes the statements in the file. This option
    enables you to perform custom bootstrapping sequences.



    When the server operates in bootstrap mode, some
    functionality is unavailable that limits the statements
    permitted in the file. These include statements that relate
    to account management (such as [`CREATE\\
               USER`](https://dev.mysql.com/doc/refman/8.4/en/create-user.html "15.7.1.3 CREATE USER Statement") or [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement")),
    replication, and global transaction identifiers.


7. The server exits.


#### Post-Initialization root Password Assignment

After you initialize the data directory by starting the server
with [`--initialize`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize) or
[`--initialize-insecure`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure), start the
server normally (that is, without either of those options) and
assign the `'root'@'localhost'` account a new
password:

1. Start the server. For instructions, see
    [Section 2.9.2, “Starting the Server”](https://dev.mysql.com/doc/refman/8.4/en/starting-server.html "2.9.2 Starting the Server").


2. Connect to the server:




   - If you used [`--initialize`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize)
      but not
      [`--initialize-insecure`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure) to
      initialize the data directory, connect to the server as
      `root`:




     ```terminal
     Press CTRL+C to copy


     mysql -u root -p
     ```




      Then, at the password prompt, enter the random password
      that the server generated during the initialization
      sequence:




     ```none
     Press CTRL+C to copy


     Enter password: (enter the random root password here)
     ```




      Look in the server error log if you do not know this
      password.


   - If you used
      [`--initialize-insecure`](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure) to
      initialize the data directory, connect to the server as
      `root` without a password:




     ```terminal
     Press CTRL+C to copy


     mysql -u root --skip-password
     ```


3. After connecting, use an [`ALTER\\
               USER`](https://dev.mysql.com/doc/refman/8.4/en/alter-user.html "15.7.1.1 ALTER USER Statement") statement to assign a new
    `root` password:




```sql
Press CTRL+C to copy


ALTER USER 'root'@'localhost' IDENTIFIED BY 'root-password';
```


See also [Section 2.9.4, “Securing the Initial MySQL Account”](https://dev.mysql.com/doc/refman/8.4/en/default-privileges.html "2.9.4 Securing the Initial MySQL Account").

Note

Attempts to connect to the host `127.0.0.1`
normally resolve to the `localhost` account.
However, this fails if the server is run with
[`skip_name_resolve`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_skip_name_resolve) enabled. If
you plan to do that, make sure that an account exists that can
accept a connection. For example, to be able to connect as
`root` using
`--host=127.0.0.1` or
`--host=::1`, create these accounts:


```sql
Press CTRL+C to copy


CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY 'root-password';
CREATE USER 'root'@'::1' IDENTIFIED BY 'root-password';
```

It is possible to put those statements in a file to be
executed using the [`init_file`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_init_file)
system variable, as discussed in
[Server Actions During Data Directory Initialization](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html#data-directory-initialization-server-actions "Server Actions During Data Directory Initialization").

[PREV](https://dev.mysql.com/doc/refman/8.4/en/postinstallation.html "Previous: Postinstallation Setup and Testing") [HOME](https://dev.mysql.com/doc/refman/8.4/en/index.html "Start") [UP](https://dev.mysql.com/doc/refman/8.4/en/postinstallation.html "Up: Postinstallation Setup and Testing") [NEXT](https://dev.mysql.com/doc/refman/8.4/en/starting-server.html "Next: Starting the Server")

[Related Documentation](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html)

[MySQL 8.4 Release Notes](https://dev.mysql.com/doc/relnotes/mysql/8.4/en/)

[Download\\
this Manual](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html)

[PDF (US Ltr)](https://downloads.mysql.com/docs/refman-8.4-en.pdf)
\- 40.2Mb

[PDF (A4)](https://downloads.mysql.com/docs/refman-8.4-en.a4.pdf)
\- 40.3Mb

[Man Pages (TGZ)](https://downloads.mysql.com/docs/refman-8.4-en.man-gpl.tar.gz)
\- 262.1Kb

[Man Pages (Zip)](https://downloads.mysql.com/docs/refman-8.4-en.man-gpl.zip)
\- 367.7Kb

[Info (Gzip)](https://downloads.mysql.com/docs/mysql-8.4.info.gz)
\- 4.0Mb

[Info (Zip)](https://downloads.mysql.com/docs/mysql-8.4.info.zip)
\- 4.0Mb