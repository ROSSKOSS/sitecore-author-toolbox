"use strict";let sxa_site,sc_site,isContextMenu=!1;function checkSiteSxa(e,t,n){var o=new URL(t.tab.url);chrome.cookies.getAll({},(function(e){for(var t in e)if(e[t].domain==o.hostname&&"sxa_site"==e[t].name&&"login"!=e[t].value){n({farewell:e[t].value});break}n({farewell:null})}))}function onClickHandler(e,t){var n=e.pageUrl.substring(0,e.pageUrl.indexOf("?"));sc_site=null!=sxa_site?"&sc_site="+sxa_site:"","SitecoreAuthorToolbox"==e.menuItemId?chrome.tabs.executeScript(t.id,{code:'window.location.href = "'+n+"?sc_mode=edit"+sc_site+'";'}):"SitecoreAuthorToolboxDebug"==e.menuItemId&&chrome.tabs.executeScript(t.id,{code:'window.location.href = "'+n+"?sc_debug=1&sc_trace=1&sc_prof=1&sc_ri=1"+sc_site+'";'})}function showContextMenu(e){if(null!=e.url){var t=e.url.includes("/sitecore/");if(!e.url.includes("chrome://")){var n=new URL(e.url);chrome.cookies.getAll({},(function(e){for(var o in e){if(n.hostname==e[o].domain&&"shell#lang"==e[o].name&&!t){isContextMenu||(chrome.contextMenus.create({title:"Edit in Experience Editor (beta)",contexts:["page"],id:"SitecoreAuthorToolbox"}),isContextMenu=!0);break}isContextMenu&&(chrome.contextMenus.remove("SitecoreAuthorToolbox"),isContextMenu=!1)}for(o in e)n.hostname==e[o].domain&&"sxa_site"==e[o].name&&(sxa_site=e[o].value)}))}}}chrome.runtime.onMessage.addListener((function(e,t,n){return"sxa_site"==e.greeting&&checkSiteSxa(e,t,n),!0})),chrome.tabs.onUpdated.addListener((function(e,t,n){chrome.tabs.getSelected(null,(function(e){showContextMenu(e)}))})),chrome.tabs.onActivated.addListener((function(e,t,n){chrome.tabs.getSelected(null,(function(e){}))})),chrome.runtime.onInstalled.addListener((function(){chrome.contextMenus.onClicked.addListener(onClickHandler),chrome.declarativeContent.onPageChanged.removeRules(void 0,(function(){chrome.declarativeContent.onPageChanged.addRules([{conditions:[new chrome.declarativeContent.PageStateMatcher({pageUrl:{urlContains:"/sitecore/"}}),new chrome.declarativeContent.PageStateMatcher({css:[".pagemode-edit"]})],actions:[new chrome.declarativeContent.ShowPageAction]}])}))}));