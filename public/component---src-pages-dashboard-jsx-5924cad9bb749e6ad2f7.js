(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Tq82:function(e,t,a){},"UJb+":function(e,t,a){"use strict";a.r(t),a.d(t,"Head",(function(){return O}));var n=a("q1tI"),r=a.n(n),l=a("YwZP"),c=a("tERg"),u=a("X2nM"),m=a("HaKk"),s=a("KiZe"),d=a("KQm4"),i=a("njJQ"),o=a.n(i);a("few+");var p=()=>r.a.createElement("div",{id:"successScreen"},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"},r.a.createElement("circle",{className:"path circle",fill:"none",stroke:"#73AF55",strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),r.a.createElement("polyline",{className:"path check",fill:"none",stroke:"#73AF55",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})));a("ZQvQ");var b=e=>{let{windows:t,setWindows:a,studentData:l}=e;const{0:c,1:u}=Object(n.useState)(!1),{0:s,1:i}=Object(n.useState)(!1),{0:b,1:E}=Object(n.useState)(null),{0:h,1:g}=Object(n.useState)(null),{0:v,1:f}=Object(n.useState)(null),{0:A,1:w}=Object(n.useState)(!1),q=Object(n.useRef)(null),Q=Object(n.useRef)(null),O=Object(n.useRef)(null),k=Object(n.useRef)(null),S=Object(n.useRef)(null),D=Object(n.useRef)(null);function C(){if(Q&&Q.current&&k&&k.current){const e=Q.current.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,Q.current.offsetHeight,Q.current.offsetWidth);const t=Q.current.toDataURL("image/png");k.current.setAttribute("src",t)}}return Object(n.useEffect)(()=>{if(t&&A){const e=setTimeout(()=>{Object.assign(t.find(e=>"CreateTeam"===e.name),{open:!1,invisible:!0,selected:!1});const e=Object(d.a)(t);a(e)},4e3);return()=>{clearTimeout(e)}}},[A]),Object(n.useEffect)(()=>{c&&(async()=>{try{C();const e=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});if(!O||!O.current)return;O.current.srcObject=e,O.current.addEventListener("loadedmetadata",()=>{O.current.play()})}catch(e){console.error(e)}O&&O.current&&O.current.addEventListener("canplay",()=>{s||(g(O.current.videoHeight/(O.current.videoWidth/b)),isNaN(h)&&g(b/(4/3)),O.current.setAttribute("width",b),O.current.setAttribute("height",h),Q.current.setAttribute("width",b),Q.current.setAttribute("height",h),i(!0))},!1)})()},[c]),Object(n.useEffect)(()=>{E(200)},[]),r.a.createElement("div",{id:"createTeam"},r.a.createElement("h1",null,"Create Team"),r.a.createElement("p",null,"You are now going to work in a group of 4 students to unmask the hacker."),r.a.createElement("div",{className:"teamImage",onClick:()=>{u(!0)},onKeyDown:()=>{u(!0)}},r.a.createElement("img",{src:o.a,ref:D,alt:"Team"})),r.a.createElement("form",{onSubmit:e=>{(async e=>{e.preventDefault();const t=new FormData;t.append("image",v),t.append("name",e.target.elements.teamName.value),t.append("class",e.target.elements.klas.value);const a=[{name:e.target.elements.student1.value,number:e.target.elements.student1_number.value},{name:e.target.elements.student2.value,number:e.target.elements.student2_number.value},{name:e.target.elements.student3.value,number:e.target.elements.student3_number.value},{name:e.target.elements.student4.value,number:e.target.elements.student4_number.value}];t.append("students",JSON.stringify(a)),Object(m.b)(t,w).then(e=>{console.log(e),setTimeout(()=>{window.location.reload()},1500)})})(e)}},r.a.createElement("input",{type:"hidden",id:"image",name:"image",value:v,required:!0}),r.a.createElement("input",{type:"text",id:"teamName",name:"teamName",placeholder:"Team naam",required:!0}),r.a.createElement("input",{type:"text",id:"klas",name:"klas",placeholder:"Klas",value:l.class,disabled:!0,required:!0}),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Student 1"),r.a.createElement("input",{className:"half",type:"text",id:"student1",name:"student1",placeholder:"Student voornaam",value:l.name,disabled:!0,required:!0})),r.a.createElement("input",{className:"half",id:"student1_number",name:"student1_number",type:"number",pattern:"\\d*",value:l.studentNumber,disabled:!0,minLength:"6",maxLength:"6",placeholder:"Student nummer",required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Student 2"),r.a.createElement("input",{className:"half",type:"text",id:"student2",name:"student2",placeholder:"Student voornaam",required:!0})),r.a.createElement("input",{className:"half",type:"number",id:"student2_number",name:"student2_number",placeholder:"Student nummer",pattern:"\\d*",minLength:"6",maxLength:"6",required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Student 3"),r.a.createElement("input",{className:"half",type:"text",id:"student3",name:"student3",placeholder:"Student voornaam",required:!0})),r.a.createElement("input",{className:"half",type:"number",id:"student3_number",name:"student3_number",placeholder:"Student nummer",pattern:"\\d*",minLength:"6",maxLength:"6",required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Student 4"),r.a.createElement("input",{className:"half",type:"text",id:"student4",name:"student4",placeholder:"Student voornaam",required:!0})),r.a.createElement("input",{className:"half",type:"number",id:"student4_number",name:"student4_number",placeholder:"Student nummer",pattern:"\\d*",minLength:"6",maxLength:"6",required:!0})),r.a.createElement("div",{className:"buttonWrapper"},!A&&r.a.createElement("button",{type:"submit",className:"btn"},r.a.createElement("span",null,"Create team")))),c&&r.a.createElement("div",{className:"camera",ref:q},r.a.createElement("video",{ref:O,id:"video"},"Video stream not available."),r.a.createElement("div",{className:"buttonWrapper"},r.a.createElement("button",{onClick:e=>{(e=>{if(Q&&Q.current&&k&&k.current&&O&&O.current&&D&&D.current){const e=Q.current.getContext("2d");if(b&&h){Q.current.width=b,Q.current.height=h,e.drawImage(O.current,0,0,b,h);const t=Q.current.toDataURL("image/png");f(t),k.current.setAttribute("src",t),D.current.setAttribute("src",t)}else C()}e.preventDefault()})(e)},ref:S,type:"button",id:"startbutton",className:"btn"},r.a.createElement("span",null,"Take photo")),r.a.createElement("button",{onClick:()=>{u(!1)},type:"button",id:"savebutton",className:"btn"},r.a.createElement("span",null,"Save photo"))),r.a.createElement("div",{className:"output"},r.a.createElement("div",{className:"imgWrapper"},r.a.createElement("img",{ref:k,id:"photo",alt:"Team image"})),r.a.createElement("canvas",{id:"canvas",ref:Q}))),A&&r.a.createElement(p,null))};a("Tq82");var E=()=>{const{0:e}=Object(n.useState)(["d1a","d1b","d1c","d1d","d1e","d1f"]),{0:t,1:a}=Object(n.useState)("d1a"),{0:l,1:c}=Object(n.useState)([]);return Object(n.useEffect)(()=>{Object(m.d)(t).then(e=>{e.count>1?c(e):c([e])})},[t]),r.a.createElement("div",{id:"scoreBoard"},r.a.createElement("ul",{className:"classSwitch"},e.map(e=>r.a.createElement("li",{className:e===t?"active":"",onClick:()=>{a(e)}},e.toUpperCase()))),l&&l.length>0&&r.a.createElement("div",{className:"list"},l.map(e=>r.a.createElement("div",null,e.name," - ",e.points))))},h=a("ntAx"),g=a("DGZL"),v=a("/MKj"),f=a("6Bje"),A=a("ThPt"),w=a("ptHt");var q=()=>{const e=Object(v.b)(),t="tutorialFinal"===Object(v.c)(w.g),a=Object(v.c)(w.f),{0:l,1:c}=Object(n.useState)(a);Object(n.useEffect)(()=>{c(a)},[t,a]);return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(f.a,{explainer:"agent"},1===l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Agent X:"),r.a.createElement("p",null,"Mooi werk, agent. Je hebt de introductie succesvol doorlopen. Dankzij het virus dat je hebt geupload weten we nu dat de hacker gebruik maakt van een ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=s0sgiY93w9c&ab_channel=ESET",target:"_blank"},'"BotNet".'))),2===l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Agent X:"),r.a.createElement("p",null,'Je gaat nu in een groep van 4 studenten aan de slag om de hacker te ontmaskeren. Je zult per groep een "Node" van het BotNet gaan uitschakelen. Pas als we alle bots hebben kunnen vernietigen weten we waar de hacker zich exact bevindt. Begin met het maken van een team met 3 andere studenten door te klikken op: "CreateTeam".')),l<2&&r.a.createElement(A.a,{className:"tutorialButton",onClick:()=>{l<2&&(c(l+1),e(Object(w.b)()))}},"Volgende"),2===l&&r.a.createElement(A.a,{className:"tutorialButton",onClick:()=>{e(Object(w.d)(1)),e(Object(w.c)())}},"Sluiten")))};a("d0g4");var Q=e=>{let{student:t,logout:a}=e;return r.a.createElement("div",{class:"studentInfo"},t.team&&r.a.createElement("div",{id:"team"},r.a.createElement("h2",null,t.team),r.a.createElement("img",{src:"https://api.interpol.sd-lab.nl/"+t.teamImage,alt:"Team"})),t&&t.name&&r.a.createElement("div",{id:"student"},r.a.createElement("div",{id:"studentName"},t.name),r.a.createElement("div",{id:"studentNumber"},t.studentNumber),r.a.createElement("div",{id:"class"},t.class.substring(0,3)),r.a.createElement(A.a,{onClick:()=>{a()}},"Log out")))};t.default=()=>{const{0:e,1:t}=Object(n.useState)([]),{0:a,1:d}=Object(n.useState)({});return Object(n.useEffect)(()=>{Object(m.a)("STUDENT").then(e=>{!e&&Object(l.navigate)("/login"),e&&Object(m.e)().then(e=>{e?Object(m.c)(e[0].samaccountname[0]).then(a=>{a?(d({name:e[0].name[0],class:e[0].description[0],studentNumber:e[0].samaccountname[0],team:a.name,teamImage:a.image_url}),t([{name:"SateliteView",open:!1,invisible:!1,selected:!1,left:20,top:20},{name:"ScoreBoard",open:!1,invisible:!1,selected:!1,left:120,top:120}])):(console.warn("No additional data, student does not exist in interpol database."),d({name:e[0].name[0],class:e[0].description[0],studentNumber:e[0].samaccountname[0]}),t([{name:"CreateTeam",open:!1,invisible:!1,selected:!1,left:20,top:20}]))}):console.error("Error getting student data")})}),Object(m.a)("DOCENT").then(e=>{e&&window.location.replace("https://admin.interpol.sd-lab.nl")})},[]),r.a.createElement(c.a,null,r.a.createElement(h.a,{windows:e,setWindows:t},e.map((n,l)=>r.a.createElement("div",{key:"window"+l},n.open&&r.a.createElement(u.a,{window:n,windows:e,setWindows:t},"SateliteView"===n.name&&r.a.createElement(s.a,null),"CreateTeam"===n.name&&r.a.createElement(b,{windows:e,setWindows:t,studentData:a}),"ScoreBoard"===n.name&&r.a.createElement(E,null)))),a&&r.a.createElement(Q,{student:a,logout:m.g}),r.a.createElement(g.a,{title:"Dashboard"}),r.a.createElement(q,null)))};const O=()=>r.a.createElement("title",null,"Interpol - Dashboard")},ZQvQ:function(e,t,a){},d0g4:function(e,t,a){},"few+":function(e,t,a){},njJQ:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-dashboard-jsx-5924cad9bb749e6ad2f7.js.map