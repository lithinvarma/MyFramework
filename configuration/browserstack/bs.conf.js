const fs = require("fs");
const allure = require("allure-commandline");
var currentdate = new Date();
var path ="/"+currentdate.getDate()+"-"+
    + currentdate.getMonth()+"-" +
    + currentdate.getFullYear()+"/"+currentdate.getHours()+":"+currentdate.getMinutes()
function y()
{
    const fs = require("fs");

    var data=fs.readFileSync("/Users/lithin/WebstormProjects/MyFramework/tenv/remote-env.json")

    const users = JSON.parse(data);
    var x=JSON.stringify(users.products.MYT.android.bs_app_path)

return x
}
exports.config = {

    user: process.env.BROWSERSTACK_USERNAME || 'username',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'key',

    updateJob: false,
    specs: [
        '/Users/lithin/WebstormProjects/MyFramework/mobile/tests/*.js'
    ],
    exclude: [],

    capabilities: [{
        project: "FrameTest",
        build: 'Lithin',
        name: 'first_test',
        device: 'One Plus 8',
        os_version: "10.0",
        app: process.env.BROWSERSTACK_APP_ID || y(),
        'browserstack.debug': true
    }],

    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 20000
    },
    // see also: https://webdriver.io/docs/dot-reporter
    reporters:[['allure', {
        outputDir: 'testReports'+path,
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate','testReports'+path, '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterTest:async function (
        test,
        context, { error, result, duration, passed, retries }
    ) {
        // take a screenshot anytime a test fails and throws an error

        await browser.takeScreenshot();
    },
};
