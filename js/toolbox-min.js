import*as global from"./modules/global.js";import*as local from"./modules/local.js";import{consoleLog,loadCssFile,loadJsFile,exeJsCode,preferesColorScheme,sitecoreItemJson,fetchTimeout,getScItemData,repositionElement,startDrag}from"./modules/helpers.js";import{showSnackbar}from"./modules/snackbar.js";import{checkWorkbox}from"./modules/workbox.js";import{checkUrlStatus}from"./modules/url.js";import{checkNotification,sendNotification}from"./modules/notification.js";import{cleanCountryName,findCountryName}from"./modules/language.js";import{sitecoreAuthorToolbox}from"./modules/contenteditor.js";import{getGravatar}from"./modules/users.js";import{instantSearch}from"./modules/instantsearch.js";import{insertModal,insertPanel}from"./modules/menu.js";import{insertSavebar,insertBreadcrumb,initInsertIcon,initGutter,getAccentColor,initColorPicker,initSitecoreMenu}from"./modules/experimentalui.js";chrome.storage.sync.get(e=>{consoleLog(window.location.href.replace("https://","").replace("http://",""),"green");let t=preferesColorScheme(),o=!1;if(global.isSitecore&&!global.isEditMode&&!global.isLoginPage&&!global.isCss&&!global.isUploadManager){
//!global.isRichTextEditor ? document.querySelector('body').insertAdjacentHTML( 'beforeend', '<input type="hidden" class="extensionId" value="' + global.extensionId + '" />' ) : false;
if(loadCssFile("css/onload-min.css"),loadJsFile("js/inject.js"),null==e.feature_darkmode&&(e.feature_darkmode=!1),null==e.feature_darkmode_auto&&(e.feature_darkmode_auto=!1),null==e.feature_experimentalui&&(e.feature_experimentalui=!1),1!=e.feature_experimentalui&&((!e.feature_darkmode||e.feature_darkmode_auto||global.isTelerikUi||global.isExperienceEditor||global.isAdminCache||global.isContentHome||global.isLoginPage||global.isEditMode||global.isRules||global.isAdmin)&&(!e.feature_darkmode||!e.feature_darkmode_auto||global.isTelerikUi||global.isExperienceEditor||global.isAdminCache||global.isContentHome||global.isLoginPage||global.isEditMode||global.isRules||global.isAdmin||"dark"!=t)||(o=!0,loadCssFile("css/dark/default-min.css"),loadCssFile("css/dark/ribbon-min.css"),loadCssFile("css/dark/contentmanager-min.css"),loadCssFile("css/dark/dialogs-min.css"),loadCssFile("css/dark/gallery-min.css"),loadCssFile("css/dark/speak-min.css"),0==navigator.platform.indexOf("Win")&&loadCssFile("css/dark/scrollbars-min.css"))),checkNotification(),global.isContentEditor||global.isLaunchpad){if(consoleLog("**** Content Editor / Launchpage ****","yellow"),null==e.feature_experimentalui&&(e.feature_experimentalui=!1),null==e.feature_contrast_icons&&(e.feature_contrast_icons=!0),!global.isLaunchpad&&e.feature_experimentalui){let t=getScItemData();loadCssFile("css/experimentalui.css"),e.feature_darkmode&&!e.feature_darkmode_auto&&!global.isTelerikUi&&!global.isExperienceEditor&&!global.isAdminCache&&!global.isContentHome&&!global.isLoginPage&&!global.isEditMode&&!global.isRules&&!global.isAdmin||e.feature_darkmode&&e.feature_darkmode_auto&&!global.isTelerikUi&&!global.isExperienceEditor&&!global.isAdminCache&&!global.isContentHome&&!global.isLoginPage&&!global.isEditMode&&!global.isRules&&global.isAdmin;let o='<div id="svgAnimation">'+global.svgAnimation+"</div>";document.querySelector("#EditorFrames")&&document.querySelector("#EditorFrames").insertAdjacentHTML("beforebegin",o);let a=document.querySelector("#SearchPanel");a&&(a.innerHTML="Content"),0==e.feature_contrast_icons&&(document.documentElement.style.setProperty("--iconBrightness",1),document.documentElement.style.setProperty("--iconContrast",1)),insertSavebar(),insertModal(t.id,t.language,t.version),insertPanel(),initInsertIcon(),initGutter();let r=document.querySelector(".sc-accountInformation"),l=document.querySelector(".sc-globalHeader-startButton");if(r){let e="center:yes; help:no; resizable:yes; scroll:yes; status:no; dialogMinHeight:200; dialogMinWidth:300; dialogWidth:1100; dialogHeight:700; header:",t='<div class="sc-globalheader-appName">Content Editor</div>';l&&l.insertAdjacentHTML("afterend",t);let o='<img loading="lazy" title="No notification in your workbox" id="scNotificationBell" onclick="javascript:scSitecore.prototype.showModalDialog(\''+global.workboxPage.replace("&sc_bw=1","&sc_bw=0")+"', '', '"+e+'Workbox\', null, null); false" src="'+global.iconBell+'" class="scIconMenu" accesskey="w"/>\n                                    <img loading="lazy" title="Show ribbon" id="scSitecoreMenu" onclick="showSitecoreMenu()" src="'+global.iconDownArrow+'" class="scIconMenu" accesskey="a" />';r.insertAdjacentHTML("afterbegin",o),initColorPicker(),initSitecoreMenu();let a=r.querySelectorAll("li")[1].innerText.trim();r.querySelector("li").remove(),r.querySelector("li").innerHTML=r.querySelector("li > img").outerHTML,r.querySelector("li > img").setAttribute("id","globalHeaderUserPortrait");let i='\n                    <ul class="scAccountMenu">\n                        <li onclick="javascript:return scForm.invoke(\'preferences:changeuserinformation\', event)">My account ('+a+")</li>\n                        <li onclick=\"javascript:return scForm.invoke('security:changepassword', event) \">Change Password</li>\n                        <li onclick=\"javascript:return scForm.invoke('shell:useroptions', event)\">Application Options</li>\n                        <li onclick=\"window.open('"+global.launchpadPage+"')\">Sitecore Author Toolbox Options</li>\n                        <li onclick=\"javascript:return scForm.invoke('preferences:changeregionalsettings', event)\">Region and Languages</li>\n                        <li onclick=\"javascript:return scForm.invoke('system:showlicenses', event)\">Licences</li>\n                        <li onclick=\"javascript:return scForm.invoke('system:showabout', event)\">Licence details</li>\n                        <li onclick=\"javascript:return scForm.invoke('contenteditor:close', event)\">Logout</li>\n                    </ul>";r.insertAdjacentHTML("afterbegin",i)}document.addEventListener("click",e=>{let t=document.querySelector("#EditorTabs").getBoundingClientRect().bottom,o=document.querySelector("#scPanel"),a=document.querySelector("#scLanguageIframe"),r=document.querySelector("#scVersionIframe");o.setAttribute("style","top: "+t+"px !important"),a.setAttribute("style","top: "+t+"px !important"),r.setAttribute("style","top: "+t+"px !important"),document.querySelector(".scAccountMenu")&&("globalHeaderUserPortrait"==e.srcElement.id?document.querySelector(".scAccountMenu").setAttribute("style","visibility: visible; top: 50px; opacity: 1;"):document.querySelector(".scAccountMenu").setAttribute("style","visibility: hidden; top: 40px; opacity: 0;")),document.querySelector(".scPublishMenu")&&("scPublishMenuMore"==e.srcElement.id?document.querySelector(".scPublishMenu").setAttribute("style","visibility: visible; opacity: 1;"):document.querySelector(".scPublishMenu").setAttribute("style","visibility: hidden; opacity: 0;")),"scMoreButton"==e.srcElement.id||"scMoreButton"==e.path[1].id||"scPanel"==e.srcElement.id||"content"==e.path[0].className?o.classList.toggle("open"):o.classList.remove("open"),"scLanguageButton"==e.srcElement.id||"scLanguageButton"==e.path[1].id?a.classList.toggle("open"):a.classList.remove("open"),"scVersionButton"==e.srcElement.id||"scVersionButton"==e.path[1].id?r.classList.toggle("open"):r.classList.remove("open"),document.querySelector(".scPublishMenu"),document.querySelector("#scModal")&&("scOverlay"==e.srcElement.className&&document.querySelector(".scOverlay").setAttribute("style","visibility: hidden"),"scOverlay"==e.srcElement.className&&document.querySelector("#scModal").setAttribute("style","opacity:0; visibility: hidden; top: calc(50% - 550px/2 - 10px)"))})}if(null==e.feature_instantsearch&&(e.feature_instantsearch=!0),!global.isLaunchpad&&e.feature_instantsearch){let e=document.querySelector(".sc-globalHeader"),t='<input type="text" class="scInstantSearch scIgnoreModified" placeholder="Search for content or media" tabindex="1" accesskey="f">',o='<ul class="scInstantSearchResults"></ul>';e&&e.insertAdjacentHTML("afterbegin",o),e&&e.insertAdjacentHTML("afterbegin",t),e&&instantSearch()}if(window.onpopstate=function(e){e.state&&""!=e.state.id&&(localStorage.setItem("scBackPrevious",!0),exeJsCode('scForm.invoke("item:load(id='+e.state.id+",language="+e.state.language+",version="+e.state.version+')");'))},e.feature_darkmode&&e.feature_darkmode_auto){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{exeJsCode("scForm.invoke('contenteditor:save', event)"),setTimeout((function(){window.location.reload()}),500)})}if(!global.hasRedirection&&!global.hasRedirectionOther&&!global.isLaunchpad)if(null==e.feature_reloadnode&&(e.feature_reloadnode=!0),null!=e.scData){if(""!=global.scUrlHash)F=global.scUrlHash.split("_"),e.scItemID=F[0],e.scLanguage=F[1],e.scVersion=F[2],e.scSource="Hash";else{var a=e.scData;for(var r in a)a.hasOwnProperty(r)&&r==window.location.origin&&(e.scItemID=a[r].scItemID,e.scLanguage=a[r].scLanguage,e.scVersion=a[r].scVersion,e.scSource="Storage")}null==e.scLanguage&&(e.scLanguage="en"),e.scItemID&&1==e.feature_reloadnode&&(consoleLog("[Read "+e.scSource+"] Item : "+e.scItemID,"beige"),consoleLog("[Read "+e.scSource+"] Language : "+e.scLanguage,"beige"),consoleLog("[Read "+e.scSource+"] Version : "+e.scVersion,"beige"),consoleLog("*** Redirection ***","yellow"),exeJsCode('scForm.invoke("item:load(id='+e.scItemID+",language="+e.scLanguage+",version="+e.scVersion+')");')),sitecoreAuthorToolbox()}else sitecoreAuthorToolbox();if(null==e.feature_favorites&&(e.feature_favorites=!0),e.feature_favorites&&!global.isPublishWindow&&global.scContentTree){var l=document.querySelector("#sitecorAuthorToolboxFav");l&&l.remove();var i='<iframe loading="lazy" id="sitecorAuthorToolboxFav" class="sitecorAuthorToolboxFav" src="'+("../default.aspx?xmlcontrol=Gallery.Favorites&id="+getScItemData().id+"&la=en&vs=1")+'" style="width:100%; height:150px; margin-top: 0px; resize: vertical;"></iframe>';global.scContentTree.insertAdjacentHTML("afterend",i)}if(!global.isLaunchpad){let e=global.extensionVersion;localStorage.getItem("sbDismiss")!=e&&showSnackbar(e)}null==e.feature_workbox&&(e.feature_workbox=!0),!chrome.runtime.error&&1==e.feature_workbox&&checkWorkbox()}if(global.isDesktop&&!global.isGalleryFavorites&&(consoleLog("**** Desktop Shell ****","orange"),null==e.feature_launchpad&&(e.feature_launchpad=!0),e.feature_launchpad)){var n='<a href="#" class="scStartMenuLeftOption" title="" onclick="window.location.href=\''+global.launchpadPage+"?launchpad=true&url="+global.windowLocationHref+'\'"><img loading="lazy" src="'+global.launchpadIcon+'" class="scStartMenuLeftOptionIcon" alt="" border="0"><div class="scStartMenuLeftOptionDescription"><div class="scStartMenuLeftOptionDisplayName">'+global.launchpadGroupTitle+'</div><div class="scStartMenuLeftOptionTooltip">'+global.launchpadTitle+"</div></div></a>",s=document.querySelectorAll(".scStartMenuLeftOption");for(let e of s)"Install and maintain apps."==e.getAttribute("title")&&e.insertAdjacentHTML("afterend",n)}if(global.isLaunchpad&&(consoleLog("**** Launchpad ****","orange"),null==e.feature_launchpad&&(e.feature_launchpad=!0),e.feature_launchpad)){var c=document.querySelectorAll(".last");n='<div class="sc-launchpad-group"><header class="sc-launchpad-group-title">'+global.launchpadGroupTitle+'</header><div class="sc-launchpad-group-row"><a href="#" onclick="window.location.href=\''+global.launchpadPage+"?launchpad=true&url="+global.windowLocationHref+'\'" class="sc-launchpad-item" title="'+global.launchpadTitle+'"><span class="icon"><img loading="lazy" src="'+global.launchpadIcon+'" width="48" height="48" alt="'+global.launchpadTitle+'"></span><span class="sc-launchpad-text">'+global.launchpadTitle+"</span></a></div></div>",c[0].insertAdjacentHTML("afterend",n)}if(global.isSearch){consoleLog("**** Internal Search ****","orange");var d=document.querySelector("#results"),u=new MutationObserver((function(e){var t=document.querySelector("#results").querySelectorAll(".BlogPostArea");for(var o of t){var a=o.querySelector(".BlogPostFooter"),r=o.querySelector(".BlogPostViews > a > img").getAttribute("title");(r=(r=r.split(" - "))[1].toLowerCase()).includes("/home/")&&(r="/"+(r=r.split("/home/"))[1]);var l='<div class="BlogPostExtra BlogPostContent" style="padding: 5px 0 0px 78px; color: #0769d6"><strong>Sitecore path:</strong> '+r+" <strong>Languages available:</strong> "+o.querySelector(".BlogPostHeader > span").getAttribute("title")+"</div>";r&&a.insertAdjacentHTML("afterend",l)}}));d&&u.observe(d,{attributes:!1,childList:!0,characterData:!1,subtree:!1})}if(global.isFieldEditor){if(consoleLog("**** Field editor ****","orange"),null==e.feature_charscount&&(e.feature_charscount=!0),e.feature_charscount){var g,m,f=document.querySelectorAll("input, textarea"),p=0;for(var b of f)"scContentControl"!=b.className&&"scContentControlMemo"!=b.className||(b.setAttribute("style","padding-right: 70px !important"),b.parentElement.setAttribute("style","position:relative !important"),p=b.value.length,m=p>1?p+" chars":p+" char",g='<div id="chars_'+b.id+'" style="position: absolute; bottom: 1px; right: 1px; padding: 6px 10px; border-radius: 4px; line-height: 20px; opacity:0.5;">'+m+"</div>",b.insertAdjacentHTML("afterend",g));document.addEventListener("keyup",(function(e){"input"!=e.target.localName&&"textarea"!=e.target.localName||(p=e.target.value.length,m=p>1?p+" chars":p+" char",document.querySelector("#chars_"+e.target.id)&&(document.querySelector("#chars_"+e.target.id).innerText=m))}),!1)}var y=document.querySelectorAll(".scBucketListSelectedBox, .scContentControlMultilistBox"),h=document.querySelector("#Section_Data");(y=y[1]?y[1]:y[0])&&y.addEventListener("change",(function(){var e=y.value,t=y[y.selectedIndex].text,o='<a class="scMessageBarOption" href="'+window.location.origin+"/sitecore/shell/Applications/Content%20Editor.aspx#"+e+'" target="_blank"><u>Click here ⧉</u></a> ',a='<a class="scMessageBarOption" href="'+window.location.origin+"/?sc_mode=edit&sc_itemid="+e+'" target="_blank"><u>Click here ⧉</u></a> ',r='<div id="Warnings" class="scMessageBar scWarning"><div class="scMessageBarIcon" style="background-image:url('+global.icon+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">'+t+'</div><span id="Information" class="scMessageBarText"><span class="scMessageBarOptionBullet">'+o+'</span> to edit this item in <b>Content Editor</b>.</span><span id="Information" class="scMessageBarText"><br /><span class="scMessageBarOptionBulletXP">'+a+"</span> to edit this page in <b>Experience Editor</b>.</span></div></div>";document.querySelector(".scMessageBar")?(document.querySelector(".scMessageBarTitle").innerHTML=t,document.querySelector(".scMessageBarOptionBullet").innerHTML=o,document.querySelector(".scMessageBarOptionBulletXP").innerHTML=a):h.insertAdjacentHTML("beforebegin",r)})),null==e.feature_errors&&(e.feature_errors=!0);var v=0,S=document.getElementsByClassName("scValidationMarkerIcon"),_=document.querySelector("#MainPanel");if(e.feature_errors){var x='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+global.icon+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let e of S)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=e.getAttribute("src")&&(x+='<li class="scMessageBarOptionBullet" onclick="'+e.getAttribute("onclick")+'" style="cursor:pointer;">'+e.getAttribute("title")+"</li>",v++);x+="</ul></div></div>",v>0&&_.insertAdjacentHTML("beforebegin",x),d=document.querySelector(".scValidatorPanel"),u=new MutationObserver((function(e){v=0;var t='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+global.iconError+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let e of S)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=e.getAttribute("src")&&(t+='<li class="scMessageBarOptionBullet" onclick="'+e.getAttribute("onclick")+'" style="cursor:pointer;">'+e.getAttribute("title")+"</li>",v++);if(t+="</ul></div></div>",v>0)_.insertAdjacentHTML("beforebegin",t);else{var o=document.getElementById("scMessageBarError");o&&o.parentNode.removeChild(o)}})),d&&u.observe(d,{attributes:!0,childList:!0,characterData:!0})}}if(global.isMediaFolder&&(consoleLog("**** Media Folder ****","orange"),null==e.feature_dragdrop&&(e.feature_dragdrop=!0),e.feature_dragdrop)){var k=window.location.href.split("id=%7B"),L=(k=(k=k[1].split("%7B"))[0].split("%7D"))[0],M="/sitecore/client/Applications/Dialogs/UploadMediaDialog?ref=list&ro=sitecore://master/%7b"+L+"%7d%3flang%3den&fo=sitecore://master/%7b"+L+"%7d",q=document.querySelector(".scFolderButtons"),T='<a href="#" class="scButton" onclick="javascript:scSitecore.prototype.showModalDialog(\''+M+"', '', '', null, null); false\"><img loading=\"lazy\" src=\" "+global.launchpadIcon+' " width="16" height="16" class="scIcon" alt="" border="0"><div class="scHeader">Upload files (Drag and Drop)</div></a>';q.insertAdjacentHTML("afterbegin",T)}if(global.isExperienceProfile&&(consoleLog("**** Experience Profile ****","orange"),null==e.feature_gravatarimage&&(e.feature_gravatarimage=!0),e.feature_gravatarimage&&(d=document.querySelector("body"),u=new MutationObserver((function(e){let t=document.querySelector("img[data-sc-id=InfoPhotoImage]"),o=document.querySelector("a[data-sc-id=InfoEmailLink]");t&&o&&o.innerHTML.includes("@")&&!t.src.includes("www.gravatar.com")&&(t.src=getGravatar(o.innerHTML,170),u.disconnect())})),d&&u.observe(d,{attributes:!1,childList:!0,characterData:!0,subtree:!0}))),(global.isRichTextEditor||global.isHtmlEditor)&&(consoleLog("**** Rich Text Editor ****","orange"),null==e.feature_rtecolor&&(e.feature_rtecolor=!0),null==e.feature_darkmode&&(e.feature_darkmode=!1),null==e.feature_darkmode_auto&&(e.feature_darkmode_auto=!1),e.feature_rtecolor)){var A,C="default";if(global.isRichTextEditor?A=document.querySelector("#Editor_contentIframe"):global.isHtmlEditor&&(A=document.querySelector("#ctl00_ctl00_ctl05_Html")),A){if(global.isRichTextEditor){document.querySelector("#Editor_contentIframe").contentWindow.document.body,document.querySelector("#EditorContentHiddenTextarea");var w=document.querySelector(".reTextArea")}loadCssFile("css/codemirror.css"),(e.feature_darkmode&&!e.feature_darkmode_auto||e.feature_darkmode&&e.feature_darkmode_auto&&"dark"==t)&&(C="ayu-dark",loadCssFile("css/dark/ayu-dark.css")),global.isRichTextEditor?(w.insertAdjacentHTML("afterend",'<input type="hidden" class="scDarkMode" value="'+C+'" />'),w.insertAdjacentHTML("afterend",'<input type="hidden" class="scEditor" value="richTextEditor" />')):global.isHtmlEditor&&(A.insertAdjacentHTML("afterend",'<input type="hidden" class="scDarkMode" value="'+C+'" />'),A.insertAdjacentHTML("afterend",'<input type="hidden" class="scEditor" value="htmlEditor" />')),loadJsFile("js/bundle-min.js")}}if(global.isEditorFolder&&(consoleLog("**** Editors folder ****","orange"),e.feature_experimentalui&&(loadCssFile("css/experimentalui.css"),getAccentColor())),global.isXmlControl&&(consoleLog("**** XML Control (Window) ****","orange"),e.feature_experimentalui&&(loadCssFile("css/experimentalui.css"),getAccentColor())),global.isGalleryVersion&&consoleLog("**** Versions menu ****","orange"),global.isGalleryLanguage&&(consoleLog("**** Languages menu ****","orange"),null==e.feature_flags&&(e.feature_flags=!0),e.feature_flags)){var E,B,H,I,F,P,j=document.querySelector("#Languages"),R=j.querySelectorAll(".scMenuPanelItem,.scMenuPanelItemSelected"),D=0;(R=[].slice.call(R).sort((function(e,t){return e.querySelector("table > tbody > tr > td > div > div:last-child").textContent>t.querySelector("table > tbody > tr > td > div > div:last-child").textContent?-1:1}))).forEach((function(e){j.appendChild(e)}));for(let t of R){D=0,E=t.getElementsByTagName("td");for(let t of E)0==D?I=t.getElementsByTagName("img"):(B=(B=t.getElementsByTagName("b"))[0].innerHTML,"0"!=(H=(H=(H=t.getElementsByTagName("div"))[2].innerHTML).split(" "))[0]&&(F=t.getElementsByTagName("div"))[2].setAttribute("style","background-color: yellow; display: initial; padding: 0px 3px; color: #000000 !important"),B=findCountryName(B),I[0].onerror=function(){this.src=global.iconFlagGeneric},I[0].src=e.feature_experimentalui?chrome.runtime.getURL("images/Flags/svg/"+B+".svg"):chrome.runtime.getURL("images/Flags/32x32/flag_"+B+".png")),D++;0}}if(global.isPublishDialog&&(consoleLog("**** Publishing window ****","orange"),null==e.feature_flags&&(e.feature_flags=!0),e.feature_flags&&(d=document.querySelector("body"),u=new MutationObserver((function(t){var o,a=document.querySelectorAll("div[data-sc-id=CheckBoxListLanguages] > table:last-child")[0];if(null!=a&&a.children[0].children.length>1)for(var r of a.children[0].children)for(var l of r.children)if(o=findCountryName(l.innerText.trim()),null==l.querySelector("#scFlag")){let t=e.feature_experimentalui?chrome.runtime.getURL("images/Flags/svg/"+o+".svg"):chrome.runtime.getURL("images/Flags/16x16/flag_"+o+".png");l.querySelector("label > span").insertAdjacentHTML("beforebegin",' <img loading="lazy" id="scFlag" src="'+t+'" style="display: inline !important; vertical-align: middle; padding-right: 2px; width:16px;" onerror="this.onerror=null;this.src=\''+global.iconFlagGeneric+"';\"/>")}})),d&&u.observe(d,{attributes:!1,childList:!0,characterData:!1,subtree:!0}))),global.isPublishWindow){consoleLog("**** Publish / Rebuild / Package ****","orange"),null==e.feature_flags&&(e.feature_flags=!0);document.querySelector("form").getAttribute("action").split("id=")[1].replace("%7B","{").replace("%7D","}");if(e.feature_flags){var N=document.querySelectorAll("#Languages > label");for(let t of N){B=findCountryName(t.innerText.trim());let o=e.feature_experimentalui?chrome.runtime.getURL("images/Flags/svg/"+B+".svg"):chrome.runtime.getURL("images/Flags/16x16/flag_"+B+".png");t.insertAdjacentHTML("beforebegin",' <img loading="lazy" id="scFlag" src="'+o+'" style="display: inline !important; vertical-align: middle; padding-right: 2px; width:16px" onerror="this.onerror=null;this.src=\''+global.iconFlagGeneric+"';\"/>")}}}null==e.feature_autoexpand&&(e.feature_autoexpand=!0),null==e.feature_autoexpandcount&&(e.feature_autoexpandcount=!1),e.feature_autoexpand&&(document.addEventListener("click",(function(t){if(null!=t.target.offsetParent&&t.target.offsetParent.matches(".scContentTreeNodeNormal")){e.feature_experimentalui&&document.querySelector("#svgAnimation").setAttribute("style","opacity:1"),e.feature_experimentalui?document.querySelector("#EditorFrames").setAttribute("style","opacity:0"):document.querySelector("#EditorFrames").setAttribute("style","opacity:0.5"),document.querySelector(".scContentTreeContainer").setAttribute("style","opacity:0.5"),document.querySelector(".scEditorTabHeaderActive > span").innerText=global.tabLoadingTitle,document.querySelector(".scPreviewButton")&&(document.querySelector(".scPreviewButton").innerText=global.tabLoadingTitle,document.querySelector(".scPreviewButton").disabled=!0);setTimeout((function(){document.querySelector("#svgAnimation")&&document.querySelector("#svgAnimation").setAttribute("style","opacity:0"),document.querySelector("#EditorFrames").setAttribute("style","opacity:1"),document.querySelector(".scContentTreeContainer").setAttribute("style","opacity:1")}),8e3)}if(t.target.matches(".scContentTreeNodeGlyph")){let o=t.target.id;setTimeout((function(){if(document&&o){let t=document.querySelector("#"+o).nextSibling.nextSibling.nextSibling;if(t){let a=t.querySelectorAll(".scContentTreeNode");if(1==a.length&&a[0].querySelector(".scContentTreeNodeGlyph").click(),e.feature_autoexpandcount){let e=document.querySelector("#"+o).nextSibling.nextSibling;e.querySelector(".scContentTreeNodeIcon"),e.innerText;document.querySelectorAll(".scCountNodes").forEach((function(e){e.setAttribute("style","display:none")}))}}else{let e=document.querySelector("#"+o).nextSibling.nextSibling;e.querySelector(".scCountNodes")&&e.querySelector(".scCountNodes").remove()}}}),200)}if(t.target.matches(".dynatree-expander")){let e=t.path[1];setTimeout((function(){if(document&&e){let t=e.nextSibling;if(console.log(t),t){let e=t.querySelectorAll(".dynatree-has-children");1==e.length&&e[0].querySelector(".dynatree-expander").click(),console.log(e)}}}),200)}}),!1),document.addEventListener("mousedown",(function(e){if(!e.target.matches(".glyph"))return;let t=e.target.id,o=e.target.src.includes("collapsed");setTimeout((function(){if(document&&t&&o){var e=document.querySelector("#"+t).closest("ul").nextSibling;if(e)e.querySelector(".glyph").click()}}),200)}),!1)),d=document.querySelector("#LastPage"),u=new MutationObserver((function(a){if(null==e.feature_notification&&(e.feature_notification=!0),null==e.feature_experimentalui&&(e.feature_experimentalui=!1),e.feature_notification){var r=(d=document.querySelector("#LastPage")).querySelector(".sc-text-largevalue").innerHTML,l=d.querySelector(".scFieldLabel").innerHTML;"Result:"==l&&(l="Finished "+document.querySelector("#ResultText").value.split("Finished")[1]),sendNotification(r,l),(e.feature_darkmode&&!e.feature_darkmode_auto||e.feature_darkmode&&e.feature_darkmode_auto&&"dark"==t)&&(o=!0);var i=parent.parent.document.querySelector("body");e.feature_experimentalui?checkUrlStatus(i,o,!0):checkUrlStatus(i,o)}})),d&&u.observe(d,{attributes:!0}),setTimeout((function(){let e=document.querySelector("body").getBoundingClientRect().height,t=!!document.querySelector(".scContentTreeNodeActive > span")&&document.querySelector(".scContentTreeNodeActive > span").getBoundingClientRect().top,o=t>e?t-e+e/2:0;document.querySelector(".scContentTree")&&(document.querySelector(".scContentTree").scrollTop=o)}),1e3),d=document.querySelector("#scLanguage"),u=new MutationObserver((function(e){consoleLog("*** Update UI ***","yellow");var t=document.querySelector(".scEditorHeaderQuickInfoInput");if(t){getScItemData();var o=t.getAttribute("value"),a=document.querySelector("#scLanguage").getAttribute("value").toLowerCase();let e=document.querySelector(".scEditorHeaderVersionsVersion > span");e=null!=e?e.innerText:1;var r=document.querySelectorAll(".scEditorQuickInfo"),l=(r[r.length-1],r.length),i=document.getElementsByClassName("scEditorHeaderTitle"),n=document.querySelectorAll(".scEditorHeaderQuickInfoInput"),s=n[n.length-2].getAttribute("value"),c=localStorage.getItem("scBackPrevious");if(!global.hasRedirection&&!global.hasRedirectionOther)if("true"!=c){var d={sitecore:!0,id:o,language:a,version:e};history.pushState(d,void 0,"#"+o+"_"+a+"_"+e)}else localStorage.removeItem("scBackPrevious");if(global.debug&&console.info("%c - Tabs opened: "+l+" ","font-size:12px; background: #7b3090; color: white; border-radius:5px; padding 3px;"),l>1&&!document.getElementById("showInContentTree"+l)){var u=window.location.href,g=(u=u.split("#"))[0]+"&reload#"+s;i[l-1].insertAdjacentHTML("afterend",'[<a id="showInContentTree'+l+'" href="" onclick="javascript:window.location.href=\''+g+"'; return false;\" />Show in content tree</a>]")}}e.forEach((function(e){"attributes"==e.type&&sitecoreAuthorToolbox()}))})),d&&u.observe(d,{attributes:!0})}if(global.isEditMode&&!global.isLoginPage||global.isPreviewMode&&!global.isLoginPage){consoleLog("Experience Editor detected","red"),loadCssFile("css/onload-min.css"),loadCssFile("css/tooltip-min.css"),loadJsFile("js/inject.js");var O=document.querySelector("[data-sc-itemid]");if(O){var U=decodeURI(O.getAttribute("data-sc-itemid"));sitecoreItemJson(U,"en",1)}if(global.isGalleryLanguageExpEd&&(consoleLog("**** Languages menu ****","yellow"),null==e.feature_flags&&(e.feature_flags=!0),e.feature_flags)){var V;R=(j=document.querySelector(".sc-gallery-content")).querySelectorAll(".sc-gallery-option-content,.sc-gallery-option-content-active"),0,D=0,(R=[].slice.call(R).sort((function(e,t){return e.querySelector("div > div:last-child > span").textContent>t.querySelector("div > div:last-child > span").textContent?-1:1}))).forEach((function(e){j.appendChild(e)}));for(let t of R){V=t.closest(".sc-gallery-option-content,.sc-gallery-option-content-active"),B=t.querySelector(".sc-gallery-option-content-header > span").innerText,"0"!=(F=(H=t.querySelector(".sc-gallery-option-content-description > span")).innerHTML.split(" "))[0]&&H.setAttribute("style","background-color: yellow; display: initial; padding: 0px 3px; color: #000000 !important"),B=findCountryName(B);let o=e.feature_experimentalui?chrome.runtime.getURL("images/Flags/svg/"+B+".svg"):chrome.runtime.getURL("images/Flags/32x32/flag_"+B+".png");V.setAttribute("style","padding-left:48px; background-image: url("+o+"); background-repeat: no-repeat; background-position: 5px;")}}if(global.isRibbon){consoleLog("**** Ribbon ****","yellow");var G=document.querySelector(".flag_generic_24");for(P in B=G.nextSibling.innerText,B=cleanCountryName(B),global.jsonData)global.jsonData.hasOwnProperty(P)&&B==global.jsonData[P].language.toUpperCase()&&(B=global.jsonData[P].flag);let t=e.feature_experimentalui?chrome.runtime.getURL("images/Flags/svg/"+B+".svg"):chrome.runtime.getURL("images/Flags/24x24/flag_"+B+".png");G.setAttribute("style","background-image: url("+t+"); background-repeat: no-repeat; background-position: top left;")}d=document.querySelector(".scChromeControls"),u=new MutationObserver((function(e){var t=document.querySelectorAll(".scChromeToolbar");for(var o of t){o.setAttribute("style","margin-left:50px");var a=o.querySelectorAll(".scChromeCommand");o.querySelector(".scChromeText"),o.querySelector(".scChromeCommandText");for(var r of a){var l=r.getAttribute("title");r.setAttribute("style","z-index:auto"),null!=l&&(r.setAttribute("data-tooltip",l),r.classList.add("t-bottom"),r.classList.add("t-sm"),r.removeAttribute("title"))}}})),d&&u.observe(d,{attributes:!0,childList:!0,characterData:!0});var z=document.querySelector(".pagemode-edit");!z&&(z=document.querySelector(".on-page-editor")),!z&&(z=document.querySelector(".experience-editor")),!z&&(z=document.querySelector(".scWebEditRibbon"));global.windowLocationHref.includes("?"),document.querySelector("#scCrossPiece"),document.querySelector("#scWebEditRibbon"),document.querySelector(".sc-messageBar");let o;var W;null==e.feature_darkmode&&(e.feature_darkmode=!1),null==e.feature_darkmode_auto&&(e.feature_darkmode_auto=!1),null==e.feature_experienceeditor&&(e.feature_experienceeditor=!0),e.feature_experienceeditor&&loadCssFile("css/reset-min.css"),(e.feature_darkmode&&!e.feature_darkmode_auto&&global.isRibbon||e.feature_darkmode&&!e.feature_darkmode_auto&&global.isDialog||e.feature_darkmode&&!e.feature_darkmode_auto&&global.isInsertPage||e.feature_darkmode&&e.feature_darkmode_auto&&global.isRibbon&&"dark"==t||e.feature_darkmode&&e.feature_darkmode_auto&&global.isDialog&&"dark"==t||e.feature_darkmode&&e.feature_darkmode_auto&&global.isInsertPage&&"dark"==t)&&loadCssFile("css/dark/experience-min.css"),(e.feature_darkmode&&!e.feature_darkmode_auto||e.feature_darkmode&&e.feature_darkmode_auto&&"dark"==t)&&(o="dark"),d=document.body,u=new MutationObserver((function(e){for(var t of e)for(var a of t.addedNodes)if("scCrossPiece"==a.id){var r='<div class="scExpTab '+o+'"><span class="tabHandle"></span><span class="tabText" onclick="toggleRibbon()">▲ Hide<span></div>';a.insertAdjacentHTML("afterend",r),u.disconnect(),startDrag()}})),e.feature_experienceeditor&&d&&u.observe(d,{attributes:!1,childList:!0,characterData:!1}),W=global.isEditMode?global.windowLocationHref.replace("sc_mode=edit","sc_mode=normal"):global.isPreviewMode?global.windowLocationHref.replace("sc_mode=preview","sc_mode=normal"):global.windowLocationHref.includes("?")?global.windowLocationHref+"&sc_mode=normal":global.windowLocationHref+"?sc_mode=normal",e.feature_experienceeditor&&!global.isRibbon&&(n='<div class="scNormalModeTab '+o+'"><span class="t-right t-sm" data-tooltip="Open in Normal Mode"><a href="'+W+'"><img loading="lazy" src="'+global.iconChrome+'"/></a></span></div>',z&&z.insertAdjacentHTML("afterend",n)),e.feature_experienceeditor&&!global.isRibbon&&(n='<div class="scContentEditorTab '+o+'"><span class="t-right t-sm" data-tooltip="Open in Content Editor"><a href="'+window.location.origin+'/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1"><img loading="lazy" src="'+global.iconCE+'"/></a></span></div>',z&&z.insertAdjacentHTML("afterend",n))}});