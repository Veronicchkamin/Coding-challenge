
const ResultlistPage = require("../pages/ResultlistPage");
const landingPage = require ("../pages/ResultlistPage");

class ResultlistPageSteps {

    pressOhneAdresseingabefortfahren(){
        ResultlistPage.pressOhneAdresseingabefortfahren();
    }
    seeAvailableTariffs(){
        ResultlistPage.seeAvailableTariffs();
    }
    seeTariffElements(){
        ResultlistPage.seeTariffElements();
    }
    see100mbitIcon(){
        ResultlistPage.see100mbitIcon();
    }
    seeAllTariffElements(numberOfElements){
       ResultlistPage.seeAllTariffElements(numberOfElements); 
    }
    async loadAllTariffs(){
       await ResultlistPage.loadAllTariffs();
    }

}

module.exports = new ResultlistPageSteps();