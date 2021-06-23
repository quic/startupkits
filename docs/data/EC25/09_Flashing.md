# 9. Flashing Instructions

------------

__9.1 Load Images__

Load the Image using script and windows command prompt
```console
cd c:\EC25\SW\Built_Images
load.bat
```
#### `Attention!!!`
```warning
- Disconnect all adb devices from windows machine(eg: android devices, phones, other evk’s)
- Connect only ONE EC25 device to PC and check with command “adb devices” is detected
- Install adb & fastboot drivers if required.
- Press PWR-KEY switch SW1(at back side of dev-kit) to boot the device
```
![N|Solid](../pics/EC25/ec25-load1.jpg)

```warning
Please note, Press any key to 
   - Continue flash images
   - Continue to reboot device and boot normally
```

__Load Completed Sucessfully... Proceed with Device Setup!!!__<br><br>


__9.2 Emergency Download using <a href="#" onclick="LoadPage(13);return false;">QFLash</a> (Optional)__
<br>

__``Warning!!``__
```warning
Please be sure before performing Emergency Download procedure, Only for special use cases
```
   - Used to download for first time, Firmware Recovery & Factory downloading procedure
   - Need to load the images again after recovery to get complete functionality

------------