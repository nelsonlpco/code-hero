(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,n,t){},105:function(e,n,t){},106:function(e,n,t){},107:function(e,n,t){},108:function(e,n,t){},109:function(e,n,t){},110:function(e,n,t){},111:function(e,n,t){},112:function(e,n,t){},114:function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),c=t(39),i=t.n(c),l=t(17),s=t(7),u=t(10),m=t(27),d=t(18);var v=Object(d.createActions)({fetchHeroes:[]}),f=v.Types,h=(v.Creators,Object(d.createReducer)({heroes:[{name:"Tony Stark",image:"https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg",series:["Invincible Iron man","Civil War","IronHeart"],events:["AvX","Demon in the Bottle","Dynasty M"]},{name:"Tony Stark",image:"https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg",series:["Invincible Iron man","Civil War","IronHeart"],events:["AvX","Demon in the Bottle","Dynasty M"]},{name:"Tony Stark",image:"https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg",series:["Invincible Iron man","Civil War","IronHeart"],events:["AvX","Demon in the Bottle","Dynasty M"]}]},(r={},Object(u.a)(r,d.Types.DEFAULT,function(e){return Object(m.a)({},e)}),Object(u.a)(r,f.FETCH_HEROES,function(e,n){return Object(m.a)({},e)}),r))),p=s.d;"development"==="production".trim()&&(p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d);var b=Object(s.e)(Object(s.c)({Heroes:h}),p(Object(s.a)())),g=(t(104),t(116)),E=t(117),k=t(118);t(105),t(106),t(38);var w=function(e){var n=e.text;return o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement("h1",{className:"color-red roboto-black title"},n.toUpperCase()),o.a.createElement("div",{className:"title__bar background-red"}))};var y=function(e){var n=e.text;return o.a.createElement("h1",{className:"color-red roboto-regular title"},n.toUpperCase())};var C=function(e){var n=e.title,t=e.subtitle;return o.a.createElement("div",{className:"page-title"},o.a.createElement(w,{text:n}),o.a.createElement(y,{text:t}))};var _=function(){return o.a.createElement("div",{className:"header-container"},o.a.createElement(C,{title:"busca marvel",subtitle:"teste front-end"}),o.a.createElement(y,{text:"nome do canditado"}))};t(107);var x=function(){return o.a.createElement("div",{className:"footer background-red"})};var N=function(e){var n=e.children;return o.a.createElement("div",{className:"container"},o.a.createElement(_,null),n,o.a.createElement(x,null))},j=t(43);t(108);var H=function(e){var n=e.label,t=e.id,r=(e.searchHandler,Object(a.useState)("")),c=Object(j.a)(r,2),i=c[0],l=c[1];return o.a.createElement("div",{className:"search"},o.a.createElement("label",{className:"search__label color-red roboto-regular",htmlFor:t},n),o.a.createElement("input",{autoFocus:!0,className:"search__input",id:t,name:t,type:"text",value:i,onChange:function(e){l(e.target.value)}}))},O=(t(109),t(110),t(41)),A=t.n(O);function S(e){var n=e.image,t=e.name,r={background:'url("'.concat(n,'") center center no-repeat'),backgroundSize:"cover"};return o.a.createElement("div",{className:"hero-card"},o.a.createElement("div",{className:"hero-card__image",style:r}),o.a.createElement("span",{className:"hero-card__name color-black roboto-regular"},t))}S.defaultProps={image:A.a,name:"Tony Stark"};var T=S;var M=function(e){var n=e.columns,t=e.registers,r=e.onRowClick;return o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,n.map(function(e,n){return o.a.createElement("th",{key:Math.floor(1e4*Math.random())+1,className:"background-red color-white roboto-regular"},e.label)}))),o.a.createElement("tbody",null,t.map(function(e,t){return o.a.createElement("tr",{key:Math.floor(1e4*Math.random())+1,onClick:function(){return r(e)}},function(e,n,t){return n.map(function(n,r){return o.a.createElement("td",{key:r+t,className:"color-black roboto-regular"},n.renderFunction?n.renderFunction(e):e[n.field])})}(e,n,t))})))};var D=function(e){var n=e.heroes,t=e.history,r=[{label:"Personagem",renderFunction:function(e){return o.a.createElement(T,{image:e.image,name:e.name})}},{label:"S\xe9ries",renderFunction:function(e){return e.series.map(function(e){return o.a.createElement("div",{key:Math.floor(1e3*Math.random()),className:"color-black roboto-regular"},e)})}},{label:"Eventos",renderFunction:function(e){return e.events.map(function(e){return o.a.createElement("div",{key:Math.floor(1e3*Math.random()),className:"color-black roboto-regular"},e)})}}];return o.a.createElement(M,{columns:r,registers:n,onRowClick:function(e){return t.push("/details")}})};t(111);function I(e){var n=e.isEnable,t=e.onClickHandler,r={width:0,height:0,borderTop:"8px solid transparent",borderBottom:"8px solid transparent",borderRight:"12px solid ".concat(n?"#d20a0a":"#efa9a9"),marginRight:"12px",cursor:n?"pointer":"not-allowed"};return o.a.createElement("div",{style:r,onClick:function(){n&&t()}})}I.defaultProps={isEnable:!1};var R=I;function W(e){var n=e.isEnable,t=e.onClickHandler,r={width:0,height:0,borderTop:"8px solid transparent",borderBottom:"8px solid transparent",borderLeft:"12px solid ".concat(n?"#d20a0a":"#efa9a9"),marginLeft:"12px",cursor:n?"pointer":"not-allowed"};return o.a.createElement("div",{style:r,onClick:function(){n&&t()}})}W.defaultProps={isEnable:!1};var F=W;function P(e){var n=e.isActive,t=e.onClickHandler,r=e.number,a={backgroundColor:n?"#d42026":"none",color:n?"#fff":"#d42026"};return o.a.createElement("div",{className:"page-number",style:a,onClick:function(){t()}},r)}P.defaultProps={isActive:!1};var B=P;var U=function(){return o.a.createElement("div",{className:"paginator"},o.a.createElement(R,{isEnable:!1,onClickHandler:function(){return!1}}),o.a.createElement(B,{isActive:!0,onClickHandler:function(){return!1},number:1}),o.a.createElement(B,{isActive:!1,onClickHandler:function(){return!1},number:2}),o.a.createElement(B,{isActive:!1,onClickHandler:function(){return!1},number:3}),o.a.createElement(B,{isActive:!1,onClickHandler:function(){return!1},number:4}),o.a.createElement(B,{isActive:!1,onClickHandler:function(){return!1},number:5}),o.a.createElement(B,{isActive:!1,onClickHandler:function(){return!1},number:6}),o.a.createElement(F,{isEnable:!0,onClickHandler:function(){return!0}}))};t(112);var L=Object(l.b)(function(e){return{heroes:e.Heroes.heroes}})(function(e){var n=e.history,t=e.heroes;return o.a.createElement("div",{className:"search-page"},o.a.createElement(H,{searchHandler:function(){return!1},label:"Nome do Personagem",id:"hero-search"}),o.a.createElement(D,{heroes:t,history:n}),o.a.createElement(U,null))});var X=function(){return o.a.createElement("div",null,"Detalhes")};var J=function(){return o.a.createElement(N,null,o.a.createElement(g.a,null,o.a.createElement(E.a,null,o.a.createElement(k.a,{exact:!0,path:"/",component:L}),o.a.createElement(k.a,{path:"/details",component:X}))))},z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(l.a,{store:b},o.a.createElement(J,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/code-hero",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/code-hero","/service-worker.js");z?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):V(n,e)})}}()},38:function(e,n,t){},41:function(e,n,t){e.exports=t.p+"static/media/ironman.aad58208.jpg"},44:function(e,n,t){e.exports=t(114)}},[[44,1,2]]]);
//# sourceMappingURL=main.c54c8c54.chunk.js.map