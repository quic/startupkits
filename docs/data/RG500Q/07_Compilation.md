
# 7. Compilation Instructions

------------

This section guides with step by step procedure to setup build environment, upload sdk & toolchain, compilation and download images.

## 7.1 Download SDK Manager 

```console
cd /local/mnt/workspace/
wget https://mirrors.edge.kernel.org/caf_patches/external/startupkit/rg500q/RG500Q-Relv1.1/sdk_manager.sh
```

![N|Solid](../pics/RG500Q/rg500q-wget.jpg)

## 7.2 Updating Permission

```console
chmod +x sdk_manager.sh
```
![N|Solid](../pics/RG500Q/rg500q-chmod.jpg)

## 7.3 Build SDK

- Run `sdk_manager.sh` to extract sdk & toolchain, apply patches and build all images
- Select `1` for `Setup New Build` from the main menu. 

```console
./sdk_manager.sh
```
![N|Solid](../pics/RG500Q/rg500q-sdk-manager-build-sh.jpg)

## 7.4 Installing Packages

#####`ATTENTION!!!`
```warning
Please verify the instructions and proceed with confirmation.
```

![N|Solid](../pics/RG500Q/rg500q-packages.jpg)
![N|Solid](../pics/RG500Q/rg500q-packages1.jpg)

## 7.5 Download CAF Resources

![N|Solid](../pics/RG500Q/rg500q-lftp.jpg)

## 7.6 Setup Folder Structure 

![N|Solid](../pics/RG500Q/rg500q-setup-root.jpg)

### 7.6.1 Upload SW Packages to Linux Machine 

#####`ATTENTION!!!`
```warning
This section demonstrates, user have to upload SW Packages manually to the Linux machine from windows machine.
```
  - Start & connect to SFTP explorer using mobaXterm
  - Upload files using SFTP session created in previous step

```code
  From : C:\RG500Q\SW\RG500QEAAAR11A02M4G_OCPU_01.001.01.001-toolchain.tar.gz and  C:\RG500Q\SW\ql-ol-extsdk.tar.gz (Windows Environment)
  To   : /local/mnt/workspace/RG500Q/patches  (Linux Environment)
```
![N|Solid](../pics/RG500Q/rg500q-upload.jpg)
 
### 7.6.2 Continue the Setup Folder Structure 

- Continue with setup once toolchain and sdk are uploaded successfully.

![N|Solid](../pics/RG500Q/rg500q-setup-root1.jpg)

## 7.7 Setup Tool Chain

![N|Solid](../pics/RG500Q/rg500q-tool-chain.jpg)

## 7.8 Setup SDK

![N|Solid](../pics/RG500Q/rg500q-setup-sdk1.jpg)
![N|Solid](../pics/RG500Q/rg500q-setup-sdk2.jpg)

## 7.9 Setup GIT

#####`ATTENTION!!!`
```warning
This step may take few minutes to complete
```

![N|Solid](../pics/RG500Q/rg500q-git.jpg)
![N|Solid](../pics/RG500Q/rg500q-git1.jpg)

## 7.10 Applying the Patches

![N|Solid](../pics/RG500Q/rg500q-apply-patches.jpg)
![N|Solid](../pics/RG500Q/rg500q-apply-patches1.jpg)

## 7.11 Build Images

#####`ATTENTION!!!`
```warning
This step may take few hours to complete
```
![N|Solid](../pics/RG500Q/rg500q-build-images.jpg)
![N|Solid](../pics/RG500Q/rg500q-build-images1.jpg)

## 7.12 Finish Setup

-	Enter `y` for Finishing Build Setup.	

![N|Solid](../pics/RG500Q/rg500q-finishing-build.jpg)

__Note:__ Select `100` for quit the build script `Quit` from the main menu. 

## 7.14 Download Built Images

Download built images from linux machine to windows machine using SFTP

```code
From  : /local/mnt/workspace/RG500Q_SDK/ql-ol-sdk/target/ (Linux)
To    : C:\RG500Q\SW\Built_Images (Windows)
```
__`List of Images`__
<table class="pinout">
<tr><th>Images</th><th>Image Names</th><th>Description</th></tr>
<tr><td>Boot</td><td> sdxprairie-boot.img</td><td>Kernel Image</td></tr>
<tr><td>System</td><td>sdxprairie-sysfs.ubi</td><td>System Images</td></tr>
<tr><td>ABOOT</td><td>abl.elf</td><td>Bootloader Image</td></tr>
</table><br>

```warning
Use MobaXterm UI to download images from ubuntu
  - Select the files, drag and drop to desired folder
  - Total 3 files, select all 3(use Ctrl key to select) and download
```

![N|Solid](../pics/RG500Q/rg500q-download.jpg)

--------------------