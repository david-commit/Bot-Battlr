(this["webpackJsonpreact-hooks-bot-battlr-code-challenge"]=this["webpackJsonpreact-hooks-bot-battlr-code-challenge"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c(6),i=c.n(s),a=c(7),o=c(5),l={Assault:"icon military",Defender:"icon shield",Support:"icon plus circle",Medic:"icon ambulance",Witch:"icon magic",Captain:"icon star"};var d=function(e){var t=e.bot,c=e.handleAdd,r=e.handleDelete;return e.removeBotFromArmy,Object(n.jsx)("div",{className:"ui column",children:Object(n.jsxs)("div",{className:"ui card",onClick:function(){return c(t)},children:[Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{alt:"oh no!",src:t.avatar_url})}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"header",children:[t.name,Object(n.jsx)("i",{className:l[t.bot_class]})]}),Object(n.jsx)("div",{className:"meta text-wrap",children:Object(n.jsx)("small",{children:t.catchphrase})})]}),Object(n.jsxs)("div",{className:"extra content",children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"icon heartbeat"}),t.health]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"icon lightning"}),t.damage]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"icon shield"}),t.armor]}),Object(n.jsx)("span",{children:Object(n.jsx)("div",{className:"ui center aligned segment basic",children:Object(n.jsx)("button",{className:"ui mini red button",onClick:function(){return r(t)},children:"x"})})})]})]},t.id)})};var j=function(e){var t=e.botArmy,c=e.deleteBot,r=e.removeBotFromArmy;e.addBotToArmy,console.log(t);var s=t.map((function(e){return Object(n.jsx)(d,{bot:e,handleAdd:r,handleDelete:c},e.id)}));return Object(n.jsx)("div",{className:"ui segment inverted olive bot-army",children:Object(n.jsxs)("div",{className:"ui five column grid",children:["Your Bot Army",Object(n.jsx)("div",{className:"row bot-army-row",children:s})]})})};var u=function(e){var t=e.botList,c=e.addBotToArmy,r=e.deleteBot,s=t.map((function(e){return Object(n.jsx)(d,{bot:e,handleAdd:c,handleDelete:r},e.id)}));return Object(n.jsxs)("div",{className:"ui four column grid",children:["Collection of all bots",Object(n.jsx)("div",{className:"row",children:s})]})};var b=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)([]),l=Object(o.a)(i,2),d=l[0],b=l[1];function m(e){d.find((function(t){return t===e}))&&(s(c.filter((function(t){return t!==e}))),b(d.filter((function(t){return t!==e}))),fetch("http://localhost:8002/bots/".concat(e.id),{method:"DELETE"})),console.log(d)}return Object(r.useEffect)((function(){fetch("http://localhost:8002/bots").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{botArmy:d,deleteBot:m,removeBotFromArmy:function(e){var t=d.filter((function(t){return t!==e}));b(t)}}),Object(n.jsx)(u,{botList:c,addBotToArmy:function(e){if(!d.find((function(t){return t===e}))){var t=c.find((function(t){return t===e}));b([].concat(Object(a.a)(d),[t]))}console.log(d)},deleteBot:m})]})};var m=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(b,{})})};c(13);i.a.render(Object(n.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1d38d995.chunk.js.map