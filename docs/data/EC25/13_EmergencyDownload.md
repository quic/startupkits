# 13. Emergency Download Procedure

------------

## 13.1 Switch to EDL Mode

   - Turn On EDL Switch in the Development Kit to ON/EDL `(SW3)`

![N|Solid](../pics/EC25/ec25-edl-hw-cfg.jpg)

## 13.2 Extract Images

   - `C:\EC25\SW\EC25EFAR06A01M4G_OCPU_01.001.01.001.zip` to `C:\EC25\SW\EC25EFAR06A01M4G_OCPU_01.001.01.001`

## 13.3 Flashing Firmware

   - `__QFlash Tool__ available in released package ``C:\EC25\Tools\QFlash_V5.2_EN.zip``
   - Extract and Launch the application with ``QFlash_V5.2.exe``
   

   1. Select ![Com Port](../pics/EC25/ec25-edl-comport-cfg.jpg) with `Quectel QDLoader 9008` port.
   2. Select ![Baud Rate](../pics/EC25/ec25-edl-baudrate-cfg.jpg) with `460800`.
   3. Select ![Load FW Files](../pics/EC25/ec25-edl-load-firmware-button.jpg) to load factory images.
      -  Select `appsboot.mbn` from `C:\EC25\SW\EC25EFAR06A01M4G_OCPU_01.001.01.001\update\`
   4. Select ![Start](../pics/EC25/ec25-edl-start-button.jpg) to start download.

![N|Solid](../pics/EC25/ec25-edl-flashing-proc.jpg)

`Turn OFF EDL Switch and Restart Device`

------------