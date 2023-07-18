
# 7. Compilation Instructions

------------

This section guides with step by step procedure to setup build environment, upload sdk & toolchain, compilation and download images.

## 7.1 Download SDK Manager

```console
cd /local/mnt/workspace/
wget --no-check-certificate https://git.codelinaro.org/clo/startup-kits/patches/-/raw/master/ec25/EC25-Relv2.0/sdk_manager.sh
```

![N|Solid](../pics/EC25/ec25-compilation-sdkmgr1.jpg)

## 7.2 Updating Permission

```console
chmod +x sdk_manager.sh
```
![N|Solid](../pics/EC25/ec25-compilation-sdkmgr2.jpg)

## 7.3 Build SDK

- Run `sdk_manager.sh` to extract sdk & toolchain, apply patches and build all images
- Select `1` for `Setup New Build` from the main menu.

```console
./sdk_manager.sh
```
![N|Solid](../pics/EC25/ec25-compilation-setup-new.jpg)

## 7.4 Installing Packages

`Attention!!!`
```warning
Please verify the instructions and proceed with confirmation.
```

![N|Solid](../pics/EC25/ec25-compilation-install-tools.jpg)

## 7.5 Setup GIT

![N|Solid](../pics/EC25/ec25-compilation-setup-git.jpg)

## 7.6 Download CLO Resources

![N|Solid](../pics/EC25/ec25-compilation-download-clo.jpg)

## 7.7 Download Open Source Patches

![N|Solid](../pics/EC25/ec25-compilation-os-patches.jpg)

## 7.8 Setup Folder Structure

```warning
Verification of SDK and other packages uploaded (Section 6.4) are part of this step,
Please ensure necessary files are uploaded to linux machine or upload when it is instructed.
```
![N|Solid](../pics/EC25/ec25-compilation-setup-root.jpg)

## 7.9 Setup QDN Patches

![N|Solid](../pics/EC25/ec25-compilation-qdn-patches.jpg)

## 7.10 Setup SDK

![N|Solid](../pics/EC25/ec25-compilation-setup-sdk.jpg)

## 7.11 Setup Tool Chain

![N|Solid](../pics/EC25/ec25-compilation-setup-tool-chain.jpg)

## 7.12 Applying Open Source Patches

![N|Solid](../pics/EC25/ec25-compilation-apply-os-patches.jpg)

## 7.13 Applying Patches2

![N|Solid](../pics/EC25/ec25-compilation-apply-patches2-all1.jpg)
![N|Solid](../pics/EC25/ec25-compilation-apply-patches2-all2.jpg)

## 7.14 Applying QDN Patches

![N|Solid](../pics/EC25/ec25-compilation-apply-patches3.jpg)

## 7.15 Build Images

`Attention!!!`
```warning
This step may take few minutes to complete
```
![N|Solid](../pics/EC25/ec25-compilation-build-all1.jpg)
![N|Solid](../pics/EC25/ec25-compilation-build-all2.jpg)

### 7.15.1 Build Failure

This section guides with procedure to recover from failure using retry mechanism, incase of build failure due to reasons such as more number of threads created, some packages are not created in last iteration and missing images. Recommendation for such events are retrying the compilation/build steps as prompted by the `sdkmanager.sh` . To debug further, use logs available in the Build Directory(for eg. `/local/mnt/workspace/EC25/`)

![N|Solid](../pics/EC25/ec25-compilation-build-retry.jpg)

## 7.16 Finish Setup

-	Enter `y` for Finishing Build Setup.

![N|Solid](../pics/EC25/ec25-compilation-finish-build.jpg)

__Note:__ Select `100` for quit the build script `Quit` from the main menu.

## 7.17 Download Built Images

Download built images from linux machine to windows machine using SFTP

```code
From  : /local/mnt/workspace/EC25/Linux_SDK_EC25/bin/EC25.zip (Linux)
To    : C:\EC25\SW\Built_Images (Windows)
```
__`EC25.zip Contents`__
<table class="pinout" style="width:60%">
<tr><th style="width:10%">Sl No</th><th style="width:30%">File Name</th><th style="width:20%">Description</th></tr>
<tr><td>1</td><td>mdm9607-perf-boot.img</td><td>Kernel Image</td></tr>
<tr><td>2</td><td>mdm9607-perf-sysfs.ubi</td><td>System Images</td></tr>
<tr><td>3</td><td>usrdata.ubi</td><td>Userdata Image</td></tr>
<tr><td>4</td><td>load.bat</td><td>Flashing Script</td></tr>
</table><br>

```warning
Use MobaXterm UI to download images from ubuntu
  - Select the files, drag and drop to desired folder
```

![N|Solid](../pics/EC25/ec25-compilation-image-download.jpg)

## 7.18 Rebuilding Images (_Optional Step_)
This section demonstrates, The procedure to rebuild the images in events such as enabling additional features, modifying boot/system/userdata images, removing some patches, addition of a new application and modifying the KConfig.

1. Run the `./sdk_manager.sh`  in linux server.
2. Select `3` option  for `Make All`
3. Select `5` option for `Prepare Final Images`

![N|Solid](../pics/EC25/ec25-compilation-rebuild1.jpg)
![N|Solid](../pics/EC25/ec25-compilation-rebuild2.jpg)
![N|Solid](../pics/EC25/ec25-compilation-rebuild3.jpg)

--------------------