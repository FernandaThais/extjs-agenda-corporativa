/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('AgendaCorporativa.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'AgendaCorporativa.view.main.MainController',
        'AgendaCorporativa.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    fullscreen: true,

    items: [
        {
            xtype: 'container',
            html: 'Olá, Mundo!'
        }
    ]
});
