(this["webpackJsonpwoodworking-calculator"]=this["webpackJsonpwoodworking-calculator"]||[]).push([[0],{41:function(e,t,a){e.exports=a(75)},46:function(e,t,a){},47:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),o=a.n(c),l=(a(46),a(47),a(18)),u={board:{value:function(e,t,a){var n="";return e&&(n=n.concat("".concat(e,"' "))),t&&a?n=n.concat("".concat(t," ").concat(a,'"')):t?n=n.concat("".concat(t,'"')):a&&(n=n.concat("".concat(a,'"'))),n},label:"Board Length"}},i=r.a.createContext(u),s=function(e){var t=r.a.useState(u),a=Object(l.a)(t,2),n=a[0],c=a[1];return r.a.createElement(i.Provider,{value:{cutDetails:n,setCutDetails:c}},e.children)},m={board:!0},d=r.a.createContext(m),b=function(e){var t=r.a.useState(m),a=Object(l.a)(t,2),n=a[0],c=a[1];return r.a.createElement(d.Provider,{value:{view:n,setView:c}},e.children)},E=a(8),f=function(e){return r.a.createElement("div",{"data-testid":"cut-results"},r.a.createElement(E.j,null,r.a.createElement(E.l,null,r.a.createElement("tr",null,r.a.createElement("th",null,"Label"),r.a.createElement("th",null,"Value"))),r.a.createElement(E.k,null,Object.values(e.cutDetails).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.label),r.a.createElement("td",null,e.value(e.ft,e.in,e.fr)))})))))},p=a(40),h=a(15),v=a(16),w=function(e){var t=r.a.useContext(i),a=t.cutDetails,n=t.setCutDetails;return r.a.createElement(E.f,{containerClassName:"mb-3",append:e.measurement,inputs:r.a.createElement("select",{"data-testid":"selector-input-".concat(e.type,"-").concat(e.measurement),className:"browser-default custom-select",onChange:function(t){n(Object(v.a)(Object(v.a)({},a),{},Object(h.a)({},e.type,Object(v.a)(Object(v.a)({},e.item),{},Object(h.a)({},e.measurement,t.target.value)))))}},r.a.createElement("option",null,e.optionLabel),e.options.map((function(e){return r.a.createElement("option",{key:e},e)})))})},g=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],C=["0","1","2","3","4","5","6","7","8","9","10","11","12"],y=["0","1/16","1/8","3/16","1/4","5/16","3/8","7/16","1/2","9/16","5/8","11/16","3/4","13/16","7/8","15/16","1"],k=function(){var e=r.a.useContext(i).cutDetails,t=r.a.useContext(d).setView;return r.a.createElement(p.a,{"data-testid":"cut-details-form"},r.a.createElement("h4",{style:{marginBottom:"2rem"}},"What is the length of the board?"),r.a.createElement(w,{measurement:"ft",type:"board",item:e.board,options:g,optionLabel:"Select feet"}),r.a.createElement(w,{measurement:"in",type:"board",item:e.board,options:C,optionLabel:"Select inches"}),r.a.createElement(w,{measurement:"fr",type:"board",item:e.board,options:y,optionLabel:"Select fraction of an inch"}),r.a.createElement("div",{className:"text-center"},r.a.createElement(E.b,{onClick:function(){return t({board:!1})}},"Next")))},x=function(){var e=r.a.useContext(i).cutDetails,t=r.a.useContext(d).view,a=e.board.ft||e.board.in||e.board.fr;return r.a.createElement("div",null,t.board&&r.a.createElement(k,null),a&&r.a.createElement(f,{cutDetails:e}))},j={color:"white"},O=function(){return r.a.createElement(E.g,{color:"aqua-gradient",className:"font-weight-bold py-4 px-2 mb-5",style:j},"Woodworking Calculator")};var D=function(){return r.a.createElement(b,null,r.a.createElement(s,null,r.a.createElement(O,null),r.a.createElement(E.c,null,r.a.createElement(x,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73),a(74);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.c6c62505.chunk.js.map