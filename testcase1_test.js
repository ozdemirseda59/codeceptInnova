
Feature('Testcase1');

Scenario('Successfully click dontSee under WebDriverIO', (I) => {
  I.amOnPage('https://devdocs.io/codeceptjs-helpers-webdriverio/');
  I.waitForElement("//a[contains(text(),'dontSee (WebDriverIO)')]");
  I.click("//a[contains(text(),'dontSee (WebDriverIO)')]");
  I.waitForElement(".//h4[@id='parameters_13']//following-sibling::ul[1]//code[text()='text']");
  I.waitForElement(".//h4[@id='parameters_13']//following-sibling::ul[1]/li[text()=' is not present']");
});
