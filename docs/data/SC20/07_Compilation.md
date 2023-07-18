
# 7. Compilation Instructions

------------

This section guides with step by step procedure to setup build environment, upload sdk & toolchain, compilation and download images.

## 7.1 Download SDK Manager 

```console
cd /local/mnt/workspace/
wget --no-check-certificate https://git.codelinaro.org/clo/startup-kits/patches/-/raw/master/sc20/SC20-Relv2.0/sdk_manager.sh
```

![N|Solid](../pics/SC20/sc20-compilation-sdkmgr1.jpg)

## 7.2 Updating Permission

```console
chmod +x sdk_manager.sh
```
![N|Solid](../pics/SC20/sc20-compilation-sdkmgr2.jpg)

## 7.3 Launch SDK Manager 
- Run `sdk_manager.sh` to extract sdk & toolchain, apply patches and build all images

```console
./sdk_manager.sh
```
![N|Solid](../pics/SC20/sc20-compilation-launch-sdkmanager.jpg)

### 7.3.1 Configure SDK Manager for 3.5 Inch LCD (_Optional Step_)

`Attention!!!`
```warning
Skip this section for 5 Inch LCD Display
By default, sdk_manager.sh is configured for 5 Inch LCD Display. Proceed with section 7.4 Build SDK.
```
Please follow the below steps, to configure the `sdk_manager.sh` for 3.5 Inch LCD Display.

1. Select `99` option to select `Show Config Menu`
2. Select `21` option to select `Update SDK Type` (**_Current Value_** in this section shows the current SDK type)
3. Select `2` option to configure SDK setup as `3.5" Display` (**_New Value_** in this section shows the modified SDK type)
4. Select `0` option to go back to `Main Menu`

![N|Solid](../pics/SC20/sc20-compilation-lcd3p5-setup.jpg)

## 7.4 Build SDK

- Select `1` for `Setup New Build` from the main menu. 

![N|Solid](../pics/SC20/sc20-compilation-setup-new.jpg)

## 7.5 Installing Packages

`Attention!!!`
```warning
Please verify the instructions and proceed with confirmation.
```

![N|Solid](../pics/SC20/sc20-compilation-install-tools1.jpg)
![N|Solid](../pics/SC20/sc20-compilation-install-tools2.jpg)

## 7.6 Setup GIT

![N|Solid](../pics/SC20/sc20-compilation-setup-git.jpg)

## 7.7 Download CLO Resources

![N|Solid](../pics/SC20/sc20-compilation-download-clo.jpg)

## 7.8 Download Open Source Patches

![N|Solid](../pics/SC20/sc20-compilation-download-patchesos.jpg)

## 7.9 Setup Folder Structure 

```warning
Verification of SDK and other packages uploaded (Section 6.4) are part of this step, 
Please ensure necessary files are uploaded to linux machine or upload when it is instructed.
```
![N|Solid](../pics/SC20/sc20-compilation-setup-root.jpg)

## 7.10 Setup QDN Patches 

![N|Solid](../pics/SC20/sc20-compilation-extracting-patches3.jpg)

## 7.11 Setup SDK

`Attention!!!`
```warning
This step may take few hours to complete, Downloading ~57GB of data from CLO.
```
![N|Solid](../pics/SC20/sc20-compilation-setup-sdk1.jpg)
![N|Solid](../pics/SC20/sc20-compilation-setup-sdk2.jpg)

### 7.11.1 Setup SDK Failure

This section guides with procedure to recover from failure using retry mechanism, incase of SDK setup failure due to reasons such as repo initialization failures, repo download failures, partial downloads and network issues. Recommendation for such events are retrying the SDK setup instructions as prompted by the `sdkmanager.sh` .

![N|Solid](../pics/SC20/sc20-compilation-retry-repo.jpg)

## 7.12 Applying Patches1

![N|Solid](../pics/SC20/sc20-compilation-apply-patches1.jpg)
![N|Solid](../pics/SC20/sc20-compilation-apply-patches1end.jpg)

## 7.13 Applying Open Source Patches

![N|Solid](../pics/SC20/sc20-compilation-apply-ospatches.jpg)

## 7.14 Applying Patches2

![N|Solid](../pics/SC20/sc20-compilation-apply-clopatches1.jpg)
![N|Solid](../pics/SC20/sc20-compilation-apply-clopatches2.jpg)

## 7.15 Applying QDN Patches

![N|Solid](../pics/SC20/sc20-compilation-apply-qdnpatches1.jpg)
![N|Solid](../pics/SC20/sc20-compilation-apply-qdnpatches2.jpg)

## 7.16 Build Images

`Attention!!!`
```warning
This step may take few hours to complete
```
![N|Solid](../pics/SC20/sc20-compilation-build-all1.jpg)
![N|Solid](../pics/SC20/sc20-compilation-build-all2.jpg)

### 7.16.1 Build Failure

This section guides with procedure to recover from failure using retry mechanism, incase of build failure due to reasons such as more number of threads created, some packages are not created in last iteration and missing images. Recommendation for such events are retrying the compilation/build steps as prompted by the `sdkmanager.sh` . To debug further, use logs available in the Build Directory(for eg. `/local/mnt/workspace/SC20/`).

![N|Solid](../pics/SC20/sc20-compilation-retry-build.jpg)

## 7.17 Finish Setup

-	Enter `y` for Finishing Build Setup.	

![N|Solid](../pics/SC20/sc20-compilation-finish-build.jpg)

__Note:__ Select `100` for quit the build script `Quit` from the main menu. 

## 7.18 Download Built Images

Download built images from linux machine to windows machine using SFTP

```code
From : /local/mnt/workspace/SC20/Android_SDK_SC20/lcd5/bin/SC20.zip (Linux)
To   : C:\SC20\SW\Built_images (Windows)
```
__`SC20.zip Contents`__
<table class="pinout" style="width:60%">
<tr><th style="width:10%">Sl No</th><th style="width:30%">File Name</th><th style="width:20%">Description</th></tr>
<tr><td>1</td><td>boot.img</td><td>Boot Image</td></tr>
<tr><td>2</td><td>cache.img</td><td>Cache Image</td></tr>
<tr><td>3</td><td>emmc_appsboot.mbn</td><td>aboot Image</td></tr>
<tr><td>4</td><td>persist.img</td><td>Persist Image</td></tr>
<tr><td>5</td><td>recovery.img</td><td>Recovery Image</td></tr>
<tr><td>6</td><td>system.img</td><td>System Image</td></tr>
<tr><td>7</td><td>userdata.img</td><td>Userdata Image</td></tr>
<tr><td>8</td><td>load.bat</td><td>Flashing Script</td></tr>

</table><br>

```warning
Use MobaXterm UI to download images from ubuntu
  - Select the files, drag and drop to desired folder
```

![N|Solid](../pics/SC20/sc20-compilation-image-download.jpg)

## 7.19 Rebuilding Images (_Optional Step_)

This section demonstrates, The procedure to rebuild the images in events such as enabling additional features, modifying Bootloader/Kernel/System/Userdata/Vendor images, adding/removing some patches, addition of a new application and modifying the DTSI.

1. Run the `./sdk_manager.sh`  in linux server.
2. Select `3` option to compile the all the images from main menu `Make All`
3. Select `5` option to create final image package to download from main menu `Prepare Final Images`

![N|Solid](../pics/SC20/sc20-compilation-makeallimages-begin.jpg)
![N|Solid](../pics/SC20/sc20-compilation-makeallimages-end.jpg)
![N|Solid](../pics/SC20/sc20-compilation-preparefinalimg.jpg)

--------------------