# 9. Application download

------------

## 9.1 Load APP's binary using QEFS explorer

 - Use QEFS Explorer to flash the built binary on to dev kit<br>.
 ![N|Solid](../pics/BG96/bg96-qefs1.jpg)
  - Connect BG96 dev kit to PC. When the module is ready, the port enumeration will be available in Device Manager, as shown below. The `DM port (COM32)` will be used as the communication port between QEFS Explorer and BG96<br>
  ![N|Solid](../pics/BG96/bg96-qefs2.jpg)
  - Click File->"Device", the DM port will be shown, as illustrated in the screenshots below<br>.
  ![N|Solid](../pics/BG96/bg96-qefs3.jpg)<br>
  ![N|Solid](../pics/BG96/bg96-qefs4.jpg)<br>
  ![N|Solid](../pics/BG96/bg96-qefs5.jpg)<br>
  - Load the binary using QEFS Explorer from the below directory
     - `C:\BG96\SW\BG96MAR04A02M1G_01.002.01.002\SDK\Quectel_BG96_QuecOpen_SDK_Package_V4.2.4\SDK\bin`
  - select the binary files
   `oem_app_path.ini` and `build_quectel_demo_app.bat_xxxx.bin` drag and drop to QEFS explorer to flash the files on to the board<br>
       ![N|Solid](../pics/BG96/bg96-qefs6.jpg)<br>
     ![N|Solid](../pics/BG96/bg96-qefs7.jpg)<br>
   - File uploaded successfully, uploaded files can be seen in the directory<br>
![N|Solid](../pics/BG96/bg96-qefs8.jpg) 

  - Load Completed

 
------------


