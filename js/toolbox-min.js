var debug=!1;function stripHtml(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}function sendNotification(e,t){new Notification(e,{body:t,icon:chrome.runtime.getURL("images/icon.png")})}var link=document.createElement("link");link.type="text/css",link.rel="stylesheet",link.href=chrome.runtime.getURL("css/onload-min.css"),document.getElementsByTagName("head")[0].appendChild(link),debug&&console.info("***** URL loaded ***** "+window.location);var isGalleryLanguage=window.location.href.includes("Gallery.Language"),isGalleryFavorites=window.location.href.includes("Gallery.Favorites"),isAdminCache=window.location.href.includes("/admin/cache.aspx"),isMediaBrowser=window.location.href.includes("Sitecore.Shell.Applications.Media.MediaBrowser"),isPublishWindow=window.location.href.includes("/shell/Applications/Publish.aspx"),isSecurityWindow=window.location.href.includes("/shell/Applications/Security/"),isExperienceEditor=window.location.href.includes("/Applications/ExperienceEditor/"),isContentHome=window.location.href.includes("/content/home"),isLoginPage=window.location.href.includes("sitecore/login");if(isGalleryLanguage)debug&&console.info("====================> LANGUAGES <===================="),chrome.storage.sync.get(["feature_flags"],(function(e){if(null==e.feature_flags&&(e.feature_flags=!0),e.feature_flags){var t,a=new XMLHttpRequest;a.overrideMimeType("application/json"),a.open("GET",chrome.runtime.getURL("data/languages.json"),!0),a.onreadystatechange=function(){if(4===a.readyState&&"200"==a.status){t=JSON.parse(a.responseText);var e,s,r,n,o,i=document.getElementById("Languages").querySelectorAll(".scMenuPanelItem,.scMenuPanelItemSelected"),l=0;for(let a of i){l=0,e=a.getElementsByTagName("td");for(let a of e){if(0==l)r=a.getElementsByTagName("img");else{if(s=(s=a.getElementsByTagName("b"))[0].innerHTML,"0"!=a.getElementsByTagName("div")[2].innerHTML.split(" ")[0]&&(n=a.getElementsByTagName("div"))[2].setAttribute("style","background-color: yellow; display: initial; padding: 0px 3px; color: #000000 !important"),s.includes("(region)"))for(o in s=s.split(" (region"),t)t.hasOwnProperty(o)&&s[0].toUpperCase()==t[o].language.toUpperCase()&&(s=t[o].flag);else(n=(n=(n=null==(n=s.split(" ("))[1]?n[0]:n[1]).split(")"))[0].split(" :"))[0].includes(", ")&&((n=n[0].split(", "))[0]=n[1],n[0]=n[0].replace(" ","_")),s=(s=(s=(s=(s=(s=(s=(n=(n=n[0].replace(" ","_")).toUpperCase()).replace("TRADITIONAL,_","")).replace("SIMPLIFIED,_","")).replace("U.A.E.","UNITED_ARAB_EMIRATES")).replace("KOREA","SOUTH_KOREA")).replace("UNITED_STATES","USA")).replace("UNITED_KINGDOM","GREAT_BRITAIN")).replace("ENGLISH","GREAT_BRITAIN");s=s.toLowerCase(),r[0].onerror=function(){this.src=chrome.runtime.getURL("images/Flags/32x32/flag_generic.png")},r[0].src=chrome.runtime.getURL("images/Flags/32x32/flag_"+s+".png")}l++}0}}},a.send(null)}}));else if(isPublishWindow){debug&&console.info("====================> PUBLISH WINDOW <====================");var dom=document.getElementById("Languages");console.log(dom);var label=dom.getElementsByTagName("label");for(let e of label);}else isGalleryFavorites?debug&&console.info("====================> FAVORITES <===================="):isMediaBrowser?debug&&console.info("====================> MEDIA BROWSER <===================="):isAdminCache&&debug&&console.info("====================> ADMIN CACHE <====================");function _addEnvironmentLabel(){var e=0,t=chrome.runtime.getURL("images/rocket.png"),a=chrome.runtime.getURL("images/error.png"),s=chrome.runtime.getURL("images/edit.png"),r=chrome.runtime.getURL("images/Flags/32x32/flag_generic.png"),n=chrome.runtime.getURL("data/languages.json");let o=document.querySelector(".scEditorHeader");document.querySelector(".scEditorHeaderTitle");document.getElementsByClassName("scEditorQuickInfo");let i=document.querySelector(".scEditorHeaderQuickInfoInput"),l=document.querySelector(".scEditorHeaderVersionsLanguage"),c=document.querySelector(".scEditorTabHeaderActive");var d=document.getElementsByClassName("scValidationMarkerIcon");let g=document.querySelector("#EditorFrames"),u=(document.getElementById("SearchPanel"),document.getElementById("ContentTreeHolder"));if(i){var m=document.getElementsByClassName("scEditorHeaderQuickInfoInput"),f=m[0].getAttribute("value"),p=m[1].getAttribute("value"),h=p,v=!1,y=(p=p.split("/Home/"))[0];y=(y=y.split("/")).slice(-1)[0],"Data"==(m=h.split("/"))[m.length-1]&&(v=!0);var E,b=document.getElementById("scLanguage").getAttribute("value").toLowerCase(),I=window.location.origin+"/?sc_itemid="+f+"&sc_mode=normal&sc_lang="+b+"&sc_site="+y,_=(m=document.getElementsByClassName("scEditorHeaderVersionsLanguage"))[0].getAttribute("title"),B=stripHtml(m[0].innerHTML),T=B.includes("("),L=(p=null!=p[1]?encodeURI(window.location.origin+"/"+b+"/"+p[1]+"?sc_site="+y+"&sc_mode=normal").toLowerCase():encodeURI(window.location.origin+"/"+b+"/?sc_site="+y).toLowerCase()).includes("/data/");v||p==encodeURI(window.location.origin+"/"+b+"/?sc_site="+y).toLowerCase()||L||chrome.storage.sync.get(["feature_urls"],(function(e){if(null==e.feature_urls&&(e.feature_urls=!0),!document.getElementById("scMessageBarUrl")&&e.feature_urls){var a='<div id="scMessageBarUrl" class="scMessageBar scWarning"><div class="scMessageBarIcon" style="background-image:url('+t+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">Sitecore Live URL</div><div class="scMessageBarText">If you want to preview this page in <b>'+_+'</b></div><ul class="scMessageBarOptions" style="margin:0px"><li class="scMessageBarOptionBullet"><a href="'+p+'" target="_blank" class="scMessageBarOption">Open this link</a> or try <a href="'+I+'" target="_blank" class="scMessageBarOption">this alternative link</a></li></ul></div></div>';o.insertAdjacentHTML("afterend",a)}})),L&&(p=p.split("/data/"),chrome.storage.sync.get(["feature_urls"],(function(e){if(null==e.feature_urls&&(e.feature_urls=!0),!document.getElementById("scMessageBarInfo")&&e.feature_urls){var t='<div id="scMessageBarInfo" class="scMessageBar scInformation"><div class="scMessageBarIcon" style="background-image:url('+s+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">You are editing a data source...</div><div class="scMessageBarText">To see it, you need to add/edit it to your page via the</b></div><ul class="scMessageBarOptions" style="margin:0px"><li class="scMessageBarOptionBullet"><a href="'+p[0]+'?sc_mode=edit" target="_blank" class="scMessageBarOption">Experience Editor</a></li></ul></div></div>';o.insertAdjacentHTML("afterend",t)}}))),chrome.storage.sync.get(["feature_flags"],(function(e){if(null==e.feature_flags&&(e.feature_flags=!0),T)(m=(m=(m=null==(m=B.split(" ("))[1]?m[0]:m[1]).split(")"))[0].split(" :"))[0].includes(", ")&&((m=m[0].split(", "))[0]=m[1],m[0]=m[0].replace(" ","_")),m=(m=m[0].replace(" ","_")).toUpperCase(),E=(E=m.replace("TRADITIONAL,_","")).replace("SIMPLIFIED,_",""),debug&&console.log("Flag:"+E),E=(E=(E=(E=(E=(E=E.replace("U.A.E.","UNITED_ARAB_EMIRATES")).replace("KOREA","SOUTH_KOREA")).replace("UNITED_STATES","USA")).replace("UNITED_KINGDOM","GREAT_BRITAIN")).replace("ENGLISH","GREAT_BRITAIN")).toLowerCase(),E=chrome.runtime.getURL("images/Flags/32x32/flag_"+E+".png"),!document.getElementById("scFlag")&&e.feature_flags&&E&&c.insertAdjacentHTML("afterbegin",'<img id="scFlag" src="'+E+'" style="width: 20px; vertical-align: middle; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+r+"';\"/>"),e.feature_flags&&E&&l.insertAdjacentHTML("afterbegin",'<img id="scFlag" src="'+E+'" style="width: 15px; vertical-align: sub; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+r+"';\"/>");else if(e.feature_flags){var t=new XMLHttpRequest;t.overrideMimeType("application/json"),t.open("GET",n,!0),t.onreadystatechange=function(){if(4===t.readyState&&"200"==t.status){var a,s=JSON.parse(t.responseText);for(a in s)s.hasOwnProperty(a)&&B.toUpperCase()==s[a].language.toUpperCase()&&(E=(E=s[a].flag).toLowerCase(),E=chrome.runtime.getURL("images/Flags/32x32/flag_"+E+".png"),debug&&console.log("Flag:"+E),!document.getElementById("scFlag")&&e.feature_flags&&E&&c.insertAdjacentHTML("afterbegin",'<img id="scFlag" src="'+E+'" style="width: 20px; vertical-align: middle; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+r+"';\"/>"),e.feature_flags&&E&&l.insertAdjacentHTML("afterbegin",'<img id="scFlag" src="'+E+'" style="width: 15px; vertical-align: sub; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+r+"';\"/>"))}},t.send(null)}}))}chrome.storage.sync.get(["feature_errors"],(function(t){if(null==t.feature_errors&&(t.feature_errors=!0),null!=d[0]&&t.feature_errors){e=0;var s='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+a+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let t of d)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=t.getAttribute("src")&&(s+='<li class="scMessageBarOptionBullet" onclick="'+t.getAttribute("onclick")+'" style="cursor:pointer;">'+t.getAttribute("title")+"</li>",e++);s+="</ul></div></div>",e>0&&o.insertAdjacentHTML("afterend",s);var r=document.querySelector(".scValidatorPanel");new MutationObserver((function(t){e=0;var s='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+a+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let t of d)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=t.getAttribute("src")&&(s+='<li class="scMessageBarOptionBullet" onclick="'+t.getAttribute("onclick")+'" style="cursor:pointer;">'+t.getAttribute("title")+"</li>",e++);if(s+="</ul></div></div>",e>0)o.insertAdjacentHTML("afterend",s);else{var r=document.getElementById("scMessageBarError");r&&r.parentNode.removeChild(r)}debug&&console.log("Changement: "+document.getElementsByClassName("scValidatorPanel"))})).observe(r,{attributes:!0,childList:!0,characterData:!0})}}));var M=document.getElementById("EditorFrames");if(M){var A,x,w;M=M.getElementsByTagName("iframe"),e=0;for(let t of M)if(A=M[e].src,x=M[e],w=A.includes("/Media/"),e++,w){debug&&console.info("SRC of MEDIA IFRAME "+e+" - "+A);break}chrome.storage.sync.get(["feature_dragdrop"],(function(e){if(null==e.feature_dragdrop&&(e.feature_dragdrop=!0),w&&e.feature_dragdrop)x.onload=function(){var e='<iframe id="sitecorAuthorToolbox" class="sitecorAuthorToolbox" src="'+("/sitecore/client/Applications/Dialogs/UploadMediaDialog?fo=sitecore://master/{"+(A=(A=A.split("id=%7B"))[1].split("%7B"))[0]+"}")+'" style="width:100%; height:500px; margin-top: -60px; resize: vertical;"></iframe>';x.setAttribute("style","margin-top: -30px;");var t=document.getElementById("sitecorAuthorToolbox");t&&(t.remove(),debug&&console.info("Remove iFrame from DOM")),g.insertAdjacentHTML("afterbegin",e)};else{var t=document.getElementById("sitecorAuthorToolbox");t&&(t.remove(),debug&&console.info("Remove iFrame from DOM (no folder)"))}}))}window.Notification?"granted"===Notification.permission||Notification.requestPermission().then((function(e){"granted"===e||console.info("User blocked notifications.")})).catch((function(e){console.warn(e)})):console.info("Browser does not support notifications."),chrome.storage.sync.get(["feature_favorites"],(function(e){if(null==e.feature_favorites&&(e.feature_favorites=!0),e.feature_favorites&&!isPublishWindow){var t=document.getElementById("sitecorAuthorToolboxFav");t&&t.remove();var a='<iframe id="sitecorAuthorToolboxFav" class="sitecorAuthorToolboxFav" src="'+("../default.aspx?xmlcontrol=Gallery.Favorites&id="+f+"&la="+b+"&vs=1")+'" style="width:100%; height:150px; margin-top: 0px; resize: vertical;"></iframe>';u.insertAdjacentHTML("afterend",a)}})),!0===debug&&(console.info("Item ID: "+f),console.info("Language: "+b),console.info("Version: na"))}chrome.storage.sync.get(["feature_darkmode"],(function(e){if(null==e.feature_darkmode&&(e.feature_darkmode=!1),e.feature_darkmode&&!isExperienceEditor&&!isAdminCache&&!isSecurityWindow&&!isContentHome&&!isLoginPage){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/default-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/ribbon-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/contentmanager-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/dialogs-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/gallery-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/speak-min.css"),document.getElementsByTagName("head")[0].appendChild(t)}}));var MutationObserver=window.MutationObserver,elementObserver=new MutationObserver((function(e){debug&&console.info("**Update UI**");var t=document.getElementsByClassName("scEditorHeaderQuickInfoInput")[0].getAttribute("value"),a=document.getElementById("scLanguage").getAttribute("value").toLowerCase();chrome.storage.sync.set({scItemID:t},(function(){debug&&console.info(">> Store ItemID: "+t)})),chrome.storage.sync.set({scLanguage:a},(function(){debug&&console.info(">> Store Language: "+a)})),e.forEach((function(e){"attributes"==e.type&&_addEnvironmentLabel()}))})),element=document.getElementById("scLanguage");if(element){debug&&console.info("**Reload**");var scLanguage=element.getAttribute("value").toLowerCase();chrome.storage.sync.get(["scItemID","feature_reloadnode"],(function(e){if(!chrome.runtime.error&&null!=e.scItemID&&(null==e.feature_reloadnode&&(e.feature_reloadnode=!0),e.scItemID&&1==e.feature_reloadnode)){var t='scForm.invoke("item:load(id='+e.scItemID+",language="+scLanguage+',version=1)");',a=document.createElement("script");a.textContent=t,(document.head||document.documentElement).appendChild(a),a.remove(),debug&&console.info(">> User Preference -----\x3e "+e.feature_reloadnode),debug&&console.info(">> GoTo ItemID -----\x3e  "+e.scItemID)}})),_addEnvironmentLabel(),elementObserver.observe(element,{attributes:!0})}var elementObserver2=new MutationObserver((function(e){e.forEach((function(e){"attributes"==e.type&&_addEnvironmentLabel()})),chrome.storage.sync.get(["feature_notification"],(function(e){if(null==e.feature_notification&&(e.feature_notification=!0),e.feature_notification){element2.getElementsByClassName("DialogHeader").item(0).innerHTML;sendNotification(element2.getElementsByClassName("sc-text-largevalue").item(0).innerHTML,element2.getElementsByClassName("scFieldLabel").item(0).innerHTML)}})),debug&&console.info("**Publish Done**")})),element2=document.getElementById("LastPage");element2&&(debug&&console.info("**Open dialog**"),_addEnvironmentLabel(),elementObserver2.observe(element2,{attributes:!0}));