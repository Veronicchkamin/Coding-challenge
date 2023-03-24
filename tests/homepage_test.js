Feature('homepage');

Scenario('test something @homepage', ({ I }) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
    I.see('');
});

