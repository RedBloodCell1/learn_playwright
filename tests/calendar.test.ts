import test from "@playwright/test";
import moment from "moment";

test("Calendar", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  let date = "1994-12-04";

  await page.fill("#birthday", date);
  await page.waitForTimeout(3000);
});

test.only("Calendar - Moment", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  await selectDate(12, "December 2023");

  await page.reload();

  await selectDate(13, "March 2023");

  async function selectDate(date: number, dateToSelect: string) {
    await page.click("//input[@placeholder='Start date']");
    const mmYY = page.locator(
      "((//table[@class='table-condensed'])//th[@class='datepicker-switch'])[1]"
    );
    const prev = page.locator(
      "((//table[@class='table-condensed'])//th[@class='prev'])[1]"
    );
    const next = page.locator(
      "((//table[@class='table-condensed'])//th[@class='next'])[1]"
    );

    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    console.log(thisMonth);

    while ((await mmYY.textContent()) != dateToSelect) {
      if (thisMonth) {
        await prev.click();
      } else {
        await next.click();
      }
    }

    // await prev.click();
    await page.click(`//td[@class='day'][text()='${date}']`);
  }
});
