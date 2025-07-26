---
layout: about
---

### \#! in bash

```bash
\\\\#! interpreter \\\\\\\[optional-one-arg-only]
```
Called Shebang [derived from **sh**arp-**bang** or ha**sh**-**bang**], also a comment but a special one. This line at the start of shell scripts defines the interpreter to be used to run the script. It can be shells (`sh, bash, zsh, fish, etc.,`), another script (only on Linux and Minix), or other interpreters like python, ruby, perl, awk, sed, etc.

### Other interpreters in shell scripts

We can define executables of other interpreters in the shebang and write the script in that language. For example, a python script can be prepended with `#!/usr/bin/python3` (or wherever it is available. if not known, by using `#!/usr/bin/env python3` to get it from PATH), and executed with `./scriptname` (extension not necessary in giving the file name).

### sudo while running script and sudo inside the script - all possible combinations

| Invocation                       | Inside Script             | Result                                                                   |
|----------------------------------|---------------------------|--------------------------------------------------------------------------|
| 1. Run script with `sudo`        | No `sudo` inside script   | Entire script runs as root                                               |
| 2. Run script with `sudo`        | `sudo` used inside script | `sudo` inside script becomes redundant but works                         |
| 3. Run script without `sudo`     | `sudo` used inside script | Only commands prefixed with `sudo` run as root. PASSWORD IS PROMPTED     |
| 4. Run script without `sudo`     | No `sudo` inside script   | Entire script runs as normal user privileged commands **fail**           |

### [] [[]] (())

[ <test> ] - `test <test>` (test command)

[[ <test> ]] - (not supported in Bourne Shell `sh`) extended testing with bash's own evaluator (with Extended Regex Engine regex matching if `=~` is used)

Sidenote on exploration: ERE does not support back references (`(character class 1)<some other expression>\\\\\\\\1`) and lookaheads/lookbehinds [`something(?=which has this ahead of it)`/`(?<=behind something there is this)something`]

( ) = run commands inside a subshell, can be nested to run subshells inside subshells like this `( ( ) )`, not like this:

(( )) = arithmetic evaluations in C syntax

### Folders in / of linux

**Filesystem Hierarchy Standard (FHS)** defines the standard usage for all the folders in the root directory of a linux filesystem

