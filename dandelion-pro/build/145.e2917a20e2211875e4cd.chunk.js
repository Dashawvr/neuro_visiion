(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{"11df3d384d9992e4e52a":function(e,t,n){"use strict";n.r(t);var o,i=n("8af190b70a6bc55c6f1b"),r=n.n(i),a=n("0d7f0986bcd2f33d8a2a"),c=n("1037a6e0d5914309f74c"),s=n.n(c),d=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),u=n("435859b6b76fb67a754a"),l=n.n(u),f=n("4dd2a92e69dcbe1bab10"),p=n("05c8eb146240928faf44");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,i){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){for(var c=new Array(a),s=0;s<a;s++)c[s]=arguments[s+3];t.children=c}if(t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=j(e);if(t){var i=j(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=b(p.q,{}),P=b(p.n,{}),N=b(p.o,{}),O=b(p.p,{}),C=b(p.T,{}),F=b(p.Q,{}),L=b(p.P,{}),I=b(p.S,{}),_=b(p.R,{}),D=b(p.nb,{}),k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(r,e);var t,n,o,i=w(r);function r(){return v(this,r),i.apply(this,arguments)}return t=r,(n=[{key:"render",value:function(){var e=this.props.classes,t=s.a.name+" - UI Elements",n=s.a.desc,o="containers/UiElements/demos/Progress/";return b("div",{},void 0,b(a.Helmet,{},void 0,b("title",{},void 0,t),b("meta",{name:"description",content:n}),b("meta",{property:"og:title",content:t}),b("meta",{property:"og:description",content:n}),b("meta",{property:"twitter:title",content:t}),b("meta",{property:"twitter:description",content:n})),b("div",{className:e.root},void 0,b(l.a,{container:!0,spacing:3},void 0,b(l.a,{item:!0,md:6,xs:12},void 0,b(f.db,{title:"Circular Static",icon:"md-timer",desc:"Progress and activity indicators are visual indications of an app loading content."},void 0,b("div",{},void 0,S,b(f.Fb,{componentName:o+"CircularStatic.js"}))),b(f.db,{title:"Circular Determinate",icon:"md-sync",desc:"Indicators display how long an operation will take."},void 0,b("div",{},void 0,P,b(f.Fb,{componentName:o+"CircularDeterminate.js"})))),b(l.a,{item:!0,md:6,xs:12},void 0,b(f.db,{title:"Circular Indeterminate",icon:"md-sync",desc:"Indicators visualize an unspecified wait time."},void 0,b("div",{},void 0,N,b(f.Fb,{componentName:o+"CircularIndeterminate.js"}))),b(f.db,{title:"Circular Integration",icon:"md-sync",desc:"Visual indicator should be used to represent each type of operation."},void 0,b("div",{},void 0,O,b(f.Fb,{componentName:o+"CircularIntegration.js"}))))),b(f.db,{title:"Linear Static",icon:"ios-pulse-outline",desc:""},void 0,b("div",{},void 0,C,b(f.Fb,{componentName:o+"LinearStatic.js"}))),b(l.a,{container:!0,spacing:3},void 0,b(l.a,{item:!0,md:6,xs:12},void 0,b(f.db,{title:"Linear Determinate",icon:"ios-pulse-outline",desc:""},void 0,b("div",{},void 0,F,b(f.Fb,{componentName:o+"LinearDeterminate.js"}))),b(f.db,{title:"Linear Buffer",icon:"ios-pulse-outline",desc:""},void 0,b("div",{},void 0,L,b(f.Fb,{componentName:o+"LinearBuffer.js"}))),b(f.db,{title:"Linear Query",icon:"ios-pulse-outline",desc:""},void 0,b("div",{},void 0,I,b(f.Fb,{componentName:o+"LinearQuery.js"})))),b(l.a,{item:!0,md:6,xs:12},void 0,b(f.db,{title:"Linear Indeterminate",icon:"ios-pulse-outline",desc:""},void 0,b("div",{},void 0,_,b(f.Fb,{componentName:o+"LinearIndeterminate.js"}))),b(f.db,{title:"Progress Delay Appearance",icon:"ios-pulse-outline",desc:"There are 3 important limits to know around response time. The ripple effect of the ButtonBase component ensures that the user feels that the system is reacting instantaneously."},void 0,b("div",{},void 0,D,b(f.Fb,{componentName:o+"ProgressDelay.js"})))))))}}])&&y(t.prototype,n),o&&y(t,o),r}(r.a.Component);t.default=Object(d.withStyles)({root:{flexGrow:1}})(k)}}]);