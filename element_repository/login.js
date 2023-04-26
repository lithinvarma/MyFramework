
class LoginPage{

    get mobileInput () { return $('~Telephone input') }
    get continue () { return $('~MYT_LoginScreen_GenerateOTP') }
    get otpInput(){return $('~MYT_OTPScreen_OtpInputField')}
    get countryFlag(){return $('android.widget.ImageView')}
    get searchCountry(){return $('~MYT_LoginScreen_TextInputCountrySelection')}
    get selectCountry(){return $$('//android.widget.TextView[contains(@text,United Kingdom)]')}
}
module.exports=new LoginPage()
