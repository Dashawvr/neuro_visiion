(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"347434bf7c3bc2642666":function(e,t,r){"use strict";r.r(t);var n,o=r("8af190b70a6bc55c6f1b"),a=r.n(o),i=r("0d7f0986bcd2f33d8a2a"),c=r("1037a6e0d5914309f74c"),l=r.n(c),u=r("6938d226fd372a75cbf9"),f=r("4dd2a92e69dcbe1bab10"),s=r("b02fe3f80d4238b52f20"),d=r.n(s),p=r("435859b6b76fb67a754a"),b=r.n(p),y=r("2aea235afd5c55b8b19b"),m=r.n(y),v=r("5e98cee1846dbfd41421"),h=r("63d0249d2e2f59180ae5"),w=r("ca0c8c9a15f684f9951f"),O=r.n(w),g=r("b586ba9ea26e28dfea68"),j=r("d7dd51e1bf6bfc2c9c3d"),S=r("c7fd554010f79f6c0ef8"),P=r.n(S);function k(e,t,r,o){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _,q={option:function(e,t){return T(T({},e),{},{backgroundColor:t.isFocused?"#343434":"#292929",color:"white"})},control:function(e,t){return T(T({},e),{},{background:"#292929",color:"#fff"})},menuList:function(e){return T(T({},e),{},{padding:0})},singleValue:function(e){return T(T({},e),{},{color:"white"})}},x=Object(j.connect)((function(e){return{mode:e.getIn(["ui","type"])}}))(Object(u.withStyles)((function(e){return{root:{flexGrow:1,padding:30},field:{width:"100%",marginBottom:20},error:{color:"red",fontSize:"12px"}}}))(Object(h.a)()((function(e){var t=e.classes,r=e.onSubmit,n=e.t,o=[{value:"map",label:"GEO"}],a=Object(g.b)(),i=a.register,c=a.handleSubmit,l=a.control;a.errors;return k("div",{},void 0,k(b.a,{container:!0,spacing:3,alignItems:"flex-start",direction:"row",justify:"center"},void 0,k(b.a,{item:!0,xs:12,md:6},void 0,k(d.a,{className:t.root},void 0,k("form",{onSubmit:c(r)},void 0,k("div",{},void 0,k(P.a,{label:n("TableMaps.lon"),placeholder:n("TableMaps.lon"),required:!0,className:t.field,name:"ip",inputRef:i({required:!0})}),k(P.a,{label:n("TableMaps.lat"),placeholder:n("TableMaps.lat"),required:!0,className:t.field,name:"port",inputRef:i({required:!0})}),k(P.a,{label:n("TableMaps.username"),placeholder:n("TableMaps.username"),required:!0,className:t.field,name:"usernamee",inputRef:i({required:!0})}),k(P.a,{label:n("TableMaps.password"),placeholder:n("TableMaps.password"),required:!0,className:t.field,name:"passwordd",inputRef:i({required:!0})}),k(g.a,{name:"type",required:!0,label:n("TableMaps.type"),placeholder:n("TableMaps.type"),className:t.field,styles:"dark"===e.mode?q:"",isSearchable:!0,control:l,defaultValue:o[0],options:o,as:O.a})),k("div",{},void 0,k(m.a,{variant:"contained",color:"secondary",type:"submit"},void 0,n("Buttons.submit")),k(m.a,{type:"reset"},void 0,n("Buttons.reset")),k(m.a,{variant:"contained",color:"primary",onClick:function(){return v.a.goBack()}},void 0,n("Buttons.cancel"))))))))})))),C=(r("f363639bc5c3c97af546"),r("bd183afcc37eabd79225"),r("3ead0690618f0035f026")),D=r("e649e14cabb39045d52c");function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t,r,n){_||(_="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:_,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=J(e);if(t){var o=J(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return F(this,r)}}function F(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(a,e);var t,r,n,o=G(a);function a(){var e;B(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return V(I(e=o.call.apply(o,[this].concat(r))),"state",{variant:"",message:"",open:!1}),V(I(e),"handleClose",(function(t,r){"clickaway"!==r&&e.setState({open:!1})})),e}return t=a,(r=[{key:"showResult",value:function(e){C.d.data={lon:e.lat,lat:e.lat,username:e.usernamee,password:e.passwordd,type:e.type.value}}},{key:"render",value:function(){var e=this,t=l.a.name+" - Form",r=l.a.desc,n=this.state,o=n.message,a=n.variant,c=n.open,u=this.props.t;return N("div",{},void 0,N(i.Helmet,{},void 0,N("title",{},void 0,t),N("meta",{name:"description",content:r}),N("meta",{property:"og:title",content:t}),N("meta",{property:"og:description",content:r}),N("meta",{property:"twitter:title",content:t}),N("meta",{property:"twitter:description",content:r})),N(f.db,{title:u("AddMap.title"),icon:"ios-list-box-outline",desc:""},void 0,N("div",{},void 0,N(x,{onSubmit:function(t){return e.showResult(t)}}))),N(D.a,{open:c,handleClose:function(){return e.handleClose()},variant:a,message:u(o)}))}}])&&A(t.prototype,r),n&&A(t,n),a}(a.a.Component);t.default=Object(u.withStyles)({root:{flexGrow:1}})(Object(h.a)()(z))}}]);