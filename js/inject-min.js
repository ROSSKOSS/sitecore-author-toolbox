scContentEditor.prototype.onTreeNodeClick=function(e,t){return setTimeout((function(){scForm.postRequest("","","",'LoadItem("'+t+'")')}),1e3),!1};const copyTranslate=(e,t)=>{var o=document.querySelector("#"+e),r=document.querySelector("#"+t);o.value=r.value},copyTranslateAll=()=>{var e=document.querySelectorAll(".scTranslateRTL");for(var t of e)t.click()},toggleRibbon=()=>{var e=document.querySelector("#scCrossPiece"),t=document.querySelector("#scWebEditRibbon"),o=document.querySelector(".scExpTab").querySelector(".tabText");"display:none !important"!=t.getAttribute("style")?(e.setAttribute("style","height:0px !important"),t.setAttribute("style","display:none !important"),o.innerText="▼ Show"):(e.setAttribute("style","height:300px !important"),t.setAttribute("style","display:block !important"),o.innerText="▲ Hide")},toggleSection=(e,t,o=!1)=>{var r=document.querySelectorAll(".scEditorTab"),i=document.querySelector("#scSections");for(var s of(i.value=encodeURI(t+"=0"),r)){var c=s.dataset.id,l=document.querySelector("#"+c),n=l.nextSibling;if(s!=e)s.classList.remove("scEditorTabSelected"),n.setAttribute("style","display: none !important"),l.classList.add("scEditorSectionCaptionCollapsed"),l.classList.remove("scEditorSectionCaptionExpanded"),i.value+=encodeURI("&"+s.innerText+"=1");else{s.classList.add("scEditorTabSelected"),n.setAttribute("style","display: table !important"),l.classList.remove("scEditorSectionCaptionCollapsed"),l.classList.add("scEditorSectionCaptionExpanded");let e=document.querySelector("#scEditorTabs").getBoundingClientRect(),t=e.left,o=e.right,r=e.width/2+t,i=s.getBoundingClientRect(),c=document.querySelector("#scEditorTabs > ul"),a=c.currentStyle||window.getComputedStyle(c);a=parseFloat(a.marginLeft.replace("px",""));let u=c.getBoundingClientRect(),d=c.scrollWidth,y=Math.round(a+(r-i.left)),m=Math.round(u.left+d+(r-i.left));m<o&&(y=Math.round(y+(o-m))),y>0&&(y=0),c.setAttribute("style","margin-left: "+y+"px")}}},toggleMediaIframe=e=>{scSitecore.prototype.showModalDialog(e,"","dialogWidth:1200px;dialogHeight:700px;help:no;scroll:auto;resizable:yes;maximizable:yes;closable:yes;center:yes;status:no;header:;autoIncreaseHeight:yes;forceDialogSize:no","","")},fadeEditorFrames=()=>{document.querySelector(".scInstantSearchResults").setAttribute("style","height:0px; opacity: 0; visibility: hidden; top: 43px;"),document.querySelector("#EditorFrames").setAttribute("style","opacity:0.6"),document.querySelector(".scContentTreeContainer").setAttribute("style","opacity:0.6"),document.querySelector(".scEditorTabHeaderActive > span").innerText="Loading...";setTimeout((function(){document.querySelector("#EditorFrames").setAttribute("style","opacity:1"),document.querySelector(".scContentTreeContainer").setAttribute("style","opacity:1")}),8e3)},insertPage=(e,t)=>{document.querySelector(".scOverlay").setAttribute("style","visibility:visible"),document.querySelector("#scModal").setAttribute("data-scItem",e),document.querySelector("#scModal").setAttribute("data-scItemName",t),null!=t&&(document.querySelector("#scModal > .header > .title").innerHTML="Insert"),document.querySelector("#scModal").setAttribute("style","opacity:1; visibility:visible; top: calc(50% - 550px/2)"),document.querySelector("#scModal > .main").innerHTML="",document.querySelector("#scModal > .preload").setAttribute("style","opacity:1")},insertPageClose=()=>{setTimeout((function(){document.querySelector(".scOverlay").setAttribute("style","visibility:hidden"),document.querySelector("#scModal").setAttribute("style","opacity:0; visibility:hidden; top: calc(50% - 550px/2 - 20px)")}),10)},showSitecoreMenu=()=>{let e=document.querySelector(".scDockTop");e.classList.toggle("showSitecoreMenu"),document.querySelector("#scSitecoreMenu").classList.toggle("scSitecoreMenu"),e.classList.contains("showSitecoreMenu")?localStorage.setItem("scSitecoreMenu",!0):localStorage.setItem("scSitecoreMenu",!1)},showLanguageMenu=()=>{console.log("Languages")};