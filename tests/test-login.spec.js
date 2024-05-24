// @ts-check
const { test, expect } = require('@playwright/test');

test('Teste de login', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('myAPI')).toBeVisible()
})