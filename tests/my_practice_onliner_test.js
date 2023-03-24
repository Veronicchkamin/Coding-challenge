Feature('onliner');

Scenario('test something open @onliner', ({ I }) => {
    I.amOnPage('https://onliner.by');
    I.see('Onliner');
    I.see('');

    pause();
});