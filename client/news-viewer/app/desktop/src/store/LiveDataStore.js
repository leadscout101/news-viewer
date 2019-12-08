Ext.define('news-viewer.store.LiveDataStore',{
  extend: 'Ext.data.Store',
  alias: 'store.livedatastore',
  model: 'news-viewer.model.News',
  proxy: {
    type: 'ajax',
    url: 'http://localhost:8081/news'
  },
  autoLoad: true

});
