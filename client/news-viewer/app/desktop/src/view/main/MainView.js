Ext.define('news_viewer.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  layout: 'border',
  items: [
    { xtype: 'footerview', reference: 'footerview', region: 'south', docked: 'bottom', weight: -2 },
    { xtype: 'newsview', reference: 'newsview', region: 'center', weight: -1 }
  ]
});
