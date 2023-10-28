import { expect, test } from "@playwright/test";

test("handling dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.selectOption("#select-demo", {
    value: "Tuesday",
  });
  //   await page.waitForTimeout(3000);

  await page.selectOption("#multi-select", [
    {
      label: "Texas",
    },
    {
      value: "Washington",
    },
  ]);
});

test.only("Bootstrap dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );

  await selectCountry("India");
  await selectCountry("Denmark");

  await page.waitForTimeout(3000);

  async function selectCountry(countryName) {
    await page.locator("#country+span").click();
    await page
      .locator("#select2-country-results")
      .locator("li", {
        hasText: countryName,
      })
      .click();
  }
});
