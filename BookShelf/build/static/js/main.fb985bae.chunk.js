(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=(a(31),a(5)),i=a(6),s=a(9),u=a(8),m=a(23),b=a(46),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{className:"col-md-12 d-none d-md-block bg-light sidebar",activeKey:"/home",onSelect:function(e){return alert("selected ".concat(e))}},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{href:"/home"},"Books")),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{eventKey:"link-1"},"Manga")),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{eventKey:"link-2"},"Documents")),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{eventKey:"disabled",disabled:!0},"Settings"))))}}]),a}(n.Component),h=[{id:"item1",rating:10,title:"Angles and Deamons",author:"Dan Brown",year:2e3,series:"Robert Langdon"},{id:"item2",rating:5,title:"The Da Vinci Code",author:"Dan Brown",year:2003,series:"Robert Langdon"},{id:"item3",rating:3,title:"The Lost Symbol",author:"Dan Brown",year:2009,series:"Robert Langdon"},{id:"item4",rating:7,title:"Inferno",author:"Dan Brown",year:2013,series:"Robert Langdon"},{id:"item5",rating:10,title:"Origin",author:"Dan Brown",year:2017,series:"Robert Langdon"},{id:"item6",rating:8,title:"The Alchemist",author:"Paulo Coelho",year:1988,genre:"D",series:""},{id:"item7",rating:9,title:"The Secret",author:"Rhonda Bryne",year:2006,genre:"SH",series:""}],y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={book:{},tableStyle:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("BookListing: componentDidMount : props here are --\x3e",this.props);var e=this.props.book,t=this.props.tableStyle;this.setState({book:e,tableStyle:t})}},{key:"render",value:function(){var e=this.state.book,t=this.state.tableStyle;return r.a.createElement("tr",{key:e.id,style:t},r.a.createElement("td",{style:t},e.title),r.a.createElement("td",{style:t},e.author),r.a.createElement("td",{style:t},e.year),r.a.createElement("td",{style:t},e.series),r.a.createElement("td",{style:t},e.rating))}}]),a}(n.Component),p=a(42),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={booklisting:[],notification:0,footer:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Component did mount"),this.setState({booklisting:h})}},{key:"prepareTable",value:function(){var e={border:"1px solid black",padding:"10px"},t=["Book Title","Author","Year","Series","Rating"],a=(t.map((function(e){return r.a.createElement("th",null,e)})),r.a.createElement("thead",null," ",r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("th",null,e)}))," ")," ")),n=r.a.createElement("tbody",null," ",this.state.booklisting.map((function(t){return r.a.createElement(y,{book:t,tableStyle:e})})));return r.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0,size:"lg"}," ",a," ",n)}},{key:"render",value:function(){var e=this.prepareTable();return r.a.createElement("div",{className:"bookTable"}," ",e)}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement(v,null)," ")}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"BookShelf"),r.a.createElement("div",{className:"container"},r.a.createElement("form",{class:"form-inline my-2 my-lg-0"},r.a.createElement("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search           ","aria-label":"Search"}),r.a.createElement("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))}}]),a}(n.Component),g=a(43),k=a(44),O=a(45),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(g.a,{fluid:!0},r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement(E,null))),r.a.createElement(k.a,null,r.a.createElement(O.a,{xs:2},r.a.createElement(d,null)),r.a.createElement(O.a,{xs:10},r.a.createElement(f,null)))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"BookShelf 2020"))))}}]),a}(n.Component),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(j,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.fb985bae.chunk.js.map