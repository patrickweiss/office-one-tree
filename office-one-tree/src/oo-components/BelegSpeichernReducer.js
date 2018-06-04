

function belegSpeichernReducer(newState, action) {
    
       window.logger.debug("1. belegSpeichernReducer");
     
 //Ausgabe in ooAusgaben ergänzen   
 var geschaeftsjahr=2018;
    var datumZuOrdner = {
      "01":new Date(geschaeftsjahr,0,1),
      "02":new Date(geschaeftsjahr,1,1),
      "03":new Date(geschaeftsjahr,2,1),
      "04":new Date(geschaeftsjahr,3,1),
      "05":new Date(geschaeftsjahr,4,1),
      "06":new Date(geschaeftsjahr,5,1),
      "07":new Date(geschaeftsjahr,6,1),
      "08":new Date(geschaeftsjahr,7,1),
      "09":new Date(geschaeftsjahr,8,1),
      "10":new Date(geschaeftsjahr,9,1),
      "11":new Date(geschaeftsjahr,10,1),
      "12":new Date(geschaeftsjahr,11,1),
    };
 
 var dateiname = "kommt noch";
  var datum= datumZuOrdner[newState.UI.buchungsperiode.split(" ")[0]];
 var bezahltAm= "kommt noch";
 var konto= "kommt noch";
 var brutto= "kommt noch";
 var netto= "kommt noch";
 var vorsteuer= "kommt noch";
 var gegenkonto= "kommt noch";
 var text= "kommt noch";
 var dateityp= "kommt noch";
  
    
    var ooAusgabenZeile=[
        'keine',
        dateiname,
        datum,
        bezahltAm,
        konto,
        brutto,
        netto,
        vorsteuer,
        gegenkonto,
        text,
        dateityp
        ];
        
newState.BM.ooAusgaben.splice(1,0,ooAusgabenZeile);


}

export default belegSpeichernReducer;