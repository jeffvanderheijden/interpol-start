(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5MSN":function(e,t,n){},"UJb+":function(e,t,n){"use strict";n.r(t),n.d(t,"Head",(function(){return w}));var a=n("q1tI"),r=n.n(a),l=n("tERg"),c=n("X2nM"),s=n("KiZe"),m=n("KQm4"),u=n("njJQ"),o=n.n(u);n("few+");var i=()=>r.a.createElement("div",{id:"successScreen"},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"},r.a.createElement("circle",{className:"path circle",fill:"none",stroke:"#73AF55",strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),r.a.createElement("polyline",{className:"path check",fill:"none",stroke:"#73AF55",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})));n("ZQvQ");var d=e=>{let{windows:t,setWindows:n}=e;const{0:l,1:c}=Object(a.useState)(!1),{0:s,1:u}=Object(a.useState)(!1),{0:d,1:p}=Object(a.useState)(null),{0:g,1:h}=Object(a.useState)(null),{0:E,1:b}=Object(a.useState)(null),{0:v,1:f}=Object(a.useState)(!1),A=Object(a.useRef)(null),w=Object(a.useRef)(null),Q=Object(a.useRef)(null),q=Object(a.useRef)(null),S=Object(a.useRef)(null),k=Object(a.useRef)(null),y="https://dashboard.interpol.sd-lab.nl/api";function O(){if(w&&w.current&&q&&q.current){const e=w.current.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,w.current.offsetHeight,w.current.offsetWidth);const t=w.current.toDataURL("image/png");q.current.setAttribute("src",t)}}return Object(a.useEffect)(()=>{if(t&&v){const e=setTimeout(()=>{Object.assign(t.find(e=>"CreateTeam"===e.name),{open:!1,invisible:!0,selected:!1});const e=Object(m.a)(t);n(e)},4e3);return()=>{clearTimeout(e)}}},[v]),Object(a.useEffect)(()=>{l&&(async()=>{try{O();const e=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});if(!Q||!Q.current)return;Q.current.srcObject=e,Q.current.addEventListener("loadedmetadata",()=>{Q.current.play()})}catch(e){console.error(e)}Q&&Q.current&&Q.current.addEventListener("canplay",()=>{s||(h(Q.current.videoHeight/(Q.current.videoWidth/d)),isNaN(g)&&h(d/(4/3)),Q.current.setAttribute("width",d),Q.current.setAttribute("height",g),w.current.setAttribute("width",d),w.current.setAttribute("height",g),u(!0))},!1)})()},[l]),Object(a.useEffect)(()=>{p(200)},[]),r.a.createElement("div",{id:"createTeam"},r.a.createElement("h1",null,"Create Team"),r.a.createElement("p",null,"You are now going to work in a group of 4 students to unmask the hacker."),r.a.createElement("div",{className:"teamImage",onClick:()=>{c(!0)},onKeyDown:()=>{c(!0)}},r.a.createElement("img",{src:o.a,ref:k,alt:"Team"})),r.a.createElement("form",{onSubmit:e=>{(async e=>{e.preventDefault();const t=new FormData;t.append("image",E),t.append("name",e.target.elements.teamName.value),t.append("class",e.target.elements.klas.value);const n=[{name:e.target.elements.student1.value,number:e.target.elements.student1_number.value},{name:e.target.elements.student2.value,number:e.target.elements.student2_number.value},{name:e.target.elements.student3.value,number:e.target.elements.student3_number.value},{name:e.target.elements.student4.value,number:e.target.elements.student4_number.value}];t.append("students",JSON.stringify(n));try{const e=await fetch(y+"/create-team",{method:"POST",body:t}),n=await e.text();if(console.log(JSON.parse(n).message),JSON.parse(n).message){f(!0);(async()=>{const e=new FormData;e.append("group_id",JSON.parse(n).message),e.append("challenge_id",4),e.append("completed",1),e.append("points",Math.floor(200*Math.random())+100);try{const t=await fetch(y+"/set-challenge-points",{method:"POST",body:e}),n=await t.text();console.log(n)}catch(t){console.error("Error setting points:",t)}})()}}catch(a){console.error("Error creating team:",a)}})(e)}},r.a.createElement("input",{type:"hidden",id:"image",name:"image",value:E,required:!0}),r.a.createElement("input",{type:"text",id:"teamName",name:"teamName",placeholder:"Team naam",required:!0}),r.a.createElement("input",{type:"text",id:"klas",name:"klas",placeholder:"Klas",required:!0}),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Student 1"),r.a.createElement("input",{className:"half",type:"text",id:"student1",name:"student1",placeholder:"Student voornaam",required:!0})),r.a.createElement("input",{className:"half",id:"student1_number",name:"student1_number",type:"number",pattern:"\\d*",minLength:"6",maxLength:"6",placeholder:"Student nummer",required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Student 2"),r.a.createElement("input",{className:"half",type:"text",id:"student2",name:"student2",placeholder:"Student voornaam",required:!0})),r.a.createElement("input",{className:"half",type:"number",id:"student2_number",name:"student2_number",placeholder:"Student nummer",pattern:"\\d*",minLength:"6",maxLength:"6",required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Student 3"),r.a.createElement("input",{className:"half",type:"text",id:"student3",name:"student3",placeholder:"Student voornaam",required:!0})),r.a.createElement("input",{className:"half",type:"number",id:"student3_number",name:"student3_number",placeholder:"Student nummer",pattern:"\\d*",minLength:"6",maxLength:"6",required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Student 4"),r.a.createElement("input",{className:"half",type:"text",id:"student4",name:"student4",placeholder:"Student voornaam",required:!0})),r.a.createElement("input",{className:"half",type:"number",id:"student4_number",name:"student4_number",placeholder:"Student nummer",pattern:"\\d*",minLength:"6",maxLength:"6",required:!0})),r.a.createElement("div",{className:"buttonWrapper"},!v&&r.a.createElement("button",{type:"submit",className:"btn"},r.a.createElement("span",null,"Create team")))),l&&r.a.createElement("div",{className:"camera",ref:A},r.a.createElement("video",{ref:Q,id:"video"},"Video stream not available."),r.a.createElement("div",{className:"buttonWrapper"},r.a.createElement("button",{onClick:e=>{(e=>{if(w&&w.current&&q&&q.current&&Q&&Q.current&&k&&k.current){const e=w.current.getContext("2d");if(d&&g){w.current.width=d,w.current.height=g,e.drawImage(Q.current,0,0,d,g);const t=w.current.toDataURL("image/png");b(t),q.current.setAttribute("src",t),k.current.setAttribute("src",t)}else O()}e.preventDefault()})(e)},ref:S,type:"button",id:"startbutton",className:"btn"},r.a.createElement("span",null,"Take photo")),r.a.createElement("button",{onClick:()=>{c(!1)},type:"button",id:"savebutton",className:"btn"},r.a.createElement("span",null,"Save photo"))),r.a.createElement("div",{className:"output"},r.a.createElement("div",{className:"imgWrapper"},r.a.createElement("img",{ref:q,id:"photo",alt:"Team image"})),r.a.createElement("canvas",{id:"canvas",ref:w}))),v&&r.a.createElement(i,null))};n("5MSN");var p=()=>r.a.createElement("form",{id:"loginForm",onSubmit:e=>{!async function(e){e.preventDefault();const t=new FormData;t.append("username",e.target.elements.username.value),t.append("password",e.target.elements.password.value);try{const e=await fetch("https://api.interpol.sd-lab.nl/api/create-session",{method:"POST",body:t});if(!e.ok)throw new Error("HTTP error! Status: "+e.status);const n=await e.json();"Docent ingelogd"===n.message?(console.log("Docent is succesvol ingelogd!"),console.log("Sessie:",n.session)):"Student ingelogd"===n.message?console.log("Student is succesvol ingelogd!"):console.error("Er ging iets fout met inloggen:",n.message)}catch(n){console.error("Error creating team:",n)}}(e)}},r.a.createElement("input",{type:"text",id:"username",placeholder:"Studentnummer"}),r.a.createElement("input",{type:"password",id:"password",placeholder:"Wachtwoord"}),r.a.createElement("button",{type:"submit",className:"btn"},"Inloggen")),g=n("ntAx"),h=n("DGZL"),E=n("/MKj"),b=n("6Bje"),v=n("ThPt"),f=n("ptHt");var A=()=>{const e=Object(E.b)(),t="tutorialFinal"===Object(E.c)(f.g),n=Object(E.c)(f.f),{0:l,1:c}=Object(a.useState)(n);Object(a.useEffect)(()=>{c(n)},[t,n]);return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(b.a,{explainer:"agent"},1===l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Agent X:"),r.a.createElement("p",null,"Mooi werk, agent. Je hebt de introductie succesvol doorlopen. Dankzij het virus dat je hebt geupload weten we nu dat de hacker gebruik maakt van een ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=s0sgiY93w9c&ab_channel=ESET",target:"_blank"},'"BotNet".'))),2===l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Agent X:"),r.a.createElement("p",null,'Je gaat nu in een groep van 4 studenten aan de slag om de hacker te ontmaskeren. Je zult per groep een "Node" van het BotNet gaan uitschakelen. Pas als we alle bots hebben kunnen vernietigen weten we waar de hacker zich exact bevindt. Begin met het maken van een team met 3 andere studenten door te klikken op: "CreateTeam".')),l<2&&r.a.createElement(v.a,{className:"tutorialButton",onClick:()=>{l<2&&(c(l+1),e(Object(f.b)()))}},"Volgende"),2===l&&r.a.createElement(v.a,{className:"tutorialButton",onClick:()=>{e(Object(f.d)(1)),e(Object(f.c)())}},"Sluiten")))};t.default=()=>{const{0:e,1:t}=Object(a.useState)([{name:"CreateTeam",open:!1,invisible:!1,selected:!1,left:20,top:20},{name:"Login",open:!1,invisible:!1,selected:!1,left:60,top:60},{name:"SateliteView",open:!1,invisible:!1,selected:!1,left:100,top:100}]);return r.a.createElement(l.a,null,r.a.createElement(g.a,{windows:e,setWindows:t},e.map((n,a)=>r.a.createElement("div",{key:"window"+a},n.open&&r.a.createElement(c.a,{window:n,windows:e,setWindows:t},"SateliteView"===n.name&&r.a.createElement(s.a,null),"CreateTeam"===n.name&&r.a.createElement(d,{windows:e,setWindows:t}),"Login"===n.name&&r.a.createElement(p,null)))),r.a.createElement(h.a,{title:"Dashboard"}),r.a.createElement(A,null)))};const w=()=>r.a.createElement("title",null,"Interpol - Dashboard")},ZQvQ:function(e,t,n){},"few+":function(e,t,n){},njJQ:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-dashboard-jsx-cb78514f0ab5bbd9a959.js.map