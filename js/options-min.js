document.body.onload=function(){var e=chrome.runtime.getManifest();document.getElementById("scVersion").innerHTML=e.version;var t=new URL(window.location.href),r=t.searchParams.get("launchpad"),n=t.searchParams.get("url"),o=t.searchParams.get("configure_domains");r&&(document.getElementById("set").innerHTML="Save your preferences",document.getElementById("scHeader").style.display="inherit",document.getElementById("scBack").href=n,document.getElementById("banner").style.top="50px",document.getElementById("bannerTitle").style.opacity="1",document.getElementById("intro").style.marginTop="50px",document.getElementById("video").style.display="inherit"),"true"==o&&(document.querySelector("#settings").click(),document.querySelector("#video").setAttribute("style","display:none")),chrome.storage.sync.get(["domain_manager"],(function(e){if(!chrome.runtime.error){if(null!=e.domain_manager)var t=Object.keys(e.domain_manager);for(var r,n,o="",c=0;c<6;c++)null!=e.domain_manager&&(r=t[c],n=e.domain_manager[r],null==r&&(r=""),null==n&&(n="")),o+='\x3c!-- loop start --\x3e\n              <div class="cm_url">\n                \x3c!-- <label for="cm['+c+']">CM<b>*</b>:</label> --\x3e\n                <input name="cm['+c+']" type="url" placeholder="CM URL" pattern="https?://.*" value="'+r+'">\n              </div>\n\n              <div id="arrow">&nbsp;</div>\n\n              <div class="cd_url">\n                \x3c!-- <label for="cd['+c+']">Live or CD<b>*</b>:</label> --\x3e\n                <input name="cd['+c+']" type="url" placeholder="CD or Live URL" pattern="https?://.*" value="'+n+'">\n              </div>\n            \n              <div id="clear"></div>\n              \x3c!-- loop end --\x3e';document.querySelector("#load").innerHTML=o}})),chrome.storage.sync.get(["feature_urls"],(function(e){chrome.runtime.error||null==e.feature_urls?document.getElementById("feature_urls").checked=!0:e.feature_urls&&(document.getElementById("feature_urls").checked=!0)})),chrome.storage.sync.get(["feature_flags"],(function(e){chrome.runtime.error||null==e.feature_flags?document.getElementById("feature_flags").checked=!0:e.feature_flags&&(document.getElementById("feature_flags").checked=!0)})),chrome.storage.sync.get(["feature_errors"],(function(e){chrome.runtime.error||null==e.feature_errors?document.getElementById("feature_errors").checked=!0:e.feature_errors&&(document.getElementById("feature_errors").checked=!0)})),chrome.storage.sync.get(["feature_dragdrop"],(function(e){chrome.runtime.error||null==e.feature_dragdrop?document.getElementById("feature_dragdrop").checked=!0:e.feature_dragdrop&&(document.getElementById("feature_dragdrop").checked=!0)})),chrome.storage.sync.get(["feature_notification"],(function(e){chrome.runtime.error||null==e.feature_notification?document.getElementById("feature_notification").checked=!0:e.feature_notification&&(document.getElementById("feature_notification").checked=!0)})),chrome.storage.sync.get(["feature_darkmode"],(function(e){chrome.runtime.error||null==e.feature_darkmode?(document.getElementById("feature_darkmode").checked=!1,document.querySelector("#extensionOptions").classList.add("light"),document.querySelector("#save").classList.add("light"),document.querySelector("#footer").classList.add("light")):e.feature_darkmode&&(document.getElementById("feature_darkmode").checked=!0,document.querySelector("#extensionOptions").classList.add("dark"),document.querySelector("#save").classList.add("dark"),document.querySelector("#footer").classList.add("dark"))})),chrome.storage.sync.get(["feature_favorites"],(function(e){chrome.runtime.error||null==e.feature_favorites?document.getElementById("feature_favorites").checked=!0:e.feature_favorites&&(document.getElementById("feature_favorites").checked=!0)})),chrome.storage.sync.get(["feature_reloadnode"],(function(e){chrome.runtime.error||null==e.feature_reloadnode?document.getElementById("feature_reloadnode").checked=!0:e.feature_reloadnode&&(document.getElementById("feature_reloadnode").checked=!0)})),chrome.storage.sync.get(["feature_launchpad"],(function(e){chrome.runtime.error||null==e.feature_launchpad?document.getElementById("feature_launchpad").checked=!0:e.feature_launchpad&&(document.getElementById("feature_launchpad").checked=!0)})),chrome.storage.sync.get(["feature_rtl"],(function(e){chrome.runtime.error||null==e.feature_rtl?document.getElementById("feature_rtl").checked=!0:e.feature_rtl&&(document.getElementById("feature_rtl").checked=!0)})),chrome.storage.sync.get(["feature_charscount"],(function(e){chrome.runtime.error||null==e.feature_charscount?document.getElementById("feature_charscount").checked=!0:e.feature_charscount&&(document.getElementById("feature_charscount").checked=!0)})),chrome.storage.sync.get(["feature_autoexpand"],(function(e){chrome.runtime.error||null==e.feature_autoexpand?document.getElementById("feature_autoexpand").checked=!0:e.feature_autoexpand&&(document.getElementById("feature_autoexpand").checked=!0)})),chrome.storage.sync.get(["feature_translatemode"],(function(e){chrome.runtime.error||null==e.feature_translatemode?document.getElementById("feature_translatemode").checked=!0:e.feature_translatemode&&(document.getElementById("feature_translatemode").checked=!0)})),chrome.storage.sync.get(["feature_toggleribbon"],(function(e){chrome.runtime.error||null==e.feature_toggleribbon?document.getElementById("feature_toggleribbon").checked=!0:e.feature_toggleribbon&&(document.getElementById("feature_toggleribbon").checked=!0)})),chrome.storage.sync.get(["feature_cetabs"],(function(e){chrome.runtime.error||null==e.feature_cetabs?document.getElementById("feature_cetabs").checked=!1:e.feature_cetabs&&(document.getElementById("feature_cetabs").checked=!0)})),chrome.storage.sync.get(["feature_rtecolor"],(function(e){chrome.runtime.error||null==e.feature_rtecolor?document.getElementById("feature_rtecolor").checked=!0:e.feature_rtecolor&&(document.getElementById("feature_rtecolor").checked=!0)})),chrome.storage.sync.get(["feature_messagebar"],(function(e){chrome.runtime.error||null==e.feature_messagebar?document.getElementById("feature_messagebar").checked=!0:e.feature_messagebar&&(document.getElementById("feature_messagebar").checked=!0)})),chrome.storage.sync.get(["feature_workbox"],(function(e){chrome.runtime.error||null==e.feature_workbox?document.getElementById("feature_workbox").checked=!0:e.feature_workbox&&(document.getElementById("feature_workbox").checked=!0)})),chrome.storage.sync.get(["feature_urlstatus"],(function(e){chrome.runtime.error||null==e.feature_urlstatus?document.getElementById("feature_urlstatus").checked=!0:e.feature_urlstatus&&(document.getElementById("feature_urlstatus").checked=!0)}))},document.querySelector("#settings").onclick=function(){document.querySelector("#main").setAttribute("style","display:none"),document.querySelector("#domains").setAttribute("style","display:block"),document.querySelector("#save").setAttribute("style","display:none")},document.querySelector("#back").onclick=function(){var e=new URL(window.location.href),t=e.searchParams.get("configure_domains"),r=e.searchParams.get("url");"true"==t?(window.open(r),window.close()):(document.querySelector("#main").setAttribute("style","display:block"),document.querySelector("#domains").setAttribute("style","display:none"),document.querySelector("#save").setAttribute("style","display:block"))},document.querySelector("#set_domains").onclick=function(e){e.preventDefault();var t,r,n,o=document.querySelectorAll("form#domains input"),c=1,a="{",u=!1,d=!0;for(var l of o){var s="";if(l.setAttribute("style",""),t=parseInt(l.name.split("[")[1].replace("]","")),r=document.querySelector("input[name='cm["+t+"]']"),n=document.querySelector("input[name='cd["+t+"]']"),c%2==1){if(""!=r.value&&""==n.value)n.setAttribute("style","border-color:red"),alert("CD #"+parseInt(t+1)+" is missing"),u=!0;else if(""!=l.value){d=!1;try{s=new URL(l.value)}catch(e){r.setAttribute("style","border-color:red"),alert("CM #"+parseInt(t+1)+" is not a valid URL"),u=!0}}null!=s.origin&&(r.value=s.origin)}else{if(""==r.value&&""!=n.value)alert("CM #"+parseInt(t+1)+" is missing"),u=!0;else if(""!=l.value){d=!1;try{s=new URL(l.value)}catch(e){n.setAttribute("style","border-color:red"),alert("CD #"+parseInt(t+1)+" is not a valid URL"),u=!0}}null!=s.origin&&(n.value=s.origin,r.value==n.value?(alert("CM #"+parseInt(t+1)+" and CD #"+parseInt(t+1)+" are the exact same URL, please verify."),u=!0):a+='"'+r.value+'":"'+n.value+'",')}c++}if("undefined"!=(a=(a+="}").replace(",}","}").replace("{}",void 0))){var m=JSON.parse(a);console.log(m)}1==d&&(m=""),0==u&&chrome.storage.sync.set({domain_manager:m},(function(){document.querySelector("#set_domains").innerHTML="Saving...",setTimeout((function(){document.querySelector("#set_domains").innerHTML="OK!"}),1e3),setTimeout((function(){document.querySelector("#set_domains").innerHTML="Save your domains"}),1500),console.info("--\x3e Domain manager: Saved!")}))},document.querySelector("#set").onclick=function(){chrome.storage.sync.set({feature_urls:document.getElementById("feature_urls").checked},(function(){console.info("--\x3e Urls: "+document.getElementById("feature_urls").checked)})),chrome.storage.sync.set({feature_flags:document.getElementById("feature_flags").checked},(function(){console.info("--\x3e Flags: "+document.getElementById("feature_flags").checked)})),chrome.storage.sync.set({feature_errors:document.getElementById("feature_errors").checked},(function(){console.info("--\x3e Errors: "+document.getElementById("feature_errors").checked)})),chrome.storage.sync.set({feature_dragdrop:document.getElementById("feature_dragdrop").checked},(function(){console.info("--\x3e Drag and drop: "+document.getElementById("feature_dragdrop").checked)})),chrome.storage.sync.set({feature_notification:document.getElementById("feature_notification").checked},(function(){console.info("--\x3e Notifications: "+document.getElementById("feature_notification").checked)})),chrome.storage.sync.set({feature_darkmode:document.getElementById("feature_darkmode").checked},(function(){if(console.info("--\x3e Dark mode:"+document.getElementById("feature_darkmode").checked),document.getElementById("feature_darkmode").checked){var e=document.getElementById("extensionOptions");e.classList.remove("light"),e.classList.add("dark")}else(e=document.getElementById("extensionOptions")).classList.remove("dark"),e.classList.add("light")})),chrome.storage.sync.set({feature_favorites:document.getElementById("feature_favorites").checked},(function(){console.info("--\x3e Favorites: "+document.getElementById("feature_favorites").checked)})),chrome.storage.sync.set({feature_reloadnode:document.getElementById("feature_reloadnode").checked},(function(){console.info("--\x3e Reload: "+document.getElementById("feature_reloadnode").checked)})),chrome.storage.sync.set({feature_launchpad:document.getElementById("feature_launchpad").checked},(function(){console.info("--\x3e Launchpad: "+document.getElementById("feature_launchpad").checked)})),chrome.storage.sync.set({feature_rtl:document.getElementById("feature_rtl").checked},(function(){console.info("--\x3e RTL: "+document.getElementById("feature_rtl").checked)})),chrome.storage.sync.set({feature_charscount:document.getElementById("feature_charscount").checked},(function(){console.info("--\x3e Character counter: "+document.getElementById("feature_charscount").checked)})),chrome.storage.sync.set({feature_autoexpand:document.getElementById("feature_autoexpand").checked},(function(){console.info("--\x3e Auto Expand: "+document.getElementById("feature_autoexpand").checked)})),chrome.storage.sync.set({feature_translatemode:document.getElementById("feature_translatemode").checked},(function(){console.info("--\x3e Translation Mode: "+document.getElementById("feature_translatemode").checked)})),chrome.storage.sync.set({feature_toggleribbon:document.getElementById("feature_toggleribbon").checked},(function(){console.info("--\x3e Toggle Button: "+document.getElementById("feature_toggleribbon").checked)})),chrome.storage.sync.set({feature_cetabs:document.getElementById("feature_cetabs").checked},(function(){console.info("--\x3e CE Tabs: "+document.getElementById("feature_cetabs").checked)})),chrome.storage.sync.set({feature_rtecolor:document.getElementById("feature_rtecolor").checked},(function(){console.info("--\x3e RTE Color: "+document.getElementById("feature_rtecolor").checked)})),chrome.storage.sync.set({feature_messagebar:document.getElementById("feature_messagebar").checked},(function(){console.info("--\x3e Fancy message bar: "+document.getElementById("feature_messagebar").checked)})),chrome.storage.sync.set({feature_workbox:document.getElementById("feature_workbox").checked},(function(){console.info("--\x3e Workflow notifications: "+document.getElementById("feature_workbox").checked)})),chrome.storage.sync.set({feature_urlstatus:document.getElementById("feature_urlstatus").checked},(function(){console.info("--\x3e Live Urls Status: "+document.getElementById("feature_urlstatus").checked)}));var e=new URL(window.location.href).searchParams.get("launchpad");console.log("Launchpad: "+e),e?(document.querySelector("#set").innerHTML="Saving...",setTimeout((function(){document.querySelector("#set").innerHTML="OK!"}),1e3),setTimeout((function(){document.querySelector("#set").innerHTML="Save your preferences"}),1500)):chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.executeScript(e[0].id,{code:"window.location.reload();"}),document.querySelector("#set").innerHTML="Saving...",setTimeout((function(){document.querySelector("#set").innerHTML="Save and reload sitecore"}),1e3)}))};let last_known_scroll_position=0,ticking=!1;function doSomething(e){var t=document.getElementById("banner");e>=90?t.classList.add("animate"):t.classList.remove("animate")}window.addEventListener("scroll",(function(e){last_known_scroll_position=window.scrollY;var t=new URL(window.location.href).searchParams.get("launchpad");ticking||t||(window.requestAnimationFrame((function(){doSomething(last_known_scroll_position),ticking=!1})),ticking=!0)}));