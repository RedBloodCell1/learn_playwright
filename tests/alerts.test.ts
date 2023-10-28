import { expect, test } from "@playwright/test";

test("handling alerts", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  page.on("dialog", async (alert) => {
    const text = alert.defaultValue();
    console.log(text);
    await alert.accept("Martin");
  });

  await page.locator("button:has-text('Click Me')").nth(2).click();
  expect(page.locator("#prompt-demo")).toContainText(
    "You have entered 'Martin' !"
  );
});

test("modal alert", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo"
  );
  await page.locator("button[data-target='#myModal']").click();
  await page.locator("(//button[text()='Save Changes'])[1]").click();
});
