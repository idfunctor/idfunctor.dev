_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"5nTH":function(e,t,n){"use strict";var r=n("Dpao"),o=n("6ost"),i=n("Kxr+"),a=n("hXvb"),c=n("ZEOE"),f=n("7p2L"),l=n("U7a5"),s=function(){var e=a.nav()({className:"text-gray-800 w-full flex items-center justify-between py-3 px-4",children:[a.div()({className:"font-extrabold text-xl",children:[i.text("Next.js with Purescript Example")]}),a.ul()({className:"flex-grow flex justify-end items-center",children:[a.li()({children:[o.link()({href:"/",passHref:!0,children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[i.text("Home")]})})]}),a.li()({children:[o.link()({href:"/about",passHref:!0,children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[i.text("About")]})})]}),a.li()({children:[o.link()({href:"/profile",passHref:!0,children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[i.text("Profile")]})})]})]})]});return c.component("Navigation")((function(t){return r.pure(f.applicativeRender(l.refl))(e)}))}();e.exports={mkNavigation:s}},"6ost":function(e,t,n){"use strict";var r=n("pvjL"),o=n("ChJ6");e.exports={link:function(e){return function(e){return o.element(r._link)(e)}},_link:r._link}},"97Is":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n("uNx/")}])},QpJo:function(e,t,n){"use strict";var r=n("KLFj"),o=n("GS/t"),i=n("yzgN"),a=n("vwlR"),c=n("gwNE"),f=n("ZEOE");e.exports={component:function(e){return function(t){return r.bind(i.bindReaderT(a.bindEffect))(o.ask(i.monadAskReaderT(a.monadEffect)))((function(n){return c.liftEffect(i.monadEffectReader(c.monadEffectEffect))(f.component(e)((function(e){return t(n)(e)})))}))}}}},YFqc:function(e,t,n){e.exports=n("cTJO")},bc97:function(e,t,n){"use strict";var r=n("QpJo"),o=n("5nTH"),i=n("Dpao"),a=n("KLFj"),c=n("yzgN"),f=n("9rbA"),l=n("vwlR"),s=n("gwNE"),u=n("ChJ6"),d=n("Kxr+"),p=n("hXvb"),h=n("7p2L"),v=n("U7a5"),m=a.bind(c.bindReaderT(l.bindEffect))(s.liftEffect(c.monadEffectReader(s.monadEffectEffect))(o.mkNavigation))((function(e){return r.component("NotFound")((function(t){return function(t){return i.pure(h.applicativeRender(v.refl))((n={navigation:e},u.fragment([n.navigation(f.unit),p.div()({className:"max-w-5xl flex mx-auto my-12",children:[p.div()({className:"mr-1 text-gray-100 w-3/5 shadow-2xl bg-gray-800 p-12 text-left",children:[p.h1()({className:"text-3xl font-bold",children:[d.text("404: Not found")]}),p.div()({className:"w-4/5 pt-3 border-b-2 border-teal-500"}),p.p()({className:"pt-4 text-sm",children:[d.text("Looks like you took a wrong turn somewhere.")]})]}),p.div()({className:"w-2/5",children:[p.img()({className:"shadow-2xl",src:"https://source.unsplash.com/O35rT6OytRo"})]})]})])));var n}}))}));e.exports={mkNotFound:m}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i,a=o(n("FdF9")),c=n("elyg"),f=n("nOHt"),l=new Map,s=window.IntersectionObserver,u={};var d=function(e,t){var n=i||(s?i=new s((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),u[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=a.default.useState(),o=r(n,2),i=o[0],l=o[1],h=(0,f.useRouter)(),v=h&&h.pathname||"/",m=a.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href);return{href:t,as:e.as?(0,c.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),x=m.href,b=m.as;a.default.useEffect((function(){if(t&&s&&i&&i.tagName&&(0,c.isLocalURL)(x)&&!u[x+"%"+b])return d(i,(function(){p(h,x,b)}))}),[t,i,x,b,h]);var w=e.children,N=e.replace,E=e.shallow,g=e.scroll;"string"===typeof w&&(w=a.default.createElement("a",null,w));var y=a.Children.only(w),k={ref:function(e){e&&l(e),y&&"object"===typeof y&&y.ref&&("function"===typeof y.ref?y.ref(e):"object"===typeof y.ref&&(y.ref.current=e))},onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,x,b,N,E,g)}};return t&&(k.onMouseEnter=function(e){(0,c.isLocalURL)(x)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),p(h,x,b,{priority:!0}))}),(e.passHref||"a"===y.type&&!("href"in y.props))&&(k.href=(0,c.addBasePath)(b)),a.default.cloneElement(y,k)};t.default=h},pvjL:function(e,t,n){t._link=n("YFqc").default},"uNx/":function(e,t,n){"use strict";n.r(t);var r=n("bc97");t.default=r.mkNotFound}},[["97Is",0,2,1,3]]]);