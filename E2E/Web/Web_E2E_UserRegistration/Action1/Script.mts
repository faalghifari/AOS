Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CREATE NEW ACCOUNT").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameRegisterPage").Set DataTable("username", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailRegisterPage").Set DataTable("email", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordRegisterPage").SetSecure DataTable("password_hash", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("confirm_passwordRegisterPage").SetSecure DataTable("password_hash", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("first_nameRegisterPage").Set DataTable("first_name", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("last_nameRegisterPage").Set DataTable("first_name", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("phone_numberRegisterPage").Set DataTable("phone_number", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebList("countryListboxRegisterPage").Select DataTable("country", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cityRegisterPage").Set DataTable("city", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("addressRegisterPage").Set DataTable("address", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("state_/_province_/_regionRegis").Set DataTable("state_province_region", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("state_/_province_/_regionRegis").Set DataTable("state_province_region", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("postal_codeRegisterPage").Set DataTable("postal_code", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("allowOffersPromotion").Set DataTable("receive_offers", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("i_agree").Set DataTable("agreed_to_terms", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("register_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Check CheckPoint("UserMenu")
Reporter.ReportEvent micPass, "Web Registration", "Create account completed successfully"
 @@ hightlight id_;_196908_;_script infofile_;_ZIP::ssf3.xml_;_

