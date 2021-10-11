(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{39:function(n,t,e){},40:function(n,t,e){"use strict";e.r(t);var o,a,c=e(1),r=e.n(c),s=e(13),i=e.n(s),l=e(3),u=e(2),d={colors:{creme:"#F9F7EE",darkBlue:"#293443"}},b=e(0),f=Object(u.b)(o||(o=Object(l.a)(["\n  \n  @font-face{\n    font-family: 'Roboto', sans-serif;\n    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');\n  }\n\n  *, *::after, *::before{\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html{\n    font-size: 62.5%;\n  }\n\n  body{\n    font-size: 1.6rem;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n  }\n"]))),j=function(n){var t=n.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsx)(u.a,{theme:d,children:t})]})},p=e(17),h=e.n(p),m=e(8),O=e.n(m),x=e(18),g=function(){var n=Object(x.a)(O.a.mark((function n(t){var e;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"893b28d5a141aa2c2142a69630bb7c94",n.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("893b28d5a141aa2c2142a69630bb7c94","&lang=PL"));case 4:return e=n.sent,n.next=7,e.json();case 7:return n.abrupt("return",n.sent);case 10:throw n.prev=10,n.t0=n.catch(0),new Error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}(),w=e(4),v=e(19);!function(n){n[n.default=0]="default",n[n.passed=1]="passed",n[n.notFoundCity=2]="notFoundCity",n[n.error=3]="error"}(a||(a={}));var y,z,k,C,S,F,R,M,P,L,U,B,D={status:a.default,data:null,changeStatus:function(){},setData:function(){}},E=r.a.createContext(D),N=function(n){var t=n.children,e=Object(c.useState)(D),o=Object(v.a)(e,2),a=o[0],r=o[1],s=Object(w.a)(Object(w.a)({},a),{},{changeStatus:function(n){return r((function(t){return Object(w.a)(Object(w.a)({},t),{},{status:n})}))},setData:function(n){r((function(t){return Object(w.a)(Object(w.a)({},t),{},{data:n})}))}});return Object(b.jsx)(E.Provider,{value:s,children:t})},X=function(){var n=Object(c.useContext)(E),t=n.changeStatus,e=n.setData;return{getCityNameDebounce:Object(c.useCallback)(h()((function(n){t(a.default),n.target.value&&g(n.target.value).then((function(n){"404"===n.cod?t(a.notFoundCity):200===n.cod&&(e(n),t(a.passed))})).catch((function(n){t(a.error),console.error(n)}))}),300),[])}},I=u.d.h2(y||(y=Object(l.a)(["\n  color: ",";\n  font-weight: bold;\n  font-family: 'M PLUS Rounded 1c', sans-serif;\n  font-size: 36px;\n"])),(function(n){return n.theme.colors.darkBlue})),J=Object(u.c)(z||(z=Object(l.a)(["\n  ::after {\n    width: 100%;\n    text-align: center;\n    content: 'Nie znaleziono miasta';\n    position: absolute;\n    top: calc(100% + 25px);\n    left: 50%;\n    transform: translateX(-50%);\n    color: #979797;\n    font-size: 14px;\n    font-family: 'M PLUS Rounded 1c', sans-serif;\n"]))),W=u.d.div(k||(k=Object(l.a)(["\n  position: relative;\n\n  ::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background: ",";\n    transform-origin: center;\n    transition: transform 0.2s;\n  }\n\n  ","\n"])),(function(n){return n.theme.colors.darkBlue}),(function(n){var t=n.status;return t===a.notFoundCity?Object(u.c)(C||(C=Object(l.a)(["\n        ",";\n      "])),J):t===a.error?Object(u.c)(S||(S=Object(l.a)(["\n        ",";\n        content: 'Nieoczekiwany b\u0142\u0105d! Od\u015bwie\u017c stron\u0119.';\n        color: red;\n      "])),J):t===a.passed?Object(u.c)(F||(F=Object(l.a)(["\n        position: absolute;\n        top: 20px;\n        left: 50%;\n        transform: translateX(-50%);\n\n        ::before {\n          transform: scaleX(0.2);\n        }\n\n        ::after {\n          width: 100%;\n          text-align: center;\n          content: 'zmie\u0144 miasto';\n          position: absolute;\n          bottom: 70%;\n          left: 50%;\n          transform: translateX(-50%);\n          color: #979797;\n          font-size: 14px;\n          font-family: 'M PLUS Rounded 1c', sans-serif;\n        }\n      "]))):void 0})),q=u.d.input(R||(R=Object(l.a)(["\n  width: 210px;\n  border: none;\n  background: none;\n  margin-top: 30px;\n  font-size: 24px;\n  font-family: 'M PLUS Rounded 1c', sans-serif;\n  color: ",";\n  text-align: center;\n  padding: 10px 0;\n  font-stretch: condensed;\n\n  ::placeholder {\n    color: #c0c0c0;\n  }\n\n  :focus {\n    outline: 0;\n    background: #f4efd8;\n  }\n"])),(function(n){return n.theme.colors.darkBlue})),H=function(){var n=X().getCityNameDebounce,t=Object(c.useContext)(E).status;return Object(b.jsxs)(b.Fragment,{children:[t!==a.passed&&Object(b.jsx)(I,{children:"Weather app"}),Object(b.jsx)(W,{status:t,children:Object(b.jsx)(q,{type:"text",placeholder:"miasto",onChange:n})})]})};e(39);!function(n){n[n.hot=0]="hot",n[n.cool=1]="cool",n[n.cold=2]="cold"}(B||(B={}));var A,G,K,Q,T,V,Y,Z,$=u.d.p(M||(M=Object(l.a)(["\n  font-size: 48px;\n  font-family: 'M PLUS Rounded 1c', sans-serif;\n  position: absolute;\n  top: -105px;\n  right: -35%;\n  font-weight: 900;\n\n  ","\n"])),(function(n){switch(n.tempStatus){case B.hot:return Object(u.c)(P||(P=Object(l.a)(["\n          color: #ea3710;\n        "])));case B.cool:return Object(u.c)(L||(L=Object(l.a)(["\n          color: #e3ac58;\n        "])));default:return Object(u.c)(U||(U=Object(l.a)(["\n          color: #455eb9;\n        "])))}})),_=function(n){var t=n.temp,e=Math.floor(t-273),o=e<12?B.cold:e<25?B.cool:B.hot;return Object(b.jsxs)($,{tempStatus:o,children:[e,"\u2103"]})},nn=u.d.article(A||(A=Object(l.a)(["\n  position: relative;\n  left: -20px;\n"]))),tn=u.d.h3(G||(G=Object(l.a)(["\n  font-size: 48px;\n  font-family: 'M PLUS Rounded 1c', sans-serif;\n  margin: 0;\n"]))),en=u.d.p(K||(K=Object(l.a)(["\n  font-size: 18px;\n  margin: 0 0 43px;\n"]))),on=u.d.div(Q||(Q=Object(l.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n"]))),an=u.d.p(T||(T=Object(l.a)(["\n  margin: 8px 0 0 0;\n  font-size: 14px;\n  width: max-content;\n"]))),cn=u.d.p(V||(V=Object(l.a)(["\n  font-weight: 700;\n  margin: 8px 0 0 0;\n"]))),rn=u.d.img(Y||(Y=Object(l.a)(["\n  position: absolute;\n  left: 90%;\n  top: 5%;\n  transform-origin: center;\n  transform: scale(1.1);\n"]))),sn=function(){var n=Object(c.useContext)(E),t=n.status,e=n.data;return t===a.passed&&null!==e?Object(b.jsxs)(nn,{children:[Object(b.jsx)(rn,{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}),Object(b.jsx)(_,{temp:e.main.temp}),Object(b.jsxs)("div",{style:{position:"relative",zIndex:20},children:[Object(b.jsx)(tn,{children:e.name}),Object(b.jsx)(en,{children:e.weather[0].description}),Object(b.jsxs)(on,{children:[Object(b.jsx)(an,{children:"Wilgotno\u015b\u0107:"}),Object(b.jsxs)(cn,{children:[e.main.humidity,"%"]}),Object(b.jsx)(an,{children:"Ci\u015bnienie:"}),Object(b.jsxs)(cn,{children:[e.main.pressure,"pHa"]})]})]})]}):Object(b.jsx)(b.Fragment,{})},ln=u.d.main(Z||(Z=Object(l.a)(["\n  width: 100%;\n  height: 100vh;\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"])),(function(n){return n.theme.colors.creme})),un=function(){return Object(b.jsx)(j,{children:Object(b.jsx)(N,{children:Object(b.jsxs)(ln,{children:[Object(b.jsx)(H,{}),Object(b.jsx)(sn,{})]})})})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(un,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8ca774dc.chunk.js.map