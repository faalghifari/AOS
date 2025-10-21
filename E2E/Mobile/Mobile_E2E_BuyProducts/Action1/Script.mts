AIUtil.SetContext Device("device")
Device("Device").App("Advantage Shopping").MobileObject("Main Menu").Tap
AIUtil("profile").Click
Device("Device").App("Advantage Shopping").MobileEdit("User Name").Set "rndqaogya"
Device("Device").App("Advantage Shopping").MobileEdit("Password").SetSecure "68f793a59f8f7620e7ff9555266bcebd53574937ab1f1097"
Device("Device").App("Advantage Shopping").MobileButton("LOGIN").Tap
Device("Device").App("Advantage Shopping").MobileButton("Yes").Tap
Device("Device").App("Advantage Shopping").SetBarcodeSimulationMode True
Device("Device").App("Advantage Shopping").SimulateAuthentication "Success"


