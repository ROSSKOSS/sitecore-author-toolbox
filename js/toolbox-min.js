var debug=!1;function stripHtml(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}function sendNotification(e,t){new Notification(e,{body:t,icon:chrome.runtime.getURL("images/icon.png")})}var script=document.createElement("script");script.src=chrome.runtime.getURL("js/BucketList-min.js"),(document.head||document.documentElement).appendChild(script),script.remove();var link=document.createElement("link");link.type="text/css",link.rel="stylesheet",link.href=chrome.runtime.getURL("css/onload-min.css"),document.getElementsByTagName("head")[0].appendChild(link),debug&&console.info("###### URL loaded: "+window.location);var isGalleryLanguage=window.location.href.includes("Gallery.Language"),isGalleryLanguageExpEd=window.location.href.includes("SelectLanguageGallery"),isGalleryFavorites=window.location.href.includes("Gallery.Favorites"),isAdminCache=window.location.href.includes("/admin/cache.aspx"),isMediaBrowser=window.location.href.includes("Sitecore.Shell.Applications.Media.MediaBrowser"),isPublishWindow=window.location.href.includes("/shell/Applications/Publish.aspx"),isSecurityWindow=window.location.href.includes("/shell/Applications/Security/"),isExperienceEditor=window.location.href.includes("/Applications/ExperienceEditor/"),isContentHome=window.location.href.includes("/content/home"),isLoginPage=window.location.href.includes("sitecore/login"),isLaunchpad=window.location.href.includes("/client/Applications/Launchpad"),isDesktop=window.location.href.includes("/shell/default.aspx"),isRichTextEditor=window.location.href.includes("/Controls/Rich%20Text%20Editor/"),isFieldEditor=window.location.href.includes("field%20editor.aspx"),isModalDialogs=window.location.href.includes("JqueryModalDialogs"),isEditMode=window.location.href.includes("sc_mode=edit"),launchpadPage=chrome.runtime.getURL("options.html"),launchpadIcon=chrome.runtime.getURL("images/icon.png"),launchpadGroupTitle="Sitecore Author Toolbox",launchpadTitle="Options",launchpadUrl=window.location.href;if(isDesktop){debug&&console.info("====================> DESKTOP <====================");var html='<a href="#" class="scStartMenuLeftOption" title="" onclick="window.location.href=\''+launchpadPage+"?launchpad=true&url="+launchpadUrl+'\'"><img src="'+launchpadIcon+'" class="scStartMenuLeftOptionIcon" alt="" border="0"><div class="scStartMenuLeftOptionDescription"><div class="scStartMenuLeftOptionDisplayName">'+launchpadGroupTitle+'</div><div class="scStartMenuLeftOptionTooltip">'+launchpadTitle+"</div></div></a>",desktopOptionMenu=document.querySelectorAll(".scStartMenuLeftOption");for(let e of desktopOptionMenu)"Install and maintain apps."==e.getAttribute("title")&&e.insertAdjacentHTML("afterend",html)}else isLaunchpad&&(debug&&console.info("====================> LAUNCHPAD <===================="),chrome.storage.sync.get(["feature_launchpad"],(function(e){if(null==e.feature_launchpad&&(e.feature_launchpad=!0),e.feature_launchpad){var t=document.querySelectorAll(".last"),a='<div class="sc-launchpad-group"><header class="sc-launchpad-group-title">'+launchpadGroupTitle+'</header><div class="sc-launchpad-group-row"><a href="#" onclick="window.location.href=\''+launchpadPage+"?launchpad=true&url="+launchpadUrl+'\'" class="sc-launchpad-item" title="'+launchpadTitle+'"><span class="icon"><img src="'+launchpadIcon+'" width="48" height="48" alt="'+launchpadTitle+'"></span><span class="sc-launchpad-text">'+launchpadTitle+"</span></a></div></div>";t[0].insertAdjacentHTML("afterend",a)}})));if(isEditMode&&!isLoginPage){debug&&console.info("====================> EDIT MODE <====================");var target=document.querySelector(".scChromeControls"),observer=new MutationObserver((function(e){var t=document.querySelectorAll(".scChromeToolbar");for(var a of t){a.setAttribute("style","margin-left:50px");var s=a.querySelectorAll(".scChromeCommand");for(var n of s){var r=n.getAttribute("title");n.setAttribute("style","z-index:auto"),null!=r&&(n.setAttribute("data-tooltip",r),n.classList.add("t-bottom"),n.classList.add("t-sm"),n.removeAttribute("title"))}}})),config={attributes:!0,childList:!0,characterData:!0};observer.observe(target,config)}else if(isFieldEditor){debug&&console.info("====================> FIELD EDITOR <===================="),chrome.storage.sync.get(["feature_charscount"],(function(e){if(null==e.feature_charscount&&(e.feature_charscount=!0),e.feature_charscount){var t,a,s=document.querySelectorAll("input, textarea"),n=0;for(var r of s)"scContentControl"!=r.className&&"scContentControlMemo"!=r.className||(r.setAttribute("style","padding-right: 70px !important"),r.parentElement.setAttribute("style","position:relative !important"),n=r.value.length,a=n>1?n+" chars":n+" char",t='<div id="chars_'+r.id+'" style="position: absolute; bottom: 1px; right: 1px; padding: 6px 10px; border-radius: 4px; line-height: 20px; opacity:0.5;">'+a+"</div>",r.insertAdjacentHTML("afterend",t));document.addEventListener("keyup",(function(e){"input"!=e.target.localName&&"textarea"!=e.target.localName||(n=e.target.value.length,a=n>1?n+" chars":n+" char",debug&&console.log("chars_"+e.target.id+" -> "+a),document.querySelector("#chars_"+e.target.id).innerText=a)}),!1)}}));var scBucketListSelectedBox=document.querySelectorAll(".scBucketListSelectedBox, .scContentControlMultilistBox"),Section_Data=document.querySelector("#Section_Data");console.log(scBucketListSelectedBox),(scBucketListSelectedBox=scBucketListSelectedBox[1]?scBucketListSelectedBox[1]:scBucketListSelectedBox[0])&&(console.log("OK"),scBucketListSelectedBox.addEventListener("change",(function(){var e=scBucketListSelectedBox.value,t=scBucketListSelectedBox[scBucketListSelectedBox.selectedIndex].text,a=chrome.runtime.getURL("images/rocket.png"),s='<a class="scMessageBarOption" href="'+window.location.origin+"/sitecore/shell/Applications/Content%20Editor.aspx#"+e+'" target="_blank">Open it in a new tab.</a> ',n='<div id="Warnings" class="scMessageBar scWarning"><div class="scMessageBarIcon" style="background-image:url('+a+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">'+t+'</div><span id="Information" class="scMessageBarText">To edit this item in Content Editor</span><ul class="scMessageBarOptions" style="margin:0px"><li class="scMessageBarOptionBullet">'+s+"</li></ul></div></div>";console.log("Change: "+e),document.querySelector(".scMessageBar")?(document.querySelector(".scMessageBarTitle").innerHTML=t,document.querySelector(".scMessageBarOptionBullet").innerHTML=s):Section_Data.insertAdjacentHTML("beforebegin",n)}))),chrome.storage.sync.get(["feature_errors"],(function(e){null==e.feature_errors&&(e.feature_errors=!0);var t=0,a=document.getElementsByClassName("scValidationMarkerIcon"),s=document.querySelector("#MainPanel"),n=chrome.runtime.getURL("images/error.png");if(e.feature_errors){var r='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+n+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let e of a)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=e.getAttribute("src")&&(r+='<li class="scMessageBarOptionBullet" onclick="'+e.getAttribute("onclick")+'" style="cursor:pointer;">'+e.getAttribute("title")+"</li>",t++);r+="</ul></div></div>",t>0&&s.insertAdjacentHTML("beforebegin",r);var o=document.querySelector(".scValidatorPanel");new MutationObserver((function(e){t=0;var r='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+n+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let e of a)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=e.getAttribute("src")&&(r+='<li class="scMessageBarOptionBullet" onclick="'+e.getAttribute("onclick")+'" style="cursor:pointer;">'+e.getAttribute("title")+"</li>",t++);if(r+="</ul></div></div>",t>0)s.insertAdjacentHTML("beforebegin",r);else{var o=document.getElementById("scMessageBarError");o&&o.parentNode.removeChild(o)}debug&&console.log("!! Change !!")})).observe(o,{attributes:!0,childList:!0,characterData:!0})}}))}else if(isGalleryLanguage)debug&&console.info("====================> LANGUAGES <===================="),chrome.storage.sync.get(["feature_flags"],(function(e){if(null==e.feature_flags&&(e.feature_flags=!0),e.feature_flags){var t,a=new XMLHttpRequest;a.overrideMimeType("application/json"),a.open("GET",chrome.runtime.getURL("data/languages.json"),!0),a.onreadystatechange=function(){if(4===a.readyState&&"200"==a.status){t=JSON.parse(a.responseText);var e,s,n,r,o,i=document.getElementById("Languages").querySelectorAll(".scMenuPanelItem,.scMenuPanelItemSelected"),l=0;for(let a of i){l=0,e=a.getElementsByTagName("td");for(let a of e){if(0==l)n=a.getElementsByTagName("img");else{if(s=(s=a.getElementsByTagName("b"))[0].innerHTML,"0"!=a.getElementsByTagName("div")[2].innerHTML.split(" ")[0]&&(r=a.getElementsByTagName("div"))[2].setAttribute("style","background-color: yellow; display: initial; padding: 0px 3px; color: #000000 !important"),s.includes("(region)"))for(o in s=s.split(" (region"),t)t.hasOwnProperty(o)&&s[0].toUpperCase()==t[o].language.toUpperCase()&&(s=t[o].flag);else(r=(r=(r=null==(r=s.split(" ("))[1]?r[0]:r[1]).split(")"))[0].split(" :"))[0].includes(", ")&&((r=r[0].split(", "))[0]=r[1],r[0]=r[0].replace(" ","_")),s=(s=(s=(s=(s=(s=(s=(r=(r=r[0].replace(" ","_")).toUpperCase()).replace("TRADITIONAL,_","")).replace("SIMPLIFIED,_","")).replace("U.A.E.","UNITED_ARAB_EMIRATES")).replace("KOREA","SOUTH_KOREA")).replace("UNITED_STATES","USA")).replace("UNITED_KINGDOM","GREAT_BRITAIN")).replace("ENGLISH","GREAT_BRITAIN");s=s.toLowerCase(),n[0].onerror=function(){this.src=chrome.runtime.getURL("images/Flags/32x32/flag_generic.png")},n[0].src=chrome.runtime.getURL("images/Flags/32x32/flag_"+s+".png")}l++}0}}},a.send(null)}}));else if(isGalleryLanguageExpEd)debug&&console.info("====================> LANGUAGES IN EXPERIENCE EDITOR <===================="),chrome.storage.sync.get(["feature_flags"],(function(e){if(null==e.feature_flags&&(e.feature_flags=!0),e.feature_flags){console.log("GO");var t,a=new XMLHttpRequest;a.overrideMimeType("application/json"),a.open("GET",chrome.runtime.getURL("data/languages.json"),!0),a.onreadystatechange=function(){if(4===a.readyState&&"200"==a.status){t=JSON.parse(a.responseText);var e,s,n,r,o,i=document.querySelector(".sc-gallery-content").querySelectorAll(".sc-gallery-option-content,.sc-gallery-option-content-active");for(let a of i){for(o in e=a.closest(".sc-gallery-option-content,.sc-gallery-option-content-active"),s=a.querySelector(".sc-gallery-option-content-header > span"),"0"!=(r=(n=a.querySelector(".sc-gallery-option-content-description > span")).innerHTML.split(" "))[0]&&n.setAttribute("style","background-color: yellow; display: initial; padding: 0px 3px; color: #000000 !important"),(r=(r=null==(r=(r=s.innerHTML.split(" :"))[0].split(" ("))[1]?r[0]:r[1]).split(")"))[0].includes(", ")&&((r=r[0].split(", "))[0]=r[1],r[0]=r[0].replace(" ","_")),s=(s=(s=(s=(s=(s=(s=(r=(r=r[0].replace(" ","_")).toUpperCase()).replace("TRADITIONAL,_","")).replace("SIMPLIFIED,_","")).replace("U.A.E.","UNITED_ARAB_EMIRATES")).replace("KOREA","SOUTH_KOREA")).replace("UNITED_STATES","USA")).replace("UNITED_KINGDOM","GREAT_BRITAIN")).replace("ENGLISH","GREAT_BRITAIN"),t)t.hasOwnProperty(o)&&s==t[o].language.toUpperCase()&&(s=t[o].flag);console.log(s),e.setAttribute("style","padding-left:48px; background-image: url("+chrome.runtime.getURL("images/Flags/32x32/flag_"+s+".png")+"); background-repeat: no-repeat; background-position: 5px;")}}},a.send(null)}}));else if(isPublishWindow){debug&&console.info("====================> PUBLISH WINDOW <====================");var dom=document.getElementById("Languages"),label=dom.getElementsByTagName("label");for(let e of label);}else isGalleryFavorites?debug&&console.info("====================> FAVORITES <===================="):isMediaBrowser?debug&&console.info("====================> MEDIA BROWSER <===================="):isAdminCache&&debug&&console.info("====================> ADMIN CACHE <====================");function _addEnvironmentLabel(){var e=0,t=chrome.runtime.getURL("images/rocket.png"),a=chrome.runtime.getURL("images/error.png"),s=chrome.runtime.getURL("images/edit.png"),n=chrome.runtime.getURL("images/Flags/32x32/flag_generic.png"),r=chrome.runtime.getURL("data/languages.json");let o=["ARABIC","HEBREW","PERSIAN","URDU","SINDHI"],i=document.querySelector(".scEditorHeader");document.querySelector(".scEditorHeaderTitle");document.getElementsByClassName("scEditorQuickInfo");let l=document.querySelector(".scEditorHeaderQuickInfoInput"),c=document.querySelector(".scEditorHeaderVersionsLanguage"),d=document.querySelector(".scEditorTabHeaderActive");document.querySelectorAll(".scRibbonEditorTabNormal");var u=document.getElementsByClassName("scValidationMarkerIcon");document.getElementsByClassName("scValidationResult");let g=document.querySelector("#EditorFrames"),m=document.querySelector(".scEditorSections"),p=(document.getElementById("SearchPanel"),document.getElementById("ContentTreeHolder"));var f=document.getElementsByClassName("scEditorHeaderVersionsLanguage");if(f[0])var h=f[0].getAttribute("title"),v=stripHtml(f[0].innerHTML);if(l){var y=document.getElementsByClassName("scEditorHeaderQuickInfoInput"),E=y[0].getAttribute("value"),b=y[1].getAttribute("value"),x=b,B=!1,M=(b=b.split("/Home/"))[0];M=(M=M.split("/")).slice(-1)[0],"Data"==(y=x.split("/"))[y.length-1]&&(B=!0);var T,_=document.getElementById("scLanguage").getAttribute("value").toLowerCase(),L=window.location.origin+"/?sc_itemid="+E+"&sc_mode=normal&sc_lang="+_,A=v.includes("("),I=(b=null!=b[1]?encodeURI(window.location.origin+"/"+_+"/"+b[1]+"?sc_site=xxxsxa_sitexxx&sc_mode=normal").toLowerCase():encodeURI(window.location.origin+"/"+_+"/?sc_site=xxxsxa_sitexxx").toLowerCase()).includes("/data/");B||b==encodeURI(window.location.origin+"/"+_+"/?sc_site=xxxsxa_sitexxx")||I||chrome.storage.sync.get(["feature_urls"],(function(e){null==e.feature_urls&&(e.feature_urls=!0),!document.getElementById("scMessageBarUrl")&&e.feature_urls&&chrome.runtime.sendMessage({greeting:"sxa_site"},(function(e){null!=e.farewell?(b=b.replace("xxxsxa_sitexxx",e.farewell),debug&&console.info("- Sitecore sxa_site (cookie): "+e.farewell)):(b=b.replace("xxxsxa_sitexxx",M),debug&&console.info("- Sitecore sxa_site (quick info): "+M));var a='<div id="scMessageBarUrl" class="scMessageBar scWarning"><div class="scMessageBarIcon" style="background-image:url('+t+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">Sitecore Live URL</div><div class="scMessageBarText">If you want to preview this page in <b>'+h+'</b></div><ul class="scMessageBarOptions" style="margin:0px"><li class="scMessageBarOptionBullet"><a href="'+b+'" target="_blank" class="scMessageBarOption">Open this link</a> or try <a href="'+L+'" target="_blank" class="scMessageBarOption">this alternative link</a></li></ul></div></div>';i.insertAdjacentHTML("afterend",a)}))})),I&&(b=b.split("/data/"),chrome.storage.sync.get(["feature_urls"],(function(e){if(null==e.feature_urls&&(e.feature_urls=!0),!document.getElementById("scMessageBarInfo")&&e.feature_urls){var t='<div id="scMessageBarInfo" class="scMessageBar scInformation"><div class="scMessageBarIcon" style="background-image:url('+s+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">You are editing a data source...</div><div class="scMessageBarText">To see it, you need to add/edit it to your page via the</b></div><ul class="scMessageBarOptions" style="margin:0px"><li class="scMessageBarOptionBullet"><span class="scMessageBarOption">Presentation Details</span> or <span class="scMessageBarOption">Experience Editor</span></li></ul></div></div>';i.insertAdjacentHTML("afterend",t)}}))),chrome.storage.sync.get(["feature_flags"],(function(e){if(null==e.feature_flags&&(e.feature_flags=!0),A)(y=(y=(y=null==(y=v.split(" ("))[1]?y[0]:y[1]).split(")"))[0].split(" :"))[0].includes(", ")&&((y=y[0].split(", "))[0]=y[1],y[0]=y[0].replace(" ","_")),y=(y=y[0].replace(" ","_")).toUpperCase(),T=(T=(T=(T=(T=(T=(T=(T=y.replace("TRADITIONAL,_","")).replace("SIMPLIFIED,_","")).replace("U.A.E.","UNITED_ARAB_EMIRATES")).replace("KOREA","SOUTH_KOREA")).replace("UNITED_STATES","USA")).replace("UNITED_KINGDOM","GREAT_BRITAIN")).replace("ENGLISH","GREAT_BRITAIN")).toLowerCase(),T=chrome.runtime.getURL("images/Flags/32x32/flag_"+T+".png"),!document.getElementById("scFlag")&&e.feature_flags&&T&&d.insertAdjacentHTML("afterbegin",'<img id="scFlag" src="'+T+'" style="width: 20px; vertical-align: middle; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+n+"';\"/>"),!document.getElementById("scFlagMenu")&&e.feature_flags&&T&&c.insertAdjacentHTML("afterbegin",'<img id="scFlagMenu" src="'+T+'" style="width: 15px; vertical-align: sub; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+n+"';\"/>");else if(e.feature_flags){var t=new XMLHttpRequest;t.overrideMimeType("application/json"),t.open("GET",r,!0),t.onreadystatechange=function(){if(4===t.readyState&&"200"==t.status){var a,s=JSON.parse(t.responseText);for(a in s)s.hasOwnProperty(a)&&v.toUpperCase()==s[a].language.toUpperCase()&&(T=(T=s[a].flag).toLowerCase(),T=chrome.runtime.getURL("images/Flags/32x32/flag_"+T+".png"),!document.getElementById("scFlag")&&e.feature_flags&&T&&d.insertAdjacentHTML("afterbegin",'<img id="scFlag" src="'+T+'" style="width: 20px; vertical-align: middle; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+n+"';\"/>"),!document.getElementById("scFlagMenu")&&e.feature_flags&&T&&c.insertAdjacentHTML("afterbegin",'<img id="scFlagMenu" src="'+T+'" style="width: 15px; vertical-align: sub; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+n+"';\"/>"))}},t.send(null)}}))}else if(!document.getElementById("scMessageBarUrl")&&m){var w='<div id="scMessageBarUrl" class="scMessageBar scWarning"><div class="scMessageBarIcon" style="background-image:url('+t+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">Oh snap! 😭😭😭</div><div class="scMessageBarText">To fully enjoy Sitecore Author Toolbox, please enable <b>Title bar</b> and <b>Quick info section</b> under <b>Application Options</b>.</div><ul class="scMessageBarOptions" style="margin:0px"><li class="scMessageBarOptionBullet"><a href="" onclick="javascript:return scForm.postEvent(this,event,\'shell:useroptions\')" class="scMessageBarOption">Open Application Options</a>.</li></ul></div></div>';m.insertAdjacentHTML("afterbegin",w)}chrome.storage.sync.get(["feature_rtl"],(function(e){if(null==e.feature_rtl&&(e.feature_rtl=!0),e.feature_rtl&&v){var t;if(y=v.split(" ("),T=y[0].toUpperCase(),(link=document.createElement("link")).type="text/css",link.rel="stylesheet",o.includes(T)){link.href=chrome.runtime.getURL("css/rtl-min.css"),t=document.getElementsByClassName("scContentControlHtml");for(let e of t)e.onload=function(){e.contentWindow.document.getElementById("ContentWrapper").style.direction="RTL"}}else{link.href=chrome.runtime.getURL("css/ltr-min.css"),t=document.getElementsByClassName("scContentControlHtml");for(let e of t)e.onload=function(){e.contentWindow.document.getElementById("ContentWrapper").style.direction="LTR"}}document.getElementsByTagName("head")[0].appendChild(link)}})),chrome.storage.sync.get(["feature_errors"],(function(t){if(null==t.feature_errors&&(t.feature_errors=!0),t.feature_errors){e=0;var s='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+a+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let t of u)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=t.getAttribute("src")&&(s+='<li class="scMessageBarOptionBullet" onclick="'+t.getAttribute("onclick")+'" style="cursor:pointer;">'+t.getAttribute("title")+"</li>",e++);s+="</ul></div></div>",e>0&&i.insertAdjacentHTML("afterend",s);var n=document.querySelector(".scValidatorPanel"),r=new MutationObserver((function(t){e=0;var s='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+a+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let t of u)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=t.getAttribute("src")&&(s+='<li class="scMessageBarOptionBullet" onclick="'+t.getAttribute("onclick")+'" style="cursor:pointer;">'+t.getAttribute("title")+"</li>",e++);if(s+="</ul></div></div>",e>0)i.insertAdjacentHTML("afterend",s);else{var n=document.getElementById("scMessageBarError");n&&n.parentNode.removeChild(n)}debug&&console.log("Changement: "+document.getElementsByClassName("scValidatorPanel"))}));if(n){r.observe(n,{attributes:!0,childList:!0,characterData:!0})}}}));var S=document.getElementById("EditorFrames");if(S){var C,k,R;S=S.getElementsByTagName("iframe"),e=0;for(let t of S)if(C=S[e].src,k=S[e],R=C.includes("/Media/"),e++,R){debug&&console.info("SRC of MEDIA IFRAME "+e+" - "+C);break}chrome.storage.sync.get(["feature_dragdrop"],(function(e){if(null==e.feature_dragdrop&&(e.feature_dragdrop=!0),R&&e.feature_dragdrop)k.onload=function(){var e='<iframe id="sitecorAuthorToolbox" class="sitecorAuthorToolbox" src="'+("/sitecore/client/Applications/Dialogs/UploadMediaDialog?fo=sitecore://master/{"+(C=(C=C.split("id=%7B"))[1].split("%7B"))[0]+"}")+'" style="width:100%; height:500px; margin-top: -60px; resize: vertical;"></iframe>';k.setAttribute("style","margin-top: -30px;");var t=document.getElementById("sitecorAuthorToolbox");t&&(t.remove(),debug&&console.info("Remove iFrame from DOM")),g.insertAdjacentHTML("afterbegin",e)};else{var t=document.getElementById("sitecorAuthorToolbox");t&&(t.remove(),debug&&console.info("Remove iFrame from DOM (no folder)"))}}))}window.Notification?"granted"===Notification.permission||Notification.requestPermission().then((function(e){"granted"===e||console.info("User blocked notifications.")})).catch((function(e){console.warn(e)})):console.info("Browser does not support notifications."),chrome.storage.sync.get(["feature_favorites"],(function(e){if(null==e.feature_favorites&&(e.feature_favorites=!0),e.feature_favorites&&!isPublishWindow&&p){var t=document.getElementById("sitecorAuthorToolboxFav");t&&t.remove();var a='<iframe id="sitecorAuthorToolboxFav" class="sitecorAuthorToolboxFav" src="'+("../default.aspx?xmlcontrol=Gallery.Favorites&id="+E+"&la="+_+"&vs=1")+'" style="width:100%; height:150px; margin-top: 0px; resize: vertical;"></iframe>';p.insertAdjacentHTML("afterend",a)}})),chrome.storage.sync.get(["feature_charscount"],(function(e){if(null==e.feature_charscount&&(e.feature_charscount=!0),e.feature_charscount){var t,a,s=document.querySelectorAll("input, textarea"),n=0;for(var r of s)"scContentControl"!=r.className&&"scContentControlMemo"!=r.className||(r.setAttribute("style","padding-right: 70px !important"),r.parentElement.setAttribute("style","position:relative !important"),n=r.value.length,a=n>1?n+" chars":n+" char",t='<div id="chars_'+r.id+'" style="position: absolute; bottom: 1px; right: 1px; padding: 6px 10px; border-radius: 4px; line-height: 20px; opacity:0.5;">'+a+"</div>",r.insertAdjacentHTML("afterend",t));document.addEventListener("keyup",(function(e){"input"!=e.target.localName&&"textarea"!=e.target.localName||(n=e.target.value.length,a=n>1?n+" chars":n+" char",debug&&console.log("chars_"+e.target.id+" -> "+a),document.querySelector("#chars_"+e.target.id).innerText=a)}),!1)}})),!0===debug&&(console.info("- Sitecore Item: "+E),console.info("- Sitecore Language: "+_),console.info("- Sitecore Version: *todo*"))}chrome.storage.sync.get(["feature_darkmode"],(function(e){if(null==e.feature_darkmode&&(e.feature_darkmode=!1),e.feature_darkmode&&!isExperienceEditor&&!isAdminCache&&!isSecurityWindow&&!isContentHome&&!isLoginPage&&!isEditMode){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/default-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/ribbon-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/contentmanager-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/dialogs-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/gallery-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/speak-min.css"),document.getElementsByTagName("head")[0].appendChild(t)}}));var MutationObserver=window.MutationObserver,elementObserver=new MutationObserver((function(e){debug&&console.info("**Update UI**");var t=document.querySelector(".scEditorHeaderQuickInfoInput");if(t){var a=t.getAttribute("value"),s=document.getElementById("scLanguage").getAttribute("value").toLowerCase(),n=document.querySelectorAll(".scEditorQuickInfo"),r=(n[n.length-1],n.length),o=document.getElementsByClassName("scEditorHeaderTitle"),i=document.querySelectorAll(".scEditorHeaderQuickInfoInput"),l=i[i.length-2].getAttribute("value");if(window.location.hash=a,debug&&console.log("- Tabs opened: "+r),r>1&&!document.getElementById("showInContentTree"+r)){var c=window.location.href;c=c.split("#");var d=c[0]+"&reload#"+l;o[r-1].insertAdjacentHTML("afterend",'[<a id="showInContentTree'+r+'" href="" onclick="javascript:window.location.href=\''+d+"'; return false;\" />Show in content tree</a>]")}chrome.storage.sync.set({scItemID:a},(function(){debug&&console.info(">> Store ItemID: "+a)})),chrome.storage.sync.set({scLanguage:s},(function(){debug&&console.info(">> Store Language: "+s)}))}e.forEach((function(e){"attributes"==e.type&&_addEnvironmentLabel()}))})),element=document.getElementById("scLanguage");if(element){debug&&console.info("**Reload**");var scLanguage=element.getAttribute("value").toLowerCase(),hash=window.location.hash.substr(1);if(""!=hash){var actualCode='scForm.invoke("item:load(id='+hash+",language="+scLanguage+',version=1)");';(script=document.createElement("script")).textContent=actualCode,(document.head||document.documentElement).appendChild(script),script.remove(),debug&&console.info(">> Hash -----\x3e  "+hash)}else chrome.storage.sync.get(["scItemID","feature_reloadnode"],(function(e){if(!chrome.runtime.error&&null!=e.scItemID&&(null==e.feature_reloadnode&&(e.feature_reloadnode=!0),e.scItemID&&1==e.feature_reloadnode)){var t='scForm.invoke("item:load(id='+e.scItemID+",language="+scLanguage+',version=1)");',a=document.createElement("script");a.textContent=t,(document.head||document.documentElement).appendChild(a),a.remove(),debug&&console.info(">> Resume from where you left -----\x3e  "+e.scItemID)}}));_addEnvironmentLabel(),elementObserver.observe(element,{attributes:!0})}var elementObserver2=new MutationObserver((function(e){e.forEach((function(e){"attributes"==e.type&&_addEnvironmentLabel()})),chrome.storage.sync.get(["feature_notification"],(function(e){if(null==e.feature_notification&&(e.feature_notification=!0),e.feature_notification){element2.getElementsByClassName("DialogHeader").item(0).innerHTML;sendNotification(element2.getElementsByClassName("sc-text-largevalue").item(0).innerHTML,element2.getElementsByClassName("scFieldLabel").item(0).innerHTML)}})),debug&&console.info("**Publish Done**")})),element2=document.getElementById("LastPage");element2&&(debug&&console.info("**Open dialog**"),_addEnvironmentLabel(),elementObserver2.observe(element2,{attributes:!0}));