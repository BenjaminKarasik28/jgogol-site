(this["webpackJsonpjgogol-site"]=this["webpackJsonpjgogol-site"]||[]).push([[0],{38:function(e,t,n){e.exports=n.p+"static/media/jg1.ba062b30.jpg"},39:function(e,t,n){e.exports=n.p+"static/media/jg2.a1507589.jpg"},40:function(e,t,n){e.exports=n.p+"static/media/jg3.74528fe8.jpg"},41:function(e,t,n){e.exports=n.p+"static/media/jg4.317381ce.jpg"},44:function(e,t,n){e.exports=n(74)},49:function(e,t,n){},50:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},51:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),o=n.n(c);n(49),n(50),n(51);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(7),l=n(8),s=function(){return r.a.createElement("div",{className:"headerFont"},r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"headerText"},"913.634.3787"),r.a.createElement("h1",{className:"name"},"Juliana Gogol"),r.a.createElement("h4",{className:"headerText"},"jgogol@pratt.edu")),r.a.createElement("h4",{className:"centerText"},"Fashion and Textile Design"))},u=n(12),m=n(13),f=n(14),p=n(6),h=n(15),d=n(35),g=function(e){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement(d.Row,{horizontal:"space-evenly"},r.a.createElement(i.b,{className:"link",to:{pathname:"/middle",state:{option:"ST"}}},"Senior Thesis"),r.a.createElement(i.b,{className:"link",to:{pathname:"/middle",state:{option:"S19"}}},"Spring 2019"),r.a.createElement(i.b,{className:"link",to:{pathname:"/middle",state:{option:"F18"}}},"Fall 2018"),r.a.createElement(i.b,{className:"link",to:{pathname:"/middle",state:{option:"SP"}}},"Special Projects ")))},v=n(38),E=n.n(v),y=n(39),j=n.n(y),b=n(40),k=n.n(b),O=n(41),x=n.n(O),R=[E.a,j.a,k.a,x.a],w=n(19),N=n(42),S=n.n(N);function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P=function(e){Object(h.a)(a,e);var t,n=(t=a,function(){var e,n=Object(p.a)(t);if(D()){var a=Object(p.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(f.a)(this,e)});function a(){return Object(u.a)(this,a),n.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement(w.a,null,this.props.images.map((function(e){return r.a.createElement(w.a.Item,{key:S()()},r.a.createElement("img",{className:"d-block w-100",src:e.key,alt:"not here"}),r.a.createElement(w.a.Caption,null,r.a.createElement("h3",null,"Title of Piece"),r.a.createElement("p",null,"Description of Piece.")))}))))}}]),a}(r.a.PureComponent);function T(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=function(e){Object(h.a)(a,e);var t,n=(t=a,function(){var e,n=Object(p.a)(t);if(T()){var a=Object(p.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(f.a)(this,e)});function a(){var e;Object(u.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={images:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState((function(){return{images:R.map((function(e){return r.a.createElement("img",{src:e,alt:"not working",key:e})}))}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),this.state.images.length>0&&r.a.createElement(P,{images:this.state.images}))}}]),a}(r.a.Component);function F(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var J=function(e){Object(h.a)(a,e);var t,n=(t=a,function(){var e,n=Object(p.a)(t);if(F()){var a=Object(p.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(f.a)(this,e)});function a(){return Object(u.a)(this,a),n.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.route)}}]),a}(r.a.Component),W=function(e){return console.log(e.location.state.option),r.a.createElement("div",null,"Work in Progress")},B=function(){return r.a.createElement("main",null,r.a.createElement(s,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:C}),r.a.createElement(l.a,{exact:!0,path:"/middle",component:W}),r.a.createElement(l.a,{exact:!0,path:"/collection",component:J})))};n(73);o.a.render(r.a.createElement(i.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.4d4fcb63.chunk.js.map