package runner;


//Where is my feature
//Where is my steps definition file
//We have to give the path of features file and step definition files so that runner class will
// get to know where is the implementation of feature file

import cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(dryRun = false, features = "feature", glue = "com.cucumber",
        tags = "@Login", format = {"pretty", "html:target/cucumber"}

)
public class CucumberRunner {

//    1. Login.feature
//    2. Scenario in login.feature
//    3. Create one step definition file
//    4. Given, When, And ka implementation
//    5. Created runner class
    //Where is my feature
    //Where is my steps definition file
    //We have to give the path of features file and step definition files so that runner class will
    // get to know where is the implementation of feature file



}
