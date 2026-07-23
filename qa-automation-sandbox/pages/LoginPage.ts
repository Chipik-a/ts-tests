import { type Page, type Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput=page.getByTestId('auth-email-input');
        this.passwordInput=page.getByTestId('auth-password-input');
        this.signInButton=page.getByTestId('auth-login-btn');
    }

    async goto() {
        await this.page.goto('/login');
    }

    async signIn(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

}