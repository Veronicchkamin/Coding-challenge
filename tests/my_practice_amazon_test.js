Feature('amazon');

Scenario('test something open @amazon', ({ I }) => {
    I.amOnPage('https://amazon.com');
    I.see('Amazon');
    I.see('');

    I.wait(5);

    I.scrollPageToBottom();

    I.seeElement('(*//[aria-label="Choose a language for shopping."])');
    I.click('(*//[aria-label="Choose a language for shopping."])');
    pause();
});