(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"30be294806b086dcec75":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),a=n.n(r),i=n("0d7f0986bcd2f33d8a2a"),c=n("1037a6e0d5914309f74c"),l=n.n(c),s=n("6938d226fd372a75cbf9"),u=(n("8a2d1b95e05b6a321e74"),n("be638c054224589367e1")),f=n.n(u),p=n("d4df020feb07c4f688e4"),d=n.n(p),b=n("2aea235afd5c55b8b19b"),y=n.n(b),m=n("e9cb1a74b44c7bf473df"),v=n.n(m),h=n("39db00de4ab4da66ea22"),w=n.n(h),S=n("eec3f8ad528d6958dcd6"),g=n.n(S),A=n("3ead0690618f0035f026"),T=n("f363639bc5c3c97af546"),M=n("e649e14cabb39045d52c"),B=n("e95a63b25fb92ed15721"),D=n("63d0249d2e2f59180ae5"),O=n("b0e7e7bd2640693d642e");function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=_(e);if(t){var r=_(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return L(this,n)}}function L(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x,N=I("br",{}),$=I("br",{}),H=I("br",{}),J=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(i,e);var t,n,o,a=k(i);function i(){var e;R(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return U(P(e=a.call.apply(a,[this].concat(n))),"state",{variant:"",message:"",open:!1,id:null,openModal:!1}),e}return t=i,(n=[{key:"render",value:function(){var e=this,t=this.state,n=t.id,o=(t.type,t.open),a=t.variant,i=t.message,c=this.props,l=c.classes,s=c.data,u=c.t,p={textLabels:{body:{noMatch:u("MUIDATABLES.noMatch"),toolTip:u("MUIDATABLES.toolTip"),columnHeaderTooltip:function(e){return"".concat(u("MUIDATABLES.sort")," ").concat(e.label)}},pagination:{next:u("MUIDATABLES.next"),previous:u("MUIDATABLES.previous"),rowsPerPage:u("MUIDATABLES.rowsPerPage"),displayRows:u("MUIDATABLES.displayRows")},toolbar:{search:u("MUIDATABLES.search"),downloadCsv:u("MUIDATABLES.downloadCsv"),print:u("MUIDATABLES.print"),viewColumns:u("MUIDATABLES.viewColumns"),filterTable:u("MUIDATABLES.filterTable")},filter:{all:u("MUIDATABLES.all"),title:u("MUIDATABLES.title"),reset:u("MUIDATABLES.reset")},viewColumns:{title:u("MUIDATABLES.titleShow"),titleAria:u("MUIDATABLES.titleAria")},selectedRows:{text:u("MUIDATABLES.text"),delete:u("MUIDATABLES.delete"),deleteAria:u("MUIDATABLES.deleteAria")}},filterType:"dropdown",responsive:"stacked",print:!0,rowsPerPage:10,page:0,onRowsSelect:function(t,n,o){if(n.length){var r=s[n[0].dataIndex].id;e.setState({id:r})}},selectableRowsHeader:!1,selectableRowsOnClick:!0,selectableRows:"single"};return I(r.Fragment,{},void 0,I("div",{className:l.table},void 0,I(d.a,{title:u("TableCamers.title"),data:s,columns:[{name:"id",label:"ID",options:{filter:!0}},{name:"ip",label:u("TableCamers.ip"),options:{filter:!0}},{name:"port",label:u("TableCamers.port"),options:{filter:!0}},{name:"username",label:u("TableCamers.username"),options:{filter:!0}},{name:"password",label:u("TableCamers.password"),options:{filter:!0}},{name:"type",label:u("TableCamers.type"),options:{filter:!0}},{name:"stream_url",label:u("TableCamers.stream_url"),options:{filter:!0,customBodyRender:function(e){return I(f.a,e?{label:u("Buttons.yes"),color:"secondary"}:{label:u("Buttons.no"),color:"primary"})}}},{name:"isDefaultRecord",label:u("TableCamers.isDefaultRecord"),options:{filter:!0,customBodyRender:function(e){return I(f.a,!0===e?{label:u("Buttons.yes"),color:"secondary"}:!1===e?{label:u("Buttons.no"),color:"primary"}:{label:u("Buttons.dont_know")})}}}],options:p})),I("div",{},void 0,N,$,I(y.a,{onClick:function(){return e.props.history.push("/home/forms/add/camera")},className:l.button,variant:"contained",color:"primary"},void 0,u("Buttons.create"),I(w.a,{className:l.rightIcon})),I(y.a,{onClick:function(){return function(t){t?e.props.history.push("/home/forms/edit/camera?id=".concat(t)):e.setState({open:!0,variant:"warning",message:"Notification.clickEdit"})}(n)},className:l.button,variant:"contained",color:"secondary"},void 0,u("Buttons.edit"),I(g.a,{className:l.rightIcon})),I(y.a,{onClick:function(){return function(t){t?e.setState({openModal:!0}):e.setState({open:!0,variant:"warning",message:"Notification.clickDelete"})}(n)},className:l.button,variant:"contained"},void 0,u("Buttons.delete"),I(v.a,{className:l.rightIcon})),H),I(O.a,{open:this.state.openModal,title:u("Modal.title"),desc:u("Modal.desc")+this.state.id,onClose:function(){return e.setState({openModal:!1})},onDelete:function(){return function(t){t?(Object(T.a)("".concat(A.f,"/api/camera/").concat(t),A.a).then((function(){e.setState({open:!0,variant:"success",message:"Notification.success"})})).catch((function(t){e.setState({open:!0,variant:"error",message:"Notification.error"})})),e.setState({openModal:!1})):e.setState({open:!0,variant:"warning",message:"Notification.clickDelete"})}(n)},cancel:u("Modal.cancel"),deleteText:u("Modal.delete")}),I(M.a,{open:o,handleClose:function(){var t;"clickaway"!==t&&e.setState({open:!1})},variant:a,message:u(i)}))}}])&&C(t.prototype,n),o&&C(t,o),i}(a.a.Component),z=Object(s.withStyles)((function(e){return{button:{margin:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},table:{"& > div":{overflow:"auto"},"& table":U({"& td":{wordBreak:"keep-all"}},e.breakpoints.down("md"),{"& td":{height:60,overflow:"hidden",textOverflow:"ellipsis"}})}}}))(Object(B.withRouter)(Object(D.a)()(J)));function F(e){return(F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t,n,o){x||(x="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:x,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Y(e);if(t){var r=Y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?X(e):t}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(a,e);var t,n,o,r=V(a);function a(){var e;q(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return Z(X(e=r.call.apply(r,[this].concat(n))),"state",{camers:[]}),e}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this;Object(T.a)("".concat(A.f,"/api/camera"),A.b).then((function(t){e.setState({camers:t.data.cameras.rows})}))}},{key:"render",value:function(){var e=l.a.name+" - Table",t=l.a.desc;return G("div",{},void 0,G(i.Helmet,{},void 0,G("title",{},void 0,e),G("meta",{name:"description",content:t}),G("meta",{property:"og:title",content:e}),G("meta",{property:"og:description",content:t}),G("meta",{property:"twitter:title",content:e}),G("meta",{property:"twitter:description",content:t})),G("div",{},void 0,G(z,{data:this.state.camers})))}}])&&K(t.prototype,n),o&&K(t,o),a}(r.Component);t.default=Object(s.withStyles)({root:{flexGrow:1}})(ee)}}]);