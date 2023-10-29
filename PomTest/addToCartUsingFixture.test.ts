import { test } from "../Base/pomFixture";

const email = "padasuatuhari@gmail.com";
const password = "asdasdasd";

test.describe("page object test", async () => {
  test("try", async ({ page, baseURL, registerPage }) => {
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName("martin");
    await registerPage.enterLastName("jason");
    await registerPage.enterEmail(email);
    await registerPage.enterTelephone("2345678990");
    await registerPage.enterPassword(password);
    await registerPage.enterConfirm(password);
    //   expect(registerPage.isSubscribeChecked).toBeChecked()
    await registerPage.clickTA();
    await registerPage.clickContinue();
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
