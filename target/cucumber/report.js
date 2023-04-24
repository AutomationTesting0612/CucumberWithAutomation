$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('feature\Login.feature');
formatter.feature({
  "line": 2,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Anup"
    },
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Validate User should be able to login with valid credentials",
  "description": "",
  "id": "login-page;validate-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the URL",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to login in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.openTheBrowser()"
});
formatter.result({
  "duration": 212919600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enterTheURL()"
});
formatter.result({
  "duration": 340500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enterTheUsernameAndPassword()"
});
formatter.result({
  "duration": 82900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clickOnLoginButton()"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userShouldBeAbleToLoginInTheHomePage()"
});
formatter.result({
  "duration": 73600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate User should be able to login with valid credentials",
  "description": "",
  "id": "login-page;validate-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Anup"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Enter the URL",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter the username \"akhil\" and password \"akhil\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be able to login in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.openTheBrowser()"
});
formatter.result({
  "duration": 292100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enterTheURL()"
});
formatter.result({
  "duration": 216000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akhil",
      "offset": 20
    },
    {
      "val": "akhil",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition.enterTheUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 3437500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clickOnLoginButton()"
});
formatter.result({
  "duration": 309300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userShouldBeAbleToLoginInTheHomePage()"
});
formatter.result({
  "duration": 198800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate User should not be able to login with invalid credentials",
  "description": "",
  "id": "login-page;validate-user-should-not-be-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Anup"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Enter the URL",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Enter the username \"@@@\" and password \"akhil\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should be able to login in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.openTheBrowser()"
});
formatter.result({
  "duration": 104200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enterTheURL()"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@@@",
      "offset": 20
    },
    {
      "val": "akhil",
      "offset": 39
    }
  ],
  "location": "LoginStepDefinition.enterTheUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 152100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clickOnLoginButton()"
});
formatter.result({
  "duration": 263100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userShouldBeAbleToLoginInTheHomePage()"
});
formatter.result({
  "duration": 165600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validate User should not be able to login with invalid credentials",
  "description": "",
  "id": "login-page;validate-user-should-not-be-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Enter the URL",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Enter the invalid username and password",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Error message should get display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.openTheBrowser()"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enterTheURL()"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.clickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 42,
  "name": "Validate User should not be able to login with invalid credentials",
  "description": "",
  "id": "login-page;validate-user-should-not-be-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Enter the URL",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Enter the invalid username and password",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Error message should get display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.openTheBrowser()"
});
formatter.result({
  "duration": 1321600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enterTheURL()"
});
formatter.result({
  "duration": 70700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.clickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});