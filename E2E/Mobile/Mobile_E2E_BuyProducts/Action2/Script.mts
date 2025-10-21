Device("Device").App("Advantage Shopping").MobileObject("LAPTOPS Category").Tap
Device("Device").App("Advantage Shopping").MobileList("gridViewProducts").Select 10
Device("Device").App("Advantage Shopping").MobileLabel("COLOR").Tap
Device("Device").App("Advantage Shopping").MobileObject("MobileObject").Tap
Device("Device").App("Advantage Shopping").MobileButton("ADD TO CART").Tap
Device("Device").App("Advantage Shopping").MobileLabel("1").Tap
Device("Device").App("Advantage Shopping").MobileButton("CHECKOUT (PAY $1,799.00)").Tap
Device("Device").App("Advantage Shopping").MobileButton("PAY NOW").Tap
Device("Device").App("Advantage Shopping").MobileLabel("Your cart was successful").Check CheckPoint("Your cart was successful")
