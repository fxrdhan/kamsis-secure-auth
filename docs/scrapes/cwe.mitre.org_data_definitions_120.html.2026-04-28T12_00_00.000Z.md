

















    



    
        


    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?xml version="1.0" encoding="iso-8859-1"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head >
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="description" content="Common Weakness Enumeration (CWE) is a list of software weaknesses." />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<link rel="shortcut icon" href="/favicon.ico" />
	<link href="/css/main.css?version=4.0.022420" rel="stylesheet" type="text/css" />
	<link href="/css/custom.css" rel="stylesheet" type="text/css" />
	<!--[if IE]>
	<link rel="stylesheet" type="text/css" href="/css/ie.css?version=1.7" />
	<![endif]-->
	
	<script src="/includes/custom_filter.js" language="JavaScript" type="text/javascript"></script>
	<script src="/includes/browserheight.js" language="JavaScript" type="text/javascript"></script>
	<script src="/includes/jquery.js" language="JavaScript" type="text/javascript"></script>               	
    	<script src="/includes/cwe_minimizer.js" language="JavaScript" type="text/javascript"></script>
	<script src="/includes/cookie.js" language="JavaScript" type="text/javascript"></script>               	
	<script src="/includes/includeglossarydef.js" language="JavaScript" type="text/javascript"></script>
	<link href="/css/print.css?version=1.11" rel="stylesheet" media="print" type="text/css" />
	<link href="/css/user_skins/complete.css" rel="stylesheet" type="text/css" />
	<noscript>
	<style type="text/css">
		#script { visibility:collapse; visibility:hidden; font-size:0px; height:0px; width:0px  }
		#noscript { visibility:visible; font-size:inherit;  height:inherit; width:inherit}
	</style>
	</noscript>
	<title>CWE -

    CWE-120: Buffer Copy without Checking Size of Input (&#39;Classic Buffer Overflow&#39;) (4.19.1)
    </title>
</head>
<body onload="onloadCookie()">
<a name="top" id="top"></a>
	<div id="MastHead" style="width:100%">
	
	        <div style="width:60%;float:left;padding-top:15px;padding-left:10px;padding-bottom:2px;">
	                <a href="/index.html" style="color:#32498D; text-decoration:none">
	                <img src="/images/cwe_logo.jpg" width="153" height="55" style="float:left;border:0;margin-right:6px" alt="CWE" />
	                <h1 style="color:#314a8d;font-size:1.5em;font-family:'Verdana',sans-serif;#eee;margin: .1em auto">Common Weakness Enumeration</h1>
	                <p style="color:#314a8d;font-family:'Times New Roman';font-style:italic;font-size:1em;#eee;margin:.1em auto 0 auto">A community-developed list of SW &amp; HW weaknesses that can become vulnerabilities</p>
	                </a>
	        </div>
	<div style="float:right;padding-top:0px;text-align:right;padding-left:8px;padding-right:4px;padding-bottom:0px;"><a href="/about/new_to_cwe.html" title="New to CWE click here logo"><img src="/images/new_to_cwe/new_to_cwe_click_here.png" height="90" border="0" alt="New to CWE? click here!" style="text-align:center"/></a></div>
	<div style="float:right;padding-top:0px;text-align:right;padding-left:0px;padding-right:4px;padding-bottom:0px;"><a href="/topHW/index.html" title="CWE Most Important Hardware Weaknesses"> <img src="/images/mihw_logo.svg" width="90" border="0" alt="CWE Most Important Hardware Weaknesses" style="vertical-align:bottom"/></a></div>
	<div style="float:right;padding-top:0px;text-align:right;padding-left:0px;padding-right:4px;padding-bottom:0px;"><a href="/top25/" title="CWE Top 25"><img src="/images/cwe_top_25_logo_simple.svg" width="90" border="0" alt="CWE Top 25 Most Dangerous Weaknesses" style="vertical-align:bottom"/></a></div>
	
	</div><!--End Masthead div-->


<div id="HeaderBar" class="noprint">
<table width="100%" border="0" cellpadding="0" cellspacing="0">  
	<tr> 
		<td width="100%" align="left" style="padding-left:10px; font-size:75%;"> 
                <a href="/" >Home</a>  &gt;  <a href="/data/index.html" >CWE List</a>  &gt;  

    CWE-120: Buffer Copy without Checking Size of Input (&#39;Classic Buffer Overflow&#39;) (4.19.1)
    &nbsp;
		</td>
		<td align="right" nowrap="nowrap" style="padding-right:12px">
		<!-- Begin /includes/search_cwe_id.html -->
<div class="noprint">
  <form action="/cgi-bin/jumpmenu.cgi" align="right" style="padding:0px; margin:0px">
	ID <label for="id" style="padding-right:5px">Lookup:</label>
    <input id="id" name="id" type="text" style="width:50px; font-size:80%" maxlength="10" />
	<input value="Go" style="padding: 0px; font-size:80%" type="submit">
  </form>
</div>
<!-- End /includes/search_cwe_id.html --> 
		</td>
	</tr>
</table>
</div> <!--//HeaderBar-->
<div class="yesprint">
<hr width="100%" size="1" style="clear:both" color="#000000" />
</div>

<div class="topnav">
<ul>
<li><a href="/index.html">Home</a></li>
<li>
        <div class="dropdown">
          <button class="dropbtn">About &#x25BC;</button>
          <div class="dropdown-content">
            <a href="/about/index.html">Who We Are</a>             
            <a href="/about/user_stories.html">User Stories</a>        
            <a href="/about/history.html">History</a>                                                          
            <a href="/about/documents.html">Documents</a>
            <a href="/about/cwe_videos.html">Videos</a>
          </div>
        </div>
</li>
<li>
        <div class="dropdown">
          <button class="dropbtn">Learn &#x25BC;</button>
          <div class="dropdown-content">
            <a href="/about/new_to_cwe.html">Basics</a>
            <div class="dropdown-sub-group">
              <a href="/documents/cwe_usage/guidance.html">Root Cause Mapping &nbsp; &#x25BA;</a>
              <div class="dropdown-content-submenu">
                <a href="/documents/cwe_usage/guidance.html">Guidance</a>
                <a href="/documents/cwe_usage/quick_tips.html">Quick Tips</a>
                <a href="/documents/cwe_usage/mapping_examples.html">Examples</a>
              </div>
            </div>
            <a href="/community/submissions/overview.html">How to Contribute Weakness Content</a>
            <a href="/about/faq.html">FAQs</a>
            <a href="/documents/glossary/index.html">Glossary</a>           
          </div>
        </div>
</li>
<li>
        <div class="dropdown">
          <button class="dropbtn">Access Content &#x25BC;</button>
          <div class="dropdown-content">
            <div class="dropdown-sub-group">
              <a href="/scoring/index.html#top_n_lists">Top-N Lists &nbsp; &#x25BA;</a>
              <div class="dropdown-content-submenu">
                <a href="/top25/">Top 25 Software</a>
                <a href="/topHW/index.html">Top Hardware</a>     
                <a href="/top25/archive/2025/2025_kev_list.html">Top 10 KEV Weaknesses</a>
              </div>
            </div>
            <div class="dropdown-sub-group">
              <a href="/data/index.html">CWE List &nbsp; &#x25BA;</a>
              <div class="dropdown-content-submenu">
              <a href="/data/index.html">Current Version</a>                
                <a href="/data/reports.html">Reports</a>
                <a href="/data/pdfs.html">Visualizations</a>     
                <a href="/data/archive.html">Releases Archive</a>
              </div>
            </div>
            <a href="/data/downloads.html">Downloads</a>           
            <a href="https://github.com/CWE-CAPEC/REST-API-wg/blob/main/Quick%20Start.md" target="_blank">REST API</a>
          </div>
        </div>
</li>
<li>
        <div class="dropdown">
          <button class="dropbtn">Community &#x25BC;</button>
          <div class="dropdown-content">
            <div class="dropdown-sub-group">
              <a href="/news/">News &nbsp; &#x25BA;</a>
              <div class="dropdown-content-submenu">
                <a href="/news/archives/news2026.html">Current News</a>
                <a href="https://medium.com/@CWE_CAPEC" target="_blank">Blog</a>
                <a href="/news/podcast.html">Podcast</a>
                <a href="/news/archives/index.html">News Archive</a>
              </div>
            </div>
            <a href="/community/board.html">CWE Board</a>            
            <a href="/community/working_groups.html">Working Groups &amp; Special Interest Groups</a>  
            <a href="/community/registration.html">Email Lists</a>  
          </div>
        </div>
</li>
<li>
        <div class="dropdown">
          <button class="dropbtn">Search &#x25BC;</button>
          <div class="dropdown-content">
            <a href="/">Search CWE List</a>         
            <a href="/find/index.html">Search Website</a>            
        </div>
</li>

</ul>

</div>

<table width="100%" border="0" cellspacing="0" cellpadding="0" id="MainPane">
  <tr>
	<!-- begin left side menu -->
    <td valign="top" rowspan="2" id="LeftPane">
	<!--include virtual="/includes/leftsidemenu.html" Removed 11212016--> 
	<script type="text/javascript">browserheight();</script>
	</td>
	<!-- end left side menu -->
    <td style="height:1px"></td>
	<!-- begin right column -->
	<td valign="top" align="center" rowspan="2" nowrap="nowrap" id="RightPane">


    	</td>
	<!-- end right side menu -->
  </tr>
  <tr>
	<!-- begin content pane -->
    <td valign="top" width="100%" id="Contentpane">
	
	<!--Glossary tags-->
	
<div id="styled_popup" name="styled_popup" style="display:none; position:fixed; top:300; height:auto; width:300px; z-index:1000">
<table width="300" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #32498D;">
<tr style="background-color:#32498D; color:#ffffff;">
<td width="100%" style="padding:1px 5px 1px 5px; border-bottom:1px solid #000000"><div width="100%" style="font-weight:bold;">CWE Glossary Definition</div></td>
<td nowrap="nowrap" style="padding:1px; border-bottom:1px solid #000000" valign="top"><a href="javascript:styledPopupClose();"><img src="/images/layout/close.gif" border="0"  alt="x"></a></td>
</tr>
<tr><td colspan="2" style="background: url(/images/layout/ylgradient.jpg); background-repeat: repeat-x repeat-y; padding:5px; background-color:#FFFFCC; " valign="top">
<div id="output" style="max-height:400px; overflow-y:auto"></div>
</td></tr>
</table>
</div>

    <script src="/includes/nav.js" language="JavaScript" type="text/javascript" /></script>
    <noscript>
      <style>div.collapseblock { display:inline} </style>
    </noscript>
    <link href="/css/indiv-entry.css" rel="stylesheet" type="text/css" />
<!-- Start main content -->
<html xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" encoding="iso-8859-1">
<!-- Copyright (c) 2006-2025, The MITRE Corporation. CWE and the CWE logo are trademarks of The MITRE Corporation. -->
<a xmlns:xhtml="http://www.w3.org/1999/xhtml" name="120"></a>
<div style="overflow:auto;">
        <h2 style="display:inline; margin:0px 0px 2px 0px; vertical-align: text-bottom">CWE-120: Buffer Copy without Checking Size of Input (&#39;Classic Buffer Overflow&#39;)</h2>
        <div style="text-align:right; margin:5px 0px 0px 5px; padding-bottom:1px; white-space:nowrap;"></div>
    </div>
    <div xmlns:xhtml="http://www.w3.org/1999/xhtml" id="CWEDefinition" class="Weakness">
        <div class="title">
        <div class="status">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td valign="top" align="left" width="33%" nowrap>
                            <div style="font-weight:bold">
                                Weakness ID: 120
                                
                            </div><span>

                            
                                <span style="font-weight:bold">
                                    <a href="#Vulnerability_Mapping_Notes_120">Vulnerability Mapping</a>:<span class="tool">
                                        <span style="color:#4E8F4A">ALLOWED</span>
                                        <span class="tip">This CWE ID could be used to map to real-world vulnerabilities in limited situations requiring careful review</span>
                                    </span>
                                    
                                     (with careful review of mapping notes)
                                    
                                </span>
                                <br>
                            
                            
                                <span class="tool">Abstraction:
                                    <span style="font-weight:normal">Base</span>
                                    <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                </span>
                            
                            

                            </span>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    <div id="Filter_Menu" style="padding-bottom:10px;">
    <div style="min-width:580px;display:inline-flex;" class="filterButtonList">
	<div style="font-size:80%; color:#000066; font-style:italic; display:inline;height:40px;line-height:40px;min-width:200px;">View customized information: </div>
	<span class="tool">
		<button id="ConceptualButton" type="button" onclick="selectButtonSkin('conceptual');">Conceptual</button>
		<span class='filter-tip'>For users who are interested in more notional aspects of a weakness. Example: educators, technical writers, and project/program managers.</span>
	</span>
	<span class="tool">
		<button id="OperationalButton" type="button" onclick="selectButtonSkin('operational');">Operational</button>
        	<span class='filter-tip'>For users who are concerned with the practical application and details about the nature of a weakness and how to prevent it from happening. Example: tool developers, security researchers, pen-testers, incident response analysts.</span>
	</span>
	<span class="tool">
		<button id="MappingFriendlyButton" type="button" onclick="selectButtonSkin('mappingfriendly');">Mapping Friendly</button>
        	<span class='filter-tip'>For users who are mapping an issue to CWE/CAPEC IDs, i.e., finding the most appropriate CWE for a specific issue (e.g., a CVE record).  Example: tool developers, security researchers.</span>
	</span>
	<span class="tool">
		<button id="CompleteButton" type="button" onclick="selectButtonSkin('complete');">Complete</button>	
        	<span class='filter-tip'>For users who wish to see all available information for the CWE/CAPEC entry.</span>
	</span>
	<span class="tool">
		<button id="CustomButton" type="button" onclick="openCustomFilterModal();">Custom</button>
        	<span class='filter-tip'>For users who want to customize what details are displayed.</span>
	</span>
</div>

<!-- The Modal -->
<div id="customFilterModal" class="custom-filter-modal">
  <!-- Modal content -->
  <div class="custom-filter-modal-content">
    <span class="close" onclick="cancelCustomFilter();">&times;</span>
    <br>
    <h2 id="customFilterHeader" class="custom-filter-header">Edit Custom Filter</h2>
    <div id="customFilterCategories" class="custom-filter-categories">
        <button class="modalFilterButton" onclick="selectCategory('conceptual')" title="For users who are interested in more notional aspects of a weakness. Example: educators, technical writers, and project/program managers.">Conceptual</button>
        <button class="modalFilterButton" onclick="selectCategory('operational')" title="For users who are concerned with the practical application and details about the nature of a weakness and how to prevent it from happening. Example: tool developers, security researchers, pen-testers, incident response analysts.">Operational</button>
        <button class="modalFilterButton" onclick="selectCategory('mappingfriendly')" title="For users who are mapping an issue to CWE/CAPEC IDs, i.e., finding the most appropriate CWE for a specific issue (e.g., a CVE record).  Example: tool developers, security researchers.">Mapping Friendly</button>
        <button class="modalFilterButton" onclick="selectCategory('complete')" title="For users who wish to see all available information for the CWE/CAPEC entry">Select All</button>
    </div>
    <div id="customFilterMainBox" class="custom-filter-main-box">
        <div id="customFilterLeftBox">
        </div>
        <div id="customFilterRightBox">
        </div>
    </div>
    <br>
    <div id="customFilterButtons" class="custom-filter-buttons">
        <button class="modalFilterButton" onclick="defaultCustomFilter()" title="Reset the selected elements to the current custom filter setting.">Reset</button>
	<button class="modalFilterButton" onclick="clearCustomFilter();" title="Clear all the selected elements so that nothing is selected.">Clear</button>
        <button class="modalFilterButton" onclick="submitCustomFilter();" title="Submit your changes for the custom filter">Submit</button>
        <button class="modalFilterButton" onclick="cancelCustomFilter();" title="Cancel all changes made to the custom filter">Cancel</button>
    </div>
  </div>

</div>

<style>
div.filterButtonList button {
	height:25px;
	border-radius:10px;
	width: 150px; 
	margin-left:15px;
	margin-right:15px;
}

/* The Modal (background) */
.custom-filter-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  z-index: 9999;
}

/* Modal Content */
.custom-filter-modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 800px;
  min-width: 800px;
  border-radius: 25px;	
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.custom-filter-header, 
.custom-filter-categories,
.custom-filter-main-box,
.custom-filter-buttons {
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#customFilterLeftBox {
    float: left;
    width: 250px;
    min-width: 250px;
    padding: 10px;
    display: inline-block;
}

#customFilterRightBox {
    float: right;
    width: 250px;
    min-width: 250px;
    padding: 10px;
    display: inline-block;
}

.modalFilterButton {
        height:25px !important;
        border-radius:12px !important;
        width: 150px !important;
        margin-left:10px !important;
        margin-right:10px !important;
}
</style>

<script> 

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById("customFilterModal");
window.onclick = function(event) {
  if (event.target == document.getElementById("customFilterModal")) {
	modal.style.display = "none";
	document.getElementById("customFilterLeftBox").innerHTML = "";
        document.getElementById("customFilterRightBox").innerHTML = "";
  }
}
</script>

    </div>





    
    
        
        
    

    
    
<div id="Description">
    <div class="heading" id="Description_120">
        <span>
            <a href="javascript:toggleblocksOC('120_Description');">
                <img id="ocimg_120_Description" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Description
    </div>
    <div name="oc_120_Description" id="oc_120_Description" class="expandblock">
        <div class="detail">
            <div class="indent"><table>
                <tbody>
                    <tr>
                        <td style="width:40%">The product copies an input buffer to an output buffer without verifying that the size of the input buffer is less than the size of the output buffer.</td>
                        <td style="width:60%">
                            <a class="cweimg" href="/data/images/CWE-120-Diagram.png" target="_blank" rel="noopener noreferrer">
                                <img src="/data/images/CWE-120-Diagram.png" alt="Diagram for CWE-120">
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table></div>
        </div>
    </div>
</div>

    

    

    
    
<div id="Alternate_Terms">
    <div class="heading" id="Alternate_Terms_120">
        <span>
            <a href="javascript:toggleblocksOC('120_Alternate_Terms');">
                <img id="ocimg_120_Alternate_Terms" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Alternate Terms
    </div>
    <div name="oc_120_Alternate_Terms" id="oc_120_Alternate_Terms" class="expandblock">
        <div class="detail">
            <div id="EntryStripedTable" class="indent">
                <div id="Grouped">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                            
                                
                                <tr>
                                    <td valign="top" width="25%" class="subheading">
                                        Classic Buffer Overflow
                                    </td>
                                    <td valign="top" width="75%" style="border-left:solid #BAC5E3;">
                                        <div>This term was frequently used by vulnerability researchers during approximately 1995 to 2005 to differentiate buffer copies without length checks (which had been known about for decades) from other emerging weaknesses that still involved invalid accesses of buffers, as vulnerability researchers began to develop advanced exploitation techniques.</div> 
                                    </td>  
                                </tr>
                                
                                <tr>
                                    <td valign="top" width="25%" class="subheading">
                                        Unbounded Transfer
                                    </td>
                                    <td valign="top" width="75%" style="border-left:solid #BAC5E3;">
                                         
                                    </td>  
                                </tr>
                                
                                                  
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    
<div id="Common_Consequences">
    <div class="heading" id="Common_Consequences_120"><span><a href="javascript:toggleblocksOC('120_Common_Consequences');"><img
                    id="ocimg_120_Common_Consequences" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Common Consequences</div>
    <div name="oc_120_Common_Consequences" id="oc_120_Common_Consequences" class="expandblock">
        <div class="tabledetail">
            <div id="EntryStripedTable" class="indent"><span class="section tool"><img src="/images/dictionary.gif"
                        alt="Section Help"><span class="tip">This table specifies different individual consequences
                        associated with the weakness. The Scope identifies the application security area that is
                        violated, while the Impact describes the negative technical impact that arises if an
                        adversary succeeds in exploiting this weakness. The Likelihood provides information about
                        how likely the specific consequence is expected to be seen relative to the other
                        consequences in the list. For example, there may be high likelihood that a weakness will be
                        exploited to achieve a certain impact, but a low likelihood that it will be exploited to
                        achieve a different impact.</span></span>
              <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
                    <tr>
                        <th valign="middle" width="135px" nowrap>Impact</th>
                        <th valign="middle">Details</th>
                    </tr>
                            
                        
                        <tr>
                        <td valign="middle" class="subheading">
                                    <p class="smaller" style="font-weight:normal">
                                        
                                        
                                        <span class="subheading"><i>Modify Memory; Execute Unauthorized Code or Commands</i></span>
                                        
                                    </p>
                        </td>
                        <td valign="middle">
                            
                            
                            <span class="suboptheading">Scope: Integrity, Confidentiality, Availability</span>
                            
                            <p/>
                            
                            <div style="padding-top:5px; padding-bottom:10px">Buffer overflows often can be used to execute arbitrary code, which is usually outside the scope of the product&#39;s implicit security policy. This can often be used to subvert any other security service.</div>    
                        </td>
                        </tr>
                        
                        <tr>
                        <td valign="middle" class="subheading">
                                    <p class="smaller" style="font-weight:normal">
                                        
                                        
                                        <span class="subheading"><i>Modify Memory; DoS: Crash, Exit, or Restart; DoS: Resource Consumption (CPU)</i></span>
                                        
                                    </p>
                        </td>
                        <td valign="middle">
                            
                            
                            <span class="suboptheading">Scope: Availability</span>
                            
                            <p/>
                            
                            <div style="padding-top:5px; padding-bottom:10px">Buffer overflows generally lead to crashes. Other attacks leading to lack of availability are possible, including putting the product into an infinite loop.</div>    
                        </td>
                        </tr>
                        
                                   
                </table>
            </div>
        </div>
    </div>
</div>

    

    
    
<div id="Potential_Mitigations">
    <div class="heading" id="Potential_Mitigations_120"><span><a href="javascript:toggleblocksOC('120_Potential_Mitigations');"><img
                    id="ocimg_120_Potential_Mitigations" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Potential Mitigations</div>
    <div name="oc_120_Potential_Mitigations" id="oc_120_Potential_Mitigations" class="expandblock">
        <div class="tabledetail">
            <div id="EntryStripedTable" class="indent">
                <div id="Grouped">
                  <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
		    <tr>
                      <th>Phase(s)</th>
		      <th>Mitigation</th>
		    </tr>
                        
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Requirements</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;">
                                                <p class="suboptheading">Strategy: <i>Language Selection</i></p>
                                            </div>
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">
                  <p>Use a language that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p>
                  <p>For example, many languages that perform their own memory management, such as Java and Perl, are not subject to buffer overflows. Other languages, such as Ada and C#, typically provide overflow protection, but the protection can be disabled by the programmer.</p>
                  <p>Be wary that a language&#39;s interface to native code may still be subject to overflows, even if the language itself is theoretically safe.</p>
               </div>
                                        
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Architecture and Design</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;">
                                                <p class="suboptheading">Strategy: <i>Libraries or Frameworks</i></p>
                                            </div>
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">
                  <p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p>
                  <p>Examples include the Safe C String Library (SafeStr) by Messier and Viega [<a href="#REF-57_120">REF-57</a>], and the Strsafe.h library from Microsoft [<a href="#REF-56_120">REF-56</a>]. These libraries provide safer versions of overflow-prone string-handling functions.</p>
               </div>
                                        
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;"><b><span class="smaller">Note: </span></b>
                                            <span class="smaller">This is not a complete solution, since many buffer overflows are not related to strings.</span>
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Operation; Build and Compilation</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;">
                                                <p class="suboptheading">Strategy: <i>Environment Hardening</i></p>
                                            </div>
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;"> 
		<p>Use automatic buffer overflow detection mechanisms that are offered by certain compilers or compiler extensions. Examples include: the Microsoft Visual Studio /GS flag, Fedora/Red Hat FORTIFY_SOURCE GCC flag, StackGuard, and ProPolice, which provide various mechanisms including canary-based detection and range/index checking. </p> 
		<p> D3-SFCV (Stack Frame Canary Validation) from D3FEND [<a href="#REF-1334_120">REF-1334</a>] discusses canary-based detection in detail. </p> 

	      </div>
                                        
                                            <div>
                                                <p class="suboptheading">Effectiveness: Defense in Depth</p>
                                            </div>
                                        
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;"><b><span class="smaller">Note: </span></b>
                                            <span class="smaller"> 
		<p> This is not necessarily a complete solution, since these mechanisms only detect certain types of overflows. In addition, the result is still a denial of service, since the typical response is to exit the application. </p> 
	      </span>
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Implementation</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">
                  <p>Consider adhering to the following rules when allocating and managing an application&#39;s memory:</p>
                     <ul>
                        <li>Double check that your buffer is as large as you specify.</li>
                        <li>When using functions that accept a number of bytes to copy, such as strncpy(), be aware that if the destination buffer size is equal to the source buffer size, it may not NULL-terminate the string.</li>
                        <li>Check buffer boundaries if accessing the buffer in a loop and make sure there is no danger of writing past the allocated space.</li>
                        <li>If necessary, truncate all input strings to a reasonable length before passing them to the copy and concatenation functions.</li>
                     </ul>
               </div>
                                        
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Implementation</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;">
                                                <p class="suboptheading">Strategy: <i>Input Validation</i></p>
                                            </div>
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">
                  <p>Assume all input is malicious. Use an &#34;accept known good&#34; input validation strategy, i.e., use a list of acceptable inputs that strictly conform to specifications. Reject any input that does not strictly conform to specifications, or transform it into something that does.</p>
                  <p>When performing input validation, consider all potentially relevant properties, including length, type of input, the full range of acceptable values, missing or extra inputs, syntax, consistency across related fields, and conformance to business rules. As an example of business rule logic, &#34;boat&#34; may be syntactically valid because it only contains alphanumeric characters, but it is not valid if the input is only expected to contain colors such as &#34;red&#34; or &#34;blue.&#34;</p>
                  <p>Do not rely exclusively on looking for malicious or malformed inputs.  This is likely to miss at least one undesirable input, especially if the code&#39;s environment changes. This can give attackers enough room to bypass the intended validation. However, denylists can be useful for detecting potential attacks or determining which inputs are so malformed that they should be rejected outright.</p>
               </div>
                                        
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Architecture and Design</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">For any security checks that are performed on the client side, ensure that these checks are duplicated on the server side, in order to avoid <a href="/data/definitions/602.html">CWE-602</a>. Attackers can bypass the client-side checks by modifying values after the checks have been performed, or by changing the client to remove the client-side checks entirely. Then, these modified values would be submitted to the server.</div>
                                        
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Operation; Build and Compilation</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;">
                                                <p class="suboptheading">Strategy: <i>Environment Hardening</i></p>
                                            </div>
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">
		 <p>Run or compile the software using features or extensions that randomly arrange the positions of a program&#39;s executable and libraries in memory. Because this makes the addresses unpredictable, it can prevent an attacker from reliably jumping to exploitable code. </p> 
		 <p> Examples include Address Space Layout Randomization (ASLR) [<a href="#REF-58_120">REF-58</a>] [<a href="#REF-60_120">REF-60</a>] and Position-Independent Executables (PIE) [<a href="#REF-64_120">REF-64</a>]. Imported modules may be similarly realigned if their default memory addresses conflict with other modules, in a process known as &#34;rebasing&#34; (for Windows) and &#34;prelinking&#34; (for Linux) [<a href="#REF-1332_120">REF-1332</a>] using randomly generated addresses. ASLR for libraries cannot be used in conjunction with prelink since it would require relocating the libraries at run-time, defeating the whole purpose of prelinking. </p> 
		 <p> For more information on these techniques see D3-SAOR (Segment Address Offset Randomization) from D3FEND [<a href="#REF-1335_120">REF-1335</a>]. </p>
	       </div>
                                        
                                            <div>
                                                <p class="suboptheading">Effectiveness: Defense in Depth</p>
                                            </div>
                                        
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;"><b><span class="smaller">Note: </span></b>
                                            <span class="smaller">These techniques do not provide a complete solution.  For instance, exploits frequently use a bug that discloses memory addresses in order to maximize reliability of code execution [<a href="#REF-1337_120">REF-1337</a>]. It has also been shown that a side-channel attack can bypass ASLR [<a href="#REF-1333_120">REF-1333</a>].</span>
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Operation</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;">
                                                <p class="suboptheading">Strategy: <i>Environment Hardening</i></p>
                                            </div>
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;"> 
		 <p> Use a CPU and operating system that offers Data Execution Protection (using hardware NX or XD bits) or the equivalent techniques that simulate this feature in software, such as PaX [<a href="#REF-60_120">REF-60</a>] [<a href="#REF-61_120">REF-61</a>]. These techniques ensure that any instruction executed is exclusively at a memory address that is part of the code segment.  </p> 
	         <p> For more information on these techniques see D3-PSEP (Process Segment Execution Prevention) from D3FEND [<a href="#REF-1336_120">REF-1336</a>]. </p>
	       </div>
                                        
                                            <div>
                                                <p class="suboptheading">Effectiveness: Defense in Depth</p>
                                            </div>
                                        
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;"><b><span class="smaller">Note: </span></b>
                                            <span class="smaller">This is not a complete solution, since buffer overflows could be used to overwrite nearby variables to modify the software&#39;s state in dangerous ways. In addition, it cannot be used in cases in which self-modifying code is required. Finally, an attack could still cause a denial of service, since the typical response is to exit the application. </span>
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Build and Compilation; Operation</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">Most mitigating technologies at the compiler or OS level to date address only a subset of buffer overflow problems and rarely provide complete protection against even that subset. It is good practice to implement strategies to increase the workload of an attacker, such as leaving the attacker to guess an unknown value that changes every program execution.</div>
                                        
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Implementation</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">Replace unbounded copy functions with analogous functions that support length arguments, such as strcpy with strncpy. Create these if they are not available.</div>
                                        
                                            <div>
                                                <p class="suboptheading">Effectiveness: Moderate</p>
                                            </div>
                                        
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;"><b><span class="smaller">Note: </span></b>
                                            <span class="smaller">This approach is still susceptible to calculation errors, including issues such as off-by-one errors (<a href="/data/definitions/193.html">CWE-193</a>) and incorrectly calculating buffer lengths (<a href="/data/definitions/131.html">CWE-131</a>).</span>
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Architecture and Design</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;">
                                                <p class="suboptheading">Strategy: <i>Enforcement by Conversion</i></p>
                                            </div>
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">When the set of acceptable objects, such as filenames or URLs, is limited or known, create a mapping from a set of fixed input values (such as numeric IDs) to the actual filenames or URLs, and reject all other inputs.</div>
                                        
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Architecture and Design; Operation</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;">
                                                <p class="suboptheading">Strategy: <i>Environment Hardening</i></p>
                                            </div>
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">Run your code using the lowest privileges that are required to accomplish the necessary tasks [<a href="#REF-76_120">REF-76</a>]. If possible, create isolated accounts with limited privileges that are only used for a single task. That way, a successful attack will not immediately give the attacker access to the rest of the software or its environment. For example, database applications rarely need to run as the database administrator, especially in day-to-day operations.</div>
                                        
                                        
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td valign="top" style="border-bottom:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            
                                            <p class="subheading">Architecture and Design; Operation</p>
                                            
                                        
				    </td>
				    <td valign="top" style="border-bottom:solid #BAC5E3; border-left:solid #BAC5E3; padding-top:5px; padding-bottom:5px;">
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;">
                                                <p class="suboptheading">Strategy: <i>Sandbox or Jail</i></p>
                                            </div>
                                                          
                                        <div style="text-indent:3em; padding-top:10px; padding-bottom:10px;">
                  <p>Run the code in a &#34;jail&#34; or similar sandbox environment that enforces strict boundaries between the process and the operating system. This may effectively restrict which files can be accessed in a particular directory or which commands can be executed by the software.</p>
                  <p>OS-level examples include the Unix chroot jail, AppArmor, and SELinux. In general, managed code may provide some protection. For example, java.io.FilePermission in the Java SecurityManager allows the software to specify restrictions on file operations.</p>
                  <p>This may not be a feasible solution, and it only limits the impact to the operating system; the rest of the application may still be subject to compromise.</p>
                  <p>Be careful to avoid <a href="/data/definitions/243.html">CWE-243</a> and other weaknesses related to jails.</p>
               </div>
                                        
                                            <div>
                                                <p class="suboptheading">Effectiveness: Limited</p>
                                            </div>
                                        
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;"><b><span class="smaller">Note: </span></b>
                                            <span class="smaller">The effectiveness of this mitigation depends on the prevention capabilities of the specific sandbox or jail being used and might only help to reduce the scope of an attack, such as restricting the attacker to certain system calls or limiting the portion of the file system that can be accessed.</span>
                                        
                                    </td>
                                </tr>
                            
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
        
        
    

    
        






    
        
    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
        
    
    
    

    
        
    
    
    

    
        
    
    
    

    
        
    
    
    

    
        
    
    
    


<div id="Relationships">
    <div class="heading" id="Relationships_120">
        <span>
            <a href="javascript:toggleblocksOC('120_Relationships');"><img id="ocimg_120_Relationships" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>
        Relationships
    </div>
    <div name="oc_120_Relationships" id="oc_120_Relationships" class="expandblock"> 
                    <span class="section tool">
                        <img src="/images/dictionary.gif" alt="Section Help">
                        <span class="tip">This table shows the weaknesses and high level categories that are related to this
                            weakness. These relationships are defined as ChildOf, ParentOf, MemberOf and give insight to
                            similar items that may exist at higher and lower levels of abstraction. In addition,
                            relationships such as PeerOf and CanAlsoBe are defined to show similar weaknesses that the user
                            may want to explore.</span>
                    </span>
        <div class="detail">
            <div class="indent">
                
                    
                    <div id="relevant_table">
                        <div class="reltable">
                            <span><a href="javascript:toggleblocksOC('120_1000_relevant_table');">
                                <img id="ocimg_120_1000_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "Research Concepts" (View-1000)
                            <div name="oc_120_1000_relevant_table" id="oc_120_1000_relevant_table" class="expandblock">
                                <div class="tabledetail">
                                    <div class="indent">
                                        <div xmlns:saxon="http://saxon.sf.net/" xmlns:xalan="http://xml.apache.org/xalan"
                                            class="tabledetail">
                                            <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
                                                <tr>
                                                    <th valign="top" width="110px">Nature</th>
                                                    <th valign="top" width="40px">Type</th>
                                                    <th valign="top" width="50px">ID</th>
                                                    <th valign="top">Name</th>
                                                </tr>
                                                <tbody>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ChildOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/base.gif" alt="Base" class="icon">
                                                                <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/787.html" target="_blank" rel="noopener noreferrer">787</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Out-of-bounds Write</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ParentOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/variant.gif" alt="Variant" class="icon">
                                                                <span class="tip">Variant - a weakness that is linked to a certain type of product, typically involving a specific language or technology. More specific than a Base weakness. Variant level weaknesses typically describe issues in terms of 3 to 5 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/785.html" target="_blank" rel="noopener noreferrer">785</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Use of Path Manipulation Function without Maximum-sized Buffer</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">CanFollow</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/base.gif" alt="Base" class="icon">
                                                                <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/170.html" target="_blank" rel="noopener noreferrer">170</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Improper Null Termination</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">CanFollow</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/variant.gif" alt="Variant" class="icon">
                                                                <span class="tip">Variant - a weakness that is linked to a certain type of product, typically involving a specific language or technology. More specific than a Base weakness. Variant level weaknesses typically describe issues in terms of 3 to 5 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/231.html" target="_blank" rel="noopener noreferrer">231</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Improper Handling of Extra Values</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">CanFollow</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/variant.gif" alt="Variant" class="icon">
                                                                <span class="tip">Variant - a weakness that is linked to a certain type of product, typically involving a specific language or technology. More specific than a Base weakness. Variant level weaknesses typically describe issues in terms of 3 to 5 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/416.html" target="_blank" rel="noopener noreferrer">416</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Use After Free</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">CanFollow</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/variant.gif" alt="Variant" class="icon">
                                                                <span class="tip">Variant - a weakness that is linked to a certain type of product, typically involving a specific language or technology. More specific than a Base weakness. Variant level weaknesses typically describe issues in terms of 3 to 5 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/456.html" target="_blank" rel="noopener noreferrer">456</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Missing Initialization of a Variable</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">CanPrecede</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/base.gif" alt="Base" class="icon">
                                                                <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/123.html" target="_blank" rel="noopener noreferrer">123</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Write-what-where Condition</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    
                    <div id="relevant_table">
                        <div class="reltable">
                            <span><a href="javascript:toggleblocksOC('120_699_relevant_table');">
                                <img id="ocimg_120_699_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "Software Development" (View-699)
                            <div name="oc_120_699_relevant_table" id="oc_120_699_relevant_table" class="expandblock">
                                <div class="tabledetail">
                                    <div class="indent">
                                        <div xmlns:saxon="http://saxon.sf.net/" xmlns:xalan="http://xml.apache.org/xalan"
                                            class="tabledetail">
                                            <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
                                                <tr>
                                                    <th valign="top" width="110px">Nature</th>
                                                    <th valign="top" width="40px">Type</th>
                                                    <th valign="top" width="50px">ID</th>
                                                    <th valign="top">Name</th>
                                                </tr>
                                                <tbody>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Category">
                                                        <td valign="top">MemberOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/category.gif" alt="Category" class="icon">
                                                                <span class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/1218.html" target="_blank" rel="noopener noreferrer">1218</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Memory Buffer Errors</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    
                    <div id="relevant_table">
                        <div class="reltable">
                            <span><a href="javascript:toggleblocksOC('120_1003_relevant_table');">
                                <img id="ocimg_120_1003_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "Weaknesses for Simplified Mapping of Published Vulnerabilities" (View-1003)
                            <div name="oc_120_1003_relevant_table" id="oc_120_1003_relevant_table" class="expandblock">
                                <div class="tabledetail">
                                    <div class="indent">
                                        <div xmlns:saxon="http://saxon.sf.net/" xmlns:xalan="http://xml.apache.org/xalan"
                                            class="tabledetail">
                                            <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
                                                <tr>
                                                    <th valign="top" width="110px">Nature</th>
                                                    <th valign="top" width="40px">Type</th>
                                                    <th valign="top" width="50px">ID</th>
                                                    <th valign="top">Name</th>
                                                </tr>
                                                <tbody>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ChildOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/class.gif" alt="Class" class="icon">
                                                                <span class="tip">Class - a weakness that is described in a very abstract fashion, typically independent of any specific language or technology. More specific than a Pillar Weakness, but more general than a Base Weakness. Class level weaknesses typically describe issues in terms of 1 or 2 of the following dimensions: behavior, property, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/119.html" target="_blank" rel="noopener noreferrer">119</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Improper Restriction of Operations within the Bounds of a Memory Buffer</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    
                    <div id="relevant_table">
                        <div class="reltable">
                            <span><a href="javascript:toggleblocksOC('120_1305_relevant_table');">
                                <img id="ocimg_120_1305_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "CISQ Quality Measures (2020)" (View-1305)
                            <div name="oc_120_1305_relevant_table" id="oc_120_1305_relevant_table" class="expandblock">
                                <div class="tabledetail">
                                    <div class="indent">
                                        <div xmlns:saxon="http://saxon.sf.net/" xmlns:xalan="http://xml.apache.org/xalan"
                                            class="tabledetail">
                                            <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
                                                <tr>
                                                    <th valign="top" width="110px">Nature</th>
                                                    <th valign="top" width="40px">Type</th>
                                                    <th valign="top" width="50px">ID</th>
                                                    <th valign="top">Name</th>
                                                </tr>
                                                <tbody>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ChildOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/base.gif" alt="Base" class="icon">
                                                                <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/787.html" target="_blank" rel="noopener noreferrer">787</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Out-of-bounds Write</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    
                    <div id="relevant_table">
                        <div class="reltable">
                            <span><a href="javascript:toggleblocksOC('120_1340_relevant_table');">
                                <img id="ocimg_120_1340_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "CISQ Data Protection Measures" (View-1340)
                            <div name="oc_120_1340_relevant_table" id="oc_120_1340_relevant_table" class="expandblock">
                                <div class="tabledetail">
                                    <div class="indent">
                                        <div xmlns:saxon="http://saxon.sf.net/" xmlns:xalan="http://xml.apache.org/xalan"
                                            class="tabledetail">
                                            <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
                                                <tr>
                                                    <th valign="top" width="110px">Nature</th>
                                                    <th valign="top" width="40px">Type</th>
                                                    <th valign="top" width="50px">ID</th>
                                                    <th valign="top">Name</th>
                                                </tr>
                                                <tbody>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ChildOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/base.gif" alt="Base" class="icon">
                                                                <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/787.html" target="_blank" rel="noopener noreferrer">787</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Out-of-bounds Write</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    
                    <div id="relevant_table">
                        <div class="reltable">
                            <span><a href="javascript:toggleblocksOC('120_700_relevant_table');">
                                <img id="ocimg_120_700_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "Seven Pernicious Kingdoms" (View-700)
                            <div name="oc_120_700_relevant_table" id="oc_120_700_relevant_table" class="expandblock">
                                <div class="tabledetail">
                                    <div class="indent">
                                        <div xmlns:saxon="http://saxon.sf.net/" xmlns:xalan="http://xml.apache.org/xalan"
                                            class="tabledetail">
                                            <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
                                                <tr>
                                                    <th valign="top" width="110px">Nature</th>
                                                    <th valign="top" width="40px">Type</th>
                                                    <th valign="top" width="50px">ID</th>
                                                    <th valign="top">Name</th>
                                                </tr>
                                                <tbody>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ChildOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/class.gif" alt="Class" class="icon">
                                                                <span class="tip">Class - a weakness that is described in a very abstract fashion, typically independent of any specific language or technology. More specific than a Pillar Weakness, but more general than a Base Weakness. Class level weaknesses typically describe issues in terms of 1 or 2 of the following dimensions: behavior, property, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/20.html" target="_blank" rel="noopener noreferrer">20</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Improper Input Validation</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
</div>

    

    

    
    
<div id="Modes_Of_Introduction">
    <div class="heading" id="Modes_Of_Introduction_120"><span><a href="javascript:toggleblocksOC('120_Modes_Of_Introduction');"><img
                    id="ocimg_120_Modes_Of_Introduction" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Modes
        Of Introduction</div>
    <div name="oc_120_Modes_Of_Introduction" id="oc_120_Modes_Of_Introduction" class="expandblock">
        <div class="tabledetail">
            <div id="EntryStripedTable" class="indent"><span class="section tool"><img src="/images/dictionary.gif"
                        alt="Section Help"><span class="tip">The different Modes of Introduction provide information
                        about how and when this
                        weakness may be introduced. The Phase identifies a point in the life cycle at which
                        introduction
                        may occur, while the Note provides a typical scenario related to introduction during the
                        given
                        phase.</span></span>
                <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
                    <tr>
                        <th valign="middle" width="110px">Phase</th>
                        <th valign="middle">Note</th>
                    </tr>
                        
                            
                            <tr>
                                <td valign="middle" nowrap class="subheading">Implementation</td>
                                <td valign="middle" width="100%"></td>
                            </tr>
                            
                        
                </table>
            </div>
        </div>
    </div>
</div>

    

    
    

<div id="Applicable_Platforms">
    <div class="heading" id="Applicable_Platforms_120"><span><a href="javascript:toggleblocksOC('120_Applicable_Platforms');"><img
                    id="ocimg_120_Applicable_Platforms" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Applicable Platforms</div>
    <div name="oc_120_Applicable_Platforms" id="oc_120_Applicable_Platforms" class="expandblock">
        <div class="detail">
            <div id="EntryStripedTable" class="indent"><span class="section tool"><img src="/images/dictionary.gif"
                        alt="Section Help"><span class="tip">This listing shows possible areas for which the given
                        weakness could appear. These
                        may be for specific named Languages, Operating Systems, Architectures, Paradigms,
                        Technologies,
                        or a class of such platforms. The platform is listed along with how frequently the given
                        weakness appears for that instance.</span></span>
                <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                
                <tr><td valign="top" class="subheading">Languages</td>
		  <td style="border-left:solid #BAC5E3;">
                    
                        
                            <div>
                                <p>  Class: Memory-Unsafe
                                    
                                    
                                    <span class="smaller" style="font-style:italic">(Undetermined Prevalence)</span>
                                    
                                </p>
                            </div>
                        
                            <div>
                                <p> C
                                    
                                    
                                    <span class="smaller" style="font-style:italic">(Often Prevalent)</span>
                                    
                                </p>
                            </div>
                        
                            <div>
                                <p> C&#43;&#43;
                                    
                                    
                                    <span class="smaller" style="font-style:italic">(Often Prevalent)</span>
                                    
                                </p>
                            </div>
                        
                            <div>
                                <p>  Class: Assembly
                                    
                                    
                                    <span class="smaller" style="font-style:italic">(Undetermined Prevalence)</span>
                                    
                                </p>
                            </div>
                        
                    
                </td></tr>
                
                
            
                
                </table>
            </div>
        </div>
    </div>
</div>

    

    
    <div id="Likelihood_Of_Exploit">
    <div class="heading" id="Likelihood_Of_Exploit_120">
        <span>
            <a href="javascript:toggleblocksOC('120_Likelihood_Of_Exploit');"><img id="ocimg_120_Likelihood_Of_Exploit" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Likelihood Of Exploit
    </div>
    <div name="oc_120_Likelihood_Of_Exploit" id="oc_120_Likelihood_Of_Exploit" class="expandblock">
        <div class="detail">
            <div class="indent">High</div>
        </div>
    </div>
</div>

    

    
    

<div id="Demonstrative_Examples">
    <div class="heading" id="Demonstrative_Examples_120"><span><a href="javascript:toggleblocksOC('120_Demonstrative_Examples');"><img
                    id="ocimg_120_Demonstrative_Examples" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Demonstrative Examples</div>
    <div name="oc_120_Demonstrative_Examples" id="oc_120_Demonstrative_Examples" class="expandblock">
        <div class="detail">
            <div class="indent">
            
                <p class="subheading">Example 1</p>
                <br/>
                
                <p>The following code asks the user to enter their last name and then attempts to store the value entered in the last_name array.</p>
                
                
                
                
                
                
                <div class="indent Bad">
                    <div id="ExampleCode" style="clear:both; padding-top:5px; padding-bottom:5px;">
                        <div class="shadow">
                            <div class="CodeHead">
                                <div style="float:right; font-style:italic; font-size:10px; color:#98A9B7">(bad code)</div>
                                <div class="optheading smaller">
                                    
                                    <span style="font-weight:normal; font-style:italic">Example Language: </span>C&nbsp;
                                    
                                </div>
                            </div>
                            <div class="top">
                                
                  <div>char last_name[20];<br/>printf (&#34;Enter your last name: &#34;);<br/>scanf (&#34;%s&#34;, last_name);</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>The problem with the code above is that it does not restrict or limit the size of the name entered by the user. If the user enters &#34;Very_very_long_last_name&#34; which is 24 characters long, then a buffer overflow will occur since the array can only hold 20 characters total.</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
                <p class="subheading">Example 2</p>
                <br/>
                
                <p>The following code attempts to create a local copy of a buffer to perform some manipulations to the data.</p>
                
                
                
                
                
                
                <div class="indent Bad">
                    <div id="ExampleCode" style="clear:both; padding-top:5px; padding-bottom:5px;">
                        <div class="shadow">
                            <div class="CodeHead">
                                <div style="float:right; font-style:italic; font-size:10px; color:#98A9B7">(bad code)</div>
                                <div class="optheading smaller">
                                    
                                    <span style="font-weight:normal; font-style:italic">Example Language: </span>C&nbsp;
                                    
                                </div>
                            </div>
                            <div class="top">
                                
                  <div>void manipulate_string(char * string){<div style="margin-left:1em;">char buf[24];<br/>strcpy(buf, string);<br/>...</div>}</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>However, the programmer does not ensure that the size of the data pointed to by string will fit in the local buffer and copies the data with the potentially dangerous strcpy() function. This may result in a buffer overflow condition if an attacker can influence the contents of the string parameter.</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
                <p class="subheading">Example 3</p>
                <br/>
                
                <p>The code below calls the gets() function to read in data from the command line.</p>
                
                
                
                
                
                
                <div class="indent Bad">
                    <div id="ExampleCode" style="clear:both; padding-top:5px; padding-bottom:5px;">
                        <div class="shadow">
                            <div class="CodeHead">
                                <div style="float:right; font-style:italic; font-size:10px; color:#98A9B7">(bad code)</div>
                                <div class="optheading smaller">
                                    
                                    <span style="font-weight:normal; font-style:italic">Example Language: </span>C&nbsp;
                                    
                                </div>
                            </div>
                            <div class="top">
                                
                  <div>
                     <div style="margin-left:1em;">char buf[24];<br/>printf(&#34;Please enter your name and press &lt;Enter&gt;\n&#34;);<br/>gets(buf);<br/>...</div>}</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>However, gets() is inherently unsafe, because it copies all input from STDIN to the buffer without checking size. This allows the user to provide a string that is larger than the buffer size, resulting in an overflow condition.</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
                <p class="subheading">Example 4</p>
                <br/>
                
                <p>In the following example, a server accepts connections from a client and processes the client request. After accepting a client connection, the program will obtain client information using the gethostbyaddr method, copy the hostname of the client that connected to a local variable and output the hostname of the client to a log file.</p>
                
                
                
                
                
                
                <div class="indent Bad">
                    <div id="ExampleCode" style="clear:both; padding-top:5px; padding-bottom:5px;">
                        <div class="shadow">
                            <div class="CodeHead">
                                <div style="float:right; font-style:italic; font-size:10px; color:#98A9B7">(bad code)</div>
                                <div class="optheading smaller">
                                    
                                    <span style="font-weight:normal; font-style:italic">Example Language: </span>C&nbsp;
                                    
                                </div>
                            </div>
                            <div class="top">
                                
                  <div>...<div style="margin-left:1em;">
                        <div>struct hostent *clienthp;<br/>char hostname[MAX_LEN];<br/>
                           <br/>// create server socket, bind to server address and listen on socket<br/>...<br/>
                           <br/>// accept client connections and process requests<br/>int count = 0;<br/>for (count = 0; count &lt; MAX_CONNECTIONS; count++) {<div style="margin-left:1em;">
                              <div>
                                 <br/>int clientlen = sizeof(struct sockaddr_in);<br/>int clientsocket = accept(serversocket, (struct sockaddr *)&amp;clientaddr, &amp;clientlen);<br/>
                                 <br/>if (clientsocket &gt;= 0) {<div style="margin-left:1em;">
                                    <div>clienthp = gethostbyaddr((char*) &amp;clientaddr.sin_addr.s_addr, sizeof(clientaddr.sin_addr.s_addr), AF_INET);<br/>strcpy(hostname, clienthp-&gt;h_name);<br/>logOutput(&#34;Accepted client connection from host &#34;, hostname);<br/>
                                       <br/>// process client request<br/>...<br/>close(clientsocket);</div>
                                 </div>}</div>
                           </div>}<br/>close(serversocket);</div>
                     </div>
                     <br/>...</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>However, the hostname of the client that connected may be longer than the allocated size for the local hostname variable. This will result in a buffer overflow when copying the client hostname to the local variable using the strcpy method.</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
            </div>
        </div>
    </div>
</div>

    

    
    
<div id="Observed_Examples">
    <div class="heading" id="Observed_Examples_120"><span><a href="javascript:toggleblocksOC('120_Observed_Examples');"><img
                    id="ocimg_120_Observed_Examples" src="/images/head_more.gif" border="0" alt="+"></a> </span>Selected Observed
        Examples</div>
    <div name="oc_120_Observed_Examples" id="oc_120_Observed_Examples" class="expandblock">
        <div class="tabledetail">
	  <p><i>Note: this is a curated list of examples for users to understand the variety of ways in which this
	      weakness can be introduced. It is not a complete list of all CVEs that are related to this CWE entry.</i></p>
            <div id="EntryStripedTable" class="indent">
                <div style="margin-top: 10px; border-width: thin; border:solid #BAC5E3;">
                  <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                        <tr>
                            <th valign="top" nowrap>Reference</th>
                            <th valign="top">Description</th>
                        </tr>
                        
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2000-1094" target="_blank" rel="noopener noreferrer">CVE-2000-1094</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>buffer overflow using command with long argument</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-1999-0046" target="_blank" rel="noopener noreferrer">CVE-1999-0046</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>buffer overflow in local program using long environment variable</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2002-1337" target="_blank" rel="noopener noreferrer">CVE-2002-1337</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>buffer overflow in comment characters, when product increments a counter for a &#34;&gt;&#34; but does not decrement for &#34;&lt;&#34;</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2003-0595" target="_blank" rel="noopener noreferrer">CVE-2003-0595</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>By replacing a valid cookie value with an extremely long string of characters, an attacker may overflow the application&#39;s buffers.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2001-0191" target="_blank" rel="noopener noreferrer">CVE-2001-0191</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>By replacing a valid cookie value with an extremely long string of characters, an attacker may overflow the application&#39;s buffers.</div>
                                </td>
                            </tr>
                            
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    <div id="Weakness_Ordinalities">
    <div class="heading" id="Weakness_Ordinalities_120"><span><a href="javascript:toggleblocksOC('120_Weakness_Ordinalities');"><img
                    id="ocimg_120_Weakness_Ordinalities" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Weakness Ordinalities</div>
    <div name="oc_120_Weakness_Ordinalities" id="oc_120_Weakness_Ordinalities" class="expandblock">
        <div class="tabledetail">
            <div class="indent">
                <div style="margin-top: 10px">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                        <tr>
                            <th valign="top" nowrap>Ordinality</th>
                            <th valign="top" width="100%">Description</th>
                        </tr>
                        <tr>
                        
                        
                        
                        
                        
                            
                                <td valign="top">
                                    <div style="font-size:90%;">Resultant</div>
                                </td>
                                <td valign="top">
                                    <div style="font-size:90%; font-style:italic; padding:5px;">
                                        (where the weakness is typically related to the presence of some other weaknesses)
                                    </div>
                                    
                                </td>
                            </tr>
                            
                                <td valign="top">
                                    <div style="font-size:90%;">Primary</div>
                                </td>
                                <td valign="top">
                                    <div style="font-size:90%; font-style:italic; padding:5px;">
                                        (where the weakness exists independent of other weaknesses)
                                    </div>
                                    
                                </td>
                            </tr>
                            
                         
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    
<div id="Detection_Methods">
    <div class="heading" id="Detection_Methods_120"><span><a href="javascript:toggleblocksOC('120_Detection_Methods');"><img
                    id="ocimg_120_Detection_Methods" src="/images/head_more.gif" border="0" alt="+"></a> </span>Detection
        Methods</div>
    <div name="oc_120_Detection_Methods" id="oc_120_Detection_Methods" class="expandblock">
        <div class="tabledetail">
            <div id="EntryStripedTable" class="indent">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" id="Detail">
                      <tr>
			<th>Method</th>
			<th>Details</th>
                      </tr>
                        
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Automated Static Analysis</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    
                  <p>This weakness can often be detected using automated static analysis tools. Many modern tools use data flow analysis or constraint-based techniques to minimize the number of false positives.</p>
                  <p>Automated static analysis generally does not account for environmental considerations when reporting out-of-bounds memory operations. This can make it difficult for users to determine which warnings should be investigated first. For example, an analysis tool might report buffer overflows that originate from command line arguments in a program that is not expected to run with setuid or other special privileges.</p>
               
				    </div>
                                    
                                    <p class="suboptheading">Effectiveness: High</p>
                                    
                                    
                                    <b><span class="smaller">Note:</b>Detection techniques for buffer-related errors are more mature than for most other weakness types.</span>
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Automated Dynamic Analysis</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    This weakness can be detected using dynamic tools and techniques that interact with the software using large test suites with many diverse inputs, such as fuzz testing (fuzzing), robustness testing, and fault injection. The software&#39;s operation may slow down, but it should not become unstable, crash, or generate incorrect results.
				    </div>
                                    
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Manual Analysis</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    Manual analysis can be useful for finding this weakness, but it might not achieve desired code coverage within limited time constraints. This becomes difficult for weaknesses that must be considered for all inputs, since the attack surface can be too large.
				    </div>
                                    
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Automated Dynamic Analysis</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    Use tools that are integrated during
	      compilation to insert runtime error-checking mechanisms
	      related to memory safety errors, such as AddressSanitizer
	      (ASan) for C/C++ [<a href="#REF-1518_120">REF-1518</a>].
				    </div>
                                    
                                    <p class="suboptheading">Effectiveness: Moderate</p>
                                    
                                    
                                    <b><span class="smaller">Note:</b>Crafted inputs are necessary to
	      reach the code containing the error, such as generated
	      by fuzzers.  Also, these tools may reduce performance,
	      and they only report the error condition - not the
	      original mistake that led to the
	      error.</span>
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Automated Static Analysis - Binary or Bytecode</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    
                  <p>According to SOAR [<a href="#REF-1479_120">REF-1479</a>], the following detection techniques may be useful:</p>
                  <div style="margin-left:1em;">
                     <div>Highly cost effective:</div>
                        <ul>
                           <li>Bytecode Weakness Analysis - including disassembler + source code weakness analysis</li>
                           <li>Binary Weakness Analysis - including disassembler + source code weakness analysis</li>
                        </ul>
                  </div>
               
				    </div>
                                    
                                    <p class="suboptheading">Effectiveness: High</p>
                                    
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Manual Static Analysis - Binary or Bytecode</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    
                  <p>According to SOAR [<a href="#REF-1479_120">REF-1479</a>], the following detection techniques may be useful:</p>
                  <div style="margin-left:1em;">
                     <div>Cost effective for partial coverage:</div>
                        <ul>
                           <li>Binary / Bytecode disassembler - then use manual analysis for vulnerabilities &amp; anomalies</li>
                        </ul>
                  </div>
               
				    </div>
                                    
                                    <p class="suboptheading">Effectiveness: SOAR Partial</p>
                                    
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Dynamic Analysis with Automated Results Interpretation</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    
                  <p>According to SOAR [<a href="#REF-1479_120">REF-1479</a>], the following detection techniques may be useful:</p>
                  <div style="margin-left:1em;">
                     <div>Cost effective for partial coverage:</div>
                        <ul>
                           <li>Web Application Scanner</li>
                           <li>Web Services Scanner</li>
                           <li>Database Scanners</li>
                        </ul>
                  </div>
               
				    </div>
                                    
                                    <p class="suboptheading">Effectiveness: SOAR Partial</p>
                                    
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Dynamic Analysis with Manual Results Interpretation</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    
                  <p>According to SOAR [<a href="#REF-1479_120">REF-1479</a>], the following detection techniques may be useful:</p>
                  <div style="margin-left:1em;">
                     <div>Cost effective for partial coverage:</div>
                        <ul>
                           <li>Fuzz Tester</li>
                           <li>Framework-based Fuzzer</li>
                        </ul>
                  </div>
               
				    </div>
                                    
                                    <p class="suboptheading">Effectiveness: SOAR Partial</p>
                                    
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Manual Static Analysis - Source Code</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    
                  <p>According to SOAR [<a href="#REF-1479_120">REF-1479</a>], the following detection techniques may be useful:</p>
                  <div style="margin-left:1em;">
                     <div>Cost effective for partial coverage:</div>
                        <ul>
                           <li>Focused Manual Spotcheck - Focused manual analysis of source</li>
                           <li>Manual Source Code Review (not inspections)</li>
                        </ul>
                  </div>
               
				    </div>
                                    
                                    <p class="suboptheading">Effectiveness: SOAR Partial</p>
                                    
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Automated Static Analysis - Source Code</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    
                  <p>According to SOAR [<a href="#REF-1479_120">REF-1479</a>], the following detection techniques may be useful:</p>
                  <div style="margin-left:1em;">
                     <div>Highly cost effective:</div>
                        <ul>
                           <li>Source code Weakness Analyzer</li>
                           <li>Context-configured Source Code Weakness Analyzer</li>
                        </ul>
                  </div>
               
				    </div>
                                    
                                    <p class="suboptheading">Effectiveness: High</p>
                                    
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="top">
                                    <p class="subheading">Architecture or Design Review</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    
                  <p>According to SOAR [<a href="#REF-1479_120">REF-1479</a>], the following detection techniques may be useful:</p>
                  <div style="margin-left:1em;">
                     <div>Highly cost effective:</div>
                        <ul>
                           <li>Formal Methods / Correct-By-Construction</li>
                        </ul>
                     <div>Cost effective for partial coverage:</div>
                        <ul>
                           <li>Inspection (IEEE 1028 standard) (can apply to requirements, design, source code, etc.)</li>
                        </ul>
                  </div>
               
				    </div>
                                    
                                    <p class="suboptheading">Effectiveness: High</p>
                                    
                                    
                                </td>
                            </tr>
                            
                        
                    </table>
            </div>
        </div>
    </div>
</div>

    

    
    <div id="Functional_Areas">
    <div class="heading" id="Functional_Areas_120"><span><a href="javascript:toggleblocksOC('120_Functional_Areas');"><img
                    id="ocimg_120_Functional_Areas" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Functional Areas</div>
    <div name="oc_120_Functional_Areas" id="oc_120_Functional_Areas" class="expandblock">
        <div class="detail">
            <div class="indent">
                <ul>
                    
                        <li>Memory Management</li>
                    
                </ul>
            </div>
        </div>
    </div>
</div>

    

    
    <div id="Affected_Resources">
    <div class="heading" id="Affected_Resources_120"><span><a href="javascript:toggleblocksOC('120_Affected_Resources');"><img
                    id="ocimg_120_Affected_Resources" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Affected Resources</div>
    <div name="oc_120_Affected_Resources" id="oc_120_Affected_Resources" class="expandblock">
        <div class="detail">
            <div class="indent">
                <ul>
                    
                        <li>Memory</li>
                    
                </ul>
            </div>
        </div>
    </div>
</div>

    

    
    



<div id="Memberships">
    <div class="heading" id="Memberships_120"><span><a href="javascript:toggleblocksOC('120_Memberships');"><img
                    id="ocimg_120_Memberships" src="/images/head_more.gif" border="0" alt="+"></a> </span>Memberships
    </div>
    <div name="oc_120_Memberships" id="oc_120_Memberships" class="expandblock">
        <div class="detail">
            <div id="EntryStripedTable" class="indent">
                   <span class="section tool"><img src="/images/dictionary.gif" alt="Section Help"><span
                                class="tip">This MemberOf Relationships table shows additional CWE Categories and Views that
                                reference this weakness as a member. This information is often useful in understanding where a
                                weakness fits within the context of external information sources.</span></span>
                        <div xmlns:saxon="http://saxon.sf.net/" xmlns:xalan="http://xml.apache.org/xalan" class="tabledetail"
                        style="padding-top:10px">
                        <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                            <tr>
                                <th valign="top">Nature</th>
                                <th valign="top">Type</th>
                                <th valign="top">ID</th>
                                <th valign="top">Name</th>
                            </tr>
                            <tbody>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/722.html" target="_blank" rel="noopener noreferrer">722</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      OWASP Top Ten 2004 Category A1 - Unvalidated Input
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/726.html" target="_blank" rel="noopener noreferrer">726</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      OWASP Top Ten 2004 Category A5 - Buffer Overflows
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/741.html" target="_blank" rel="noopener noreferrer">741</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      CERT C Secure Coding Standard (2008) Chapter 8 - Characters and Strings (STR)
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/802.html" target="_blank" rel="noopener noreferrer">802</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      2010 Top 25 - Risky Resource Management
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/865.html" target="_blank" rel="noopener noreferrer">865</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      2011 Top 25 - Risky Resource Management
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/875.html" target="_blank" rel="noopener noreferrer">875</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      CERT C&#43;&#43; Secure Coding Section 07 - Characters and Strings (STR)
                                    </td>
                                </tr>
                            
                                
                                
                                          
                                         
                                <tr class="primary View">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/view.gif" alt="View"  class="icon"><span
                                                class="tip">View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries).</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/884.html" target="_blank" rel="noopener noreferrer">884</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      CWE Cross-section
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/970.html" target="_blank" rel="noopener noreferrer">970</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      SFP Secondary Cluster: Faulty Buffer Access
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1129.html" target="_blank" rel="noopener noreferrer">1129</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      CISQ Quality Measures (2016) - Reliability
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1131.html" target="_blank" rel="noopener noreferrer">1131</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      CISQ Quality Measures (2016) - Security
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1161.html" target="_blank" rel="noopener noreferrer">1161</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      SEI CERT C Coding Standard - Guidelines 07. Characters and Strings (STR)
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1399.html" target="_blank" rel="noopener noreferrer">1399</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      Comprehensive Categorization: Memory Safety
                                    </td>
                                </tr>
                            
                                
                                
                                          
                                         
                                <tr class="primary View">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/view.gif" alt="View"  class="icon"><span
                                                class="tip">View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries).</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1435.html" target="_blank" rel="noopener noreferrer">1435</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      Weaknesses in the 2025 CWE Top 25 Most Dangerous Software Weaknesses
                                    </td>
                                </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    

<div id="Vulnerability_Mapping_Notes">
    <div class="heading" id="Vulnerability_Mapping_Notes_120"><span><a href="javascript:toggleblocksOC('120_Vulnerability_Mapping_Notes');"><img
                    id="ocimg_120_Vulnerability_Mapping_Notes" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Vulnerability Mapping Notes</div>
    <div name="oc_120_Vulnerability_Mapping_Notes" id="oc_120_Vulnerability_Mapping_Notes" class="expandblock">
        <div class="detail">
            <div id="EntryStripedTable" class="indent">
                <div id="Grouped">
                  <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
		        <tr>
  <td>
    <span class="subheading" style="display:inline-block;">Usage</span>
  </td>
  <td style="border-left:solid #BAC5E3;">
    <span style="color:#4E8F4A">
        <b>ALLOWED-WITH-REVIEW</b>
    </span>
    <div style="font-size:90%; font-style:italic; padding:5px;display:inline-block;">
      (this CWE ID could be used to map to real-world vulnerabilities in limited situations requiring careful review)
    </div>
  </td>
</tr>


                        <tr>
                                    
                                        
                                        
                                            <td valign="top"><span class="subheading">Reason</span></td>
                                            <td style="border-left:solid #BAC5E3;">
                                            
                                                
                                                    Frequent Misuse
                                                
                                            
                                            </td>
                                        
                                    
                        </tr>
                        <tr>
                            <td>
                              <p class="subheading"> Rationale </p>
			    </td>
			    <td style="border-left:solid #BAC5E3;">
                                There are some indications that this CWE ID might be misused and selected simply because it mentions &#34;buffer overflow&#34; - an increasingly vague term. This CWE entry is only appropriate for &#34;Buffer Copy&#34; operations (not buffer reads), in which where there is no &#34;Checking [the] Size of Input&#34;, and (by implication of the copy) writing past the end of the buffer.
                            </td>
                        </tr>
                        <tr>
                            <td>
                              <p class="subheading"> Comments </p>
			    </td>
			    <td style="border-left:solid #BAC5E3;">
			      If the vulnerability being analyzed involves out-of-bounds reads, then consider <a href="/data/definitions/125.html">CWE-125</a> or descendants. For root cause analysis: if there is any input validation, consider children of <a href="/data/definitions/20.html">CWE-20</a> such as <a href="/data/definitions/1284.html">CWE-1284</a>. If there is a calculation error for buffer sizes, consider <a href="/data/definitions/131.html">CWE-131</a> or similar.
                            </td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    
<div id="Notes">
    <div class="heading" id="Notes_120"><span><a href="javascript:toggleblocksOC('120_Notes');"><img id="ocimg_120_Notes"
                    src="/images/head_more.gif" border="0" alt="+"></a> </span>Notes</div>
    <div name="oc_120_Notes" id="oc_120_Notes" class="expandblock">
        <div class="detail">
            <div class="indent">
            
                
                
                    
                                      
                        <div class="Relationship_Note" style="border-bottom:solid #BAC5E3;">
                            <p class="subheading">Relationship</p>   
                            <div class="indent">
                                At the code level, stack-based and heap-based overflows do not differ significantly, so there usually is not a need to distinguish them. From the attacker perspective, they can be quite different, since different techniques are required to exploit them.
                            </div>
                        </div>                     
                    
                
                    
                                      
                        <div class="Terminology_Note" style="border-bottom:solid #BAC5E3;">
                            <p class="subheading">Terminology</p>   
                            <div class="indent">
                                There is significant inconsistency
		   regarding the &#34;buffer overflow&#34; term, which can have
		   multiple interpretations and uses. Many people mean
		   &#34;writing past the end of a buffer.&#34;  Others mean &#34;writing
		   past the end of a buffer, or before the beginning of a
		   buffer.&#34;  Still others might include &#34;read&#34; in the term.
                            </div>
                        </div>                     
                    
                
                    
                    
                
                    
                    
                
                    
                    
                
                    
                                      
                        <div class="Other_Note" style="border-bottom:solid #BAC5E3;">
                            <p class="subheading">Other</p>   
                            <div class="indent">
                                A buffer overflow condition exists when a product attempts to put more data in a buffer than it can hold, or when it attempts to put data in a memory area outside of the boundaries of a buffer. The simplest type of error, and the most common cause of buffer overflows, is the &#34;classic&#34; case in which the product copies the buffer without restricting how much data is copied. Other variants exist, but the existence of a classic overflow strongly suggests that the programmer is not considering even the most basic of security protections.
                            </div>
                        </div>                     
                    
                
                    
                    
                        
            
            </div>
        </div>
    </div>
</div>

    

    
    <div id="Taxonomy_Mappings">
    <div class="heading" id="Taxonomy_Mappings_120"><span><a href="javascript:toggleblocksOC('120_Taxonomy_Mappings');"><img
                    id="ocimg_120_Taxonomy_Mappings" src="/images/head_more.gif" border="0" alt="+"></a> </span>Taxonomy
        Mappings</div>
    <div name="oc_120_Taxonomy_Mappings" id="oc_120_Taxonomy_Mappings" class="expandblock">
        <div class="tabledetail">
            <div id="EntryStripedTable" class="indent">
                <div style="margin-top: 10px">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                        <tr>
                            <th valign="top" nowrap width="230px">Mapped Taxonomy Name</th>
                            <th valign="top" nowrap width="100px">Node ID</th>
                            <th valign="top" nowrap>Fit</th>
                            <th valign="top">Mapped Node Name</th>
                        </tr>
                        
                            
                            <tr>
                                <td valign="top">PLOVER</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Unbounded Transfer (&#39;classic overflow&#39;)</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">7 Pernicious Kingdoms</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Buffer Overflow</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">CLASP</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Buffer overflow</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">OWASP Top Ten 2004</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">A1</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">CWE More Specific</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Unvalidated Input</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">OWASP Top Ten 2004</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">A5</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">CWE More Specific</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Buffer Overflows</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">CERT C Secure Coding</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">STR31-C</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Exact</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Guarantee that storage for strings has sufficient space for character data and the null terminator</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">WASC</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">7</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Buffer Overflow</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">Software Fault Patterns</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">SFP8</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Faulty Buffer Access</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">OMG ASCSM</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">ASCSM-CWE-120</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                            </tr>
                            
                            <tr>
                                <td valign="top">OMG ASCRM</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">ASCRM-CWE-120</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                            </tr>
                            
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    


<div id="Related_Attack_Patterns">
    <div class="heading" id="Related_Attack_Patterns_120"><span><a href="javascript:toggleblocksOC('120_Related_Attack_Patterns');"><img
                    id="ocimg_120_Related_Attack_Patterns" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Related Attack Patterns</div>
    <div name="oc_120_Related_Attack_Patterns" id="oc_120_Related_Attack_Patterns" class="expandblock">
        <div class="tabledetail">
            <div id="EntryStripedTable" class="indent">
                <div style="margin-top: 10px">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                        <tr>
                            <th valign="top" nowrap width="110px">CAPEC-ID</th>
                            <th valign="top">Attack Pattern Name</th>
                        </tr>
                        
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/10.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-10</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Buffer Overflow via Environment Variables</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/100.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-100</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Overflow Buffers</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/14.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-14</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Client-side Injection-induced Buffer Overflow</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/24.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-24</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Filter Failure through Buffer Overflow</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/42.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-42</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">MIME Conversion</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/44.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-44</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Overflow Binary Resource File</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/45.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-45</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Buffer Overflow via Symbolic Links</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/46.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-46</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Overflow Variables and Tags</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/47.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-47</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Buffer Overflow via Parameter Expansion</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/67.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-67</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">String Format Overflow in syslog()</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/8.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-8</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Buffer Overflow in an API Call</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/9.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-9</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Buffer Overflow in Local Command-Line Utilities</td>
                            </tr>
                            
                            <tr>
                                <td valign="top"><a href="http://capec.mitre.org/data/definitions/92.html" target="_blank"
                                        rel="noopener noreferrer">CAPEC-92</a></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Forced Integer Overflow</td>
                            </tr>
                            
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    


<div id="References">
    <div class="heading" id="References_120"><span><a href="javascript:toggleblocksOC('120_References');"><img
                    id="ocimg_120_References" src="/images/head_more.gif" border="0" alt="+"></a> </span>References</div>
    <div name="oc_120_References" id="oc_120_References" class="expandblock">
        <div class="detail">
            <div id="EntryStripedTable" class="indent">
                <div id="Grouped">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-7_120">
					      <td valign="top" class="nowrap">[REF-7]</td>
					      <td style="border-left:solid #BAC5E3;">
						Michael Howard and David LeBlanc. <i>&#34;Writing Secure Code&#34;.</i> Chapter 5, &#34;Public Enemy #1: The Buffer Overrun&#34; Page 127. 2nd Edition.  Microsoft Press. 2002-12-04.
                                            
                                                <br/>&lt;<a href="https://www.microsoftpressstore.com/store/writing-secure-code-9780735617223" target="_blank" rel="noopener noreferrer">https://www.microsoftpressstore.com/store/writing-secure-code-9780735617223</a>&gt;.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-44_120">
					      <td valign="top" class="nowrap">[REF-44]</td>
					      <td style="border-left:solid #BAC5E3;">
						Michael Howard, David LeBlanc and John Viega. <i>&#34;24 Deadly Sins of Software Security&#34;.</i> &#34;Sin 5: Buffer Overruns.&#34; Page 89.  McGraw-Hill.  2010.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-56_120">
					      <td valign="top" class="nowrap">[REF-56]</td>
					      <td style="border-left:solid #BAC5E3;">
						Microsoft. <i>&#34;Using the Strsafe.h Functions&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://learn.microsoft.com/en-us/windows/win32/menurc/strsafe-ovw?redirectedfrom=MSDN" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/en-us/windows/win32/menurc/strsafe-ovw?redirectedfrom=MSDN</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-57_120">
					      <td valign="top" class="nowrap">[REF-57]</td>
					      <td style="border-left:solid #BAC5E3;">
						Matt Messier and John Viega. <i>&#34;Safe C String Library v1.0.3&#34;.</i>     
                                            
                                                <br/>&lt;<a href="http://www.gnu-darwin.org/www001/ports-1.5a-CURRENT/devel/safestr/work/safestr-1.0.3/doc/safestr.html" target="_blank" rel="noopener noreferrer">http://www.gnu-darwin.org/www001/ports-1.5a-CURRENT/devel/safestr/work/safestr-1.0.3/doc/safestr.html</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-58_120">
					      <td valign="top" class="nowrap">[REF-58]</td>
					      <td style="border-left:solid #BAC5E3;">
						Michael Howard. <i>&#34;Address Space Layout Randomization in Windows Vista&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://learn.microsoft.com/en-us/archive/blogs/michael_howard/address-space-layout-randomization-in-windows-vista" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/en-us/archive/blogs/michael_howard/address-space-layout-randomization-in-windows-vista</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-59_120">
					      <td valign="top" class="nowrap">[REF-59]</td>
					      <td style="border-left:solid #BAC5E3;">
						Arjan van de Ven. <i>&#34;Limiting buffer overflows with ExecShield&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://archive.is/saAFo" target="_blank" rel="noopener noreferrer">https://archive.is/saAFo</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-60_120">
					      <td valign="top" class="nowrap">[REF-60]</td>
					      <td style="border-left:solid #BAC5E3;">
						 <i>&#34;PaX&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://en.wikipedia.org/wiki/Executable_space_protection#PaX" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Executable_space_protection#PaX</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-74_120">
					      <td valign="top" class="nowrap">[REF-74]</td>
					      <td style="border-left:solid #BAC5E3;">
						Jason Lam. <i>&#34;Top 25 Series - Rank 3 - Classic Buffer Overflow&#34;.</i>    SANS Software Security Institute. 2010-03-02.
                                            
                                                <br/>&lt;<a href="https://www.sans.org/blog/top-25-series-rank-3-classic-buffer-overflow" target="_blank" rel="noopener noreferrer">https://www.sans.org/blog/top-25-series-rank-3-classic-buffer-overflow</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2025-07-29</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-61_120">
					      <td valign="top" class="nowrap">[REF-61]</td>
					      <td style="border-left:solid #BAC5E3;">
						Microsoft. <i>&#34;Understanding DEP as a mitigation technology part 1&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://msrc.microsoft.com/blog/2009/06/understanding-dep-as-a-mitigation-technology-part-1/" target="_blank" rel="noopener noreferrer">https://msrc.microsoft.com/blog/2009/06/understanding-dep-as-a-mitigation-technology-part-1/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-76_120">
					      <td valign="top" class="nowrap">[REF-76]</td>
					      <td style="border-left:solid #BAC5E3;">
						Sean Barnum and Michael Gegick. <i>&#34;Least Privilege&#34;.</i>     2005-09-14.
                                            
                                                <br/>&lt;<a href="https://web.archive.org/web/20211209014121/https://www.cisa.gov/uscert/bsi/articles/knowledge/principles/least-privilege" target="_blank" rel="noopener noreferrer">https://web.archive.org/web/20211209014121/https://www.cisa.gov/uscert/bsi/articles/knowledge/principles/least-privilege</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-62_120">
					      <td valign="top" class="nowrap">[REF-62]</td>
					      <td style="border-left:solid #BAC5E3;">
						Mark Dowd, John McDonald and Justin Schuh. <i>&#34;The Art of Software Security Assessment&#34;.</i> Chapter 3, &#34;Nonexecutable Stack&#34;, Page 76. 1st Edition.  Addison Wesley. 2006.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-62_120">
					      <td valign="top" class="nowrap">[REF-62]</td>
					      <td style="border-left:solid #BAC5E3;">
						Mark Dowd, John McDonald and Justin Schuh. <i>&#34;The Art of Software Security Assessment&#34;.</i> Chapter 5, &#34;Protection Mechanisms&#34;, Page 189. 1st Edition.  Addison Wesley. 2006.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-62_120">
					      <td valign="top" class="nowrap">[REF-62]</td>
					      <td style="border-left:solid #BAC5E3;">
						Mark Dowd, John McDonald and Justin Schuh. <i>&#34;The Art of Software Security Assessment&#34;.</i> Chapter 8, &#34;C String Handling&#34;, Page 388. 1st Edition.  Addison Wesley. 2006.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-64_120">
					      <td valign="top" class="nowrap">[REF-64]</td>
					      <td style="border-left:solid #BAC5E3;">
						Grant Murphy. <i>&#34;Position Independent Executables (PIE)&#34;.</i>    Red Hat. 2012-11-28.
                                            
                                                <br/>&lt;<a href="https://www.redhat.com/en/blog/position-independent-executables-pie" target="_blank" rel="noopener noreferrer">https://www.redhat.com/en/blog/position-independent-executables-pie</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-961_120">
					      <td valign="top" class="nowrap">[REF-961]</td>
					      <td style="border-left:solid #BAC5E3;">
						Object Management Group (OMG). <i>&#34;Automated Source Code Reliability Measure (ASCRM)&#34;.</i> ASCRM-CWE-120.    2016-01.
                                            
                                                <br/>&lt;<a href="http://www.omg.org/spec/ASCRM/1.0/" target="_blank" rel="noopener noreferrer">http://www.omg.org/spec/ASCRM/1.0/</a>&gt;.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-962_120">
					      <td valign="top" class="nowrap">[REF-962]</td>
					      <td style="border-left:solid #BAC5E3;">
						Object Management Group (OMG). <i>&#34;Automated Source Code Security Measure (ASCSM)&#34;.</i> ASCSM-CWE-120.    2016-01.
                                            
                                                <br/>&lt;<a href="http://www.omg.org/spec/ASCSM/1.0/" target="_blank" rel="noopener noreferrer">http://www.omg.org/spec/ASCSM/1.0/</a>&gt;.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1332_120">
					      <td valign="top" class="nowrap">[REF-1332]</td>
					      <td style="border-left:solid #BAC5E3;">
						John Richard Moser. <i>&#34;Prelink and address space randomization&#34;.</i>     2006-07-05.
                                            
                                                <br/>&lt;<a href="https://lwn.net/Articles/190139/" target="_blank" rel="noopener noreferrer">https://lwn.net/Articles/190139/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1333_120">
					      <td valign="top" class="nowrap">[REF-1333]</td>
					      <td style="border-left:solid #BAC5E3;">
						Dmitry Evtyushkin, Dmitry Ponomarev, Nael Abu-Ghazaleh. <i>&#34;Jump Over ASLR: Attacking Branch Predictors to Bypass ASLR&#34;.</i>     2016.
                                            
                                                <br/>&lt;<a href="http://www.cs.ucr.edu/~nael/pubs/micro16.pdf" target="_blank" rel="noopener noreferrer">http://www.cs.ucr.edu/~nael/pubs/micro16.pdf</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1334_120">
					      <td valign="top" class="nowrap">[REF-1334]</td>
					      <td style="border-left:solid #BAC5E3;">
						D3FEND. <i>&#34;Stack Frame Canary Validation (D3-SFCV)&#34;.</i>     2023.
                                            
                                                <br/>&lt;<a href="https://d3fend.mitre.org/technique/d3f:StackFrameCanaryValidation/" target="_blank" rel="noopener noreferrer">https://d3fend.mitre.org/technique/d3f:StackFrameCanaryValidation/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1335_120">
					      <td valign="top" class="nowrap">[REF-1335]</td>
					      <td style="border-left:solid #BAC5E3;">
						D3FEND. <i>&#34;Segment Address Offset Randomization (D3-SAOR)&#34;.</i>     2023.
                                            
                                                <br/>&lt;<a href="https://d3fend.mitre.org/technique/d3f:SegmentAddressOffsetRandomization/" target="_blank" rel="noopener noreferrer">https://d3fend.mitre.org/technique/d3f:SegmentAddressOffsetRandomization/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1336_120">
					      <td valign="top" class="nowrap">[REF-1336]</td>
					      <td style="border-left:solid #BAC5E3;">
						D3FEND. <i>&#34;Process Segment Execution Prevention (D3-PSEP)&#34;.</i>     2023.
                                            
                                                <br/>&lt;<a href="https://d3fend.mitre.org/technique/d3f:ProcessSegmentExecutionPrevention/" target="_blank" rel="noopener noreferrer">https://d3fend.mitre.org/technique/d3f:ProcessSegmentExecutionPrevention/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1337_120">
					      <td valign="top" class="nowrap">[REF-1337]</td>
					      <td style="border-left:solid #BAC5E3;">
						Alexander Sotirov and Mark Dowd. <i>&#34;Bypassing Browser Memory Protections: Setting back browser security by 10 years&#34;.</i> Memory information leaks.    2008.
                                            
                                                <br/>&lt;<a href="https://www.blackhat.com/presentations/bh-usa-08/Sotirov_Dowd/bh08-sotirov-dowd.pdf" target="_blank" rel="noopener noreferrer">https://www.blackhat.com/presentations/bh-usa-08/Sotirov_Dowd/bh08-sotirov-dowd.pdf</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1479_120">
					      <td valign="top" class="nowrap">[REF-1479]</td>
					      <td style="border-left:solid #BAC5E3;">
						Gregory Larsen, E. Kenneth Hong Fong, David A. Wheeler and Rama S. Moorthy. <i>&#34;State-of-the-Art Resources (SOAR) for Software Vulnerability Detection, Test, and Evaluation&#34;.</i>     2014-07.
                                            
                                                <br/>&lt;<a href="https://www.ida.org/-/media/feature/publications/s/st/stateoftheart-resources-soar-for-software-vulnerability-detection-test-and-evaluation/p-5061.ashx" target="_blank" rel="noopener noreferrer">https://www.ida.org/-/media/feature/publications/s/st/stateoftheart-resources-soar-for-software-vulnerability-detection-test-and-evaluation/p-5061.ashx</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2025-09-05</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-1518_120">
					      <td valign="top" class="nowrap">[REF-1518]</td>
					      <td style="border-left:solid #BAC5E3;">
						 <i>&#34;AddressSanitizer&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://clang.llvm.org/docs/AddressSanitizer.html" target="_blank" rel="noopener noreferrer">https://clang.llvm.org/docs/AddressSanitizer.html</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2025-12-10</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    <div id="Content_History">
    <div class="heading" id="Content_History_120"><span><a href="javascript:toggleblocksOC('120_Content_History');"><img
                    id="ocimg_120_Content_History" src="/images/head_more.gif" border="0" alt="+"></a> </span>Content
        History</div>
    <div name="oc_120_Content_History" id="oc_120_Content_History" class="expandblock">
        <div class="tabledetail">
            <div class="indent">
                <div style="margin-top: 10px">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                        <thead class="Submissions">
                            <tr>
                                <th valign="top" colspan="3" class="title"><span><a
                                            href="javascript:toggleblocksOC('120_Submissions');"><img
                                                id="ocimg_120_Submissions" src="/images/head_more.gif" border="0"
                                                alt="+"></a> </span>Submissions</th>
                            </tr>
                        </thead>
                        <tbody id="oc_120_Submissions" class="expandblock">
                            <tr>
                                <th valign="top" style="width:200px;">Submission Date</th>
                                <th valign="top" nowrap>Submitter</th>
                                <th valign="top" nowrap>Organization</th>
                            </tr>
                            <tr>
                                <td valign="top" nowrap rowspan="2" style="border-bottom:1px solid #BAC5E3">
                                    2006-07-19
                                    
                                        <br><span class="smaller" style="font-style:italic">(CWE Draft 3, 2006-07-19)</span>
                                    
                                    </td>
                                <td valign="top">PLOVER</td>
                                <td valign="top"></td>
                            </tr>    
                            <tr>
                                <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee">
                                    <span class="smaller"><i></i></span>
                                </td>
                            </tr>
                        </tbody>
                        
                        
                            <thead class="Modifications">
                                <tr>
                                    <th valign="top" colspan="3" class="title"><span><a
                                                href="javascript:toggleblocksOC('120_Modifications');"><img
                                                    id="ocimg_120_Modifications" src="/images/head_less.gif" border="0"
                                                    alt="+"></a> </span>Modifications</th>
                                </tr>
                            </thead>
                            <tbody id="oc_120_Modifications" class="collapseblock">
                                <tr>
                                    <th valign="top">Modification Date</th>
                                    <th valign="top" nowrap>Modifier</th>
                                    <th valign="top" nowrap>Organization</th>
                                </tr>
                                
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2026-01-21
                                            
                                            <br><span class="smaller" style="font-style:italic">(CWE 4.19.1, 2026-01-21)</span>
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2025-12-11
                                            
                                            <br><span class="smaller" style="font-style:italic">(CWE 4.19, 2025-12-11)</span>
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Applicable_Platforms, Detection_Factors, References, Terminology_Notes</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2025-09-09
                                            
                                            <br><span class="smaller" style="font-style:italic">(CWE 4.18, 2025-09-09)</span>
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Description, Detection_Factors, Diagram, Other_Notes, References</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2025-04-03
                                            
                                            <br><span class="smaller" style="font-style:italic">(CWE 4.17, 2025-04-03)</span>
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Applicable_Platforms, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2023-06-29
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Mapping_Notes</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2023-04-27
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Potential_Mitigations, References, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2023-01-31
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Common_Consequences, Description</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2022-10-13
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated References</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2021-07-20
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Potential_Mitigations</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2021-03-15
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Demonstrative_Examples</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2020-12-10
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Demonstrative_Examples, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2020-08-20
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Alternate_Terms, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2020-06-25
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Common_Consequences, Potential_Mitigations</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2020-02-24
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Potential_Mitigations, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2019-06-20
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2019-01-03
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated References, Relationships, Taxonomy_Mappings</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2018-03-27
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated References</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2017-11-08
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Applicable_Platforms, Causal_Nature, Demonstrative_Examples, Likelihood_of_Exploit, References, Relationships, Taxonomy_Mappings, White_Box_Definitions</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2014-07-30
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Detection_Factors, Relationships, Taxonomy_Mappings</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2014-02-18
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Potential_Mitigations, References</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2012-10-30
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Potential_Mitigations</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2012-05-11
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated References, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2011-09-13
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Potential_Mitigations, References, Relationships, Taxonomy_Mappings</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2011-06-27
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2011-06-01
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Common_Consequences</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2011-03-29
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Demonstrative_Examples, Description</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2010-12-13
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Potential_Mitigations</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2010-09-27
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Potential_Mitigations</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2010-06-21
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Common_Consequences, Potential_Mitigations, References</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2010-04-05
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Demonstrative_Examples, Related_Attack_Patterns</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2010-02-16
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Applicable_Platforms, Common_Consequences, Demonstrative_Examples, Detection_Factors, Potential_Mitigations, References, Related_Attack_Patterns, Relationships, Taxonomy_Mappings, Time_of_Introduction, Type</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2009-10-29
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Common_Consequences, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2009-07-27
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Other_Notes, Potential_Mitigations, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2009-01-12
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Common_Consequences, Other_Notes, Potential_Mitigations, References, Relationship_Notes, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2008-11-24
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Other_Notes, Relationships, Taxonomy_Mappings</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2008-10-14
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Alternate_Terms, Description, Name, Other_Notes, Terminology_Notes</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2008-10-10
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>Changed name and description to more clearly emphasize the "classic" nature of the overflow.</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2008-09-08
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Alternate_Terms, Applicable_Platforms, Common_Consequences, Relationships, Observed_Example, Other_Notes, Taxonomy_Mappings, Weakness_Ordinalities</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2008-08-15
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;"></td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">Veracode</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>Suggested OWASP Top Ten 2004 mapping</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2008-08-01
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;"></td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">KDM Analytics</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>added/updated white box definitions</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2008-07-01
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">Eric Dalci</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">Cigital</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Time_of_Introduction</i></span>
                                        </td>
                                    </tr>
                                    
                                
                            </tbody>
                        
                        
                            <thead class="Previous_Entry_Names">
                                <tr>
                                    <th valign="top" colspan="3" class="title"><span><a
                                                href="javascript:toggleblocksOC('120_Previous_Entry_Names');"><img
                                                    id="ocimg_120_Previous_Entry_Names" src="/images/head_less.gif"
                                                    border="0" alt="+"></a> </span>Previous Entry Names</th>
                                </tr>
                            </thead>
                            
                            <tbody id="oc_120_Previous_Entry_Names" class="collapseblock">
                                <tr>
                                    <th valign="top" nowrap>Change Date</th>
                                    <th valign="top" nowrap colspan="3">Previous Entry Name</th>
                                </tr>
                                <tr>
                                    <td valign="top" nowrap style="border-top:solid #BAC5E3;">2008-10-14
                                        
                                    </td>
                                    <td valign="top" colspan="2" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">Unbounded Transfer (&#39;Classic Buffer Overflow&#39;)</td>
                                </tr>
                            </tbody>
                            
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

</div>

<!-- End main content -->
	<div id="More_Message_Custom" style="display:none;">
<div style="padding:15px 0px 0px 0px;color:#ff0000;font-size:95%;font-weight:bold;text-align:center;" >More information is available &mdash; Please edit the custom filter or select a different filter.</div></div>

	</td>
	<!-- end content pane -->
  </tr>
</table>
<div id="FootPane" class="noprint">
  <div id="footbar">
    <b>Page Last Updated: </b>


January 21, 2026
  </div>
  <div class="Footer noprint">
  <a name="footer" id="footer"></a>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" class="ltgreybackground" style="clear:both">
      <tr>
        <td colspan="3" id="line"><div class="line">&nbsp;</div></td>
      </tr>
      <tr>
        <td valign="middle" nowrap="nowrap">
          <div id="footerlinks" class="footlogo">
            <a href="http://www.mitre.org" target="_blank" rel="noopener noreferrer"><img src="/images/mitre_logo.gif" height="36" border="0" alt="MITRE" title="MITRE"/></a>
          </div>
        </td>
        <td width="100%" valign="top" style="padding:6px 0px;">
          <div id="footerlinks">
            <a href="/sitemap.html">Site Map</a> | 
            <a href="/about/termsofuse.html">Terms of Use</a> | 
            <a href="#" onclick="Osano.cm.showDrawer('osano-cm-dom-info-dialog-open')">Manage Cookies</a> | 
            <a href="/about/cookie_notice.html">Cookie Notice</a> | 
            <a href="/about/privacy_policy.html">Privacy Policy</a> | 
            <a href="mailto:cwe@mitre.org">Contact Us</a> | 
            <a target="_blank" href="https://x.com/CweCapec"><img src="/images/x-logo-black.png" width="18" height="18" style="border:0;vertical-align:right;" alt="CWE on X" title="CWE on X"></a>
            <a target="_blank" href="https://www.linkedin.com/showcase/cve-cwe-capec"><img src="/images/linkedin_sm.jpg" width="20" height="20" style="border:0;vertical-align:right;" alt="CWE on LinkedIn" title="CWE on LinkedIn"></a>
            <a target="_blank" href="https://bsky.app/profile/cweprogram.bsky.social"><img src="/images/bluesky_logo_sm.png" width="18" height="18" style="border:0;vertical-align:right;" alt="CWE on Bluesky" title="Bluesky"></a>
            <a target="_blank" href="https://mastodon.social/@CWE_Program"><img src="/images/mastodon-logo.png" width="20" height="20" style="border:0;vertical-align:right;" alt="CWE on Mastodon" title="CWE on Mastodon"></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCpY9VIpRmFK4ebD6orssifA"><img src="/images/youtube.png" width="20" height="20" style="border:0;vertical-align:right;" alt="CWE YouTube channel" title="CWE YouTube Channel"></a> 
            <a href="/news/podcast.html"><img src="/images/out_of_bounds_read_logo.png" width="22" height="22" style="border:0;vertical-align:right;" alt="CWE Out-of-Bounds-Read Podcast" title="CWE Out-of-Bounds-Read Podcast"></a>       
			      <a target="_blank" href="https://medium.com/@CWE_CAPEC"><img src="/images/medium.png" width="20" height="20" style="border:0;vertical-align:right;" alt="CWE Blog on Medium blog" title="CWE Blog on Medium"></a>   
          </div>
          <p>Use of the Common Weakness Enumeration (CWE&trade;) and the associated references from this website are subject to the <a href="/about/termsofuse.html">Terms of Use</a>. CWE is sponsored by the <a target="_blank" rel="noopener noreferrer" href="https://www.dhs.gov/">U.S. Department of Homeland Security</a> (DHS) <a target="_blank" rel="noopener noreferrer" href="https://www.dhs.gov/cisa/cybersecurity-division">Cybersecurity and Infrastructure Security Agency</a> (CISA) and managed by the <a href="https://www.dhs.gov/science-and-technology/hssedi" target="_blank" rel="noopener noreferrer">Homeland Security Systems Engineering and Development Institute</a> (HSSEDI) which is operated by <a target="_blank" rel="noopener noreferrer" href="http://www.mitre.org/">The MITRE Corporation</a> (MITRE). Copyright &copy; 2006&ndash;2026, The MITRE Corporation. CWE, CWSS, CWRAF, and the CWE logo are trademarks of The MITRE Corporation.</p>
        </td>
        <td valign="middle" nowrap="nowrap">
          <div id="footerlinks" class="footlogo">
            <a href="https://www.dhs.gov/science-and-technology/hssedi" target="_blank" rel="noopener noreferrer"><img src="/images/hssedi.png" height="36" border="0" alt="HSSEDI" title="HSSEDI"/></a>
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TCLW30GNGV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TCLW30GNGV');
</script>

</body>
</html>


    
    
    


</html>
