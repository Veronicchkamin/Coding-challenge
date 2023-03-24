Feature('google');

Scenario('test something @google', ({ I }) => {
    I.amOnPage('https://google.com');
    I.see('Google');
    I.see('');
});
