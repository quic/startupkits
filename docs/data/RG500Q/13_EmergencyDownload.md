# 13. Emergency Download Procedure

------------

## 13.1 Switch to EDL Mode

   - Turn On EDL Switch in the Development Kit to ON/EDL `USB BOOT`

![N|Solid](../pics/RG500Q/rg500q-edl-sw.jpg)

## 13.2 Extract Images

   - `C:\RG500Q\SW\RG500QEAAAR11A02M4G_OCPU_01.001.01.001.zip` to `C:\RG500Q\SW\RG500QEAAAR11A02M4G_OCPU_01.001.01.001`

## 13.3 Flashing Firmware

   - __QFlash Tool__ available in released package `C:\RG500Q\Tools\QFlash_V4.19_EN.zip`
   - Extract and Launch the application `QFlash_V4.19.exe` 

   1. Select ![Com Port](../pics/RG500Q/rg500q-edl-comport.jpg) with `Quectel QDLoader 9008` port.
   2. Select ![Baud Rate](../pics/RG500Q/rg500q-edl-baudrate.jpg) with `460800`.
   3. Select ![Load FW Files](../pics/RG500Q/rg500q-edl-load-fw.jpg) to load factory images.
      -  Select `partition_complete_p4K_b256K.mbn` from `C:\RG500Q\SW\RG500QEAAAR11A02M4G_OCPU_01.001.01.001\RG500QEAAAR11A02M4G_OCPU_01.001V01.01.001V01\update\firehose`
   4. Select ![Start](../pics/RG500Q/rg500q-edl-start.jpg) to start download.

![N|Solid](../pics/RG500Q/rg500q-edl.jpg)

####`Turn OFF EDL Switch and Restart Device`

------------