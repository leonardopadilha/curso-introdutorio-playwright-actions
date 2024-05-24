// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');

  const logo = page.locator('.header-logo .logo img')

  await expect(logo).toBeVisible();
  await expect(page).toHaveTitle('QAZANDO Shop E-Commerce')
});