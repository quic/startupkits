# 10. Demo Program (Hello World!!!)

------------

```warning
Demo Applications have pre-loaded to the device, in /usrdata/
```

__10.1 Compile Demo Application__

Compilation procedure explained using `helloworld` application in the Linux Environment, Follow the below instructions to compile.

```console
cd /local/mnt/workspace/EC25_SDK/ql-ol-sdk/
. ql-ol-crosstool/ql-ol-crosstool-env-init
cd ql-ol-extsdk/example/hello_world/
make
```

![N|Solid](../pics/EC25/ec25-ex-compilation.jpg)

__10.2 Download Application__

Use MobaXterm UI to download application binary from ubuntu

```warning
From :/local/mnt/workspace/EC25_SDK/ql-ol-sdk/ql-ol-extsdk/example/hello_world/ (Linux)
To   : C:\EC25\SW\Apps (Windows)
```
![N|Solid](../pics/EC25/ec25-ex-app-download.jpg)

__10.3 Load Application to Device__

Follow the below instructions to load the binaries to device using Windows Command Prompt

####`Attention!!!`
```warning
- Disconnect all adb devices from windows machine(eg: android devices, phones, other evk’s)
- Power-up the EC25 Dev-kit by given adapter & Press SW1 (ON/OFF) at back side of dev-kit
- Connect only ONE EC25 device to PC and check with command “adb devices” is detected
- Install adb & fastboot drivers if required.
```
```console
cd C:\EC25\SW\Apps
adb push helloworld /usrdata/
```
![N|Solid](../pics/EC25/ec25-ex-adbpush.jpg)

__10.4 Execute Hello World Application__

Change permissions(execution) and execute the application in ADB Shell

```console
cd /usrdata/                         
chmod +x helloworld
./ helloworld
```
__Result:__`<Hello OpenLinux !>` will be printed in Shell

![N|Solid](../pics/EC25/helloworld.jpg)

------------