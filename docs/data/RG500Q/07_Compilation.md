
# 7. Compilation Instructions

------------

This section guides with step by step procedure to setup build environment, upload sdk & toolchain, compilation and download images.

## 7.1 Download SDK Manager 

```console
cd /local/mnt/workspace/
wget --no-check-certificate https://git.codelinaro.org/clo/startup-kits/patches/-/raw/master/rg500q/RG500Q-Relv2.0/sdk_manager.sh
```

![N|Solid](../pics/RG500Q/rg500q-compilation-sdkmgr1.jpg)

## 7.2 Updating Permission

```console
chmod +x sdk_manager.sh
```
![N|Solid](../pics/RG500Q/rg500q-compilation-sdkmgr2.jpg)

## 7.3 Build SDK

- Run `sdk_manager.sh` to extract sdk & toolchain, apply patches and build all images
- Select `1` for `Setup New Build` from the main menu. 

```console
./sdk_manager.sh
```
![N|Solid](../pics/RG500Q/rg500q-compilation-setup-new.jpg)

## 7.4 Installing Packages

`Attention!!!`
```warning
Please verify the instructions and proceed with confirmation.
```

![N|Solid](../pics/RG500Q/rg500q-compilation-install-tools.jpg)

## 7.5 Setup GIT

![N|Solid](../pics/RG500Q/rg500q-compilation-setup-git.jpg)

## 7.6 Download CLO Resources

![N|Solid](../pics/RG500Q/rg500q-compilation-download-clo.jpg)

## 7.7 Setup Folder Structure 
```warning
Verification of SDK and other packages uploaded (Section 6.4) are part of this step,
Please ensure necessary files are uploaded to linux machine or upload when it is instructed.
```

![N|Solid](../pics/RG500Q/rg500q-compilation-setup-root.jpg)

## 7.8 Setup Tool Chain

![N|Solid](../pics/RG500Q/rg500q-compilation-setup-tool-chain.jpg)

## 7.9 Setup SDK

![N|Solid](../pics/RG500Q/rg500q-compilation-setup-sdk1.jpg)
![N|Solid](../pics/RG500Q/rg500q-compilation-setup-sdk2.jpg)

## 7.10 Applying Patches

![N|Solid](../pics/RG500Q/rg500q-compilation-apply-patches1.jpg)
![N|Solid](../pics/RG500Q/rg500q-compilation-apply-patches2.jpg)

## 7.11 Build Images

`Attention!!!`
```warning
This step may take few hours to complete
```
![N|Solid](../pics/RG500Q/rg500q-compilation-build-all1.jpg)
![N|Solid](../pics/RG500Q/rg500q-compilation-build-all2.jpg)

### 7.11.1 Build Failure

This section guides with procedure to recover from failure using retry mechanism, incase of build failure due to reasons such as more number of threads created, some packages are not created in last iteration and missing images. Recommendation for such events are retrying the compilation/build steps as prompted by the `sdkmanager.sh` . To debug further, use logs available in the Build Directory(for eg. `/local/mnt/workspace/RG500Q/`)

![N|Solid](../pics/RG500Q/rg500q-compilation-build-retry.jpg)

## 7.12 Finish Setup

-	Enter `y` for Finishing Build Setup.	

![N|Solid](../pics/RG500Q/rg500q-compilation-finish-build.jpg)

__Note:__ Select `100` for quit the build script `Quit` from the main menu. 

## 7.13 Download Built Images

Download built images from linux machine to windows machine using SFTP

```code
From  : /local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/bin/RG500Q.zip (Linux)
To    : C:\RG500Q\SW\Built_Images (Windows)
```
__`RG500Q.zip Contents`__
<table class="pinout" style="width:60%">
<tr><th style="width:10%">Sl No</th><th style="width:30%">File Name</th><th style="width:20%">Description</th></tr>
<tr><td>1</td><td> sdxprairie-boot.img</td><td>Kernel Image</td></tr>
<tr><td>2</td><td>sdxprairie-sysfs.ubi</td><td>System Images</td></tr>
<tr><td>3</td><td>abl.elf</td><td>Bootloader Image</td></tr>
<tr><td>4</td><td>load.bat</td><td>Flashing Script</td></tr>
</table><br>

```warning
Use MobaXterm UI to download images from ubuntu
  - Select the files, drag and drop to desired folder
```

![N|Solid](../pics/RG500Q/rg500q-compilation-image-download.jpg)

## 7.14 Rebuilding Images (_Optional Step_)
This section demonstrates, The procedure to rebuild the images in events such as enabling additional features, modifying kernal/boot/system images, removing some patches, addition of a new application and modifying the KConfig.

1. Run the `./sdk_manager.sh`  in linux server.
2. Select `3` option  for `Make All`
3. Select `5` option for `Prepare Final Images`

![N|Solid](../pics/RG500Q/rg500q-compilation-rebuild1.jpg)
![N|Solid](../pics/RG500Q/rg500q-compilation-rebuild2.jpg)
![N|Solid](../pics/RG500Q/rg500q-compilation-rebuild3.jpg)

--------------------