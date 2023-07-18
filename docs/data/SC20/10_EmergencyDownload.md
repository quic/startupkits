# 10. Emergency Download Procedure

------------

## 10.1 Switch to EDL Mode

   - Turn On EDL Switch in the Development Kit to ON/EDL `USB BOOT`

![N|Solid](../pics/SC20/sc20-edl-hw-cfg.jpg)

## 10.2 Extract Images
   - `C:\SC20\SW\SC20ESAR06A09_BP01.009_update.zip` to `C:\SC20\SW\SC20ESAR06A09_BP01.009_update`

## 10.3 Launch QFIL and Configure
   - Launch `C:\Program Files (x86)\Qualcomm\QPST\bin\QFIL.exe`
   - Select EDL 9008 Port
   - Select Flat Build Option
   - Select Programmer Path
      - `C:\SC20\SW\SC20ESAR06A09_BP01.009_update\prog_emmc_firehose_8909_ddr.mbn`
   - Load following XML
      - `rawprogram_unsparse.xml`
      - `patch0.xml`

## 10.4 Download

![N|Solid](../pics/SC20/sc20-edl-flashing-proc.jpg)

`Turn OFF EDL Switch and Restart Device`


`Attention!!!`
```warning
Note: Might require to restart PC or QFIL or device incase of firehose error
```

------------