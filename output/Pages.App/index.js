// Generated by purs version 0.14.0
"use strict";
var Components_Loading = require("../Components.Loading/index.js");
var Components_Navigation = require("../Components.Navigation/index.js");
var Context_Settings = require("../Context.Settings/index.js");
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Next_Head = require("../Next.Head/index.js");
var React_Basic = require("../React.Basic/index.js");
var React_Basic_DOM = require("../React.Basic.DOM/index.js");
var React_Basic_DOM_Generated = require("../React.Basic.DOM.Generated/index.js");
var mkApp = function (props) {
    var v = Context_Settings.mkSettingsProvider();
    var loading = Components_Loading.mkLoading();
    var component = Control_Monad_Reader_Trans.runReaderT(props.Component)({
        settings: v.value0
    })();
    return v.value1(React_Basic.fragment([ Next_Head.head()({
        children: [ React_Basic_DOM_Generated.title()({
            children: [ React_Basic_DOM.text("Next.js with Purescript Example") ]
        }) ]
    }), loading(Data_Unit.unit), Components_Navigation.navigation, component(props.pageProps) ]));
};
module.exports = {
    mkApp: mkApp
};