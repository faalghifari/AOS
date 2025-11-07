Device("Device").App("Advantage Shopping").MobileObject("Main Menu").Tap
AIUtil.SetContext Device("device")
AIUtil("profile").Click
Device("Device").App("Advantage Shopping").MobileEdit("User Name").Set DataTable("username", dtGlobalSheet)
Device("Device").App("Advantage Shopping").MobileEdit("Password").SetFocus
Device("Device").App("Advantage Shopping").MobileEdit("Password").SetSecure DataTable("username", dtGlobalSheet)
'Device("Device").App("Advantage Shopping").MobileButton("LOGIN").Tap
