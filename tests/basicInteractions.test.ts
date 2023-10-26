import { expect, test } from "@playwright/test";

test("Interaction with inputs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  const messageInput = page.locator("//input[@id='user-message']");
  await messageInput.scrollIntoViewIfNeeded();
  console.log(await messageInput.getAttribute("placeholder"));
  expect(messageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );
  console.log("Before Entering Data: " + (await messageInput.inputValue()));
  await messageInput.type("Hi There");
  console.log("Before Entering Data: " + (await messageInput.inputValue()));
});

test("Sum", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );

  const sum1 = page.locator("#sum1");
  const sum2 = page.locator("#sum2");
  const getSum = page.locator("//button[text()='Get Sum']");

  const num1 = 5;
  const num2 = 6;

  await sum1.fill("" + num1);
  await sum2.fill("" + num2);
  await getSum.click();

  const result = page.locator("#addmessage");
  console.log(await result.textContent());

  const expectedResult = num1 + num2;
  expect(result).toHaveText("" + expectedResult);
});

test.only("Checkbox", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );

  const checkBox = page.locator("#isAgeSelected");
  expect(checkBox).not.toBeChecked();
  await checkBox.check();
  expect(checkBox).toBeChecked();

  const checked = page.locator("#txtAge");

  expect(checked).toHaveText("Checked");
});
