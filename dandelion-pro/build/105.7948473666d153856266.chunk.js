(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"50b2b11ca44fa27cd2d4":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),a=n.n(r),i=n("0d7f0986bcd2f33d8a2a"),c=n("b912ecc4473ae8a2ff0b"),l=n.n(c),f=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),u=n("6938d226fd372a75cbf9"),s=n("2aea235afd5c55b8b19b"),d=n.n(s),p=n("c7fd554010f79f6c0ef8"),b=n.n(p),m=n("921c0b8c557fe6ba5da8"),y=n.n(m),v=n("16c7abd7abc407b9f247"),h=n.n(v),g=n("e799c547a20a503b338f"),w=n.n(g),N=n("b02fe3f80d4238b52f20"),S=n.n(N),O=n("1037a6e0d5914309f74c"),j=n.n(O),_=n("0d4ee4ad37ded188f527"),C=n.n(_),P=n("387190e83edf0e5eb8f6");function k(e){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=D(e);if(t){var r=D(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?B(e):t}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=F(y.a,{variant:"h5",gutterBottom:!0,align:"center"},void 0,"Will come with performance in design"),$=F("aside",{},void 0,F(d.a,{variant:"contained",color:"secondary",type:"submit"},void 0,"Notify me")),G=F("i",{className:"ion-social-facebook"}),H=F("i",{className:"ion-social-twitter"}),I=F("i",{className:"ion-social-github"}),V=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(a,e);var t,n,o,r=E(a);function a(){var e;R(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return J(B(e=r.call.apply(r,[this].concat(n))),"state",{email:""}),J(B(e),"handleChange",(function(t){return function(n){e.setState(J({},t,n.target.value))}})),e}return t=a,(n=[{key:"render",value:function(){var e=j.a.name+" - Coming Soon",t=j.a.desc,n=this.props,o=n.classes,r=n.deco,a=this.state.email;return F("div",{className:o.rootFull},void 0,F(i.Helmet,{},void 0,F("title",{},void 0,e),F("meta",{name:"description",content:t}),F("meta",{property:"og:title",content:e}),F("meta",{property:"og:description",content:t}),F("meta",{property:"twitter:title",content:e}),F("meta",{property:"twitter:description",content:t})),F("div",{className:o.container},void 0,F("div",{className:o.fullFormWrap},void 0,F(S.a,{className:l()(o.fullWrap,r&&o.petal,o.centerV)},void 0,F("div",{className:o.brandCenter},void 0,F("div",{className:o.brand},void 0,F("img",{src:C.a,alt:j.a.name}),j.a.name)),F(y.a,{variant:"h2",className:o.titleGradient,gutterBottom:!0},void 0,"Coming Soon"),T,F("section",{className:o.pageFormWrap},void 0,F("div",{className:l()(o.notifyForm,o.centerAdornment)},void 0,F(h.a,{},void 0,F(b.a,{fullWidth:!0,label:"Email",className:o.textField,value:a,onChange:this.handleChange("email"),margin:"normal"})),$),F("div",{className:l()(o.lockForm,o.centerAdornment)},void 0,F(w.a,{color:"primary",className:o.button,href:"#"},void 0,G),F(w.a,{color:"primary",className:o.button,href:"#"},void 0,H),F(w.a,{color:"primary",className:o.button,href:"#"},void 0,I)))))))}}])&&W(t.prototype,n),o&&W(t,o),a}(a.a.Component),q=Object(f.connect)((function(e){return{force:e,deco:e.getIn(["ui","decoration"])}}))(V);t.default=Object(u.withStyles)(P.a)(q)}}]);