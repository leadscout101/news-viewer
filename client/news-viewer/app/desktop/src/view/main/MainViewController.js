Ext.define('news-viewer.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',
  store: {type: 'livedatastore'},

  ustvari: function(){
    var input1 = Ext.getCmp('inputNameOfAuthor').getValue();
    var input2 = Ext.getCmp('inputNewsHeader').getValue();
    var input3 = Ext.getCmp('inputNewsContent').getValue();


    if( input1 === '' || input2 === '' || input3 === '' ){
      alert('Vsa polja so obvezna!');
    }else{
      Ext.Ajax.request({
            url: 'http://localhost:8081/news',
            jsonData: {

              authorName: input1,
              newsTitle: input2,
              content: input3,
            },
            method:'POST',
            headers:
                {
                  'Content-Type': 'application/json',
                  dataType: "json"
                },

            success: function (response) {
              alert('Novica uspešno ustvarjena!');
              window.location.reload();
              history.go(0);
            },
            failure: function (response) {
              alert('Napaka pri ustvarjanju novice.');

            },
          }
      );
    }
  }
});
