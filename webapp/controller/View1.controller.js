sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5module.controller.View1", {
        onInit: function() {
        },
        onPress: function(){
            MessageBox.alert("You have been initialized");
        }
    });
});