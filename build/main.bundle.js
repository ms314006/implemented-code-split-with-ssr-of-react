!function(e){var t={},r={1:0};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.e=function(t){if(0!==r[t]){var n=require("./"+({0:"pages-Content",2:"pages-NotFound"}[t]||t)+".bundle.js"),o=n.modules,u=n.ids;for(var i in o)e[i]=o[i];for(var c=0;c<u.length;c++)r[u[c]]=0}return Promise.all([])},n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=19)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("redux")},function(e,t,r){"use strict";var n=r(5),o=r.n(n),u=r(17);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=[c({},u.a,{routes:[{component:o()({resolved:{},chunkName:function(){return"pages-Content"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:function(){return r.e(0).then(r.bind(null,8))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return 8}},{resolveComponent:function(e){return e.default.component}}),loadData:r.e(0).then(r.bind(null,8)),path:"/",exact:!0},{component:o()({resolved:{},chunkName:function(){return"pages-NotFound"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:function(){return r.e(2).then(r.bind(null,18))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return 18}},{resolveComponent:function(e){return e.default.component}})}]})]},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("@loadable/component")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-router-dom")},,function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c}));var n=r(16),o=r.n(n);function u(e,t,r,n,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}var i="fetch_request_query",c=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("http://httpbin.org/get");case 2:r=e.sent,n=r.data,t({type:i,payload:n});case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){u(i,n,o,c,a,"next",e)}function a(e){u(i,n,o,c,a,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}()},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("@loadable/server")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";var n=r(0),o=r.n(n),u=r(6),i=r.n(u),c=r(1),a=r(7),s=function(){return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(a.Link,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"otherPage"},"Other page")))},l=function(e){var t=e.route;return o.a.createElement("div",null,o.a.createElement(s,null),Object(c.renderRoutes)(t.routes))};l.propTypes={route:i.a.objectOf(i.a.any)},l.defaultProps={route:null};t.a={component:l}},,function(e,t,r){r(20),e.exports=r(21)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){"use strict";r.r(t);var n=r(4),o=r.n(n),u=r(1),i=r(3),c=r(11),a=r.n(c),s=r(0),l=r.n(s),f=r(12),p=r(13),d=r(9),v=r(14),h=r(2),m=r(15),b=r.n(m),y=r(10),g=Object(h.combineReducers)({request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.a:return t.payload;default:return e}}});function x(e,t,r,n,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}var O=o()(),j=process.env.PORT||3001;O.use(o.a.static("dist")),O.get("*",(function(e,t){var r=Object(h.createStore)(g,Object(h.applyMiddleware)(b.a)),n=r.dispatch,o=Object(u.matchRoutes)(i.a,e.path).filter((function(e){return e.route.loadData})).map(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,o,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,e.next=3,r.loadData;case 3:return o=e.sent,u=o.default.loadData,e.abrupt("return",u(n));case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function i(e){x(u,n,o,i,c,"next",e)}function c(e){x(u,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());Promise.all(o).then((function(){var n=function(e,t){var r=a.a.resolve("./build/loadable-stats.json"),n=new v.ChunkExtractor({statsFile:r});n.getScriptElements(),n.getLinkElements(),n.getStyleElements();var o=Object(f.renderToString)(n.collectChunks(l.a.createElement(d.Provider,{store:t},l.a.createElement(p.StaticRouter,{location:e.path},l.a.createElement("div",null,Object(u.renderRoutes)(i.a))))));return'\n    <html>\n      <body>\n        <div id="root">'.concat(o,'</div>\n        <script src="./bundle.js"><\/script>\n      </body>\n    </html>\n  ')}(e,r);t.send(n)}))})),O.listen(j,(function(){console.log("Listening on port: ".concat(j))}))}]);