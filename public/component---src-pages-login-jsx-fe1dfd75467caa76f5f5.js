(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3jcS":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YwZP"),s=n("HaKk");n("5MSN");t.a=()=>(Object(r.useEffect)(()=>{Object(s.a)("STUDENT").then(e=>{e&&Object(o.navigate)("/dashboard")}),Object(s.a)("DOCENT").then(e=>{e&&window.location.replace("https://admin.interpol.sd-lab.nl")})},[]),a.a.createElement("div",{id:"loginWrapper"},a.a.createElement("form",{id:"loginForm",onSubmit:e=>{(async e=>{e.preventDefault();const t=new FormData;t.append("username",e.target.elements.username.value),t.append("password",e.target.elements.password.value),Object(s.b)(t)})(e)}},a.a.createElement("input",{type:"text",id:"username",placeholder:"Username"}),a.a.createElement("input",{type:"password",id:"password",placeholder:"Password"}),a.a.createElement("button",{type:"submit",className:"btn"},a.a.createElement("span",null,"Inloggen")))))},"5MSN":function(e,t,n){},HaKk:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));const r=async e=>{try{const t=await fetch("https://api.interpol.sd-lab.nl/api/create-session",{method:"POST",body:e,credentials:"include"}),n=await t.text();if(!t.ok)throw new Error("HTTP error! status: "+t.status);const r=JSON.parse(n);r.error?console.error("Login error:",r.error):console.log("Login successful:",r.message)}catch(t){console.error("Error creating session:",t)}},a=async e=>{try{const t=await fetch("https://api.interpol.sd-lab.nl/api/check-type",{method:"GET",credentials:"include"});if(!t.ok)throw new Error("HTTP error! status: "+t.status);const n=await t.json();return n&&n.error?(console.error("Error checking session:",n.error),!1):"STUDENT"===e?"STUDENT"===n:"DOCENT"===e&&"DOCENT"===n}catch(t){return console.error("Error checking session:",t),!1}}},ahTi:function(e,t,n){"use strict";n.r(t),n.d(t,"Head",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("YwZP"),s=n("tERg"),c=n("HaKk"),l=n("3jcS"),i=n("DGZL");t.default=()=>(Object(r.useEffect)(()=>{Object(c.a)("STUDENT").then(e=>{e&&Object(o.navigate)("/dashboard")}),Object(c.a)("DOCENT").then(e=>{e&&window.location.replace("https://admin.interpol.sd-lab.nl")})},[]),a.a.createElement(s.a,null,a.a.createElement(i.a,{title:"Login"}),a.a.createElement(l.a,null)));const u=()=>a.a.createElement("title",null,"Interpol - Login")},tERg:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=e=>{let{children:t}=e;const{0:n,1:o}=Object(r.useState)(!1);return Object(r.useEffect)(()=>{o(!0)},[]),n?a.a.createElement(a.a.Fragment,null,t):null}}}]);
//# sourceMappingURL=component---src-pages-login-jsx-fe1dfd75467caa76f5f5.js.map