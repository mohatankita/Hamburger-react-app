(this.webpackJsonpburger_builder=this.webpackJsonpburger_builder||[]).push([[4],{101:function(e,t,a){e.exports={Auth:"Auth_Auth__1HhmI"}},102:function(e,t,a){"use strict";a.r(t);var n=a(23),i=a(5),l=a(6),r=a(8),u=a(7),o=a(0),s=a.n(o),c=a(96),d=a(33),p=a(101),h=a.n(p),m=a(15),g=a(14),v=a(41),f=a(3),b=a(4),E=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,r=new Array(l),u=0;u<l;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:7},valid:!1,touched:!1}},isSignUp:!0},e.inputChangeHandler=function(t,a){var i=Object(b.b)(e.state.controls,Object(n.a)({},a,Object(b.b)(e.state.controls[a],{value:t.target.value,valid:Object(b.a)(t.target.value,e.state.controls[a].validation),touched:!0})));e.setState({controls:i})},e.formSubmitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignUp)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignUp:!e.isSignUp}}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map((function(t){return s.a.createElement(c.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangeHandler(a,t.id)}})}));this.props.loading&&(n=s.a.createElement(v.a,null));var i=null;this.props.error&&(i=s.a.createElement("p",null," ",this.props.error.message," "));var l=null;return this.props.isAuthenticated&&(l=s.a.createElement(f.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:h.a.Auth},l,i,s.a.createElement("form",{onSubmit:this.formSubmitHandler},n,s.a.createElement(d.a,{btnType:"Success"}," SUBMIT "),s.a.createElement(d.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},"SWITCH TO ",this.state.isSignUp?"SIGN IN":"SIGN UP")))}}]),a}(o.Component);t.default=Object(g.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,a,n){return e(m.b(t,a,n))},onSetAuthRedirectPath:function(){return e(m.j("/"))}}}))(E)},96:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(97),r=a.n(l);t.a=function(e){var t=null,a=[r.a.InputElement],n=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n=i.a.createElement("p",{className:r.a.ValidationError},"Please enter a valid ",e.elementConfig.placeholder),a.push(r.a.Invalid)),e.elementType){case"input":t=i.a.createElement("input",Object.assign({},e.elementConfig,{className:a.join(" "),value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({},e.elementConfig,{className:a.join(" "),value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value}," ",e.displayValue," ")})));break;default:t=i.a.createElement("input",Object.assign({},e.elementConfig,{className:a.join(" "),value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.Label}," ",e.label," "),t,n)}},97:function(e,t,a){e.exports={Input:"Input_Input__1JZgq",Label:"Input_Label__jOVUz",InputElement:"Input_InputElement__vA8e3",Invalid:"Input_Invalid__21m8O",ValidationError:"Input_ValidationError__hmnB6"}}}]);
//# sourceMappingURL=4.a56cd402.chunk.js.map