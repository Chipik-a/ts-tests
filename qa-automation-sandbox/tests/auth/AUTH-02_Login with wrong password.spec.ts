import {test, expect} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage.js";

test('Login with wrong password', async ({page}) => {
    const loginPage = new LoginPage(page);
    //const mainPage = new MainPage(page);

    await loginPage.goto();
    await loginPage.signIn(process.env.ALICE_EMAIL!, process.env.WRONG_PASSWORD!);

    await expect(loginPage.loginErrorMessage).toBeVisible();
});