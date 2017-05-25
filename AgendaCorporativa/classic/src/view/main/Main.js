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
        'AgendaCorporativa.view.main.MainModel',
        'AgendaCorporativa.view.main.Cabecalho'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    defaults: {
        border: 0,
        style: {
            borderColor: 'black',
            borderStyle: 'solid'
        }
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    padding: '0 20',

    items: [{
        xtype: 'meu-cabecalho',
        margin: '15 0',
        border: '0 0 3 0',
        style: {
            borderStyle: 'solid',
            borderColor: 'black'
        }
    }, {
        xtype: 'container',
        flex: 1,
        html: 'Corpo'
    }, {
        xtype: 'container',
        margin: '15 0',
        padding: '15 0 0 0',
        border: '3 0 0 0',
        style: {
            borderStyle: 'solid',
            borderColor: 'black',
            textAlign: 'center'
        },
        html: '<div><a href="#">Sobre</a> - <a href="#">Contato</a></div>' + 
            '<div>&copy; 2017</div>'
    }]
});
