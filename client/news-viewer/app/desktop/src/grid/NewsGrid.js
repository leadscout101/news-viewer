Ext.define('news-viewer.grid.NewsGrid', {
  extend: 'Ext.grid.Panel',
  xtype: 'newsgrid',
  title: 'News Application - Portal za pregled novic',
  alias: 'test',
  store: {type: 'livedatastore'},

  columns: [
    {text: 'Id', dataIndex: 'id', width: 150},
    {text: 'Avtor', dataIndex: 'authorName', width: 150},
    {text: 'Naslov novice', dataIndex: 'newsTitle', width: 400},
    {text: 'Vsebina', dataIndex: 'content', width: 400},
    {text: 'Nazadnje spremenjeno', dataIndex: 'creationDate', width: 150},

  ],
  height: 300,
  width: 400,

});
