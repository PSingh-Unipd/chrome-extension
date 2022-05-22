(()=>{"use strict";var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])},r(t,e)};function t(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function e(r,t){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(r,u)}catch(r){i=[6,r],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function n(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function i(r,t,e){if(e||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return r.concat(n||Array.prototype.slice.call(t))}function u(r){return this instanceof u?(this.v=r,this):new u(r)}function c(r,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=e.apply(r,t||[]),i=[];return n={},c("next"),c("throw"),c("return"),n[Symbol.asyncIterator]=function(){return this},n;function c(r){o[r]&&(n[r]=function(t){return new Promise((function(e,n){i.push([r,t,e,n])>1||a(r,t)}))})}function a(r,t){try{(e=o[r](t)).value instanceof u?Promise.resolve(e.value.v).then(s,l):f(i[0][2],e)}catch(r){f(i[0][3],r)}var e}function s(r){a("next",r)}function l(r){a("throw",r)}function f(r,t){r(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function a(r){return"function"==typeof r}Object.create,Object.create;var s,l=((s=function(r){return function(t){r(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}((function(r){Error.call(r),r.stack=(new Error).stack}))).prototype=Object.create(Error.prototype),s.prototype.constructor=s,s);function f(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var p=function(){function r(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var r,t,e,u,c;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var f=n(s),p=f.next();!p.done;p=f.next())p.value.remove(this)}catch(t){r={error:t}}finally{try{p&&!p.done&&(t=f.return)&&t.call(f)}finally{if(r)throw r.error}}else s.remove(this);var h=this.initialTeardown;if(a(h))try{h()}catch(r){c=r instanceof l?r.errors:[r]}var y=this._finalizers;if(y){this._finalizers=null;try{for(var b=n(y),d=b.next();!d.done;d=b.next()){var m=d.value;try{v(m)}catch(r){c=null!=c?c:[],r instanceof l?c=i(i([],o(c)),o(r.errors)):c.push(r)}}}catch(r){e={error:r}}finally{try{d&&!d.done&&(u=b.return)&&u.call(b)}finally{if(e)throw e.error}}}if(c)throw new l(c)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)v(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(t)}},r.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},r.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},r.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&f(t,r)},r.prototype.remove=function(t){var e=this._finalizers;e&&f(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=((t=new r).closed=!0,t),r;var t}();function h(r){return r instanceof p||r&&"closed"in r&&a(r.remove)&&a(r.add)&&a(r.unsubscribe)}function v(r){a(r)?r():r.unsubscribe()}p.EMPTY;var y=null,b=null,d=void 0,m=!1,w=!1,g={setTimeout:function(r,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var u=g.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,i([r,t],o(e))):setTimeout.apply(void 0,i([r,t],o(e)))},clearTimeout:function(r){var t=g.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function x(r){g.setTimeout((function(){if(!y)throw r;y(r)}))}function _(){}var S=T("C",void 0,void 0);function T(r,t,e){return{kind:r,value:t,error:e}}var P=null,E=function(r){function e(t){var e=r.call(this)||this;return e.isStopped=!1,t?(e.destination=t,h(t)&&t.add(e)):e.destination=U,e}return t(e,r),e.create=function(r,t,e){return new A(r,t,e)},e.prototype.next=function(r){this.isStopped?z(function(r){return T("N",r,void 0)}(r),this):this._next(r)},e.prototype.error=function(r){this.isStopped?z(T("E",void 0,r),this):(this.isStopped=!0,this._error(r))},e.prototype.complete=function(){this.isStopped?z(S,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(r){this.destination.next(r)},e.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(p),O=Function.prototype.bind;function j(r,t){return O.call(r,t)}var I=function(){function r(r){this.partialObserver=r}return r.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(r){k(r)}},r.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(r){k(r)}else k(r)},r.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(r){k(r)}},r}(),A=function(r){function e(t,e,n){var o,i,u=r.call(this)||this;return a(t)||!t?o={next:null!=t?t:void 0,error:null!=e?e:void 0,complete:null!=n?n:void 0}:u&&w?((i=Object.create(t)).unsubscribe=function(){return u.unsubscribe()},o={next:t.next&&j(t.next,i),error:t.error&&j(t.error,i),complete:t.complete&&j(t.complete,i)}):o=t,u.destination=new I(o),u}return t(e,r),e}(E);function k(r){var t;m?(t=r,m&&P&&(P.errorThrown=!0,P.error=t)):x(r)}function z(r,t){var e=b;e&&g.setTimeout((function(){return e(r,t)}))}var U={closed:!0,next:_,error:function(r){throw r},complete:_},Y="function"==typeof Symbol&&Symbol.observable||"@@observable";function C(r){return r}function F(r){return 0===r.length?C:1===r.length?r[0]:function(t){return r.reduce((function(r,t){return t(r)}),t)}}var R=function(){function r(r){r&&(this._subscribe=r)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(r,t,e){var n,o=this,i=(n=r)&&n instanceof E||function(r){return r&&a(r.next)&&a(r.error)&&a(r.complete)}(n)&&h(n)?r:new A(r,t,e);return function(r){if(m){var t=!P;if(t&&(P={errorThrown:!1,error:null}),r(),t){var e=P,n=e.errorThrown,o=e.error;if(P=null,n)throw o}}else r()}((function(){var r=o,t=r.operator,e=r.source;i.add(t?t.call(i,e):e?o._subscribe(i):o._trySubscribe(i))})),i},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},r.prototype.forEach=function(r,t){var e=this;return new(t=L(t))((function(t,n){var o=new A({next:function(t){try{r(t)}catch(r){n(r),o.unsubscribe()}},error:n,complete:t});e.subscribe(o)}))},r.prototype._subscribe=function(r){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(r)},r.prototype[Y]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return F(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=L(r))((function(r,e){var n;t.subscribe((function(r){return n=r}),(function(r){return e(r)}),(function(){return r(n)}))}))},r.create=function(t){return new r(t)},r}();function L(r){var t;return null!==(t=null!=r?r:d)&&void 0!==t?t:Promise}new R((function(r){return r.complete()}));function M(r){return function(t){if(function(r){return a(null==r?void 0:r.lift)}(t))return t.lift((function(t){try{return r(t,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}function B(r,t,e,n,o){return new D(r,t,e,n,o)}var D=function(r){function e(t,e,n,o,i,u){var c=r.call(this,t)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=e?function(r){try{e(r)}catch(r){t.error(r)}}:r.prototype._next,c._error=o?function(r){try{o(r)}catch(r){t.error(r)}finally{this.unsubscribe()}}:r.prototype._error,c._complete=n?function(){try{n()}catch(r){t.error(r)}finally{this.unsubscribe()}}:r.prototype._complete,c}return t(e,r),e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var e=this.closed;r.prototype.unsubscribe.call(this),!e&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}},e}(E),G=function(r){return r&&"number"==typeof r.length&&"function"!=typeof r};function N(r){return a(null==r?void 0:r.then)}function q(r){return a(r[Y])}function H(r){return Symbol.asyncIterator&&a(null==r?void 0:r[Symbol.asyncIterator])}function J(r){return new TypeError("You provided "+(null!==r&&"object"==typeof r?"an invalid object":"'"+r+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var K="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function Q(r){return a(null==r?void 0:r[K])}function V(r){return c(this,arguments,(function(){var t,n,o;return e(this,(function(e){switch(e.label){case 0:t=r.getReader(),e.label=1;case 1:e.trys.push([1,,9,10]),e.label=2;case 2:return[4,u(t.read())];case 3:return n=e.sent(),o=n.value,n.done?[4,u(void 0)]:[3,5];case 4:return[2,e.sent()];case 5:return[4,u(o)];case 6:return[4,e.sent()];case 7:return e.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}function W(r){return a(null==r?void 0:r.getReader)}function X(r){if(r instanceof R)return r;if(null!=r){if(q(r))return i=r,new R((function(r){var t=i[Y]();if(a(t.subscribe))return t.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(G(r))return o=r,new R((function(r){for(var t=0;t<o.length&&!r.closed;t++)r.next(o[t]);r.complete()}));if(N(r))return e=r,new R((function(r){e.then((function(t){r.closed||(r.next(t),r.complete())}),(function(t){return r.error(t)})).then(null,x)}));if(H(r))return Z(r);if(Q(r))return t=r,new R((function(r){var e,o;try{for(var i=n(t),u=i.next();!u.done;u=i.next()){var c=u.value;if(r.next(c),r.closed)return}}catch(r){e={error:r}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}r.complete()}));if(W(r))return Z(V(r))}var t,e,o,i;throw J(r)}function Z(r){return new R((function(t){(function(r,t){var o,i,u,c,a,s,l,f;return a=this,s=void 0,f=function(){var a,s;return e(this,(function(e){switch(e.label){case 0:e.trys.push([0,5,6,11]),o=function(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,e=r[Symbol.asyncIterator];return e?e.call(r):(r=n(r),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(e){t[e]=r[e]&&function(t){return new Promise((function(n,o){!function(r,t,e,n){Promise.resolve(n).then((function(t){r({value:t,done:e})}),t)}(n,o,(t=r[e](t)).done,t.value)}))}}}(r),e.label=1;case 1:return[4,o.next()];case 2:if((i=e.sent()).done)return[3,4];if(a=i.value,t.next(a),t.closed)return[2];e.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=e.sent(),u={error:s},[3,11];case 6:return e.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:e.sent(),e.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(r,t){function e(r){try{o(f.next(r))}catch(r){t(r)}}function n(r){try{o(f.throw(r))}catch(r){t(r)}}function o(t){var o;t.done?r(t.value):(o=t.value,o instanceof l?o:new l((function(r){r(o)}))).then(e,n)}o((f=f.apply(a,s||[])).next())}))})(r,t).catch((function(r){return t.error(r)}))}))}function $(r,t,e,n,o){void 0===n&&(n=0),void 0===o&&(o=!1);var i=t.schedule((function(){e(),o?r.add(this.schedule(null,n)):this.unsubscribe()}),n);if(r.add(i),!o)return i}function rr(r,t){return void 0===t&&(t=0),M((function(e,n){e.subscribe(B(n,(function(e){return $(n,r,(function(){return n.next(e)}),t)}),(function(){return $(n,r,(function(){return n.complete()}),t)}),(function(e){return $(n,r,(function(){return n.error(e)}),t)})))}))}function tr(r,t){return void 0===t&&(t=0),M((function(e,n){n.add(r.schedule((function(){return e.subscribe(n)}),t))}))}function er(r,t){if(!r)throw new Error("Iterable cannot be null");return new R((function(e){$(e,t,(function(){var n=r[Symbol.asyncIterator]();$(e,t,(function(){n.next().then((function(r){r.done?e.complete():e.next(r.value)}))}),0,!0)}))}))}function nr(r,t){return t?function(r,t){if(null!=r){if(q(r))return function(r,t){return X(r).pipe(tr(t),rr(t))}(r,t);if(G(r))return function(r,t){return new R((function(e){var n=0;return t.schedule((function(){n===r.length?e.complete():(e.next(r[n++]),e.closed||this.schedule())}))}))}(r,t);if(N(r))return function(r,t){return X(r).pipe(tr(t),rr(t))}(r,t);if(H(r))return er(r,t);if(Q(r))return function(r,t){return new R((function(e){var n;return $(e,t,(function(){n=r[K](),$(e,t,(function(){var r,t,o;try{t=(r=n.next()).value,o=r.done}catch(r){return void e.error(r)}o?e.complete():e.next(t)}),0,!0)})),function(){return a(null==n?void 0:n.return)&&n.return()}}))}(r,t);if(W(r))return function(r,t){return er(V(r),t)}(r,t)}throw J(r)}(r,t):X(r)}function or(r){return M((function(t,e){var n,o=null,i=!1;o=t.subscribe(B(e,void 0,void 0,(function(u){n=X(r(u,or(r)(t))),o?(o.unsubscribe(),o=null,n.subscribe(e)):i=!0}))),i&&(o.unsubscribe(),o=null,n.subscribe(e))}))}function ir(r){return(e=(t=r)[t.length-1])&&a(e.schedule)?r.pop():void 0;var t,e}function ur(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=ir(r);return nr(r,e)}chrome.idle.setDetectionInterval(15),chrome.idle.onStateChanged.addListener((r=>{"idle"===r&&class{static get(r){return nr(chrome&&chrome.storage?chrome.storage.local.get(r):Promise.reject()).pipe(or((r=>(console.log("chrome local storage not available!"),ur({})))))}static set(r,t){return nr(chrome&&chrome.storage?chrome.storage.local.set({[r]:t}):Promise.reject()).pipe(or((r=>(console.log("chrome local storage not available!"),ur()))))}static remove(r){return nr(chrome&&chrome.storage?chrome.storage.local.remove(r):Promise.reject()).pipe(or((r=>(console.log("chrome local storage not available!"),ur()))))}}.get(["user"]).pipe((1,M((function(r,t){var e=0;r.subscribe(B(t,(function(r){++e<=1&&(t.next(r),1<=e&&t.complete())})))})))).subscribe((r=>{Boolean(r.user)&&alert()}))}))})();