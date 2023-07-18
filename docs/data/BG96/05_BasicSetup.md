# 5. Basic Setup Instructions

------------
`Attention!!!`
```warning
- Proceed step by step and Complete all Steps.
```

## 5.1 Identify downloaded resources<br>
This section guides to review the files received from Quectel,Qualcomm creatpoint & additional tools downloaded.

### 5.1.1 Identify the Quectel Downloaded Resources
   1. Software Development Kit(SDK)
      - SDK contains the source code and sample applications.
      - File Name: `Quectel_BG96_QuecOpen_SDK_Package_V4.2.4.zip`
      - File path: `C:\BG96\SW\BG96MAR04A02M1G_01.002.01.002\SDK\Quectel_BG96_QuecOpen_SDK_Package_V4.2.4`
   2. Quectel base binaries
      - Pre-built images/binaries required for BG96, will be used in Recovery.
      - File Name: `update`
      - File path: `C:\BG96\SW\BG96MAR04A02M1G_01.002.01.002\update`
   3. USB Driver
      - BG96 drivers for Windows
      - File Name: `Quectel_LTE&5G_Windows<br>_USB_Driver_V2.24.zip`
      - File path: `C:\BG96\Tools\Quectel_LTE&5G_Windows_USB_Driver_V2.24`
   4. QFlash Tool
      - Tool which runs in windows machine is used for first time flashing or firmware upgrade and also for recovery using emergency download mode(EDL)
      - File Name: `QFlash_V4.19_EN.zip`
      - File path: `C:\BG96\Tools\QFlash_V4.19_EN`
   5. QEFS Explorer Tool
      - Use QEFS Explorer to flash the built apps binary on to dev kit
      - File Name: `QEfs_V1.0.4.zip`
      - File path: `C:\BG96\Tools\QEfs_V1.0.4`

### 5.1.2 Identify the Qualcomm Downloaded Resources
 - LLVM Compiler, used for compilation of applications.
 - File Name: `Snapdragon_SD_LLVM_ARM_WIN_4_0_Installer_41720_1.zip`
 - File path: `C:\BG96\Compile Tools\LLVM\4.0.3`

## 5.2 Download Additional tools<br>

### 5.2.1 Download python 2.7
Open the Python download page from the <a href="https://www.python.org/download/releases/2.7/"target="_blank">link to download</a> to download the corresponding revision of Python for Windows/Linux.

### 5.2.2 Download python 3.6.1
Download python 3.6.1,<a href="https://www.python.org/ftp/python/3.6.1/python-3.6.1-amd64.exe"target="_blank">click here </a>

### 5.2.3 Download Debugging Tools
Download Serial Monitor like Tera-Term application,<a href="https://osdn.net/projects/ttssh2/downloads/72009/teraterm-4.105.exe/" target="_blank">click here</a>

## 5.3 Setup Development Environment<br>
This section guides with step by step procedure to setup the environment required for BG96 development, including setting up the folder structure and installing tools & drivers.

### 5.3.1 Create the BG96 folder structure in windows command prompt<br>
 ```console
 mkdir C:\BG96\SW\ C:\BG96\Compile_tools\ C:\BG96\Tools\
 ```
![N|Solid](../pics/BG96/bg96-folder-creation.jpg)

