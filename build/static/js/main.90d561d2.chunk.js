(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{10:function(e,t,n){e.exports={auth:"AuthForm_auth__1VPHD",control:"AuthForm_control__2HUoD",actions:"AuthForm_actions__1qbam",toggle:"AuthForm_toggle__2PgUZ"}},14:function(e,t,n){e.exports={date_show:"Info_date_show__TWPH5",date:"Info_date__2ADOx",fadeDate:"Info_fadeDate__NP26S",body:"Info_body__3t3lD"}},17:function(e,t,n){e.exports={body:"Nav_body__3zycG",body_inner:"Nav_body_inner__2gpR_",next:"Nav_next__2KYUZ",back:"Nav_back__2YAFQ"}},18:function(e,t,n){e.exports={body:"Form_body__1ZhyU",fadeIn:"Form_fadeIn__1hF2H",header:"Form_header__1zcTG",form:"Form_form__2hemT",fadeError:"Form_fadeError__3wwq8"}},23:function(e,t,n){e.exports={wrapper:"Schedule_wrapper__3eulX",fadeIn:"Schedule_fadeIn__-0ebD",wrapper__init:"Schedule_wrapper__init__1NiaL",wrapper_calender:"Schedule_wrapper_calender__1shMa"}},30:function(e,t,n){e.exports={header:"TopNav_header__3HTEc",logo:"TopNav_logo__GlNFX"}},34:function(e,t,n){e.exports={body:"DateInfo_body__2M55L"}},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(33),s=n.n(a),r=n(13),i=(n(43),n(3)),o=(n(44),n(14)),l=n.n(o),d=n(1);var j=function(e){return Object(d.jsxs)("div",{className:l.a.body,children:[Object(d.jsx)("div",{className:l.a.body_header,children:Object(d.jsx)("h2",{children:"Walkthrough"})}),Object(d.jsx)("div",{className:l.a.body_header,children:Object(d.jsx)("h1",{children:"Schdule a demo"})}),Object(d.jsxs)("div",{className:e.show?l.a.date_show:l.a.date,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Date:"}),Object(d.jsx)("h3",{children:e.dates})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Time:"}),Object(d.jsx)("h3",{children:"Scheduled time: ".concat(e.timer)})]})]})]})},b=n(2),u=n(17),h=n.n(u);var m=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(b.g)().pathname,o=e.loading?"Submitting...":"Submit";return Object(c.useEffect)((function(){s("/form"===r?o:"Next")}),[r,o]),Object(d.jsx)("div",{className:h.a.body,children:Object(d.jsxs)("div",{className:h.a.body_inner,children:[Object(d.jsx)("div",{onClick:e.onClick,className:h.a.back,children:Object(d.jsx)("h3",{children:"\u2190 Back"})}),Object(d.jsx)("div",{className:h.a.next,children:Object(d.jsx)("button",{type:"submit",onSubmit:e.onSubmit,onClick:e.onClickFor,disabled:!e.disabled,children:a})})]})})};var O=function(e){return Object(d.jsxs)("div",{className:"calender_wrapper",children:[Object(d.jsxs)("div",{className:"calender_wrapper__inner__wrapper",children:[Object(d.jsx)("div",{className:"calender_wrapper__inner__wrapper__info",children:Object(d.jsx)(j,{dates:e.dates,show:e.show,timer:e.timer})}),Object(d.jsx)("div",{className:"calender_wrapper__inner__wrapper__outlet",children:Object(d.jsx)(b.b,{})})]}),Object(d.jsx)(m,{loading:e.loading,onSubmit:e.onSubmit,onClickFor:e.onClickFor,onClick:e.onClick,disabled:e.disabled})]})},p=(n(46),function(e){return fetch("https://emailodejs.herokuapp.com/api/sendmail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return console.log("response",e),e.json()})).catch((function(e){return console.log(e)}))}),x=n(18),_=n.n(x);var v=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),l=o[0],j=o[1],b=Object(c.useState)(!1),u=Object(i.a)(b,2),h=u[0],m=u[1];return Object(c.useEffect)((function(){e.name.trim().length>=1&&e.phoneNumber.trim().length>=1&&e.email.includes("@")&&e.email.includes(".com")?e.setIsActive(!0):e.setIsActive(!1)}),[e,e.name,e.phoneNumber,e.email]),Object(c.useEffect)((function(){e.email.trim().length>=1&&e.email.includes("@")&&e.email.includes(".com")&&s(!1)}),[e.email]),Object(d.jsxs)("div",{className:_.a.body,children:[Object(d.jsx)("div",{className:_.a.header,children:Object(d.jsx)("h4",{children:"Enter your information"})}),Object(d.jsx)("div",{className:_.a.header,children:Object(d.jsx)("h1",{children:"Personal Data"})}),Object(d.jsx)("div",{className:_.a.form,children:Object(d.jsxs)("form",{onSubmit:function(){},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{type:"text",placeholder:"Please Enter your name",value:e.name,onChange:function(t){e.setName(t.target.value),m(!1)},onBlur:function(){0===e.name.trim().length?m(!0):m(!1)},required:!0}),h&&Object(d.jsx)("p",{children:"Name must be inputed"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Phone Number:"}),Object(d.jsx)("input",{type:"number",placeholder:"Please Enter your phone number",value:e.phoneNumber,onChange:function(t){e.setPhoneNumber(t.target.value),j(!1)},onBlur:function(){0===e.phoneNumber.trim().length?j(!0):j(!1)},required:!0}),l&&Object(d.jsx)("p",{children:"Phone number must be inputed"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Email:"}),Object(d.jsx)("input",{type:"email",placeholder:"Please Enter your email",value:e.email,onChange:function(t){e.setEmail(t.target.value)},onBlur:function(){0!==e.email.trim().length||e.email.includes("@")||e.email.includes(".com")?s(!1):s(!0)},required:!0}),a&&Object(d.jsx)("p",{children:"Email must be inputed"})]})]})})]})},f=n(35),g=n.n(f);n(47);var N=function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(d.jsxs)("div",{className:"calendar-container__time",children:[Object(d.jsx)("h3",{children:"Time:"}),Object(d.jsx)("div",{className:"calendar-container__time__inner",children:e.time.map((function(t){return Object(d.jsx)("h1",{onClick:function(){e.setTimer(t),s(t),e.setIsActive(!0),e.setShow(!0)},className:"".concat(a===t&&"activeButton"),children:t},t)}))})]})},w=n(34),S=n.n(w);var y=function(){return Object(d.jsx)("div",{className:S.a.body,children:Object(d.jsx)("div",{children:"Select a Date and Time"})})},k=n(23),C=n.n(k);var P=function(e){return Object(d.jsxs)("div",{className:C.a.wrapper,children:[Object(d.jsxs)("div",{className:C.a.wrapper__init,children:[Object(d.jsx)("div",{children:Object(d.jsx)(y,{date:e.date})}),Object(d.jsx)("div",{className:C.a.wrapper_calender,children:Object(d.jsx)(g.a,{minDate:new Date,onChange:e.onChange,value:e.date})})]}),Object(d.jsx)("div",{children:Object(d.jsx)(N,{setShow:e.setShow,setTimer:e.setTimer,setIsActive:e.setIsActive,time:e.time})})]})},I=n(9),F=n.n(I);var T=function(e){var t=e.loading?"Resending...":"Resend Email",n=Object(b.h)();return Object(d.jsxs)("div",{className:F.a.body,children:[Object(d.jsx)("div",{className:F.a.svg_wrapper,children:Object(d.jsx)("div",{className:F.a.svg,children:Object(d.jsx)("svg",{width:"48",height:"35",viewBox:"0 0 48 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M46.5037 6.7984L19.3597 33.7552C17.9677 35.1376 15.7637 35.1376 14.3717 33.7552L1.49566 20.968C0.10366 19.5856 0.10366 17.3968 1.49566 16.0144C2.88766 14.632 5.09166 14.632 6.48366 16.0144L16.8657 26.3248L41.5157 1.8448C42.9077 0.462399 45.1117 0.462399 46.5037 1.8448C47.8957 3.2272 47.8957 5.416 46.5037 6.7984Z",fill:"#5793E5"})})})}),Object(d.jsx)("div",{className:F.a.header,children:Object(d.jsx)("h2",{children:"We just scheduled a demo for you."})}),Object(d.jsx)("div",{className:F.a.header,children:Object(d.jsxs)("p",{children:["A calendar invitation for your upcoming demo session has been sent to your email (",e.email,")"]})}),Object(d.jsxs)("div",{className:F.a.schedule,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Date:"}),Object(d.jsxs)("p",{children:[e.dates,"."]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Time:"}),Object(d.jsx)("p",{children:e.timer})]})]}),Object(d.jsxs)("div",{className:F.a.buttons,children:[Object(d.jsx)("button",{onClick:function(){n("/"),e.setEmail(""),e.setPhoneNumber(""),e.setName("")},children:"Get back home"}),Object(d.jsx)("div",{onClick:e.onClick,children:Object(d.jsx)("p",{children:t})})]})]})},A=n(29),E=n(19),D=n.n(E),L=n(15),B=(n(67),n(10)),U=n.n(B);n(68).config();var H=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),h=u[0],m=u[1],O=Object(c.useState)(""),p=Object(i.a)(O,2),x=p[0],_=p[1],v=Object(c.useState)(""),f=Object(i.a)(v,2),g=f[0],N=f[1],w=Object(b.h)();return Object(d.jsxs)("section",{className:U.a.auth,children:[Object(d.jsx)(L.a,{}),Object(d.jsx)("h1",{children:n?"Login":"Sign Up"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();if(n){var t=function(){var e=Object(A.a)(D.a.mark((function e(){var t,n,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZhlPg41S1YCUcwLFa9Ia5FRvL1NiTlno",{method:"POST",body:JSON.stringify({email:x,password:o,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 2:if(!(t=e.sent).ok){e.next=11;break}return e.next=6,t.json();case 6:n=e.sent,w("/"),console.log(n),e.next=16;break;case 11:return e.next=13,t.json();case 13:c=e.sent,console.log(c),L.b.error(c.error.message,{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}else{var c=function(){var e=Object(A.a)(D.a.mark((function e(){var t,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZhlPg41S1YCUcwLFa9Ia5FRvL1NiTlno",{method:"POST",body:JSON.stringify({email:x,password:o,displayName:g,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 2:if(!(t=e.sent).ok){e.next=11;break}L.b.success("Account successfully created, Proceed to login",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),N(""),_(""),l(""),m(""),e.next=15;break;case 11:return e.next=13,t.json();case 13:n=e.sent,L.b.error(n.error.message,{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(o===h)return c();L.b.warning("Passwords don't match",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},children:[!n&&Object(d.jsxs)("div",{className:U.a.control,children:[Object(d.jsx)("label",{htmlFor:"email",children:"Name"}),Object(d.jsx)("input",{onChange:function(e){N(e.target.value)},value:g,type:"text",id:"name"})]}),Object(d.jsxs)("div",{className:U.a.control,children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{onChange:function(e){_(e.target.value)},value:x,type:"email",id:"email",required:!0})]}),Object(d.jsxs)("div",{className:U.a.control,children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{value:o,onChange:function(e){l(e.target.value)},type:"password",id:"password",required:!0})]}),!n&&Object(d.jsxs)("div",{className:U.a.control,children:[Object(d.jsx)("label",{htmlFor:"password",children:"Confirm Password"}),Object(d.jsx)("input",{onChange:function(e){m(e.target.value)},value:h,type:"password",id:"confirmPassword",required:!0})]}),Object(d.jsxs)("div",{className:U.a.actions,children:[Object(d.jsx)("button",{children:n?"Login":"Create Account"}),Object(d.jsx)("button",{type:"button",className:U.a.toggle,onClick:function(){a((function(e){return!e}))},children:n?"Create new account":"Login with existing account"})]})]})]})},q=n(30),J=n.n(q);var R=function(){return Object(d.jsxs)("header",{className:J.a.header,children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("div",{className:J.a.logo,children:"Schedule"})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/auth",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){},children:"Logout"})})]})})]})};var Z=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(new Date),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)("00:00"),u=Object(i.a)(j,2),h=u[0],m=u[1],x=Object(c.useState)(""),_=Object(i.a)(x,2),f=_[0],g=_[1],N=Object(c.useState)(!1),w=Object(i.a)(N,2),S=w[0],y=w[1],k=Object(c.useState)(""),C=Object(i.a)(k,2),I=C[0],F=C[1],A=Object(c.useState)(!1),E=Object(i.a)(A,2),D=E[0],L=E[1],B=Object(c.useState)(""),U=Object(i.a)(B,2),q=U[0],J=U[1],Z=Object(c.useState)(""),G=Object(i.a)(Z,2),W=G[0],Y=G[1],z=Object(b.g)().pathname;Object(c.useEffect)((function(){var e=setInterval((function(){var e=o.toLocaleString("en-US",{month:"long"}),t=o.getDate(),n=o.getFullYear();g("".concat(t," ").concat(e,", ").concat(n))}),1e3);return function(){clearInterval(e)}}),[o]);var M=Object(b.h)(),K=function(){"/form"===z?(L(!0),p({name:q,email:I,dates:f,timer:h}).then((function(e){e.err?console.log(e.err):(console.log(e),L(!1),M("/final"))}))):M("/form")};return Object(d.jsxs)("div",{className:"main__wrapper1",children:[Object(d.jsx)(R,{}),Object(d.jsx)("div",{className:"calendar-container1",children:Object(d.jsxs)(b.e,{children:[Object(d.jsxs)(b.c,{path:"/",element:Object(d.jsx)(O,{loading:D,onClickFor:K,onClick:function(){M("/final"===z?"/form":"/")},disabled:n,show:S,dates:f,timer:h}),children:[Object(d.jsx)(b.c,{path:"/",element:Object(d.jsx)(P,{show:S,setShow:y,isActive:n,setIsActive:a,timer:h,setTimer:m,time:["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"],date:o,onChange:l})}),Object(d.jsx)(b.c,{path:"form",element:Object(d.jsx)(v,{name:q,setName:J,phoneNumber:W,setPhoneNumber:Y,email:I,setEmail:F,onClick:K,setIsActive:a})})]}),Object(d.jsx)(b.c,{path:"auth",element:Object(d.jsx)(H,{})}),Object(d.jsx)(b.c,{path:"/final",element:Object(d.jsx)(T,{loading:D,onClick:function(){L(!0),p({name:q,email:I,dates:f,timer:h}).then((function(e){e.err?console.log(e.err):(console.log(e),L(!1))}))},setName:J,setPhoneNumber:Y,setEmail:F,email:I,dates:f,timer:h})}),Object(d.jsx)(b.c,{path:"*",element:Object(d.jsx)(b.a,{to:"/"})})]})})]})};s.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(r.a,{children:Object(d.jsx)(Z,{})}))},9:function(e,t,n){e.exports={body:"SuccessPage_body__WUx8K",fadeIn:"SuccessPage_fadeIn__2JjdB",svg_wrapper:"SuccessPage_svg_wrapper__2y8hL",svg:"SuccessPage_svg__2G-97",back:"SuccessPage_back__3kwjg",header:"SuccessPage_header__3to3t",schedule:"SuccessPage_schedule__3ni1k",buttons:"SuccessPage_buttons__1k_UA"}}},[[72,1,2]]]);
//# sourceMappingURL=main.90d561d2.chunk.js.map