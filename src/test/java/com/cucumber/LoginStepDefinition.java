package com.cucumber;

import cucumber.annotation.en.And;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.runtime.PendingException;

public class LoginStepDefinition {

    // Class
    @Given("^Open the browser$")
    public void openTheBrowser() {

        System.out.println("My Browser is opening");
    }

    @When("^Enter the URL$")
    public void enterTheURL() {
        System.out.println("User is entering the URL");
    }

    @And("^Enter the username and password$")
    public void enterTheUsernameAndPassword() {
        System.out.println("User is entering the akhil and akhil"); //harcoded
    }


    @And("^click on login button$")
    public void clickOnLoginButton() {
        System.out.println("User is clicking on login button");
    }

    @Then("^User should be able to login in the home page$")
    public void userShouldBeAbleToLoginInTheHomePage() {

        System.out.println("user is navigating to home page");
    }

    @And("^Enter the username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void enterTheUsernameAndPassword(String username, String password) {

        //m chahta hu ki username and password ki value feature se aaye
        System.out.println("user is entering the username" + username + "password" + password);
    }
}
