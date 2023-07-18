
# 7. Compilation Instructions

------------

This section guides with step by step procedure to setup build environment, upload sdk & toolchain, compilation and download images.

## 7.1 Download SDK Manager 

```console
cd /local/mnt/workspace/
wget --no-check-certificate https://git.codelinaro.org/clo/startup-kits/patches/-/raw/master/sc66/SC66-Relv2.0/sdk_manager.sh
```

![N|Solid](../pics/SC66/sc66-compilation-sdkmgr1.jpg)

## 7.2 Updating Permission

```console
chmod +x sdk_manager.sh
```
![N|Solid](../pics/SC66/sc66-compilation-sdkmgr2.jpg)

## 7.3 Build SDK

- Run `sdk_manager.sh` to extract sdk & toolchain, apply patches and build all images
- Select `1` for `Setup New Build` from the main menu. 

```console
./sdk_manager.sh
```
![N|Solid](../pics/SC66/sc66-compilation-sdkmgr3.jpg)

## 7.4 Installing Packages

`Attention!!!`
```warning
Please verify the instructions and proceed with confirmation.
```

![N|Solid](../pics/SC66/sc66-compilation-install-tools1.jpg)
![N|Solid](../pics/SC66/sc66-compilation-install-tools2.jpg)

## 7.5 Setup GIT

![N|Solid](../pics/SC66/sc66-compilation-setup-git.jpg)

## 7.6 Download CLO Resources

![N|Solid](../pics/SC66/sc66-compilation-download-clo.jpg)

## 7.7 Setup Folder Structure

```warning
Verification of SDK and other packages uploaded (Section 6.4) are part of this step,
Please ensure necessary files are uploaded to linux machine or upload when it is instructed.
```
![N|Solid](../pics/SC66/sc66-compilation-setup-root.jpg)

## 7.8 Setup QDN Patches

![N|Solid](../pics/SC66/sc66-compilation-setup-qdn-patches.jpg)

## 7.9 Setup SDK

`Attention!!!`
```warning
This step may take few hours to complete, Downloading ~57GB of data from CLO.
```

![N|Solid](../pics/SC66/sc66-compilation-setup-sdk1.jpg)
![N|Solid](../pics/SC66/sc66-compilation-setup-sdk2.jpg)

### 7.9.1 Setup SDK Failure

This section guides with procedure to recover from failure using retry mechanism, incase of SDK setup failure due to reasons such as repo initialization failures, repo download failures, partial downloads and network issues. Recommendation for such events are retrying the SDK setup instructions as prompted by the `sdkmanager.sh` .

![N|Solid](../pics/SC66/sc66-compilation-retry-repo.jpg)

## 7.10 Applying Patches1

![N|Solid](../pics/SC66/sc66-compilation-apply-patches1-start.jpg)
![N|Solid](../pics/SC66/sc66-compilation-apply-patches1-end.jpg)

## 7.11 Applying Patches2

![N|Solid](../pics/SC66/sc66-compilation-apply-patches2.jpg)

## 7.12 Applying QDN Patches

![N|Solid](../pics/SC66/sc66-compilation-apply-patches3-start.jpg)
![N|Solid](../pics/SC66/sc66-compilation-apply-patches3-end.jpg)

## 7.13 Build Images

`Attention!!!`
```warning
This step may take few hours to complete
```
![N|Solid](../pics/SC66/sc66-compilation-build-all1.jpg)
![N|Solid](../pics/SC66/sc66-compilation-build-all2.jpg)

### 7.13.1 Build Failure

This section guides with procedure to recover from failure using retry mechanism, incase of build failure due to reasons such as more number of threads created, some packages are not created in last iteration and missing images. Recommendation for such events are retrying the compilation/build steps as prompted by the `sdkmanager.sh` . To debug further, use logs available in the Build Directory(for eg. `/local/mnt/workspace/SC66/`) .

![N|Solid](../pics/SC66/sc66-compilation-retry-build.jpg)

## 7.14 Finish Setup

-	Enter `y` for Finishing Build Setup.	

![N|Solid](../pics/SC66/sc66-compilation-finish-build.jpg)

__Note:__ Select `100` for quit the build script `Quit` from the main menu. 

## 7.15 Download Built Images

Download built images from linux machine to windows machine using SFTP

```code
From  : /local/mnt/workspace/SC66/Android_SDK_SC66/bin/SC66.zip (Linux)
To    : C:\SC66\SW\Built_Images (Windows)
```
__`SC66.zip Contents`__
<table class="pinout" style="width:60%">
<tr><th style="width:10%">Sl No</th><th style="width:30%">File Name</th><th style="width:20%">Description</th></tr>
<tr><td>1</td><td>boot.img</td><td>Boot Image</td></tr>
<tr><td>2</td><td>super.img</td><td>Super Image</td></tr>
<tr><td>3</td><td>userdata.img</td><td>Userdata Image</td></tr>
<tr><td>4</td><td>vbmeta.img</td><td>Vendor Image</td></tr>
<tr><td>5</td><td>vbmeta_system.img</td><td>Vendor Image</td></tr>
<tr><td>6</td><td>dtbo.img</td><td>dtbo Image</td></tr>
<tr><td>7</td><td>abl.elf</td><td>Bootloader Image</td></tr>
<tr><td>8</td><td>load.bat</td><td>Flashing Script</td></tr>
</table><br>

```warning
Use MobaXterm UI to download images from ubuntu
  - Select the files, drag and drop to desired folder
```

![N|Solid](../pics/SC66/sc66-compilation-image-download.jpg)

## 7.16 Rebuilding Images (_Optional Step_)

This section demonstrates, The procedure to rebuild the images in events such as enabling additional features, modifying Bootloader/Kernel/System/Userdata/Vendor images, adding/removing some patches, addition of a new applications and modifying the DTSI.

1. Run the `./sdk_manager.sh`  in linux server.
2. Select `3` option  for `Make All`
3. Select `5` option for `Prepare Final Images`

![N|Solid](../pics/SC66/sc66-compilation-makeallimages-begin.jpg)
![N|Solid](../pics/SC66/sc66-compilation-makeallimages-end.jpg)
![N|Solid](../pics/SC66/sc66-compilation-preparefinalimg.jpg)

--------------------