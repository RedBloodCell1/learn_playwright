import { Page } from "@playwright/test";

export default class SpecialHotPage {
  constructor(public page: Page) {}

  async clickSpecialHotMenu() {
    await this.page.click("'Special'");
  }
}
