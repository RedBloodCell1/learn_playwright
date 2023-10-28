import { test, expect } from "@playwright/test";

test("Interact with multiple tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  const [multiPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth"),
  ]);

  await page.waitForLoadState();
  const pages = multiPage.context().pages();
  console.log(pages.length);

  pages.forEach((tab) => {
    console.log(tab.url());
  });

  let facebookPage;
  for (let index = 0; index < pages.length; index++) {
    const url = pages[index].url();
    if (url == "facebook") {
      facebookPage = pages[index];
    }
  }
  //   console.log(page.url());

  //   const [newWindow] = await Promise.all([
  //     page.waitForEvent("popup"),
  //     page.click("'Follow On Twitter'"),
  //   ]);

  //   console.log(newWindow.url());
});
