(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"+kLR":function(n,t,r){"use strict";n.exports={IxApply:function(n,t){this.IxFunctor0=n,this.iapply=t}}},"/PS3":function(n,t,r){"use strict";t.concatString=function(n){return function(t){return n+t}}},"0cS1":function(n,t,r){"use strict";var e=r("tdxV"),u=r("WYav"),i=r("9rbA"),o=function(n){this.map=n},c=function(n){return n.map},f=new o(e.arrayMap);n.exports={Functor:o,map:c,mapFlipped:function(n){return function(t){return function(r){return c(n)(r)(t)}}},void:function(n){return c(n)(u.const(i.unit))},voidRight:function(n){return function(t){return c(n)(u.const(t))}},voidLeft:function(n){return function(t){return function(r){return c(n)(u.const(r))(t)}}},functorArray:f}},"0p0S":function(n,t,r){"use strict";var e=r("/PS3"),u=r("9rbA"),i=function(n){this.append=n},o=new i((function(n){return function(n){return u.unit}})),c=new i(e.concatString);n.exports={Semigroup:i,append:function(n){return n.append},semigroupString:c,semigroupUnit:o}},"6IMH":function(n,t,r){"use strict";var e=r("yI2v"),u=function(n){return n.bimap};n.exports={bimap:u,Bifunctor:function(n){this.bimap=n},rmap:function(n){return u(n)(e.identity(e.categoryFn))}}},"7Raw":function(n,t,r){"use strict";var e=r("wKtf");n.exports={unsafePerformEffect:e.unsafePerformEffect}},"7p2L":function(n,t,r){"use strict";var e=r("Dpao"),u=r("fV6W"),i=r("+kLR"),o=r("n/z8"),c=r("0cS1"),f=r("FOoK"),a=r("vwlR"),s=function(n){return n},p=new f.IxFunctor((function(n){return function(t){return c.map(a.functorEffect)(n)(t)}})),d=new i.IxApply((function(n){return p}),(function(n){return function(t){return u.apply(a.applyEffect)(n)(t)}})),l=new o.IxBind((function(n){return d}),(function(n){return function(t){return function(){var r=n();return t(r)()}}})),m=new c.Functor((function(n){return function(t){return c.map(a.functorEffect)(n)(t)}})),v=function(n){return new u.Apply((function(n){return m}),(function(n){return function(t){return u.apply(a.applyEffect)(n)(t)}}))};n.exports={unsafeHook:s,bind:function(n){return o.ibind(n)},discard:function(n){return o.ibind(n)},ixFunctorRender:p,ixApplyRender:d,ixBindRender:l,functorRender:m,applyRender:v,applicativeRender:function(n){return new e.Applicative((function(n){return v()}),(function(n){return e.pure(a.applicativeEffect)(n)}))}}},"8nM+":function(n,t,r){"use strict";n.exports={lift:function(n){return n.lift},MonadTrans:function(n){this.lift=n}}},"9rbA":function(n,t,r){"use strict";var e=r("j9uQ");n.exports={unit:e.unit}},BwkI:function(n,t,r){"use strict";var e=r("SkkX");n.exports={mkFn2:e.mkFn2,runFn2:e.runFn2}},ChJ6:function(n,t,r){"use strict";var e=r("JEnG"),u=r("ru3E"),i=new(r("0p0S").Semigroup)((function(n){return function(t){return e.fragment([n,t])}})),o=new u.Monoid((function(n){return i}),e.empty);n.exports={provider:function(n){return function(t){return function(r){return e.element(e.contextProvider(n))({value:t,children:r})}}},semigroupJSX:i,monoidJSX:o,empty:e.empty,fragment:e.fragment,element:e.element,createContext:e.createContext,contextProvider:e.contextProvider}},Dpao:function(n,t,r){"use strict";var e=r("fV6W"),u=function(n,t){this.Apply0=n,this.pure=t},i=function(n){return n.pure},o=new u((function(n){return e.applyArray}),(function(n){return[n]}));n.exports={Applicative:u,pure:i,liftA1:function(n){return function(t){return function(r){return e.apply(n.Apply0())(i(n)(t))(r)}}},applicativeArray:o}},FOoK:function(n,t,r){"use strict";n.exports={IxFunctor:function(n){this.imap=n}}},"GS/t":function(n,t,r){"use strict";n.exports={ask:function(n){return n.ask},MonadAsk:function(n,t){this.Monad0=n,this.ask=t}}},HOhb:function(n,t,r){"use strict";var e=r("6IMH"),u=function(){function n(n,t){this.value0=n,this.value1=t}return n.create=function(t){return function(r){return new n(t,r)}},n}(),i=new e.Bifunctor((function(n){return function(t){return function(r){return new u(n(r.value0),t(r.value1))}}}));n.exports={Tuple:u,bifunctorTuple:i}},HTct:function(n,t,r){"use strict";var e=r("xBP/");n.exports={unsafeCoerce:e.unsafeCoerce}},JEnG:function(n,t,r){"use strict";var e=r("FdF9"),u=e.createElement,i=e.Fragment;t.empty=null,t.element=function(n){return function(t){return Array.isArray(t.children)?u.apply(null,[n,t].concat(t.children)):u(n,t)}},t.fragment=function(n){return u.apply(null,[i,null].concat(n))},t.createContext=function(n){return function(){return e.createContext(n)}},t.contextProvider=function(n){return n.Provider}},KLFj:function(n,t,r){"use strict";var e=r("WYav"),u=function(n){this.discard=n},i=function(n){return n.bind},o=new u((function(n){return i(n)}));n.exports={Bind:function(n,t){this.Apply0=n,this.bind=t},bind:i,bindFlipped:function(n){return e.flip(i(n))},Discard:u,discard:function(n){return n.discard},discardUnit:o}},"Kxr+":function(n,t,r){"use strict";var e=r("HTct").unsafeCoerce;n.exports={text:e}},O0BR:function(n,t,r){"use strict";t.arrayApply=function(n){return function(t){for(var r=n.length,e=t.length,u=new Array(r*e),i=0,o=0;o<r;o++)for(var c=n[o],f=0;f<e;f++)u[i++]=c(t[f]);return u}}},RnDS:function(n,t,r){"use strict";var e=r("VNOW"),u=r("ChJ6"),i=r("HTct"),o=e.unsafeCreateDOMComponent_(u.element),c=i.unsafeCoerce;n.exports={css:c,unsafeCreateDOMComponent:o,unsafeCreateDOMComponent_:e.unsafeCreateDOMComponent_}},SkkX:function(n,t,r){"use strict";t.mkFn2=function(n){return function(t,r){return n(t)(r)}},t.runFn2=function(n){return function(t){return function(r){return n(t,r)}}}},U7a5:function(n,t,r){"use strict";var e=function(n,t){this.from=n,this.to=t},u=new e((function(n){return n}),(function(n){return n}));n.exports={TypeEquals:e,refl:u}},V8Ld:function(n,t,r){"use strict";var e=function(n){this.eq=n},u=new e(r("u7/I").eqStringImpl);n.exports={Eq:e,eq:function(n){return n.eq},eqString:u}},VNOW:function(n,t,r){"use strict";var e=r("FdF9");t.unsafeCreateDOMComponent_=function(n){return function(t){return function(){var r=e.forwardRef((function(r,e){return n(t)(function(n,t){var r=null;null!=n._data&&(r={_data:void 0},Object.entries(n._data).forEach((function(n){r["data-"+n[0]]=n[1]})));var e=null;return null!=n._aria&&(e={_aria:void 0},Object.entries(n._aria).forEach((function(n){e["aria-"+n[0]]=n[1]}))),Object.assign({ref:t},n,r,e)}(r,e))}));return r.displayName=t,r}}}},WYav:function(n,t,r){"use strict";n.exports={flip:function(n){return function(t){return function(r){return n(r)(t)}}},const:function(n){return function(t){return n}},apply:function(n){return function(t){return n(t)}}}},ZEOE:function(n,t,r){"use strict";var e=r("mO9F"),u=r("6IMH"),i=r("V8Ld"),o=r("WYav"),c=r("BwkI"),f=r("0cS1"),a=r("HOhb"),s=r("9rbA"),p=r("ChJ6"),d=r("7p2L"),l=r("HTct"),m=function(n){return d.unsafeHook((function(){return e.useState_(c.mkFn2(a.Tuple.create),n)}))},v=l.unsafeCoerce,y=l.unsafeCoerce,h=function(n){return function(n){return function(n){return function(n){return function(t){var r=v((function(n){return y(t(n))()}));return function(){return e.unsafeSetDisplayName(n,r)}}}}}};n.exports={component:function(n){return function(t){return function(){var r=h()()()(n)((function(n){return t(n.nested)}))(),e=p.element(r);return function(n){return e({nested:n})}}}},reactComponent:h,useState:m,"useState'":function(n){return f.mapFlipped(d.functorRender)(m(n))(u.rmap(a.bifunctorTuple)((function(n){return function(t){return n(o.const(t))}})))},useEffect:function(n){return function(t){return function(r){return d.unsafeHook((function(){return e.useEffect_(c.mkFn2(i.eq(n)),t,r)}))}}},useEffectOnce:function(n){return d.unsafeHook((function(){return e.useEffect_((function(n,t){return!0}),s.unit,n)}))},useContext:function(n){return d.unsafeHook((function(){return e.useContext_(n)}))}}},fV6W:function(n,t,r){"use strict";var e=r("O0BR"),u=r("yI2v"),i=r("WYav"),o=r("0cS1"),c=function(n,t){this.Functor0=n,this.apply=t},f=new c((function(n){return o.functorArray}),e.arrayApply),a=function(n){return n.apply};n.exports={Apply:c,apply:a,applySecond:function(n){return function(t){return function(r){return a(n)(o.map(n.Functor0())(i.const(u.identity(u.categoryFn)))(t))(r)}}},lift2:function(n){return function(t){return function(r){return function(e){return a(n)(o.map(n.Functor0())(t)(r))(e)}}}},applyArray:f}},gwNE:function(n,t,r){"use strict";var e=r("yI2v"),u=r("vwlR"),i=function(n,t){this.Monad0=n,this.liftEffect=t},o=new i((function(n){return u.monadEffect}),e.identity(e.categoryFn));n.exports={liftEffect:function(n){return n.liftEffect},MonadEffect:i,monadEffectEffect:o}},hXvb:function(n,t,r){"use strict";var e=r("7Raw"),u=r("ChJ6"),i=r("RnDS"),o=e.unsafePerformEffect(i.unsafeCreateDOMComponent("ul")),c=function(n){return o},f=e.unsafePerformEffect(i.unsafeCreateDOMComponent("title")),a=function(n){return f},s=e.unsafePerformEffect(i.unsafeCreateDOMComponent("span")),p=function(n){return s},d=e.unsafePerformEffect(i.unsafeCreateDOMComponent("p")),l=function(n){return d},m=e.unsafePerformEffect(i.unsafeCreateDOMComponent("nav")),v=function(n){return m},y=e.unsafePerformEffect(i.unsafeCreateDOMComponent("li")),h=function(n){return y},E=e.unsafePerformEffect(i.unsafeCreateDOMComponent("img")),w=function(n){return E},x=e.unsafePerformEffect(i.unsafeCreateDOMComponent("h2")),C=function(n){return x},S=e.unsafePerformEffect(i.unsafeCreateDOMComponent("h1")),F=function(n){return S},g=e.unsafePerformEffect(i.unsafeCreateDOMComponent("div")),A=function(n){return g},M=e.unsafePerformEffect(i.unsafeCreateDOMComponent("body")),b=function(n){return M},O=e.unsafePerformEffect(i.unsafeCreateDOMComponent("a")),_=function(n){return O};n.exports={a:function(n){return u.element(_())},"a'":_,"_a'":O,body:function(n){return u.element(b())},"body'":b,"_body'":M,div:function(n){return u.element(A())},"div'":A,"_div'":g,h1:function(n){return u.element(F())},"h1'":F,"_h1'":S,h2:function(n){return u.element(C())},"h2'":C,"_h2'":x,img:function(n){return u.element(w())},"img'":w,"_img'":E,li:function(n){return u.element(h())},"li'":h,"_li'":y,nav:function(n){return u.element(v())},"nav'":v,"_nav'":m,p:function(n){return u.element(l())},"p'":l,"_p'":d,span:function(n){return u.element(p())},"span'":p,"_span'":s,title:function(n){return u.element(a())},"title'":a,"_title'":f,ul:function(n){return u.element(c())},"ul'":c,"_ul'":o}},j9uQ:function(n,t,r){"use strict";t.unit={}},lyiK:function(n,t,r){"use strict";var e=r("Dpao"),u=r("KLFj");n.exports={Monad:function(n,t){this.Applicative0=n,this.Bind1=t},ap:function(n){return function(t){return function(r){return u.bind(n.Bind1())(t)((function(t){return u.bind(n.Bind1())(r)((function(r){return e.pure(n.Applicative0())(t(r))}))}))}}}}},mO9F:function(n,t,r){"use strict";var e=r("FdF9");t.useState_=function(n,t){var r=e.useState(t),u=r[0],i=r[1];return i.hasOwnProperty("$$reactBasicHooks$$cachedSetState")||(i.$$reactBasicHooks$$cachedSetState=function(n){return function(){return i(n)}}),n(u,i.$$reactBasicHooks$$cachedSetState)},t.useEffect_=function(n,t,r){var u=function(n,t){var r=e.useRef(t);return r.current===t||n(r.current,t)||(r.current=t),r.current}(n,t);e.useEffect(r,[u])},t.useContext_=e.useContext,t.unsafeSetDisplayName=function(n,t){return t.displayName=n,t.toString=function(){return n},t}},"n/z8":function(n,t,r){"use strict";n.exports={IxBind:function(n,t){this.IxApply0=n,this.ibind=t},ibind:function(n){return n.ibind}}},nhtI:function(n,t,r){"use strict";var e=function(n){this.compose=n},u=new e((function(n){return function(t){return function(r){return n(t(r))}}}));n.exports={compose:function(n){return n.compose},Semigroupoid:e,semigroupoidFn:u}},o7GA:function(n,t,r){"use strict";t.pureE=function(n){return function(){return n}},t.bindE=function(n){return function(t){return function(){return t(n())()}}}},ru3E:function(n,t,r){"use strict";var e=r("0p0S"),u=function(n,t){this.Semigroup0=n,this.mempty=t},i=new u((function(n){return e.semigroupUnit}),r("9rbA").unit),o=function(n){return n.mempty};n.exports={Monoid:u,mempty:o,guard:function(n){return function(t){return function(r){if(t)return r;if(!t)return o(n);throw new Error("Failed pattern match at Data.Monoid (line 73, column 1 - line 73, column 49): "+[t.constructor.name,r.constructor.name])}}},monoidUnit:i}},tdxV:function(n,t,r){"use strict";t.arrayMap=function(n){return function(t){for(var r=t.length,e=new Array(r),u=0;u<r;u++)e[u]=n(t[u]);return e}}},"u7/I":function(n,t,r){"use strict";t.eqStringImpl=function(n){return function(t){return n===t}}},vwlR:function(n,t,r){"use strict";var e=r("o7GA"),u=r("Dpao"),i=r("fV6W"),o=r("KLFj"),c=r("lyiK"),f=r("0cS1"),a=r("ru3E"),s=r("0p0S"),p=new c.Monad((function(n){return m}),(function(n){return d})),d=new o.Bind((function(n){return l}),e.bindE),l=new i.Apply((function(n){return v}),c.ap(p)),m=new u.Applicative((function(n){return l}),e.pureE),v=new f.Functor(u.liftA1(m)),y=function(n){return new s.Semigroup(i.lift2(l)(s.append(n)))};n.exports={functorEffect:v,applyEffect:l,applicativeEffect:m,bindEffect:d,monadEffect:p,semigroupEffect:y,monoidEffect:function(n){return new a.Monoid((function(t){return y(n.Semigroup0())}),e.pureE(a.mempty(n)))}}},wKtf:function(n,t,r){"use strict";t.unsafePerformEffect=function(n){return n()}},"xBP/":function(n,t,r){"use strict";t.unsafeCoerce=function(n){return n}},yI2v:function(n,t,r){"use strict";var e=r("nhtI"),u=function(n,t){this.Semigroupoid0=n,this.identity=t},i=new u((function(n){return e.semigroupoidFn}),(function(n){return n}));n.exports={Category:u,identity:function(n){return n.identity},categoryFn:i}},yzgN:function(n,t,r){"use strict";var e=r("Dpao"),u=r("fV6W"),i=r("KLFj"),o=r("lyiK"),c=r("GS/t"),f=r("8nM+"),a=r("WYav"),s=r("0cS1"),p=r("gwNE"),d=function(n){return n},l=new f.MonadTrans((function(n){return function(n){return a.const(n)}})),m=function(n){return function(t){return function(r){return n(t(r))}}},v=function(n){return new s.Functor(function(){var t=s.map(n);return function(n){return m(t(n))}}())},y=function(n){return new u.Apply((function(t){return v(n.Functor0())}),(function(t){return function(r){return function(e){return u.apply(n)(t(e))(r(e))}}}))},h=function(n){return new i.Bind((function(t){return y(n.Apply0())}),(function(t){return function(r){return function(e){return i.bind(n)(t(e))((function(n){return r(n)(e)}))}}}))},E=function(n){return new e.Applicative((function(t){return y(n.Apply0())}),function(){var t=e.pure(n);return function(n){return a.const(t(n))}}())},w=function(n){return new o.Monad((function(t){return E(n.Applicative0())}),(function(t){return h(n.Bind1())}))};n.exports={ReaderT:d,runReaderT:function(n){return n},mapReaderT:m,functorReaderT:v,applyReaderT:y,applicativeReaderT:E,bindReaderT:h,monadReaderT:w,monadTransReaderT:l,monadEffectReader:function(n){return new p.MonadEffect((function(t){return w(n.Monad0())}),function(){var t=f.lift(l)(n.Monad0()),r=p.liftEffect(n);return function(n){return t(r(n))}}())},monadAskReaderT:function(n){return new c.MonadAsk((function(t){return w(n)}),e.pure(n.Applicative0()))}}}}]);