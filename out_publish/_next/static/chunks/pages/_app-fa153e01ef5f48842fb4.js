_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,n,t){"use strict";n.__esModule=!0,n.isInAmpMode=a,n.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))};var r,o=(r=t("FdF9"))&&r.__esModule?r:{default:r},u=t("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,r=e.hybrid,o=void 0!==r&&r,u=e.hasQuery,a=void 0!==u&&u;return t||o&&a}},0:function(e,n,t){t("GcxT"),e.exports=t("nOHt")},"0GjE":function(e,n,t){"use strict";var r=t("9YhA"),o=t("ChJ6");e.exports={head:function(e){return function(e){return o.element(r._head)(e)}},_head:r._head}},"1TCz":function(e,n,t){"use strict";t.r(n);t("vJJZ");var r=t("ByL4");n.default=r.mkApp},"3hmM":function(e,n,t){"use strict";n.mkEffectFn1=function(e){return function(n){return e(n)()}},n.runEffectFn1=function(e){return function(n){return function(){return e(n)}}},n.runEffectFn2=function(e){return function(n){return function(t){return function(){return e(n,t)}}}},n.runEffectFn3=function(e){return function(n){return function(t){return function(r){return function(){return e(n,t,r)}}}}}},"5nTH":function(e,n,t){"use strict";var r=t("6ost"),o=t("Kxr+"),u=t("hXvb"),a=u.nav()({className:"text-gray-800 w-full flex items-center justify-between py-3 px-4",children:[u.div()({className:"font-extrabold text-xl",children:[o.text("Next.js with Purescript Example")]}),u.ul()({className:"flex-grow flex justify-end items-center",children:[u.li()({children:[r.link()({href:"/",passHref:!0,children:u.a()({className:"inline-block py-2 px-4 font-bold",children:[o.text("Home")]})})]}),u.li()({children:[r.link()({href:"/about",passHref:!0,children:u.a()({className:"inline-block py-2 px-4 font-bold",children:[o.text("About")]})})]}),u.li()({children:[r.link()({href:"/profile",passHref:!0,children:u.a()({className:"inline-block py-2 px-4 font-bold",children:[o.text("Profile")]})})]})]})]});e.exports={navigation:a}},"6ost":function(e,n,t){"use strict";var r=t("pvjL"),o=t("ChJ6");e.exports={link:function(e){return function(e){return o.element(r._link)(e)}},_link:r._link}},"8Kt/":function(e,n,t){"use strict";t("lSNA");n.__esModule=!0,n.defaultHead=s,n.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=f();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(t,o,u):t[o]=e[o]}t.default=e,n&&n.set(e,t);return t}(t("FdF9")),u=(r=t("Xuae"))&&r.__esModule?r:{default:r},a=t("lwAK"),i=t("FYa8"),c=t("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[o.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function l(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===o.default.Fragment?e.concat(o.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,n){return e.reduce((function(e,n){var t=o.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(l,[]).reverse().concat(s(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?u=!1:e.add(a)}switch(o.type){case"title":case"base":n.has(o.type)?u=!1:n.add(o.type);break;case"meta":for(var i=0,c=p.length;i<c;i++){var f=p[i];if(o.props.hasOwnProperty(f))if("charSet"===f)t.has(f)?u=!1:t.add(f);else{var s=o.props[f],l=r[f]||new Set;l.has(s)?u=!1:(l.add(s),r[f]=l)}}}return u}}()).reverse().map((function(e,n){var t=e.key||n;return o.default.cloneElement(e,{key:t})}))}function h(e){var n=e.children,t=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(u.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(t)},n)}h.rewind=function(){};var v=h;n.default=v},"9YhA":function(e,n,t){n._head=t("8Kt/").default},"9iQ7":function(e,n,t){"use strict";var r=t("Dpao"),o=t("fV6W"),u=t("KLFj"),a=t("yI2v"),i=t("V8Ld"),c=t("0cS1"),f=function(){function e(){}return e.value=new e,e}(),s=function(){function e(e){this.value0=e}return e.create=function(n){return new e(n)},e}(),l=function(e){return function(n){return function(t){if(t instanceof f)return e;if(t instanceof s)return n(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): "+[e.constructor.name,n.constructor.name,t.constructor.name])}}},p=new c.Functor((function(e){return function(n){return n instanceof s?new s(e(n.value0)):f.value}})),d=new o.Apply((function(e){return p}),(function(e){return function(n){if(e instanceof s)return c.map(p)(e.value0)(n);if(e instanceof f)return f.value;throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): "+[e.constructor.name,n.constructor.name])}})),h=new u.Bind((function(e){return d}),(function(e){return function(n){if(e instanceof s)return n(e.value0);if(e instanceof f)return f.value;throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): "+[e.constructor.name,n.constructor.name])}})),v=new r.Applicative((function(e){return d}),s.create);e.exports={Nothing:f,Just:s,maybe:l,fromMaybe:function(e){return l(e)(a.identity(a.categoryFn))},functorMaybe:p,applyMaybe:d,applicativeMaybe:v,bindMaybe:h,eqMaybe:function(e){return new i.Eq((function(n){return function(t){return n instanceof f&&t instanceof f||n instanceof s&&t instanceof s&&i.eq(e)(n.value0)(t.value0)}}))}}},BnGj:function(e,n,t){"use strict";var r=t("3hmM");e.exports={mkEffectFn1:r.mkEffectFn1,runEffectFn1:r.runEffectFn1,runEffectFn2:r.runEffectFn2,runEffectFn3:r.runEffectFn3}},Bnag:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ByL4:function(e,n,t){"use strict";var r=t("iOKe"),o=t("5nTH"),u=t("o9Mx"),a=t("yzgN"),i=t("9rbA"),c=t("0GjE"),f=t("ChJ6"),s=t("Kxr+"),l=t("hXvb");e.exports={mkApp:function(e){var n=u.mkSettingsProvider(),t=r.mkLoading(),p=a.runReaderT(e.Component)({settings:n.value0})();return n.value1(f.fragment([c.head()({children:[l.title()({children:[s.text("Next.js with Purescript Example")]})]}),t(i.unit),o.navigation,p(e.pageProps)]))}}},EbDI:function(e,n){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])},Ijbi:function(e,n,t){var r=t("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},NN70:function(e,n,t){"use strict";var r=t("RUnn"),o=t("0cS1"),u=t("vwlR"),a=t("BnGj"),i=function(e){return function(n){return o.voidLeft(u.functorEffect)(r._on(e)(n))(r._off(e)(n))}},c=function(){var e=i("routeChangeStart");return function(n){return e(a.mkEffectFn1(n))}}(),f=function(){var e=i("routeChangeComplete");return function(n){return e(a.mkEffectFn1(n))}}(),s=function(){var e=i("routeChangeError");return function(n){return e(a.mkEffectFn1(n))}}();e.exports={event:i,onRouteChangeStart:c,routeChangeComplete:f,routeChangeError:s,_on:r._on,_off:r._off}},RIqP:function(e,n,t){var r=t("Ijbi"),o=t("EbDI"),u=t("ZhPi"),a=t("Bnag");e.exports=function(e){return r(e)||o(e)||u(e)||a()}},RUnn:function(e,n,t){var r=t("nOHt").default;n._on=function(e){return function(n){return function(){r.events.on(e,n)}}},n._off=function(e){return function(n){return function(){r.events.off(e,n)}}}},Xuae:function(e,n,t){"use strict";var r=t("RIqP"),o=t("lwsE"),u=t("W8MJ"),a=(t("PJYZ"),t("7W2i")),i=t("a1gu"),c=t("Nsbk");function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=c(e);if(n){var o=c(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)}}n.__esModule=!0,n.default=void 0;var s=t("FdF9"),l=function(e){a(t,e);var n=f(t);function t(e){var u;return o(this,t),(u=n.call(this,e))._hasHeadManager=void 0,u.emitChange=function(){u._hasHeadManager&&u.props.headManager.updateHead(u.props.reduceComponentsToState(r(u.props.headManager.mountedInstances),u.props))},u._hasHeadManager=u.props.headManager&&u.props.headManager.mountedInstances,u}return u(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(s.Component);n.default=l},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var u,a=o(t("FdF9")),i=t("elyg"),c=t("nOHt"),f=new Map,s=window.IntersectionObserver,l={};var p=function(e,n){var t=u||(s?u=new s((function(e){e.forEach((function(e){if(f.has(e.target)){var n=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),f.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),f.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}f.delete(e)}):function(){}};function d(e,n,t,r){(0,i.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),l[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=a.default.useState(),o=r(t,2),u=o[0],f=o[1],h=(0,c.useRouter)(),v=h&&h.pathname||"/",m=a.default.useMemo((function(){var n=(0,i.resolveHref)(v,e.href,!0),t=r(n,2),o=t[0],u=t[1];return{href:o,as:e.as?(0,i.resolveHref)(v,e.as):u||o}}),[v,e.href,e.as]),y=m.href,g=m.as;a.default.useEffect((function(){if(n&&s&&u&&u.tagName&&(0,i.isLocalURL)(y)&&!l[y+"%"+g])return p(u,(function(){d(h,y,g)}))}),[n,u,y,g,h]);var w=e.children,x=e.replace,b=e.shallow,E=e.scroll;"string"===typeof w&&(w=a.default.createElement("a",null,w));var _=a.Children.only(w),C={ref:function(e){e&&f(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,u,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:u}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,g,x,b,E)}};return n&&(C.onMouseEnter=function(e){(0,i.isLocalURL)(y)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),d(h,y,g,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(C.href=(0,i.addBasePath)((0,i.addLocale)(g,h&&h.locale,h&&h.defaultLocale))),a.default.cloneElement(_,C)};n.default=h},d92K:function(e,n,t){"use strict";var r=t("7Raw"),o=t("ChJ6"),u=t("RnDS"),a=r.unsafePerformEffect(u.unsafeCreateDOMComponent("title")),i=function(e){return a},c=r.unsafePerformEffect(u.unsafeCreateDOMComponent("svg")),f=function(e){return c},s=r.unsafePerformEffect(u.unsafeCreateDOMComponent("path")),l=function(e){return s},p=r.unsafePerformEffect(u.unsafeCreateDOMComponent("circle")),d=function(e){return p};e.exports={circle:function(e){return o.element(d())},"circle'":d,"_circle'":p,path:function(e){return o.element(l())},"path'":l,"_path'":s,svg:function(e){return o.element(f())},"svg'":f,"_svg'":c,title:function(e){return o.element(i())},"title'":i,"_title'":a}},iOKe:function(e,n,t){"use strict";var r=t("Dpao"),o=t("ru3E"),u=t("NN70"),a=t("ChJ6"),i=t("hXvb"),c=t("d92K"),f=t("ZEOE"),s=t("7p2L"),l=t("U7a5"),p=f.component("Loading")((function(e){return s.bind(s.ixBindRender)(f["useState'"](!1))((function(e){return s.discard(s.ixBindRender)(f.useEffectOnce(u.onRouteChangeStart((function(n){return e.value1(!0)}))))((function(n){return s.discard(s.ixBindRender)(f.useEffectOnce(u.routeChangeComplete((function(n){return e.value1(!1)}))))((function(n){return s.discard(s.ixBindRender)(f.useEffectOnce(u.routeChangeError((function(n){return e.value1(!1)}))))((function(n){return r.pure(s.applicativeRender(l.refl))(i.div()({className:"fixed top-0 left-0 right-0 pointer-events-none transition-opacity delay-500"+(e.value0?" opacity-1":" opacity-0"),children:[o.guard(a.monoidJSX)(e.value0)(c.svg()({className:"animate-spin mt-1 mx-auto h-5 w-5 text-teal-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.circle()({className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.path()({className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}))]}))}))}))}))}))}));e.exports={mkLoading:p}},lSNA:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},lwAK:function(e,n,t){"use strict";var r;n.__esModule=!0,n.AmpStateContext=void 0;var o=((r=t("FdF9"))&&r.__esModule?r:{default:r}).default.createContext({});n.AmpStateContext=o},o9Mx:function(e,n,t){"use strict";var r=t("Dpao"),o=t("9iQ7"),u=t("HOhb"),a=t("ChJ6"),i=t("ZEOE"),c=t("7p2L"),f=t("U7a5");e.exports={mkSettingsProvider:function(){var e=a.createContext(o.Nothing.value)(),n=i.component("SettingsProvider ")((function(n){return r.pure(c.applicativeRender(f.refl))(a.provider(e)(new o.Just("Hello from Settings"))(r.pure(r.applicativeArray)(n)))}))();return new u.Tuple(e,n)}}},pvjL:function(e,n,t){n._link=t("YFqc").default},vJJZ:function(e,n,t){}},[[0,0,1,2,3]]]);