

















    



    
        


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

    CWE-787: Out-of-bounds Write (4.19.1)
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

    CWE-787: Out-of-bounds Write (4.19.1)
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
<a xmlns:xhtml="http://www.w3.org/1999/xhtml" name="787"></a>
<div style="overflow:auto;">
        <h2 style="display:inline; margin:0px 0px 2px 0px; vertical-align: text-bottom">CWE-787: Out-of-bounds Write</h2>
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
                                Weakness ID: 787
                                
                            </div><span>

                            
                                <span style="font-weight:bold">
                                    <a href="#Vulnerability_Mapping_Notes_787">Vulnerability Mapping</a>:<span class="tool">
                                        <span style="color:#4E8F4A">ALLOWED</span>
                                        <span class="tip">This CWE ID may be used to map to real-world vulnerabilities</span>
                                    </span>
                                    
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
    <div class="heading" id="Description_787">
        <span>
            <a href="javascript:toggleblocksOC('787_Description');">
                <img id="ocimg_787_Description" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Description
    </div>
    <div name="oc_787_Description" id="oc_787_Description" class="expandblock">
        <div class="detail">
            <div class="indent"><table>
                <tbody>
                    <tr>
                        <td style="width:40%">The product writes data past the end, or before the beginning, of the intended buffer.</td>
                        <td style="width:60%">
                            <a class="cweimg" href="/data/images/CWE-787-Diagram.png" target="_blank" rel="noopener noreferrer">
                                <img src="/data/images/CWE-787-Diagram.png" alt="Diagram for CWE-787">
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table></div>
        </div>
    </div>
</div>

    

    

    
    
<div id="Alternate_Terms">
    <div class="heading" id="Alternate_Terms_787">
        <span>
            <a href="javascript:toggleblocksOC('787_Alternate_Terms');">
                <img id="ocimg_787_Alternate_Terms" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Alternate Terms
    </div>
    <div name="oc_787_Alternate_Terms" id="oc_787_Alternate_Terms" class="expandblock">
        <div class="detail">
            <div id="EntryStripedTable" class="indent">
                <div id="Grouped">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                            
                                
                                <tr>
                                    <td valign="top" width="25%" class="subheading">
                                        Memory Corruption
                                    </td>
                                    <td valign="top" width="75%" style="border-left:solid #BAC5E3;">
                                        <div>Often used to describe the consequences of writing to memory outside the bounds of a buffer, or to memory that is otherwise invalid.</div> 
                                    </td>  
                                </tr>
                                
                                                  
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    
<div id="Common_Consequences">
    <div class="heading" id="Common_Consequences_787"><span><a href="javascript:toggleblocksOC('787_Common_Consequences');"><img
                    id="ocimg_787_Common_Consequences" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Common Consequences</div>
    <div name="oc_787_Common_Consequences" id="oc_787_Common_Consequences" class="expandblock">
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
                            
                            
                            <span class="suboptheading">Scope: Integrity</span>
                            
                            <p/>
                            
                            <div style="padding-top:5px; padding-bottom:10px">Write operations could cause memory corruption. In some cases, an adversary can modify control data such as return addresses in order to execute unexpected code.</div>    
                        </td>
                        </tr>
                        
                        <tr>
                        <td valign="middle" class="subheading">
                                    <p class="smaller" style="font-weight:normal">
                                        
                                        
                                        <span class="subheading"><i>DoS: Crash, Exit, or Restart</i></span>
                                        
                                    </p>
                        </td>
                        <td valign="middle">
                            
                            
                            <span class="suboptheading">Scope: Availability</span>
                            
                            <p/>
                            
                            <div style="padding-top:5px; padding-bottom:10px">Attempting to access out-of-range, invalid, or unauthorized memory could cause the product to crash.</div>    
                        </td>
                        </tr>
                        
                        <tr>
                        <td valign="middle" class="subheading">
                                    <p class="smaller" style="font-weight:normal">
                                        
                                        
                                        <span class="subheading"><i>Unexpected State</i></span>
                                        
                                    </p>
                        </td>
                        <td valign="middle">
                            
                            
                            <span class="suboptheading">Scope: Other</span>
                            
                            <p/>
                            
                            <div style="padding-top:5px; padding-bottom:10px">Subsequent write operations can produce undefined or unexpected results.</div>    
                        </td>
                        </tr>
                        
                                   
                </table>
            </div>
        </div>
    </div>
</div>

    

    
    
<div id="Potential_Mitigations">
    <div class="heading" id="Potential_Mitigations_787"><span><a href="javascript:toggleblocksOC('787_Potential_Mitigations');"><img
                    id="ocimg_787_Potential_Mitigations" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Potential Mitigations</div>
    <div name="oc_787_Potential_Mitigations" id="oc_787_Potential_Mitigations" class="expandblock">
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
                  <p>Examples include the Safe C String Library (SafeStr) by Messier and Viega [<a href="#REF-57_787">REF-57</a>], and the Strsafe.h library from Microsoft [<a href="#REF-56_787">REF-56</a>]. These libraries provide safer versions of overflow-prone string-handling functions.</p>
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
		<p> D3-SFCV (Stack Frame Canary Validation) from D3FEND [<a href="#REF-1334_787">REF-1334</a>] discusses canary-based detection in detail. </p> 

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
                        <li>Double check that the buffer is as large as specified.</li>
                        <li>When using functions that accept a number of bytes to copy, such as strncpy(), be aware that if the destination buffer size is equal to the source buffer size, it may not NULL-terminate the string.</li>
                        <li>Check buffer boundaries if accessing the buffer in a loop and make sure there is no danger of writing past the allocated space.</li>
                        <li>If necessary, truncate all input strings to a reasonable length before passing them to the copy and concatenation functions.</li>
                     </ul>
               </div>
                                        
                                        
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
		 <p> Examples include Address Space Layout Randomization (ASLR) [<a href="#REF-58_787">REF-58</a>] [<a href="#REF-60_787">REF-60</a>] and Position-Independent Executables (PIE) [<a href="#REF-64_787">REF-64</a>]. Imported modules may be similarly realigned if their default memory addresses conflict with other modules, in a process known as &#34;rebasing&#34; (for Windows) and &#34;prelinking&#34; (for Linux) [<a href="#REF-1332_787">REF-1332</a>] using randomly generated addresses. ASLR for libraries cannot be used in conjunction with prelink since it would require relocating the libraries at run-time, defeating the whole purpose of prelinking. </p> 
		 <p> For more information on these techniques see D3-SAOR (Segment Address Offset Randomization) from D3FEND [<a href="#REF-1335_787">REF-1335</a>]. </p>
	       </div>
                                        
                                            <div>
                                                <p class="suboptheading">Effectiveness: Defense in Depth</p>
                                            </div>
                                        
                                        
                                            <div style="padding-top:5px; padding-bottom:5px;"><b><span class="smaller">Note: </span></b>
                                            <span class="smaller">These techniques do not provide a complete solution.  For instance, exploits frequently use a bug that discloses memory addresses in order to maximize reliability of code execution [<a href="#REF-1337_787">REF-1337</a>]. It has also been shown that a side-channel attack can bypass ASLR [<a href="#REF-1333_787">REF-1333</a>].</span>
                                        
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
		 <p> Use a CPU and operating system that offers Data Execution Protection (using hardware NX or XD bits) or the equivalent techniques that simulate this feature in software, such as PaX [<a href="#REF-60_787">REF-60</a>] [<a href="#REF-61_787">REF-61</a>]. These techniques ensure that any instruction executed is exclusively at a memory address that is part of the code segment.  </p> 
	         <p> For more information on these techniques see D3-PSEP (Process Segment Execution Prevention) from D3FEND [<a href="#REF-1336_787">REF-1336</a>]. </p>
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
                            
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
        
        
    

    
        






    
        
    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
        
    
    
    

    
        
    
    
    

    
        
    
    
    

    
    
    

    
    
    

    
        
    
    
    

    
    
    


