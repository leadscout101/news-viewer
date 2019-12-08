Ext.define('news-viewer.model.News', {
  extend: 'Ext.data.Model',
  alias: 'model.news',

  fields: [
    {id: 'id'},
    {name: 'authorName'},
    {email: 'newsTitle'},
    {content: 'content'},
    {phone: 'creationDate'},
  ]

});
