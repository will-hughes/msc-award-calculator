(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(4),i=a.n(n),o=a(5),s=a(1),c=a(2);a(13);function u(e){return e.map(function(e){return Object(s.a)({},e,{creditxMarks:e.credits*e.mark||0})}).map(function(e){return Object(s.a)({},e,{lt40:e.mark<40?e.credits:0,lt50:e.mark<50?e.credits:0,gte50:e.mark>=50?e.credits:0,gte60:e.mark>=60?e.credits:0,gte70:e.mark>=70?e.credits:0})}).reduce(function(e,t){return e.credits+=t.credits,e.creditxMarks+=t.creditxMarks,e.lt40+=t.lt40,e.lt50+=t.lt50,e.gte50+=t.gte50,e.gte60+=t.gte60,e.gte70+=t.gte70,t.isDissertation&&(e.dissertation=t.mark),e.weightedAverage=e.creditxMarks/e.credits,e},{credits:0,creditxMarks:0,lt40:0,lt50:0,gte50:0,gte60:0,gte70:0,dissertation:0})}var d=function(e){var t=u(e);return function(e){var t=e.dissertation,a=e.lt40,r=e.lt50,l=e.weightedAverage,n=e.gte70;return!(t<60)&&!(a>0)&&!(r>55)&&!(l<68)&&(l>=70||n>=90)}(t)?"MSc Distinction":function(e){var t=e.dissertation,a=e.lt40,r=e.lt50,l=e.weightedAverage,n=e.gte60;return!(t<50)&&!(a>0)&&!(r>55)&&!(l<58)&&(l>=60||n>=90)}(t)?"MSc Merit":function(e){var t=e.dissertation,a=e.lt40,r=e.lt50,l=e.weightedAverage,n=e.gte50;return!(t<50)&&!(a>30)&&!(r>55)&&!(l<48)&&(l>=50||n>=90)}(t)?"MSc Pass":"Fail"},m=new Map;m.set("Post-2018 full time",[{label:"Dissertation",credits:40,isDissertation:!0},{label:"Research skills",credits:20},{label:"Integrating module",credits:40},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10}]),m.set("Post-2018 flexi",[{label:"Dissertation",credits:40,isDissertation:!0},{label:"Research skills",credits:20},{label:"Integrating module A",credits:20},{label:"Integrating module B",credits:20},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10}]),m.set("Pre-2018",[{label:"Dissertation",credits:60,isDissertation:!0},{label:"Integrating module",credits:40},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10},{label:"Core/optional module",credits:10}]);var g=m,p=function(e){var t=e.children;return l.a.createElement("div",{className:"Header"},l.a.createElement("h1",null,t))},b=function(e){var t=e.credits,a=e.children,r=e.value,n=e.onChange;return l.a.createElement("div",{className:"Module"},l.a.createElement("input",{type:"number",placeholder:"0",value:r,onChange:n}),l.a.createElement("span",null,a," (",t,")"))},h=a(6),f=function(e){var t=e.active,a=Object(h.a)(e,["active"]);return l.a.createElement("span",Object.assign({className:"Template ".concat(t?"active":"")},a))},v=window.localStorage,E=function(e){return g.get(e).map(function(e){return{credits:e.credits,isDissertation:e.isDissertation,mark:0}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(function(){var e=E("Post-2018 full time"),t=JSON.parse(v.getItem("marks")),a=Object(r.useState)(t||e),n=Object(c.a)(a,2),i=n[0],m=n[1],h=JSON.parse(v.getItem("template")),k=Object(r.useState)(h||"Post-2018 full time"),C=Object(c.a)(k,2),w=C[0],y=C[1];Object(r.useEffect)(function(){v.setItem("marks",JSON.stringify(i)),v.setItem("template",JSON.stringify(w))},[i,w]);var M=d(i),O=u(i);return l.a.createElement("div",null,l.a.createElement(p,null,"SCME MSc award calculator"),l.a.createElement("div",{className:"layouts"},Object(o.a)(g.keys()).map(function(e,t){return l.a.createElement(f,{active:w===e,key:e,onClick:function(){return function(e){m(E(e)),y(e)}(e)}},e)})),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form column"},g.get(w).map(function(e,t){return l.a.createElement(b,{key:t,credits:e.credits,value:i[t].mark,onChange:function(e){return function(e,t){var a=parseInt(t.target.value||"0",10);m(function(t){return t.map(function(t,r){return e===r?Object(s.a)({},t,{mark:a}):t})})}(t,e)}},e.label)})),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"results"},l.a.createElement("h2",null,M),l.a.createElement("p",null,"Weighted average: ",O.weightedAverage.toFixed(2),"%"),l.a.createElement("p",null,"Credits less than 40: ",O.lt40),l.a.createElement("p",null,"Credits less than 50: ",O.lt50),l.a.createElement("p",null,"Credits greater than 50: ",O.gte50),l.a.createElement("p",null,"Credits greater than 60: ",O.gte60),l.a.createElement("p",null,"Credits greater than 70: ",O.gte70)))),l.a.createElement("hr",null),l.a.createElement("footer",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("p",null,"Please use this site to calculate your likely degree result, based on the marks you have accumulated to date and your estimates of marks still to be received. The rules for calculating the MSc result are fully implemented on this page, but please remember that all marks are provisional until ratified by the Examination Board."),l.a.createElement("p",null,"Please address questions to"," ",l.a.createElement("a",{href:"mailto:w.p.hughes@reading.ac.uk"},"Will Hughes"),"."),l.a.createElement("p",null,"This is not an official resource, and is for informational purposes only."),l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/will-hughes/awards"},l.a.createElement("img",{style:{opacity:.4},src:"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",width:"30",alt:""}))))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e6924914.chunk.js.map