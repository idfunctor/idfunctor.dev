// Generated by purs version 0.14.0
"use strict";
var Components_Page = require("../Components.Page/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var React_Basic = require("../React.Basic/index.js");
var React_Basic_DOM = require("../React.Basic.DOM/index.js");
var React_Basic_DOM_Generated = require("../React.Basic.DOM.Generated/index.js");
var React_Basic_Hooks_Internal = require("../React.Basic.Hooks.Internal/index.js");
var Type_Equality = require("../Type.Equality/index.js");
var mkAbout = (function () {
    var render = React_Basic.fragment([ React_Basic_DOM_Generated.div()({
        className: "max-w-5xl flex mx-auto my-12",
        children: [ React_Basic_DOM_Generated.div()({
            className: "mr-1 text-gray-100 w-3/5 shadow-2xl bg-gray-800 p-12 text-left",
            children: [ React_Basic_DOM_Generated.h1()({
                className: "text-3xl font-bold",
                children: [ React_Basic_DOM.text("About") ]
            }), React_Basic_DOM_Generated.div()({
                className: "w-4/5 pt-3 border-b-2 border-teal-500"
            }), React_Basic_DOM_Generated.h2()({
                className: "pt-4 font-bold",
                children: [ React_Basic_DOM.text("PureScript"), React_Basic_DOM_Generated.span()({
                    className: "ml-1 text-teal-500 font-extrabold",
                    children: [ React_Basic_DOM.text("::") ]
                }) ]
            }), React_Basic_DOM_Generated.p()({
                className: "pt-1 text-sm",
                children: [ React_Basic_DOM.text("A small strongly typed programming language with expressive types that compiles to JavaScript, written in and inspired by Haskell.") ]
            }), React_Basic_DOM_Generated.h2()({
                className: "pt-4 font-bold",
                children: [ React_Basic_DOM.text("Next.js"), React_Basic_DOM_Generated.span()({
                    className: "ml-1 text-teal-500 font-extrabold",
                    children: [ React_Basic_DOM.text("::") ]
                }) ]
            }), React_Basic_DOM_Generated.p()({
                className: "pt-1 text-sm",
                children: [ React_Basic_DOM.text("Production grade React applications that scale. The world's leading companies use Next.js to build server-rendered applications, static websites, and more.") ]
            }) ]
        }), React_Basic_DOM_Generated.div()({
            className: "w-2/5",
            children: [ React_Basic_DOM_Generated.img()({
                className: "shadow-2xl",
                src: "https://source.unsplash.com/rS1GogPLVHk"
            }) ]
        }) ]
    }) ]);
    return Components_Page.component("About")(function (v) {
        return function (v1) {
            return Control_Applicative.pure(React_Basic_Hooks_Internal.applicativeRender(Type_Equality.refl))(render);
        };
    });
})();
module.exports = {
    mkAbout: mkAbout
};