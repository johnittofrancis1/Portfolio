(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/deeplearning.3941c07f.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.5726d5ec.svg"},function(e,t,a){e.exports=a.p+"static/media/github.abfbe2cf.svg"},function(e,t,a){e.exports=a.p+"static/media/PCI.91a9f272.png"},,,,,,function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return r}));var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(t){if(console.log(e.NODE_ENV),"serviceWorker"in navigator){if(new URL("/Portfolio",window.location.href).origin!==window.location.origin)return void console.log("Public URL");window.addEventListener("load",(function(){var e="".concat("/Portfolio","/service-worker.js");n?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(e,t)}))}}function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}}).call(this,a(37))},function(e,t,a){e.exports=a(38)},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/instagram.ba5c52a0.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.ac39fe0e.svg"},function(e,t,a){e.exports=a.p+"static/media/passport.a0b4c394.jpg"},function(e,t,a){e.exports=a.p+"static/media/LP.d614db3a.svg"},function(e,t,a){e.exports=a.p+"static/media/michigan.86115066.svg"},function(e,t,a){e.exports=a.p+"static/media/Monopoly.3ecfc43f.png"},function(e,t,a){e.exports=a.p+"static/media/CMS.83b10b73.png"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),o=a(1),l=a(2),s=a(4),m=a(3),u=a(6),d=a(7),p=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={navList:["About","Curriculum Vitae","Work+Fun","Contact"],mobileNavOpen:!1,appear:!0,nonZeroState:!1},e.toggleMenu=function(){e.state.mobileNavOpen?document.body.style.overflow=null:document.body.style.overflow="hidden",e.setState({mobileNavOpen:!e.state.mobileNavOpen})},e.renderNavList=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e.state.navList.map((function(e,t){return r.a.createElement("a",{style:{fontSize:"1rem"},key:t,className:"nav-item",href:"#".concat(e)},r.a.createElement("span",{className:"text-neon"},("0"+(t+1)).slice(-2),". "),e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.pageYOffset;window.onscroll=function(){var a=window.pageYOffset;0===a?e.setState({nonZeroState:!1,appear:!0}):(e.setState({nonZeroState:!0}),t>a?e.setState({appear:!0}):e.setState({appear:!1})),t=a}}},{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{query:{maxWidth:800}},(function(t){return t?r.a.createElement("header",{className:"".concat(e.state.appear?"appear":"hide"," ").concat(e.state.nonZeroState?"non-zero-state":"")},r.a.createElement("nav",{style:{width:"90%"},className:"nav-bar"},r.a.createElement("a",{className:"logo",href:"home"},r.a.createElement(d.a,{src:a(11),alt:"logo"})),r.a.createElement("div",{onClick:function(){return e.toggleMenu()},id:e.state.mobileNavOpen?"cross-btn":"burger-btn"},r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"bar"})),r.a.createElement("div",{className:"vertical-menu ".concat(e.state.mobileNavOpen?"appear":"hide")},e.renderNavList(!0),r.a.createElement("button",{className:"nav-item btn large"},"Resume"))),e.state.mobileNavOpen&&r.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"fixed",top:0,left:0,right:0,bottom:0,backdropFilter:"blur(5px)",zIndex:3}})):r.a.createElement("header",{className:"".concat(e.state.appear?"appear":"hide"," ").concat(e.state.nonZeroState?"non-zero-state":"")},r.a.createElement("nav",{style:{width:"95%"},className:"nav-bar"},r.a.createElement("a",{className:"logo",href:"home"},r.a.createElement(d.a,{src:a(11),alt:"logo"})),r.a.createElement("div",{className:"menu"},e.renderNavList(!1),r.a.createElement("button",{className:"nav-item btn"},"Resume"))))}))}}]),n}(r.a.Component),f=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"social-bar ".concat(this.props.mobile?"mobile":"")},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/johnittofrancis/",target:"blank"},r.a.createElement(d.a,{beforeInjection:function(e){return e.classList.add("social-icons")},src:a(29)}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/johnitto-francis-030861157/",target:"blank"},r.a.createElement(d.a,{beforeInjection:function(e){return e.classList.add("social-icons")},src:a(30)}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/johnittofrancis1",target:"blank"},r.a.createElement(d.a,{beforeInjection:function(e){return e.classList.add("social-icons")},src:a(12)}))),!this.props.mobile&&r.a.createElement("li",{style:{bottom:"0vh",position:"fixed",left:"5vw"},className:"vertical-line"}))}}]),n}(r.a.Component),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"email-bar"},r.a.createElement("a",{className:"text-large",id:"email-id",href:"mailto:johnittofrancis46@gmail.com"},"johnittofrancis46@gmail.com"),r.a.createElement("div",{style:{bottom:"0vh",position:"fixed",right:"4.8vw"},className:"vertical-line"}))}}]),a}(r.a.Component),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{query:{maxWidth:800}},(function(e){return r.a.createElement("div",{id:"home"},r.a.createElement("p",{style:{fontSize:"1rem"},className:"text-neon"},"Hi, my name is"),r.a.createElement("div",{style:{fontSize:e?"2.25rem":"3.5rem"},className:"text-whitesmoke"},"Johnitto Francis. J"),r.a.createElement("div",{style:{fontSize:e?"2.25rem":"3.5rem"},className:"text-ash"},"I am a Software Developer"),r.a.createElement("p",{style:{fontSize:e?"1rem":"1.25rem",width:e?"100%":"50%"},className:"font-sans text-ash"},"I am focused primarily on Backend work but also interested in Mobile Application Development, Machine Learning and Computer Vision."),r.a.createElement("a",{href:"mailto:johnittofrancis46@gmail.com"},r.a.createElement("button",{className:"btn large"},"Get in Touch")))}))}}]),a}(r.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("div",{style:{backgroundColor:this.props.filterColor},className:"filter-neon"}),r.a.createElement("img",{style:{opacity:this.props.dim?.25:1},src:this.props.src,alt:this.props.alt}))}}]),a}(r.a.Component),b=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(u.a,{query:{maxWidth:800}},(function(e){return r.a.createElement("div",{id:"about"},r.a.createElement("div",{className:"section-header"},r.a.createElement("div",{className:"text-whitesmoke"},r.a.createElement("span",{className:"text-neon"},"01. "),"About Me"),r.a.createElement("div",{className:"horizontal-line"})),r.a.createElement("div",{className:"abt-body ".concat(e?"mobile":"")},r.a.createElement("p",{id:"abt-content",className:"text-ash font-sans"},"Hello! I'm Johnitto Francis J, a software engineer based in ",r.a.createElement("span",{className:"text-neon"},"Chennai, India.")," ",r.a.createElement("br",null),r.a.createElement("br",null)," I enjoy developing projects whether that be applications, ML models, websites or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. I am currently pursuing my ",r.a.createElement("span",{className:"text-neon"},"Computer Science Engineering")," from ",r.a.createElement("span",{className:"text-neon"},"St.Joseph's College of Engineering."),"I am expected to graduate in May, 2021."),r.a.createElement("div",{id:"abt-photo"},r.a.createElement("div",{className:"img-frame"}),r.a.createElement(g,{src:a(31),alt:"passport"}))))}))}}]),n}(r.a.Component),E=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={courseList:[{name:"Java Programming MasterClass",institute:"Learn Programming",logo:a(32)},{name:"Deep Learning Specialization",institute:"deeplearning.ai",logo:a(10)},{name:"Tensorflow Developer",institute:"deeplearning.ai",logo:a(10)},{name:"NLP Specialization",institute:"deeplearning.ai",logo:a(10)},{name:"Applied DataScience Specialization",institute:"deeplearning.ai",logo:a(33)}]},e.renderCourseList=function(t){return e.state.courseList.map((function(e,a){return r.a.createElement("div",{key:a,className:"course ".concat(t?"small":"")},r.a.createElement(d.a,{beforeInjection:function(e){return e.classList.add("course-logo")},src:e.logo}),r.a.createElement("div",{className:"course-body"},r.a.createElement("div",{className:"text-whitesmoke"}," ",e.name," "),r.a.createElement("div",{className:"text-neon text-italic"},"@  ",e.institute," ")))}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{query:{maxWidth:800}},(function(t){return r.a.createElement("div",{className:"tab-content"},r.a.createElement("div",{id:"courses"},e.renderCourseList(t)))}))}}]),n}(r.a.Component),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={educationList:[{name:"Computer Science and Engineering",duration:"2017 - 2021",institute:"St.Joseph's College of Engineering",place:"Chennai",grade:"CGPA: 8.86 (Upto 6<sup>th</sup> Semester)"},{name:"12<sup>th</sup>",duration:"2016 - 2017",institute:"Sahayamatha Matric Hr Sec School",place:"Karaikudi",grade:"Percentage: 97"},{name:"10<sup>th</sup>",duration:"2014 - 2015",institute:"Sahayamatha Matric Hr Sec School",place:"Karaikudi",grade:"Percentage: 98"}]},e.renderEducationList=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e.state.educationList.map((function(e,a){return t?r.a.createElement("div",{key:a},r.a.createElement("div",{className:"education-title"},r.a.createElement("div",{style:{fontSize:"1.25rem"},className:"text-whitesmoke",dangerouslySetInnerHTML:{__html:e.name}})),r.a.createElement("div",{className:"education-title"},r.a.createElement("div",{style:{fontSize:"1rem"},className:"text-neon"},e.institute)),r.a.createElement("p",{style:{fontSize:"0.75rem"},className:"text-italic text-ash",dangerouslySetInnerHTML:{__html:e.grade}})):r.a.createElement("div",{key:a},r.a.createElement("div",{className:"education-title"},r.a.createElement("div",{style:{fontSize:"1.5rem"},className:"text-whitesmoke",dangerouslySetInnerHTML:{__html:e.name}}),r.a.createElement("div",{style:{fontSize:"1.35rem"},className:"text-whitesmoke"},e.duration)),r.a.createElement("div",{className:"education-title"},r.a.createElement("div",{style:{fontSize:"1.5rem"},className:"text-neon"},e.institute),r.a.createElement("div",{style:{fontSize:"1.25rem"},className:"text-whitesmoke"},e.place)),r.a.createElement("p",{style:{fontSize:"0.85rem"},className:"text-italic text-ash",dangerouslySetInnerHTML:{__html:e.grade}}))}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{query:{maxWidth:800}},(function(t){return r.a.createElement("div",{className:"tab-content",id:"education"},e.renderEducationList(t))}))}}]),a}(r.a.Component),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={skills:[{name:"C",type:"prog-language"},{name:"Java",type:"prog-language"},{name:"OOPS",type:"tech"},{name:"Python",type:"prog-language"},{name:"Machine-Learning",type:"tech"},{name:"Deep Learning",type:"tech"},{name:"TensorFlow",type:"framework"},{name:"NLP",type:"tech"},{name:"PHP",type:"prog-language"},{name:"HTML",type:"prog-language"},{name:"CSS",type:"prog-language"},{name:"Javascript",type:"prog-language"},{name:"ReactJS",type:"framework"},{name:"MySQL",type:"prog-language"},{name:"Android",type:"tech"},{name:"XML",type:"prog-language"},{name:"React Native",type:"framework"},{name:"ExpressJS",type:"framework"}]},e.renderSkillsList=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e.state.skills.map((function(e,a){return r.a.createElement("div",{key:a,className:"".concat(e.type," ").concat(t?"small":"")}," ",e.name," ")}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{query:{maxWidth:800}},(function(t){return r.a.createElement("div",{className:"tab-content",id:"skills"},r.a.createElement("div",{id:"skills-body"},e.renderSkillsList(t)))}))}}]),a}(r.a.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={trainingList:[{name:"Internship",desc:"Web Development",company:"Oneyes Technologies"},{name:"Implant Training",desc:"Android Development",company:"Codebind Technologies"},{name:"Certification",desc:"Web Development",company:"Eyeopen Technologies"}]},e.renderTrainingList=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e.state.trainingList.map((function(e,t){return r.a.createElement("div",{key:t,className:"training"},r.a.createElement("div",{style:{fontSize:"1.25rem"},className:"text-whitesmoke"},e.name," - ",r.a.createElement("span",{className:"text-ash"},e.desc)),r.a.createElement("div",{style:{fontSize:"1rem"},className:"text-neon"},"@ ",e.company))}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{query:{maxWidth:800}},(function(t){return r.a.createElement("div",{className:"tab-content",id:"training"},r.a.createElement("div",{id:"training-body"},e.renderTrainingList(t)))}))}}]),a}(r.a.Component),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={activeContent:"Education",tabList:["Education","Courses","Skills","Training"]},e.activeOrNot=function(t){return e.state.activeContent===t?"active":""},e.renderTabList=function(){return e.state.tabList.map((function(t,a){return r.a.createElement("li",{key:a,className:"tab-btn ".concat(e.activeOrNot(t)),onClick:function(){return e.setState({activeContent:t})}},t)}))},e.renderContent=function(){switch(e.state.activeContent){case"Education":return r.a.createElement(y,null);case"Courses":return r.a.createElement(E,null);case"Skills":return r.a.createElement(N,null);case"Training":return r.a.createElement(k,null);default:return r.a.createElement(y,null)}},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"cv"},r.a.createElement("div",{className:"section-header"},r.a.createElement("div",{className:"text-whitesmoke"},r.a.createElement("span",{className:"text-neon"},"02. "),"Curriculum Vitae"),r.a.createElement("div",{className:"horizontal-line"})),r.a.createElement("ul",{className:"tabs"},this.renderTabList()),this.renderContent())}}]),a}(r.a.Component),j=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).renderTechList=function(){return e.props.techList.map((function(e,t){return r.a.createElement("div",{key:t,style:{fontSize:"1rem"},className:"font-sans work-tech text-ash"},e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{query:{maxWidth:800}},(function(t){return r.a.createElement("div",{className:"work ".concat(e.props.reverse?"reverse":""," ").concat(t?"mobile":"")},r.a.createElement("div",{className:"work-image"},r.a.createElement(g,{dim:t,filterColor:t?"#172a45b3":"#64fedabf",src:e.props.imageSrc})),r.a.createElement("div",{className:"work-content"},r.a.createElement("div",{className:"work-title"},r.a.createElement("div",{style:{fontSize:"1rem"},className:"text-neon"},e.props.titleTag),r.a.createElement("div",{style:{fontSize:"2rem"},className:"text-whitesmoke"},e.props.title)),r.a.createElement("div",{style:{fontSize:"1rem"},className:"work-desc font-sans"},e.props.desc),r.a.createElement("div",{className:"work-techs"},e.renderTechList()),r.a.createElement("a",{href:e.props.link},r.a.createElement(d.a,{beforeInjection:function(e){return e.classList.add("".concat(t?"work-link-icon-large":"work-link-icon"))},src:a(12)}))))}))}}]),n}(r.a.Component),O=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={works:[{title:"Monopoly",titleTag:"Android App",desc:"An Android Application that replicates the infamous 2 - 4 Multiplayer board game - Monopoly.",imageSrc:a(34),techList:["Android Studio","Java","XML"],link:"https://github.com/johnittofrancis1/Monopoly"},{title:"CMS",titleTag:"Web Application",desc:"A Content Management System for blogs with admin module using Bootstrap and PHP",imageSrc:a(35),techList:["PHP","HTML","Bootstrap"],link:"https://github.com/johnittofrancis1/CMS"},{title:"PCI",titleTag:"Android App",desc:"Android Application calculates a common PCI - Pavement Condition Index for a road by assessing damages in the road using Image Classification from the pictures of the road.",imageSrc:a(13),techList:["Android Studio","Java","XML","FireBase"],link:"https://github.com/johnittofrancis1/PCI"},{title:"PCI",titleTag:"Android App",desc:"Android Application calculates a common PCI - Pavement Condition Index for a road by assessing damages in the road using Image Classification from the pictures of the road.",imageSrc:a(13),techList:["Android Studio","Java","XML","FireBase"],link:"https://github.com/johnittofrancis1/PCI"}]},e.renderWorks=function(){return e.state.works.map((function(e,t){return t%2===0?r.a.createElement(j,{key:t,title:e.title,titleTag:e.titleTag,desc:e.desc,imageSrc:e.imageSrc,techList:e.techList,link:e.link}):r.a.createElement(j,{key:t,reverse:!0,title:e.title,titleTag:e.titleTag,desc:e.desc,imageSrc:e.imageSrc,techList:e.techList,link:e.link})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"works",className:"sections"},r.a.createElement("div",{className:"section-header"},r.a.createElement("div",{className:"text-whitesmoke mr-3"},r.a.createElement("span",{className:"text-neon"},"03. "),"Some things I've built"),r.a.createElement("div",{className:"horizontal-line"})),r.a.createElement("div",{id:"works-body"},this.renderWorks()))}}]),n}(r.a.Component),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"contact",className:"sections"},r.a.createElement("div",{style:{fontSize:"1rem"},className:"text-neon"},"04. What's next?"),r.a.createElement("div",{style:{fontSize:"3rem"},className:"text-whitesmoke"},"Get in Touch"),r.a.createElement("div",{style:{fontSize:"1rem"},className:"text-ash"},"I am currently looking for any new opportunities, my inbox is always open."),r.a.createElement("a",{href:"mailto:johnittofrancis46@gmail.com"},r.a.createElement("button",{className:"btn large"},"Say Hello")))}}]),a}(r.a.Component),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(v,null),r.a.createElement(b,null),r.a.createElement(w,null),r.a.createElement(O,null),r.a.createElement(S,null))}}]),a}(r.a.Component),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{query:{maxWidth:800}},(function(e){return e?r.a.createElement("footer",null,r.a.createElement(f,{mobile:!0}),r.a.createElement("div",{id:"footer-text"},"Designed and built by Johnitto Francis")):r.a.createElement("footer",null,r.a.createElement("div",{id:"footer-text"},"Designed and built by Johnitto Francis"))}))}}]),a}(r.a.Component),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{query:{maxWidth:800}},(function(e){return e?r.a.createElement("div",{className:"main"},r.a.createElement(x,null),r.a.createElement(C,null)):r.a.createElement("div",{className:"main"},r.a.createElement(x,null),r.a.createElement(f,null),r.a.createElement(h,null),r.a.createElement(C,null))}))}}]),a}(r.a.Component),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(p,null),r.a.createElement(L,null))}}]),a}(r.a.Component),M=(a(36),a(19));c.a.render(r.a.createElement(A,null),document.querySelector("#root")),M.a()}],[[20,1,2]]]);
//# sourceMappingURL=main.2d0eebb5.chunk.js.map