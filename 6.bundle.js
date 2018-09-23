(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(70)),i=u(n(112)),r=u(n(5517)),o=u(n(41)),l=u(n(42)),s=u(n(5518));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(t){(0,o.default)(this,e),this.domain=t||"https://powerful-forest-19235.herokuapp.com/api",this.fetch=this.fetch.bind(this),this.login=this.login.bind(this),this.getProfile=this.getProfile.bind(this)}return(0,l.default)(e,[{key:"login",value:function(e,t){var n=this;return this.fetch(this.domain+"/users/login",{method:"POST",body:(0,r.default)({email:e,password:t})}).then(function(e){return n.setToken(e.token),i.default.resolve(e)})}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return(0,s.default)(e).exp<Date.now()/1e3}catch(e){return!1}}},{key:"setToken",value:function(e){localStorage.setItem("id_token",e)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"logout",value:function(){localStorage.removeItem("id_token")}},{key:"getProfile",value:function(){return(0,s.default)(this.getToken())}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return this.loggedIn()&&(n.Authorization="Bearer "+this.getToken()),fetch(e,(0,a.default)({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})},{key:"_checkStatus",value:function(e){if(200<=e.status&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}}]),e}();t.default=d},5849:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=w(n(103)),i=w(n(104)),r=w(n(167)),o=w(n(55)),l=w(n(41)),s=w(n(42)),u=w(n(56)),d=w(n(57)),c=w(n(70)),h=w(n(1)),f=w(n(3)),p=n(43),g=n(19),m=n(5509),v=n(5850),k=w(n(106)),y=w(n(54));function w(e){return e&&e.__esModule?e:{default:e}}var T={email:"",password:"",loading:!1,error:null},_=function(e){function t(e){var n=this;(0,l.default)(this,t);var s,d=(0,u.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return d.onChange=function(e){d.setState((0,r.default)({},e.target.name,e.target.value))},d.handleLogin=function(e){d.Auth.login(d.state.email,d.state.password).then(function(e){d.props.history.replace("/")}).catch(function(e){alert(e)})},d.handleSignup=(s=(0,i.default)(a.default.mark(function e(t){var i;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={email:d.state.email,password:d.state.password},e.prev=1,e.next=4,k.default.post("https://powerful-forest-19235.herokuapp.com/api/users",i);case 4:d.handleLogin(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(err);case 10:case"end":return e.stop()}},e,n,[[1,7]])})),function(e){return s.apply(this,arguments)}),d.state=T,d.Auth=new y.default,d}return(0,d.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){this.Auth.loggedIn()&&this.props.history.replace("/dashboard")}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.match,a=this.state,i=a.email,r=a.password,o=n.path.replace("/",""),l="login"===o?"signup":"login",s="login"===o?this.handleLogin:this.handleSignup,u=!!i&&!!r&&(0,v.isEmail)(i);return h.default.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},h.default.createElement(p.Paper,{className:t.root,elevation:1},h.default.createElement(p.TextField,{error:!(0,v.isEmail)(i),name:"email",label:"Email",value:i,onChange:this.onChange,margin:"normal",style:{width:"100%"}}),h.default.createElement(p.TextField,{type:"password",name:"password",label:"Password",value:r,onChange:this.onChange,margin:"normal",style:{width:"100%"}}),h.default.createElement("div",{style:{textAlign:"center",marginTop:"1em"}},h.default.createElement(p.Button,{disabled:!u,name:"mealType",variant:"contained",color:"secondary",onClick:s},o)),h.default.createElement("div",{style:{textAlign:"center",marginTop:"1em"}},h.default.createElement(m.Link,{to:"/"+l},l.toUpperCase()))))}}]),t}(h.default.Component);_.propTypes={classes:f.default.object.isRequired},t.default=(0,g.withStyles)(function(e){return{root:(0,c.default)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,width:"350px","@media (max-width: 376px)":{width:"100%"}})}})(_)}}]);
//# sourceMappingURL=6.bundle.js.map