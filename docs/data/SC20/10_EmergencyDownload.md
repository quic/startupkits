# 10. Emergency Download Procedure

------------

__10.1 Switch to EDL Mode__
   - Turn On EDL Switch in the Development Kit to ON(SW2)

![N|Solid](../pics/SC20/sc20-edl-option.jpg)

__10.2 Extract Images__
   - `C:\SC20\SW\SC20ESAR06A09_BP01.009_update.zip` to `C:\SC20\SW\SC20ESAR06A09_BP01.009_update`

__10.3 Launch QFIL and Configure__
   - Launch `C:\Program Files (x86)\Qualcomm\QPST\bin\QFIL.exe`
   - Select EDL 9008 Port
   - Select Flat Build Option
   - Select Programmer Path
      - `C:\SC20\SW\SC20ESAR06A09_BP01.009_update\prog_emmc_firehose_8909_ddr.mbn`
   - Load following XML
      - `rawprogram_unsparse.xml`
      - `patch0.xml`

__10.4 Download__

![N|Solid](../pics/SC20/sc20-qfil.jpg)

__Turn off EDL Switch and Restart Device__


####`Attention!!!`
```warning
Note: Might require to restart PC or QFIL or device incase of firehose error
```

------------