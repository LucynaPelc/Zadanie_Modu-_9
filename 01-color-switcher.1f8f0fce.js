!function(){var t;function e(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}var n=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");n.addEventListener("click",(function(){n.disabled=!0,a.disabled=!1,t=setInterval(e,1e3)})),a.addEventListener("click",(function(){a.disabled=!0,n.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.1f8f0fce.js.map