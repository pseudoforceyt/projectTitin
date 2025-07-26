---
layout: about
---

### \#! in bash

```bash
#! interpreter [optional-one-arg-only]
```
Called Shebang [derived from **sh**arp-**bang** or ha**sh**-**bang**], also a comment but a special one. This line at the start of shell scripts defines the interpreter to be used to run the script. It can be shells (`sh, bash, zsh, fish, etc.,`), another script (only on Linux and Minix), or other interpreters like python, ruby, perl, awk, sed, etc.

---

### Other interpreters in shell scripts

We can define executables of other interpreters in the shebang and write the script in that language. For example, a python script can be prepended with `#!/usr/bin/python3` (or wherever it is available. if not known, by using `#!/usr/bin/env python3` to get it from PATH), and executed with `./scriptname` (extension not necessary in giving the file name).

---

### sudo while running script and sudo inside the script - all possible combinations

| Invocation                       | Inside Script             | Result                                                                   |
|----------------------------------|---------------------------|--------------------------------------------------------------------------|
| 1. Run script with `sudo`        | No `sudo` inside script   | Entire script runs as root                                               |
| 2. Run script with `sudo`        | `sudo` used inside script | `sudo` inside script becomes redundant but works                         |
| 3. Run script without `sudo`     | `sudo` used inside script | Only commands prefixed with `sudo` run as root. PASSWORD IS PROMPTED WHEN RUN MANUALLY IN THE TERMINAL.    |
| 4. Run script without `sudo`     | No `sudo` inside script   | Entire script runs as normal user, privileged commands fail           |

---

### [] [[]] (())

[ <test> ] - `test <test>` (test command)

[[ <test> ]] - (not supported in Bourne Shell `sh`) extended testing with bash's own evaluator (with Extended Regex Engine regex matching if `=~` is used)

Sidenote on exploration: ERE does not support back references (`(character class 1)<some other expression>\1`) and lookaheads/lookbehinds [`something(?=which has this ahead of it)`/`(?<=behind something there is this)something`]

( ) = run commands inside a subshell, can be nested to run subshells inside subshells like this `( ( ) )`, not like this:

(( )) = arithmetic evaluations in C syntax

---

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

---

### Types of redirectors

* `n>` : Output redirection (overwrites file) where n is the File Descriptor number [1=stdout, 2=stderr, 3 4 5 ... are custom file descriptors which can be "opened" by using it once]
* `n>>` : Output redirection (appends file)
* `<` : Input redirection (sends stdin to LHS)
* `<<DELIMITER` : HereDoc (Bash only) - All lines upto DELIMITER are passed as stdin
* `<<<` : HereString (Bash only) - String after <<< is passed to stdin

---

### < > as operators instead of redirectors

* \< \> can be used in test expression [ ]
* < > can directly be used in extended test expression [[ ]]
* The above two are for ascii based string comparison
* All the numeric comparisons can be made inside (( )) with C syntax (where < > can be used without escaping as well)

---

### grep awk sed tee

#### GREP
**G**lobal **R**egular **E**xpression **P**rint - Searches for the provided pattern in the file/stdin stream

About the arguments I used:

`-v, --invert-match`  
       Invert the sense of matching, to select non-matching lines.  
`-A NUM, --after-context=NUM`  
       Print  NUM  lines of trailing context after matching lines.  
`-F, --fixed-strings`  
       Interpret PATTERNS as fixed strings, not regular expressions.  
`-x, --line-regexp`  
       Select only those matches that exactly match the whole line. For a regular expression pattern, this is  
       like parenthesizing the pattern and then surrounding it with ^ and $.  
`-f FILE, --file=FILE`  
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

Most common usage of sed is for its substitution command `s/substitute first occurrence/with something else/` `s/or globally substitute/with something else/g`

The delimiter / is from the search operation in ed. Other characters can also be used as delimiter (defined by the first character after the first command `s`).

Streams can be edited in-place with `-i` (a temporary output file is created in the background, and then the original file is replaced by the temporary file)

#### AWK
(abbreviation of creators names, indha kelvi inga mukkiyam illa)

It is a pattern scanning and processing language. Preceded by sed and served as an inspiration for Perl, it is a powerful construct for line based input processing. An AWK program is a series of pattern action pairs, written as:

```awk
condition { action }
condition { action }
...
```

The `action`s are AWK commands, which can be function calls, variable assignments, calculations, or any combination of those. There are constructs for loops and conditionals as well. Users can also define functions:

