Feature('Testcase2');

Scenario('Successfully Search', (I) => {
  I.amOnPage('https://codecept.io');
  I.waitForElement("//ul//a[contains(text(),'GitHub')]");
  I.click("//ul//a[contains(text(),'GitHub')]");
  I.fillField(".//input[contains(@class,'js-site-search-focus')]",'1.2.1 release');
  I.pressKey("Enter");
  I.click("//a[contains(text(),'CHANGELOG.md')]");
  I.seeInCurrentUrl("/CHANGELOG.md");
});
