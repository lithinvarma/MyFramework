// @ts-check
const {Login}=require('/Users/lithin/WebstormProjects/MyFramework/element_repository/myt_login.js')
const {test} = require('/Users/lithin/WebstormProjects/MyFramework/configuration/browserstack/bs_fixture.js');
 test('Open MYTWEB', async ({page}) => {
     const login = new Login(page);
     await page.goto('https://myt-sit.fhcdn.dev')
     const number=await login.api.getSettings("contact_no")
     console.log(number)
     await login.entMobileNumber.fill("44"+number)
     await login.btnContinue.click()
     var otp=await login.db.fetch("select otp from phone_auth where phone='07889977701';","otp")
     await login.entOTP.fill(otp)
})
