(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"2faac0115b462f583b66":function(e,t,i){"use strict";i.r(t);var a,r=i("8af190b70a6bc55c6f1b"),o=i.n(r),n=(i("8a2d1b95e05b6a321e74"),i("4dd2a92e69dcbe1bab10")),s=i("435859b6b76fb67a754a"),c=i.n(s),l=i("921c0b8c557fe6ba5da8"),u=i.n(l),f=i("2aea235afd5c55b8b19b"),d=i.n(f),p=i("9b4cf02f7f3c4453e043"),m=i.n(p),b=i("26682d5d4df1c4fdd619"),v=i.n(b),y=i("8a826baaadca6742a53a"),h=i.n(y),g=i("b27e083e7741c2dccb3f"),w=i.n(g),N=i("6938d226fd372a75cbf9"),P=i("b701c9c5068c915d4789"),q=i("20004eeded46443adb8c"),S=i("6e5df27b0b36e7acbe48");function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,i,r){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),1===n)t.children=r;else if(n>1){for(var s=new Array(n),c=0;c<n;c++)s[c]=arguments[c+3];t.children=s}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,a=E(e);if(t){var r=E(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return k(this,i)}}function k(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var V=0;function B(e,t,i,a){return{id:V+=1,title:e,date:t,desc:i,image:a}}var C=j(m.a,{mdUp:!0},void 0,j(u.a,{variant:"h4",gutterBottom:!0},void 0,"Popular Post")),F=j(m.a,{mdUp:!0},void 0,j(u.a,{variant:"h4",gutterBottom:!0},void 0,"Latest Post")),J=j(v.a,{}),L=j(h.a,{}),M=j(c.a,{item:!0,md:4,xs:12},void 0,j(q.a,{})),U=j("section",{id:"contact"},void 0,j(n.q,{})),$=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(s,e);var t,i,a,o=A(s);function s(){var e;x(this,s);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return T(D(e=o.call.apply(o,[this].concat(i))),"state",{postData:[B("Vivamus sit amet ibero lobortis","Nov 4","Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.",P.a[36]),B("Quisque ut metus ultricies","Nov 4","Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.",P.a[35]),B("Vivamus sit amet","Nov 4","Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.",P.a[19]),B("Duis sed augue sed libero","Nov 2","Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.",P.a[7]),B("Vitae viverra justo","Nov 2","Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.",P.a[34])]}),e}return t=s,(i=[{key:"render",value:function(){var e=this.state.postData,t=this.props.classes;return j(r.Fragment,{},void 0,j("div",{className:t.root},void 0,j("section",{id:"headline"},void 0,j(n.P,{title:"Title of a longer featured blog post",desc:"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents\u2026",thumbnail:P.a[0]})),j(w.a,{className:t.divider}),C,j(c.a,{container:!0,spacing:3},void 0,j(c.a,{item:!0,md:6,xs:12},void 0,j(n.yb,{landscape:!0,title:"Post title",date:"Nov 12",desc:"Aenean facilisis vitae purus facilisis semper.",action:"Read more",image:P.a[5],href:"/blog/article"})),j(c.a,{item:!0,md:6,xs:12},void 0,j(n.yb,{landscape:!0,title:"Featured post",date:"Nov 11",desc:"Duis sed augue phasellus ante massa.",action:"Read more",image:P.a[6],href:"/blog/article"}))),j(c.a,{container:!0,spacing:3},void 0,j(c.a,{item:!0,md:8,xs:12},void 0,j("section",{className:t.postList},void 0,F,e.map((function(e,t){return j(n.yb,{title:e.title,date:e.date,desc:e.desc,action:"Read more",image:e.image,noMargin:!0,extraSize:!0,href:"/blog/article"},t.toString())}))),j("div",{className:t.pagination},void 0,j(d.a,{disabled:!0,className:t.button,variant:"outlined",color:"primary"},void 0,J,"Previous"),j(d.a,{className:t.button,variant:"outlined",color:"primary"},void 0,"Next",L))),M)),U)}}])&&R(t.prototype,i),a&&R(t,a),s}(o.a.Component);t.default=Object(N.withStyles)(S.a)($)}}]);