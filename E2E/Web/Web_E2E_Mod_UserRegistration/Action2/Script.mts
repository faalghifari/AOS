Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click
Reporter.ReportEvent micPass, "Web Logout", "Logout completed successfully"

