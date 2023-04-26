const {MYTController}=require('/Users/lithin/WebstormProjects/MyFramework/controllers/main.js')
const log=require('log4js')
const allureReporter=require('@wdio/allure-reporter').default;
const percyScreenshot = require('@percy/appium-app')
describe('MYT Login Test', function () {
    it("Login",async ()=>{
        const tmyt=new MYTController()
        var mobile=await tmyt.api.getSettings("contact_no")
       await percyScreenshot('Home Screen');
        await allureReporter.addStep("Entering Mobile number")
        await tmyt.LoginPage.mobileInput.addValue("44"+"07889977708")
       await allureReporter.addStep("Clicking continue")
        await tmyt.LoginPage.continue.click()
        var otp=await tmyt.db.fetch("query","row")
        console.log(otp)
      await  allureReporter.addStep("Entering otp :"+ otp)

        await tmyt.LoginPage.otpInput.addValue(otp)

    });

});
