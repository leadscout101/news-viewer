Ext.define('news_viewer.view.article.NewsViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.newsviewcontroller',

	prikazi: function(grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);

		var displayWindow = new Ext.window.Window({
			autoShow: true,
			title: rec.get('newsTitle'),
			modal: true,
			closable: true,
			border: true,
			closeAction: 'destroy',
			width: 800,
			height: 600,
			layout: 'fit',
			style: 'background-color: lightblue',

			items: {
				xtype: 'fieldset',
				style: 'background-color: silver',

				items: [
					{
						xtype: 'textfield',
						fieldLabel: 'Ime avtorja',
						width: '250',
						editable: false,
						value: rec.get('authorName'),
						style: 'background-color: RGB(241,243,244)',
					},
					{
						xtype: 'textfield',
						fieldLabel: 'Nazadnje spremenjeno',
						width: '250',
						editable: false,
						value: rec.get('creationDate'),
						style: 'background-color: RGB(241,243,244)',
					},
					{
						xtype: 'textareafield',
						grow      : true,
						name      : 'vsebinaNovice',
						anchor    : '100%',
						editable : false,
						allowBlank: false,
						scrollable: 'y',
						height: 400,
						style: {
							"overflow-y": 'scroll',
							"background-color": 'RGB(241,243,244)'
						},
						preventScrollbars: false,
						value: rec.get('content'),
					}
				]

			},

		});

	},

	uredi: function(grid, rowIndex, colIndex,) {
		var rec = grid.getStore().getAt(rowIndex);

		var okno = new Ext.window.Window({
			autoShow: true,
			title: 'Uredi novico: ' + rec.get('newsTitle'),
			modal: true,
			closable: true,
			border: true,
			closeAction: 'destroy',
			width: 800,
			height: 600,
			layout: 'fit',
			style: 'background-color: lightblue',

			items: {
				xtype: 'fieldset',
				style: 'background-color: silver',

				items: [
					{
						xtype: 'textfield',
						fieldLabel: 'Ime avtorja',
						width: '250',
						allowBlank: false,
						id: 'nameOfAuthor',
						value: rec.get('authorName'),
						style: 'background-color: RGB(241,243,244)',
					},
					{
						xtype: 'textfield',
						fieldLabel: 'Spremeni naslov',
						allowBlank: false,
						id: 'newsHeader',
						value: rec.get('newsTitle'),
						style: 'background-color: RGB(241,243,244)',
					},
					{
						xtype: 'textareafield',
						grow      : true,
						name      : 'vsebina',
						fieldLabel: 'Spremeni vsebino',
						anchor    : '100%',
						editable : true,
						allowBlank: false,
						scrollable: 'y',
						height: 400,
						style: {
							"overflow-y": 'scroll',
							"background-color": 'RGB(241,243,244)'
						},
						preventScrollbars: false,
						id: 'newsContent',
						value: rec.get('content'),
					}
				]

			},
			buttons: [{
				text: 'Save changes',
				handler: function(){
					var name = Ext.getCmp('newsHeader').getValue();
					var name2 = Ext.getCmp('nameOfAuthor').getValue();
					var name3 = Ext.getCmp('newsContent').getValue();


					Ext.Ajax.request({
						url: 'http://localhost:8081/news/' + rec.get('id'),

						success: function (response) {
							alert('Uspešno posodobljeno!');
							window.location.reload();
							history.go(0);

						},
						failure: function (response) {
							alert('Napaka pri posodabljanju novice.');

						},

						scope:this,
						disableCaching:true,
						jsonData: {
							id: rec.get('id'),
							authorName: name2,
							newsTitle: name,
							content: name3,
						},
						method:'PUT',
						headers:
								{
									'Content-Type': 'application/json',
									dataType: "json"
								},
					});
				},
			}]
		});
	},


	brisi: function(grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);
		Ext.Msg.confirm('Confirm', 'Are you sure?', function(id)
		{
			if (id === 'yes'){
				Ext.Ajax.request({
					url: 'http://localhost:8081/news/' + rec.get('id'),
					method: 'DELETE',
					timeout: 60000,
					headers:
							{
								'Content-Type': 'application/json'
							},
					success: function (response) {
						grid.getStore().removeAt(rowIndex);

					},
					failure: function (response) {
						alert('Napaka pri brisanju vnosa!');
					}
				});
			}
		}, this);
	},

	odpriMasko: function(){
		var novica = new Ext.window.Window({
			autoShow: true,
			title: 'Izpolni polja o novici.',
			modal: true,
			closable: true,
			border: true,
			closeAction: 'destroy',
			width: 800,
			height: 600,
			layout: 'fit',
			style: 'background-color: lightblue',

			items: {
				xtype: 'fieldset',
				style: 'background-color: silver',

				items: [
					{
						xtype: 'textfield',
						fieldLabel: 'Ime avtorja',
						allowBlank: false,
						id: 'inputNameOfAuthor',
						style: 'background-color: RGB(241,243,244)'
					},
					{
						xtype: 'textfield',
						fieldLabel: 'Naslov',
						allowBlank: false,
						id: 'inputNewsHeader',
						style: 'background-color: RGB(241,243,244)'
					},
					{
						xtype: 'textareafield',
						grow      : true,
						name      : 'vnosNovice',
						anchor    : '100%',
						editable : true,
						allowBlank: false,
						scrollable: 'y',
						height: 400,
						style: {
							"overflow-y": 'scroll',
							"background-color": 'RGB(241,243,244)'
						},
						preventScrollbars: false,
						id: 'inputNewsContent',
					}
				]

			},
			buttons: [{
				text: 'Save changes',
				handler: 'ustvari',

			}]
		});
	}

});
