# 10. Demo Program (Hello World!!!)

------------

This section demonstrates the compilation procedure of demo applications and how to download,push & execute demo applications using RG500Q evaluation board.To demonstrates the step by step procedure used `helloworld` demo application,All instructions and screenshots are provided below.

## 10.1 Compile Demo Application

This section explains compilation procedure using `helloworld` application in the Linux Environment, Follow the below instructions to compile.

```console
cd /local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/helloworld
make
```
![N|Solid](../pics/RG500Q/rg500q-demo1-helloworld-make.jpg)

## 10.2 Download Demo Application

-	Compiled `helloworld` demo application is available in below locations.

```console
/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/target/sample/helloworld/
/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/helloworld/
```

Use MobaXterm UI to download application binary from ubuntu

```code
From :/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/target/sample/helloworld (Linux)
To   : C:\RG500Q\SW\Apps (Windows)
```

![N|Solid](../pics/RG500Q/rg500q-demo1-helloworld-download.jpg)

## 10.3 Push Application to Device

Follow the below instructions to push the demo application to RG500Q evaluation board using windows command prompt.Load the helloworld application into `data` folder using `adb push`.

`Attention!!!`
```warning
- Disconnect all adb devices from windows machine(eg: android devices, phones, other evk’s)
- Power-up the RG500Q evaluation board by given adapter or battery & Press power key (ON/OFF) at side of dev-kit.
- Connect only ONE RG500Q device to PC and check with command “adb devices” is detected.
```
```console
cd C:\RG500Q\SW\Apps
adb push helloworld /data
```
![N|Solid](../pics/RG500Q/rg500q-demo1-helloworld-device-upload.jpg)

## 10.4 Execute Hello World Application

This section guides with change permissions(execution) and execute the application using `adb shell`

```console
adb shell chmod +x /data/helloworld
adb shell ./data/helloworld
```
__Result:__ `hello quectel` will be printed in shell

![N|Solid](../pics/RG500Q/rg500q-demo1-helloworld-demo.jpg)

## 10.5 Make System Image (_Optional Step_)

This section demonstrates, how to Integrate the demo applications as part of the system images.All instructions and screenshots are provided below.

### 10.5.1 Compile Demo Applications

1. Run the `./sdk_manager.sh`  in linux server.
2. Select `11` option for compile the sample applications from main menu `Make Sample Apps`
3. Select `10` option for compile the system from main menu `Make System Image`
4. Select `5` option for create final image package to download from main menu `Prepare Final Images`

![N|Solid](../pics/RG500Q/rg500q-demo1-make-sample-apps.jpg)
![N|Solid](../pics/RG500Q/rg500q-demo1-make-system.jpg)
![N|Solid](../pics/RG500Q/rg500q-demo1-make-final-images.jpg)

### 10.5.2 Flash Demo Applications

-	Download the images from the linux server.Refer <a href="#7#713downloadbuiltimages" target="_blank">Section 7.13</a> to Download Images from Linux machine and <a href="#9#9flashinginstructions" target="_blank">Section 9</a> for Flashing.

------------