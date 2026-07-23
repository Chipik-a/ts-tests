import {type Page, type Locator} from "@playwright/test";

export class MainPage {
    readonly page: Page;
    readonly feedTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.feedTitle = page.getByRole('heading', { name: 'Feed' })
    }

}