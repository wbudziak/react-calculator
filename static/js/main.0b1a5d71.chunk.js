(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,function(e,t,a){e.exports={screen:"screen_screen__1sfdW",previousOperand:"screen_previousOperand__362Ew",currentOperand:"screen_currentOperand__2GYa3"}},,,,function(e,t,a){e.exports={key:"Key_key__1gkzH"}},function(e,t,a){e.exports={keyboard:"Keyboard_keyboard__LrzZZ"}},function(e,t,a){e.exports={calculator:"Calculator_calculator__1wcgR"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(6),c=a.n(r),u=(a(14),a(1)),n=a(2),s=a(3),l=a.n(s),i=a(0),o=function(e){var t=e.prev,a=e.current,r=(e.displayCurrent,e.displayPreview,e.finalResult),c=e.displayOperator,s=Object(u.useState)(32),o=Object(n.a)(s,2),p=o[0];o[1];return Object(i.jsxs)("screen",{className:l.a.screen,children:[Object(i.jsx)("input",{className:l.a.previousOperand,type:"text",readOnly:!0,value:""===t?"":""===r?t+c:""}),Object(i.jsx)("input",{style:{fontSize:"".concat(p,"px")},className:l.a.currentOperand,type:"text",placeholder:"0",readOnly:!0,value:""===a?"0":""===r?a:r})]})},p=a(5),b=a(7),d=a.n(b),v=function(e){e.result,e.prevValue,e.displayOperator,e.showNumber;var t,a=Object(u.useState)(!1),r=Object(n.a)(a,2),c=r[0],s=r[1],l=function(){s(!1)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",(t={className:d.a.key,type:"submit",style:!0===c?{transform:"scale(0.95)"}:{transform:"scale(1)"},value:e.value,text:e.text,onClick:e.click,onMouseDown:function(){s(!0)},onMouseLeave:l,onMouseUp:l},Object(p.a)(t,"type",e.type),Object(p.a)(t,"children",e.text),t))})},j=a(8),y=a.n(j),O=[{id:1,value:"C",text:"C",type:"reset"},{id:2,value:"switch",text:"+/-",type:"switch"},{id:3,value:"%",text:"%",type:"operator"},{id:4,value:"/",text:"\xf7",type:"operator"},{id:5,value:7,text:"7",type:"number"},{id:6,value:8,text:"8",type:"number"},{id:7,value:9,text:"9",type:"number"},{id:8,value:"*",text:"X",type:"operator"},{id:9,value:4,text:"4",type:"number"},{id:10,value:5,text:"5",type:"number"},{id:11,value:6,text:"6",type:"number"},{id:12,value:"-",text:"-",type:"operator"},{id:13,value:1,text:"1",type:"number"},{id:14,value:2,text:"2",type:"number"},{id:15,value:3,text:"3",type:"number"},{id:16,value:"+",text:"+",type:"operator"},{id:17,value:0,text:"0",type:"number"},{id:18,value:".",text:".",type:"number"},{id:19,value:"=",text:"=",type:"equal"}],x=function(e){var t=e.click;return Object(i.jsx)("div",{className:y.a.keyboard,children:O.map((function(e){return Object(i.jsx)(v,{text:e.text,value:e.value,click:t,type:e.type},e.id)}))})},f=a(9),g=a.n(f),m=function(e){var t=Object(u.useState)("0"),a=Object(n.a)(t,2),r=a[0],c=a[1],s=Object(u.useState)(""),l=Object(n.a)(s,2),p=l[0],b=l[1],d=Object(u.useState)(""),v=Object(n.a)(d,2),j=v[0],y=v[1],O=Object(u.useState)(""),f=Object(n.a)(O,2),m=f[0],k=f[1],_=Object(u.useState)(""),S=Object(n.a)(_,2),h=S[0],F=S[1],w=Object(u.useState)(!1),N=Object(n.a)(w,2),A=N[0],C=N[1],z=Object(u.useState)(""),E=Object(n.a)(z,2),M=E[0],R=E[1],q=Object(u.useState)(!1),J=Object(n.a)(q,2),K=J[0],L=J[1];Object(u.useEffect)((function(){if(A&&R(j),""!==r&&""!==p)switch(m){case"*":y(parseFloat(p)*parseFloat(r));break;case"+":y(parseFloat(p)+parseFloat(r));break;case"-":y(parseFloat(p)-parseFloat(r));break;case"/":y(parseFloat(p)/parseFloat(r));break;case"%":y(parseFloat(p)%parseFloat(r))}"."===r&&c("0"+r)}),[m,p,r,j,h]);var Z=function(e){b(""),c("0"),y(""),k(""),C(!1),R(""),L(!1),F("")};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("calculator",{className:g.a.calculator,children:[Object(i.jsx)(o,{prev:p,current:r,finalResult:M,displayOperator:h}),Object(i.jsx)(x,{click:function(e){"number"!==e.target.getAttribute("type")&&"-"!==e.target.value||function(e){if("-"!==e.target.value){if(!A||"0"!==e.target.value)return A?(Z(),void c(e.target.value)):void("."===e.target.value&&r.includes(".")||c("0"===r?r.slice(1)+e.target.value:r+e.target.value));Z()}else L(!0)}(e),"operator"===e.target.getAttribute("type")&&function(e){""===r&&""===p||("*"===e.target.value?F(" x"):"/"===e.target.value?F(" \xf7"):F(" ".concat(e.target.value)),R(""),C(!1),k(e.target.value),""===r&&"0"!==r||(K?(b("-"+r),L(!1)):b(r),c("")),""!==j&&(c(""),b(j)))}(e),"equal"===e.target.getAttribute("type")&&(""===r&&c(p),A&&(c(r),b(j)),C(!0),R(j)),"reset"===e.target.getAttribute("type")&&Z(),"switch"===e.target.getAttribute("type")&&function(e){if(!A&&""!==r){if(K||"0"===r)return;r.toString().includes("-")?c(r.toString().slice(1)):c("-"+r.toString())}A&&(b(""),y("-"+j.toString()),j.toString().includes("-")&&y(j.toString().slice(1)))}()}})]})})};var k=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(m,{})})};c.a.render(Object(i.jsx)(k,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.0b1a5d71.chunk.js.map