import { test } from "@playwright/test";

test("Download File", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo"
  );

  await page.type("#textbox", "Cool and Wow");
  await page.click("id=create");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("#link-to-download"),
  ]);

  const fileName = download.suggestedFilename();
  await download.saveAs(fileName);
  //   const path = await download.path();
  //   console.log(path);
});

test.only("Upload File", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

  //   await page.setInputFiles("//input[@type='file']", [
  //     "Upload/asd.txt",
  //     "Upload/qwe.txt",
  //   ]);

  const [uploadFiles] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("//input[@type='file']"),
  ]);

  const isMultiple = uploadFiles.isMultiple();
  console.log(isMultiple);
  uploadFiles.setFiles(["Upload/asd.txt", "Upload/qwe.txt"]);

  await page.waitForTimeout(3000);
});
