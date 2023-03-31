const { pause } = require("codeceptjs");
const ResultlistPage = require("../src/pages/ResultlistPage");
const landingPageSteps = require("../src/steps/LandingPageSteps");
const ResultlistPageSteps = require("../src/steps/ResultlistPageSteps");
const resultlistPageSteps = require("../src/steps/ResultlistPageSteps");
const assert = require('chai').assert;

Feature('code challenge');

Scenario('task one - dsl resultlist @dsl-result', ({ I }) => {
    //GIVEN that I open  www.verivox.de
    I.amOnPage('https://www.verivox.de');
  
    // THEN accept cookie consent
    landingPageSteps.acceptAllCookies();

    // WHEN navigate to the DSL calculator page
    landingPageSteps.selectDslIcon();
  
    // AND select 100 Mbit/s bandwidth option
   landingPageSteps.selectHunderdMbitIcon();
   
    // AND click Jetxt vergleichen
   landingPageSteps.clickJetztVergleichenButton();

    // AND click "Ohne Adresseingabe fortfahren" button
   ResultlistPage.pressOhneAdresseingabefortfahren();

    // THEN see a page that lists the available tariffs
    
    ResultlistPageSteps.seeAllTariffElements(5);

    // THEN see at least 5 internet tariffs are displayed

    // THEN see the displayed tariffs provide at least 100 Mbit/s download speed
    I.see('ab 100 Mbits/s');
});





Scenario('task two - dsl load all results @dsl-load-all-results', async ({ I }) => {
    //GIVEN that I open  www.verivox.de
    I.amOnPage('https://www.verivox.de');
 // THEN accept cookie consent
 landingPageSteps.acceptAllCookies();

 // WHEN navigate to the DSL calculator page
 landingPageSteps.selectDslIcon();

 // AND select 100 Mbit/s bandwidth option
landingPageSteps.selectHunderdMbitIcon();

 // AND click Jetxt vergleichen
landingPageSteps.clickJetztVergleichenButton();

    // AND click "Ohne Adresseingabe fortfahren" button
    I.wait(8);
    I.waitForVisible('[class="order-2 order-md-1 text-primary cursor-pointer pr-4"]');
    I.click('[class="order-2 order-md-1 text-primary cursor-pointer pr-4"]');

    // THEN see a page that lists the available tariffs
    I.wait(2);
    I.see('Ermittelte Tarife');

    // THEN see at least 5 internet tariffs are displayed
    I.seeElement('(//*[@class="d-flex flex-column"])[1]');
    I.seeElement('(//*[@class="d-flex flex-column"])[2]');
    I.seeElement('(//*[@class="d-flex flex-column"])[3]');
    I.seeElement('(//*[@class="d-flex flex-column"])[4]');
    I.seeElement('(//*[@class="d-flex flex-column"])[5]');

    // THEN see the displayed tariffs provide at least 100 Mbit/s download speed
    I.see('ab 100 Mbits/s');


    //Load all tariffs
   await ResultlistPageSteps.loadAllTariffs();


    // verify the weitere Tarife laden button is no longer displayed when all the tariffs are visible
    I.dontSeeElement('[class^="btn btn-primary text"]');

    //	the total number of tariffs displayed matches the total listed in the Ermittelte Tarife section
    const numberOfTariffs = await I.grabNumberOfVisibleElements('(//*[@class="d-flex flex-column"])');
    const expectedNumberOfTariffs = await  I.grabTextFrom('[class="summary-tariff"]');

    console.log(numberOfTariffs, expectedNumberOfTariffs);
  assert.include(expectedNumberOfTariffs,numberOfTariffs);


});


Scenario('task three - dsl offer details @dsl-offer-details', async ({ I }) => {
    //GIVEN that I open  www.verivox.de
    I.amOnPage('https://www.verivox.de');
    I.wait(2);

    // THEN accept cookie consent
    landingPageSteps.acceptAllCookies();

    // WHEN navigate to the DSL calculator page
    landingPageSteps.selectDslIcon();
  
    // AND select 100 Mbit/s bandwidth option
   landingPageSteps.selectHunderdMbitIcon();
   
    // AND click Jetxt vergleichen
   landingPageSteps.clickJetztVergleichenButton();
    // AND click "Ohne Adresseingabe fortfahren" button
    I.wait(8);
    I.waitForVisible('[class="order-2 order-md-1 text-primary cursor-pointer pr-4"]');
    I.click('[class="order-2 order-md-1 text-primary cursor-pointer pr-4"]');

    // THEN see a page that lists the available tariffs
    I.wait(2);
    I.see('Ermittelte Tarife');

    // THEN see at least 5 internet tariffs are displayed
    I.seeElement('(//*[@class="d-flex flex-column"])[1]');
    I.seeElement('(//*[@class="d-flex flex-column"])[2]');
    I.seeElement('(//*[@class="d-flex flex-column"])[3]');
    I.seeElement('(//*[@class="d-flex flex-column"])[4]');
    I.seeElement('(//*[@class="d-flex flex-column"])[5]');

    // THEN see the displayed tariffs provide at least 100 Mbit/s download speed
    I.see('ab 100 Mbits/s');


    I.click('(//*[@class="button-primary w-100 ng-star-inserted"])[1]');
    
     //THEN I should see the corresponding offer page for the selected tariff
     I.wait(2);
     I.seeInCurrentUrl('https://www.verivox.de/internet/tarif');
     // verify 5 minuten online wechseln button is shown
     I.seeElement('[class^="button-primary cta_component"]');

     //tariff details

     I.seeElement('[id="offer-price"]');
     I.seeElement('[id="tariff_name"]');
     I.seeElement('[class="price-item__recurring price-item--bold"]');

     I.see('Tarifkosten');
     I.see('Hardware');
     I.see('Optionen');

});