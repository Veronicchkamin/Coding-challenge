class   LandingPage {
    // locator Id's
  acceptAllCookiesButton='[class="gdpr-button gdpr-accept-all"]';
  dslIcon='[class="icn icn-dsl-outlined"]';
  hunderdMbitIcon='100 MBit/s';
  jetztVergleichenButton='Jetzt vergleichen';

acceptAllCookies(){
    const { I } = inject();
    I.wait(5);
    I.waitForVisible(this.acceptAllCookiesButton);
    I.click(this.acceptAllCookiesButton);
}

selectDslIcon(){
    const { I } = inject();
    I.wait(1);
    I.waitForVisible(this.dslIcon);
    I.click(this.dslIcon);

}

selectHunderdMbitIcon(){
    const { I } = inject();
    I.wait(3);
    I.click(this.hunderdMbitIcon);

}
clickJetztVergleichenButton(){
    const { I } = inject();
    I.wait(1);
    I.click(this.jetztVergleichenButton);
}
}

module.exports = new LandingPage();