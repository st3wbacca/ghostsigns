(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){e.exports=n(202)},115:function(e,t,n){},117:function(e,t,n){},182:function(e,t,n){},200:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(9),i=n.n(r),c=n(208),l=(n(115),n(13)),s=n(14),u=n(17),p=n(15),m=n(18),h=(n(117),n(209)),d=n(210),b=n(203),f=n(206),g=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,{theme:this.props.theme,mode:"horizontal",defaultSelectedKeys:["home"],selectedKeys:[this.props.route],style:{lineHeight:"64px"}},o.a.createElement(f.a.Item,{key:"home"},o.a.createElement(b.a,{to:"/"},"Home")),o.a.createElement(f.a.Item,{key:"tours"},o.a.createElement(b.a,{to:"/tours"},"Tours")),o.a.createElement(f.a.Item,{key:"contact"},o.a.createElement(b.a,{to:"/contact"},"Contact")))}}]),t}(a.Component),j=n(207),y=j.a.Header,E={theme:"dark"},O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state=E,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(y,{style:{position:"fixed",zIndex:1,width:"100%"}},o.a.createElement(h.a,null,o.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(g,{theme:e.state.theme,route:"home"})}}),o.a.createElement(d.a,{exact:!0,path:"/tours",render:function(t){return o.a.createElement(g,{theme:e.state.theme,route:"tours"})}}),o.a.createElement(d.a,{exact:!0,path:"/contact",render:function(t){return o.a.createElement(g,{theme:e.state.theme,route:"contact"})}})))}}]),t}(a.Component),v=n(204),C=(n(182),v.a.Meta),k=function(e){var t=e.image,n=e.title,a=e.description,r=e.onClick;return o.a.createElement(v.a,{hoverable:!0,cover:o.a.createElement("img",{alt:"example",src:t}),onClick:r},o.a.createElement(C,{title:n,description:a}))},z=(n(200),function(e){var t=e.signs,n=e.onClick;return o.a.createElement("div",{className:"flex-container"},t.map(function(e,t){return o.a.createElement(k,{key:t,image:e.image,title:e.title,description:e.description,onClick:n})}))}),V=[{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"},{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"},{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"},{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"},{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"},{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"},{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"},{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"},{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"},{image:"./images/fernando-venzano-1052414-unsplash.jpg",title:"B and C Restaurant Supply",description:"Photo by Fernando Venzano on Unsplash"}],S=n(205),x={data:V,modalVisible:!1,modalImage:""},w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleSignClick=function(t){t.target.src&&(e.setState({modalImage:t.target.src}),e.setModalVisible(!0))},e.state=x,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setModalVisible",value:function(e){this.setState({modalVisible:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(z,{onClick:this.handleSignClick,signs:this.state.data}),o.a.createElement(S.a,{centered:!0,visible:this.state.modalVisible,onOk:function(){return e.setModalVisible(!1)},onCancel:function(){return e.setModalVisible(!1)}},o.a.createElement("img",{alt:"sign modal",width:"470px",src:this.state.modalImage})))}}]),t}(a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"No tours scheduled")}}]),t}(a.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"This is the contact page")}}]),t}(a.Component),P=j.a.Content,R=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(P,{style:{padding:"75px 50px"}},o.a.createElement(h.a,null,o.a.createElement(d.a,{exact:!0,path:"/",component:w}),o.a.createElement(d.a,{exact:!0,path:"/tours",component:B}),o.a.createElement(d.a,{exact:!0,path:"/contact",component:F})))}}]),t}(a.Component),U=j.a.Footer,I=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(U,null,o.a.createElement("p",null,"Stuart Busilla \xa92018"))}}]),t}(a.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(j.a,{className:"layout"},o.a.createElement(O,null),o.a.createElement(R,null),o.a.createElement(I,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[110,2,1]]]);
//# sourceMappingURL=main.b61434de.chunk.js.map