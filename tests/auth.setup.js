// @ts-check
const { test: setup} = require('@playwright/test');

const TOKEN_FILEPATH = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto('https://my.api.org/Account/Login')
    await page.getByLabel('Email').fill('woheg12176@haislot.com')
    await page.getByLabel('Password').fill('Herbertao123456')
    await page.getByRole('button', { name: 'Continue' }).click()
    await page.waitForTimeout(5000)
    await page.context().storageState({ path: TOKEN_FILEPATH })
})

