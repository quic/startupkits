# 8. Flashing Instructions

------------

## 8.1 Load Image (Fastboot)

This section guides how to flash generated images using `load.bat` in fastboot mode.
 
-  Execute below commands in windows command prompt.  

```console
cd c:\SC66\SW\Built_images
tar -xf SC66.zip
load.bat
```
`Attention!!!`
```warning
Disconnect all adb devices from windows machine (eg: android devices, phones, other evk’s)`
Connect only ONE SC66 device to PC and check with command “adb devices” is detected`
Install adb & fastboot drivers if required.
```

![N|Solid](../pics/SC66/sc66-flashing-flash-images.jpg)

**Load Completed**
<br>
## 8.2 Optional Emergency Download _(QFIL)_

`WARNING!! Please be sure before performing this procedure, Only for special use cases.`
```warning
   - Used to download for first time, Firmware Recovery & Factory downloading procedure
   - Need to load the images again after recovery to get complete functionality.
```
<a href="#" target="_blank" onclick="LoadPage(10);return false;">Click here for instructions</a>

------------