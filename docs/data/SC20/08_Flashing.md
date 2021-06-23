# 8. Flashing Instructions

------------

__8.1  Load the Image using script and windows command prompt__

Load the Images using script and windows command prompt
```console
cd c:\SC20\SW\Built_Images
load.bat
```
##### `Attention!!`
```warning
- Disconnect all adb devices from windows machine (eg: android devices, phones, other evk’s)`
- Connect only ONE SC20 device to PC and check with command “adb devices” is detected`
- Install adb & fastboot drivers if required.
```
__8.2  Load completed__

![N|Solid](../pics/SC20/sc20-load.jpg)

__8.3 Emergency Download using <a href="#" onclick="LoadPage(10);return false;">QFIL</a> (Optional)__
<br>

__``Warning!!``__
```warning
Please be sure before performing Emergency Download procedure, Only for special use cases
```
   - Used to download for first time, Firmware Recovery & Factory downloading procedure
   - Need to load the images again after recovery to get complete functionality

------------