// @ts-check
const {Login}=require('/Users/lithin/WebstormProjects/MyFramework/element_repository/myt_login.js')
const {test} = require('/Users/lithin/WebstormProjects/MyFramework/configuration/browserstack/bs_fixture.js');
 test('Open url', async ({page}) => {
     const login = new Login(page);
     await page.goto('url')
     const number=await login.api.getSettings("api key")
     console.log(number)
     await login.entMobileNumber.fill("44"+number)
     await login.btnContinue.click()
     var otp=await login.db.fetch("query","row")
     await login.entOTP.fill(otp)
})
