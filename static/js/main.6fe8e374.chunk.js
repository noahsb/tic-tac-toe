(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),l=n(16),o=n.n(l),a=(n(23),n(8)),s=n(2),j=n(10),u=function(){return Object(r.jsxs)("h6",{children:["Made with \u2764 by ",Object(r.jsx)("a",{href:"https://github.com/noahsb",children:"Noah Burroughs"})]})},O={ROOT:"/",SOLO:"/solo"},b=O,d=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(a.b,{to:b.ROOT,style:{textDecoration:"none"},children:Object(r.jsx)("h1",{children:"Tic-Tac-Toe"})})})},h=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{}),e.children,Object(r.jsx)(u,{})]})},x=function(e){var t=e.value,n=e.onClick;return Object(r.jsx)("button",{onClick:n,children:t})},f={borderRadius:"10px",width:"300px",height:"300px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},g=function(e){var t=e.squares,n=e.onClick;return Object(r.jsx)("div",{style:f,children:t.map((function(e,t){return Object(r.jsx)(x,{value:e,onClick:function(){return n(t)}},t)}))})},p={width:"280px",margin:"20px auto",overflow:"hidden"},m=function(e){var t=e.currentBoard,n=e.xNext,i=Object(c.useState)(t||Array(9).fill(null)),l=Object(j.a)(i,2),o=l[0],a=l[1],s=Object(c.useState)(n||!0),u=Object(j.a)(s,2),O=u[0],b=u[1],d=Object(c.useState)(!1),x=Object(j.a)(d,2),f=x[0],m=x[1],v=function(e){for(var t=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]],n=0;n<t.length;n++){var r=Object(j.a)(t[n],3),c=r[0],i=r[1],l=r[2];if(e[c]&&e[c]===e[i]&&e[c]===e[l])return e[c]}return null}(o);return Object(r.jsxs)(h,{children:[Object(r.jsx)(g,{squares:o,onClick:function(e){o.includes(null)||v||m(!0);var t=o.slice();v||t[e]||(t[e]=O?"X":"O",a(t),b(!O),localStorage.setItem("board",JSON.stringify(t)),localStorage.setItem("xNext",JSON.stringify(!O)))}}),Object(r.jsxs)("div",{style:p,children:[Object(r.jsx)("button",{onClick:function(){localStorage.removeItem("board"),localStorage.removeItem("xNext"),a(Array(9).fill(null)),m(!1)},children:"New Game"}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{style:{float:"left"},children:"Next Player: "+(O?"X":"O")}),f&&Object(r.jsx)("p",{style:{float:"right"},children:"Tie Game"}),v&&Object(r.jsx)("p",{style:{float:"right"},children:"Winner: "+v})]})]})},v={width:"80px",margin:"0 auto"},S=function(){var e,t=Object(s.f)();return Object(r.jsx)(h,{children:Object(r.jsx)("div",{style:v,children:Object(r.jsx)("button",{onClick:(e=b.SOLO,function(){t.push(e)}),children:"Play Game"})})})},y=localStorage.getItem("board"),N=localStorage.getItem("xNext"),C=null!==y?JSON.parse(y):null,T=null!==N?JSON.parse(N):null;var k=function(){return Object(r.jsx)(a.a,{children:Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:O.SOLO,component:function(){return Object(r.jsx)(m,{currentBoard:C,xNext:T})}}),Object(r.jsx)(s.a,{path:O.ROOT,component:S})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),r(e),c(e),i(e),l(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),w()}},[[29,1,2]]]);
//# sourceMappingURL=main.6fe8e374.chunk.js.map