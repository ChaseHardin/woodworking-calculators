(this["webpackJsonpwoodworking-calculator"]=this["webpackJsonpwoodworking-calculator"]||[]).push([[0],{19:function(e,a,t){e.exports=t(31)},24:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),o=t.n(l),c=(t(24),t(25),t(7)),u=t(12),i=t(18),d=t(6),s=function(e){var a=e.label,t=e.placeholder,n=e.onChange;return r.a.createElement(d.a.Group,null,a&&r.a.createElement(d.a.Label,{className:"form-label","data-testid":a},a),r.a.createElement(d.a.Control,{placeholder:t,onChange:n}))},m=(t(29),function(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],l=a[1],o=r.a.useCallback((function(e){return h(e,"boardLength")})),m=r.a.useCallback((function(e){return h(e,"numberOfCuts")})),b=r.a.useCallback((function(e){return h(e,"bladeWidth")})),h=function(e,a){l(Object(u.a)(Object(u.a)({},t),{},Object(c.a)({},a,e.target.value)))},f=t&&t.boardLength&&t.numberOfCuts&&t.bladeWidth;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{"data-testid":"cut-details-form"},r.a.createElement(s,{label:"Length of Board",placeholder:"Length of board before cutting",onChange:o}),r.a.createElement(s,{label:"Boards",placeholder:"Number of boards after cutting",onChange:m}),r.a.createElement(s,{label:"Blade Width",placeholder:"Width of blade",onChange:b})),r.a.createElement("div",{"data-testid":"results",className:"results"},f&&function(e){var a=e.boardLength,t=e.numberOfCuts;return(a-t*e.bladeWidth)/t}(t)))}),b=t(17),h=t(13),f=(t(30),function(){return r.a.createElement(h.a,{bg:"dark",className:"navbar-styles"},r.a.createElement(h.a.Brand,null,"Woodworking Calculator"))});var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(b.a,null,r.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.54863c9f.chunk.js.map