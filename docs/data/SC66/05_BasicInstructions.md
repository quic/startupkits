# 5. Basic Setup Instructions

------------
####`ATTENTION!!!`
```warning
- Proceed step by step and Complete all Steps.
```
This section guides to review the files received from quectel and download additional software tools required.

__5.1 Identify Resources__ ___(Quectel)___
   
   1. Software Development Kit (SDK)
      - SDK contains the source code and sample applications.
      - File Name: `SC66_Android10.0_Quectel_SDK_r008_20200604.tar.gz`
   2. Quectel Base Binaries
      - Pre-built images/binaries required for RG500Q, will be used in Recovery.
      - File Name: `SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update.zip`
   3. QFIL Tool
      - Tool which runs in Windows machine and used flash the prebuilt images for first time or at recovery using emergency download mode(EDL)
      - File Name: `qpst.win.2.7_installer_00488.1.zip`

__5.2 Download Supporting Scripts__
  - Download the load.bat from <a href="https://mirrors.edge.kernel.org/caf_patches/external/startupkit/sc66/SC66-Relv1.1/load.bat" target="_blank">https://mirrors.edge.kernel.org/caf_patches/external/startupkit/sc66/SC66-Relv1.1/load.bat</a>
    - Use `Save As` option to save as `load.bat`
    - `load.bat` script contains fastboot commands to flash different binaries.

__5.3 Download Debugging Tools__ 
  - Download ADB drivers from <a href="https://adb.clockworkmod.com/" target="_blank"> adb.clockworkmod.com </a>
    - <a href="https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi" target="_blank">https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi </a>
  - Download Platformtools version 29.0.6 from <a href="https://androidsdkmanager.azurewebsites.net/Platformtools" target="_blank"> https://androidsdkmanager.azurewebsites.net/   Platformtools </a>
    - <a href="https://dl.google.com/android/repository/platform-tools_r29.0.6-windows.zip" target="_blank">https://dl.google.com/android/repository/platform-tools_r29.0.6-windows.zip</a>
  - Download  <a href="https://mobaxterm.mobatek.net/download-home-edition.html" target="_blank">https://mobaxterm.mobatek.net/download-home-edition.html</a>
    - <a href="https://download.mobatek.net/2012020021813110/MobaXterm_Installer_v20.1.zip" target="_blank">https://download.mobatek.net/2012020021813110/MobaXterm_Installer_v20.1.zip</a>

__5.4 Create the SC66 folder struture in windows command prompt__

 ```console
 mkdir C:\SC66\SW\Apps\ C:\SC66\SW\Built_Images\ C:\SC66\Tools
 ```

![N|Solid](../pics/SC66/sc66-file-format.jpg)

__5.5 Setup SC20 folder struture__

   1. Copy the Downloded files to SC66 folder struture. 
    - Copy `SC66_Android10.0_Quectel_SDK_r008_20200604.tar.gz` to `C:\SC66\SW\`
    - Copy `SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update.zip` to `C:\SC66\SW\`
    - Copy `sc66-qdn_relv1.0.zip` to `C:\SC66\SW\`
    - Copy `load.bat` to `C:\SC66\SW\Built_Images\`
    - Copy `qpst.win.2.7_installer_00488.1.zip` to `C:\SC66\Tools\`
    - Copy `platform-tools_r29.0.6-windows.zip` to `C:\SC66\Tools\`
    - Copy `UniversalAdbDriverSetup.exe` to `C:\SC66\Tools\`
    - Copy `MobaXterm_installer_20.1.zip` to `C:\SC66\Tools\`
   2. Compare and verify the contents of `SC66`<br>
    📦SC66<br>
    ┣ 📂SW<br>
    ┃ ┣ 📂Apps<br>
    ┃ ┣ 📂Built&#95;Images<br>
    ┃ ┃ ┗ 📜load.bat<br>
    ┃ ┣ 📜SC66&#95;Android10.0&#95;Quectel&#95;SDK&#95;r008&#95;20200604.tar.gz<br>
    ┃ ┣ 📜SC66ENAR03A01&#95;BP01.001&#95;Android10.0.0.01.001&#95;update.zip<br>
    ┃ ┗ 📜sc66-qdn&#95;relv1.0.zip<br>
    ┗ 📂Tools<br>
    ┃ ┣ 📜qpst.win.2.7&#95;installer&#95;00488.1.zip<br>
    ┃ ┣ 📜platform-tools&#95;r29.0.6-windows.zip<br>
    ┃ ┣ 📜UniversalAdbDriverSetup.exe<br>
    ┃ ┣ 📜MobaXterm&#95;installer&#95;20.1.zip<br>

__5.6 Setup QFIL Tool__
   - Extract `C:\SC66\Tools\qpst.win.2.7_installer_00488.1.zip` to `C:\SC66\Tools\qpst.win.2.7_installer_00488.1` and verify the installation
    - `C:\SC66\Tools\QPST.2.7.488.1.exe`

__5.7 Setup Debugging Tools__
- Extract `C:\SC66\Tools\platform-tools_r29.0.6-windows.zip` to `C:\SC66\Tools\platform-tools` and verify the installation
    - `C:\SC66\Tools\platform-tools\adb.exe`
    - `C:\SC66\Tools\platform-tools\fastboot.exe`
    - Add above path to adb & fastboot location to __System Path__.
        - `Instructions`: <a href="https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/" target="_blank">www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/</a>
- Install the ADB drivers for SC66.
    - Install the `C:\SC66\Tools\UniversalAdbDriverSetup.exe`
- Extract `C:\SC66\Tools\MobaXterm_Installer_v20.1.zip` to `C:\SC66\Tools\MobaXterm_Installer_v20.1` Use default options to install
    - `C:\SC66\Tools\MobaXterm_Installer_v20.1\MobaXterm_Installer_v20.1.exe`
- Alternative ADB driver Instructions Videos
    - <a href="https://youtu.be/gOT2JlqNjuA" target="_blank">https://youtu.be/gOT2JlqNjuA</a>
    - <a href="https://youtu.be/WVIzOsQBLRc?t=75" target="_blank">https://youtu.be/WVIzOsQBLRc?t=75</a>
  

------------