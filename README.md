# WebdriverIO v6 Component Based Functional Testing Framework

This automation framework has been implemented using WebdriverIO v6 using a Component-based Page Object Model.
This is framework I created and have been maintaining. The boilerplate used can be seen in my Github
profile here: https://github.com/joaocjesus/wdio6-components-boilerplate.

## Depop Tech Task

***Task requirements:***
- Build skeleton test framework
- Test login process
    - Plan
    - Implement tests

**Test Plan**
- Verify ability to load the Login page
- Verify Login page contains the right components
- Verify login fields behave as expected
    - able to fill them in
    - validation messages are shown if fields are not populated or contain wrong details
- Verify that user is able to login
- Cover large and small (responsive) screens

**Framework skeleton and test implementation**

- In this repository you can currently find two branches (`master` and `feature/login_test`)
- The skeleton of the framework is set in master branch with no tests in that branch.
- The work done to test the login page was committed to the `feature/login_test` branch.
- To easily review the work done on top of the framework I've submitted a Pull Request with the tests that can be found here:
[Tests pull request](https://github.com/joaocjesus/depop/pull/1/files)
 
**Out of scope**
- Not testing Login link in header to navigate to Login page (should be in a separate header test)
- Not testing when login attempts > 10 (due to 1 hour restrictions per 10 attempts)
    

## Prerequisites
- Git (https://git-scm.com)
- Node.js 12 (https://nodejs.org)
- Yarn (https://yarnpkg.com)
- Chrome browser (with matched driver version in `config/wdio.conf.js`)
    - Currently set to version 85. Please modify wdio.conf.js if you require a different chromedriver version
    - For `chromedriver` version information please visit: https://chromedriver.chromium.org/
- Login credentials
    - Currently configured with user johncjesus_depop
    - Please do change the credentials in .env file located in project root folder

## Setup
- Clone this repository locally (eg: `git clone git@github.com:joaocjesus/depop.git`)
- To download dependencies run `yarn` inside the project folder.

## Test run

- Run `yarn test:<size>`
  - `yarn test:large` _(for large screen)_
  - `yarn test:small` _(for small screen)_
  - Check package.json for the available scripts or run the following command in a terminal session within the project folder:
    
    `grep "scripts" -A 50 ./package.json | sed '/}/ q'`

## Test Result

- Once the test run is complete, the following folders will be created within the project folder:
  - errorShots: failure screenshots
  - logs: selenium standalone logs
  - allure-results: to be used by allure to generate reports
    - run `yarn allure:<size>` to generate and open the allure report for that breakpoint/browser size
    - eg: `yarn allure:large`
  
## Run a single test file

- Add `--spec <test filter>` to the command line when triggering a test run
  - eg: `yarn test:large --spec news*`

## Debugging tests

- to debug tests from VSCode create a launch.json file and add below configuration
```
         {
            "type": "node",
            "request": "launch",
            "protocol": "inspector",
            "port": 5859,
            "name": "WebdriverIO",
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/wdio",
            "windows": {
                "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/wdio.cmd"
            },
            "timeout": 1000000,
            "cwd": "${workspaceRoot}",
            "args":[
                 "wdio.conf.js"
            ]
          }
```
- Enable `debug` and `execArgv` in wdio.conf.js

## WebdriverIO documentation

For general documentation please visit: https://webdriver.io/docs/gettingstarted.html

For syntax, commands and APIs please visit: https://webdriver.io/docs/api.html

----

**Please [contact me](mailto:johncjesus@gmail.com) for more information about**:

- Component based Page Object Model
- Abstraction layer
- Code best practices used
- Project structure
