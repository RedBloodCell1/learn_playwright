import { Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) {}

  async clickSpecialHotMenu() {
    await this.page.click("'Special'");
  }
}
