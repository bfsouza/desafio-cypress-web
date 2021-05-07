// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    waitFillField(element, text){
      I.waitForVisible(element);    
      I.fillField(element, text); 
    }

  });
}
