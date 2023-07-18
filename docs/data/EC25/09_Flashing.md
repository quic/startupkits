# 9. Flashing Instructions

------------

## 9.1 Load Image (Fastboot)

This section guides how to flash generated images using `load.bat` in fastboot mode.

-  Execute below commands in windows command prompt.

```console
cd c:\EC25\SW\Built_images
tar -xf EC25.zip
load.bat
```
`Attention!!`
```warning
Disconnect all adb devices from windows machine (eg: android devices, phones, other evk's)`
Connect only ONE EC25 device to PC and check with command “adb devices” is detected`
```

![N|Solid](../pics/EC25/ec25-flashing-flash-images.jpg)

**Load Completed**
<br>

## 9.2 Optional Emergency Download _(QFlash)_

`WARNING!! Please be sure before performing this procedure, Only for special use cases.`
```warning
   - Used to download for first time, Firmware Recovery & Factory downloading procedure
   - Need to load the images again after recovery to get complete functionality.
```
<a href="#" target="_blank" onclick="LoadPage(13);return false;">Click here for instructions</a>

------------