| Directory     | Purpose (FHS Standard)                                                                                                                                    |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/bin`        | Essential user **bin**aries (commands needed in single-user mode like `ls`, `cp`, `mv`, etc.,)                                                            |
| `/boot`       | Static files for **boot**loader (Linux kernel images, initrd [Initial RAM Disk], bootloader configuration)                                                |
| `/dev`        | **Dev**ice files (represents hardware devices like `/dev/sda`, `/dev/nvme0n1`, `/dev/null`, etc.,)                                                        |
| `/etc`        | System-wide configuration files (full form: dont ask questions like this again, these are ambiguous and subject to many old people's personal preference) |
| `/home`       | User **home** directories (`/home/username`)                                                                       |
| `/lib`        | Essential shared **lib**raries for binaries in `/bin` and `/sbin`                                                   |
| `/lib64`      | 64-bit essential shared **lib**raries (on **64**-bit systems)                                                       |
| `/media`      | Mount point for removable media (USB drives, CD-ROMs auto-mounted here)                                             |
| `/mnt`        | Temporarily mounted filesystems (also used for manual mounting)                                                     |
| `/opt`        | Optional software packages (third-party applications not part of default system)                                    |
| `/proc`       | Virtual filesystem exposing kernel and process information                                                          |
| `/root`       | Home directory of the root (superuser)                                                                             |
| `/run`        | Runtime variable data (PID files, sockets, mount info, system boot state)                                          |
| `/sbin`       | Essential system binaries (for system administration, e.g., `fsck`, `reboot`)                                      |
| `/srv`        | Data for services provided by the system (e.g., HTTP, FTP servers)                                                 |
| `/sys`        | Virtual filesystem exposing hardware devices and drivers, and kernel subsystems                                     |
| `/tmp`        | **T**e**mp**orary files (wiped on reboot)                                                                          |
| `/usr`        | **Us**e**r** utilities and applications (multi-user programs, libraries, documentation)                             |
| `/var`        | **Var**iable data (logs, spool files, caches, databases)                                                           |

### Types of redirectors

* `n>`	: Output redirection (overwrites file) where n is the File Descriptor number [1=stdout, 2=stderr, 3 4 5 ... are custom file descriptors which can be "opened" by using it once]
* `n>>`	: Output redirection (appends file)
* `<`	: Input redirection (sends stdin to LHS)
* `<<`	: HereDoc (Bash only)
* `<<<`	: HereString (Bash only)

### < > as operators instead of redirectors

* \< \> can be used in test expression [ ]
* < > can directly be used in extended test expression [[ ]]
* The above two are for ascii based string comparison
* All the numeric comparisons can be made inside (( )) with C syntax (where < > can be used without escaping as well)

### grep awk sed tee

#### GREP
**G**lobal **R**egular **E**xpression **P**rint - Searches for the provided pattern in the file/stdin stream

About the arguments I used:

-v, --invert-match  
       Invert the sense of matching, to select non-matching lines.  
-A NUM, --after-context=NUM  
       Print  NUM  lines of trailing context after matching lines.  
-F, --fixed-strings  
       Interpret PATTERNS as fixed strings, not regular expressions.  
-x, --line-regexp  
       Select only those matches that exactly match the whole line. For a regular expression pattern, this is  
       like parenthesizing the pattern and then surrounding it with ^ and $.  
-f FILE, --file=FILE  
       Obtain patterns from FILE, one per line.  

EXIT STATUS

Normally the exit status is 0 if a line is selected, 1 if no lines were selected, and 2 if an error occurred.  
However, if the -q or --quiet or --silent is used and a line is selected, the exit status is 0 even if an error occurred.

The regex engine used by `grep` by default is the Basic Regular Expressions (BRE), and can be switched to Extended RegEx (ERE) with `-E` (egrep is deprecated) and Perl-Compatible Regular Expressions (PCRE) using `-P` (this is the engine used by NGINX) 

Breakdown of [this line](https://github.com/spider-107124046-1/vault_sweeper/blob/20dc093d264d784d66a8730e45f8fc38cf4e66bc/vault_sweeper.sh#L163C5-L163C96):

```bash
grep -vxFf <(printf "%s\n" "${invalid[@]}") "$file" > "$tmp_file" && mv "$tmp_file" "$file"
```

`<(printf "%s\n" "${invalid[@]}")` For each $file, feed the collected invalid lines into grep `-f` with the match inverted `-v` and the matches are fixed strings `-F` for the whole line `-x`. Redirect the final matches to a temporary file, then overwrite the checked file with the temp file after the successful execution of grep.

#### SED
**S**tream **Ed**itor - Accepts stream of data (stdin, file), an editing "command", applies the command to the stream and by default, send the edited stream to stdout.

Since stream editor was made based on the "ed" editor, the commands also resemble those in ed.

#### AWK - (abbreviation of creators names, indha kelvi inga mukkiyam illa)

It is a pattern scanning and processing language

#### TEE

### Nginx - all uses

### (Forward) Proxy vs Reverse Proxy

| Forward Proxy                                               | Reverse Proxy                                                                             |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Sits **between client and internet** (e.g., client -> proxy -> web) | Sits **between internet and servers** (e.g., client -> reverse proxy -> internal servers) |
| Hides client’s identity (IP masking, content filtering, etc.)       | Hides internal server details (security, load distribution)                               |
| Example: Accessing blocked sites via proxy                          | Example: NGINX forwarding requests to backend apps                                        |


### More about the location block

### Docker, different types of volumes in docker, networking in docker

### Cloud computing and USPs of cloud computing (5 points)

### CNCF

### What is DevOps, what do we do in devops

### CI/CD - what why and how

### Microservices Architecture

### About Terraform

### Where are `output`s stored in Terraform