<div id="Relationships">
    <div class="heading" id="Relationships_787">
        <span>
            <a href="javascript:toggleblocksOC('787_Relationships');"><img id="ocimg_787_Relationships" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>
        Relationships
    </div>
    <div name="oc_787_Relationships" id="oc_787_Relationships" class="expandblock"> 
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
                            <span><a href="javascript:toggleblocksOC('787_1000_relevant_table');">
                                <img id="ocimg_787_1000_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "Research Concepts" (View-1000)
                            <div name="oc_787_1000_relevant_table" id="oc_787_1000_relevant_table" class="expandblock">
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
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ParentOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/base.gif" alt="Base" class="icon">
                                                                <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/120.html" target="_blank" rel="noopener noreferrer">120</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Buffer Copy without Checking Size of Input (&#39;Classic Buffer Overflow&#39;)</a>
                                                            
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
                                                            <a href="/data/definitions/121.html" target="_blank" rel="noopener noreferrer">121</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Stack-based Buffer Overflow</a>
                                                            
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
                                                            <a href="/data/definitions/122.html" target="_blank" rel="noopener noreferrer">122</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Heap-based Buffer Overflow</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ParentOf</td> 
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
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ParentOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/base.gif" alt="Base" class="icon">
                                                                <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/124.html" target="_blank" rel="noopener noreferrer">124</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Buffer Underwrite (&#39;Buffer Underflow&#39;)</a>
                                                            
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
                                                            <a href="/data/definitions/822.html" target="_blank" rel="noopener noreferrer">822</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Untrusted Pointer Dereference</a>
                                                            
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
                                                            <a href="/data/definitions/823.html" target="_blank" rel="noopener noreferrer">823</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Use of Out-of-range Pointer Offset</a>
                                                            
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
                                                            <a href="/data/definitions/824.html" target="_blank" rel="noopener noreferrer">824</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Access of Uninitialized Pointer</a>
                                                            
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
                                                            <a href="/data/definitions/825.html" target="_blank" rel="noopener noreferrer">825</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Expired Pointer Dereference</a>
                                                            
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
                            <span><a href="javascript:toggleblocksOC('787_699_relevant_table');">
                                <img id="ocimg_787_699_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "Software Development" (View-699)
                            <div name="oc_787_699_relevant_table" id="oc_787_699_relevant_table" class="expandblock">
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
                            <span><a href="javascript:toggleblocksOC('787_1003_relevant_table');">
                                <img id="ocimg_787_1003_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "Weaknesses for Simplified Mapping of Published Vulnerabilities" (View-1003)
                            <div name="oc_787_1003_relevant_table" id="oc_787_1003_relevant_table" class="expandblock">
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
                            <span><a href="javascript:toggleblocksOC('787_1305_relevant_table');">
                                <img id="ocimg_787_1305_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "CISQ Quality Measures (2020)" (View-1305)
                            <div name="oc_787_1305_relevant_table" id="oc_787_1305_relevant_table" class="expandblock">
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
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ParentOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/base.gif" alt="Base" class="icon">
                                                                <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/120.html" target="_blank" rel="noopener noreferrer">120</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Buffer Copy without Checking Size of Input (&#39;Classic Buffer Overflow&#39;)</a>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ParentOf</td> 
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
                            <span><a href="javascript:toggleblocksOC('787_1340_relevant_table');">
                                <img id="ocimg_787_1340_relevant_table" src="/images/head_more.gif" border="0" alt="+"></a>
                            </span>Relevant to the view "CISQ Data Protection Measures" (View-1340)
                            <div name="oc_787_1340_relevant_table" id="oc_787_1340_relevant_table" class="expandblock">
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
                                                    
                                                    
                                                    
                                                        
                                                             
                                                    <tr class="primary Weakness">
                                                        <td valign="top">ParentOf</td> 
                                                        <td valign="top" nowrap class="right" align="center" style="padding-top:1px">
                                                            <span class="tool"><img
                                                                    src="/images/icons/base.gif" alt="Base" class="icon">
                                                                <span class="tip">Base - a weakness that is still mostly independent of a resource or technology, but with sufficient details to provide specific methods for detection and prevention. Base level weaknesses typically describe issues in terms of 2 or 3 of the following dimensions: behavior, property, technology, language, and resource.</span>
                                                            </span>
                                                        </td>
                                                        <td valign="top">
                                                            <a href="/data/definitions/120.html" target="_blank" rel="noopener noreferrer">120</a>
                                                        </td>
                                                        <td valign="top">
                                                            
                                                            Buffer Copy without Checking Size of Input (&#39;Classic Buffer Overflow&#39;)</a>
                                                            
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
    <div class="heading" id="Modes_Of_Introduction_787"><span><a href="javascript:toggleblocksOC('787_Modes_Of_Introduction');"><img
                    id="ocimg_787_Modes_Of_Introduction" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Modes
        Of Introduction</div>
    <div name="oc_787_Modes_Of_Introduction" id="oc_787_Modes_Of_Introduction" class="expandblock">
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
    <div class="heading" id="Applicable_Platforms_787"><span><a href="javascript:toggleblocksOC('787_Applicable_Platforms');"><img
                    id="ocimg_787_Applicable_Platforms" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Applicable Platforms</div>
    <div name="oc_787_Applicable_Platforms" id="oc_787_Applicable_Platforms" class="expandblock">
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
                                    
                                    
                                    <span class="smaller" style="font-style:italic">(Often Prevalent)</span>
                                    
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
                
                
            
                
                    <tr><td valign="top" nowrap class="subheading">Technologies</td>
                      <td style="border-left:solid #BAC5E3;">
                    
                        <div>
                            <p>  Class: ICS/OT
                                
                                
                                <span class="smaller" style="font-style:italic">(Often Prevalent)</span>
                                
                            </p>
                        </div>
                    
		  </td></tr>
                
                </table>
            </div>
        </div>
    </div>
</div>

    

    
    <div id="Likelihood_Of_Exploit">
    <div class="heading" id="Likelihood_Of_Exploit_787">
        <span>
            <a href="javascript:toggleblocksOC('787_Likelihood_Of_Exploit');"><img id="ocimg_787_Likelihood_Of_Exploit" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Likelihood Of Exploit
    </div>
    <div name="oc_787_Likelihood_Of_Exploit" id="oc_787_Likelihood_Of_Exploit" class="expandblock">
        <div class="detail">
            <div class="indent">High</div>
        </div>
    </div>
</div>

    

    
    

<div id="Demonstrative_Examples">
    <div class="heading" id="Demonstrative_Examples_787"><span><a href="javascript:toggleblocksOC('787_Demonstrative_Examples');"><img
                    id="ocimg_787_Demonstrative_Examples" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Demonstrative Examples</div>
    <div name="oc_787_Demonstrative_Examples" id="oc_787_Demonstrative_Examples" class="expandblock">
        <div class="detail">
            <div class="indent">
            
                <p class="subheading">Example 1</p>
                <br/>
                
                <p>The following code attempts to save four different identification numbers into an array.</p>
                
                
                
                
                
                
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
                                
                  <div>int id_sequence[3];<br/>
                     <br/>/* Populate the id array. */<br/>
                     <br/>id_sequence[0] = 123;<br/>id_sequence[1] = 234;<br/>id_sequence[2] = 345;<br/>id_sequence[3] = 456;</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>Since the array is only allocated to hold three elements, the valid indices are 0 to 2; so, the assignment to id_sequence[3] is out of bounds.</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
                <p class="subheading">Example 2</p>
                <br/>
                
                <p>In the following code, it is possible to request that memcpy move a much larger segment of memory than assumed:</p>
                
                
                
                
                
                
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
                                
                  <div>int returnChunkSize(void *) {<div style="margin-left:1em;">
                        <div>
                           <br/>
                           <i>/* if chunk info is valid, return the size of usable memory,</i>
                           <br/>
                           <br/>
                           <i>* else, return -1 to indicate an error</i>
                           <br/>
                           <br/>
                           <i>*/</i>
                           <br/>...</div>
                     </div>}<br/>int main() {<div style="margin-left:1em;">...<br/>memcpy(destBuf, srcBuf, (returnChunkSize(destBuf)-1));<br/>...</div>}</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>If returnChunkSize() happens to encounter an error it will return -1. Notice that the return value is not checked before the memcpy operation (<a href="/data/definitions/252.html">CWE-252</a>), so -1 can be passed as the size argument to memcpy() (<a href="/data/definitions/805.html">CWE-805</a>). Because memcpy() assumes that the value is unsigned, it will be interpreted as MAXINT-1 (<a href="/data/definitions/195.html">CWE-195</a>), and therefore will copy far more memory than is likely available to the destination buffer (<a href="/data/definitions/787.html">CWE-787</a>, <a href="/data/definitions/788.html">CWE-788</a>).</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
                <p class="subheading">Example 3</p>
                <br/>
                
                <p>This code takes an IP address from the user and verifies that it is well formed. It then looks up the hostname and copies it into a buffer.</p>
                
                
                
                
                
                
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
                                
                  <div>void host_lookup(char *user_supplied_addr){<div style="margin-left:1em;">
                        <div>struct hostent *hp;<br/>in_addr_t *addr;<br/>char hostname[64];<br/>in_addr_t inet_addr(const char *cp);<br/>
                           <br/>
                           <i>/*routine that ensures user_supplied_addr is in the right format for conversion */</i>
                           <br/>
                           <br/>validate_addr_form(user_supplied_addr);<br/>addr = inet_addr(user_supplied_addr);<br/>hp = gethostbyaddr( addr, sizeof(struct in_addr), AF_INET);<br/>strcpy(hostname, hp-&gt;h_name);</div>
                     </div>}</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>This function allocates a buffer of 64 bytes to store the hostname. However, there is no guarantee that the hostname will not be larger than 64 bytes. If an attacker specifies an address which resolves to a very large hostname, then the function may overwrite sensitive data or even relinquish control flow to the attacker.</p> 
                
                
                
                
                <p>Note that this example also contains an unchecked return value (<a href="/data/definitions/252.html">CWE-252</a>) that can lead to a NULL pointer dereference (<a href="/data/definitions/476.html">CWE-476</a>).</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
                <p class="subheading">Example 4</p>
                <br/>
                
                <p>This code applies an encoding procedure to an input string and stores it into a buffer.</p>
                
                
                
                
                
                
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
                                
                  <div>char * copy_input(char *user_supplied_string){<div style="margin-left:1em;">
                        <div>int i, dst_index;<br/>char *dst_buf = (char*)malloc(4*sizeof(char) * MAX_SIZE);<br/>if ( MAX_SIZE &lt;= strlen(user_supplied_string) ){<div style="margin-left:1em;">die(&#34;user string too long, die evil hacker!&#34;);</div>}<br/>dst_index = 0;<br/>for ( i = 0; i &lt; strlen(user_supplied_string); i++ ){<div style="margin-left:1em;">
                              <div>if( &#39;&amp;&#39; == user_supplied_string[i] ){<div style="margin-left:1em;">dst_buf[dst_index++] = &#39;&amp;&#39;;<br/>dst_buf[dst_index++] = &#39;a&#39;;<br/>dst_buf[dst_index++] = &#39;m&#39;;<br/>dst_buf[dst_index++] = &#39;p&#39;;<br/>dst_buf[dst_index++] = &#39;;&#39;;</div>}<br/>else if (&#39;&lt;&#39; == user_supplied_string[i] ){<div style="margin-left:1em;">
                                    <div>
                                       <br/>
                                       <i>/* encode to &amp;lt; */</i>
                                       <br/>
                                    </div>
                                 </div>}<br/>else dst_buf[dst_index++] = user_supplied_string[i];</div>
                           </div>}<br/>return dst_buf;</div>
                     </div>}</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>The programmer attempts to encode the ampersand character in the user-controlled string. However, the length of the string is validated before the encoding procedure is applied. Furthermore, the programmer assumes encoding expansion will only expand a given character by a factor of 4, while the encoding of the ampersand expands by 5. As a result, when the encoding procedure expands the string it is possible to overflow the destination buffer if the attacker provides a string of many ampersands.</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
                <p class="subheading">Example 5</p>
                <br/>
                
                <p>In the following C/C++ code, a utility function is used to trim trailing whitespace from a character string. The function copies the input string to a local character string and uses a while statement to remove the trailing whitespace by moving backward through the string and overwriting whitespace with a NUL character.</p>
                
                
                
                
                
                
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
                                
                  <div>char* trimTrailingWhitespace(char *strMessage, int length) {<div style="margin-left:1em;">
                        <div>char *retMessage;<br/>char *message = malloc(sizeof(char)*(length+1));<br/>
                           <br/>
                           <i>// copy input string to a temporary string</i>
                           <br/>char message[length+1];<br/>int index;<br/>for (index = 0; index &lt; length; index++) {<div style="margin-left:1em;">message[index] = strMessage[index];</div>}<br/>message[index] = &#39;\0&#39;;<br/>
                           <br/>
                           <i>// trim trailing whitespace</i>
                           <br/>int len = index-1;<br/>while (isspace(message[len])) {<div style="margin-left:1em;">message[len] = &#39;\0&#39;;<br/>len--;</div>}<br/>
                           <br/>
                           <i>// return string without trailing whitespace</i>
                           <br/>retMessage = message;<br/>return retMessage;</div>
                     </div>}</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>However, this function can cause a buffer underwrite if the input character string contains all whitespace. On some systems the while statement will move backwards past the beginning of a character string and will call the isspace() function on an address outside of the bounds of the local buffer.</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
                <p class="subheading">Example 6</p>
                <br/>
                
                <p>The following code allocates memory for a maximum number of widgets. It then gets a user-specified number of widgets, making sure that the user does not request too many. It then initializes the elements of the array using InitializeWidget(). Because the number of widgets can vary for each request, the code inserts a NULL pointer to signify the location of the last widget.</p>
                
                
                
                
                
                
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
                                
                  <div>int i;<br/>unsigned int numWidgets;<br/>Widget **WidgetList;<br/>
                     <br/>numWidgets = GetUntrustedSizeValue();<br/>if ((numWidgets == 0) || (numWidgets &gt; MAX_NUM_WIDGETS)) {<div style="margin-left:1em;">ExitError(&#34;Incorrect number of widgets requested!&#34;);</div>}<br/>WidgetList = (Widget **)malloc(numWidgets * sizeof(Widget *));<br/>printf(&#34;WidgetList ptr=%p\n&#34;, WidgetList);<br/>for(i=0; i&lt;numWidgets; i++) {<div style="margin-left:1em;">WidgetList[i] = InitializeWidget();</div>}<br/>WidgetList[numWidgets] = NULL;<br/>showWidgets(WidgetList);</div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>However, this code contains an off-by-one calculation error (<a href="/data/definitions/193.html">CWE-193</a>). It allocates exactly enough space to contain the specified number of widgets, but it does not include the space for the NULL pointer. As a result, the allocated buffer is smaller than it is supposed to be (<a href="/data/definitions/131.html">CWE-131</a>). So if the user ever requests MAX_NUM_WIDGETS, there is an out-of-bounds write (<a href="/data/definitions/787.html">CWE-787</a>) when the NULL is assigned. Depending on the environment and compilation settings, this could cause memory corruption.</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
                <p class="subheading">Example 7</p>
                <br/>
                
                <p>The following is an example of code that may result in a buffer underwrite. This code is attempting to replace the substring &#34;Replace Me&#34; in destBuf with the string stored in srcBuf. It does so by using the function strstr(), which returns a pointer to the found substring in destBuf.  Using pointer arithmetic, the starting index of the substring is found.</p>
                
                
                
                
                
                
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
                                
                  <div>int main() {
                     <div style="margin-left:1em;">...<br/>
                     char *result = strstr(destBuf, &#34;Replace Me&#34;);<br/>
                     int idx = result - destBuf;<br/>
                     strcpy(&amp;destBuf[idx], srcBuf);<br/>
                     ...</div>}
                  </div>
               
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <p>In the case where the substring is not found in destBuf, strstr() will return NULL, causing the pointer arithmetic to be undefined, potentially setting the value of idx to a negative number.  If idx is negative, this will result in a buffer underwrite of destBuf.</p> 
                
                
                <br/>
                <p style="border-bottom:solid #BAC5E3; margin-bottom:10px"></p>
                <br/>
            
            </div>
        </div>
    </div>
</div>

    

    
    
<div id="Observed_Examples">
    <div class="heading" id="Observed_Examples_787"><span><a href="javascript:toggleblocksOC('787_Observed_Examples');"><img
                    id="ocimg_787_Observed_Examples" src="/images/head_more.gif" border="0" alt="+"></a> </span>Selected Observed
        Examples</div>
    <div name="oc_787_Observed_Examples" id="oc_787_Observed_Examples" class="expandblock">
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
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2025-27363" target="_blank" rel="noopener noreferrer">CVE-2025-27363</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Font rendering library does not properly
               handle assigning a signed short value to an unsigned
               long (<a href="/data/definitions/195.html">CWE-195</a>), leading to an integer wraparound
               (<a href="/data/definitions/190.html">CWE-190</a>), causing too small of a buffer (<a href="/data/definitions/131.html">CWE-131</a>),
               leading to an out-of-bounds write
               (<a href="/data/definitions/787.html">CWE-787</a>).</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2023-1017" target="_blank" rel="noopener noreferrer">CVE-2023-1017</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>The reference implementation code for a Trusted Platform Module does not implement length checks on data, allowing for an attacker to write 2 bytes past the end of a buffer.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2021-21220" target="_blank" rel="noopener noreferrer">CVE-2021-21220</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Chain: insufficient input validation (<a href="/data/definitions/20.html">CWE-20</a>) in browser allows heap corruption (<a href="/data/definitions/787.html">CWE-787</a>), as exploited in the wild per CISA KEV.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2021-28664" target="_blank" rel="noopener noreferrer">CVE-2021-28664</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>GPU kernel driver allows memory corruption because a user can obtain read/write access to read-only pages, as exploited in the wild per CISA KEV.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2020-17087" target="_blank" rel="noopener noreferrer">CVE-2020-17087</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Chain: integer truncation (<a href="/data/definitions/197.html">CWE-197</a>) causes small buffer allocation (<a href="/data/definitions/131.html">CWE-131</a>) leading to out-of-bounds write (<a href="/data/definitions/787.html">CWE-787</a>) in kernel pool, as exploited in the wild per CISA KEV.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2020-1054" target="_blank" rel="noopener noreferrer">CVE-2020-1054</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Out-of-bounds write in kernel-mode driver, as exploited in the wild per CISA KEV.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2020-0041" target="_blank" rel="noopener noreferrer">CVE-2020-0041</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Escape from browser sandbox using out-of-bounds write due to incorrect bounds check, as exploited in the wild per CISA KEV.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2020-0968" target="_blank" rel="noopener noreferrer">CVE-2020-0968</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Memory corruption in web browser scripting engine, as exploited in the wild per CISA KEV.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2020-0022" target="_blank" rel="noopener noreferrer">CVE-2020-0022</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>chain: mobile phone Bluetooth implementation does not include offset when calculating packet length (<a href="/data/definitions/682.html">CWE-682</a>), leading to out-of-bounds write (<a href="/data/definitions/787.html">CWE-787</a>)</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2019-1010006" target="_blank" rel="noopener noreferrer">CVE-2019-1010006</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Chain: compiler optimization (<a href="/data/definitions/733.html">CWE-733</a>) removes or modifies code used to detect integer overflow (<a href="/data/definitions/190.html">CWE-190</a>), allowing out-of-bounds write (<a href="/data/definitions/787.html">CWE-787</a>).</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2009-1532" target="_blank" rel="noopener noreferrer">CVE-2009-1532</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>malformed inputs cause accesses of uninitialized or previously-deleted objects, leading to memory corruption</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2009-0269" target="_blank" rel="noopener noreferrer">CVE-2009-0269</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>chain: -1 value from a function call was intended to indicate an error, but is used as an array index instead.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2002-2227" target="_blank" rel="noopener noreferrer">CVE-2002-2227</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Unchecked length of SSLv2 challenge value leads to buffer underflow.</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2007-4580" target="_blank" rel="noopener noreferrer">CVE-2007-4580</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Buffer underflow from a small size value with a large buffer (length parameter inconsistency, <a href="/data/definitions/130.html">CWE-130</a>)</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2007-4268" target="_blank" rel="noopener noreferrer">CVE-2007-4268</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Chain: integer signedness error (<a href="/data/definitions/195.html">CWE-195</a>) passes signed comparison, leading to heap overflow (<a href="/data/definitions/122.html">CWE-122</a>)</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2009-2550" target="_blank" rel="noopener noreferrer">CVE-2009-2550</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Classic stack-based buffer overflow in media player using a long entry in a playlist</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3;" class="nowrap">
                                    <div>
                                        
                                        <a href="https://www.cve.org/CVERecord?id=CVE-2009-2403" target="_blank" rel="noopener noreferrer">CVE-2009-2403</a>
                                        
                                    </div>
                                </td>
                                <td valign="middle" style="padding-bottom:10px; border-width: 1px; border-bottom:solid #BAC5E3; border-left:solid #BAC5E3;">
                                    <div>Heap-based buffer overflow in media player using a long entry in a playlist</div>
                                </td>
                            </tr>
                            
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    <div id="Weakness_Ordinalities">
    <div class="heading" id="Weakness_Ordinalities_787"><span><a href="javascript:toggleblocksOC('787_Weakness_Ordinalities');"><img
                    id="ocimg_787_Weakness_Ordinalities" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Weakness Ordinalities</div>
    <div name="oc_787_Weakness_Ordinalities" id="oc_787_Weakness_Ordinalities" class="expandblock">
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
                                    <div class="indent">At the point when the product writes data to an invalid location, it is likely that a separate weakness already occurred earlier. For example, the product might alter an index, perform incorrect pointer arithmetic, initialize or release memory incorrectly, etc., thus referencing a memory location outside the buffer.</div>
                                </td>     
                            </tr>
                         
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    
    
<div id="Detection_Methods">
    <div class="heading" id="Detection_Methods_787"><span><a href="javascript:toggleblocksOC('787_Detection_Methods');"><img
                    id="ocimg_787_Detection_Methods" src="/images/head_more.gif" border="0" alt="+"></a> </span>Detection
        Methods</div>
    <div name="oc_787_Detection_Methods" id="oc_787_Detection_Methods" class="expandblock">
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
                                    <p class="subheading">Automated Dynamic Analysis</p>
                                </td>
				<td valign="top" style="border-left:solid #BAC5E3;">
                                  <div style="p + p { text-indent:3em; }; padding-top:10px; padding-bottom:10px;">
                                    Use tools that are integrated during
	      compilation to insert runtime error-checking mechanisms
	      related to memory safety errors, such as AddressSanitizer
	      (ASan) for C/C++ [<a href="#REF-1518_787">REF-1518</a>].
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
                            
                        
                    </table>
            </div>
        </div>
    </div>
</div>

    

    
    <div id="Functional_Areas">
    <div class="heading" id="Functional_Areas_787"><span><a href="javascript:toggleblocksOC('787_Functional_Areas');"><img
                    id="ocimg_787_Functional_Areas" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Functional Areas</div>
    <div name="oc_787_Functional_Areas" id="oc_787_Functional_Areas" class="expandblock">
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
    <div class="heading" id="Affected_Resources_787"><span><a href="javascript:toggleblocksOC('787_Affected_Resources');"><img
                    id="ocimg_787_Affected_Resources" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Affected Resources</div>
    <div name="oc_787_Affected_Resources" id="oc_787_Affected_Resources" class="expandblock">
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
    <div class="heading" id="Memberships_787"><span><a href="javascript:toggleblocksOC('787_Memberships');"><img
                    id="ocimg_787_Memberships" src="/images/head_more.gif" border="0" alt="+"></a> </span>Memberships
    </div>
    <div name="oc_787_Memberships" id="oc_787_Memberships" class="expandblock">
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
                            
                                
                                
                                          
                                         
                                <tr class="primary View">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/view.gif" alt="View"  class="icon"><span
                                                class="tip">View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries).</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1200.html" target="_blank" rel="noopener noreferrer">1200</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      Weaknesses in the 2019 CWE Top 25 Most Dangerous Software Errors
                                    </td>
                                </tr>
                            
                                
                                
                                          
                                         
                                <tr class="primary View">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/view.gif" alt="View"  class="icon"><span
                                                class="tip">View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries).</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1337.html" target="_blank" rel="noopener noreferrer">1337</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      Weaknesses in the 2021 CWE Top 25 Most Dangerous Software Weaknesses
                                    </td>
                                </tr>
                            
                                
                                
                                          
                                         
                                <tr class="primary View">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/view.gif" alt="View"  class="icon"><span
                                                class="tip">View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries).</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1350.html" target="_blank" rel="noopener noreferrer">1350</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      Weaknesses in the 2020 CWE Top 25 Most Dangerous Software Weaknesses
                                    </td>
                                </tr>
                            
                                
                                
                                    
                                         
                                <tr class="primary Category">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/category.gif" alt="Category"  class="icon"><span
                                                class="tip">Category - a CWE entry that contains a set of other entries that share a common characteristic.</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1366.html" target="_blank" rel="noopener noreferrer">1366</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      ICS Communications: Frail Security in Protocols
                                    </td>
                                </tr>
                            
                                
                                
                                          
                                         
                                <tr class="primary View">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/view.gif" alt="View"  class="icon"><span
                                                class="tip">View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries).</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1387.html" target="_blank" rel="noopener noreferrer">1387</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      Weaknesses in the 2022 CWE Top 25 Most Dangerous Software Weaknesses
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
                                        
                                        <a href="/data/definitions/1425.html" target="_blank" rel="noopener noreferrer">1425</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      Weaknesses in the 2023 CWE Top 25 Most Dangerous Software Weaknesses
                                    </td>
                                </tr>
                            
                                
                                
                                          
                                         
                                <tr class="primary View">
                                    <td valign="top">MemberOf</td>
                                    <td valign="top" nowrap class="right" align="center" style="padding-top:5px; border-left:solid #BAC5E3;"><span
                                            class="tool"><img src="/images/icons/view.gif" alt="View"  class="icon"><span
                                                class="tip">View - a subset of CWE entries that provides a way of examining CWE content. The two main view structures are Slices (flat lists) and Graphs (containing relationships between entries).</span></span></td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
                                        
                                        <a href="/data/definitions/1430.html" target="_blank" rel="noopener noreferrer">1430</a>
                                        
				    </td>
                                    <td valign="top" style="padding-top:5px; border-left:solid #BAC5E3;">
				      Weaknesses in the 2024 CWE Top 25 Most Dangerous Software Weaknesses
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
    <div class="heading" id="Vulnerability_Mapping_Notes_787"><span><a href="javascript:toggleblocksOC('787_Vulnerability_Mapping_Notes');"><img
                    id="ocimg_787_Vulnerability_Mapping_Notes" src="/images/head_more.gif" border="0" alt="+"></a>
        </span>Vulnerability Mapping Notes</div>
    <div name="oc_787_Vulnerability_Mapping_Notes" id="oc_787_Vulnerability_Mapping_Notes" class="expandblock">
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
        <b>ALLOWED</b>
    </span>
    <div style="font-size:90%; font-style:italic; padding:5px;display:inline-block;">
      (this CWE ID may be used to map to real-world vulnerabilities)
    </div>
  </td>
</tr>


                        <tr>
                                    
                                        
                                        
                                            <td valign="top"><span class="subheading">Reason</span></td>
                                            <td style="border-left:solid #BAC5E3;">
                                            
                                                
                                                    Acceptable-Use
                                                
                                            
                                            </td>
                                        
                                    
                        </tr>
                        <tr>
                            <td>
                              <p class="subheading"> Rationale </p>
			    </td>
			    <td style="border-left:solid #BAC5E3;">
                                This CWE entry is at the Base level of abstraction, which is a preferred level of abstraction for mapping to the root causes of vulnerabilities.
                            </td>
                        </tr>
                        <tr>
                            <td>
                              <p class="subheading"> Comments </p>
			    </td>
			    <td style="border-left:solid #BAC5E3;">
			      Carefully read both the name and description to ensure that this mapping is an appropriate fit. Do not try to &#39;force&#39; a mapping to a lower-level Base/Variant simply to comply with this preferred level of abstraction.
                            </td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    

    
    <div id="Taxonomy_Mappings">
    <div class="heading" id="Taxonomy_Mappings_787"><span><a href="javascript:toggleblocksOC('787_Taxonomy_Mappings');"><img
                    id="ocimg_787_Taxonomy_Mappings" src="/images/head_more.gif" border="0" alt="+"></a> </span>Taxonomy
        Mappings</div>
    <div name="oc_787_Taxonomy_Mappings" id="oc_787_Taxonomy_Mappings" class="expandblock">
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
                                <td valign="top">ISA/IEC 62443</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Part 3-3</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Req SR 3.5</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">ISA/IEC 62443</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Part 4-1</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Req SI-1</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">ISA/IEC 62443</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Part 4-1</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Req SI-2</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">ISA/IEC 62443</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Part 4-1</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Req SVV-1</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">ISA/IEC 62443</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Part 4-1</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Req SVV-3</td>
                            </tr>
                            
                            <tr>
                                <td valign="top">ISA/IEC 62443</td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Part 4-2</td>
                                <td valign="top" style="border-left:solid #BAC5E3;"></td>
                                <td valign="top" style="border-left:solid #BAC5E3;">Req CR 3.5</td>
                            </tr>
                            
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

    

    

    
    


<div id="References">
    <div class="heading" id="References_787"><span><a href="javascript:toggleblocksOC('787_References');"><img
                    id="ocimg_787_References" src="/images/head_more.gif" border="0" alt="+"></a> </span>References</div>
    <div name="oc_787_References" id="oc_787_References" class="expandblock">
        <div class="detail">
            <div id="EntryStripedTable" class="indent">
                <div id="Grouped">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1029_787">
					      <td valign="top" class="nowrap">[REF-1029]</td>
					      <td style="border-left:solid #BAC5E3;">
						Aleph One. <i>&#34;Smashing The Stack For Fun And Profit&#34;.</i>   Phrack.  1996-11-08.
                                            
                                                <br/>&lt;<a href="https://phrack.org/issues/49/14.html" target="_blank" rel="noopener noreferrer">https://phrack.org/issues/49/14.html</a>&gt;.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-7_787">
					      <td valign="top" class="nowrap">[REF-7]</td>
					      <td style="border-left:solid #BAC5E3;">
						Michael Howard and David LeBlanc. <i>&#34;Writing Secure Code&#34;.</i> Chapter 5, &#34;Stack Overruns&#34; Page 129. 2nd Edition.  Microsoft Press. 2002-12-04.
                                            
                                                <br/>&lt;<a href="https://www.microsoftpressstore.com/store/writing-secure-code-9780735617223" target="_blank" rel="noopener noreferrer">https://www.microsoftpressstore.com/store/writing-secure-code-9780735617223</a>&gt;.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-7_787">
					      <td valign="top" class="nowrap">[REF-7]</td>
					      <td style="border-left:solid #BAC5E3;">
						Michael Howard and David LeBlanc. <i>&#34;Writing Secure Code&#34;.</i> Chapter 5, &#34;Heap Overruns&#34; Page 138. 2nd Edition.  Microsoft Press. 2002-12-04.
                                            
                                                <br/>&lt;<a href="https://www.microsoftpressstore.com/store/writing-secure-code-9780735617223" target="_blank" rel="noopener noreferrer">https://www.microsoftpressstore.com/store/writing-secure-code-9780735617223</a>&gt;.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-44_787">
					      <td valign="top" class="nowrap">[REF-44]</td>
					      <td style="border-left:solid #BAC5E3;">
						Michael Howard, David LeBlanc and John Viega. <i>&#34;24 Deadly Sins of Software Security&#34;.</i> &#34;Sin 5: Buffer Overruns.&#34; Page 89.  McGraw-Hill.  2010.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-62_787">
					      <td valign="top" class="nowrap">[REF-62]</td>
					      <td style="border-left:solid #BAC5E3;">
						Mark Dowd, John McDonald and Justin Schuh. <i>&#34;The Art of Software Security Assessment&#34;.</i> Chapter 3, &#34;Nonexecutable Stack&#34;, Page 76. 1st Edition.  Addison Wesley. 2006.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-62_787">
					      <td valign="top" class="nowrap">[REF-62]</td>
					      <td style="border-left:solid #BAC5E3;">
						Mark Dowd, John McDonald and Justin Schuh. <i>&#34;The Art of Software Security Assessment&#34;.</i> Chapter 5, &#34;Protection Mechanisms&#34;, Page 189. 1st Edition.  Addison Wesley. 2006.
                                            
                                            
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-90_787">
					      <td valign="top" class="nowrap">[REF-90]</td>
					      <td style="border-left:solid #BAC5E3;">
						 <i>&#34;Buffer UNDERFLOWS: What do you know about it?&#34;.</i>   Vuln-Dev Mailing List.  2004-01-10.
                                            
                                                <br/>&lt;<a href="https://seclists.org/vuln-dev/2004/Jan/22" target="_blank" rel="noopener noreferrer">https://seclists.org/vuln-dev/2004/Jan/22</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-56_787">
					      <td valign="top" class="nowrap">[REF-56]</td>
					      <td style="border-left:solid #BAC5E3;">
						Microsoft. <i>&#34;Using the Strsafe.h Functions&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://learn.microsoft.com/en-us/windows/win32/menurc/strsafe-ovw?redirectedfrom=MSDN" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/en-us/windows/win32/menurc/strsafe-ovw?redirectedfrom=MSDN</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-57_787">
					      <td valign="top" class="nowrap">[REF-57]</td>
					      <td style="border-left:solid #BAC5E3;">
						Matt Messier and John Viega. <i>&#34;Safe C String Library v1.0.3&#34;.</i>     
                                            
                                                <br/>&lt;<a href="http://www.gnu-darwin.org/www001/ports-1.5a-CURRENT/devel/safestr/work/safestr-1.0.3/doc/safestr.html" target="_blank" rel="noopener noreferrer">http://www.gnu-darwin.org/www001/ports-1.5a-CURRENT/devel/safestr/work/safestr-1.0.3/doc/safestr.html</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-58_787">
					      <td valign="top" class="nowrap">[REF-58]</td>
					      <td style="border-left:solid #BAC5E3;">
						Michael Howard. <i>&#34;Address Space Layout Randomization in Windows Vista&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://learn.microsoft.com/en-us/archive/blogs/michael_howard/address-space-layout-randomization-in-windows-vista" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/en-us/archive/blogs/michael_howard/address-space-layout-randomization-in-windows-vista</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-60_787">
					      <td valign="top" class="nowrap">[REF-60]</td>
					      <td style="border-left:solid #BAC5E3;">
						 <i>&#34;PaX&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://en.wikipedia.org/wiki/Executable_space_protection#PaX" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Executable_space_protection#PaX</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-61_787">
					      <td valign="top" class="nowrap">[REF-61]</td>
					      <td style="border-left:solid #BAC5E3;">
						Microsoft. <i>&#34;Understanding DEP as a mitigation technology part 1&#34;.</i>     
                                            
                                                <br/>&lt;<a href="https://msrc.microsoft.com/blog/2009/06/understanding-dep-as-a-mitigation-technology-part-1/" target="_blank" rel="noopener noreferrer">https://msrc.microsoft.com/blog/2009/06/understanding-dep-as-a-mitigation-technology-part-1/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-64_787">
					      <td valign="top" class="nowrap">[REF-64]</td>
					      <td style="border-left:solid #BAC5E3;">
						Grant Murphy. <i>&#34;Position Independent Executables (PIE)&#34;.</i>    Red Hat. 2012-11-28.
                                            
                                                <br/>&lt;<a href="https://www.redhat.com/en/blog/position-independent-executables-pie" target="_blank" rel="noopener noreferrer">https://www.redhat.com/en/blog/position-independent-executables-pie</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-07</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1332_787">
					      <td valign="top" class="nowrap">[REF-1332]</td>
					      <td style="border-left:solid #BAC5E3;">
						John Richard Moser. <i>&#34;Prelink and address space randomization&#34;.</i>     2006-07-05.
                                            
                                                <br/>&lt;<a href="https://lwn.net/Articles/190139/" target="_blank" rel="noopener noreferrer">https://lwn.net/Articles/190139/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1333_787">
					      <td valign="top" class="nowrap">[REF-1333]</td>
					      <td style="border-left:solid #BAC5E3;">
						Dmitry Evtyushkin, Dmitry Ponomarev, Nael Abu-Ghazaleh. <i>&#34;Jump Over ASLR: Attacking Branch Predictors to Bypass ASLR&#34;.</i>     2016.
                                            
                                                <br/>&lt;<a href="http://www.cs.ucr.edu/~nael/pubs/micro16.pdf" target="_blank" rel="noopener noreferrer">http://www.cs.ucr.edu/~nael/pubs/micro16.pdf</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1334_787">
					      <td valign="top" class="nowrap">[REF-1334]</td>
					      <td style="border-left:solid #BAC5E3;">
						D3FEND. <i>&#34;Stack Frame Canary Validation (D3-SFCV)&#34;.</i>     2023.
                                            
                                                <br/>&lt;<a href="https://d3fend.mitre.org/technique/d3f:StackFrameCanaryValidation/" target="_blank" rel="noopener noreferrer">https://d3fend.mitre.org/technique/d3f:StackFrameCanaryValidation/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1335_787">
					      <td valign="top" class="nowrap">[REF-1335]</td>
					      <td style="border-left:solid #BAC5E3;">
						D3FEND. <i>&#34;Segment Address Offset Randomization (D3-SAOR)&#34;.</i>     2023.
                                            
                                                <br/>&lt;<a href="https://d3fend.mitre.org/technique/d3f:SegmentAddressOffsetRandomization/" target="_blank" rel="noopener noreferrer">https://d3fend.mitre.org/technique/d3f:SegmentAddressOffsetRandomization/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1336_787">
					      <td valign="top" class="nowrap">[REF-1336]</td>
					      <td style="border-left:solid #BAC5E3;">
						D3FEND. <i>&#34;Process Segment Execution Prevention (D3-PSEP)&#34;.</i>     2023.
                                            
                                                <br/>&lt;<a href="https://d3fend.mitre.org/technique/d3f:ProcessSegmentExecutionPrevention/" target="_blank" rel="noopener noreferrer">https://d3fend.mitre.org/technique/d3f:ProcessSegmentExecutionPrevention/</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1337_787">
					      <td valign="top" class="nowrap">[REF-1337]</td>
					      <td style="border-left:solid #BAC5E3;">
						Alexander Sotirov and Mark Dowd. <i>&#34;Bypassing Browser Memory Protections: Setting back browser security by 10 years&#34;.</i> Memory information leaks.    2008.
                                            
                                                <br/>&lt;<a href="https://www.blackhat.com/presentations/bh-usa-08/Sotirov_Dowd/bh08-sotirov-dowd.pdf" target="_blank" rel="noopener noreferrer">https://www.blackhat.com/presentations/bh-usa-08/Sotirov_Dowd/bh08-sotirov-dowd.pdf</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2023-04-26</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                                
                                                    
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                                
                                            
                                            <div id="REF-1477_787">
					      <td valign="top" class="nowrap">[REF-1477]</td>
					      <td style="border-left:solid #BAC5E3;">
						Cybersecurity and Infrastructure Security Agency. <i>&#34;Secure by Design Alert: Eliminating Buffer Overflow Vulnerabilities&#34;.</i>     2025-02-12.
                                            
                                                <br/>&lt;<a href="https://www.cisa.gov/resources-tools/resources/secure-design-alert-eliminating-buffer-overflow-vulnerabilities" target="_blank" rel="noopener noreferrer">https://www.cisa.gov/resources-tools/resources/secure-design-alert-eliminating-buffer-overflow-vulnerabilities</a>&gt;.
                                            
                                            
                                                (<i>URL validated: 2025-07-18</i>)
						
					      </td>
                                            </div>
                                    </tr>
                                
                            
                        
                            
                                
                                
                                
                                
                                    <tr>
                                            
                                            
                                            
                                            
                                                
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <div id="REF-1518_787">
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
    <div class="heading" id="Content_History_787"><span><a href="javascript:toggleblocksOC('787_Content_History');"><img
                    id="ocimg_787_Content_History" src="/images/head_more.gif" border="0" alt="+"></a> </span>Content
        History</div>
    <div name="oc_787_Content_History" id="oc_787_Content_History" class="expandblock">
        <div class="tabledetail">
            <div class="indent">
                <div style="margin-top: 10px">
                    <table width="98%" cellpadding="0" cellspacing="0" border="0" class="Detail">
                        <thead class="Submissions">
                            <tr>
                                <th valign="top" colspan="3" class="title"><span><a
                                            href="javascript:toggleblocksOC('787_Submissions');"><img
                                                id="ocimg_787_Submissions" src="/images/head_more.gif" border="0"
                                                alt="+"></a> </span>Submissions</th>
                            </tr>
                        </thead>
                        <tbody id="oc_787_Submissions" class="expandblock">
                            <tr>
                                <th valign="top" style="width:200px;">Submission Date</th>
                                <th valign="top" nowrap>Submitter</th>
                                <th valign="top" nowrap>Organization</th>
                            </tr>
                            <tr>
                                <td valign="top" nowrap rowspan="2" style="border-bottom:1px solid #BAC5E3">
                                    2009-10-21
                                    
                                        <br><span class="smaller" style="font-style:italic">(CWE 1.6, 2009-10-29)</span>
                                    
                                    </td>
                                <td valign="top">CWE Content Team</td>
                                <td valign="top">MITRE</td>
                            </tr>    
                            <tr>
                                <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee">
                                    <span class="smaller"><i></i></span>
                                </td>
                            </tr>
                        </tbody>
                        
                        <thead class="Contributions">
                            <tr>
                                <th valign="top" colspan="3" class="title"><span><a
                                            href="javascript:toggleblocksOC('787_Contributions');"><img
                                                id="ocimg_787_Contributions" src="/images/head_more.gif" border="0"
                                                alt="+"></a> </span>Contributions</th>
                            </tr>
                        </thead>
                            <tbody id="oc_787_Contributions" class="expandblock">
                                <tr>
                                    <th valign="top">Contribution Date</th>
                                    <th valign="top" nowrap>Contributor</th>
                                    <th valign="top" nowrap>Organization</th>
                                </tr>
                                
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2023-04-25
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">&#34;Mapping CWE to 62443&#34; Sub-Working Group</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE-CAPEC ICS/OT SIG</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>Suggested mappings to ISA/IEC 62443.</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2024-02-29
                                            
                                            <br><span class="smaller" style="font-style:italic">(CWE 4.15, 2024-07-16)</span>
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">Abhi Balakrishnan</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;"></td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>Provided diagram to improve CWE usability</i></span>
                                        </td>
                                    </tr>
                                    
                                
                            </tbody>
                        
                        
                            <thead class="Modifications">
                                <tr>
                                    <th valign="top" colspan="3" class="title"><span><a
                                                href="javascript:toggleblocksOC('787_Modifications');"><img
                                                    id="ocimg_787_Modifications" src="/images/head_less.gif" border="0"
                                                    alt="+"></a> </span>Modifications</th>
                                </tr>
                            </thead>
                            <tbody id="oc_787_Modifications" class="collapseblock">
                                <tr>
                                    <th valign="top">Modification Date</th>
                                    <th valign="top" nowrap>Modifier</th>
                                    <th valign="top" nowrap>Organization</th>
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
                                            <span class="smaller"><i>updated Applicable_Platforms, Detection_Factors, References, Relationships</i></span>
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
                                            <span class="smaller"><i>updated Affected_Resources, Functional_Areas, References</i></span>
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
                                            <span class="smaller"><i>updated Observed_Examples, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2024-11-19
                                            
                                            <br><span class="smaller" style="font-style:italic">(CWE 4.16, 2024-11-19)</span>
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Observed_Examples, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2024-07-16
                                            
                                            <br><span class="smaller" style="font-style:italic">(CWE 4.15, 2024-07-16)</span>
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Alternate_Terms, Common_Consequences, Description, Diagram, Weakness_Ordinalities</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2024-02-29
                                            
                                            <br><span class="smaller" style="font-style:italic">(CWE 4.14, 2024-02-29)</span>
                                            
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
                                            2023-06-29
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Mapping_Notes, Relationships, Taxonomy_Mappings</i></span>
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
                                            <span class="smaller"><i>updated Potential_Mitigations, References, Relationships, Taxonomy_Mappings</i></span>
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
                                            <span class="smaller"><i>updated Alternate_Terms, Demonstrative_Examples, Description</i></span>
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
                                            <span class="smaller"><i>updated Applicable_Platforms</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2022-06-28
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Observed_Examples, Relationships</i></span>
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
                                            <span class="smaller"><i>updated Demonstrative_Examples, Potential_Mitigations, Relationships</i></span>
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
                                            <span class="smaller"><i>updated Relationships</i></span>
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
                                            <span class="smaller"><i>updated Alternate_Terms, Demonstrative_Examples, Observed_Examples, Relationships</i></span>
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
                                            <span class="smaller"><i>updated Observed_Examples</i></span>
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
                                            <span class="smaller"><i>updated Observed_Examples, Relationships</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2019-09-19
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Applicable_Platforms, Demonstrative_Examples, Detection_Factors, Likelihood_of_Exploit, Observed_Examples, Potential_Mitigations, References, Relationships, Time_of_Introduction</i></span>
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
                                            <span class="smaller"><i>updated Description</i></span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td valign="top" nowrap rowspan="2" style="border-top:solid #BAC5E3; border-bottom:1px solid #BAC5E3">
                                            2015-12-07
                                            
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
                                            2014-06-23
                                            
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
                                            2010-09-27
                                            
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
                                            2010-02-16
                                            
                                        </td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">CWE Content Team</td>
                                        <td valign="top" style="border-top:solid #BAC5E3; border-left:solid #BAC5E3;">MITRE</td>
                                    </tr>
                                    <tr>
                                        <td valign="top" colspan="2" style="border-bottom:1px solid #BAC5E3; font-size:90%; background-color:#eeeeee; border-left:solid #BAC5E3;">
                                            <span class="smaller"><i>updated Demonstrative_Examples</i></span>
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
