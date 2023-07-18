# 12. Demo Programs (Connectivity)

------------

This section demonstrates Testing procedure for Voice Call and WiFi Setting available in the EC25 evaluation board, Detailed instructions on the peripherals and demo are explained below.

## 12.1 Voice Call

This section demonstrates, how to use voice call functionality using EC25 evaluation board.This example uses `adb shell` to execute the pre-loaded `example_voice` demo application from windows command prompt. All instructions and screenshots are provided below.

```console
cd /usrdata/
chmod +x example_voice
./example_voice
```

![N|Solid](../pics/EC25/ec25-demo3-voice-call-demo.jpg)

__Source Code :__ `/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/voice/example_voice.c`

`Attention!!!`
```warning
- Make sure proper SIM card inserted
- Make sure LTE Antenna (Connector-J3) connected to the device
```
------------
## 12.2 WiFi

This section demonstrates, how to use WiFi functionality using EC25 evaluation board. This example uses `adb shell` to execute the pre-loaded `wifi_api_test` demo application from windows command prompt, All instructions and screenshots are provided below.

### 12.2.1 Start WiFi Test Application

-   Use Windows command prompt to execute below command.

```console
cd /usrdata/
chmod +x wifi_api_test
./wifi_api_test
```
### 12.2.2 Configure to WiFi Network

EC25 evaluation board support station mode configuration, it is required to select station mode before proceeding with enabling WiFi.

1. Select `1` option for `Configure WiFi`

![N|Solid](../pics/EC25/ec25-demo3-wifi-configure.jpg)

### 12.2.3 Enable WiFi

1. Select `2` option  for `Enable WiFi`
2. Select `1` option for enable the WiFi `Enable`

![N|Solid](../pics/EC25/ec25-demo3-wifi-enable.jpg)

### 12.2.4 Exit WiFi Test Application

1. Select `100` option  for `exit`

### 12.2.5 Validate Internet Connection

This step guides the testing procedure to validate internet access on EC25 evaluation board
Checking Internet connectivity by pinging google.com

```console
ping google.com
```
![N|Solid](../pics/EC25/ec25-demo3-wifi-ping.jpg)

__Source Code :__ `/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/Wifi/example_wifi.c`

`Attention!!!`
```warning
- Make sure Wi-Fi Antenna (Connector-J11) connected to the device
- ping / download test in example carried out without cellular connectivity.
```
------------