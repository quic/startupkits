# 14. Emergency Download Procedure

------------

__14.1 Switch to EDL Mode__
   - Turn On EDL Switch in the Development Kit to ON/EDL `(SW3)`

![N|Solid](../pics/EC25/ec25-edl-sw.jpg)

__14.2 Extract Images__
   - `C:\EC25\SW\EC25EFAR06A01M4G_OCPU_01.001.01.001.zip` to `C:\EC25\SW\EC25EFAR06A01M4G_OCPU_01.001.01.001`

__14.3 Launch QFlash__
   - ``QFlash Tool`` availabe in released package ``C:\EC25\Tools\QFlash_V5.2_EN.zip``
   - Extarct &amp; Launch the application with ``QFlash_V5.2.exe`` 

   1. Select `COM Port` (Check Device Manager for ``Quectel QDLoader 9008`` port)
   2. Set ``Baudrate:460800``
   3. Select ``Load FW Files`` to Load Factory Images from ``C:\EC25\SW\EC25EFAR06A01M4G_OCPU_01.001.01.001\update\appsboot.mbn``
   4. Click on ``Start`` to download Factory Images to the device.

![N|Solid](../pics/EC25/ec25-edl.jpg)

####`Turn OFF EDL Switch and Restart Device`

------------