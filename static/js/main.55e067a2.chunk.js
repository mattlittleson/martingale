(this.webpackJsonpmartingale=this.webpackJsonpmartingale||[]).push([[0],{369:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(46),a=n.n(r),l=n(74),s=n(22),o=n(191),j=n(37),b=n(168),d=n(170),h=n(171),u=n(172),x=n(173),O=n(174),g=function(e,t){var n=e.id,i=e.initialBet,c=e.initialWallet,r=e.currentBet,a=e.currentWallet,l=e.lossCount,s=a-r;return Object(O.random)(0,100)<=48?{id:n+1,initialBet:i,currentBet:i,initialWallet:c,currentWallet:s+2*r,lossCount:l,gambleType:"Win"}:{id:n+1,initialBet:i,currentBet:2*r,initialWallet:c,currentWallet:s,lossCount:l+1,gambleType:"Loss"}},p=n(372),m=n(377),f=n(188),y=n(85),W=n(192),v=n(9);function B(e){var t=e.data.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:"".concat(e.id)})}));return Object(v.jsx)(p.a,{width:"100%",height:"100%",minWidth:300,minHeight:200,children:Object(v.jsxs)(m.a,{width:300,height:300,data:t,children:[Object(v.jsx)(f.a,{dataKey:"name"}),Object(v.jsx)(y.a,{}),Object(v.jsx)(W.a,{type:"monotone",dataKey:"currentBet",stroke:"#6200ff",strokeWidth:2}),Object(v.jsx)(W.a,{type:"monotone",dataKey:"currentWallet",stroke:"#00ff2a",strokeWidth:2}),Object(v.jsx)(W.a,{type:"monotone",dataKey:"lossCount",stroke:"#ff0000",strokeWidth:2})]})})}var C={history:[],gambler:{id:0,initialBet:0,currentBet:0,initialWallet:0,currentWallet:0,lossCount:0,gambleType:"_"}};function k(e,t){var n=e.gambler,i=e.history;switch(t.type){case"setWallet":return{history:i,gambler:Object(j.a)(Object(j.a)({},n),{},{initialWallet:t.wallet})};case"setBet":return{history:i,gambler:Object(j.a)(Object(j.a)({},n),{},{initialBet:t.bet})};case"lockIn":return{history:i,gambler:Object(j.a)(Object(j.a)({},n),{},{currentBet:n.initialBet,currentWallet:n.initialWallet})};case"run":return{history:[].concat(Object(o.a)(i),[n]),gambler:g(n)};case"reset":return C;default:throw new Error}}function w(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(i.useReducer)(k,C),a=Object(s.a)(r,2),l=a[0],o=a[1],j=l.gambler,O=l.history,g=j.initialWallet,p=j.currentWallet,m=j.initialBet,f=j.currentBet,y=j.lossCount;return Object(v.jsx)(b.a,{children:Object(v.jsxs)(b.b,{spacing:4,style:{marginTop:16},children:[Object(v.jsx)(b.c,{fontSize:"2xl",children:"Martingale betting system"}),Object(v.jsx)(d.a,{boxSize:"150px",objectFit:"contain",src:"/monki.png",alt:"monki"}),Object(v.jsxs)(b.b,{spacing:4,direction:"row",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(b.c,{fontSize:"2xl",children:"Bet"}),Object(v.jsxs)(h.b,{children:[Object(v.jsx)(h.c,{pointerEvents:"none",children:"$"}),Object(v.jsx)(h.a,{disabled:O.length>0,placeholder:"initial bet",value:S(m),onChange:function(e){return o({type:"setBet",bet:parseInt(z(e.target.value))||0})}})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(b.c,{fontSize:"2xl",children:"Wallet"}),Object(v.jsxs)(h.b,{children:[Object(v.jsx)(h.c,{pointerEvents:"none",children:"$"}),Object(v.jsx)(h.a,{disabled:O.length>0,placeholder:"wallet",value:S(g),onChange:function(e){return o({type:"setWallet",wallet:parseInt(z(e.target.value))||0})}})]})]})]}),Object(v.jsxs)(b.b,{spacing:4,direction:"row",style:{paddingTop:32},children:[Object(v.jsx)(u.a,{isFullWidth:!0,disabled:O.length>0,colorScheme:"teal",variant:"solid",onClick:function(){o({type:"lockIn"})},children:"Lock In"}),Object(v.jsx)(u.a,{colorScheme:"teal",variant:"outline",onClick:function(){o({type:"reset"})},children:"Reset"})]}),Object(v.jsxs)(b.b,{direction:"row",spacing:4,justifyContent:"space-between",children:[Object(v.jsxs)(b.c,{fontSize:"1xl",textAlign:"center",children:["Current Bet",Object(v.jsx)("br",{}),S(f)]}),Object(v.jsxs)(b.c,{fontSize:"1xl",textAlign:"center",children:["Current Wallet",Object(v.jsx)("br",{}),S(p)]}),Object(v.jsxs)(b.c,{fontSize:"1xl",textAlign:"center",children:["Loss Count",Object(v.jsx)("br",{}),S(y)]}),Object(v.jsx)(b.c,{fontSize:"2xl",textAlign:"center",children:O.length>0?O[O.length-1].gambleType:void 0})]}),Object(v.jsx)(B,{data:O.slice(n,O.length-1)}),Object(v.jsxs)(x.a,{"aria-label":"slider-ex-1",value:n,min:0,max:Math.max(0,O.length-2),step:1,onChange:function(e){return c(e)},children:[Object(v.jsx)(x.d,{children:Object(v.jsx)(x.b,{})}),Object(v.jsx)(x.c,{})]}),Object(v.jsxs)(b.b,{direction:"row",spacing:4,children:[Object(v.jsx)(u.a,{isFullWidth:!0,colorScheme:"teal",variant:"solid",onClick:function(){o({type:"run"})},children:"Bet"}),Object(v.jsx)(u.a,{colorScheme:"orange",variant:"solid",onClick:function(){for(var e=0;e<100;e++)o({type:"run"})},children:"x100"})]})]})})}function S(e){return"".concat(e).split(/(?=(?:\d{3})+$)/).join(",")}function z(e){return"".concat(e).replace(/,/gi,"")}var I=Object(l.b)({config:{initialColorMode:"dark",useSystemColorMode:!1}});a.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(l.a,{theme:I,children:Object(v.jsx)(w,{})})}),document.getElementById("root"))}},[[369,1,2]]]);
//# sourceMappingURL=main.55e067a2.chunk.js.map