```awk
function add_three(number) {
    return number + 3
}
```

AWK's built-in variables include the field variables: $1, $2, $3, and so on ($0 represents the entire record). They hold the text or values in the individual text-fields in a record.

Other variables include:

- `NR`: Number of Records. Keeps a current count of the number of input records read so far from all data files. It starts at zero, but is never automatically reset to zero.
- `FNR`: File Number of Records. Keeps a current count of the number of input records read so far in the current file. This variable is automatically reset to zero each time a new file is started.
- `NF`: Number of Fields. Contains the number of fields in the current input record. The last field in the input record can be designated by `$NF`, the 2nd-to-last field by `$(NF-1)`, the 3rd-to-last field by `$(NF-2)`, etc.
- `FILENAME`: Contains the name of the current input-file.
- `FS`: Field Separator. Contains the "field separator" used to divide fields in the input record. The default, "white space", allows any sequence of space and tab characters. `FS` can be reassigned with another character or character sequence to change the field separator.
- `RS`: Record Separator. Stores the current "record separator" character. Since, by default, an input line is the input record, the default record separator character is a "newline".
- `OFS`: Output Field Separator. Stores the "output field separator", which separates the fields when `awk` prints them. The default is a "space" character.
- `ORS`: Output Record Separator. Stores the "output record separator", which separates the output records when `awk` prints them. The default is a "newline" character.
- `OFMT`: Output Format. Stores the format for numeric output. The default format is `"%.6g".

This makes it most useful to handle files with fields and records, such as csv files.

In the interest of time, I am pausing my exploration of awk here.

#### tee

A shell command that copies stdin to one or more files in addition to stdout. \*nix tee:

```bash
tee [-a] [-i] [file...]
```
* `file...` One or more names for files to receive the command input data
* `-a` Append to a file rather than overwriting
* `-i` Ignore interrupts

---

### Nginx - all uses

NGINX is a high-performance web server with multiple uses

- Web Server - Serves static content like HTML, CSS, JS, images.
- Reverse Proxy - Forwards client requests to backend servers and returns their responses to the client.
- Content Cache - Caches static or dynamic content to improve load times and reduce backend load.
- Load Balancer - Distributes incoming traffic among multiple backend servers for high availability and scalability.
- TCP/UDP Proxy and Mail Proxy
- SSL/TLS Termination Proxy - Handles SSL handshakes and forwards decrypted traffic to backend services.
- API Gateway (lightweight use cases) - Acts as an interface between client and microservices for routing, security, and throttling.

Common Gateway Interface (CGI) is an interface specification that enables web servers to execute an external program to process HTTP or HTTPS user requests. Nginx supports FastCGI, which is an improved version of CGI (and micro WSGI or uWSGI - Web Server Gateway Interface).

---

### (Forward) Proxy vs Reverse Proxy

| Forward Proxy                                               | Reverse Proxy                                                                             |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Sits **between client and internet** (ex: client -> proxy -> web) | Sits **between internet and servers** (ex: client -> reverse proxy -> internal servers) |
| Hides client’s identity (IP masking, content filtering, etc.)       | Hides internal server details (security, load distribution)                               |
| Example: Accessing blocked sites via proxy                          | Example: NGINX forwarding requests to backend apps                                        |

---

### More about the location block

The `location` block is used inside a `server` block to define how Nginx should respond to specific request URIs.

It’s critical for routing requests, proxying, rewriting, restricting access, and more.

#### Basic Syntax

```nginx
location [modifier] <pattern> {
    # actions for matching URIs
}
```

#### Types of Location Matching (Modifiers)

Nginx supports 5 types of matching, each with different behavior and priority.

| Modifier | Type                           | Example                  | Priority |
| -------- | ------------------------------ | ------------------------ | -------- |
| `=`      | **Exact** match                | `location = /about.html` | 1st      |
| `^~`     | **Prefix** match (stop search) | `location ^~ /static/`   | 2nd      |
| *(none)* | **Prefix** match               | `location /images/`      | 3rd      |
| `~`      | **Regex** (case-sensitive)     | `location ~ \.php$`      | 4th      |
| `~*`     | **Regex** (case-insensitive)   | `location ~* \.jpg$`     | 5th      |

#### Matching Order Logic

When a request comes in, Nginx does the following:

1. Checks for **exact match** (`=`).
2. Then **prefix match with `^~`**.
3. Then **all regex matches** (`~`, `~*`).
4. Finally, **longest regular prefix match** (no modifier).

If a regex match occurs, it takes precedence over plain prefix matches unless `^~` is used.

#### Common Directives Inside `location`

| Directive      | Purpose                                                            |
| -------------- | ------------------------------------------------------------------ |
| `root`         | Set root directory for this location                               |
| `alias`        | Map location to different path (important distinction from `root`) |
| `try_files`    | Serve files or fallback to something else                          |
| `proxy_pass`   | Forward request to a backend (reverse proxy)                       |
| `return`       | Return a specific status or redirect                               |
| `rewrite`      | Rewrite the request URI                                            |
| `add_header`   | Add custom headers                                                 |
| `limit_except` | Restrict methods (e.g., GET, POST)                                 |
| `auth_basic`   | Enable basic HTTP authentication                                   |

#### `root` Example

```nginx
location /img/ {
    root /data;
}
```

**Request**: `/img/cat.jpg` looks for `/data/img/cat.jpg`

#### `alias` Example

```nginx
location /img/ {
    alias /data/images/;
}
```

**Request**: `/img/cat.jpg` looks for `/data/images/cat.jpg`

With `alias`, the path after the match is **not** appended.

#### `try_files` — Best for SPA or fallbacks

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

If the uri is `/about`, Nginx checks:

1. `/about`
2. `/about/`
3. `/index.html`

#### `proxy_pass` — Reverse Proxy

```nginx
location /api/ {
    proxy_pass http://127.0.0.1:4000/;
}
```

Can also proxy with modified paths using regex captures.

---

### Different types of volumes in docker, networking in docker

#### Docker Volumes:

Named Volumes - Managed by Docker, persist data across container restarts. If unnamed, they are "anonymous" volumes.
```bash
docker volume create my_volume
docker run -v my_volume:/data alpine
```

Bind Mounts - Map host directory (or file) to container directory (or file).
```bash
docker run -v /host/path:/container/path alpine
```

tmpfs Mounts - In-memory storage, data lost on container restart.
```bash
docker run --tmpfs /tmpfs alpine
```

We can also directly mount block storage devices, such as an external drive, a drive partition, or a loop device.

#### Docker Networking:

- bridge (default) - Containers on same host can communicate.

- host - Shares host’s network stack (no isolation).

- overlay - Connect multiple docker daemons (the background process that performs all the tasks) together.

- macvlan - Assigns MAC address to containers, making them appear as physical devices on the network.

- ipvlan - Allows assigning IPv4 and/or IPv6 addresses to containers 

- none - No network connectivity. Complete isolation between the container and everything else.

---

[^1]

### USPs of cloud computing (what do you mean "there are 5 points"???)

Cloud computing is a term used to describe the delivery of on-demand computing resources: hardware, storage, databases, networking, and software; to businesses and individuals via a network (usually the internet). Cloud computing enables organizations to access and store information without managing their own physical devices or IT infrastructure. 

#### Faster time to market
You can spin up new instances or retire them in seconds, allowing developers to accelerate development with quick deployments.

#### Scalability and flexibility
You can quickly scale resources and storage up to meet business demands without having to invest in physical infrastructure.

Companies don’t need to pay for or build the infrastructure needed to support their highest load levels. Likewise, they can quickly scale down if resources aren’t being used.

#### Cost savings
You only pay for the resources you actually use ("Pay as you go"). This helps you avoid overbuilding and overprovisioning your data center and gives your IT teams back valuable time to focus on more strategic work. 

#### Better collaboration
Cloud storage enables you to make data available anywhere you are, anytime you need it. Instead of being tied to a location or specific device, people can access data from anywhere in the world from any device—as long as they have an internet connection.

#### Advanced security
Despite popular perceptions, cloud computing can actually strengthen your security posture because of the depth and breadth of security features, automatic maintenance, and centralized management.

Reputable cloud providers also hire top security experts and employ the most advanced solutions, providing more robust protection. 

#### Data loss prevention
Cloud providers offer backup and disaster recovery features. Storing data in the cloud rather than locally can help prevent data loss in the event of an emergency, such as hardware malfunction, malicious threats, or even simple user error. 

### Cloud Native Computing Foundation (CNCF)

CNCF is a part of the Linux Foundation that fosters and sustains open-source projects critical to cloud-native computing. CNCF hosts projects like:

- Kubernetes (container orchestration)
- Prometheus (monitoring)
- Envoy (service proxy)
- Helm (Kubernetes package manager)

The above are **graduated** projects, which are mature and used widely. The CNCF also incubates projects https://www.cncf.io/projects/

The Foundation’s mission is to make cloud native computing ubiquitous (common, used everywhere).

### DevOps - Developer Operations

*There is no single "definition" for what DevOps is*

DevOps is a set of practices that bridges the gap between software development (Dev) and IT operations (Ops) to deliver applications and services.

DevOps encompasses necessary tasks of software development and can lead to shortening development time and improving the development **life cycle**.

#### Life cycle?

**Systems Development Life Cycle** (SDLC) is a process for planning, creating, testing, and deploying an information system. There are usually six stages in this cycle: requirement analysis, design, development and testing, implementation, documentation, and evaluation. Like anything that is manufactured on an assembly line, an SDLC aims to produce high-quality systems that meet or exceed expectations, based on requirements, by delivering systems within scheduled time frames and cost estimates.

| Strengths                              | Weaknesses                                      |
|----------------------------------------|-------------------------------------------------|
| Control                                | Increased development time                      |
| Monitor large projects                 | Increased development cost                      |
| Detailed steps                         | Systems must be defined up front                |
| Evaluate costs and completion targets  | Rigidity (difficult to adapt to changes once the process has started) |
| Documentation                          | Hard to estimate costs, project overruns        |
| Well defined user input                | User input is sometimes limited                 |
| Ease of maintenance                    | Little parallelism (as the stages are sequential)    |
| Development and design standards       | Automation of documentation and standards is limited |
|                                        | Projects canned early on that result in little or no value |

DevOps Research and Assessment (DORA), a group as part of Google Cloud, has developed a series of metrics which are intended to measure software development efficiency and reliability. These metrics include:

- Deployment Frequency: Time between code deployments.
- Mean Lead Time for Changes: Time between code commit and deployment.
- Change Failure Rate: Percentage of deployments causing production issues.
- Failed Deployment Recovery Time (formerly Mean Time To Recover)
- Reliability (added in 2021): Measures operational performance, focusing on availability and adherence to user expectations.

### CI/CD - what why and how

Continuous Integration (CI): Developers frequently merge code into a shared repository. Automated builds and tests validate each change.

Continuous delivery and/or deployment (CD) is a 2 part process that refers to the integration, testing, and delivery of code changes. Continuous delivery stops short of automatic production deployment, while continuous deployment automatically releases the updates into the production environment.

Taken together, these connected practices are often referred to as a "CI/CD pipeline" and are supported by development and operations teams working together.

Tools: Jenkins, GitLab CI/CD, GitHub Actions, ArgoCD.

CI/CD helps organizations avoid bugs and code failures while maintaining a continuous cycle of software development and updates. As apps grow larger, features of CI/CD can help decrease complexity, increase efficiency, and streamline workflows.

### Why Jenkins over GitHub Actions

| Jenkins                                | GitHub Actions                     |
| -------------------------------------- | ---------------------------------- |
| Full infrastructure control            | Fully managed (SaaS-first)         |
| Highly customizable pipelines          | Quick setup, simpler YAML workflows|
| Rich plugin ecosystem                  | Native GitHub integrations         |
| Good for enterprise-scale CI/CD        | Great for small to medium projects |
| Can work with any VCS (Git, SVN, etc.) | GitHub only                        |
| Complex agent resource management      | Simple runners, limited control    |

### Microservices Architecture

Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of two or more services that are independently deployable and loosely coupled. These individual services are typically organized around business capabilities where each service is often owned/managed by a single, small team. Adopting microservices often goes hand in hand with DevOps, since they are the basis for continuous delivery practices that allow teams to adapt quickly to user requirements.

A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications.

Disadvantages of a monolithic architecture:
- Slower development speed – A large, monolithic application makes development more complex and slower.
- Scalability – You can’t scale individual components.
- Reliability – If there’s an error in any module, it could affect the entire application’s availability.
- Barrier to technology adoption – Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming.
- Lack of flexibility – A monolith is constrained by the technologies already used in the monolith.
- Deployment – A small change to a monolithic application requires the redeployment of the entire monolith.

Adopting the microservices architecture addresses all these disadvantages, at the cost of some of the simplicity that monoliths offer. There are more services in more places created by multiple teams, each new microservice can have its own infrastructural cost, the organizational overhead, and so on.

### About Terraform

### Where are `output`s stored in Terraform

[^1]: https://thedecisionlab.com/biases/the-sunk-cost-fallacy