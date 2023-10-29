# LEARNING PLAYWRIGHT

So this is the video im gonna use to learn playwright:
https://www.youtube.com/watch?v=wawbt1cATsk
Hope this can help me do well on my test later on. I will setup the environment first and then i will start studying at night.

## Day 1: 0:00 - 8:00 (22 minutes of study)

Im gonna setup my playwright first.

What is playwright:

- node.js library to automate chromium, firefox, and webkit with a single API
- built to enable cross-browser web testing.
- Webkit = browser engine developed by apple used in safari and all ios web browser
- Playwright by microsoft start of fork of Puppeteer
- Puppeteer = node library to automate chromium browsers with the javascript API

Playwright Capabilities:

- Span multiple pages, domains, and iframes
- Intercept network activity for stubbing and mocking network requests
- Emulate mobile devices, geolocation, permissions
- Native input events for mouse and keyboard
- Upload & download support
- Component based testing
- Playwright Test Runner
- Docker Support

## Day 2: 0:00:00 - 1:27:32 (2 hours 30 minute of study)

Today im gonna TRY MY BEST to finish this. Because i got something to do tomorrow.

### Part 1: Basic Scripts using function and selectors (1 Hours 10 minute)

What i learn:

- chromium = browser engine. Chrome and Edge build on top of chromium
- chromium.launch({headless:false}) = create new chromium and to see whats going on within the test
- newContext() = so it create a new browser that dont share cookies/cache with other browser context
- newPage() = new tab. Within one browser we can have multiple tab.

- almost all the time use await
- chromium.launch({headless:false}) = To see what is going on // we can name this using const for example (const browser)
- use the name before which is (browser). So with this we can make new context using browser.newContext() and put it into a name using const for example (const context)
- same thing with the thing before. use context.newPage() to create new tab
- Conclusion: browser -> context -> page -> function (goto, fill, click, hover, waitForTimeout)

Okay what? I had a hard time getting xpath. Idk if its me typing wrong thing or just the browser error. But i understand more things, or should i say remember a lot of thing. it took me like 20 minutes just to finish like 5 second part of the video. its gonna took a while... ARGHHH

- npm = download
- npx = execute

### Part 2: Playwright features (30 minutes)

1. Record test script
2. Reports = reporter
3. SS and Vid on failure = screnshoot / video
4. Execution on failure
5. Auto-wait mechanism

What i learn:

- npx playwright codegen = to generate code almost all by itself
- put npx playwright test in playwright.json scripts and i can run with npm (shortcut)
- all of this is straight forward. almost no code.

### Part 3: Inputs and Button (48 minutes)

i practice a bit and its safe to say that i understand this 95% and remember the syntax like 50%. Its because i havent use much yet. But you know remembering comes from doing over and over again.

- type() = one by one
- fill() = all at once
- almost all the time we use locator() to locate with xpath or css or id anything
- use expect().toHaveSomething() to assert something
  - toHaveAttribute()
  - toHaveText()
- scrollIntoViewIfNeeded() = self explanatory
- u can use .click() or .check() for checkbox but its recommended ah u know what i mean
- the same as cypress, u can use .only() to only execute 1 tc

Okay its 8pm now. Actually im pretty tired. I still got thesis to do. IDK if i will be able to finish this today. Okay i mean it is physically impossible unless i speedrun through this withot following the video. Well i think im gonna rest now. IDK if im gonna continue or not. But lets just see. I will take a short break and see if i want to continue or not.

## Day 3: 1:27:32 - 2:43:30 (1 hours 50 minutes of study) + (2 hours 45 minute of self study)

### Part 4: alerts and dropdowns (50 minutes of study)

I end up not continuing. Okay sorry for that. I will continue today and hopefully finish it. There is still hours, but i will try to focus and speedrun it while keeping the integrity.

1. Alerts
2. Modal Alerts
3. Dropdown
4. Advance Dropdown
5. Slowmo Exec

what i learn:

- toHaveText() = Check entire text
- toContainText() = Self Explanatory.
- Use page.on("name", async (alert) =>{}) to handle alert (This is called listener)
- await alert.accept() / alert.dismiss() = self explanatory (ok/cancel)
- Use simple inspect and click for modal alert

- page.selectOption("Xpath or anything", {label/value/index})
  - label = Name
  - value = simply value
  - index = self explanatory
- U can use locator in locator so like locator().locator()
- launchOptions: {slowMo:} = For slowmo

Okay idk what i am feeling but this is like REALLY REALLY EASY. Not gonna lie once you understand, its only about using function correctly. Okay... Speedrunning

### Part 5: Frames and window handling (1 hours of study)

Okay, after i finished part 4. I am doing something else which is trying to automate something by myself and it took me like almost 3 hours. But i will continue part 5 right now. After part 5, I will see if I still can do part 6. If can't i will continue tomorrow. Not that i can't physically. But i can't mentally. Tomorrow i will also do my Job interview test, wish me luck. I really want to get a job XDDD. Okay lets continue.

- Interaction with Frames
- Multiple ways to handle frames
- Tabs

What i learn:

- Frames: We have multiple HTML frames inside HTML.
- We can use either frameLocator() in which we code normally
- Or we can use page.frame("xpath or something") and use the built in frame function.

- For mutiple tabs, we can use const[multiPage] = await Promise.all([page.waitForEvent("popup")]),page.click("Locator") I mean yeah its pretty long but i understand (Keyword understant, not remember) but i guess its pretty simple. You can deconstruct all the thing inside and put it into multiPage array which u can then access.

BTW i dont think i can continue anymore. I need to rest because this whole day i study and do my work. IDK why it really feel so so long. See you tomorrow

## Day 4: 2:43:30 - 4:55:11 (idk)

Okay, so today is really the day i finish this. Or at least finish my work. I will focus for as long as I can.

### Part 6: Date picker / Calender (38 minutes)

What i learn:

- 2 ways of handling date: Fill and next / previous (moments)
- SHEESHH I JUST KNOW THAT YOU CAN JUST DIRECTLY CLICK. mann
- Use moment package
- All of the thing i just learn is pretty straightforward

### Part 7: Upload and Download (31 minutes)

What i learn:

- Downloading is easy, just use saveAs(fileName). And use Promise.all with waitForEvent("Download") and page.click("locator")
- Uploading is also easy, also use promise.

I can't say i remember but i sure understand.

### Part 8: Page Object Model (58 minutes)

Okay this should be more interesting.

- What is POM?
- How to write pages
- How to write POM test

What i learn:

- POM = design pattern in test automation that creates an object repository for storing all elements. Useful in reducing code dupe. And each web page is considered as a class file
- Okay this is pretty simple, just make the code more easy to maintain.
- strict = false (if multiple is found then error)
- .waitFor({state:"visible"})
- we can use .waitForNavigation({waitUntil: "networkidle"}) to wait until certain page has load then go next

Actually i decide that continuing to follow is almost a waste of time. There is also different things that i can't follow. So im just gonna watch and understand the video from now on and write the important part

### part 9: POM with fixture (32 minutes)

- What is fixture
- how to implement

what i learn:

- Okay so from what i have seen, fixture is simply extending function?
- Fixture can be used with POM too
- Its hard to explain here. i already write some fixture in the folder so maybe i can understand it more. Currently im at 85% understanding. Just not remembering.
- Its better to pass value using json file

Okay the last part. I will finish it but not today. I will do my test after i eat. See you guys later.
