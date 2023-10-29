import { expect, test } from "@playwright/test";
import RegisterPage from "../Pages/registerPage";
import LoginPage from "../Pages/loginPage";
import * as data from "../test-data/addToCart.json";

const email = "padasuatuhari@gmail.com";
const password = "asdasdasd";

test.describe("page object test", async () => {
  test("try", async ({ page, baseURL }) => {
    const register = new RegisterPage(page);
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName(data.firstname);
    await register.enterLastName("jason");
    await register.enterEmail(email);
    await register.enterTelephone("2345678990");
    await register.enterPassword(password);
    await register.enterConfirm(password);
    //   expect(register.isSubscribeChecked).toBeChecked()
    await register.clickTA();
    await register.clickContinue();
  });

  test("try", async ({ page, baseURL }) => {
    const register = new RegisterPage(page);
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("martin");
    await register.enterLastName("jason");
    await register.enterEmail(email);
    await register.enterTelephone("2345678990");
    await register.enterPassword(password);
    await register.enterConfirm(password);
    //   expect(register.isSubscribeChecked).toBeChecked()
    await register.clickTA();
    await register.clickContinue();
  });
});
