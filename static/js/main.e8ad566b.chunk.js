(this["webpackJsonpblock-clicker"]=this["webpackJsonpblock-clicker"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),u=n(4),i=n.n(u),a=n(2);var o=function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e})),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},b=function(e,t){return e.toFixed(t).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},j=function(e){var t=e.name,n=e.price,s=e.addBps,u=e.buy,i=e.buyable,o=Object(r.useState)(n),j=Object(a.a)(o,2),l=j[0],p=j[1],d=Object(r.useState)(0),O=Object(a.a)(d,2),f=O[0],h=O[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[t," (Having ",f,"): -",b(l,0)," Blocks, +",b(s,1)," BPS"]}),Object(c.jsx)("button",{style:{opacity:i(l)?1:.4},onClick:function(){i(l)&&(u(l,s),p((function(e){return Math.round(1.15*e)})),h((function(e){return e+1})))},children:"Buy!"})]})})},l=function(e){var t=e.blocksCount,n=e.setBlocksCount,r=e.setBps,s=function(e,t){n((function(t){return t-e})),r((function(e){return Math.round(10*(e+t))/10}))},u=function(e){return t>=e};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{children:[{name:"Hand",price:15,bps:.1},{name:"Pickaxe",price:100,bps:1},{name:"Shovel",price:1100,bps:8},{name:"Axe",price:12e3,bps:47},{name:"Sword",price:13e4,bps:260},{name:"Farm",price:14e5,bps:1400},{name:"Village",price:2e7,bps:7800},{name:"Portal",price:33e7,bps:44e3},{name:"Fortress",price:51e8,bps:26e4},{name:"Stronghold",price:75e9,bps:16e5},{name:"End World",price:1e12,bps:1e7}].map((function(e){return Object(c.jsx)(j,{name:e.name,price:e.price,addBps:e.bps,buy:s,buyable:u})}))})})},p=function(){var e=Object(r.useState)(5e4),t=Object(a.a)(e,2),n=t[0],s=t[1],u=Object(r.useState)(1e3),i=Object(a.a)(u,2),b=i[0],j=i[1],p=Object(r.useState)(1),d=Object(a.a)(p,2),O=d[0],f=(d[1],Object(r.useState)(0)),h=Object(a.a)(f,2),m=h[0],x=h[1],k=Object(r.useState)(0),B=Object(a.a)(k,2),S=B[0],v=B[1],g=Object(r.useState)(0),y=Object(a.a)(g,2);y[0],y[1];Object(r.useEffect)((function(){m>=60?(v(Math.round(m/60)),j(1e3/60)):m>0&&(v(1),j(1e3/m))}),[m]),o((function(){s((function(e){return Math.round(10*(e+S))/10}))}),S>0?b:null);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:["Your Blocks: ",n]}),Object(c.jsx)("span",{onClick:function(){s((function(e){return e+O}))},children:Object(c.jsx)("button",{children:"I'm A Block Button."})}),Object(c.jsxs)("p",{children:["Blocks Per Click : ",O]}),Object(c.jsxs)("p",{children:["Blocks Per Second : ",m]}),Object(c.jsx)(l,{blocksCount:n,setBlocksCount:s,setBps:x})]})},d=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p,{})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e8ad566b.chunk.js.map