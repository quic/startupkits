# 5. Basic Setup Instructions

------------
`Attention!!!`
```warning
- Proceed step by step and Complete all Steps.
```

## 5.1 Download Tools and Resources
This section guides to review the files received from Quectel and download additional software tools required.

### 5.1.1 Identify Resources _(Quectel)_
   
   1. Software Development Kit(SDK)
      - SDK contains the source code and sample applications.
      - File Name: `ql-ol-extsdk.tar.gz`
   2. Quectel Toolchain
      - Compilers and tool chain required to build images and applications.
      - File Name: `RG500QEAAAR11A02M4G_OCPU_01.001.01.001-toolchain.tar.gz`
   3. Quectel Base Binaries/Firmware
      - Pre-built images/binaries required for RG500Q, will be used in Recovery.
      - File Name: `RG500QEAAAR11A02M4G_OCPU_01.001.01.001.zip`
   4. Quectel AT Binaries/Firmware
      - AT Binaries used to test AT commands.
      - File Name: `RG500QEAAAR11A02M4G_01.001.01.001.zip`
   5. USB Driver
      - RG500Q drivers for windows laptop
      - File Name: `Quectel_LTE_5G_Windows_USB_Driver_V2.1.zip`
   5. USB RMnet Driver
      - RG500Q RMnet drivers for USB modem connection.
      - File Name: `Quectel_LTE_Windows_USB_Driver_For_MBIM_V1.2.2.zip`
   6. QFlash Tool
      - Tool which runs in windows laptop and used flash the prebuilt images for first time or at recovery using emergency download mode(EDL)
      - File Name: `QFlash_V4.19_EN.zip`

### 5.1.2 Download Debugging Tools

  - The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you can use to run a variety of commands on a device.
  - Download ADB drivers from <a href="https://adb.clockworkmod.com/" target="_blank"> adb.clockworkmod.com </a>
    - <a href="https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi" target="_blank">https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi </a>
  - Download Platformtools version 29.0.6 from <a href="https://androidsdkmanager.azurewebsites.net/Platformtools" target="_blank"> https://androidsdkmanager.azurewebsites.net/   Platformtools </a>
    - <a href="https://dl.google.com/android/repository/platform-tools_r29.0.6-windows.zip" target="_blank">https://dl.google.com/android/repository/platform-tools_r29.0.6-windows.zip</a>
  - Download  <a href="https://mobaxterm.mobatek.net/download-home-edition.html" target="_blank">https://mobaxterm.mobatek.net/download-home-edition.html</a>
    - <a href="https://download.mobatek.net/2312023031823706/MobaXterm_Installer_v23.1.zip" target="_blank">https://download.mobatek.net/2312023031823706/MobaXterm&#95;Installer&#95;v23.1.zip</a>
  - Download Serial Monitor like Tera-Term application <a href="https://osdn.net/projects/ttssh2/downloads/72009/teraterm-4.105.exe/" target="_blank">Tera Term</a>

## 5.2 Setup Development Environment

This section guides with step by step procedure to setup the environment required for RG500Q evaluation board, includes setting up the folder structure and installing tools & drivers.

### 5.2.1 Create Folder Structure

Create the folder structure to setup SDK using the below command

 ```console
 mkdir C:\RG500Q\SW\Apps\ C:\RG500Q\SW\Built_Images\ C:\RG500Q\Tools
 ```

![N|Solid](../pics/RG500Q/rg500q-basic-instructions-folder-structure.jpg)

### 5.2.2 Setup RG500Q Folder Structure

