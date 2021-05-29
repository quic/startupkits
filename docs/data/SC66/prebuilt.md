# 10. Flashing using Prebuilt Images

------------
####`Optional Session`

__10.1 Flashing Prebuilt images using scripts__
   - Extract Prebuilt Images `C:\Rel01\SW\Prebuilt_Imgs_Rel01.zip` to `C:\Rel01\SW\Prebuilt_Imgs_Rel01`

__10.2 Start Download__
####`Attention!!`
```warning
Disconnect all adb devices from windows machine(eg: android devices, phones, other evk’s)
Connect only ONE EC25 device to PC and check with command “adb devices” is detected
Install adb & fastboot drivers if required. Read Instructions`
```
   - Option1 : Load to the evaluation kit
```console
cd c:\Rel01\SW\Prebuilt_Imgs_Rel01
load.bat
```
__10.3 Load Completed__

![N|Solid](../pics/SC66/sc66-load-prebuilt1.jpg)

__10.5 Test Low Speed Peripherals__ 
   - <a href="#" target="_blank" onclick="LoadPage(9);return false;">Click here for instructions</a>

__10.5 Optional Emergency Download(Flash using QFIL)__
####`WARNING!! Please be sure before performing this procedure, Only for special use cases.`
```warning
   - Used to download for first time, Firmware Recovery & Factory downloading procedure
   - Need to load the images again after recovery to get complete functionality.
   - <a href="#" target="_blank" onclick="LoadPage(11);return false;">Click here for instructions</a>
```
------------