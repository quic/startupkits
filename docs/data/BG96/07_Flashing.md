# 7. Flashing Instructions using Qflash

------------

There are two firmware flashing methods using QFLASH which should be done only once as below.
- First time factory image or latest firmware upgrade using ``DM port ``
- Emergency download mode will be done only when the board is crashed using ``QDLoader 9008 Port``

## 7.1 First time factory image or latest firmware upgrade process

`Attention!!!`
```warning
Firmware can be upgraded using QFLASH tool.Strictly this procedure should be followed `only once` 
for flashing first time factory image or when the latest firmware release is available from quectel.
If already devkit is with latest factory image,skip this below procedure and move on to the next section.
```
### 7.1.1 Set up dev kit
   - Connect BG96 devkit to PC using micro USB cable.  

### 7.1.2 Launch QFlash and Configure
   - Launch `C:\BG96\Tools\QFlash_V4.19_EN\QFlash_V4.19_EN.exe`
   - Select ``DM port`` for first method & ``QDLoader 9008 Port`` for second method (Check device manager for the port numbers)
   - Set `Baud rate to 460800`
   - Click on  ``Load FW Files`` and select any one file as shown below,it will automatically picks all the files in the update folder.
      - `C:\BG96\SW\BG96MAR04A02M1G_01.002.01.002\update\acdb.mbn`<br>
    ![N|Solid](../pics/BG96/bg96-QFlash-selectfile.jpg)

### 7.1.3 Download
  - Click on ``Start`` to download Factory Images to the device<br>
![N|Solid](../pics/BG96/bg96-QFlash.jpg)

  - Need to load the images again after recovery to get complete functionality.

```warning
Might require to restart the board
```

## 7.2 Optional Emergency Download Procedure

`Attention!!!`
```warning
 This procedure should be followed only when the board is crashed and unable to detect any of the Ports(AT,DM & NMEA) in device manager
```
### 7.2.1 Switch to EDL Mode
   - Short USB BOOT pin(J11) using jumper to enter into EDL mode on development Kit.<br>
   ![N|Solid](../pics/BG96/bg96-edl.jpg)
   - For flashing firmware follow the above procedure in section 6.1.
   - After downloading the firmware remove the jumper from EDL connector and restart.

------------
