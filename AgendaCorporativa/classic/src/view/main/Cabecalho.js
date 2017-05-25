Ext.define('AgendaCorporativa.view.main.Cabecalho', {
	extend: 'Ext.container.Container',
	xtype: 'meu-cabecalho',
	// cabecalho,
    margin: '15 0',
    border: '0 0 3 0',
    style: {
        borderStyle: 'solid',
        borderColor: 'black'
    },
    layout: {
        type: 'hbox'
    },
    items: [{
        xtype: 'component',
        width: 50,
        height: 50,
        autoEl: {
            tag: 'img',
            src: '/resources/imagens/icone-agenda-200x200.png',
            width: 50,
            height: 50
        }
    }, {
        xtype: 'component',
        autoEl: {
            tag: 'h1'
        },
        html: 'Agenda'
    }] 
});
