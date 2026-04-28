[Skip to Main Content](https://dev.mysql.com/doc/refman/8.4/en/grant.html#main)

[Hide Sidebar](https://dev.mysql.com/doc/refman/8.4/en/grant.html "Hide Sidebar")

[Previous: DROP USER Statement](https://dev.mysql.com/doc/refman/8.4/en/drop-user.html "Previous: DROP USER Statement")[Start](https://dev.mysql.com/doc/refman/8.4/en/index.html "Start")[Up: Account Management Statements](https://dev.mysql.com/doc/refman/8.4/en/account-management-statements.html "Up: Account Management Statements")[Next: RENAME USER Statement](https://dev.mysql.com/doc/refman/8.4/en/rename-user.html "Next: RENAME USER Statement")

[Documentation Home](https://dev.mysql.com/doc/)

* * *

MySQL 8.4 Reference Manual

[Related Documentation](https://dev.mysql.com/doc/refman/8.4/en/grant.html)

[MySQL 8.4 Release Notes](https://dev.mysql.com/doc/relnotes/mysql/8.4/en/)

[Download\\
this Manual](https://dev.mysql.com/doc/refman/8.4/en/grant.html)

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

[version 8.4](https://dev.mysql.com/doc/refman/8.4/en/grant.html)

[9.7\\
current](https://dev.mysql.com/doc/refman/9.7/en/grant.html)

[9.6](https://dev.mysql.com/doc/refman/9.6/en/grant.html)

[9.5](https://dev.mysql.com/doc/refman/9.5/en/grant.html)

[9.4](https://dev.mysql.com/doc/refman/9.4/en/grant.html)

[9.3](https://dev.mysql.com/doc/refman/9.3/en/grant.html)

[9.2](https://dev.mysql.com/doc/refman/9.2/en/grant.html)

[9.1](https://dev.mysql.com/doc/refman/9.1/en/grant.html)

[9.0](https://dev.mysql.com/doc/refman/9.0/en/grant.html)

[8.0](https://dev.mysql.com/doc/refman/8.0/en/grant.html)

[5.7](https://dev.mysql.com/doc/refman/5.7/en/grant.html)

[8.0 \\
Japanese](https://dev.mysql.com/doc/refman/8.0/ja/grant.html)

[Show Sidebar](https://dev.mysql.com/doc/refman/8.4/en/grant.html "Show Sidebar")

[MySQL 8.4 Reference Manual](https://dev.mysql.com/doc/refman/8.4/en/)  /
[...](https://dev.mysql.com/doc/refman/8.4/en/grant.html)  / [SQL Statements](https://dev.mysql.com/doc/refman/8.4/en/sql-statements.html)  /
[Database Administration Statements](https://dev.mysql.com/doc/refman/8.4/en/sql-server-administration-statements.html)  /
[Account Management Statements](https://dev.mysql.com/doc/refman/8.4/en/account-management-statements.html)  /

GRANT Statement


#### 15.7.1.6 GRANT Statement

```sql
Press CTRL+C to copy


GRANT
    priv_type [(column_list)]
      [, priv_type [(column_list)]] ...
    ON [object_type] priv_level
    TO user_or_role [, user_or_role] ...
    [WITH GRANT OPTION]
    [AS user\
        [WITH ROLE\
            DEFAULT\
          | NONE\
          | ALL\
          | ALL EXCEPT role [, role ] ...\
          | role [, role ] ...\
        ]\
    ]
}

GRANT PROXY ON user_or_role
    TO user_or_role [, user_or_role] ...
    [WITH GRANT OPTION]

GRANT role [, role] ...
    TO user_or_role [, user_or_role] ...
    [WITH ADMIN OPTION]

object_type: {
    TABLE
  | FUNCTION
  | PROCEDURE
}

priv_level: {
    *
  | *.*
  | db_name.*
  | db_name.tbl_name
  | tbl_name
  | db_name.routine_name
}

user_or_role: {
    user (see Section 8.2.4, “Specifying Account Names”)
  | role (see Section 8.2.5, “Specifying Role Names”)
}
```

The [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement assigns
privileges and roles to MySQL user accounts and roles. There are
several aspects to the [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement")
statement, described under the following topics:

- [GRANT General Overview](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-overview "GRANT General Overview")

- [Object Quoting Guidelines](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-quoting "Object Quoting Guidelines")

- [Account Names](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-accounts "Account Names")

- [Privileges Supported by MySQL](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-privileges "Privileges Supported by MySQL")

- [Global Privileges](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-global-privileges "Global Privileges")

- [Database Privileges](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-database-privileges "Database Privileges")

- [Table Privileges](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-table-privileges "Table Privileges")

- [Column Privileges](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-column-privileges "Column Privileges")

- [Stored Routine Privileges](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-routine-privileges "Stored Routine Privileges")

- [Proxy User Privileges](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-proxy-privileges "Proxy User Privileges")

- [Granting Roles](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-roles "Granting Roles")

- [The `AS` Clause and Privilege Restrictions](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-as "The AS Clause and Privilege Restrictions")

- [Other Account Characteristics](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-other-characteristics "Other Account Characteristics")

- [MySQL and Standard SQL Versions of GRANT](https://dev.mysql.com/doc/refman/8.4/en/grant.html#grant-mysql-vs-standard-sql "MySQL and Standard SQL Versions of GRANT")


##### GRANT General Overview

The [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement enables
system administrators to grant privileges and roles, which can
be granted to user accounts and roles. These syntax
restrictions apply:

- [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") cannot mix granting
both privileges and roles in the same statement. A given
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement must grant
either privileges or roles.


- The `ON` clause distinguishes whether the
statement grants privileges or roles:




  - With `ON`, the statement grants
     privileges.


  - Without `ON`, the statement grants
     roles.


  - It is permitted to assign both privileges and roles to
     an account, but you must use separate
     [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statements, each
     with syntax appropriate to what is to be granted.


For more information about roles, see [Section 8.2.10, “Using Roles”](https://dev.mysql.com/doc/refman/8.4/en/roles.html "8.2.10 Using Roles").


To grant a privilege with
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement"), you must have the
[`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) privilege, and you
must have the privileges that you are granting.
(Alternatively, if you have the
[`UPDATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_update) privilege for the grant
tables in the `mysql` system schema, you can
grant any account any privilege.) When the
[`read_only`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_read_only) system variable is
enabled, [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") additionally
requires the [`CONNECTION_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_connection-admin)
privilege (or the deprecated
[`SUPER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_super) privilege).


[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") either succeeds for all
named users and roles or rolls back and has no effect if any
error occurs. The statement is written to the binary log only
if it succeeds for all named users and roles.


The [`REVOKE`](https://dev.mysql.com/doc/refman/8.4/en/revoke.html "15.7.1.8 REVOKE Statement") statement is related
to [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") and enables
administrators to remove account privileges. See
[Section 15.7.1.8, “REVOKE Statement”](https://dev.mysql.com/doc/refman/8.4/en/revoke.html "15.7.1.8 REVOKE Statement").


Each account name uses the format described in
[Section 8.2.4, “Specifying Account Names”](https://dev.mysql.com/doc/refman/8.4/en/account-names.html "8.2.4 Specifying Account Names"). Each role name uses the
format described in [Section 8.2.5, “Specifying Role Names”](https://dev.mysql.com/doc/refman/8.4/en/role-names.html "8.2.5 Specifying Role Names"). For example:


```sql
Press CTRL+C to copy


GRANT ALL ON db1.* TO 'jeffrey'@'localhost';
GRANT 'role1', 'role2' TO 'user1'@'localhost', 'user2'@'localhost';
GRANT SELECT ON world.* TO 'role3';
```

The host name part of the account or role name, if omitted,
defaults to `'%'`.


Normally, a database administrator first uses
[`CREATE USER`](https://dev.mysql.com/doc/refman/8.4/en/create-user.html "15.7.1.3 CREATE USER Statement") to create an
account and define its nonprivilege characteristics such as
its password, whether it uses secure connections, and limits
on access to server resources, then uses
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") to define its privileges.
[`ALTER USER`](https://dev.mysql.com/doc/refman/8.4/en/alter-user.html "15.7.1.1 ALTER USER Statement") may be used to
change the nonprivilege characteristics of existing accounts.
For example:


```sql
Press CTRL+C to copy


CREATE USER 'jeffrey'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON db1.* TO 'jeffrey'@'localhost';
GRANT SELECT ON db2.invoice TO 'jeffrey'@'localhost';
ALTER USER 'jeffrey'@'localhost' WITH MAX_QUERIES_PER_HOUR 90;
```

From the [**mysql**](https://dev.mysql.com/doc/refman/8.4/en/mysql.html "6.5.1 mysql — The MySQL Command-Line Client") program,
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") responds with
`Query OK, 0 rows affected` when executed
successfully. To determine what privileges result from the
operation, use [`SHOW GRANTS`](https://dev.mysql.com/doc/refman/8.4/en/show-grants.html "15.7.7.22 SHOW GRANTS Statement"). See
[Section 15.7.7.22, “SHOW GRANTS Statement”](https://dev.mysql.com/doc/refman/8.4/en/show-grants.html "15.7.7.22 SHOW GRANTS Statement").

Important

Under some circumstances,
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") may be recorded in
server logs or on the client side in a history file such as
`~/.mysql_history`, which means that
cleartext passwords may be read by anyone having read access
to that information. For information about the conditions
under which this occurs for the server logs and how to
control it, see [Section 8.1.2.3, “Passwords and Logging”](https://dev.mysql.com/doc/refman/8.4/en/password-logging.html "8.1.2.3 Passwords and Logging"). For
similar information about client-side logging, see
[Section 6.5.1.3, “mysql Client Logging”](https://dev.mysql.com/doc/refman/8.4/en/mysql-logging.html "6.5.1.3 mysql Client Logging").

[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") supports host names up to
255 characters long. User names can be up to 32 characters.
Database, table, column, and routine names can be up to 64
characters.

Warning

_Do not attempt to change the permissible length_
_for user names by altering the `mysql.user`_
_system table. Doing so results in unpredictable behavior_
_which may even make it impossible for users to log in to the_
_MySQL server_. Never alter the structure of tables
in the `mysql` system schema in any manner
except by means of the procedure described in
[Chapter 3, _Upgrading MySQL_](https://dev.mysql.com/doc/refman/8.4/en/upgrading.html "Chapter 3 Upgrading MySQL").

##### Object Quoting Guidelines

Several objects within [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement")
statements are subject to quoting, although quoting is
optional in many cases: Account, role, database, table,
column, and routine names. For example, if a
_`user_name`_ or
_`host_name`_ value in an account name
is legal as an unquoted identifier, you need not quote it.
However, quotation marks are necessary to specify a
_`user_name`_ string containing special
characters (such as `-`), or a
_`host_name`_ string containing special
characters or wildcard characters such as `%`
(for example, `'test-user'@'%.com'`). Quote
the user name and host name separately.


To specify quoted values:

- Quote database, table, column, and routine names as
identifiers.


- Quote user names and host names as identifiers or as
strings.


- Quote passwords as strings.


For string-quoting and identifier-quoting guidelines, see
[Section 11.1.1, “String Literals”](https://dev.mysql.com/doc/refman/8.4/en/string-literals.html "11.1.1 String Literals"), and
[Section 11.2, “Schema Object Names”](https://dev.mysql.com/doc/refman/8.4/en/identifiers.html "11.2 Schema Object Names").

Important

The use of the wildcard characters `%` and
`_` as described in the next few paragraphs
is deprecated, and thus subject to removal in a future
version of MySQL.

The `_` and `%` wildcards
are permitted when specifying database names in
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statements that grant
privileges at the database level (`GRANT ... ON
          db_name.*`). This means,
for example, that to use a `_` character as
part of a database name, specify it using the
`\` escape character as `\_`
in the [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement, to
prevent the user from being able to access additional
databases matching the wildcard pattern (for example,
``GRANT ... ON `foo\_bar`.* TO ...``).


Issuing multiple `GRANT` statements
containing wildcards may not have the expected effect on DML
statements; when resolving grants involving wildcards, MySQL
takes only the first matching grant into consideration. In
other words, if a user has two database-level grants using
wildcards that match the same database, the grant which was
created first is applied. Consider the database
`db` and table `t` created
using the statements shown here:


```sql
Press CTRL+C to copy


mysql> CREATE DATABASE db;
Query OK, 1 row affected (0.01 sec)

mysql> CREATE TABLE db.t (c INT);
Query OK, 0 rows affected (0.01 sec)

mysql> INSERT INTO db.t VALUES ROW(1);
Query OK, 1 row affected (0.00 sec)
```

Next (assuming that the current account is the MySQL
`root` account or another account having the
necessary privileges), we create a user `u`
then issue two `GRANT` statements containing
wildcards, like this:


```sql
Press CTRL+C to copy


mysql> CREATE USER u;
Query OK, 0 rows affected (0.01 sec)

mysql> GRANT SELECT ON `d_`.* TO u;
Query OK, 0 rows affected (0.01 sec)

mysql> GRANT INSERT ON `d%`.* TO u;
Query OK, 0 rows affected (0.00 sec)

mysql> EXIT
```

```terminal
Press CTRL+C to copy


Bye
```

If we end the session and then log in again with the
[**mysql**](https://dev.mysql.com/doc/refman/8.4/en/mysql.html "6.5.1 mysql — The MySQL Command-Line Client") client, this time as
**u**, we see that this account has only the
privilege provided by the first matching grant, but not the
second:


```terminal
Press CTRL+C to copy


$> mysql -uu -hlocalhost
```

```sql
Press CTRL+C to copy


Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 10
Server version: 8.4.9-tr Source distribution

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input
statement.

mysql> TABLE db.t;
+------+
| c    |
+------+
|    1 |
+------+
1 row in set (0.00 sec)

mysql> INSERT INTO db.t VALUES ROW(2);
ERROR 1142 (42000): INSERT command denied to user 'u'@'localhost' for table 't'
```

In privilege assignments, MySQL interprets occurrences of
unescaped `_` and `%` SQL
wildcard characters in database names as literal characters
under these circumstances:

- When a database name is not used to grant privileges at
the database level, but as a qualifier for granting
privileges to some other object such as a table or routine
(for example, `GRANT ... ON
                db_name.tbl_name`).


- Enabling [`partial_revokes`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_partial_revokes)
causes MySQL to interpret unescaped `_`
and `%` wildcard characters in database
names as literal characters, just as if they had been
escaped as `\_` and
`\%`. Because this changes how MySQL
interprets privileges, it may be advisable to avoid
unescaped wildcard characters in privilege assignments for
installations where
[`partial_revokes`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_partial_revokes) may be
enabled. For more information, see
[Section 8.2.12, “Privilege Restriction Using Partial Revokes”](https://dev.mysql.com/doc/refman/8.4/en/partial-revokes.html "8.2.12 Privilege Restriction Using Partial Revokes").


##### Account Names

A _`user`_ value in a
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement indicates a
MySQL account to which the statement applies. To accommodate
granting rights to users from arbitrary hosts, MySQL supports
specifying the _`user`_ value in the
form
`'user_name'@'host_name'`.


You can specify wildcards in the host name. For example,
`'user_name'@'%.example.com'`
applies to _`user_name`_ for any host
in the `example.com` domain, and
`'user_name'@'198.51.100.%'`
applies to _`user_name`_ for any host
in the `198.51.100` class C subnet.


The simple form
`'user_name'` is a
synonym for
`'user_name'@'%'`.

Note

MySQL automatically assigns all privileges granted to
`'username'@'%'`
to the
`'username'@'localhost'`
account as well. This behavior is deprecated, and is subject
to removal in a future version of MySQL.

_MySQL does not support wildcards in user_
_names_. To refer to an anonymous user, specify an
account with an empty user name with the
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement:


```sql
Press CTRL+C to copy


GRANT ALL ON test.* TO ''@'localhost' ...;
```

In this case, any user who connects from the local host with
the correct password for the anonymous user is permitted
access, with the privileges associated with the anonymous-user
account.


For additional information about user name and host name
values in account names, see [Section 8.2.4, “Specifying Account Names”](https://dev.mysql.com/doc/refman/8.4/en/account-names.html "8.2.4 Specifying Account Names").

Warning

If you permit local anonymous users to connect to the MySQL
server, you should also grant privileges to all local users
as
`'user_name'@'localhost'`.
Otherwise, the anonymous user account for
`localhost` in the
`mysql.user` system table is used when
named users try to log in to the MySQL server from the local
machine. For details, see
[Section 8.2.6, “Access Control, Stage 1: Connection Verification”](https://dev.mysql.com/doc/refman/8.4/en/connection-access.html "8.2.6 Access Control, Stage 1: Connection Verification").


To determine whether this issue applies to you, execute the
following query, which lists any anonymous users:


```sql
Press CTRL+C to copy


SELECT Host, User FROM mysql.user WHERE User='';
```

To avoid the problem just described, delete the local
anonymous user account using this statement:


```sql
Press CTRL+C to copy


DROP USER ''@'localhost';
```

##### Privileges Supported by MySQL

The following tables summarize the permissible static and
dynamic _`priv_type`_ privilege types
that can be specified for the
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") and
[`REVOKE`](https://dev.mysql.com/doc/refman/8.4/en/revoke.html "15.7.1.8 REVOKE Statement") statements, and the
levels at which each privilege can be granted. For additional
information about each privilege, see
[Section 8.2.2, “Privileges Provided by MySQL”](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html "8.2.2 Privileges Provided by MySQL"). For information about
the differences between static and dynamic privileges, see
[Static Versus Dynamic Privileges](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#static-dynamic-privileges "Static Versus Dynamic Privileges").

**Table 15.11 Permissible Static Privileges for GRANT and REVOKE**

| Privilege | Meaning and Grantable Levels |
| --- | --- |
| [`ALL [PRIVILEGES]`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_all) | Grant all privileges at specified access level except<br> [`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) and<br> [`PROXY`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_proxy). |
| [`ALTER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_alter) | Enable use of [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.4/en/alter-table.html "15.1.9 ALTER TABLE Statement"). Levels:<br> Global, database, table. |
| [`ALTER ROUTINE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_alter-routine) | Enable stored routines to be altered or dropped. Levels: Global,<br> database, routine. |
| [`CREATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create) | Enable database and table creation. Levels: Global, database, table. |
| [`CREATE ROLE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-role) | Enable role creation. Level: Global. |
| [`CREATE ROUTINE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-routine) | Enable stored routine creation. Levels: Global, database. |
| [`CREATE TABLESPACE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-tablespace) | Enable tablespaces and log file groups to be created, altered, or<br> dropped. Level: Global. |
| [`CREATE TEMPORARY TABLES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-temporary-tables) | Enable use of [`CREATE\<br>                TEMPORARY TABLE`](https://dev.mysql.com/doc/refman/8.4/en/create-table.html "15.1.20 CREATE TABLE Statement"). Levels: Global, database. |
| [`CREATE USER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-user) | Enable use of [`CREATE USER`](https://dev.mysql.com/doc/refman/8.4/en/create-user.html "15.7.1.3 CREATE USER Statement"),<br> [`DROP USER`](https://dev.mysql.com/doc/refman/8.4/en/drop-user.html "15.7.1.5 DROP USER Statement"),<br> [`RENAME USER`](https://dev.mysql.com/doc/refman/8.4/en/rename-user.html "15.7.1.7 RENAME USER Statement"), and<br> [`REVOKE ALL\<br>                PRIVILEGES`](https://dev.mysql.com/doc/refman/8.4/en/revoke.html "15.7.1.8 REVOKE Statement"). Level: Global. |
| [`CREATE VIEW`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-view) | Enable views to be created or altered. Levels: Global, database, table. |
| [`DELETE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_delete) | Enable use of [`DELETE`](https://dev.mysql.com/doc/refman/8.4/en/delete.html "15.2.2 DELETE Statement"). Level: Global,<br> database, table. |
| [`DROP`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_drop) | Enable databases, tables, and views to be dropped. Levels: Global,<br> database, table. |
| [`DROP ROLE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_drop-role) | Enable roles to be dropped. Level: Global. |
| [`EVENT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_event) | Enable use of events for the Event Scheduler. Levels: Global, database. |
| [`EXECUTE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_execute) | Enable the user to execute stored routines. Levels: Global, database,<br> routine. |
| [`FILE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_file) | Enable the user to cause the server to read or write files. Level:<br> Global. |
| [`FLUSH_PRIVILEGES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_flush-privileges) | Enable the user to issue [`FLUSH\<br>                PRIVILEGES`](https://dev.mysql.com/doc/refman/8.4/en/flush.html "15.7.8.3 FLUSH Statement") statements. Level: Global. |
| [`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) | Enable privileges to be granted to or removed from other accounts.<br> Levels: Global, database, table, routine, proxy. |
| [`INDEX`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_index) | Enable indexes to be created or dropped. Levels: Global, database,<br> table. |
| [`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert) | Enable use of [`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/insert.html "15.2.7 INSERT Statement"). Levels: Global,<br> database, table, column. |
| [`LOCK TABLES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_lock-tables) | Enable use of [`LOCK TABLES`](https://dev.mysql.com/doc/refman/8.4/en/lock-tables.html "15.3.6 LOCK TABLES and UNLOCK TABLES Statements") on tables for<br> which you have the [`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/select.html "15.2.13 SELECT Statement")<br> privilege. Levels: Global, database. |
| [`OPTIMIZE_LOCAL_TABLE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_optimize-local-table) | Enable use of [`OPTIMIZE\<br>                LOCAL TABLE`](https://dev.mysql.com/doc/refman/8.4/en/optimize-table.html "15.7.3.4 OPTIMIZE TABLE Statement") or `OPTIMIZE<br>                NO_WRITE_TO_BINLOG TABLE`. Levels: Global,<br> database, table. |
| [`PROCESS`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_process) | Enable the user to see all processes with [`SHOW\<br>                PROCESSLIST`](https://dev.mysql.com/doc/refman/8.4/en/show-processlist.html "15.7.7.31 SHOW PROCESSLIST Statement"). Level: Global. |
| [`PROXY`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_proxy) | Enable user proxying. Level: From user to user. |
| [`REFERENCES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_references) | Enable foreign key creation. Levels: Global, database, table, column. |
| [`RELOAD`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_reload) | Enable use of [`FLUSH`](https://dev.mysql.com/doc/refman/8.4/en/flush.html "15.7.8.3 FLUSH Statement") operations. Level:<br> Global. |
| [`REPLICATION CLIENT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_replication-client) | Enable the user to ask where source or replica servers are. Level:<br> Global. |
| [`REPLICATION SLAVE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_replication-slave) | Enable replicas to read binary log events from the source. Level:<br> Global. |
| [`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_select) | Enable use of [`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/select.html "15.2.13 SELECT Statement"). Levels: Global,<br> database, table, column. |
| [`SHOW DATABASES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_show-databases) | Enable [`SHOW DATABASES`](https://dev.mysql.com/doc/refman/8.4/en/show-databases.html "15.7.7.15 SHOW DATABASES Statement") to show all<br> databases. Level: Global. |
| [`SHOW VIEW`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_show-view) | Enable use of [`SHOW CREATE VIEW`](https://dev.mysql.com/doc/refman/8.4/en/show-create-view.html "15.7.7.14 SHOW CREATE VIEW Statement"). Levels:<br> Global, database, table. |
| [`SHUTDOWN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_shutdown) | Enable use of [**mysqladmin shutdown**](https://dev.mysql.com/doc/refman/8.4/en/mysqladmin.html "6.5.2 mysqladmin — A MySQL Server Administration Program"). Level: Global. |
| [`SUPER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_super) | Enable use of other administrative operations such as<br> [`CHANGE REPLICATION SOURCE\<br>                TO`](https://dev.mysql.com/doc/refman/8.4/en/change-replication-source-to.html "15.4.2.2 CHANGE REPLICATION SOURCE TO Statement"), [`KILL`](https://dev.mysql.com/doc/refman/8.4/en/kill.html "15.7.8.4 KILL Statement"),<br> [`PURGE BINARY LOGS`](https://dev.mysql.com/doc/refman/8.4/en/purge-binary-logs.html "15.4.1.1 PURGE BINARY LOGS Statement"),<br> [`SET\<br>                GLOBAL`](https://dev.mysql.com/doc/refman/8.4/en/set-variable.html "15.7.6.1 SET Syntax for Variable Assignment"), and [**mysqladmin**\<br>**debug**](https://dev.mysql.com/doc/refman/8.4/en/mysqladmin.html "6.5.2 mysqladmin — A MySQL Server Administration Program") command. Level: Global. |
| [`TRIGGER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_trigger) | Enable trigger operations. Levels: Global, database, table. |
| [`UPDATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_update) | Enable use of [`UPDATE`](https://dev.mysql.com/doc/refman/8.4/en/update.html "15.2.17 UPDATE Statement"). Levels: Global,<br> database, table, column. |
| [`USAGE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_usage) | Synonym for “no privileges” |

| Privilege | Meaning and Grantable Levels |
| --- | --- |

**Table 15.12 Permissible Dynamic Privileges for GRANT and REVOKE**

| Privilege | Meaning and Grantable Levels |
| --- | --- |
| [`APPLICATION_PASSWORD_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_application-password-admin) | Enable dual password administration. Level: Global. |
| [`AUDIT_ABORT_EXEMPT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_audit-abort-exempt) | Allow queries blocked by audit log filter. Level: Global. |
| [`AUDIT_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_audit-admin) | Enable audit log configuration. Level: Global. |
| [`AUTHENTICATION_POLICY_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_authentication-policy-admin) | Enable authentication policy administration. Level: Global. |
| [`BACKUP_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_backup-admin) | Enable backup administration. Level: Global. |
| [`BINLOG_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_binlog-admin) | Enable binary log control. Level: Global. |
| [`BINLOG_ENCRYPTION_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_binlog-encryption-admin) | Enable activation and deactivation of binary log encryption. Level:<br> Global. |
| [`CLONE_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_clone-admin) | Enable clone administration. Level: Global. |
| [`CONNECTION_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_connection-admin) | Enable connection limit/restriction control. Level: Global. |
| [`ENCRYPTION_KEY_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_encryption-key-admin) | Enable `InnoDB` key rotation. Level: Global. |
| [`FIREWALL_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_firewall-admin) | Enable firewall rule administration, any user. Level: Global. |
| [`FIREWALL_EXEMPT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_firewall-exempt) | Exempt user from firewall restrictions. Level: Global. |
| [`FIREWALL_USER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_firewall-user) | Enable firewall rule administration, self. Level: Global. |
| [`FLUSH_OPTIMIZER_COSTS`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_flush-optimizer-costs) | Enable optimizer cost reloading. Level: Global. |
| [`FLUSH_STATUS`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_flush-status) | Enable status indicator flushing. Level: Global. |
| [`FLUSH_TABLES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_flush-tables) | Enable table flushing. Level: Global. |
| [`FLUSH_USER_RESOURCES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_flush-user-resources) | Enable user-resource flushing. Level: Global. |
| [`GROUP_REPLICATION_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_group-replication-admin) | Enable Group Replication control. Level: Global. |
| [`INNODB_REDO_LOG_ARCHIVE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_innodb-redo-log-archive) | Enable redo log archiving administration. Level: Global. |
| [`INNODB_REDO_LOG_ENABLE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_innodb-redo-log-enable) | Enable or disable redo logging. Level: Global. |
| [`NDB_STORED_USER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_ndb-stored-user) | Enable sharing of user or role between SQL nodes (NDB Cluster). Level:<br> Global. |
| [`PASSWORDLESS_USER_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_passwordless-user-admin) | Enable passwordless user account administration. Level: Global. |
| [`PERSIST_RO_VARIABLES_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_persist-ro-variables-admin) | Enable persisting read-only system variables. Level: Global. |
| [`REPLICATION_APPLIER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_replication-applier) | Act as the `PRIVILEGE_CHECKS_USER` for a replication<br> channel. Level: Global. |
| [`REPLICATION_SLAVE_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_replication-slave-admin) | Enable regular replication control. Level: Global. |
| [`RESOURCE_GROUP_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_resource-group-admin) | Enable resource group administration. Level: Global. |
| [`RESOURCE_GROUP_USER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_resource-group-user) | Enable resource group administration. Level: Global. |
| [`ROLE_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_role-admin) | Enable roles to be granted or revoked, use of `WITH ADMIN<br>                OPTION`. Level: Global. |
| [`SESSION_VARIABLES_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_session-variables-admin) | Enable setting restricted session system variables. Level: Global. |
| [`SHOW_ROUTINE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_show-routine) | Enable access to stored routine definitions. Level: Global. |
| [`SKIP_QUERY_REWRITE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_skip-query-rewrite) | Do not rewrite queries executed by this user. Level: Global. |
| [`SYSTEM_USER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_system-user) | Designate account as system account. Level: Global. |
| [`SYSTEM_VARIABLES_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_system-variables-admin) | Enable modifying or persisting global system variables. Level: Global. |
| [`TABLE_ENCRYPTION_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_table-encryption-admin) | Enable overriding default encryption settings. Level: Global. |
| [`TELEMETRY_LOG_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_telemetry-log-admin) | Enable telemetry log configuration for MySQL HeatWave on AWS. Level: Global. |
| [`TP_CONNECTION_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_tp-connection-admin) | Enable thread pool connection administration. Level: Global. |
| [`VERSION_TOKEN_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_version-token-admin) | Enable use of Version Tokens functions. Level: Global. |
| [`XA_RECOVER_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_xa-recover-admin) | Enable [`XA\<br>                RECOVER`](https://dev.mysql.com/doc/refman/8.4/en/xa-statements.html "15.3.8.1 XA Transaction SQL Statements") execution. Level: Global. |

| Privilege | Meaning and Grantable Levels |
| --- | --- |

A trigger is associated with a table. To create or drop a
trigger, you must have the
[`TRIGGER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_trigger) privilege for the
table, not the trigger.


In [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statements, the
[`ALL\\
          [PRIVILEGES]`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_all) or [`PROXY`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_proxy)
privilege must be named by itself and cannot be specified
along with other privileges.
[`ALL\\
          [PRIVILEGES]`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_all) stands for all privileges available for
the level at which privileges are to be granted except for the
[`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) and
[`PROXY`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_proxy) privileges.


MySQL account information is stored in the tables of the
`mysql` system schema. For additional
details, consult [Section 8.2, “Access Control and Account Management”](https://dev.mysql.com/doc/refman/8.4/en/access-control.html "8.2 Access Control and Account Management"), which
discusses the `mysql` system schema and the
access control system extensively.


If the grant tables hold privilege rows that contain
mixed-case database or table names and the
[`lower_case_table_names`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_lower_case_table_names) system
variable is set to a nonzero value,
[`REVOKE`](https://dev.mysql.com/doc/refman/8.4/en/revoke.html "15.7.1.8 REVOKE Statement") cannot be used to revoke
these privileges. It is necessary in such cases to manipulate
the grant tables directly.
( [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") does not create such
rows when
[`lower_case_table_names`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_lower_case_table_names) is
set, but such rows might have been created prior to setting
that variable. The
[`lower_case_table_names`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_lower_case_table_names)
setting can only be configured at server startup.)


Privileges can be granted at several levels, depending on the
syntax used for the `ON` clause. For
[`REVOKE`](https://dev.mysql.com/doc/refman/8.4/en/revoke.html "15.7.1.8 REVOKE Statement"), the same
`ON` syntax specifies which privileges to
remove.


For the global, database, table, and routine levels,
[`GRANT ALL`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement")
assigns only the privileges that exist at the level you are
granting. For example, `GRANT ALL ON
          db_name.*` is a
database-level statement, so it does not grant any global-only
privileges such as [`FILE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_file).
Granting [`ALL`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_all) does not assign
the [`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) or
[`PROXY`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_proxy) privilege.


The _`object_type`_ clause, if present,
should be specified as `TABLE`,
`FUNCTION`, or `PROCEDURE`
when the following object is a table, a stored function, or a
stored procedure.


The privileges that a user holds for a database, table,
column, or routine are formed additively as the logical
[`OR`](https://dev.mysql.com/doc/refman/8.4/en/logical-operators.html#operator_or) of the account privileges at
each of the privilege levels, including the global level. It
is not possible to deny a privilege granted at a higher level
by absence of that privilege at a lower level. For example,
this statement grants the
[`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_select) and
[`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert) privileges globally:


```sql
Press CTRL+C to copy


GRANT SELECT, INSERT ON *.* TO u1;
```

The globally granted privileges apply to all databases,
tables, and columns, even though not granted at any of those
lower levels.


It is possible to deny explicitly a privilege granted at the
global level by revoking it for particular databases, if the
[`partial_revokes`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_partial_revokes) system
variable is enabled:


```sql
Press CTRL+C to copy


GRANT SELECT, INSERT, UPDATE ON *.* TO u1;
REVOKE INSERT, UPDATE ON db1.* FROM u1;
```

The result of the preceding statements is that
[`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_select) applies globally to all
tables, whereas [`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert) and
[`UPDATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_update) apply globally except to
tables in `db1`. Account access to
`db1` is read only.


Details of the privilege-checking procedure are presented in
[Section 8.2.7, “Access Control, Stage 2: Request Verification”](https://dev.mysql.com/doc/refman/8.4/en/request-access.html "8.2.7 Access Control, Stage 2: Request Verification").


If you are using table, column, or routine privileges for even
one user, the server examines table, column, and routine
privileges for all users and this slows down MySQL a bit.
Similarly, if you limit the number of queries, updates, or
connections for any users, the server must monitor these
values.


MySQL enables you to grant privileges on databases or tables
that do not exist. For tables, the privileges to be granted
must include the [`CREATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create)
privilege. _This behavior is by design_,
and is intended to enable the database administrator to
prepare user accounts and privileges for databases or tables
that are to be created at a later time.

Important

_MySQL does not automatically revoke any privileges_
_when you drop a database or table_. However, if
you drop a routine, any routine-level privileges granted for
that routine are revoked.

##### Global Privileges

Global privileges are administrative or apply to all databases
on a given server. To assign global privileges, use
`ON *.*` syntax:


```sql
Press CTRL+C to copy


GRANT ALL ON *.* TO 'someuser'@'somehost';
GRANT SELECT, INSERT ON *.* TO 'someuser'@'somehost';
```

The [`CREATE TABLESPACE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-tablespace),
[`CREATE USER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-user),
[`FILE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_file),
[`PROCESS`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_process),
[`RELOAD`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_reload),
[`REPLICATION CLIENT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_replication-client),
[`REPLICATION SLAVE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_replication-slave),
[`SHOW DATABASES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_show-databases),
[`SHUTDOWN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_shutdown), and
[`SUPER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_super),
[`CREATE ROLE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-role) and
[`DROP ROLE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_drop-role) static privileges are
administrative and can only be granted globally.


Dynamic privileges are all global and can only be granted
globally.


Other privileges can be granted globally or at more specific
levels.


The effect of [`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option)
granted at the global level differs for static and dynamic
privileges:

- [`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) granted for
any static global privilege applies to all static global
privileges.


- [`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) granted for
any dynamic privilege applies only to that dynamic
privilege.


`GRANT ALL` at the global level grants all
static global privileges and all currently registered dynamic
privileges. A dynamic privilege registered subsequent to
execution of the `GRANT` statement is not
granted retroactively to any account.


MySQL stores global privileges in the
`mysql.user` system table.

##### Database Privileges

Database privileges apply to all objects in a given database.
To assign database-level privileges, use `ON
          db_name.*` syntax:


```sql
Press CTRL+C to copy


GRANT ALL ON mydb.* TO 'someuser'@'somehost';
GRANT SELECT, INSERT ON mydb.* TO 'someuser'@'somehost';
```

If you use `ON *` syntax (rather than
`ON *.*`), privileges are assigned at the
database level for the default database. An error occurs if
there is no default database.


The [`CREATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create),
[`DROP`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_drop),
[`EVENT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_event),
[`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option),
[`LOCK TABLES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_lock-tables), and
[`REFERENCES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_references) privileges can be
specified at the database level. Table or routine privileges
also can be specified at the database level, in which case
they apply to all tables or routines in the database.


MySQL stores database privileges in the
`mysql.db` system table.

##### Table Privileges

Table privileges apply to all columns in a given table. To
assign table-level privileges, use `ON
          db_name.tbl_name` syntax:


```sql
Press CTRL+C to copy


GRANT ALL ON mydb.mytbl TO 'someuser'@'somehost';
GRANT SELECT, INSERT ON mydb.mytbl TO 'someuser'@'somehost';
```

If you specify _`tbl_name`_ rather than
_`db_name.tbl_name`_, the statement
applies to _`tbl_name`_ in the default
database. An error occurs if there is no default database.


The permissible _`priv_type`_ values at
the table level are [`ALTER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_alter),
[`CREATE VIEW`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-view),
[`CREATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create),
[`DELETE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_delete),
[`DROP`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_drop),
[`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option),
[`INDEX`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_index),
[`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert),
[`REFERENCES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_references),
[`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_select),
[`SHOW VIEW`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_show-view),
[`TRIGGER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_trigger), and
[`UPDATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_update).


Table-level privileges apply to base tables and views. They do
not apply to tables created with [`CREATE\\
          TEMPORARY TABLE`](https://dev.mysql.com/doc/refman/8.4/en/create-temporary-table.html "15.1.20.2 CREATE TEMPORARY TABLE Statement"), even if the table names match. For
information about `TEMPORARY` table
privileges, see [Section 15.1.20.2, “CREATE TEMPORARY TABLE Statement”](https://dev.mysql.com/doc/refman/8.4/en/create-temporary-table.html "15.1.20.2 CREATE TEMPORARY TABLE Statement").


MySQL stores table privileges in the
`mysql.tables_priv` system table.

##### Column Privileges

Column privileges apply to single columns in a given table.
Each privilege to be granted at the column level must be
followed by the column or columns, enclosed within
parentheses.


```sql
Press CTRL+C to copy


GRANT SELECT (col1), INSERT (col1, col2) ON mydb.mytbl TO 'someuser'@'somehost';
```

The permissible _`priv_type`_ values
for a column (that is, when you use a
_`column_list`_ clause) are
[`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert),
[`REFERENCES`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_references),
[`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_select), and
[`UPDATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_update).


MySQL stores column privileges in the
`mysql.columns_priv` system table.

##### Stored Routine Privileges

The [`ALTER ROUTINE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_alter-routine),
[`CREATE ROUTINE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-routine),
[`EXECUTE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_execute), and
[`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) privileges apply
to stored routines (procedures and functions). They can be
granted at the global and database levels. Except for
[`CREATE ROUTINE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-routine), these
privileges can be granted at the routine level for individual
routines.


```sql
Press CTRL+C to copy


GRANT CREATE ROUTINE ON mydb.* TO 'someuser'@'somehost';
GRANT EXECUTE ON PROCEDURE mydb.myproc TO 'someuser'@'somehost';
```

The permissible _`priv_type`_ values at
the routine level are [`ALTER\\
          ROUTINE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_alter-routine), [`EXECUTE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_execute), and
[`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option).
[`CREATE ROUTINE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_create-routine) is not a
routine-level privilege because you must have the privilege at
the global or database level to create a routine in the first
place.


MySQL stores routine-level privileges in the
`mysql.procs_priv` system table.

##### Proxy User Privileges

The [`PROXY`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_proxy) privilege enables one
user to be a proxy for another. The proxy user impersonates or
takes the identity of the proxied user; that is, it assumes
the privileges of the proxied user.


```sql
Press CTRL+C to copy


GRANT PROXY ON 'localuser'@'localhost' TO 'externaluser'@'somehost';
```

When [`PROXY`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_proxy) is granted, it must
be the only privilege named in the
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement, and the only
permitted `WITH` option is `WITH
          GRANT OPTION`.


Proxying requires that the proxy user authenticate through a
plugin that returns the name of the proxied user to the server
when the proxy user connects, and that the proxy user have the
`PROXY` privilege for the proxied user. For
details and examples, see [Section 8.2.19, “Proxy Users”](https://dev.mysql.com/doc/refman/8.4/en/proxy-users.html "8.2.19 Proxy Users").


MySQL stores proxy privileges in the
`mysql.proxies_priv` system table.

##### Granting Roles

`GRANT` syntax without an
`ON` clause grants roles rather than
individual privileges. A role is a named collection of
privileges; see [Section 8.2.10, “Using Roles”](https://dev.mysql.com/doc/refman/8.4/en/roles.html "8.2.10 Using Roles"). For example:


```sql
Press CTRL+C to copy


GRANT 'role1', 'role2' TO 'user1'@'localhost', 'user2'@'localhost';
```

Each role to be granted must exist, as well as each user
account or role to which it is to be granted. Roles cannot be
granted to anonymous users.


Granting a role does not automatically cause the role to be
active. For information about role activation and
inactivation, see [Activating Roles](https://dev.mysql.com/doc/refman/8.4/en/roles.html#roles-activating "Activating Roles").


These privileges are required to grant roles:

- If you have the [`ROLE_ADMIN`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_role-admin)
privilege (or the deprecated
[`SUPER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_super) privilege), you can
grant or revoke any role to users or roles.


- If you were granted a role with a
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement that
includes the `WITH ADMIN OPTION` clause,
you become able to grant that role to other users or
roles, or revoke it from other users or roles, as long as
the role is active at such time as you subsequently grant
or revoke it. This includes the ability to use
`WITH ADMIN OPTION` itself.


- To grant a role that has the
[`SYSTEM_USER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_system-user) privilege, you
must have the [`SYSTEM_USER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_system-user)
privilege.


It is possible to create circular references with
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement"). For example:


```sql
Press CTRL+C to copy


CREATE USER 'u1', 'u2';
CREATE ROLE 'r1', 'r2';

GRANT 'u1' TO 'u1';   -- simple loop: u1 => u1
GRANT 'r1' TO 'r1';   -- simple loop: r1 => r1

GRANT 'r2' TO 'u2';
GRANT 'u2' TO 'r2';   -- mixed user/role loop: u2 => r2 => u2
```

Circular grant references are permitted but add no new
privileges or roles to the grantee because a user or role
already has its privileges and roles.

##### The `AS` Clause and Privilege Restrictions

[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") can specify additional
information about the privilege context to use for statement
execution by using an `AS
          user [WITH ROLE]` clause.
This syntax is visible at the SQL level, although its primary
purpose is to enable uniform replication across all nodes of
grantor privilege restrictions imposed by partial revokes, by
causing those restrictions to appear in the binary log. For
information about partial revokes, see
[Section 8.2.12, “Privilege Restriction Using Partial Revokes”](https://dev.mysql.com/doc/refman/8.4/en/partial-revokes.html "8.2.12 Privilege Restriction Using Partial Revokes").


When the `AS user`
clause is specified, statement execution takes into account
any privilege restrictions associated with the named user,
including all roles specified by `WITH ROLE`,
if present. The result is that the privileges actually granted
by the statement may be reduced relative to those specified.


These conditions apply to the `AS
          user` clause:

- `AS` has an effect only when the named
_`user`_ has privilege restrictions
(which implies that the
[`partial_revokes`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_partial_revokes) system
variable is enabled).


- If `WITH ROLE` is given, all roles named
must be granted to the named
_`user`_.


- The named _`user`_ should be a
MySQL account specified as
`'user_name'@'host_name'`,
[`CURRENT_USER`](https://dev.mysql.com/doc/refman/8.4/en/information-functions.html#function_current-user), or
[`CURRENT_USER()`](https://dev.mysql.com/doc/refman/8.4/en/information-functions.html#function_current-user). The current
user may be named together with `WITH
                ROLE` for the case that the executing user wants
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") to execute with a set
of roles applied that may differ from the roles active
within the current session.


- `AS` cannot be used to gain privileges
not possessed by the user who executes the
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement. The
executing user must have at least the privileges to be
granted, but the `AS` clause can only
restrict the privileges granted, not escalate them.


- With respect to the privileges to be granted,
`AS` cannot specify a user/role
combination that has more privileges (fewer restrictions)
than the user who executes the
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement. The
`AS` user/role combination is permitted
to have more privileges than the executing user, but only
if the statement does not grant those additional
privileges.


- `AS` is supported only for granting
global privileges (`ON *.*`).


- `AS` is not supported for
[`PROXY`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_proxy) grants.


The following example illustrates the effect of the
`AS` clause. Create a user
`u1` that has some global privileges, as well
as restrictions on those privileges:


```sql
Press CTRL+C to copy


CREATE USER u1;
GRANT SELECT, INSERT, UPDATE, DELETE ON *.* TO u1;
REVOKE INSERT, UPDATE ON schema1.* FROM u1;
REVOKE SELECT ON schema2.* FROM u1;
```

Also create a role `r1` that lifts some of
the privilege restrictions and grant the role to
`u1`:


```sql
Press CTRL+C to copy


CREATE ROLE r1;
GRANT INSERT ON schema1.* TO r1;
GRANT SELECT ON schema2.* TO r1;
GRANT r1 TO u1;
```

Now, using an account that has no privilege restrictions of
its own, grant to multiple users the same set of global
privileges, but each with different restrictions imposed by
the `AS` clause, and check which privileges
are actually granted.

- The [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement here
has no `AS` clause, so the privileges
granted are exactly those specified:




```sql
Press CTRL+C to copy


mysql> CREATE USER u2;
mysql> GRANT SELECT, INSERT, UPDATE ON *.* TO u2;
mysql> SHOW GRANTS FOR u2;
+-------------------------------------------------+
| Grants for u2@%                                 |
+-------------------------------------------------+
| GRANT SELECT, INSERT, UPDATE ON *.* TO `u2`@`%` |
+-------------------------------------------------+
```

- The [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement here
has an `AS` clause, so the privileges
granted are those specified but with the restrictions from
`u1` applied:




```sql
Press CTRL+C to copy


mysql> CREATE USER u3;
mysql> GRANT SELECT, INSERT, UPDATE ON *.* TO u3 AS u1;
mysql> SHOW GRANTS FOR u3;
+----------------------------------------------------+
| Grants for u3@%                                    |
+----------------------------------------------------+
| GRANT SELECT, INSERT, UPDATE ON *.* TO `u3`@`%`    |
| REVOKE INSERT, UPDATE ON `schema1`.* FROM `u3`@`%` |
| REVOKE SELECT ON `schema2`.* FROM `u3`@`%`         |
+----------------------------------------------------+
```




As mentioned previously, the `AS` clause
can only add privilege restrictions; it cannot escalate
privileges. Thus, although `u1` has the
[`DELETE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_delete) privilege, that is
not included in the privileges granted because the
statement does not specify granting
[`DELETE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_delete).


- The `AS` clause for the
[`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement here makes
the role `r1` active for
`u1`. That role lifts some of the
restrictions on `u1`. Consequently, the
privileges granted have some restrictions, but not so many
as for the previous [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement")
statement:




```sql
Press CTRL+C to copy


mysql> CREATE USER u4;
mysql> GRANT SELECT, INSERT, UPDATE ON *.* TO u4 AS u1 WITH ROLE r1;
mysql> SHOW GRANTS FOR u4;
+-------------------------------------------------+
| Grants for u4@%                                 |
+-------------------------------------------------+
| GRANT SELECT, INSERT, UPDATE ON *.* TO `u4`@`%` |
| REVOKE UPDATE ON `schema1`.* FROM `u4`@`%`      |
+-------------------------------------------------+
```


If a [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") statement includes
an `AS user`
clause, privilege restrictions on the user who executes the
statement are ignored (rather than applied as they would be in
the absence of an `AS` clause).

##### Other Account Characteristics

The optional `WITH` clause is used to enable
a user to grant privileges to other users. The `WITH
          GRANT OPTION` clause gives the user the ability to
give to other users any privileges the user has at the
specified privilege level.


To grant the [`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option)
privilege to an account without otherwise changing its
privileges, do this:


```sql
Press CTRL+C to copy


GRANT USAGE ON *.* TO 'someuser'@'somehost' WITH GRANT OPTION;
```

Be careful to whom you give the [`GRANT\\
          OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) privilege because two users with different
privileges may be able to combine privileges!


You cannot grant another user a privilege which you yourself
do not have; the [`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option)
privilege enables you to assign only those privileges which
you yourself possess.


Be aware that when you grant a user the
[`GRANT OPTION`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_grant-option) privilege at a
particular privilege level, any privileges the user possesses
(or may be given in the future) at that level can also be
granted by that user to other users. Suppose that you grant a
user the [`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert) privilege on a
database. If you then grant the
[`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_select) privilege on the
database and specify `WITH GRANT OPTION`,
that user can give to other users not only the
[`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_select) privilege, but also
[`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert). If you then grant the
[`UPDATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_update) privilege to the user on
the database, the user can grant
[`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert),
[`SELECT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_select), and
[`UPDATE`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_update).


For a nonadministrative user, you should not grant the
[`ALTER`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_alter) privilege globally or for
the `mysql` system schema. If you do that,
the user can try to subvert the privilege system by renaming
tables!


For additional information about security risks associated
with particular privileges, see
[Section 8.2.2, “Privileges Provided by MySQL”](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html "8.2.2 Privileges Provided by MySQL").

##### MySQL and Standard SQL Versions of GRANT

The biggest differences between the MySQL and standard SQL
versions of [`GRANT`](https://dev.mysql.com/doc/refman/8.4/en/grant.html "15.7.1.6 GRANT Statement") are:

- MySQL associates privileges with the combination of a host
name and user name and not with only a user name.


- Standard SQL does not have global or database-level
privileges, nor does it support all the privilege types
that MySQL supports.


- MySQL does not support the standard SQL
`UNDER` privilege.


- Standard SQL privileges are structured in a hierarchical
manner. If you remove a user, all privileges the user has
been granted are revoked. This is also true in MySQL if
you use [`DROP USER`](https://dev.mysql.com/doc/refman/8.4/en/drop-user.html "15.7.1.5 DROP USER Statement"). See
[Section 15.7.1.5, “DROP USER Statement”](https://dev.mysql.com/doc/refman/8.4/en/drop-user.html "15.7.1.5 DROP USER Statement").


- In standard SQL, when you drop a table, all privileges for
the table are revoked. In standard SQL, when you revoke a
privilege, all privileges that were granted based on that
privilege are also revoked. In MySQL, privileges can be
dropped with [`DROP USER`](https://dev.mysql.com/doc/refman/8.4/en/drop-user.html "15.7.1.5 DROP USER Statement") or
[`REVOKE`](https://dev.mysql.com/doc/refman/8.4/en/revoke.html "15.7.1.8 REVOKE Statement") statements.


- In MySQL, it is possible to have the
[`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert) privilege for only
some of the columns in a table. In this case, you can
still execute [`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/insert.html "15.2.7 INSERT Statement")
statements on the table, provided that you insert values
only for those columns for which you have the
[`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert) privilege. The
omitted columns are set to their implicit default values
if strict SQL mode is not enabled. In strict mode, the
statement is rejected if any of the omitted columns have
no default value. (Standard SQL requires you to have the
[`INSERT`](https://dev.mysql.com/doc/refman/8.4/en/privileges-provided.html#priv_insert) privilege on all
columns.) For information about strict SQL mode and
implicit default values, see [Section 7.1.11, “Server SQL Modes”](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html "7.1.11 Server SQL Modes"),
and [Section 13.6, “Data Type Default Values”](https://dev.mysql.com/doc/refman/8.4/en/data-type-defaults.html "13.6 Data Type Default Values").


[PREV](https://dev.mysql.com/doc/refman/8.4/en/drop-user.html "Previous: DROP USER Statement") [HOME](https://dev.mysql.com/doc/refman/8.4/en/index.html "Start") [UP](https://dev.mysql.com/doc/refman/8.4/en/account-management-statements.html "Up: Account Management Statements") [NEXT](https://dev.mysql.com/doc/refman/8.4/en/rename-user.html "Next: RENAME USER Statement")

[Related Documentation](https://dev.mysql.com/doc/refman/8.4/en/grant.html)

[MySQL 8.4 Release Notes](https://dev.mysql.com/doc/relnotes/mysql/8.4/en/)

[Download\\
this Manual](https://dev.mysql.com/doc/refman/8.4/en/grant.html)

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