# 5. Basic Setup Instructions

------------
`Attention!!!`
```warning
- Proceed step by step and Complete all Steps.
```

## 5.1 Download Tools and Resources
This section guides to review the files received from Quectel and download additional software tools required.

### 5.1.1 Identify Resources _(Quectel)_
   
   1. Software Development Kit (SDK)
      - SDK contains the source code and sample applications.
      - File Name: `SC66_Android10.0_Quectel_SDK_r008_20200604.tar.gz`
   2. Quectel Base Binaries/Firmware
      - Pre-built images/binaries required for SC66, will be used in Recovery.
      - File Name: `SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update.zip`
   3. QFIL Tool
      - Tool which runs in Windows machine and used flash the prebuilt images for first time or at recovery using emergency download mode(EDL)
      - File Name: `qpst.win.2.7_installer_00488.1.zip`
   4. Custom UEFI Image
      - xbl.elf bin file is required to bringup the display in boot loader.

### 5.1.2 Download Debugging Tools

  - The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you can use to run a variety of commands on a device.
  - Download ADB drivers from <a href="https://adb.clockworkmod.com/" target="_blank"> adb.clockworkmod.com </a>
    - <a href="https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi" target="_blank">https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi </a>
  - Download Platformtools version 29.0.6 from <a href="https://androidsdkmanager.azurewebsites.net/Platformtools" target="_blank"> https://androidsdkmanager.azurewebsites.net/   Platformtools </a>
    - <a href="https://dl.google.com/android/repository/platform-tools_r29.0.6-windows.zip" target="_blank">https://dl.google.com/android/repository/platform-tools_r29.0.6-windows.zip</a>
  - Download  <a href="https://mobaxterm.mobatek.net/download-home-edition.html" target="_blank">https://mobaxterm.mobatek.net/download-home-edition.html</a>
    - <a href="https://download.mobatek.net/2312023031823706/MobaXterm_Installer_v23.1.zip" target="_blank">https://download.mobatek.net/2312023031823706/MobaXterm&#95;Installer&#95;v23.1.zip</a>

## 5.2 Setup Development Environment

This section guides with step by step procedure to setup the environment required for SC66 evaluation board, includes setting up the folder structure and installing tools & drivers.

### 5.2.1 Create Folder Structure

Create the folder structure to setup SDK using the below command

 ```console
 mkdir C:\SC66\SW\Apps\ C:\SC66\SW\Built_Images\ C:\SC66\Tools
 ```

![N|Solid](../pics/SC66/sc66-file-format.jpg)

### 5.2.2 Setup SC66 Folder Structure

This section will guide to copy all files in one folder, which is necessary to follow the remaining part of documentation.
   1. Copy the Downloaded files to SC66 folder structure. 
    - Copy `SC66_Android10.0_Quectel_SDK_r008_20200604.tar.gz` to `C:\SC66\SW\`
    - Copy `SC66ENAR03A01_BP01.001_Android10.0.0.01.001_update.zip` to `C:\SC66\SW\`
    - Copy `sc66-qdn_relv1.0.zip` to `C:\SC66\SW\`
    - Copy `xbl.elf` to `C:\SC66\SW\Built_Images\`
    - Copy `qpst.win.2.7_installer_00488.1.zip` to `C:\SC66\Tools\`
    - Copy `platform-tools_r29.0.6-windows.zip` to `C:\SC66\Tools\`
    - Copy `UniversalAdbDriverSetup.msi` to `C:\SC66\Tools\`
    - Copy `MobaXterm_Installer_v23.1.zip` to `C:\SC66\Tools\`
   2. Compare and verify the contents of `SC66`<br>
    📦SC66<br>
    ┣ 📂SW<br>
    ┃ ┣ 📂Apps<br>
    ┃ ┣ 📂Built&#95;Images<br>
    ┃ ┃ ┗ 📜xbl.elf<br>
    ┃ ┣ 📜SC66&#95;Android10.0&#95;Quectel&#95;SDK&#95;r008&#95;20200604.tar.gz<br>
    ┃ ┣ 📜SC66ENAR03A01&#95;BP01.001&#95;Android10.0.0.01.001&#95;update.zip<br>
    ┃ ┗ 📜sc66-qdn&#95;relv1.0.zip<br>
    ┗ 📂Tools<br>
    ┃ ┣ 📜qpst.win.2.7&#95;installer&#95;00488.1.zip<br>
    ┃ ┣ 📜platform-tools&#95;r29.0.6-windows.zip<br>
    ┃ ┣ 📜UniversalAdbDriverSetup.msi<br>
    ┃ ┣ 📜MobaXterm&#95;Installer&#95;v23.1.zip<br>

### 5.2.3 Setup QFIL Tool

 - Extract `C:\SC66\Tools\qpst.win.2.7_installer_00488.1.zip` to `C:\SC66\Tools\qpst.win.2.7_installer_00488.1` and verify the installation
    - `C:\SC66\Tools\QPST.2.7.488.1.exe`

### 5.2.4 Setup Debugger Tools

- Extract `C:\SC66\Tools\platform-tools_r29.0.6-windows.zip` to `C:\SC66\Tools\platform-tools` and verify the installation
    - `C:\SC66\Tools\platform-tools\adb.exe`
    - `C:\SC66\Tools\platform-tools\fastboot.exe`
    - Add above path to adb & fastboot location to __System Path__.
        - `Instructions`: <a href="https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/" target="_blank">www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/</a>
- Install the ADB drivers for SC66.
    - Install the `C:\SC66\Tools\UniversalAdbDriverSetup.msi`
- Extract `C:\SC66\Tools\MobaXterm_Installer_v23.1.zip` to `C:\SC66\Tools\MobaXterm_Installer_v23.1` Use default options to install
    - `C:\SC66\Tools\MobaXterm_Installer_v23.1\MobaXterm_Installer_v23.1.exe`
- Alternative ADB driver Instructions Videos
    - <a href="https://youtu.be/gOT2JlqNjuA" target="_blank">https://youtu.be/gOT2JlqNjuA</a>
    - <a href="https://youtu.be/WVIzOsQBLRc?t=75" target="_blank">https://youtu.be/WVIzOsQBLRc?t=75</a>
  

------------