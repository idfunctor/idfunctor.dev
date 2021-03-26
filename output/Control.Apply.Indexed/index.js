// Generated by purs version 0.14.0
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor_Indexed = require("../Data.Functor.Indexed/index.js");
var IxApply = function (IxFunctor0, iapply) {
    this.IxFunctor0 = IxFunctor0;
    this.iapply = iapply;
};
var iapply = function (dict) {
    return dict.iapply;
};
var iapplyFirst = function (dictIxApply) {
    return function (a) {
        return function (b) {
            return iapply(dictIxApply)(Data_Functor_Indexed.imap(dictIxApply.IxFunctor0())(Data_Function["const"])(a))(b);
        };
    };
};
var iapplySecond = function (dictIxApply) {
    return function (a) {
        return function (b) {
            return iapply(dictIxApply)(Data_Functor_Indexed.imap(dictIxApply.IxFunctor0())(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn)))(a))(b);
        };
    };
};
module.exports = {
    IxApply: IxApply,
    iapply: iapply,
    iapplyFirst: iapplyFirst,
    iapplySecond: iapplySecond,
    IxFunctor: Data_Functor_Indexed.IxFunctor,
    imap: Data_Functor_Indexed.imap,
    ivoid: Data_Functor_Indexed.ivoid,
    ivoidLeft: Data_Functor_Indexed.ivoidLeft,
    ivoidRight: Data_Functor_Indexed.ivoidRight
};