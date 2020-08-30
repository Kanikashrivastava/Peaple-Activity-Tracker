(this["webpackJsonpuser-activity-tracker"]=this["webpackJsonpuser-activity-tracker"]||[]).push([[0],{60:function(e){e.exports=JSON.parse('{"ok":true,"members":[{"id":"W012A3CDE","real_name":"Egon Spengler","tz":"America/Los_Angeles","activity_periods":[{"start_time":"Feb 01 2020  1:33PM","end_time":"Feb 01 2020 1:54PM"},{"start_time":"Feb 01 2020  2:33PM","end_time":"Feb 01 2020 2:54PM"},{"start_time":"Feb 01 2020  4:33PM","end_time":"Feb 01 2020 4:54PM"},{"start_time":"Mar 01 2020  11:11AM","end_time":"Mar 01 2020 12:00PM"},{"start_time":"Mar 01 2020  12:11PM","end_time":"Mar 01 2020 2:00PM"},{"start_time":"Mar 01 2020  3:11PM","end_time":"Mar 01 2020 4:00PM"},{"start_time":"Mar 16 2020  5:33PM","end_time":"Mar 16 2020 6:02PM"},{"start_time":"Mar 16 2020  6:33PM","end_time":"Mar 16 2020 7:02PM"},{"start_time":"Mar 16 2020  7:33PM","end_time":"Mar 16 2020 8:02PM"}]},{"id":"W07QCRPA4","real_name":"Glinda Southgood","tz":"Asia/Kolkata","activity_periods":[{"start_time":"Feb 01 2020  1:33PM","end_time":"Feb 01 2020 1:54PM"},{"start_time":"Feb 01 2020  2:33PM","end_time":"Feb 01 2020 2:54PM"},{"start_time":"Feb 01 2020  4:33PM","end_time":"Feb 01 2020 4:54PM"},{"start_time":"Mar 01 2020  11:11AM","end_time":"Mar 01 2020 12:00PM"},{"start_time":"Mar 01 2020  12:11PM","end_time":"Mar 01 2020 2:00PM"},{"start_time":"Mar 01 2020  3:11PM","end_time":"Mar 01 2020 4:00PM"},{"start_time":"Mar 16 2020  5:33PM","end_time":"Mar 16 2020 6:02PM"},{"start_time":"Mar 16 2020  6:33PM","end_time":"Mar 16 2020 7:02PM"},{"start_time":"Mar 16 2020  7:33PM","end_time":"Mar 16 2020 8:02PM"}]}]}')},77:function(e,t,a){e.exports=a(86)},82:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(82),a(53)),l=a(54),s=a(63),m=a(62),u={cardContainer:{margin:10}},d=a(118),f=a(121),p=a(123),v=a(41),M=Object(d.a)((function(e){return{root:{flexGrow:1}}}));function b(){var e=M();return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(v.a,{variant:"h6",component:"h6"},"Activity Tracker"))))}var g=a(31),h=a(59),_=a(126),P=a(127),y=a(131),E=a(124),w=a(61),k=a(13),j=a(130);function A(e){var t=r.a.useState(new Date),a=Object(g.a)(t,2),n=a[0],i=a[1];return r.a.createElement(k.a,{utils:w.a},r.a.createElement(E.a,{container:!0,justify:"space-around"},r.a.createElement(j.a,{margin:"normal",id:"date-picker-dialog",label:"Please select the date",format:"MM/dd/yyyy",value:n,onChange:function(t){i(t),e.selectedDate(t)},KeyboardButtonProps:{"aria-label":"change date"}})))}var O=a(125),S=a(128),T=a(129),C=function(e){return e.split(" ")},F=function(e){return e.join(" ").trim()},W=function(e){return e.length-1};var N=function(e){var t=C(e);return{date:F(t.slice(0,W(t))),time:t[W(t)].trim()}};var x=Object(d.a)((function(e){return{root:{marginTop:10,marginLeft:"20%",marginRight:"20%"},title:{fontSize:14},paper:Object(h.a)({position:"absolute",width:"80%",height:"80%",backgroundColor:e.palette.background.paper,padding:e.spacing(1),border:"2px solid "+e.palette.background.paper,overflow:"scroll"},"@media (min-width:1025px)",{width:"40%"}),activityTitle:{marginTop:20,marginBottom:10,fontSize:18,color:"#3c3c3c"},container:{marginTop:10}}}));function D(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}function B(e){var t=x(),a=r.a.useState(D),n=Object(g.a)(a,1)[0],i=r.a.useState(!1),o=Object(g.a)(i,2),c=o[0],l=o[1],s=r.a.useState(""),m=Object(g.a)(s,2),u=m[0],d=m[1],f=e.user,p=function(e,t){var a=Object.keys(e).filter((function(e){return e===t})),n=a.reduce((function(t,a){return t[a]=e[a],t}),{});return 0!==a.length||t?n:e}(function(e){return e.activity_periods.reduce((function(e,t){var a=N(t.start_time).date;return e[a]||(e[a]=[]),e[a].push({startTime:N(t.start_time).time,endTime:N(t.end_time).time}),e}),{})}(f),u);return r.a.createElement("div",{className:t.container},r.a.createElement("div",{key:f.id},r.a.createElement(_.a,{className:t.root,onClick:function(){l(!0)}},r.a.createElement(P.a,null,r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},f.real_name))),r.a.createElement(y.a,{open:c,onClose:function(){l(!1),d("")},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{style:n,className:t.paper},r.a.createElement(v.a,{id:"simple-modal-title",variant:"h6"},"User Activity Details"),r.a.createElement(A,{selectedDate:function(e){d(function(e){var t=C(new Date(e).toDateString());return F(t.slice(1))}(e))}}),Object.keys(p).length?Object.keys(p).map((function(e){return r.a.createElement(O.a,{className:t.modal,key:e},r.a.createElement(v.a,{variant:"subtitle2"},"User was active on ",e," at:"),p[e].map((function(e){return r.a.createElement(S.a,{key:e.startTime+e.endTime},r.a.createElement(T.a,{id:"simple-modal-description",primary:"".concat(e.startTime," - ").concat(e.endTime)}))})))})):r.a.createElement(v.a,{variant:"caption"},"No Activity Period found.")))))}var R=a(60),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=R.members;return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{style:u.cardContainer},e.map((function(e){return r.a.createElement(B,{user:e,key:e.id})}))))}}]),a}(n.Component);var z=function(){return r.a.createElement(U,null)},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Peaple-Activity-Tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Peaple-Activity-Tracker","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}},[[77,1,2]]]);
//# sourceMappingURL=main.330d6648.chunk.js.map