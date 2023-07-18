# 10. Emergency Download Procedure

------------

## 10.1 Switch to EDL Mode
   - Turn On EDL mode using a jumper on J1 in the Development Kit

![N|Solid](../pics/SC66/sc66_emergency_download.jpg)

## 10.2 Extract Images
   - `C:\SC66\SW\SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update.zip` to `C:\SC66\SW\SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update`

## 10.3 Launch QFIL and Configure
   - Launch `C:\Program Files (x86)\Qualcomm\QPST\bin\QFIL.exe`
   - Select EDL 9008 Port
   - Select Flat Build Option
   - Select Programmer Path
      - `C:\SC66\SW\SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update\SC66ENAR03A01_BP01.001V03_Android10.0.0.01.001V04_update\prog_emmc_firehose_8909_ddr.mbn`
   - Load following XML
      - `rawprogram_unsparse.xml`
      - `patch0.xml`

## 10.4 Download

![N|Solid](../pics/SC66/Emergency-download.jpg)

`Turn OFF EDL Switch and Restart Device`


`Attention!!!`
```warning
Note: Might require to restart PC or QFIL or device incase of firehose error
```

------------