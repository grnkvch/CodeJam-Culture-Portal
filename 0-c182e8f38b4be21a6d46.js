(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=r(n(181)),a=r(n(160)),i=r(n(7)),u=r(n(51)),c=r(n(52)),l=r(n(4)),f=r(n(0)),s=n(22),p=n(147);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/CodeJam-Culture-Portal/"+e)}var T={activeClassName:l.default.string,activeStyle:l.default.object},y=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,a.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,u=t.onClick,c=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),T=t.replace,y=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),E=d(n);return f.default.createElement(s.Link,(0,a.default)({to:E,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),h(n,{state:l,replace:T})),!0}},y))},t}(f.default.Component);y.propTypes=(0,a.default)({},T,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var E=y;t.default=E;var h=function(e,t){window.___navigate(d(e),t)};t.navigate=h;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},148:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},149:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},150:function(e,t,n){var r=n(167),o=n(51);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},151:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},152:function(e,t,n){var r=n(198);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},160:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},161:function(e,t,n){var r=n(52);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}},162:function(e,t,n){var r=n(181);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},164:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nProvider=function(e){var t=e.children,n=(0,a.default)(e,["children"]);return i.default.createElement(u.Provider,{value:(0,o.default)({},n)},t)},t.I18nConsumer=void 0;var o=r(n(161)),a=r(n(162)),i=r(n(0)),u=(r(n(4)),i.default.createContext());var c=u.Consumer;t.I18nConsumer=c},166:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"I18nProvider",{enumerable:!0,get:function(){return c.I18nProvider}}),Object.defineProperty(t,"I18nConsumer",{enumerable:!0,get:function(){return c.I18nConsumer}});var o=r(n(189)),a=r(n(197)),i=r(n(204)),u=r(n(205)),c=n(164)},167:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},179:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(0)),i=s(n(4)),u=s(n(190)),c=s(n(193)),l=n(196),f=n(180);function s(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var d,T,y,E=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)(function(){return null}),h=(d=E,y=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case f.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,u=e.nestedChildren;switch(o.type){case f.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=u,t.titleAttributes=r({},i),t));case f.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case f.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach(function(t){var o;n=r({},n,((o={})[t]=e[t],o))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,a=o.children,i=p(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case f.TAG_NAMES.LINK:case f.TAG_NAMES.META:case f.TAG_NAMES.NOSCRIPT:case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(a.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=d.peek,T.rewind=function(){var e=d.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},180:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},181:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},182:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},189:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(160)),a=r(n(0)),i=(r(n(4)),r(n(179))),u=n(164);function c(e){var t=e.availableLngs,n=e.children,r=e.lng,o=e.originalPath,u=e.siteUrl;e.hreflang;return a.default.createElement(a.default.Fragment,null,a.default.createElement(i.default,null,a.default.createElement("html",{lang:r}),a.default.createElement("link",{rel:"alternate",href:"".concat(u),hreflang:"x-default"}),t.map(function(e){return a.default.createElement("link",{key:e,rel:"alternate",href:"".concat(u).concat(e).concat(o),hreflang:e})}),n))}c.defaultProps={hreflang:!0};t.default=function(e){return a.default.createElement(u.I18nConsumer,null,function(t){return a.default.createElement(c,(0,o.default)({},t,e))})}},190:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(0),a=r(o),i=r(n(191)),u=r(n(192));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c=[],l=void 0;function f(){l=e(c.map(function(e){return e.props})),s.canUseDOM?t(l):n&&(l=n(l))}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return l},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e},t.prototype.shouldComponentUpdate=function(e){return!u(e,this.props)},t.prototype.componentWillMount=function(){c.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),f()},t.prototype.render=function(){return a.createElement(r,this.props)},t}(o.Component);return s.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",s.canUseDOM=i.canUseDOM,s}}},191:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)}()},192:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var f=e[l],s=t[l];if(!1===(o=n?n.call(r,f,s,l):void 0)||void 0===o&&f!==s)return!1}return!0}},193:function(e,t,n){var r=Array.prototype.slice,o=n(194),a=n(195),i=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:function(e,t,n){var l,f;if(u(e)||u(t))return!1;if(e.prototype!==t.prototype)return!1;if(a(e))return!!a(t)&&(e=r.call(e),t=r.call(t),i(e,t,n));if(c(e)){if(!c(t))return!1;if(e.length!==t.length)return!1;for(l=0;l<e.length;l++)if(e[l]!==t[l])return!1;return!0}try{var s=o(e),p=o(t)}catch(d){return!1}if(s.length!=p.length)return!1;for(s.sort(),p.sort(),l=s.length-1;l>=0;l--)if(s[l]!=p[l])return!1;for(l=s.length-1;l>=0;l--)if(f=s[l],!i(e[f],t[f],n))return!1;return typeof e==typeof t}(e,t,n))};function u(e){return null==e}function c(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}},194:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}(e.exports="function"==typeof Object.keys?Object.keys:n).shim=n},195:function(e,t){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function r(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=n?r:o).supported=r,t.unsupported=o},196:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n(0)),i=c(n(54)),u=n(180);function c(e){return e&&e.__esModule?e:{default:e}}var l,f=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(e){var t=E(e,u.TAG_NAMES.TITLE),n=E(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=E(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},T=function(e,t){return t.filter(function(e){return void 0!==e[u.TAG_NAMES.BASE]}).map(function(e){return e[u.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t},[])},y=function(e,t,n){var o={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var r={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var f=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][f]&&(r[n][f]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(r),c=0;c<a.length;c++){var l=a[c],f=(0,i.default)({},o[l],r[l]);o[l]=f}return e},[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout(function(){h(e)},0)}),v=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||v:e.cancelAnimationFrame||v,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},m=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,f=e.scriptTags,s=e.styleTags,p=e.title,d=e.titleAttributes;P(u.TAG_NAMES.BODY,r),P(u.TAG_NAMES.HTML,o),O(p,d);var T={baseTag:w(u.TAG_NAMES.BASE,n),linkTags:w(u.TAG_NAMES.LINK,a),metaTags:w(u.TAG_NAMES.META,i),noscriptTags:w(u.TAG_NAMES.NOSCRIPT,c),scriptTags:w(u.TAG_NAMES.SCRIPT,f),styleTags:w(u.TAG_NAMES.STYLE,s)},y={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),l(e,y,E)},_=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),P(u.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],f=t[l]||"";n.getAttribute(l)!==f&&n.setAttribute(l,f),-1===o.indexOf(l)&&o.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},w=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},R=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t},t)},C=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=M(n,r),[a.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=R(n),a=_(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),a.default.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t},t)},t.handleClientStateChange=function(e){m&&A(m),e.defer?m=b(function(){S(e,function(){m=null})}):(S(e),m=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,f=e.styleTags,s=e.title,p=void 0===s?"":s,d=e.titleAttributes;return{base:C(u.TAG_NAMES.BASE,t,r),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,r),link:C(u.TAG_NAMES.LINK,a,r),meta:C(u.TAG_NAMES.META,i,r),noscript:C(u.TAG_NAMES.NOSCRIPT,c,r),script:C(u.TAG_NAMES.SCRIPT,l,r),style:C(u.TAG_NAMES.STYLE,f,r),title:C(u.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:T([u.TAG_PROPERTIES.HREF],e),bodyAttributes:d(u.ATTRIBUTE_NAMES.BODY,e),defer:E(e,u.HELMET_PROPS.DEFER),encode:E(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(u.ATTRIBUTE_NAMES.HTML,e),linkTags:y(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:y(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:y(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:y(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:y(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:s(e),titleAttributes:d(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=g}).call(this,n(73))},197:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(148)),a=r(n(149)),i=r(n(150)),u=r(n(151)),c=r(n(152)),l=r(n(51)),f=r(n(52)),s=n(0),p=n(147),d=n(199),T=n(203),y=function(e){function t(){var e,n;(0,o.default)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return n=(0,i.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(a))),(0,f.default)((0,l.default)((0,l.default)(n)),"perform",function(){var e=n.props.pageContext,t=e.fallbackLng,r=e.availableLngs,o=e.redirectPage,a=window.localStorage.getItem("@igorkoLng")||(0,d.lookup)(r,(0,d.navigatorLanguages)(),t);window.localStorage.setItem("@igorkoLng",a);var i="/".concat(a).concat(o);(0,p.navigate)(i,{replace:!0})}),n}return(0,c.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){(0,T.isBrowser)()||this.perform()}},{key:"render",value:function(){return null}}]),t}(s.PureComponent);t.default=y},198:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(200);Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return i(r).default}});var o=n(201);Object.defineProperty(t,"lookup",{enumerable:!0,get:function(){return i(o).default}});var a=n(202);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"navigatorLanguages",{enumerable:!0,get:function(){return i(a).default}})},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;t.default=function(e){if(!e)return null;var t=r.exec(e);if(!t)return null;var n=t[3]?t[3].split("-"):[],o={language:n.length>0?n.shift():null,extlang:n},a=[];if(t[7]){var i=t[7].slice(1).split("-"),u=void 0,c=[];i.forEach(function(e){1===e.length?u?(a.push({singleton:u,extension:c}),u=e,c=[]):u=e:c.push(e)}),a.push({singleton:u,extension:c})}return{langtag:{language:o,script:t[4]||null,region:t[5]||null,variant:t[6]?t[6].slice(1).split("-"):[],extension:a,privateuse:t[8]?t[8].slice(3).split("-"):[]},privateuse:t[9]?t[9].slice(2).split("-"):[],grandfathered:{irregular:t[1]||null,regular:t[2]||null}}}},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e||!t)return n;e=Array.isArray(e)?e:[e],t=Array.isArray(t)?t:[t];for(var o=function(n){if("*"===t[n])return"continue";var r=e.find(function(e){return function(e,t){for(;;){if("*"===t||e===t)return!0;var n=t.lastIndexOf("-");if(-1===n)return!1;n>3&&"-"===t.charAt(n-2)&&(n-=2),t=t.substring(0,n)}}(e.toLowerCase(),t[n].toLowerCase())});return r?{v:r}:void 0},a=0;a<t.length;a++){var i=o(a);switch(i){case"continue":continue;default:if("object"===(void 0===i?"undefined":r(i)))return i.v}}return n}},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0],void 0===("undefined"==typeof navigator?"undefined":r(navigator)))return null;var e=[];return navigator.languages&&(e=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(navigator.languages))),navigator.language&&e.push(navigator.language),navigator.browserLanguage&&e.push(navigator.browserLanguage),navigator.userLanguage&&e.push(navigator.userLanguage),e.length>0?e:null}},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowser=function(){return"undefined"==typeof window}},204:function(e,t,n){"use strict";var r=n(182),o=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(160)),i=o(n(148)),u=o(n(149)),c=o(n(150)),l=o(n(151)),f=o(n(152)),s=o(n(51)),p=o(n(52)),d=r(n(0)),T=n(147),y=n(164),E=function(e){function t(){var e,n;(0,i.default)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=(0,c.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(o))),(0,p.default)((0,s.default)((0,s.default)(n)),"handleChangeLng",function(e){var t=n.props.originalPath,r="/".concat(e).concat(t);(0,T.navigate)(r)}),n}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.availableLngs;return(0,e.children)({lng:e.lng,changeLng:this.handleChangeLng,availableLngs:t})}}]),t}(d.Component);t.default=function(e){return d.default.createElement(y.I18nConsumer,null,function(t){return d.default.createElement(E,(0,a.default)({},t,e))})}},205:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(160)),a=r(n(162)),i=r(n(0)),u=r(n(4)),c=n(147),l=n(164),f=function(e){var t=e.to,n=e.lng,r=e.children,u=(0,a.default)(e,["to","lng","children"]);return i.default.createElement(c.Link,(0,o.default)({to:n?"/".concat(n).concat(t):"".concat(t)},u),r)};f.propTypes={to:u.default.string.isRequired,children:u.default.node.isRequired};t.default=function(e){return i.default.createElement(l.I18nConsumer,null,function(t){var n=t.lng;return i.default.createElement(f,(0,o.default)({lng:n},e))})}}}]);
//# sourceMappingURL=0-c182e8f38b4be21a6d46.js.map