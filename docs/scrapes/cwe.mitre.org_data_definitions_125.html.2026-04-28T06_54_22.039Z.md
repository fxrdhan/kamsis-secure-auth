[![CWE](https://cwe.mitre.org/images/cwe_logo.jpg)**Common Weakness Enumeration** \\
A community-developed list of SW & HW weaknesses that can become vulnerabilities](https://cwe.mitre.org/index.html)

[![New to CWE? click here!](https://cwe.mitre.org/images/new_to_cwe/new_to_cwe_click_here.png)](https://cwe.mitre.org/about/new_to_cwe.html "New to CWE click here logo")

[![CWE Most Important Hardware Weaknesses](https://cwe.mitre.org/images/mihw_logo.svg)](https://cwe.mitre.org/topHW/index.html "CWE Most Important Hardware Weaknesses")

[![CWE Top 25 Most Dangerous Weaknesses](https://cwe.mitre.org/images/cwe_top_25_logo_simple.svg)](https://cwe.mitre.org/top25/ "CWE Top 25")

|     |     |
| --- | --- |
| [Home](https://cwe.mitre.org/) \> [CWE List](https://cwe.mitre.org/data/index.html) \> <br> CWE-125: Out-of-bounds Read (4.19.1) | ID Lookup: |

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

## CWE-125: Out-of-bounds Read

|     |
| --- |
| Weakness ID: 125<br> <br> <br>[Vulnerability Mapping](https://cwe.mitre.org/data/definitions/125.html#Vulnerability_Mapping_Notes_125):ALLOWEDThis CWE ID may be used to map to real-world vulnerabilities<br>Abstraction:<br> BaseBase - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource. |

View customized information:

ConceptualFor users who are interested in more notional aspects of a weakness. Example: educators, technical writers, and project/program managers.OperationalFor users who are concerned with the practical application and details about the nature of a weakness and how to prevent it from happening. Example: tool developers, security researchers, pen-testers, incident response analysts.Mapping FriendlyFor users who are mapping an issue to CWE/CAPEC IDs, i.e., finding the most appropriate CWE for a specific issue (e.g., a CVE record). Example: tool developers, security researchers.CompleteFor users who wish to see all available information for the CWE/CAPEC entry.CustomFor users who want to customize what details are displayed.

×

## Edit Custom Filter

ConceptualOperationalMapping FriendlySelect All

ResetClearSubmitCancel

![+](https://cwe.mitre.org/images/head_more.gif)Description


|     |     |
| --- | --- |
| The product reads data past the end, or before the beginning, of the intended buffer. | ![Diagram for CWE-125](https://cwe.mitre.org/data/images/CWE-125-Diagram.png) |

![+](https://cwe.mitre.org/images/head_more.gif)Alternate Terms


|     |     |
| --- | --- |
| OOB read | Shorthand for "Out of bounds" read |

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
| _Read Memory_ | Scope: Confidentiality<br>An attacker could get secret values such as cryptographic keys, PII, memory addresses, or other information that could be used in additional attacks. |
| _Bypass Protection Mechanism_ | Scope: Confidentiality<br>Out-of-bounds memory could contain memory addresses or other information that can be used to bypass ASLR and other protection mechanisms in order to improve the reliability of exploiting a separate weakness for code execution. |
| _DoS: Crash, Exit, or Restart_ | Scope: Availability<br>An attacker could cause a segmentation fault or crash by causing memory to be read outside of the bounds of the buffer. This is especially likely when the code reads a variable amount of data and assumes that a sentinel exists to stop the read operation, such as a NUL in a string. |
| _Varies by Context_ | Scope: Other<br>The read operation could produce other undefined or unexpected results. |

![+](https://cwe.mitre.org/images/head_more.gif)Potential Mitigations

| Phase(s) | Mitigation |
| --- | --- |
| Implementation | Strategy: _Input Validation_<br>Assume all input is malicious. Use an "accept known good" input validation strategy, i.e., use a list of acceptable inputs that strictly conform to specifications. Reject any input that does not strictly conform to specifications, or transform it into something that does.<br>When performing input validation, consider all potentially relevant properties, including length, type of input, the full range of acceptable values, missing or extra inputs, syntax, consistency across related fields, and conformance to business rules. As an example of business rule logic, "boat" may be syntactically valid because it only contains alphanumeric characters, but it is not valid if the input is only expected to contain colors such as "red" or "blue."<br>Do not rely exclusively on looking for malicious or malformed inputs. This is likely to miss at least one undesirable input, especially if the code's environment changes. This can give attackers enough room to bypass the intended validation. However, denylists can be useful for detecting potential attacks or determining which inputs are so malformed that they should be rejected outright.<br>To reduce the likelihood of introducing an out-of-bounds read, ensure that you validate and ensure correct calculations for any length argument, buffer size calculation, or offset. Be especially careful of relying on a sentinel (i.e. special character such as NUL) in untrusted inputs. |
| Architecture and Design | Strategy: _Language Selection_<br>Use a language that provides appropriate memory abstractions. |

![+](https://cwe.mitre.org/images/head_more.gif)
Relationships


![Section Help](https://cwe.mitre.org/images/dictionary.gif)This table shows the weaknesses and high level categories that are related to this
weakness. These relationships are defined as ChildOf, ParentOf, MemberOf and give insight to
similar items that may exist at higher and lower levels of abstraction. In addition,
relationships such as PeerOf and CanAlsoBe are defined to show similar weaknesses that the user
may want to explore.

![+](https://cwe.mitre.org/images/head_more.gif)Relevant to the view "Research Concepts" (View-1000)


| Nature | Type | ID | Name |
| ChildOf | ![Class](https://cwe.mitre.org/images/icons/class.gif)Class - a weakness that is described in a very abstract fashion, typically independent of any specific language or technology. More specific than a Pillar Weakness, but more general than a Base Weakness. Class level weaknesses typically describe issues in terms of 1 or 2 of the following dimensions: behavior, property, and resource. | [119](https://cwe.mitre.org/data/definitions/119.html) | Improper Restriction of Operations within the Bounds of a Memory Buffer |
| ParentOf | ![Variant](https://cwe.mitre.org/images/icons/variant.gif)Variant - a weakness that is linked to a certain type of product, typically involving a specific language or technology. More specific than a Base weakness. Variant level weaknesses typically describe issues in terms of 3 to 5 of the following dimensions: behavior, property, technology, language, and resource. | [126](https://cwe.mitre.org/data/definitions/126.html) | Buffer Over-read |
| ParentOf | ![Variant](https://cwe.mitre.org/images/icons/variant.gif)Variant - a weakness that is linked to a certain type of product, typically involving a specific language or technology. More specific than a Base weakness. Variant level weaknesses typically describe issues in terms of 3 to 5 of the following dimensions: behavior, property, technology, language, and resource. | [127](https://cwe.mitre.org/data/definitions/127.html) | Buffer Under-read |
| CanFollow | ![Base](https://cwe.mitre.org/images/icons/base.gif)Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource. | [822](https://cwe.mitre.org/data/definitions/822.html) | Untrusted Pointer Dereference |
| CanFollow | ![Base](https://cwe.mitre.org/images/icons/base.gif)Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource. | [823](https://cwe.mitre.org/data/definitions/823.html) | Use of Out-of-range Pointer Offset |
| CanFollow | ![Base](https://cwe.mitre.org/images/icons/base.gif)Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource. | [824](https://cwe.mitre.org/data/definitions/824.html) | Access of Uninitialized Pointer |
| CanFollow | ![Base](https://cwe.mitre.org/images/icons/base.gif)Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource. | [825](https://cwe.mitre.org/data/definitions/825.html) | Expired Pointer Dereference |

![+](https://cwe.mitre.org/images/head_more.gif)Relevant to the view "Software Development" (View-699)


| Nature | Type | ID | Name |
| MemberOf | ![Category](https://cwe.mitre.org/images/icons/category.gif)Category - a CWE entry that contains a set of other entries that share a common characteristic. | [1218](https://cwe.mitre.org/data/definitions/1218.html) | Memory Buffer Errors |

![+](https://cwe.mitre.org/images/head_more.gif)Relevant to the view "Weaknesses for Simplified Mapping of Published Vulnerabilities" (View-1003)


| Nature | Type | ID | Name |
| ChildOf | ![Class](https://cwe.mitre.org/images/icons/class.gif)Class - a weakness that is described in a very abstract fashion, typically independent of any specific language or technology. More specific than a Pillar Weakness, but more general than a Base Weakness. Class level weaknesses typically describe issues in terms of 1 or 2 of the following dimensions: behavior, property, and resource. | [119](https://cwe.mitre.org/data/definitions/119.html) | Improper Restriction of Operations within the Bounds of a Memory Buffer |

![+](https://cwe.mitre.org/images/head_more.gif)Relevant to the view "CISQ Quality Measures (2020)" (View-1305)


| Nature | Type | ID | Name |
| ChildOf | ![Class](https://cwe.mitre.org/images/icons/class.gif)Class - a weakness that is described in a very abstract fashion, typically independent of any specific language or technology. More specific than a Pillar Weakness, but more general than a Base Weakness. Class level weaknesses typically describe issues in terms of 1 or 2 of the following dimensions: behavior, property, and resource. | [119](https://cwe.mitre.org/data/definitions/119.html) | Improper Restriction of Operations within the Bounds of a Memory Buffer |

![+](https://cwe.mitre.org/images/head_more.gif)Relevant to the view "CISQ Data Protection Measures" (View-1340)


| Nature | Type | ID | Name |
| ChildOf | ![Class](https://cwe.mitre.org/images/icons/class.gif)Class - a weakness that is described in a very abstract fashion, typically independent of any specific language or technology. More specific than a Pillar Weakness, but more general than a Base Weakness. Class level weaknesses typically describe issues in terms of 1 or 2 of the following dimensions: behavior, property, and resource. | [119](https://cwe.mitre.org/data/definitions/119.html) | Improper Restriction of Operations within the Bounds of a Memory Buffer |

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
| Languages | Class: Memory-Unsafe<br> <br> <br>(Undetermined Prevalence)<br>C<br> <br> <br>(Undetermined Prevalence)<br>C++<br> <br> <br>(Undetermined Prevalence) |
| Technologies | Class: ICS/OT<br> <br> <br>(Often Prevalent) |

![+](https://cwe.mitre.org/images/head_more.gif)Demonstrative Examples

Example 1

In the following code, the method retrieves a value from an array at a specific array index location that is given as an input parameter to the method

(bad code)

Example Language: C



However, this method only verifies that the given array index is less than the maximum length of the array but does not check for the minimum value ( [CWE-839](https://cwe.mitre.org/data/definitions/839.html)). This will allow a negative value to be accepted as the input array index, which will result in reading data before the beginning of the buffer ( [CWE-127](https://cwe.mitre.org/data/definitions/127.html)) and may allow access to sensitive memory. The input array index should be checked to verify that is within the maximum and minimum range required for the array ( [CWE-129](https://cwe.mitre.org/data/definitions/129.html)). In this example the if statement should be modified to include a minimum range check, as shown below.

(good code)

Example Language: C



Example 2

In the following C/C++ example the method processMessageFromSocket() will get a message from a socket, placed into a buffer, and will parse the contents of the buffer into a structure that contains the message length and the message body. A for loop is used to copy the message body into a local character string which will be passed to another method for processing.

(bad code)

Example Language: C



However, the message length variable (msgLength) from the structure is used as the condition for ending the for loop without validating that msgLength accurately reflects the actual length of the message body ( [CWE-606](https://cwe.mitre.org/data/definitions/606.html)). If msgLength indicates a length that is longer than the size of a message body ( [CWE-130](https://cwe.mitre.org/data/definitions/130.html)), then this can result in a buffer over-read by reading past the end of the buffer ( [CWE-126](https://cwe.mitre.org/data/definitions/126.html)).

![+](https://cwe.mitre.org/images/head_more.gif)Selected Observed
Examples

_Note: this is a curated list of examples for users to understand the variety of ways in which this_
_weakness can be introduced. It is not a complete list of all CVEs that are related to this CWE entry._

| Reference | Description |
| --- | --- |
| [CVE-2023-1018](https://www.cve.org/CVERecord?id=CVE-2023-1018) | The reference implementation code for a Trusted Platform Module does not implement length checks on data, allowing for an attacker to read 2 bytes past the end of a buffer. |
| [CVE-2020-11899](https://www.cve.org/CVERecord?id=CVE-2020-11899) | Out-of-bounds read in IP stack used in embedded systems, as exploited in the wild per CISA KEV. |
| [CVE-2014-0160](https://www.cve.org/CVERecord?id=CVE-2014-0160) | Chain: "Heartbleed" bug receives an inconsistent length parameter ( [CWE-130](https://cwe.mitre.org/data/definitions/130.html)) enabling an out-of-bounds read ( [CWE-126](https://cwe.mitre.org/data/definitions/126.html)), returning memory that could include private cryptographic keys and other sensitive data. |
| [CVE-2021-40985](https://www.cve.org/CVERecord?id=CVE-2021-40985) | HTML conversion package has a buffer under-read, allowing a crash |
| [CVE-2018-10887](https://www.cve.org/CVERecord?id=CVE-2018-10887) | Chain: unexpected sign extension ( [CWE-194](https://cwe.mitre.org/data/definitions/194.html)) leads to integer overflow ( [CWE-190](https://cwe.mitre.org/data/definitions/190.html)), causing an out-of-bounds read ( [CWE-125](https://cwe.mitre.org/data/definitions/125.html)) |
| [CVE-2009-2523](https://www.cve.org/CVERecord?id=CVE-2009-2523) | Chain: product does not handle when an input string is not NULL terminated ( [CWE-170](https://cwe.mitre.org/data/definitions/170.html)), leading to buffer over-read ( [CWE-125](https://cwe.mitre.org/data/definitions/125.html)) or heap-based buffer overflow ( [CWE-122](https://cwe.mitre.org/data/definitions/122.html)). |
| [CVE-2018-16069](https://www.cve.org/CVERecord?id=CVE-2018-16069) | Chain: series of floating-point precision errors<br>( [CWE-1339](https://cwe.mitre.org/data/definitions/1339.html)) in a web browser rendering engine causes out-of-bounds read<br>( [CWE-125](https://cwe.mitre.org/data/definitions/125.html)), giving access to cross-origin data |
| [CVE-2004-0112](https://www.cve.org/CVERecord?id=CVE-2004-0112) | out-of-bounds read due to improper length check |
| [CVE-2004-0183](https://www.cve.org/CVERecord?id=CVE-2004-0183) | packet with large number of specified elements cause out-of-bounds read. |
| [CVE-2004-0221](https://www.cve.org/CVERecord?id=CVE-2004-0221) | packet with large number of specified elements cause out-of-bounds read. |
| [CVE-2004-0184](https://www.cve.org/CVERecord?id=CVE-2004-0184) | out-of-bounds read, resultant from integer underflow |
| [CVE-2004-1940](https://www.cve.org/CVERecord?id=CVE-2004-1940) | large length value causes out-of-bounds read |
| [CVE-2004-0421](https://www.cve.org/CVERecord?id=CVE-2004-0421) | malformed image causes out-of-bounds read |
| [CVE-2008-4113](https://www.cve.org/CVERecord?id=CVE-2008-4113) | OS kernel trusts userland-supplied length value, allowing reading of sensitive information |

![+](https://cwe.mitre.org/images/head_more.gif)Weakness Ordinalities

| Ordinality | Description |
| --- | --- |
| Resultant | (where the weakness is typically related to the presence of some other weaknesses)<br> <br>When an out-of-bounds read occurs, typically the product has already made a separate mistake, such as modifying an index or performing pointer arithmetic that produces an out-of-bounds address. |
| Primary | (where the weakness exists independent of other weaknesses) |

![+](https://cwe.mitre.org/images/head_more.gif)Detection
Methods

| Method | Details |
| --- | --- |
| Fuzzing | Fuzz testing (fuzzing) is a powerful technique for generating large numbers of diverse inputs - either randomly or algorithmically - and dynamically invoking the code with those inputs. Even with random inputs, it is often capable of generating unexpected results such as crashes, memory corruption, or resource consumption. Fuzzing effectively produces repeatable test cases that clearly indicate bugs, which helps developers to diagnose the issues.<br> <br>Effectiveness: High |
| Automated Static Analysis | Automated static analysis, commonly referred to as Static Application Security Testing (SAST), can find some instances of this weakness by analyzing source code (or binary/compiled code) without having to execute it. Typically, this is done by building a model of data flow and control flow, then searching for potentially-vulnerable patterns that connect "sources" (origins of input) with "sinks" (destinations where the data interacts with external components, a lower layer such as the OS, etc.)<br> <br>Effectiveness: High |
| Automated Dynamic Analysis | Use tools that are integrated during<br>compilation to insert runtime error-checking mechanisms<br>related to memory safety errors, such as AddressSanitizer<br>(ASan) for C/C++ \[ [REF-1518](https://cwe.mitre.org/data/definitions/125.html#REF-1518_125)\].<br> <br>Effectiveness: Moderate<br> **Note:** Crafted inputs are necessary to<br> reach the code containing the error, such as generated<br> by fuzzers. Also, these tools may reduce performance,<br> and they only report the error condition - not the<br> original mistake that led to the<br> error. |

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
| MemberOf | ![Category](https://cwe.mitre.org/images/icons/category.gif)Category - a CWE entry that contains a set of other entries that share a common characteristic. | [1157](https://cwe.mitre.org/data/definitions/1157.html) | SEI CERT C Coding Standard - Guidelines 03. Expressions (EXP) |
| MemberOf | ![Category](https://cwe.mitre.org/images/icons/category.gif)Category - a CWE entry that contains a set of other entries that share a common characteristic. | [1160](https://cwe.mitre.org/data/definitions/1160.html) | SEI CERT C Coding Standard - Guidelines 06. Arrays (ARR) |
| MemberOf | ![Category](https://cwe.mitre.org/images/icons/category.gif)Category - a CWE entry that contains a set of other entries that share a common characteristic. | [1161](https://cwe.mitre.org/data/definitions/1161.html) | SEI CERT C Coding Standard - Guidelines 07. Characters and Strings (STR) |
| MemberOf | ![View](https://cwe.mitre.org/images/icons/view.gif)View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries). | [1200](https://cwe.mitre.org/data/definitions/1200.html) | Weaknesses in the 2019 CWE Top 25 Most Dangerous Software Errors |
| MemberOf | ![View](https://cwe.mitre.org/images/icons/view.gif)View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries). | [1337](https://cwe.mitre.org/data/definitions/1337.html) | Weaknesses in the 2021 CWE Top 25 Most Dangerous Software Weaknesses |
| MemberOf | ![View](https://cwe.mitre.org/images/icons/view.gif)View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries). | [1350](https://cwe.mitre.org/data/definitions/1350.html) | Weaknesses in the 2020 CWE Top 25 Most Dangerous Software Weaknesses |
| MemberOf | ![Category](https://cwe.mitre.org/images/icons/category.gif)Category - a CWE entry that contains a set of other entries that share a common characteristic. | [1366](https://cwe.mitre.org/data/definitions/1366.html) | ICS Communications: Frail Security in Protocols |
| MemberOf | ![View](https://cwe.mitre.org/images/icons/view.gif)View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries). | [1387](https://cwe.mitre.org/data/definitions/1387.html) | Weaknesses in the 2022 CWE Top 25 Most Dangerous Software Weaknesses |
| MemberOf | ![Category](https://cwe.mitre.org/images/icons/category.gif)Category - a CWE entry that contains a set of other entries that share a common characteristic. | [1399](https://cwe.mitre.org/data/definitions/1399.html) | Comprehensive Categorization: Memory Safety |
| MemberOf | ![View](https://cwe.mitre.org/images/icons/view.gif)View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries). | [1425](https://cwe.mitre.org/data/definitions/1425.html) | Weaknesses in the 2023 CWE Top 25 Most Dangerous Software Weaknesses |
| MemberOf | ![View](https://cwe.mitre.org/images/icons/view.gif)View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries). | [1430](https://cwe.mitre.org/data/definitions/1430.html) | Weaknesses in the 2024 CWE Top 25 Most Dangerous Software Weaknesses |
| MemberOf | ![View](https://cwe.mitre.org/images/icons/view.gif)View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries). | [1435](https://cwe.mitre.org/data/definitions/1435.html) | Weaknesses in the 2025 CWE Top 25 Most Dangerous Software Weaknesses |

![+](https://cwe.mitre.org/images/head_more.gif)Vulnerability Mapping Notes

|     |     |
| --- | --- |
| Usage | **ALLOWED**<br>(this CWE ID may be used to map to real-world vulnerabilities) |
| Reason | Acceptable-Use |
| Rationale | This CWE entry is at the Base level of abstraction, which is a preferred level of abstraction for mapping to the root causes of vulnerabilities. |
| Comments | Carefully read both the name and description to ensure that this mapping is an appropriate fit. Do not try to 'force' a mapping to a lower-level Base/Variant simply to comply with this preferred level of abstraction. |

![+](https://cwe.mitre.org/images/head_more.gif)Taxonomy
Mappings

| Mapped Taxonomy Name | Node ID | Fit | Mapped Node Name |
| --- | --- | --- | --- |
| PLOVER |  |  | Out-of-bounds Read |
| CERT C Secure Coding | ARR30-C | Imprecise | Do not form or use out-of-bounds pointers or array subscripts |
| CERT C Secure Coding | ARR38-C | Imprecise | Guarantee that library functions do not form invalid pointers |
| CERT C Secure Coding | EXP39-C | Imprecise | Do not access a variable through a pointer of an incompatible type |
| CERT C Secure Coding | STR31-C | Imprecise | Guarantee that storage for strings has sufficient space for character data and the null terminator |
| CERT C Secure Coding | STR32-C | CWE More Abstract | Do not pass a non-null-terminated character sequence to a library function that expects a string |
| Software Fault Patterns | SFP8 |  | Faulty Buffer Access |

![+](https://cwe.mitre.org/images/head_more.gif)Related Attack Patterns

| CAPEC-ID | Attack Pattern Name |
| --- | --- |
| [CAPEC-540](http://capec.mitre.org/data/definitions/540.html) | Overread Buffers |

![+](https://cwe.mitre.org/images/head_more.gif)References

|     |     |
| --- | --- |
| \[REF-1034\] | Raoul Strackx, Yves Younan, Pieter Philippaerts, Frank Piessens, Sven Lachmund and Thomas Walter. _"Breaking the memory secrecy assumption"._ ACM. 2009-03-31.<br> <br> <br>< [https://dl.acm.org/doi/10.1145/1519144.1519145](https://dl.acm.org/doi/10.1145/1519144.1519145) >.<br> <br> <br> ( _URL validated: 2023-04-07_) |
| \[REF-1035\] | Fermin J. Serna. _"The info leak era on software exploitation"._ 2012-07-25.<br> <br> <br>< [https://media.blackhat.com/bh-us-12/Briefings/Serna/BH\_US\_12\_Serna\_Leak\_Era\_Slides.pdf](https://media.blackhat.com/bh-us-12/Briefings/Serna/BH_US_12_Serna_Leak_Era_Slides.pdf) >. |
| \[REF-44\] | Michael Howard, David LeBlanc and John Viega. _"24 Deadly Sins of Software Security"._ "Sin 5: Buffer Overruns." Page 89. McGraw-Hill. 2010. |
| \[REF-1518\] | _"AddressSanitizer"._<br>< [https://clang.llvm.org/docs/AddressSanitizer.html](https://clang.llvm.org/docs/AddressSanitizer.html) >.<br> <br> <br> ( _URL validated: 2025-12-10_) |

![+](https://cwe.mitre.org/images/head_more.gif)Content
History

| ![+](https://cwe.mitre.org/images/head_more.gif)Submissions |
| --- |
| Submission Date | Submitter | Organization |
| 2006-07-19<br> <br> <br>(CWE Draft 3, 2006-07-19) | PLOVER |  |
|  |
| ![+](https://cwe.mitre.org/images/head_more.gif)Contributions |
| --- |
| Contribution Date | Contributor | Organization |
| 2024-02-29<br> <br> <br>(CWE 4.15, 2024-07-16) | Abhi Balakrishnan |  |
| _Provided diagram to improve CWE usability_ |
| ![+](https://cwe.mitre.org/images/head_less.gif)Modifications |
| --- |
| Modification Date | Modifier | Organization |
| 2025-12-11<br> <br> <br>(CWE 4.19, 2025-12-11) | CWE Content Team | MITRE |
| _updated Applicable\_Platforms, Detection\_Factors, References, Relationships_ |
| 2025-09-09<br> <br> <br>(CWE 4.18, 2025-09-09) | CWE Content Team | MITRE |
| _updated Affected\_Resources, Demonstrative\_Examples, Functional\_Areas_ |
| 2024-11-19<br> <br> <br>(CWE 4.16, 2024-11-19) | CWE Content Team | MITRE |
| _updated Observed\_Examples, Relationships_ |
| 2024-07-16<br> <br> <br>(CWE 4.15, 2024-07-16) | CWE Content Team | MITRE |
| _updated Alternate\_Terms, Common\_Consequences, Description, Diagram, Weakness\_Ordinalities_ |
| 2023-10-26 | CWE Content Team | MITRE |
| _updated Observed\_Examples_ |
| 2023-06-29 | CWE Content Team | MITRE |
| _updated Mapping\_Notes, Relationships_ |
| 2023-04-27 | CWE Content Team | MITRE |
| _updated Detection\_Factors, References, Relationships_ |
| 2023-01-31 | CWE Content Team | MITRE |
| _updated Description_ |
| 2022-10-13 | CWE Content Team | MITRE |
| _updated Applicable\_Platforms, Relationships, Taxonomy\_Mappings_ |
| 2022-06-28 | CWE Content Team | MITRE |
| _updated Observed\_Examples, Relationships_ |
| 2022-04-28 | CWE Content Team | MITRE |
| _updated Research\_Gaps_ |
| 2021-07-20 | CWE Content Team | MITRE |
| _updated Observed\_Examples, Relationships_ |
| 2020-12-10 | CWE Content Team | MITRE |
| _updated Related\_Attack\_Patterns, Relationships_ |
| 2020-08-20 | CWE Content Team | MITRE |
| _updated Observed\_Examples, Potential\_Mitigations, Relationships_ |
| 2020-06-25 | CWE Content Team | MITRE |
| _updated Observed\_Examples, Potential\_Mitigations_ |
| 2020-02-24 | CWE Content Team | MITRE |
| _updated Potential\_Mitigations, Relationships, Taxonomy\_Mappings_ |
| 2019-09-19 | CWE Content Team | MITRE |
| _updated Common\_Consequences, Observed\_Examples, Potential\_Mitigations, References, Relationships_ |
| 2019-06-20 | CWE Content Team | MITRE |
| _updated Description, Related\_Attack\_Patterns_ |
| 2019-01-03 | CWE Content Team | MITRE |
| _updated Relationships_ |
| 2018-03-27 | CWE Content Team | MITRE |
| _updated Description_ |
| 2017-11-08 | CWE Content Team | MITRE |
| _updated Causal\_Nature, Observed\_Examples, Taxonomy\_Mappings_ |
| 2015-12-07 | CWE Content Team | MITRE |
| _updated Relationships_ |
| 2014-07-30 | CWE Content Team | MITRE |
| _updated Relationships, Taxonomy\_Mappings_ |
| 2014-06-23 | CWE Content Team | MITRE |
| _updated Related\_Attack\_Patterns_ |
| 2012-05-11 | CWE Content Team | MITRE |
| _updated Demonstrative\_Examples, References, Relationships_ |
| 2011-06-01 | CWE Content Team | MITRE |
| _updated Common\_Consequences_ |
| 2010-09-27 | CWE Content Team | MITRE |
| _updated Relationships_ |
| 2009-10-29 | CWE Content Team | MITRE |
| _updated Description_ |
| 2008-09-08 | CWE Content Team | MITRE |
| _updated Applicable\_Platforms, Relationships, Taxonomy\_Mappings, Weakness\_Ordinalities_ |

More information is available — Please edit the custom filter or select a different filter. |

**Page Last Updated:**

January 21, 2026


|     |     |     |
| --- | --- | --- |
|  |
| [![MITRE](https://cwe.mitre.org/images/mitre_logo.gif)](http://www.mitre.org/) | [Site Map](https://cwe.mitre.org/sitemap.html) \| <br>[Terms of Use](https://cwe.mitre.org/about/termsofuse.html) \| <br>[Manage Cookies](https://cwe.mitre.org/data/definitions/125.html#) \| <br>[Cookie Notice](https://cwe.mitre.org/about/cookie_notice.html) \| <br>[Privacy Policy](https://cwe.mitre.org/about/privacy_policy.html) \| <br>[Contact Us](mailto:cwe@mitre.org) \| <br>[![CWE on X](https://cwe.mitre.org/images/x-logo-black.png)](https://x.com/CweCapec)[![CWE on LinkedIn](https://cwe.mitre.org/images/linkedin_sm.jpg)](https://www.linkedin.com/showcase/cve-cwe-capec)[![CWE on Bluesky](https://cwe.mitre.org/images/bluesky_logo_sm.png)](https://bsky.app/profile/cweprogram.bsky.social)[![CWE on Mastodon](https://cwe.mitre.org/images/mastodon-logo.png)](https://mastodon.social/@CWE_Program)[![CWE YouTube channel](https://cwe.mitre.org/images/youtube.png)](https://www.youtube.com/channel/UCpY9VIpRmFK4ebD6orssifA)[![CWE Out-of-Bounds-Read Podcast](https://cwe.mitre.org/images/out_of_bounds_read_logo.png)](https://cwe.mitre.org/news/podcast.html)[![CWE Blog on Medium blog](https://cwe.mitre.org/images/medium.png)](https://medium.com/@CWE_CAPEC)<br>Use of the Common Weakness Enumeration (CWE™) and the associated references from this website are subject to the [Terms of Use](https://cwe.mitre.org/about/termsofuse.html). CWE is sponsored by the [U.S. Department of Homeland Security](https://www.dhs.gov/) (DHS) [Cybersecurity and Infrastructure Security Agency](https://www.dhs.gov/cisa/cybersecurity-division) (CISA) and managed by the [Homeland Security Systems Engineering and Development Institute](https://www.dhs.gov/science-and-technology/hssedi) (HSSEDI) which is operated by [The MITRE Corporation](http://www.mitre.org/) (MITRE). Copyright © 2006–2026, The MITRE Corporation. CWE, CWSS, CWRAF, and the CWE logo are trademarks of The MITRE Corporation. | [![HSSEDI](https://cwe.mitre.org/images/hssedi.png)](https://www.dhs.gov/science-and-technology/hssedi) |