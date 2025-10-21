Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set DataTable("username", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure DataTable("password_hash", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btn").Click
Reporter.ReportEvent micPass, "Web Login", "Login completed successfully "

