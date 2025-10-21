Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set Parameter("userId") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btn").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Reporter.ReportEvent micPass, "Web Login", "Login completed successfully "
