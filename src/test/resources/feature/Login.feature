@Anup @Login
Feature: Login Page

  Scenario: Validate User should be able to login with valid credentials
    Given Open the browser
    When Enter the URL
    And Enter the username and password
    And click on login button
    Then User should be able to login in the home page

  Scenario Outline: Validate User should be able to login with valid credentials
    Given Open the browser
    When Enter the URL
    And Enter the username "<username>" and password "<password>"
    And click on login button
    Then User should be able to login in the home page

    Examples:
    |username| password|
    |akhil   |akhil    |


  Scenario Outline: Validate User should not be able to login with invalid credentials
    Given Open the browser
    When Enter the URL
    And Enter the username "<username>" and password "<password>"
    And click on login button
    Then User should be able to login in the home page

    Examples:
      |username| password|
      |@@@     |akhil    |


  Scenario: Validate User should not be able to login with invalid credentials
    Given Open the browser
    When Enter the URL
    And Enter the invalid username and password
    And click on login button
    Then Error message should get display

  Scenario: Validate User should not be able to login with invalid credentials
    Given Open the browser
    When Enter the URL
    And Enter the invalid username and password
    And click on login button
    Then Error message should get display