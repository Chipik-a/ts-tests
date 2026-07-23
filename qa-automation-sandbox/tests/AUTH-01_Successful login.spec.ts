import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage.js";
import { MainPage } from "../pages/MainPage.js";

// test.beforeEach(async ({ request }) => {
//    // const response = await request.post('/api/reset');
//     console.log('Status:', response.status());
//     console.log('Body:', await response.text());
//
//     expect(response.ok()).toBeTruthy();
// })

test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);

    await loginPage.goto();
    await loginPage.signIn(process.env.ALICE_EMAIL!, process.env.ALICE_PASSWORD!);

    await expect(mainPage.feedTitle).toBeVisible();

});

