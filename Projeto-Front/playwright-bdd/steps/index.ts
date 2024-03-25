import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from './fixtures';
import { chromium, Browser, Page } from 'playwright';
import { faker } from '@faker-js/faker';
const { Given, When, Then } = createBdd(test);
let browser: Browser;
let page: Page;


const generateRandomUserData = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    dayOfBirth: faker.date.between({ from: '1990-01-01', to: '2000-12-31' }),
  };
};


Given('que eu esteja na página de registro do nopCommerce', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://demo.nopcommerce.com/register');
});

When('eu preencho o formulário de registro com dados válidos', async () => {
  const userData = generateRandomUserData();
  await page.click('#gender-female');
  await page.fill('#FirstName', userData.firstName);
  await page.fill('#LastName', userData.lastName);

});

When('eu seleciono a data correta correspondente ao input', async () => {
  const { dayOfBirth } = generateRandomUserData();
  await page.selectOption('select[name="DateOfBirthDay"]', dayOfBirth.getDate().toString());
  await page.selectOption('select[name="DateOfBirthMonth"]', (dayOfBirth.getMonth() + 1).toString());
  await page.selectOption('select[name="DateOfBirthYear"]', dayOfBirth.getFullYear().toString());
});

Then('eu devo ser registrado com sucesso', async () => {
  const userData = generateRandomUserData();
  await page.fill('#Email', userData.email);
  await page.fill('#Password', userData.password);
  await page.fill('#ConfirmPassword', userData.password);
  await page.click('#register-button');
  const successMessage = await page.locator('.result').innerText();
  expect(successMessage).toContain('Your registration completed');
});


Given('que eu esteja na página de registro', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://demo.nopcommerce.com/register');
});

When('eu submeto o formulário de registro sem preencher os campos obrigatórios', async () => {
  await page.click('#register-button');
});

Then('mensagens de erro devem ser exibidas para cada campo obrigatório', async () => {
  const firstNameError = await page.isVisible('#FirstName-error');
  const lastNameError = await page.isVisible('#LastName-error');
  const emailError = await page.isVisible('#Email-error');
  expect(firstNameError).toBeTruthy();
  expect(lastNameError).toBeTruthy();
  expect(emailError).toBeTruthy();
});