const { Builder, By, until } = require('selenium-webdriver');


let driver = new Builder().forBrowser('chrome').build();

async function runUITests() {
  try {
    await driver.get('http://localhost:3333/login');
    await driver.findElement(By.name('cpf')).sendKeys('cpf_valido');
    await driver.findElement(By.name('password')).sendKeys('senha_valida');
    await driver.findElement(By.id('loginButton')).click();
    await driver.wait(until.urlContains('/dashboard'), 5000);
    console.log('Teste de login com Selenium passou.');
  } catch (error) {
    console.log('Teste de login com Selenium falhou:', error);
  } finally {
    await driver.quit();
  }
}

runUITests();
