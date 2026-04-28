[![CWE](https://cwe.mitre.org/images/cwe_logo.jpg)**Common Weakness Enumeration** \\
A community-developed list of SW & HW weaknesses that can become vulnerabilities](https://cwe.mitre.org/index.html)

[![New to CWE? click here!](https://cwe.mitre.org/images/new_to_cwe/new_to_cwe_click_here.png)](https://cwe.mitre.org/about/new_to_cwe.html "New to CWE click here logo")

[![CWE Most Important Hardware Weaknesses](https://cwe.mitre.org/images/mihw_logo.svg)](https://cwe.mitre.org/topHW/index.html "CWE Most Important Hardware Weaknesses")

[![CWE Top 25 Most Dangerous Weaknesses](https://cwe.mitre.org/images/cwe_top_25_logo_simple.svg)](https://cwe.mitre.org/top25/ "CWE Top 25")

|     |     |
| --- | --- |
| [Home](https://cwe.mitre.org/) \> [CWE List](https://cwe.mitre.org/data/index.html) \> <br> CWE-122: Heap-based Buffer Overflow (4.19.1) | ID Lookup: |

* * *

- [Home](https://cwe.mitre.org/index.html)
- About ▼

[Who We Are](https://cwe.mitre.org/about/index.html) [User Stories](https://cwe.mitre.org/about/user_stories.html) [History](https://cwe.mitre.org/about/history.html) [Documents](https://cwe.mitre.org/about/documents.html) [Videos](https://cwe.mitre.org/about/cwe_videos.html)

- Learn ▼

[Basics](https://cwe.mitre.org/about/new_to_cwe.html)

[Root Cause Mapping   ►](https://cwe.mitre.org/documents/cwe_usage/guidance.html)

[Guidance](https://cwe.mitre.org/documents/cwe_usage/guidance.html) [Quick Tips](https://cwe.mitre.org/documents/cwe_usage/quick_tips.html) [Examples](https://cwe.mitre.org/documents/cwe_usage/mapping_examples.html)



[How to Contribute Weakness Content](https://cwe.mitre.org/community/submissions/overview.html) [FAQs](https://cwe.mitre.org/about/faq.html) [Glossary](https://cwe.mitre.org/documents/glossary/index.html)

- Access Content ▼



[Top-N Lists   ►](https://cwe.mitre.org/scoring/index.html#top_n_lists)

[Top 25 Software](https://cwe.mitre.org/top25/) [Top Hardware](https://cwe.mitre.org/topHW/index.html) [Top 10 KEV Weaknesses](https://cwe.mitre.org/top25/archive/2025/2025_kev_list.html)





[CWE List   ►](https://cwe.mitre.org/data/index.html)

[Current Version](https://cwe.mitre.org/data/index.html) [Reports](https://cwe.mitre.org/data/reports.html) [Visualizations](https://cwe.mitre.org/data/pdfs.html) [Releases Archive](https://cwe.mitre.org/data/archive.html)



[Downloads](https://cwe.mitre.org/data/downloads.html) [REST API](https://github.com/CWE-CAPEC/REST-API-wg/blob/main/Quick%20Start.md)

- Community ▼



[News   ►](https://cwe.mitre.org/news/)

[Current News](https://cwe.mitre.org/news/archives/news2026.html) [Blog](https://medium.com/@CWE_CAPEC) [Podcast](https://cwe.mitre.org/news/podcast.html) [News Archive](https://cwe.mitre.org/news/archives/index.html)



[CWE Board](https://cwe.mitre.org/community/board.html) [Working Groups & Special Interest Groups](https://cwe.mitre.org/community/working_groups.html) [Email Lists](https://cwe.mitre.org/community/registration.html)

- Search ▼

[Search CWE List](https://cwe.mitre.org/) [Search Website](https://cwe.mitre.org/find/index.html)


|  |  |  |
| |     |     |
| --- | --- |
| CWE Glossary Definition | ![x](https://cwe.mitre.org/images/layout/close.gif) |
|  |

## CWE-122: Heap-based Buffer Overflow

|     |
| --- |
| Weakness ID: 122<br> <br> <br>[Vulnerability Mapping](https://cwe.mitre.org/data/definitions/122.html#Vulnerability_Mapping_Notes_122):ALLOWEDThis CWE ID may be used to map to real-world vulnerabilities<br>Abstraction:<br> VariantVariant - a weakness that is linked to a certain type of product, typically involving a specific language or technology. More specific than a Base weakness. Variant level weaknesses typically describe issues in terms of 3 to 5 of the following dimensions: behavior, property, technology, language, and resource. |

View customized information:

ConceptualFor users who are interested in more notional aspects of a weakness. Example: educators, technical writers, and project/program managers.OperationalFor users who are concerned with the practical application and details about the nature of a weakness and how to prevent it from happening. Example: tool developers, security researchers, pen-testers, incident response analysts.Mapping FriendlyFor users who are mapping an issue to CWE/CAPEC IDs, i.e., finding the most appropriate CWE for a specific issue (e.g., a CVE record). Example: tool developers, security researchers.CompleteFor users who wish to see all available information for the CWE/CAPEC entry.CustomFor users who want to customize what details are displayed.

×

## Edit Custom Filter

ConceptualOperationalMapping FriendlySelect All

ResetClearSubmitCancel

![+](https://cwe.mitre.org/images/head_more.gif)Description


A heap overflow condition is a buffer overflow, where the buffer that can be overwritten is allocated in the heap portion of memory, generally meaning that the buffer was allocated using a routine such as malloc().

![+](https://cwe.mitre.org/images/head_more.gif)Alternate Terms


|     |     |
| --- | --- |
| Heap Overflow |  |
| Heap Buffer Overflow |  |

![+](https://cwe.mitre.org/images/head_more.gif)Common Consequences

![Section Help](https://cwe.mitre.org/images/dictionary.gif)This table specifies different individual consequences
associated with the weakness. The Scope identifies the application security area that is
violated, while the Impact describes the negative technical impact that arises if an
adversary succeeds in exploiting this weakness. The Likelihood provides information about
how likely the specific consequence is expected to be seen relative to the other
consequences in the list. For example, there may be high likelihood that a weakness will be
exploited to achieve a certain impact, but a low likelihood that it will be exploited to
achieve a different impact.

| Impact | Details |
| --- | --- |
| _DoS: Crash, Exit, or Restart; DoS: Resource Consumption (CPU); DoS: Resource Consumption (Memory)_ | Scope: Availability<br>Buffer overflows generally lead to crashes. Other attacks leading to lack of availability are possible, including putting the program into an infinite loop. |
| _Execute Unauthorized Code or Commands; Bypass Protection Mechanism; Modify Memory_ | Scope: Integrity, Confidentiality, Availability, Access Control<br>Buffer overflows often can be used to execute arbitrary code, which is usually outside the scope of a program's implicit security policy. Besides important user data, heap-based overflows can be used to overwrite function pointers that may be living in memory, pointing it to the attacker's code. Even in applications that do not explicitly use function pointers, the run-time will usually leave many in memory. For example, object methods in C++ are generally implemented using function pointers. Even in C programs, there is often a global offset table used by the underlying runtime. |
| _Execute Unauthorized Code or Commands; Bypass Protection Mechanism; Other_ | Scope: Integrity, Confidentiality, Availability, Access Control, Other<br>When the consequence is arbitrary code execution, this can often be used to subvert any other security service. |

![+](https://cwe.mitre.org/images/head_more.gif)Potential Mitigations

| Phase(s) | Mitigation |
| --- | --- |
|  | Pre-design: Use a language or compiler that performs automatic bounds checking. |
| Architecture and Design | Use an abstraction library to abstract away risky APIs. Not a complete solution. |
| Operation; Build and Compilation | Strategy: _Environment Hardening_<br>Use automatic buffer overflow detection mechanisms that are offered by certain compilers or compiler extensions. Examples include: the Microsoft Visual Studio /GS flag, Fedora/Red Hat FORTIFY\_SOURCE GCC flag, StackGuard, and ProPolice, which provide various mechanisms including canary-based detection and range/index checking. <br>D3-SFCV (Stack Frame Canary Validation) from D3FEND \[ [REF-1334](https://cwe.mitre.org/data/definitions/122.html#REF-1334_122)\] discusses canary-based detection in detail. <br>Effectiveness: Defense in Depth<br>**Note:**<br>This is not necessarily a complete solution, since these mechanisms only detect certain types of overflows. In addition, the result is still a denial of service, since the typical response is to exit the application. |
| Operation; Build and Compilation | Strategy: _Environment Hardening_<br>Run or compile the software using features or extensions that randomly arrange the positions of a program's executable and libraries in memory. Because this makes the addresses unpredictable, it can prevent an attacker from reliably jumping to exploitable code. <br>Examples include Address Space Layout Randomization (ASLR) \[ [REF-58](https://cwe.mitre.org/data/definitions/122.html#REF-58_122)\] \[ [REF-60](https://cwe.mitre.org/data/definitions/122.html#REF-60_122)\] and Position-Independent Executables (PIE) \[ [REF-64](https://cwe.mitre.org/data/definitions/122.html#REF-64_122)\]. Imported modules may be similarly realigned if their default memory addresses conflict with other modules, in a process known as "rebasing" (for Windows) and "prelinking" (for Linux) \[ [REF-1332](https://cwe.mitre.org/data/definitions/122.html#REF-1332_122)\] using randomly generated addresses. ASLR for libraries cannot be used in conjunction with prelink since it would require relocating the libraries at run-time, defeating the whole purpose of prelinking. <br>For more information on these techniques see D3-SAOR (Segment Address Offset Randomization) from D3FEND \[ [REF-1335](https://cwe.mitre.org/data/definitions/122.html#REF-1335_122)\]. <br>Effectiveness: Defense in Depth<br>**Note:** These techniques do not provide a complete solution. For instance, exploits frequently use a bug that discloses memory addresses in order to maximize reliability of code execution \[ [REF-1337](https://cwe.mitre.org/data/definitions/122.html#REF-1337_122)\]. It has also been shown that a side-channel attack can bypass ASLR \[ [REF-1333](https://cwe.mitre.org/data/definitions/122.html#REF-1333_122)\]. |
| Implementation | Implement and perform bounds checking on input. |
| Implementation | Strategy: _Libraries or Frameworks_<br>Do not use dangerous functions such as gets. Look for their safe equivalent, which checks for the boundary. |
| Operation | Use OS-level preventative functionality. This is not a complete solution, but it provides some defense in depth. |

![+](https://cwe.mitre.org/images/head_more.gif)
Relationships


![Section Help](https://cwe.mitre.org/images/dictionary.gif)This table shows the weaknesses and high level categories that are related to this
weakness. These relationships are defined as ChildOf, ParentOf, MemberOf and give insight to
similar items that may exist at higher and lower levels of abstraction. In addition,
relationships such as PeerOf and CanAlsoBe are defined to show similar weaknesses that the user
may want to explore.

![+](https://cwe.mitre.org/images/head_more.gif)Relevant to the view "Research Concepts" (View-1000)


| Nature | Type | ID | Name |
| ChildOf | ![Base](https://cwe.mitre.org/images/icons/base.gif)Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource. | [787](https://cwe.mitre.org/data/definitions/787.html) | Out-of-bounds Write |
| ChildOf | ![Base](https://cwe.mitre.org/images/icons/base.gif)Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource. | [788](https://cwe.mitre.org/data/definitions/788.html) | Access of Memory Location After End of Buffer |

![+](https://cwe.mitre.org/images/head_more.gif)Modes
Of Introduction

![Section Help](https://cwe.mitre.org/images/dictionary.gif)The different Modes of Introduction provide information
about how and when this
weakness may be introduced. The Phase identifies a point in the life cycle at which
introduction
may occur, while the Note provides a typical scenario related to introduction during the
given
phase.

| Phase | Note |
| --- | --- |
| Implementation |  |

![+](https://cwe.mitre.org/images/head_more.gif)Applicable Platforms

![Section Help](https://cwe.mitre.org/images/dictionary.gif)This listing shows possible areas for which the given
weakness could appear. These
may be for specific named Languages, Operating Systems, Architectures, Paradigms,
Technologies,
or a class of such platforms. The platform is listed along with how frequently the given
weakness appears for that instance.

|     |     |
| --- | --- |
| Languages | Class: Memory-Unsafe<br> <br> <br>(Often Prevalent)<br>C<br> <br> <br>(Often Prevalent)<br>C++<br> <br> <br>(Often Prevalent) |
| Technologies | Class: Not Technology-Specific<br> <br> <br>(Undetermined Prevalence) |

![+](https://cwe.mitre.org/images/head_more.gif)Likelihood Of Exploit


High

![+](https://cwe.mitre.org/images/head_more.gif)Demonstrative Examples

Example 1

While buffer overflow examples can be rather complex, it is possible to have very simple, yet still exploitable, heap-based buffer overflows:

(bad code)

Example Language: C



The buffer is allocated heap memory with a fixed size, but there is no guarantee the string in argv\[1\] will not exceed this size and cause an overflow.

Example 2

This example applies an encoding procedure to an input string and stores it into a buffer.

(bad code)

Example Language: C



The programmer attempts to encode the ampersand character in the user-controlled string, however the length of the string is validated before the encoding procedure is applied. Furthermore, the programmer assumes encoding expansion will only expand a given character by a factor of 4, while the encoding of the ampersand expands by 5. As a result, when the encoding procedure expands the string it is possible to overflow the destination buffer if the attacker provides a string of many ampersands.

![+](https://cwe.mitre.org/images/head_more.gif)Selected Observed
Examples

_Note: this is a curated list of examples for users to understand the variety of ways in which this_
_weakness can be introduced. It is not a complete list of all CVEs that are related to this CWE entry._

| Reference | Description |
| --- | --- |
| [CVE-2025-46687](https://www.cve.org/CVERecord?id=CVE-2025-46687) | Chain: Javascript engine code does not perform a length check ( [CWE-1284](https://cwe.mitre.org/data/definitions/1284.html)) leading to integer overflow ( [CWE-190](https://cwe.mitre.org/data/definitions/190.html)) causing allocation of smaller buffer than expected ( [CWE-131](https://cwe.mitre.org/data/definitions/131.html)) resulting in a heap-based buffer overflow ( [CWE-122](https://cwe.mitre.org/data/definitions/122.html)) |
| [CVE-2021-43537](https://www.cve.org/CVERecord?id=CVE-2021-43537) | Chain: in a web browser, an unsigned 64-bit integer is forcibly cast to a 32-bit integer ( [CWE-681](https://cwe.mitre.org/data/definitions/681.html)) and potentially leading to an integer overflow ( [CWE-190](https://cwe.mitre.org/data/definitions/190.html)). If an integer overflow occurs, this can cause heap memory corruption ( [CWE-122](https://cwe.mitre.org/data/definitions/122.html)) |
| [CVE-2007-4268](https://www.cve.org/CVERecord?id=CVE-2007-4268) | Chain: integer signedness error ( [CWE-195](https://cwe.mitre.org/data/definitions/195.html)) passes signed comparison, leading to heap overflow ( [CWE-122](https://cwe.mitre.org/data/definitions/122.html)) |
| [CVE-2009-2523](https://www.cve.org/CVERecord?id=CVE-2009-2523) | Chain: product does not handle when an input string is not NULL terminated ( [CWE-170](https://cwe.mitre.org/data/definitions/170.html)), leading to buffer over-read ( [CWE-125](https://cwe.mitre.org/data/definitions/125.html)) or heap-based buffer overflow ( [CWE-122](https://cwe.mitre.org/data/definitions/122.html)). |
| [CVE-2021-29529](https://www.cve.org/CVERecord?id=CVE-2021-29529) | Chain: machine-learning product can have a heap-based<br>buffer overflow ( [CWE-122](https://cwe.mitre.org/data/definitions/122.html)) when some integer-oriented bounds are<br>calculated by using ceiling() and floor() on floating point values<br>( [CWE-1339](https://cwe.mitre.org/data/definitions/1339.html)) |
| [CVE-2010-1866](https://www.cve.org/CVERecord?id=CVE-2010-1866) | Chain: integer overflow ( [CWE-190](https://cwe.mitre.org/data/definitions/190.html)) causes a negative signed value, which later bypasses a maximum-only check ( [CWE-839](https://cwe.mitre.org/data/definitions/839.html)), leading to heap-based buffer overflow ( [CWE-122](https://cwe.mitre.org/data/definitions/122.html)). |

![+](https://cwe.mitre.org/images/head_more.gif)Weakness Ordinalities

| Ordinality | Description |
| --- | --- |
| Primary | (where the weakness exists independent of other weaknesses) |

![+](https://cwe.mitre.org/images/head_more.gif)Detection
Methods

| Method | Details |
| --- | --- |
| Fuzzing | Fuzz testing (fuzzing) is a powerful technique for generating large numbers of diverse inputs - either randomly or algorithmically - and dynamically invoking the code with those inputs. Even with random inputs, it is often capable of generating unexpected results such as crashes, memory corruption, or resource consumption. Fuzzing effectively produces repeatable test cases that clearly indicate bugs, which helps developers to diagnose the issues.<br> <br>Effectiveness: High |
| Automated Dynamic Analysis | Use tools that are integrated during<br>compilation to insert runtime error-checking mechanisms<br>related to memory safety errors, such as AddressSanitizer<br>(ASan) for C/C++ \[ [REF-1518](https://cwe.mitre.org/data/definitions/122.html#REF-1518_122)\].<br> <br>Effectiveness: Moderate<br> **Note:** Crafted inputs are necessary to<br> reach the code containing the error, such as generated<br> by fuzzers. Also, these tools may reduce performance,<br> and they only report the error condition - not the<br> original mistake that led to the<br> error. |

![+](https://cwe.mitre.org/images/head_more.gif)Functional Areas

- Memory Management

![+](https://cwe.mitre.org/images/head_more.gif)Affected Resources

- Memory

![+](https://cwe.mitre.org/images/head_more.gif)Memberships


![Section Help](https://cwe.mitre.org/images/dictionary.gif)This MemberOf Relationships table shows additional CWE Categories and Views that
reference this weakness as a member. This information is often useful in understanding where a
weakness fits within the context of external information sources.

| Nature | Type | ID | Name |
| MemberOf | ![Category](https://cwe.mitre.org/images/icons/category.gif)Category - a CWE entry that contains a set of other entries that share a common characteristic. | [970](https://cwe.mitre.org/data/definitions/970.html) | SFP Secondary Cluster: Faulty Buffer Access |
| MemberOf | ![Category](https://cwe.mitre.org/images/icons/category.gif)Category - a CWE entry that contains a set of other entries that share a common characteristic. | [1161](https://cwe.mitre.org/data/definitions/1161.html) | SEI CERT C Coding Standard - Guidelines 07. Characters and Strings (STR) |
| MemberOf | ![Category](https://cwe.mitre.org/images/icons/category.gif)Category - a CWE entry that contains a set of other entries that share a common characteristic. | [1399](https://cwe.mitre.org/data/definitions/1399.html) | Comprehensive Categorization: Memory Safety |
| MemberOf | ![View](https://cwe.mitre.org/images/icons/view.gif)View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries). | [1435](https://cwe.mitre.org/data/definitions/1435.html) | Weaknesses in the 2025 CWE Top 25 Most Dangerous Software Weaknesses |

![+](https://cwe.mitre.org/images/head_more.gif)Vulnerability Mapping Notes

|     |     |
| --- | --- |
| Usage | **ALLOWED**<br>(this CWE ID may be used to map to real-world vulnerabilities) |
| Reason | Acceptable-Use |
| Rationale | This CWE entry is at the Variant level of abstraction, which is a preferred level of abstraction for mapping to the root causes of vulnerabilities. |
| Comments | Carefully read both the name and description to ensure that this mapping is an appropriate fit. Do not try to 'force' a mapping to a lower-level Base/Variant simply to comply with this preferred level of abstraction. |

![+](https://cwe.mitre.org/images/head_more.gif)Notes

Terminology

There is significant inconsistency
regarding the "buffer overflow" term, which can have
multiple interpretations and uses. Many people mean
"writing past the end of a buffer." Others mean "writing
past the end of a buffer, or before the beginning of a
buffer." Still others might include "read" in the term.


![+](https://cwe.mitre.org/images/head_more.gif)Taxonomy
Mappings

| Mapped Taxonomy Name | Node ID | Fit | Mapped Node Name |
| --- | --- | --- | --- |
| CLASP |  |  | Heap overflow |
| Software Fault Patterns | SFP8 |  | Faulty Buffer Access |
| CERT C Secure Coding | STR31-C | CWE More Specific | Guarantee that storage for strings has sufficient space for character data and the null terminator |
| ISA/IEC 62443 | Part 4-2 |  | Req CR 3.5 |
| ISA/IEC 62443 | Part 3-3 |  | Req SR 3.5 |
| ISA/IEC 62443 | Part 4-1 |  | Req SI-1 |
| ISA/IEC 62443 | Part 4-1 |  | Req SI-2 |
| ISA/IEC 62443 | Part 4-1 |  | Req SVV-1 |
| ISA/IEC 62443 | Part 4-1 |  | Req SVV-3 |

![+](https://cwe.mitre.org/images/head_more.gif)Related Attack Patterns

| CAPEC-ID | Attack Pattern Name |
| --- | --- |
| [CAPEC-92](http://capec.mitre.org/data/definitions/92.html) | Forced Integer Overflow |

![+](https://cwe.mitre.org/images/head_more.gif)References

|     |     |
| --- | --- |
| \[REF-7\] | Michael Howard and David LeBlanc. _"Writing Secure Code"._ Chapter 5, "Heap Overruns" Page 138. 2nd Edition. Microsoft Press. 2002-12-04.<br> <br> <br>< [https://www.microsoftpressstore.com/store/writing-secure-code-9780735617223](https://www.microsoftpressstore.com/store/writing-secure-code-9780735617223) >. |
| \[REF-44\] | Michael Howard, David LeBlanc and John Viega. _"24 Deadly Sins of Software Security"._ "Sin 5: Buffer Overruns." Page 89. McGraw-Hill. 2010. |
| \[REF-62\] | Mark Dowd, John McDonald and Justin Schuh. _"The Art of Software Security Assessment"._ Chapter 3, "Nonexecutable Stack", Page 76. 1st Edition. Addison Wesley. 2006. |
| \[REF-62\] | Mark Dowd, John McDonald and Justin Schuh. _"The Art of Software Security Assessment"._ Chapter 5, "Protection Mechanisms", Page 189. 1st Edition. Addison Wesley. 2006. |
| \[REF-58\] | Michael Howard. _"Address Space Layout Randomization in Windows Vista"._<br>< [https://learn.microsoft.com/en-us/archive/blogs/michael\_howard/address-space-layout-randomization-in-windows-vista](https://learn.microsoft.com/en-us/archive/blogs/michael_howard/address-space-layout-randomization-in-windows-vista) >.<br> <br> <br> ( _URL validated: 2023-04-07_) |
| \[REF-60\] | _"PaX"._<br>< [https://en.wikipedia.org/wiki/Executable\_space\_protection#PaX](https://en.wikipedia.org/wiki/Executable_space_protection#PaX) >.<br> <br> <br> ( _URL validated: 2023-04-07_) |
| \[REF-64\] | Grant Murphy. _"Position Independent Executables (PIE)"._ Red Hat. 2012-11-28.<br> <br> <br>< [https://www.redhat.com/en/blog/position-independent-executables-pie](https://www.redhat.com/en/blog/position-independent-executables-pie) >.<br> <br> <br> ( _URL validated: 2023-04-07_) |
| \[REF-18\] | Secure Software, Inc.. _"The CLASP Application Security Process"._ 2005.<br> <br> <br>< [https://cwe.mitre.org/documents/sources/TheCLASPApplicationSecurityProcess.pdf](https://cwe.mitre.org/documents/sources/TheCLASPApplicationSecurityProcess.pdf) >.<br> <br> <br> ( _URL validated: 2024-11-17_) |
| \[REF-1337\] | Alexander Sotirov and Mark Dowd. _"Bypassing Browser Memory Protections: Setting back browser security by 10 years"._ Memory information leaks. 2008.<br> <br> <br>< [https://www.blackhat.com/presentations/bh-usa-08/Sotirov\_Dowd/bh08-sotirov-dowd.pdf](https://www.blackhat.com/presentations/bh-usa-08/Sotirov_Dowd/bh08-sotirov-dowd.pdf) >.<br> <br> <br> ( _URL validated: 2023-04-26_) |
| \[REF-1332\] | John Richard Moser. _"Prelink and address space randomization"._ 2006-07-05.<br> <br> <br>< [https://lwn.net/Articles/190139/](https://lwn.net/Articles/190139/) >.<br> <br> <br> ( _URL validated: 2023-04-26_) |
| \[REF-1333\] | Dmitry Evtyushkin, Dmitry Ponomarev, Nael Abu-Ghazaleh. _"Jump Over ASLR: Attacking Branch Predictors to Bypass ASLR"._ 2016.<br> <br> <br>< [http://www.cs.ucr.edu/~nael/pubs/micro16.pdf](http://www.cs.ucr.edu/~nael/pubs/micro16.pdf) >.<br> <br> <br> ( _URL validated: 2023-04-26_) |
| \[REF-1334\] | D3FEND. _"Stack Frame Canary Validation (D3-SFCV)"._ 2023.<br> <br> <br>< [https://d3fend.mitre.org/technique/d3f:StackFrameCanaryValidation/](https://d3fend.mitre.org/technique/d3f:StackFrameCanaryValidation/) >.<br> <br> <br> ( _URL validated: 2023-04-26_) |
| \[REF-1335\] | D3FEND. _"Segment Address Offset Randomization (D3-SAOR)"._ 2023.<br> <br> <br>< [https://d3fend.mitre.org/technique/d3f:SegmentAddressOffsetRandomization/](https://d3fend.mitre.org/technique/d3f:SegmentAddressOffsetRandomization/) >.<br> <br> <br> ( _URL validated: 2023-04-26_) |
| \[REF-1477\] | Cybersecurity and Infrastructure Security Agency. _"Secure by Design Alert: Eliminating Buffer Overflow Vulnerabilities"._ 2025-02-12.<br> <br> <br>< [https://www.cisa.gov/resources-tools/resources/secure-design-alert-eliminating-buffer-overflow-vulnerabilities](https://www.cisa.gov/resources-tools/resources/secure-design-alert-eliminating-buffer-overflow-vulnerabilities) >.<br> <br> <br> ( _URL validated: 2025-07-18_) |
| \[REF-1518\] | _"AddressSanitizer"._<br>< [https://clang.llvm.org/docs/AddressSanitizer.html](https://clang.llvm.org/docs/AddressSanitizer.html) >.<br> <br> <br> ( _URL validated: 2025-12-10_) |

![+](https://cwe.mitre.org/images/head_more.gif)Content
History

| ![+](https://cwe.mitre.org/images/head_more.gif)Submissions |
| --- |
| Submission Date | Submitter | Organization |
| 2006-07-19<br> <br> <br>(CWE Draft 3, 2006-07-19) | CLASP |  |
|  |
| ![+](https://cwe.mitre.org/images/head_more.gif)Contributions |
| --- |
| Contribution Date | Contributor | Organization |
| 2023-11-14<br> <br> <br>(CWE 4.14, 2024-02-29) | participants in the CWE ICS/OT SIG 62443 Mapping Fall Workshop |  |
| _Contributed or reviewed taxonomy mappings for ISA/IEC 62443_ |
| ![+](https://cwe.mitre.org/images/head_less.gif)Modifications |
| --- |
| Modification Date | Modifier | Organization |
| 2026-01-21<br> <br> <br>(CWE 4.19.1, 2026-01-21) | CWE Content Team | MITRE |
| _updated Relationships_ |
| 2025-12-11<br> <br> <br>(CWE 4.19, 2025-12-11) | CWE Content Team | MITRE |
| _updated Alternate\_Terms, Applicable\_Platforms, Detection\_Factors, Observed\_Examples, References, Relationship\_Notes, Terminology\_Notes_ |
| 2025-09-09<br> <br> <br>(CWE 4.18, 2025-09-09) | CWE Content Team | MITRE |
| _updated Functional\_Areas, References_ |
| 2025-04-03<br> <br> <br>(CWE 4.17, 2025-04-03) | CWE Content Team | MITRE |
| _updated Applicable\_Platforms_ |
| 2024-02-29<br> <br> <br>(CWE 4.14, 2024-02-29) | CWE Content Team | MITRE |
| _updated Observed\_Examples, Taxonomy\_Mappings_ |
| 2023-10-26 | CWE Content Team | MITRE |
| _updated Observed\_Examples_ |
| 2023-06-29 | CWE Content Team | MITRE |
| _updated Mapping\_Notes_ |
| 2023-04-27 | CWE Content Team | MITRE |
| _updated Detection\_Factors, Potential\_Mitigations, References, Relationships, Time\_of\_Introduction_ |
| 2021-07-20 | CWE Content Team | MITRE |
| _updated Observed\_Examples_ |
| 2021-03-15 | CWE Content Team | MITRE |
| _updated References_ |
| 2020-02-24 | CWE Content Team | MITRE |
| _updated Relationships_ |
| 2019-01-03 | CWE Content Team | MITRE |
| _updated Relationships_ |
| 2018-03-27 | CWE Content Team | MITRE |
| _updated References_ |
| 2017-11-08 | CWE Content Team | MITRE |
| _updated Causal\_Nature, Likelihood\_of\_Exploit, Observed\_Examples, References, Relationships, Taxonomy\_Mappings, White\_Box\_Definitions_ |
| 2014-07-30 | CWE Content Team | MITRE |
| _updated Relationships, Taxonomy\_Mappings_ |
| 2014-06-23 | CWE Content Team | MITRE |
| _updated Observed\_Examples_ |
| 2013-02-21 | CWE Content Team | MITRE |
| _updated Demonstrative\_Examples, Potential\_Mitigations_ |
| 2012-10-30 | CWE Content Team | MITRE |
| _updated Demonstrative\_Examples_ |
| 2012-05-11 | CWE Content Team | MITRE |
| _updated Demonstrative\_Examples, References, Relationships_ |
| 2011-06-01 | CWE Content Team | MITRE |
| _updated Common\_Consequences_ |
| 2010-02-16 | CWE Content Team | MITRE |
| _updated References_ |
| 2009-10-29 | CWE Content Team | MITRE |
| _updated Relationships_ |
| 2009-01-12 | CWE Content Team | MITRE |
| _updated Common\_Consequences, Relationships_ |
| 2008-11-24 | CWE Content Team | MITRE |
| _updated Common\_Consequences, Other\_Notes, Relationship\_Notes_ |
| 2008-09-08 | CWE Content Team | MITRE |
| _updated Applicable\_Platforms, Common\_Consequences, Relationships, Other\_Notes, Taxonomy\_Mappings, Weakness\_Ordinalities_ |
| 2008-08-01 |  | KDM Analytics |
| _added/updated white box definitions_ |
| 2008-07-01 | Eric Dalci | Cigital |
| _updated Potential\_Mitigations, Time\_of\_Introduction_ |

More information is available — Please edit the custom filter or select a different filter. |

**Page Last Updated:**

January 21, 2026


|     |     |     |
| --- | --- | --- |
|  |
| [![MITRE](https://cwe.mitre.org/images/mitre_logo.gif)](http://www.mitre.org/) | [Site Map](https://cwe.mitre.org/sitemap.html) \| <br>[Terms of Use](https://cwe.mitre.org/about/termsofuse.html) \| <br>[Manage Cookies](https://cwe.mitre.org/data/definitions/122.html#) \| <br>[Cookie Notice](https://cwe.mitre.org/about/cookie_notice.html) \| <br>[Privacy Policy](https://cwe.mitre.org/about/privacy_policy.html) \| <br>[Contact Us](mailto:cwe@mitre.org) \| <br>[![CWE on X](https://cwe.mitre.org/images/x-logo-black.png)](https://x.com/CweCapec)[![CWE on LinkedIn](https://cwe.mitre.org/images/linkedin_sm.jpg)](https://www.linkedin.com/showcase/cve-cwe-capec)[![CWE on Bluesky](https://cwe.mitre.org/images/bluesky_logo_sm.png)](https://bsky.app/profile/cweprogram.bsky.social)[![CWE on Mastodon](https://cwe.mitre.org/images/mastodon-logo.png)](https://mastodon.social/@CWE_Program)[![CWE YouTube channel](https://cwe.mitre.org/images/youtube.png)](https://www.youtube.com/channel/UCpY9VIpRmFK4ebD6orssifA)[![CWE Out-of-Bounds-Read Podcast](https://cwe.mitre.org/images/out_of_bounds_read_logo.png)](https://cwe.mitre.org/news/podcast.html)[![CWE Blog on Medium blog](https://cwe.mitre.org/images/medium.png)](https://medium.com/@CWE_CAPEC)<br>Use of the Common Weakness Enumeration (CWE™) and the associated references from this website are subject to the [Terms of Use](https://cwe.mitre.org/about/termsofuse.html). CWE is sponsored by the [U.S. Department of Homeland Security](https://www.dhs.gov/) (DHS) [Cybersecurity and Infrastructure Security Agency](https://www.dhs.gov/cisa/cybersecurity-division) (CISA) and managed by the [Homeland Security Systems Engineering and Development Institute](https://www.dhs.gov/science-and-technology/hssedi) (HSSEDI) which is operated by [The MITRE Corporation](http://www.mitre.org/) (MITRE). Copyright © 2006–2026, The MITRE Corporation. CWE, CWSS, CWRAF, and the CWE logo are trademarks of The MITRE Corporation. | [![HSSEDI](https://cwe.mitre.org/images/hssedi.png)](https://www.dhs.gov/science-and-technology/hssedi) |