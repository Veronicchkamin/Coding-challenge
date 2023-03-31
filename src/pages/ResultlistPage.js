class ResultlistPage{
 // locator Id's
 OhneAdresseingabeButton='[class="order-2 order-md-1 text-primary cursor-pointer pr-4"]';
 AvailableTariffsIcon='Ermittelte Tarife';
 TariffElement1='(//*[@class="d-flex flex-column"])[1]';
 TariffElement2='(//*[@class="d-flex flex-column"])[2]';
 TariffElement3='(//*[@class="d-flex flex-column"])[3]';
 TariffElement4='(//*[@class="d-flex flex-column"])[4]';
 TariffElement5='(//*[@class="d-flex flex-column"])[5]';
 Min100MbitSpeedIcon='ab 100 Mbits/s';
 tariffElementID='(//*[@class="d-flex flex-column"])[XX]';
 loadMoreTariffsButton='[class^="btn btn-primary text"]';
  
 async loadAllTariffs(){
    const { I } = inject();
    const maxTries = 20;
    for (let currentTry = 1; currentTry <= maxTries; currentTry++) {
      const loadTariffButton = await I.grabNumberOfVisibleElements(this.loadMoreTariffsButton);
      console.log(loadTariffButton);
      if (!loadTariffButton >= 1) {
      break;
         }
         I.scrollTo(this.loadMoreTariffsButton);
         I.click(this.loadMoreTariffsButton);
         I.wait(3);
   }

 }

  pressOhneAdresseingabefortfahren(){
    const { I } = inject();
    I.waitForVisible(this.OhneAdresseingabeButton,20);
    I.click(this.OhneAdresseingabeButton);
  }

  seeAvailableTariffs(){
  const { I } = inject();
  I.wait(2);
  I.see(this.AvailableTariffsIcon);
  }
  
  seeAllTariffElements(numberOfElements){
  const { I } = inject();
  for (let i = 1; i <= numberOfElements; i++) { 
  I.seeElement(this.tariffElementID.replace("XX", i));
  }
  }
  see100mbitIcon(){
    const { I } = inject();
    I.see(this.Min100MbitSpeedIcon);
  }
  
}
module.exports = new ResultlistPage();