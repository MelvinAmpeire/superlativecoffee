(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6047)}])},2455:function(e,t,r){"use strict";r.d(t,{gw:function(){return o},Ji:function(){return s},U6:function(){return i},m7:function(){return c},mM:function(){return u}});var n=0;var o=function(e,t){setTimeout((function(){}),e)},s=function(e,t){setInterval(function(e){(n=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(n+=1,e.style.opacity=n):clearInterval(0)}(e),t)},i=function(e,t){setInterval(function(e){(n=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(n=0,e.style.opacity=n):clearInterval(0)}(e),t)},c=function(e){var t=[];if(!e.parentNode)return t;for(var r=e.parentNode.firstChild;r;)1===r.nodeType&&r!==e&&t.push(r),r=r.nextSibling;return t},u=function(e,t){e.style.left=t}},6047:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),o=r(7294),s=r(9008),i=r(4298),c=function(){var e=document.querySelector(".cursor-inner"),t=document.querySelector(".cursor-outer");window.onmousemove=function(r){t.style.transform="translate("+r.clientX+"px, "+r.clientY+"px)",e.style.transform="translate("+r.clientX+"px, "+r.clientY+"px)",r.clientY,r.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")})),document.querySelector(".cursor-pointer").addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")})),e.style.visibility="visible",t.style.visibility="visible"),document.querySelectorAll("a").forEach((function(r){r.addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")}))})),document.querySelectorAll("a").forEach((function(r){r.addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")}))})),e.style.visibility="visible",t.style.visibility="visible"},u=function(){return o.useEffect((function(){c()}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mouse-cursor cursor-outer"}),(0,n.jsx)("div",{className:"mouse-cursor cursor-inner"})]})},a=function(){var e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var r=function(){var r=window.pageYOffset,n=document.documentElement.scrollHeight-window.innerHeight,o=t-r*t/n;e.style.strokeDashoffset=o};r(),window.addEventListener("scroll",r);var n=document.querySelector(".progress-wrap");window.addEventListener("scroll",(function(){window.pageYOffset>150?n.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),n.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},l=function(){return o.useEffect((function(){a()}),[]),(0,n.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,n.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,n.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})},d=r(2455),f=function(){Pace.on("start",(function(){document.querySelector("#preloader").classList.remove("isdone")})),Pace.on("done",(function(){document.querySelector(".hamenu")&&((0,d.gw)(300,(0,d.mM)(document.querySelector(".hamenu"),"-100%")),document.querySelector(".topnav .menu-icon").classList.remove("open")),document.querySelector("#preloader").classList.add("isdone")})),document.querySelector("body").classList.contains("pace-done")&&document.querySelector("#preloader").classList.add("isdone"),document.addEventListener("load",(function(){document.querySelector("#preloader").classList.add("isdone")}))},m=r(2806),p=function(){return o.useEffect((function(){var e=document.querySelector("body");m.QP?(f(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(!0===m.QP?"showX":"hideX"),children:(0,n.jsx)("div",{id:"preloader"})}),m.QP?(0,n.jsx)(i.default,{id:"pace",strategy:"beforeInteractive",src:"/js/pace.min.js"}):""]})};r(472);function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}var h=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"Avo"}),(0,n.jsx)("link",{rel:"icon",href:"/img/favicon.ico"})]}),(0,n.jsx)(u,{}),(0,n.jsx)(p,{}),(0,n.jsx)(l,{}),(0,n.jsx)(t,y({},r)),(0,n.jsx)(i.default,{id:"wow",src:"/js/wow.min.js"}),(0,n.jsx)(i.default,{strategy:"beforeInteractive",id:"splitting",src:"/js/splitting.min.js"}),(0,n.jsx)(i.default,{id:"simpleParallax",src:"/js/simpleParallax.min.js"}),(0,n.jsx)(i.default,{id:"isotope",strategy:"beforeInteractive",src:"/js/isotope.pkgd.min.js"}),(0,n.jsx)(i.default,{id:"initWow",strategy:"lazyOnload",children:"new WOW().init();"})]})}},472:function(){},9008:function(e,t,r){e.exports=r(5443)},4298:function(e,t,r){e.exports=r(699)},2806:function(e){"use strict";e.exports=JSON.parse('{"E8":"/img/logo-light.png","Q1":"/img/logo-dark.png","QP":true}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],(function(){return t(1780),t(387)}));var r=e.O();_N_E=r}]);