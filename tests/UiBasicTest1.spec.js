//import the playwright module
const { test } = require("@playwright/test");

//We can have "n" number of test case in  a spec file
//First argument of the text function is the test case name and it should be unique
//Second argument should be anonymous function of the test function.
// test('First Playwright Test', function(){

// });

//Enhance the test function by using fat operator for anonymous function
// test('Second Playwright Test', () => {
//     //Inside the anonymous function we define the Playwright Codes
// });

//To run the TEST FUNCTIONS in SPEC file in parallel
//test.describe.configure({mode: 'parallel'});

/*It will run in serial mode; but if Fourth Playwright Test is dependent on Third Playwright Test,
and Third Playwright Test fails  Fourth Playwright Test will skip*/
//test.describe.configure({mode: 'serial'});

//We use asyn-await to syncshronize the web testing codes
test(" @web Third Playwright Test", async ({ browser }) => {
  //Inside the anonymous function we define the Playwright Codes
  //await navigate to URL - goTo()
  //await type in username - type() , fill()
  //await type in password - type() , fill()
  //await click on the login button - click()

  //We create a new context/instance of the browser
  const context = await browser.newContext();

  //context will open with new page of the browser
  const page = await context.newPage();

  //Navigate to Rediffmail email opening page
  await page.goto(
    "https://register.rediff.com/register/register.php?FormName=user_details",
  );
});

//test.only can be used to skip other test cases all spec file and run this one only.
//test.only('Fourth Playwright Test', async({page}) => {
//Skipping a test case
//test.skip('Fourth Playwright Test', async({page}) => {
test("Fourth Playwright Test", async ({ page }) => {
  //Navigate to Rediffmail email opening page
  await page.goto("https://www.google.co.in/");

  //Want to get the title of the landing page
  const titlePage = await page.title();

  //Print out the title
  console.log("Title of the page is " + titlePage);
});

/*NOTE: If multi spec file is present in tests folder , it will run it in parallel 
on firing the command 'npx playwright test'.*/
/*NOTE: Test cases in a spec fill will run in sequential mode on firing the command 'npx playwright test'.*/
