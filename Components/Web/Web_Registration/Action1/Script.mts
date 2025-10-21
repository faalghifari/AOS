Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CREATE NEW ACCOUNT").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameRegisterPage").Set Parameter("userId") @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailRegisterPage").Set Parameter("email") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordRegisterPage").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("confirm_passwordRegisterPage").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("first_nameRegisterPage").Set Parameter("firstName") @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("last_nameRegisterPage").Set Parameter("lastName") @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("phone_numberRegisterPage").Set Parameter("phone") @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebList("countryListboxRegisterPage").Select Parameter("country") @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cityRegisterPage").Set Parameter("city") @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("addressRegisterPage").Set Parameter("address") @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("State / Province / Region").Click Parameter("state") @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("state_/_province_/_regionRegis").Set Parameter("state") @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("postal_codeRegisterPage").Set Parameter("postal") @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("allowOffersPromotion").Set Parameter("allowOffersPromotion") @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("i_agree").Set Parameter("agree")
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("register_btn").Click
Reporter.ReportEvent micPass, "Web Registration", "Create account completed successfully"

