function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.4c8dbb41.js","eyyUD":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,d,f,p={};f=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h=Function.prototype,v=h.call,m=f&&h.bind.bind(v,v);p=f?m:function(e){return function(){return v.apply(e,arguments)}};var g,y={},b="object"==typeof document&&document.all,_=(g={all:b,IS_HTMLDDA:void 0===b&&void 0!==b}).all;y=g.IS_HTMLDDA?function(e){return"function"==typeof e||e===_}:function(e){return"function"==typeof e};var w,k,E,S={};E=function(e){return null==e};var O=TypeError;k=function(e){if(E(e))throw O("Can't call method on "+e);return e};var L=Object;w=function(e){return L(k(e))};var j=p({}.hasOwnProperty);S=Object.hasOwn||function(e,t){return j(w(e),t)};var F,$=Function.prototype,M=c&&Object.getOwnPropertyDescriptor,T=S($,"name"),x={EXISTS:T,PROPER:T&&"something"===function(){}.name,CONFIGURABLE:T&&(!c||c&&M($,"name").configurable)}.CONFIGURABLE,P={},R={},I=Object.defineProperty;F=function(e,t){try{I(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var N="__core-js_shared__",H=a[N]||F(N,{});R=H;var q=p(Function.toString);y(R.inspectSource)||(R.inspectSource=function(e){return q(e)}),P=R.inspectSource;var A,C,D=a.WeakMap;C=y(D)&&/native code/.test(String(D));var W={},z=g.all;W=g.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:y(e)||e===z}:function(e){return"object"==typeof e?null!==e:y(e)};var B,U,G,J={},Y=a.document,V=W(Y)&&W(Y.createElement);G=function(e){return V?Y.createElement(e):{}},U=!c&&!u((function(){return 7!=Object.defineProperty(G("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(W(e))return e;throw Z(X(e)+" is not an object")};var ee,te,ne={},re=Function.prototype.call;ne=f?re.bind(re):function(){return re.apply(re,arguments)};var ie,oe={};ie=function(e,t){return arguments.length<2?(n=a[e],y(n)?n:void 0):a[e]&&a[e][t];var n};var ae={};ae=p({}.isPrototypeOf);var se,ce,ue,le={};le="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var de,fe,pe=a.process,he=a.Deno,ve=pe&&pe.versions||he&&he.version,me=ve&&ve.v8;me&&(fe=(de=me.split("."))[0]>0&&de[0]<4?1:+(de[0]+de[1])),!fe&&le&&(!(de=le.match(/Edge\/(\d+)/))||de[1]>=74)&&(de=le.match(/Chrome\/(\d+)/))&&(fe=+de[1]),ue=fe,se=(ce=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ue&&ue<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ge=Object;oe=se?function(e){return"symbol"==typeof e}:function(e){var t=ie("Symbol");return y(t)&&ae(t.prototype,ge(e))};var ye,be,_e,we=String;_e=function(e){try{return we(e)}catch(e){return"Object"}};var ke=TypeError;be=function(e){if(y(e))return e;throw ke(_e(e)+" is not a function")},ye=function(e,t){var n=e[t];return E(n)?void 0:be(n)};var Ee,Se=TypeError;Ee=function(e,t){var n,r;if("string"===t&&y(n=e.toString)&&!W(r=ne(n,e)))return r;if(y(n=e.valueOf)&&!W(r=ne(n,e)))return r;if("string"!==t&&y(n=e.toString)&&!W(r=ne(n,e)))return r;throw Se("Can't convert object to primitive value")};var Oe;(Oe=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.29.1",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Le,je=0,Fe=Math.random(),$e=p(1..toString);Le=function(e){return"Symbol("+(void 0===e?"":e)+")_"+$e(++je+Fe,36)};var Me=a.Symbol,Te=Oe("wks"),xe=se?Me.for||Me:Me&&Me.withoutSetter||Le,Pe=TypeError,Re=function(e){return S(Te,e)||(Te[e]=ce&&S(Me,e)?Me[e]:xe("Symbol."+e)),Te[e]}("toPrimitive");te=function(e,t){if(!W(e)||oe(e))return e;var n,r=ye(e,Re);if(r){if(void 0===t&&(t="default"),n=ne(r,e,t),!W(n)||oe(n))return n;throw Pe("Can't convert object to primitive value")}return void 0===t&&(t="number"),Ee(e,t)},ee=function(e){var t=te(e,"string");return oe(t)?t:t+""};var Ie=TypeError,Ne=Object.defineProperty,He=Object.getOwnPropertyDescriptor,qe="enumerable",Ae="configurable",Ce="writable";B=c?Q?function(e,t,n){if(K(e),t=ee(t),K(n),"function"==typeof e&&"prototype"===t&&"value"in n&&Ce in n&&!n[Ce]){var r=He(e,t);r&&r[Ce]&&(e[t]=n.value,n={configurable:Ae in n?n[Ae]:r[Ae],enumerable:qe in n?n[qe]:r[qe],writable:!1})}return Ne(e,t,n)}:Ne:function(e,t,n){if(K(e),t=ee(t),K(n),U)try{return Ne(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ie("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var De;De=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},J=c?function(e,t,n){return B(e,t,De(1,n))}:function(e,t,n){return e[t]=n,e};var We,ze=Oe("keys");We=function(e){return ze[e]||(ze[e]=Le(e))};var Be={};Be={};var Ue,Ge,Je,Ye="Object already initialized",Ve=a.TypeError,Qe=a.WeakMap;if(C||R.state){var Ke=R.state||(R.state=new Qe);Ke.get=Ke.get,Ke.has=Ke.has,Ke.set=Ke.set,Ue=function(e,t){if(Ke.has(e))throw Ve(Ye);return t.facade=e,Ke.set(e,t),t},Ge=function(e){return Ke.get(e)||{}},Je=function(e){return Ke.has(e)}}else{var Xe=We("state");Be[Xe]=!0,Ue=function(e,t){if(S(e,Xe))throw Ve(Ye);return t.facade=e,J(e,Xe,t),t},Ge=function(e){return S(e,Xe)?e[Xe]:{}},Je=function(e){return S(e,Xe)}}var Ze=(A={set:Ue,get:Ge,has:Je,enforce:function(e){return Je(e)?Ge(e):Ue(e,{})},getterFor:function(e){return function(t){var n;if(!W(t)||(n=Ge(t)).type!==e)throw Ve("Incompatible receiver, "+e+" required");return n}}}).enforce,et=A.get,tt=String,nt=Object.defineProperty,rt=p("".slice),it=p("".replace),ot=p([].join),at=c&&!u((function(){return 8!==nt((function(){}),"length",{value:8}).length})),st=String(String).split("String"),ct=d=function(e,t,n){"Symbol("===rt(tt(t),0,7)&&(t="["+it(tt(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!S(e,"name")||x&&e.name!==t)&&(c?nt(e,"name",{value:t,configurable:!0}):e.name=t),at&&n&&S(n,"arity")&&e.length!==n.arity&&nt(e,"length",{value:n.arity});try{n&&S(n,"constructor")&&n.constructor?c&&nt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=Ze(e);return S(r,"source")||(r.source=ot(st,"string"==typeof t?t:"")),e};Function.prototype.toString=ct((function(){return y(this)&&et(this).source||P(this)}),"toString"),l=function(e,t,n){return n.get&&d(n.get,t,{getter:!0}),n.set&&d(n.set,t,{setter:!0}),B(e,t,n)};var ut;ut=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var lt=a.RegExp,dt=lt.prototype;c&&u((function(){var e=!0;try{lt(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(dt,"flags").get.call(t)!==r||n!==r}))&&l(dt,"flags",{configurable:!0,get:ut});var ft,pt,ht,vt={}.propertyIsEnumerable,mt=Object.getOwnPropertyDescriptor,gt=mt&&!vt.call({1:2},1);ht=gt?function(e){var t=mt(this,e);return!!t&&t.enumerable}:vt;var yt,bt,_t={},wt=p({}.toString),kt=p("".slice);bt=function(e){return kt(wt(e),8,-1)};var Et=Object,St=p("".split);_t=u((function(){return!Et("z").propertyIsEnumerable(0)}))?function(e){return"String"==bt(e)?St(e,""):Et(e)}:Et,yt=function(e){return _t(k(e))};var Ot,Lt=Object.getOwnPropertyDescriptor,jt=pt=c?Lt:function(e,t){if(e=yt(e),t=ee(t),U)try{return Lt(e,t)}catch(e){}if(S(e,t))return De(!ne(ht,e,t),e[t])};Ot=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(y(n)&&d(n,o,r),r.global)i?e[t]=n:F(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:B(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var Ft,$t,Mt,Tt,xt,Pt={},Rt={},It=Math.ceil,Nt=Math.floor;Rt=Math.trunc||function(e){var t=+e;return(t>0?Nt:It)(t)},xt=function(e){var t=+e;return t!=t||0===t?0:Rt(t)};var Ht=Math.max,qt=Math.min;Tt=function(e,t){var n=xt(e);return n<0?Ht(n+t,0):qt(n,t)};var At,Ct,Dt=Math.min;Ct=function(e){return e>0?Dt(xt(e),9007199254740991):0},At=function(e){return Ct(e.length)};var Wt=function(e){return function(t,n,r){var i,o=yt(t),a=At(o),s=Tt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},zt={includes:Wt(!0),indexOf:Wt(!1)}.indexOf,Bt=p([].push);Mt=function(e,t){var n,r=yt(e),i=0,o=[];for(n in r)!S(Be,n)&&S(r,n)&&Bt(o,n);for(;t.length>i;)S(r,n=t[i++])&&(~zt(o,n)||Bt(o,n));return o};var Ut,Gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");$t=Object.getOwnPropertyNames||function(e){return Mt(e,Gt)},Ut=Object.getOwnPropertySymbols;var Jt=p([].concat);Pt=ie("Reflect","ownKeys")||function(e){var t=$t(K(e));return Ut?Jt(t,Ut(e)):t},Ft=function(e,t,n){for(var r=Pt(t),i=B,o=pt,a=0;a<r.length;a++){var s=r[a];S(e,s)||n&&S(n,s)||i(e,s,o(t,s))}};var Yt={},Vt=/#|\.prototype\./,Qt=function(e,t){var n=Xt[Kt(e)];return n==en||n!=Zt&&(y(t)?u(t):!!t)},Kt=Qt.normalize=function(e){return String(e).replace(Vt,".").toLowerCase()},Xt=Qt.data={},Zt=Qt.NATIVE="N",en=Qt.POLYFILL="P";Yt=Qt,ft=function(e,t){var n,r,i,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[c]||F(c,{}):(a[c]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(s=jt(n,r))&&s.value:n[r],!Yt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Ft(o,i)}(e.sham||i&&i.sham)&&J(o,"sham",!0),Ot(n,r,o,e)}};var tn,nn={},rn=Function.prototype,on=rn.apply,an=rn.call;nn="object"==typeof Reflect&&Reflect.apply||(f?an.bind(on):function(){return an.apply(on,arguments)});var sn,cn,un=(cn=function(e){if("Function"===bt(e))return p(e)})(cn.bind);sn=function(e,t){return be(e),void 0===t?e:f?un(e,t):function(){return e.apply(t,arguments)}};var ln={};ln=ie("document","documentElement");var dn={};dn=p([].slice);var fn,pn=TypeError;fn=function(e,t){if(e<t)throw pn("Not enough arguments");return e};var hn;hn=/(?:ipad|iphone|ipod).*applewebkit/i.test(le);var vn,mn,gn,yn,bn=mn={};function _n(){throw new Error("setTimeout has not been defined")}function wn(){throw new Error("clearTimeout has not been defined")}function kn(e){if(gn===setTimeout)return setTimeout(e,0);if((gn===_n||!gn)&&setTimeout)return gn=setTimeout,setTimeout(e,0);try{return gn(e,0)}catch(t){try{return gn.call(null,e,0)}catch(t){return gn.call(this,e,0)}}}!function(){try{gn="function"==typeof setTimeout?setTimeout:_n}catch(e){gn=_n}try{yn="function"==typeof clearTimeout?clearTimeout:wn}catch(e){yn=wn}}();var En,Sn=[],On=!1,Ln=-1;function jn(){On&&En&&(On=!1,En.length?Sn=En.concat(Sn):Ln=-1,Sn.length&&Fn())}function Fn(){if(!On){var e=kn(jn);On=!0;for(var t=Sn.length;t;){for(En=Sn,Sn=[];++Ln<t;)En&&En[Ln].run();Ln=-1,t=Sn.length}En=null,On=!1,function(e){if(yn===clearTimeout)return clearTimeout(e);if((yn===wn||!yn)&&clearTimeout)return yn=clearTimeout,clearTimeout(e);try{return yn(e)}catch(t){try{return yn.call(null,e)}catch(t){return yn.call(this,e)}}}(e)}}function $n(e,t){this.fun=e,this.array=t}function Mn(){}bn.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Sn.push(new $n(e,t)),1!==Sn.length||On||kn(Fn)},$n.prototype.run=function(){this.fun.apply(null,this.array)},bn.title="browser",bn.browser=!0,bn.env={},bn.argv=[],bn.version="",bn.versions={},bn.on=Mn,bn.addListener=Mn,bn.once=Mn,bn.off=Mn,bn.removeListener=Mn,bn.removeAllListeners=Mn,bn.emit=Mn,bn.prependListener=Mn,bn.prependOnceListener=Mn,bn.listeners=function(e){return[]},bn.binding=function(e){throw new Error("process.binding is not supported")},bn.cwd=function(){return"/"},bn.chdir=function(e){throw new Error("process.chdir is not supported")},bn.umask=function(){return 0},vn=void 0!==mn&&"process"==bt(mn);var Tn,xn,Pn,Rn,In=a.setImmediate,Nn=a.clearImmediate,Hn=a.process,qn=a.Dispatch,An=a.Function,Cn=a.MessageChannel,Dn=a.String,Wn=0,zn={},Bn="onreadystatechange";u((function(){Tn=a.location}));var Un=function(e){if(S(zn,e)){var t=zn[e];delete zn[e],t()}},Gn=function(e){return function(){Un(e)}},Jn=function(e){Un(e.data)},Yn=function(e){a.postMessage(Dn(e),Tn.protocol+"//"+Tn.host)};In&&Nn||(In=function(e){fn(arguments.length,1);var t=y(e)?e:An(e),n=dn(arguments,1);return zn[++Wn]=function(){nn(t,void 0,n)},xn(Wn),Wn},Nn=function(e){delete zn[e]},vn?xn=function(e){Hn.nextTick(Gn(e))}:qn&&qn.now?xn=function(e){qn.now(Gn(e))}:Cn&&!hn?(Rn=(Pn=new Cn).port2,Pn.port1.onmessage=Jn,xn=sn(Rn.postMessage,Rn)):a.addEventListener&&y(a.postMessage)&&!a.importScripts&&Tn&&"file:"!==Tn.protocol&&!u(Yn)?(xn=Yn,a.addEventListener("message",Jn,!1)):xn=Bn in G("script")?function(e){ln.appendChild(G("script"))[Bn]=function(){ln.removeChild(this),Un(e)}}:function(e){setTimeout(Gn(e),0)});var Vn=(tn={set:In,clear:Nn}).clear;ft({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Vn},{clearImmediate:Vn});var Qn,Kn,Xn=tn.set;Kn="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var Zn,er=a.Function,tr=/MSIE .\./.test(le)||Kn&&((Zn=a.Bun.version.split(".")).length<3||0==Zn[0]&&(Zn[1]<3||3==Zn[1]&&0==Zn[2]));Qn=function(e,t){var n=t?2:1;return tr?function(r,i){var o=fn(arguments.length,1)>n,a=y(r)?r:er(r),s=o?dn(arguments,n):[],c=o?function(){nn(a,this,s)}:a;return t?e(c,i):e(c)}:e};var nr=a.setImmediate?Qn(Xn,!1):Xn;ft({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==nr},{setImmediate:nr});var rr=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),s=new M(r||[]);return i(a,"_invoke",{value:L(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",v="completed",m={};function g(){}function y(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(T([])));k&&k!==n&&r.call(k,a)&&(_=k);var E=b.prototype=g.prototype=Object.create(_);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(i,o,a,s){var c=d(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function L(e,t,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return x()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?v:p,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=d(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function T(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:x}}function x(){return{value:t,done:!0}}return y.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(O.prototype),u(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new O(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=T,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),$(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}({});try{regeneratorRuntime=rr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rr:Function("r","regeneratorRuntime = r")(rr)}const ir="https://forkify-api.herokuapp.com/api/v2/recipes/",or=10,ar="db5b2ec8-9cdb-41ad-8035-99408235b4e6",sr=2.5;async function cr(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=or,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message}`);return o}catch(e){throw e}var n}const ur={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]};function lr(e){const{recipe:t}=e.data;return{cookingTime:t.cooking_time,id:t.id,image:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,sourceUrl:t.source_url,title:t.title,...t.key&&{key:t.key}}}function dr(e){ur.search.page=e;const t=(e-1)*ur.search.resultsPerPage,n=e*ur.search.resultsPerPage;return ur.search.results.slice(t,n)}function fr(e){ur.bookmarks.push(e),e.id===ur.recipe.id&&(ur.recipe.isBookmark=!0),pr()}function pr(){localStorage.setItem("bookmarks",JSON.stringify(ur.bookmarks))}!function(){const e=localStorage.getItem("bookmarks");e&&(ur.bookmarks=JSON.parse(e))}();var hr,vr,mr,gr;hr=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class yr{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}renderSpinner(){const e=`\n    <div class="spinner">\n      <svg>\n        <use href="${n(hr)}#icon-loader"></use>\n      </svg>\n    </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${n(hr)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSuccessMessage(e=this._successMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${n(hr)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(mr=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},gr=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(mr(this.denominator)){var e=gr(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}mr(this.numerator)&&(e=gr(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},vr=Fraction;var br=new class extends yr{_parentElement=document.querySelector(".recipe");_errorMessage="We couldn't find this recipe! Please, try another one.";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const r=Number(n.dataset.updateTo);r<=0||e(r)}))}addHandlerBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n    <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n  \n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(hr)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(hr)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">${1===this._data.servings?"serving":"servings"}</span>\n  \n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings"data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${n(hr)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${n(hr)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(hr)}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${n(hr)}#icon-bookmark${this._data.isBookmark?"-fill":""}"></use>\n            </svg>\n          </button>\n          </div>\n  \n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>          \n          <ul class="recipe__ingredient-list">\n            ${this._data.ingredients.map((e=>this.#e(e))).join("")}\n          </ul>\n        </div>\n  \n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.source}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(hr)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n    `}#e(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${n(hr)}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${e.quantity?new vr(e.quantity):""}</div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${e.unit}</span>\n          ${e.description}\n        </div>\n      </li>\n    `}};var _r=new class extends yr{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this.#t(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}#t(){this._parentElement.querySelector(".search__field").value=""}};var wr=new class extends yr{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n        <li class="preview">\n          <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n            <figure class="preview__fig">\n              <img src="${this._data.image}" alt="${this._data.title}" />\n            </figure>\n            <div class="preview__data">\n              <h4 class="preview__title">${this._data.title}</h4>\n              <p class="preview__publisher">${this._data.publisher}</p>\n              <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n                <svg>\n                  <use href="${n(hr)}#icon-user"></use>\n                </svg>\n              </div>\n            </div>\n          </a>\n        </li>\n    `}};var kr=new class extends yr{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_generateMarkup(){return this._data.map((e=>wr.render(e,!1))).join("")}};var Er=new class extends yr{_parentElement=document.querySelector(".pagination");_generateMarkup(){const e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page,r=`\n      <button class="btn--inline pagination__btn--next" data-goto="${t+1}">\n      <span>Page ${t+1}</span>\n      <svg class="search__icon">\n        <use href="${n(hr)}#icon-arrow-right"></use>\n      </svg>\n      </button>\n    `,i=`\n      <button class="btn--inline pagination__btn--prev" data-goto="${t-1}">\n      <svg class="search__icon">\n        <use href="${n(hr)}#icon-arrow-left"></use>\n      </svg>\n      <span>Page ${t-1}</span>\n      </button>\n    `;return 1===t&&e>1?r:t===e&&e>1?i:t<e?`${i}${r}`:""}addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=Number(n.dataset.goto);e(r)}))}};var Sr=new class extends yr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it!";addHanlderRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>wr.render(e,!1))).join("")}};var Or=new class extends yr{_parentElement=document.querySelector(".upload");_successMessage="Recipe is added successfully! You can find it in the bookmarks.";#n=document.querySelector(".nav__btn--add-recipe");#r=document.querySelector(".btn--close-modal");#i=document.querySelector(".overlay");#o=document.querySelector(".add-recipe-window");constructor(){super(),this.addHandlerHideModal(),this.addHandlerShowModal()}#a(){this.#i.classList.toggle("hidden"),this.#o.classList.toggle("hidden")}closeRecipeWindow(){this.#i.classList.add("hidden"),this.#o.classList.add("hidden")}addHandlerShowModal(){this.#n.addEventListener("click",this.#a.bind(this))}addHandlerHideModal(){this.#r.addEventListener("click",this.#a.bind(this)),this.#i.addEventListener("click",this.#a.bind(this))}addHandlerUploadRecipe(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}};async function Lr(){try{const e=window.location.hash.slice(1);if(!e)return;kr.update(dr(ur.search.page)),Sr.update(ur.bookmarks),br.renderSpinner(),await async function(e){try{const t=await cr(`${ir}${e}?key=${ar}`);ur.recipe=lr(t),ur.bookmarks.some((e=>e.id===ur.recipe.id))?ur.recipe.isBookmark=!0:ur.recipe.isBookmark=!1}catch(e){throw e}}(e),br.render(ur.recipe)}catch(e){console.error(`${e}`),br.renderError()}}async function jr(){try{const e=_r.getQuery();if(!e)return;kr.renderSpinner(),await async function(e){try{const t=await cr(`${ir}?search=${e}&key=${ar}`);ur.search.results=t.data.recipes.map((e=>({id:e.id,image:e.image_url,title:e.title,publisher:e.publisher,...e.key&&{key:e.key}})))}catch(e){throw e}}(e),kr.render(dr(1)),Er.render(ur.search)}catch(e){console.error(`${e}`),kr.renderError()}}function Fr(e){kr.render(dr(e)),Er.render(ur.search)}function $r(e){!function(e){ur.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/ur.recipe.servings})),ur.recipe.servings=e}(e),br.update(ur.recipe)}function Mr(){ur.recipe.isBookmark?function(e){const t=ur.bookmarks.findIndex((t=>t.id===e));ur.bookmarks.splice(t,1),e===ur.recipe.id&&(ur.recipe.isBookmark=!1),pr()}(ur.recipe.id):fr(ur.recipe),br.update(ur.recipe),Sr.render(ur.bookmarks)}function Tr(){Sr.render(ur.bookmarks)}async function xr(e){try{await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!=t.length)throw new Error("Wrong input format! Please, use correct format.");const[n,r,i]=t;return{quantity:n?Number(n):null,unit:r,description:i}})),n={cooking_time:Number(e.cookingTime),image_url:e.image,ingredients:t,publisher:e.publisher,servings:Number(e.servings),source_url:e.sourceUrl,title:e.title},r=await cr(`${ir}?key=${ar}`,n);ur.recipe=lr(r),fr(ur.recipe)}catch(e){throw e}}(e),br.render(ur.recipe),Sr.render(ur.bookmarks),window.history.pushState(null,"",`#${ur.recipe.id}`),Sr.update(ur.bookmarks),Or.renderSuccessMessage(),setTimeout((()=>{Or.closeRecipeWindow()}),1e3*sr)}catch(e){console.error(`${e}`),Or.renderError(e.message)}}Sr.addHanlderRender(Tr),br.addHandlerRender(Lr),br.addHandlerUpdateServings($r),br.addHandlerBookmark(Mr),_r.addHandlerSearch(jr),Er.addHandlerClick(Fr),Or.addHandlerUploadRecipe(xr);
//# sourceMappingURL=index.4c8dbb41.js.map
