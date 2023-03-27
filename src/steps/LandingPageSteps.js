
const landingPage = require ("../pages/LandingPage");

class LandingPageSteps {

    acceptAllCookies(){
        landingPage.acceptAllCookies();
    }
    selectDslIcon(){
        landingPage.selectDslIcon();
    }
    selectHunderdMbitIcon(){
        landingPage.selectHunderdMbitIcon();
    }
    clickJetztVergleichenButton(){
        landingPage.clickJetztVergleichenButton();
    }

}

module.exports = new LandingPageSteps();