(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(70)),o=u(n(112)),r=u(n(5517)),i=u(n(41)),s=u(n(42)),l=u(n(5518));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(t){(0,i.default)(this,e),this.domain=t||"http://localhost:5000/api",this.fetch=this.fetch.bind(this),this.login=this.login.bind(this),this.getProfile=this.getProfile.bind(this)}return(0,s.default)(e,[{key:"login",value:function(e,t){var n=this;return this.fetch(this.domain+"/users/login",{method:"POST",body:(0,r.default)({email:e,password:t})}).then(function(e){return n.setToken(e.token),o.default.resolve(e)})}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return(0,l.default)(e).exp<Date.now()/1e3}catch(e){return!1}}},{key:"setToken",value:function(e){localStorage.setItem("id_token",e)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"logout",value:function(){localStorage.removeItem("id_token")}},{key:"getProfile",value:function(){return(0,l.default)(this.getToken())}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return this.loggedIn()&&(n.Authorization="Bearer "+this.getToken()),fetch(e,(0,a.default)({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})},{key:"_checkStatus",value:function(e){if(200<=e.status&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}}]),e}();t.default=d},5754:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=g(n(103)),o=g(n(104)),r=g(n(55)),i=g(n(41)),s=g(n(42)),l=g(n(56)),u=g(n(57)),d=g(n(54)),c=g(n(85)),f=g(n(1)),p=g(n(106)),h=g(n(5816)),A=n(71),m=n(5818),C=n(43);function g(e){return e&&e.__esModule?e:{default:e}}var y=new d.default,E="https://powerful-forest-19235.herokuapp.com";console.log("HOST ===>",E);var v=function(e){function t(){var e,n,a,o;(0,i.default)(this,t);for(var s=arguments.length,u=Array(s),d=0;d<s;d++)u[d]=arguments[d];return(n=a=(0,l.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(u)))).state={items:[]},a.goToAddCalories=function(e){e&&e.preventDefault(),a.props.history.push("/add-calories")},a.goToSummary=function(e){e&&e.preventDefault(),a.props.history.push("/summary")},a.getDetail=function(e){return function(t){t&&t.preventDefault(),a.props.history.push("/detail/"+e)}},a.logout=function(e){y.logout(),a.props.history.replace("/login")},o=n,(0,l.default)(a,o)}var n;return(0,u.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.load()}},{key:"load",value:(n=(0,o.default)(a.default.mark(function e(){var t,n,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("id_token"),n={headers:{"x-auth":t}},e.next=4,p.default.get(E+"/api/meals",n).then(function(e){return e.data});case 4:o=e.sent,this.setState({items:o});case 6:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this;return f.default.createElement("div",{className:h.default.container},f.default.createElement(A.NavMenu,{username:this.props.user.username,logout:this.logout}),f.default.createElement("h1",{className:h.default.title},"Consumo de calorías"),f.default.createElement("div",{className:h.default.section},this.state.items.map(function(t){return f.default.createElement(A.Card,{onClick:e.getDetail,key:t.uuid,data:t})}),f.default.createElement("div",{className:h.default.btnContainer},f.default.createElement(C.IconButton,{color:"primary","aria-label":"charts",onClick:this.goToSummary},f.default.createElement(m.Assessment,{style:{fontSize:"46px",color:"#ffc107"}})),f.default.createElement("br",null),f.default.createElement(C.Button,{variant:"fab",color:"secondary","aria-label":"Add",onClick:this.goToAddCalories},f.default.createElement(m.Add,null)))))}}]),t}(f.default.Component);t.default=(0,c.default)(v)},5816:function(e,t,n){var a=n(5817);"string"==typeof a&&(a=[[e.i,a,""]]);n(59)(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},5817:function(e,t,n){(t=e.exports=n(58)(!0)).push([e.i,".styles_container_2lyqBSJi4DxUXEYALKrPzk {\n  /* border: 1px solid purple; */\n}\n\n.styles_title_zrPztFIS903-H66HFv626 {\n  text-align: center;\n  color: #f44336;\n}\n\n.styles_section_CVrXHjdFnpO9mbXsUd-Oz  {\n  display: flex;\n  width: 93%;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  padding: 1em;\n}\n\n.styles_btnContainer_3i3JUmwCRG-ZHpfb3ZE94H {\n  text-align: center;\n  position: fixed;\n  right: 2em;\n  bottom: 2em;\n}\n\n@media screen and (max-width: 1024px) {\n  .styles_section_CVrXHjdFnpO9mbXsUd-Oz {\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .styles_section_CVrXHjdFnpO9mbXsUd-Oz {\n    width: 73%;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .styles_section_CVrXHjdFnpO9mbXsUd-Oz {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 376px) {\n  .styles_section_CVrXHjdFnpO9mbXsUd-Oz {\n    width: 90%;\n    padding: 0;\n  }\n}","",{version:3,sources:["/Users/oscaroceguera/Documents/Repos/Examples/calorie_challenge/front/src/container/Dashboard/styles.css"],names:[],mappings:"AAAA;EACE,+BAA+B;CAChC;;AAED;EACE,mBAAmB;EACnB,eAAe;CAChB;;AAED;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,aAAa;CACd;;AAED;EACE,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,YAAY;CACb;;AAED;EACE;IACE,WAAW;GACZ;CACF;;AAED;EACE;IACE,WAAW;GACZ;CACF;;AAED;EACE;IACE,WAAW;GACZ;CACF;;AAED;EACE;IACE,WAAW;IACX,WAAW;GACZ;CACF",file:"styles.css",sourcesContent:[".container {\n  /* border: 1px solid purple; */\n}\n\n.title {\n  text-align: center;\n  color: #f44336;\n}\n\n.section  {\n  display: flex;\n  width: 93%;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  padding: 1em;\n}\n\n.btnContainer {\n  text-align: center;\n  position: fixed;\n  right: 2em;\n  bottom: 2em;\n}\n\n@media screen and (max-width: 1024px) {\n  .section {\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .section {\n    width: 73%;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .section {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 376px) {\n  .section {\n    width: 90%;\n    padding: 0;\n  }\n}"],sourceRoot:""}]),t.locals={container:"styles_container_2lyqBSJi4DxUXEYALKrPzk",title:"styles_title_zrPztFIS903-H66HFv626",section:"styles_section_CVrXHjdFnpO9mbXsUd-Oz",btnContainer:"styles_btnContainer_3i3JUmwCRG-ZHpfb3ZE94H"}},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(70)),o=c(n(55)),r=c(n(41)),i=c(n(42)),s=c(n(56)),l=c(n(57));t.default=function(e){var t=new d.default("http://localhost:5000/api");return function(n){function d(e){(0,r.default)(this,d);var t=(0,s.default)(this,(d.__proto__||(0,o.default)(d)).call(this,e));return t.state={user:null},t}return(0,l.default)(d,n),(0,i.default)(d,[{key:"componentWillMount",value:function(){if(t.loggedIn())try{var e=t.getProfile();this.setState({user:e})}catch(e){t.logout(),this.props.history.replace("/login")}else this.props.history.replace("/login")}},{key:"render",value:function(){return this.state.user?u.default.createElement(e,(0,a.default)({history:this.props.history,user:this.state.user},this.props)):null}}]),d}(u.default.Component)};var u=c(n(1)),d=c(n(54));function c(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=3.bundle.js.map