This section will guide to copy all files in one folder, which is necessary to follow the remaining part of documentation.
   1. Copy the Downloaded files to RG500Q folder structure. 
    - Copy `ql-ol-extsdk.tar.gz` to `C:\RG500Q\SW\`
    - Copy `RG500QEAAAR11A02M4G_OCPU_01.001.01.001-toolchain.tar.gz` to `C:\RG500Q\SW\`
    - Copy `RG500QEAAAR11A02M4G_OCPU_01.001.01.001.zip` to `C:\RG500Q\SW\`
    - Copy `RG500QEAAAR11A02M4G_01.001.01.001.zip` to `C:\RG500Q\SW\`
    - Copy `QFlash_V4.19_EN.zip` to `C:\RG500Q\Tools\`
    - Copy `Quectel_LTE_5G_Windows_USB_Driver_V2.1.zip` to `C:\RG500Q\Tools\`
    - Copy `Quectel_LTE_Windows_USB_Driver_For_MBIM_V1.2.2.zip` to `C:\RG500Q\Tools\`
    - Copy `platform-tools_r29.0.6-windows.zip` to `C:\RG500Q\Tools\`
    - Copy `UniversalAdbDriverSetup.msi` to `C:\RG500Q\Tools\`
    - Copy `MobaXterm_Installer_v23.1.zip` to `C:\RG500Q\Tools\`
    - Copy `teraterm-4.105.exe` to `C:\RG500Q\Tools\`
   2. Compare and verify the contents of `RG500Q`<br>
    📦RG500Q<br>
    ┣ 📂SW<br>
    ┃ ┣ 📂Apps<br>
    ┃ ┣ 📂Built&#95;Images<br>
    ┃ ┣ 📜ql-ol-extsdk.tar.gz<br>
    ┃ ┣ 📜RG500QEAAAR11A02M4G&#95;OCPU&#95;01.001.01.001-toolchain.tar.gz<br>
    ┃ ┣ 📜RG500QEAAAR11A02M4G&#95;OCPU&#95;01.001.01.001.zip<br>
    ┃ ┗ 📜RG500QEAAAR11A02M4G&#95;01.001.01.001.zip<br>
    ┗ 📂Tools<br>
    ┃ ┣ 📜QFlash&#95;V4.19&#95;EN.zip<br>
    ┃ ┣ 📜platform-tools&#95;r29.0.6-windows.zip<br>
    ┃ ┣ 📜UniversalAdbDriverSetup.msi<br>
    ┃ ┣ 📜MobaXterm&#95;Installer&#95;v23.1.zip<br>
    ┃ ┣ 📜teraterm-4.105.exe<br>
    ┃ ┣ 📜Quectel&#95;LTE&#95;5G&#95;Windows&#95;USB&#95;Driver&#95;V2.1.zip<br>
    ┃ ┗ 📜Quectel&#95;LTE&#95;Windows&#95;USB&#95;Driver&#95;For&#95;MBIM&#95;V1.2.2.zip<br>

### 5.2.3 Setup QFlash Tool

- Extract `C:\RG500Q\Tools\QFlash_V4.19_EN.zip` to `C:\RG500Q\Tools\QFlash_V4.19_EN` and verify the installation
    - `C:\RG500Q\Tools\QFlash_V4.19.exe`

### 5.2.4 Setup USB Driver,RMnet Driver and Tera-Term

- Install the USB Driver,RMnet driver and verify the installation
    - `C:\RG500Q\Tools\Quectel_LTE_5G_Windows_USB_Driver_V2.1\setup.exe `
    - `C:\RG500Q\Tools\Quectel_LTE_Windows_USB_Driver_For_MBIM_V1.2.2\setup.exe `
- Install the Tera-Term application and verify the installation
    - `C:\RG500Q\Tools\teraterm-4.105.exe `

### 5.2.5 Setup Debugger Tools

1. Extract `C:\RG500Q\Tools\platform-tools_r29.0.6-windows.zip` to `C:\RG500Q\Tools\platform-tools` and verify the installation
    - `C:\RG500Q\Tools\platform-tools\adb.exe`
    - `C:\RG500Q\Tools\platform-tools\fastboot.exe`
    - Add above path to adb & fastboot location to __System Path__.
        - `Instructions`: <a href="https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/" target="_blank">www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/</a>
- Install the ADB drivers for RG500Q.
    - Install the `C:\RG500Q\Tools\UniversalAdbDriverSetup.msi`
- Extract `C:\RG500Q\Tools\MobaXterm_Installer_v23.1.zip` to `C:\RG500Q\Tools\MobaXterm_Installer_v23.1` Use default options to install
    - `C:\RG500Q\Tools\MobaXterm_Installer_v23.1\MobaXterm_Installer_v23.1.exe`
- Alternative ADB driver Instructions Videos
    - <a href="https://youtu.be/gOT2JlqNjuA" target="_blank">https://youtu.be/gOT2JlqNjuA</a>
    - <a href="https://youtu.be/WVIzOsQBLRc?t=75" target="_blank">https://youtu.be/WVIzOsQBLRc?t=75</a>

------------