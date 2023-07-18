# 10. Demo Program (Hello World!!!)

------------

This section demonstrates the compilation procedure of demo applications and how to download,push & execute demo applications using EC25 evaluation board.To demonstrates the step by step procedure used `helloworld` demo application,All instructions and screenshots are provided below.

```warning
Demo Applications have pre-loaded to the device, in /usrdata/
```

## 10.1 Compile Demo Application

This section explains compilation procedure using `helloworld` application in the Linux Environment, Follow the below instructions to compile.

```console
cd /local/mnt/workspace/EC25/Linux_SDK_EC25/
. ql-ol-crosstool/ql-ol-crosstool-env-init
cd ql-ol-extsdk/example/hello_world/
make
```

![N|Solid](../pics/EC25/ec25-demo1-helloworld-make.jpg)

## 10.2 Download Demo Application

-	Compiled `helloworld` demo application is available in below locations.

```console
/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/hello_world
```

Use MobaXterm UI to download application binary from ubuntu

```code
From :/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/hello_world (Linux)
To   : C:\EC25\SW\Apps (Windows)
```

![N|Solid](../pics/EC25/ec25-demo1-helloworld-download.jpg)

## 10.3 Push Application to Device

Follow the below instructions to load the binaries to device using Windows Command Prompt

`Attention!!!`
```warning
- Disconnect all adb devices from windows machine(eg: android devices, phones, other evk’s)
- Power-up the EC25 dev-kit by given adapter & Press SW1 (ON/OFF) at back side of dev-kit
- Connect only ONE EC25 device to PC and check with command “adb devices” is detected
- Install adb & fastboot drivers if required.
```
```console
cd C:\EC25\SW\Apps
adb push helloworld /usrdata/
```
![N|Solid](../pics/EC25/ec25-demo1-helloworld-device-upload.jpg)

## 10.4 Execute Hello World Application

This section guides with change permissions(execution) and execute the application using `adb shell`

```console
cd /usrdata
chmod +x helloworld
./helloworld
```

__Result:__`<Hello OpenLinux !>` will be printed in Shell

![N|Solid](../pics/EC25/ec25-demo1-helloworld-demo.jpg)

------------