"use strict";(self.webpackChunkd1mmmk_ru=self.webpackChunkd1mmmk_ru||[]).push([[196],{196:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(671),a=e(144),s=e(136),i=e(277),c=e(791),u=e(165),o=e(861),l=(0,a.Z)((function t(n){(0,r.Z)(this,t),this.src="",this.src=n.src})),h=e(411),p=function(t){(0,s.Z)(e,t);var n=(0,i.Z)(e);function e(t){return(0,r.Z)(this,e),n.call(this,t)}return(0,a.Z)(e,[{key:"read",value:function(){var t=(0,o.Z)((0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.gyn(this.src);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),e}(l),d=e(184),f=function(t){(0,s.Z)(e,t);var n=(0,i.Z)(e);function e(t){var a;return(0,r.Z)(this,e),(a=n.call(this,t)).params={x:"\u0434\u0430\u0442\u0430",y:"\u0434\u0438\u0444"},a.state={chartData:[]},a}return(0,a.Z)(e,[{key:"componentDidMount",value:function(){this.loadChartData()}},{key:"loadChartData",value:function(){var t=this;new p({src:"/assets/counters.csv"}).read().then((function(n){var e=n.filter((function(t){return t["\u0434\u0430\u0442\u0430"]})).filter((function(t){return t["\u0434\u0438\u0444"]})).map((function(t){return Object.assign({},t,{"\u0434\u0430\u0442\u0430":t["\u0434\u0430\u0442\u0430"].split(".").reverse().join("-")})}));t.setState({chartData:e})}))}},{key:"render",value:function(){return(0,d.jsxs)("div",{className:"app_page app_page-about",children:[(0,d.jsx)("h1",{children:"About"}),(0,d.jsx)("p",{children:"This is React application example"}),(0,d.jsxs)("p",{children:["You can explore the source code of this application on ",(0,d.jsx)("a",{href:this.props.githablink,target:"_blank",children:"Github"})]}),(0,d.jsx)("h2",{children:"What can you fint there?"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Css variables and @media querys, sass nesting"}),(0,d.jsx)("li",{children:"Grid and flex markup"}),(0,d.jsx)("li",{children:"Up-to-date React functional components and obsolete class components"}),(0,d.jsx)("li",{children:"Lazy React component loading, custom hooks"}),(0,d.jsx)("li",{children:"Typescript usage and modern web application architecture"})]})]})}}]),e}(c.Component);f.defaultProps={githablink:"#"}}}]);
//# sourceMappingURL=196.07ebdaed.chunk.js.map