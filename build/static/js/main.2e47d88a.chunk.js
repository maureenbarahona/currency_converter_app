(this.webpackJsonpdemos=this.webpackJsonpdemos||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=(a(21),a(3)),s=a.n(l),i=a(14),m=a(2),u=(a(23),a(15)),f=a.n(u);var p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("USD"),l=Object(m.a)(c,2),u=l[0],p=l[1];Object(n.useEffect)((function(){v("USD")}),[]);var v=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,l,i,u,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(" https://api.exchangeratesapi.io/latest?base=".concat(t));case 2:for(a=e.sent,n=a.data.rates,r=[],c=0,l=Object.entries(n);c<l.length;c++)i=Object(m.a)(l[c],2),u=i[0],p=i[1],r.push({symbol:u,rate:p});o(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Maureen project"),r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("h3",null,"Currency convert"),r.a.createElement("br",null),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Symbol :"),r.a.createElement("select",{className:"form-control form-control-lg",value:u,onChange:function(e){var t=e.target.value;p(t),v(t)}},a.map((function(e){return r.a.createElement("option",{value:e.symbol},e.symbol)})),";"),r.a.createElement("ul",{className:"list-group"},a.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e.symbol},e.symbol,"- ",e.rate)}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.2e47d88a.chunk.js.map