(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"98f8be02a13a91f4293a":function(e,t,n){"use strict";n.r(t);var r,o=n("8af190b70a6bc55c6f1b"),i=n.n(o),a=n("0d7f0986bcd2f33d8a2a"),c=n("1037a6e0d5914309f74c"),u=n.n(c),f=n("6938d226fd372a75cbf9"),s=n("4dd2a92e69dcbe1bab10"),l=(n("8a2d1b95e05b6a321e74"),n("b02fe3f80d4238b52f20")),d=n.n(l),p=n("edc5ec6b13db97ea0a32"),b=n("435859b6b76fb67a754a"),y=n.n(b),m=(n("2618892602a0e7905b7d"),n("ab4cb61bcb2dc161defb")),v=n("d7dd51e1bf6bfc2c9c3d"),h=n("2aea235afd5c55b8b19b"),g=n.n(h),w=n("36164894564e60edef62"),S=n("4635854497948c86b6bb"),O=n("2a1bd40fccfa6f84a987"),j=n("5e98cee1846dbfd41421"),_=n("63d0249d2e2f59180ae5");function R(e){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}if(t&&i)for(var f in i)void 0===t[f]&&(t[f]=i[f]);else t||(t=i||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return U(this,n)}}function U(e,t){return!t||"object"!==R(t)&&"function"!==typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G,N=function(e){return null==e?"Required":void 0},T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,r,o=A(a);function a(){var e;k(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return D(E(e=o.call.apply(o,[this].concat(n))),"state",{selectUsers:[]}),e}return t=a,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.handleSubmit,o=t.pristine,a=t.reset,c=t.submitting,u=t.users,f=t.t,s=t.getUsers;return P("div",{},void 0,P(y.a,{container:!0,spacing:3,alignItems:"flex-start",direction:"row",justify:"center"},void 0,P(y.a,{item:!0,xs:12,md:6},void 0,P(d.a,{className:n.root},void 0,P("form",{onSubmit:r},void 0,P("div",{},void 0,i.a.createElement(p.Field,{name:"name",component:w.d,placeholder:f("AddGroup.name"),label:f("AddGroup.name"),validate:N,required:!0,ref:this.saveRef,className:n.field})),P(S.a,{data:u.map((function(e){return{value:e.id,label:e.name+" "+e.surName}})),style:{height:80},title:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456",desc:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432",value:this.state.selectUsers,handleChangeMulti:function(t){e.setState({selectUsers:t},(function(){s(e.state.selectUsers)})),console.log(e.state.selectUsers)}}),P("div",{},void 0,P(g.a,{variant:"contained",color:"secondary",type:"submit",disabled:c},void 0,f("Buttons.submit")),P(g.a,{type:"button",disabled:o||c,onClick:a},void 0,f("Buttons.reset")),P(g.a,{variant:"contained",color:"primary",onClick:function(){return j.a.goBack()}},void 0,f("Buttons.cancel"))))))))}}])&&x(t.prototype,n),r&&x(t,r),a}(o.Component),I=Object(p.reduxForm)({form:"immutableExample",enableReinitialize:!0})(T),$=Object(v.connect)((function(e){return{force:e,initialValues:e.getIn(["initval","formValues"])}}),(function(e){return{init:Object(m.bindActionCreators)(O.b,e),clear:function(){return e(O.a)}}}))(I),F=Object(f.withStyles)((function(e){return{root:{flexGrow:1,padding:30},field:{width:"100%",marginBottom:20},fieldBasic:{width:"100%",marginBottom:20,marginTop:10},inlineWrap:{display:"flex",flexDirection:"row"},buttonInit:{margin:e.spacing(4),textAlign:"center"}}}))(Object(_.a)()($)),q=n("f363639bc5c3c97af546"),z=n("bd183afcc37eabd79225"),J=n.n(z),M=n("3ead0690618f0035f026"),V=n("e649e14cabb39045d52c");function H(e){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t,n,r){G||(G="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}if(t&&o)for(var u in o)void 0===t[u]&&(t[u]=o[u]);else t||(t=o||{});return{$$typeof:G,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ee(e);if(t){var o=ee(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(e,t){return!t||"object"!==H(t)&&"function"!==typeof t?Z(e):t}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(i,e);var t,n,r,o=X(i);function i(){var e;K(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return te(Z(e=o.call.apply(o,[this].concat(n))),"state",{variant:"",message:"",open:!1,users:[],selectedUsers:[]}),te(Z(e),"handleClose",(function(t,n){"clickaway"!==n&&e.setState({open:!1})})),e}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this;Object(q.a)("".concat(M.f,"/api/users/"),M.b).then((function(t){e.setState({users:t.data.users.rows})}))}},{key:"showResult",value:function(e){var t=this,n=null,r=[];e._root.entries.map((function(e){"name"===e[0]&&(n=e[1])})),this.state.selectedUsers.map((function(e){r.push(e.value)})),console.log(r),M.d.data={name:n,users:r},J.a.post("".concat(M.f,"/api/user_group/"),M.d.data,{Authorization:localStorage.getItem("token")}).then((function(){t.setState({open:!0,variant:"success",message:"Notification.success"})})).catch((function(e){t.setState({open:!0,variant:"error",message:"Notification.error"})}))}},{key:"render",value:function(){var e=this,t=u.a.name+" - Form",n=u.a.desc,r=this.state,o=r.message,i=r.variant,c=r.open,f=this.props.t;return W("div",{},void 0,W(a.Helmet,{},void 0,W("title",{},void 0,t),W("meta",{name:"description",content:n}),W("meta",{property:"og:title",content:t}),W("meta",{property:"og:description",content:n}),W("meta",{property:"twitter:title",content:t}),W("meta",{property:"twitter:description",content:n})),W(s.db,{title:f("AddGroup.title"),icon:"ios-list-box-outline",desc:""},void 0,W("div",{},void 0,W(F,{onSubmit:function(t){return e.showResult(t)},users:this.state.users,getUsers:function(t){e.setState({selectedUsers:t})}}))),W(V.a,{open:c,handleClose:function(){return e.handleClose()},variant:i,message:f(o)}))}}])&&L(t.prototype,n),r&&L(t,r),i}(i.a.Component);t.default=Object(f.withStyles)({root:{flexGrow:1}})(Object(_.a)()(ne))}}]);