# 11. Emergency Download Procedure

------------

__11.1 Switch to EDL Mode__
   - Turn On EDL mode using a jumper on J1 in the Development Kit

![N|Solid](../pics/SC66/sc66_emergency_download.jpg)

__11.2 Extract Images__
   - `C:\SC66\SW\SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update.zip` to `C:\SC66\SW\SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update`

__11.3 Launch QFIL and Configure__
   - Launch `C:\Program Files (x86)\Qualcomm\QPST\bin\QFIL.exe`
   - Select EDL 9008 Port
   - Select Flat Build Option
   - Select Programmer Path
      - `C:\SC66\SW\SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update\SC66ENAR03A01_BP01.001V03_Android10.0.0.01.001V04_update\prog_emmc_firehose_8909_ddr.mbn`
   - Load following XML
      - `rawprogram_unsparse.xml`
      - `patch0.xml`

__11.4 Download__

![N|Solid](../pics/SC66/Emergency-download.jpg)

__Turn off EDL Switch and Restart Device__


####`Attention!!!`
```warning
Note: Might require to restart PC or QFIL or device incase of firehose error
```

__11.5 Turn of EDL Switch and Restart Device__
####`Note: Might require to restart PC or QFIL or device incase of firehose error`

------------