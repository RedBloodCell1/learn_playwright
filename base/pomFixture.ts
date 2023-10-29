import { test as baseTest } from "@playwright/test";
import RegisterPage from "../Pages/registerPage";
import LoginPage from "../Pages/loginPage";

type pages = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
};

const testPages = baseTest.extend<pages>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
