import { initializeNav } from "./nav";
import { initializeTerminal } from "./terminal/init";
import { CookieBanner } from "./cookiebanner.min.js";
import { ImageViewer } from "./imgviewer";

const options = {
  message:
    "We use cookies to enhance your experience. If you continue to use this website, you consent.",
  moreinfo: "https://gdpr.eu/cookies/",
};
const cb = new Cookiebanner(options);
cb.run();

initializeNav();
initializeTerminal();

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function initImageViewer() {
  if (!getParameterByName('callgrind')) {
    window.location.href = window.location.href + '?callgrind=true';
  }
  document
      .getElementById("callgrind-content")
      .appendChild(new ImageViewer("img/callgrind.svg"));
}

const el = document.getElementById("callgrind");

if (getParameterByName('callgrind')) {
  initImageViewer();
}

if (el) {
  el.addEventListener("click", initImageViewer);
}
