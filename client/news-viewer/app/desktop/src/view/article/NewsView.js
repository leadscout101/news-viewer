Ext.define('news-viewer.view.article.NewsView',{
	extend: 'Ext.grid.Panel',
	xtype: 'newsview',
	controller: 'newsviewcontroller',
	title: 'News viewer - Portal za pregled novic',
	store: {type: 'livedatastore'},

	header:{
		titlePosition: 0,
		items:[{
			xtype:'button',
			style: 'background-color: lightgreen',

			text: 'Ustvari novico',
			handler: 'odpriMasko'
		}]
	},

	columns: [
		{text: 'Naslov novice', dataIndex: 'newsTitle', width: 400},
		{text: 'Vsebina', dataIndex: 'content', width: 400},
		{text: 'Avtor', dataIndex: 'authorName', width: 150},
		{text: 'Nazadnje spremenjeno', dataIndex: 'creationDate', width: 150},

		{
			xtype:'actioncolumn',
			width:80,
			items: [{
				icon: 'resources/desktop/view.png',
				tooltip: 'View news',
				handler: 'prikazi'
			},
				{
				icon: 'resources/desktop/edit.png',
				tooltip: 'Edit',
				handler: 'uredi'
			},{
				icon: 'resources/desktop/delete.png',
				tooltip: 'Delete',
				handler: 'brisi',
			}],
		},
	],
	height: 300,
	width: 400,

});






