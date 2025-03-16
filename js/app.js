/**
 * Sitecore Author Toolbox
 * A Chrome/Edge Extension
 * by Ugo Quaisse
 * https://uquaisse.io
 * ugo.quaisse@gmail.com
 */

const windowLocationHref = window.location.href.replace(/&amp;/g, "&").toLowerCase();
const isSitecore = windowLocationHref.includes("/sitecore/");

(async () => {
  try {
    if (isSitecore) {
      console.log("SAT: Loading..." + window.satHasRun);
      const contentScript = await import(chrome.runtime.getURL("js/toolbox.min.js"));
      contentScript?.main();
    }
  } catch (e) {}
})();
