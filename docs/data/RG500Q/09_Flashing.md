# 9. Flashing Instructions

------------

## 9.1 Load Image (Fastboot)

This section guides how to flash generated images using `load.bat` in fastboot mode.
 
-  Execute below commands in windows command prompt.  

```console
cd c:\RG500Q\SW\Built_images
tar -xf RG500Q.zip
load.bat
```
`Attention!!!`
```warning
Disconnect all adb devices from windows machine (eg: android devices, phones, other evk's)`
Connect only ONE RG500Q device to PC and check with command “adb devices” is detected`
```

![N|Solid](../pics/RG500Q/rg500q-flashing-flash-images.jpg)

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