(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{d22df2472b34c463f8a0:function(e,a,t){"use strict";t.r(a);var i,n=t("8af190b70a6bc55c6f1b"),o=t.n(n),r=(t("8a2d1b95e05b6a321e74"),t("a9db75321692539513f7")),l=t.n(r),d=t("d7dd51e1bf6bfc2c9c3d"),s=t("b912ecc4473ae8a2ff0b"),c=t.n(s),f=t("6938d226fd372a75cbf9"),u=t("61dec971b72d1d4701af"),p=t("02230601797c6da1409e"),b=t("9b4cf02f7f3c4453e043"),m=t.n(b),v=t("4dd2a92e69dcbe1bab10");function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function y(e,a,t,n){i||(i="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={children:void 0}),1===r)a.children=n;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];a.children=l}if(a&&o)for(var s in o)void 0===a[s]&&(a[s]=o[s]);else a||(a=o||{});return{$$typeof:i,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function h(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],i=!0,n=!1,o=void 0;try{for(var r,l=e[Symbol.iterator]();!(i=(r=l.next()).done)&&(t.push(r.value),!a||t.length!==a);i=!0);}catch(e){n=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(n)throw o}}return t}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return w(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,i=new Array(a);t<a;t++)i[t]=e[t];return i}var S=y("section",{id:"banner"},void 0,y(v.h,{slideMode:!0})),M=y("section",{id:"feature"},void 0,y(v.K,{slideMode:!0})),O=y("section",{id:"showcase"},void 0,y(v.zb,{slideMode:!0})),N=y("section",{id:"testimonials"},void 0,y(v.Lb,{slideMode:!0})),j=y("section",{id:"technology"},void 0,y(v.Jb,{slideMode:!0})),P=y("section",{id:"pricing"},void 0,y(v.kb,{slideMode:!0})),x=y("section",{id:"contact"},void 0,y(v.q,{slideMode:!0})),A=y(m.a,{only:"lg"},void 0,y("section",{id:"banner"},void 0,y(v.h,{slideMode:!0})),y("section",{id:"feature"},void 0,y(v.K,{slideMode:!0})),y("section",{id:"showcase"},void 0,y(v.zb,{slideMode:!0})),y("section",{id:"testimonials"},void 0,y(v.Lb,{slideMode:!0})),y("section",{id:"technology"},void 0,y(v.Jb,{slideMode:!0})),y("section",{id:"pricing"},void 0,y(v.kb,{slideMode:!0})),y("section",{id:"contact"},void 0,y(v.q,{slideMode:!0})));var k=Object(d.connect)((function(e){return{sidebarOpen:e.getIn(["ui","sidebarOpen"]),gradient:e.getIn(["ui","gradient"])}}))((function(e){var a=h(Object(n.useState)(0),2),t=a[0],i=a[1],r=h(Object(n.useState)(!1),2),d=r[0],s=r[1],f=Object(n.useRef)(null),p=function(){s(!d)},b=e.classes,v=e.sidebarOpen;return y(n.Fragment,{},void 0,y(m.a,{mdDown:!0},void 0,y(u.a,{open:v,curSlide:t,gotoSlide:function(e){return function(e){f.current.slickGoTo(e),p()}(e)}})),y("main",{className:b.fullSliderContent,id:"mainContent"},void 0,y("div",{className:b.parallaxBg},void 0,y("div",{className:c()(b.odd,d&&b.show)},void 0,y("img",{src:"/images/decoration/parallaxPetal3.png",className:b.line1,alt:"petal"}),y("img",{src:"/images/decoration/parallaxPetal4.png",className:b.line2,alt:"petal"}),y("img",{src:"/images/decoration/parallaxPetal1.png",className:b.petal1,alt:"petal"}),y("img",{src:"/images/decoration/parallaxPetal2.png",className:b.petal2,alt:"petal"})),y("div",{className:c()(b.even,!d&&b.show)},void 0,y("img",{src:"/images/decoration/parallaxPetal31.png",className:b.line1,alt:"petal"}),y("img",{src:"/images/decoration/parallaxPetal41.png",className:b.line2,alt:"petal"}),y("img",{src:"/images/decoration/parallaxPetal11.png",className:b.petal1,alt:"petal"}),y("img",{src:"/images/decoration/parallaxPetal21.png",className:b.petal2,alt:"petal"}))),y("div",{className:b.sliderPageWrap},void 0,y(m.a,{mdDown:!0},void 0,o.a.createElement(l.a,g({ref:f},{arrows:!1,dots:!1,infinite:!1,speed:1e3,slidesToShow:1,slidesToScroll:1},{onSwipe:function(){return p()},afterChange:function(e){return function(e){i(e)}(e)}}),S,M,O,N,j,P,x)),A)))}));a.default=Object(f.withStyles)(p.a)(k)}}]);