### 5.3.2 Setup BG96 folder structure

   1. Copy the Downloaded files to BG96 folder structure.
    - Copy `BG96MAR04A02M1G_01.002.01.002.zip` and extract to `C:\BG96\SW\`
    - Copy `Quectel_LTE&5G_Windows_USB_Driver_V2.24.zip` and extract to `C:\BG96\Tools\`
    - Copy `QFlash_V5.4_EN.zip` and extract to `C:\BG96\Tools\`
    - Copy `QCOM_V1.6.zip` and extract to `C:\BG96\Tools\`
    - Copy `QEfs_V1.0.4.zip` and extract to `C:\BG96\Tools\`
    - Copy `teraterm-4.105` to `C:\BG96\Tools\`
    - Copy `Python2.7` and extract to `C:\BG96\compile Tools\`
    - Copy `Snapdragon_SD_LLVM_ARM_WIN_4_0_Installer_41720_1.zip` and extract to `C:\BG96\Compile Tools\LLVM\4.0.3\`<br>
      __Note:__ Copy entire compiler files inside the Snapdragon_SD_LLVM_ARM_WIN_4_0_Installer_41720_1 to C:\BG96\compile Tools\LLVM\4.0.3 & maintain folder structure same as below<br>
    ![N|Solid](../pics/BG96/bg96-llvm-folder.jpg)<br>
    
   2. Compare and verify the contents of BG96 folder<br>
📦BG96<br>
 ┣📂SW<br>
 ┃  ┣📂BG96MAR04A02M1G&#95;01.002.01.002<br>
 ┃  ┃  ┣📂update<br>
 ┃  ┃  ┃  ┗📜firmware files<br>
 ┃  ┃  ┣📂SDK<br>
 ┃  ┃  ┃  ┣📂Quectel&#95;BG96&#95;QuecOpen&#95;SDK&#95;Package&#95;V4.2.4<br>
 ┃  ┃  ┃  ┣📂SDK<br>
 ┃  ┃  ┃  ┣📂bin<br>
 ┃  ┃  ┃  ┗📜build&#95;quectel&#95;demo&#95;app.bat<br>
 ┣📂Compile&#95;tools<br>
 ┃  ┣📂LLVM<br>
 ┃  ┃  ┣📂4.0.3<br>
 ┃  ┃  ┃  ┗📜Tool&#95;chain&#95;files<br>
 ┣📂Tools<br>
 ┃  ┣📜Quectel&#95;LTE&#95;Windows&#95;USB&#95;Driver&#95;For&#95;MBIM&#95;V1.2.2.zip<br>
 ┃  ┣📜QFlash&#95;V5.4.zip<br>
 ┃  ┣📜QEfs&#95;V1.0.4.exe<br>
 ┃  ┗📜teraterm-4.105.exe<br>
## 5.4 Set up Downloaded Tools<br>
This section guides with setting-up downloaded tools

### 5.4.1 Setup USB Drivers
- Install the USB Driver and verify the installation<br>
   `C:\BG96\Tools\Quectel_LTE&5G_Windows_USB_Driver_V2.24\setup.exe`

### 5.4.2 Setup QFlash Tool
  - QFlash is used for firmware upgrade & available from below path<br>
    `C:\BG96\Tools\QFlash_V4.19_EN\QFlash_V4.19_EN.exe`

### 5.4.3 Setup QEFS Explorer Tool
- QEFS Explorer to flash the built apps binary on to dev kit & available from below path<br>
  `C:\BG96\Tools\QEfs_V1.0.4\QEfs_V1.0.4.exe`         

### 5.4.4 Setup Tera-Term
- TeraTerm is a serial port monitor software to view debug logs
- Install the Tera-Term application and verify the installation and <br>
   `C:\BG96\Tools\TeraTerm\teraterm-4.105.exe` 

## 5.5 Build & compilation setup<br>
Software setup requirements for compiling & building.
<table class="pinout">
<tr><th>Component signals</th><th>Tool chain Required for Building  Source</th><th>Terminal</th><th>Python</th><th>Supported Build Hosts</th></tr>
<tr><td>QuecOpen</td><td>LLVM 4.0.3</td><td>Command Prompt</td><td>Python 2.7</td><td>Windows / Linux</td></tr>
</table><br>

### 5.5.1 LLVM Compiler set up
- LLVM 4.0.3 is a toolchain for building source & is placed in the below path.<br>
 `C:\BG96\Compile Tools\LLVM\4.0.3`

### 5.5.2 Python setup
- Python27 is used for for building source & is placed in the below path.<br>
`C:\BG96\compile Tools\Python 27`

## 5.6 Debug setup<br>
Debug can be done using below methods
- Teraterm
- QFOLGS method(optional method) & will be discussed in device setup section<br>

------------