/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AgendaCorporativa.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.container.Container',

        'AgendaCorporativa.view.main.MainController',
        'AgendaCorporativa.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    defaults: {
        border: 1,
        style: {
            borderColor: 'black',
            borderStyle: 'solid'
        }
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'container',
        html: 'Cabeçalho'
    }, {
        xtype: 'container',
        flex: 1,
        html: 'Corpo'
    }, {
        xtype: 'container',
        html: 'Rodapé'
    }]
});
