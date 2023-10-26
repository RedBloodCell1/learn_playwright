# LEARNING PLAYWRIGHT

So this is the video im gonna use to learn playwright:
https://www.youtube.com/watch?v=wawbt1cATsk
Hope this can help me do well on my test later on. I will setup the environment first and then i will start studying at night.

Day 1: 0:00 - 8:00 (22 minutes of study)

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

Day 2:

Today im gonna TRY MY BEST to finish this. Because i got something to do tomorrow.

Part 1: Basic Scripts using function and selectors (1 Hours 10 minute)

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

part 2: (30 minutes)

1. Record test script
2. Reports
3. SS and Vid on failure
4. Execution on failure
5. Auto-wait mechanism

What i learn:

- npx playwright codegen = to generate code almost all by itself
- put npx playwright test in playwright.json scripts and i can run with npm (shortcut)
- all of this is straight forward. almost no code.
