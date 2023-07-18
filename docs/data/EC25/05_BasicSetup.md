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
      - SDK contains the cross compiler and it has the complete source code instruction to be executed in the build.
      - File Name: `EC25EFAR06A01M4G_OCPU_01.001.01.001_SDK.tar.bz2`
   2. Quectel base binaries
      - Pre-built images/binaries required for EC25, will be used in Recovery.
      - File Name: `EC25EFAR06A01M4G_OCPU_01.001.01.001.zip`
   3. QFlash Tool
      - Tool which runs in Windows machine and used to flash the prebuilt images for first time or at recovery using emergency download mode(EDL) 
      - File Name: `QFlash_V5.2_EN.zip` 
   4. USB Driver
      - USB driver for EC25
      - File Name: `Quectel_LTE_5G_Windows_USB_Driver_V2.1.zip`

------------

### 5.1.2 Download Debugging Tools

  - Download ADB drivers from <a href="https://adb.clockworkmod.com/" target="_blank"> adb.clockworkmod.com </a>
    - <a href="https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi" target="_blank">https://github.com/koush/adb.clockworkmod.com/releases/latest/download/UniversalAdbDriverSetup.msi </a>
  - Download Platformtools version 29.0.6 from <a href="https://androidsdkmanager.azurewebsites.net/Platformtools" target="_blank"> https://androidsdkmanager.azurewebsites.net/   Platformtools </a>
    - <a href="https://dl.google.com/android/repository/platform-tools_r29.0.6-windows.zip" target="_blank">https://dl.google.com/android/repository/platform-tools_r29.0.6-windows.zip</a>
  - Download  <a href="https://mobaxterm.mobatek.net/download-home-edition.html" target="_blank">https://mobaxterm.mobatek.net/download-home-edition.html</a>
    - <a href="https://download.mobatek.net/2312023031823706/MobaXterm_Installer_v23.1.zip" target="_blank">https://download.mobatek.net/2312023031823706/MobaXterm&#95;Installer&#95;v23.1.zip</a>
  - Download Serial Monitor like Tera-Term application <a href="https://osdn.net/projects/ttssh2/downloads/72009/teraterm-4.105.exe/" target="_blank">Tera Term</a>

## 5.2 Setup Development Environment

This section guides with step by step procedure to setup the environment required for EC25 evaluation board, includes setting up the folder structure and installing tools & drivers.

### 5.2.1 Create Folder Structure

Create the folder structure to setup SDK using the below command

 ```console
 mkdir C:\EC25\SW\Apps\ C:\EC25\SW\Built_Images\ C:\EC25\Tools
 ```

![N|Solid](../pics/EC25/ec25-basic-instructions-folder-structure.jpg)

### 5.2.2 Setup EC25 Folder Structure

This section will guide to copy all files in one folder, which is necessary to follow the remaining part of documentation.
   1. Copy the Downloaded files to EC25 folder structure. 
    - Copy `EC25EFAR06A01M4G_OCPU_01.001.01.001_SDK.tar.bz2` to `C:\EC25\SW\`
    - Copy `EC25EFAR06A01M4G_OCPU_01.001.01.001.zip` to `C:\EC25\SW\`
    - Copy `ec25-qdn_relv1.0.zip` to `C:\EC25\SW\`
    - Copy `QFlash_V5.2_EN.zip` to `C:\EC25\Tools\`
    - Copy `Quectel_LTE_5G_Windows_USB_Driver_V2.1.zip` to `C:\EC25\Tools\`
    - Copy `platform-tools_r29.0.6-windows.zip` to `C:\EC25\Tools\`
    - Copy `UniversalAdbDriverSetup.msi` to `C:\EC25\Tools\`
    - Copy `MobaXterm_Installer_v23.1.zip` to `C:\EC25\Tools\`
    - Copy `teraterm-4.105.exe` to `C:\EC25\Tools\`

   2. Compare and verify the contents of `EC25`<br>

    📦EC25<br>
    ┣ 📂SW<br>
    ┃ ┣ 📂Apps<br>
    ┃ ┣ 📂Built&#95;Images<br>
    ┃ ┣ 📜EC25EFAR06A01M4G&#95;OCPU&#95;01.001.01.001&#95;SDK.tar.bz2<br>
    ┃ ┣ 📜EC25EFAR06A01M4G&#95;OCPU&#95;01.001.01.001.zip<br>
    ┃ ┗ 📜ec25-qdn&#95;relv1.0.zip<br>
    ┗ 📂Tools<br>
    ┃ ┣ 📜QFlash&#95;V5.2&#95;EN.zip<br>
    ┃ ┣ 📜platform-tools&#95;r29.0.6-windows.zip<br>
    ┃ ┣ 📜UniversalAdbDriverSetup.msi<br>
    ┃ ┣ 📜MobaXterm&#95;Installer&#95;v23.1.zip<br>
    ┃ ┣ 📜teraterm-4.105.exe<br>
    ┃ ┗ 📜Quectel&#95;LTE&#95;5G&#95;Windows&#95;USB&#95;Driver&#95;V2.1.zip<br>

### 5.2.3 Setup QFlash Tool

- Extract `C:\EC25\Tools\QFlash_V5.2_EN.zip` to `C:\EC25\Tools\QFlash_V5.2_EN` and verify the installation
    - `C:\EC25\Tools\QFlash_V5.2.exe`

### 5.2.4 Setup USB Driver and Tera-Term

- Install the USB Driver and verify the installation
    - `C:\EC25\Tools\Quectel_LTE&5G_Windows_USB_Driver_V2.1\setup.exe `
- Install the Tera-Term application and verify the installation
    - `C:\EC25\Tools\teraterm-4.105.exe `

### 5.2.5 Setup Debugger Tools

- Extract `C:\EC25\Tools\platform-tools_r29.0.6-windows.zip` to `C:\EC25\Tools\platform-tools` and verify the installation
    - `C:\EC25\Tools\platform-tools\adb.exe`
    - `C:\EC25\Tools\platform-tools\fastboot.exe`
    - Add above path to adb & fastboot location to __System Path__.
        - `Instructions`: <a href="https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/" target="_blank">www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/</a>
- Install the ADB drivers for EC25.
    - Install the `C:\EC25\Tools\UniversalAdbDriverSetup.msi`
- Extract `C:\EC25\Tools\MobaXterm_Installer_v23.1.zip` to `C:\EC25\Tools\MobaXterm_Installer_v23.1` Use default options to install
    - `C:\EC25\Tools\MobaXterm_Installer_v23.1\MobaXterm_Installer_v23.1.exe`
- Alternative ADB driver Instructions Videos
    - <a href="https://youtu.be/gOT2JlqNjuA" target="_blank">https://youtu.be/gOT2JlqNjuA</a>
    - <a href="https://youtu.be/WVIzOsQBLRc?t=75" target="_blank">https://youtu.be/WVIzOsQBLRc?t=75</a>
  
------------