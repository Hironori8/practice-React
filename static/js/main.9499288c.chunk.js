(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{62:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(17),i=a.n(c),s=a(15),o=a(8),l=(a(62),a(101)),j=a(103),d=a(104),b=a(106),m=a(105),h=a(2),u=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function x(e){var t=u();return Object(h.jsx)("div",{className:t.root,children:Object(h.jsx)(j.a,{position:"static",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(m.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"}),Object(h.jsxs)(b.a,{variant:"h6",className:t.title,children:["Portfolio | Hironori Nakano | ",e.pagename]})]})})})}var p=a(116),O=a.p+"static/media/mypicture.acf7221c.jpg",g=Object(l.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{display:"flex",width:e.spacing(30),height:e.spacing(30),margin:"auto",marginTop:e.spacing(20)}}}));function f(){var e=g();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(p.a,{alt:"Remy Sharp",src:O,className:e.large})})}var v=a(40),N=a.n(v),y=a(48),w=a(14),k=a(50),C=Object(k.a)(4),B=["Carrer","Research","Blog","Contact"],T=["/carrer","/research","/blog","/contact"],G=function(e){return function(t){return"translate3d(0, ".concat(15*Math.sin(t+2*e*Math.PI/1.6),"px, 0)")}},M=Object(l.a)((function(e){return{script_bf_box:{width:100,height:300,margin:"auto",willChange:"transform",fontSize:50,writingMode:"vertical-rl",background:"white",color:"black","&:hover":{background:"Black",color:"white"}}}}));function R(){var e=M(),t=Object(w.b)({to:function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({radians:2*Math.PI});case 3:e.next=0;break;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),from:{radians:0},config:{duration:3500},reset:!0}).radians;return C.map((function(a){return Object(h.jsx)(s.b,{to:T[a],style:{textDecoration:"none"},children:Object(h.jsx)(w.a.div,{className:e.script_bf_box,style:{transform:t.interpolate(G(a))},children:B[a]},a)})}))}var P=Object(l.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},selector:{display:"flex",marginTop:50,margin:"auto",maxWidth:400}}}));function S(){var e=P();return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(x,{}),Object(h.jsx)(f,{}),Object(h.jsx)("div",{className:e.selector,children:Object(h.jsx)(R,{})})]})}var _=a(108),A=a(51),D=a(117),I=a(107),L=a(115),W=a(114),J=a(53),E=a.p+"static/media/keio_univ.a360a57a.png",H=a.p+"static/media/yahoo.f1c6dbc3.png",q=Object(l.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(4),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},logo:{marginTop:e.spacing(4),maxHeight:300,maxWidth:300}}}));function z(e){switch(e){case 0:return"\u30d0\u30b9\u30b1\u30c3\u30c8\u30dc\u30fc\u30eb\u90e8\u6240\u5c5e";case 1:return"\u7406\u5de5\u5b66\u90e8 \u60c5\u5831\u5de5\u5b66\u79d1 \u7b39\u702c\u7814\u7a76\u5ba4\u6240\u5c5e";case 2:return"\u7406\u5de5\u5b66\u7814\u7a76\u79d1 \u74b0\u5883\u89e3\u653e\u79d1\u5b66\u5c02\u653b \u7b39\u702c\u7814\u7a76\u5ba4\u6240\u5c5e";case 3:return"\u8fd1\u65e5\u516c\u958b(coming soon)";default:return"Unknown step"}}function U(e,t){switch(e){case 1:case 2:return Object(h.jsx)("img",{src:E,className:t});case 3:return Object(h.jsx)("img",{src:H,className:t})}}function Y(){var e=q(),t=n.a.useState(0),a=Object(A.a)(t,2),r=a[0],c=a[1],i=["\u958b\u667a\u9ad8\u6821 (2011-2014)","\u6176\u61c9\u7fa9\u587e\u5927\u5b66 (2015-2019)","\u6176\u61c9\u7fa9\u587e\u5927\u5b66\u5927\u5b66\u9662 (2019-2021)","Yahoo Japan (2021-)"],s=function(){c((function(e){return e+1}))},o=function(){c((function(e){return e-1}))};return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(D.a,{activeStep:r,orientation:"vertical",children:i.map((function(t,a){return Object(h.jsxs)(I.a,{children:[Object(h.jsx)(L.a,{children:t}),Object(h.jsxs)(W.a,{children:[Object(h.jsx)(b.a,{children:z(a)}),Object(h.jsx)("div",{children:U(a,e.logo)}),Object(h.jsx)("div",{className:e.actionsContainer,children:Object(h.jsxs)("div",{children:[Object(h.jsx)(_.a,{disabled:0===r,onClick:o,className:e.button,children:"Back"}),Object(h.jsx)(_.a,{variant:"outlined",color:"primary",onClick:s,className:e.button,children:"Next"})]})})]})]},t)}))}),r===i.length&&Object(h.jsx)(J.a,{square:!0,elevation:0,className:e.resetContainer,children:Object(h.jsx)(_.a,{onClick:function(){c(0)},className:e.button,children:"Reset"})})]})}var F=Object(l.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},carrer:{marginRight:20},research:{marginLeft:50,marginTop:50},list:{marginTop:0},linkbutton:{marginTop:50}}}));function K(){var e=F(),t=Object(w.b)({opacity:1,from:{opacity:0},delay:500});return Object(h.jsxs)("div",{className:"CarrerPage",children:[Object(h.jsx)(x,{pagename:"Carrer"}),Object(h.jsx)(w.a.h1,{style:t,children:"\u7d4c\u6b74 Carrer"}),Object(h.jsx)(Y,{}),Object(h.jsx)("div",{className:"list",children:Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)(_.a,{variant:"outlined",color:"primary",className:e.research,children:"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3078\u623b\u308b (Main)"})})})]})}var Q=a(109),V=a(110),X=a(113),Z=a(112),$=a(111),ee=Object(l.a)({root:{minWidth:400,maxWidth:400,margin:"auto",height:600},media:{height:300}});function te(e){var t=ee();return Object(h.jsxs)(Q.a,{className:t.root,children:[Object(h.jsxs)(V.a,{children:[Object(h.jsx)($.a,{className:t.media,image:e.image,title:"Contemplative Reptile"}),Object(h.jsxs)(Z.a,{children:[Object(h.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(h.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:"\u8fd1\u65e5\u516c\u958b (coming soon)"})]})]}),Object(h.jsx)(X.a,{})]})}var ae=Object(l.a)((function(e){return{root:{flexGrow:1},title:{marginBottom:50},cards:{display:"flex"},list:{marginTop:50,marginLeft:80}}}));function re(){var e=ae(),t=Object(w.b)({opacity:1,from:{opacity:0},delay:500});return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(x,{pagename:"Research"}),Object(h.jsx)(w.a.h1,{style:t,children:"\u7814\u7a76\u30c6\u30fc\u30de Research"}),Object(h.jsxs)("div",{className:e.cards,children:[Object(h.jsx)(te,{name:"NDN (Named Data Networking)",image:"NDN.jpg"}),Object(h.jsx)(te,{name:"Android Malware and  Adversarial Examples",image:"Android.jpg"})]}),Object(h.jsx)("div",{className:e.list,children:Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)(_.a,{variant:"contained",color:"primary",className:e.research,children:"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u306b\u623b\u308b\uff08Main Page)"})})})]})}var ne=Object(l.a)((function(e){return{root:{flexGrow:1},blog:{marginLeft:50,marginTop:50}}}));function ce(){var e=ne(),t=Object(w.b)({opacity:1,from:{opacity:0},delay:500});return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(x,{pagename:"Blog"}),Object(h.jsx)(w.a.h1,{style:t,children:"Blog \u30d6\u30ed\u30b0"}),Object(h.jsx)("div",{className:"list",children:Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)(_.a,{variant:"contained",color:"primary",className:e.blog,children:"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3078\u623b\u308b\uff08MAIN)"})})})]})}var ie=Object(l.a)((function(e){return{root:{flexGrow:1},access:{marginLeft:50,marginTop:50},list:{marginTop:0}}}));function se(){var e=ie(),t=Object(w.b)({opacity:1,from:{opacity:0},delay:500});return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(x,{pagename:"Contact"}),Object(h.jsx)(w.a.h1,{style:t,children:"\u9023\u7d61 Contact"}),Object(h.jsx)("div",{className:"list",children:Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)(_.a,{variant:"contained",color:"primary",className:e.access,children:"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3078\u623b\u308b\uff08Main)"})})})]})}var oe=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(s.a,{basename:"/nakano-homepage",children:Object(h.jsxs)("div",{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:S}),Object(h.jsx)(o.a,{path:"/carrer",component:K}),Object(h.jsx)(o.a,{path:"/research",component:re}),Object(h.jsx)(o.a,{path:"/blog",component:ce}),Object(h.jsx)(o.a,{path:"/contact",component:se})]})})})};i.a.render(Object(h.jsx)(oe,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.9499288c.chunk.js.map