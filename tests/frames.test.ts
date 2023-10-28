import { expect, test } from "@playwright/test";

test("should first", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const allFrames = page.frames();
  console.log(allFrames.length);

  const frame = page.frameLocator("#firstFr");
  await frame.locator("input[name='fname']").fill("Martin");

  const innerFrame = frame.frameLocator("iframe[src=innerFrame]");
  innerFrame.locator("input[name='email']").fill("abc@gmail.com");

  await frame.locator("input[name='fname']").fill("ASD");

  //   const myFrame = page.frame("#firstFr");
  //   myFrame?.fill("input[name='fname']", "Martin");
  //   myFrame?.fill("input[name='lname']", "Jason");

  //   expect(myFrame?.locator("p.has-text-info").textContent()).toContain(
  //     "You have entered"
  //   );
});
