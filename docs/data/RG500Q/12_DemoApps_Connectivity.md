# 12. Demo Programs (Connectivity)

------------

This section demonstrates Testing procedure for various peripherals such as SIM Settings,Voice Call, Data Call,WiFi, Ethernet, GNSS and USB Modem available in the RG500Q evaluation board, Detailed instructions on the peripherals and demo are explained below.

## 12.1 Basic Configuration

This section demonstrates the Basic Configuration for SIM settings, Network Registration and APN settings using RG500Q evaluation board.

### 12.1.1 SIM Settings

This section demonstrates, how to configure SIM slots using RG500Q evaluation board. AT Commands are used for SIM slot settings using AT Port of the RG500Q evaluation board. All instructions and screenshots are provided below. 

1.	Launch Tera Term, connect to AT port and configure baud rate `115200`
2.	Send the below commands for configure the SIM slots.

#### 12.1.1.1 Check Active SIM Slot

This section guides the how to check active SIM slots.

__Syntax:__ AT+QUIMSLOT?

```console
AT+QUIMSLOT?
```

![N|Solid](../pics/RG500Q/rg500q-demo3-sim-config.jpg)
 
#### 12.1.1.2 Switch SIM Slot

This section guides the how to switch/activate SIM slots.

__Syntax:__ AT+QUIMSLOT= < slot >

```console
AT+QUIMSLOT=2
```

![N|Solid](../pics/RG500Q/rg500q-demo3-sim-config1.jpg)

__Note__: Only one SIM is active at a time.    

### 12.1.2 Network Registration

This section demonstrates, how to check network registration status of RG500Q evaluation board. AT Commands are used for checking the network registration status using AT Port of the RG500Q evaluation board. All instructions and screenshots are provided below. 

1.	Launch Tera Term, connect to AT port and configure baud rate `115200`
2.	Send the below command for checking the network registration status.

```console
AT+CREG?
```

![N|Solid](../pics/RG500Q/rg500q-demo3-network-reg-demo.jpg)

__Note:__ Second parameter of `AT+CREG` response is the network registration status and RG500Q evaluation board should successfully register with a network to test the cellular functionality. Below table provide details of the various status.
<br>
            <table class=custom>
               <tr><th>Status</th><th>Details</th></tr>
               <tr><td>0</td><td>Not registered/Device not searching network</td></tr>
               <tr><td>1</td><td>Registered,home network</td></tr>
               <tr><td>2</td><td>Not registered/Device searching network</td></tr>
               <tr><td>3</td><td>Registration denied</td></tr>
               <tr><td>4</td><td>Unknown</td></tr>
               <tr><td>5</td><td>Registered,roaming</td></tr>
            </table>

### 12.1.3 APN Settings

This section demonstrates, how to set APN in RG500Q evaluation board. AT Commands are used for set the APN using AT Port of the RG500Q evaluation board.All instructions and screenshots are provided below. 

1.	Launch Tera Term, connect to AT port and configure baud rate `115200`
2.	Send the below command for APN settings. 

__Syntax:__ AT+CGDCONT=1,"IP",< "SIM APN" >

```console
AT+CGDCONT=1,"IP","AIRTELGPRS.COM"
```

![N|Solid](../pics/RG500Q/rg500q-demo3-apn-reg-demo.jpg)

------------

## 12.2 Voice Call

This section demonstrates, how to use voice call functionality using RG500Q evaluation board. AT Commands are used for testing the voice call functionality using AT Port of the RG500Q evaluation board. Detailed procedure to test different modes of operation are explained below.

### 12.2.1 Outgoing Call

This section guides the how to test outgoing call functionality using RG500Q evaluation board.

-   Check network registration status.Refer section 12.1 Basic Configuration.
-   Connect to AT Command Port of the RG500Q evaluation board and send the following commands

#### 12.2.1.1 Dial the Call

__Syntax:__ ATD < phone number to dial >;

```console
ATD9876543210;
```

![N|Solid](../pics/RG500Q/rg500q-demo3-voice-dial-demo.jpg)

#### 12.2.1.2 Disconnect

```console
ATH
```

![N|Solid](../pics/RG500Q/rg500q-demo3-voice-dial2-demo.jpg)

### 12.2.2 Incoming Call

This section guides the how to test incoming call functionality using RG500Q evaluation board.

-   Check network registration status.Refer section 12.1 Basic Configuration.
-   Connect to AT Command Port of the RG500Q evaluation board and send the following commands

#### 12.2.2.1 Ringing Notification

![N|Solid](../pics/RG500Q/rg500q-demo3-voice-recv-demo.jpg)

#### 12.2.2.2 Attend

```console
ATA
```

![N|Solid](../pics/RG500Q/rg500q-demo3-voice-recv2-demo.jpg)

#### 12.2.2.3 Disconnect

```console
ATH
```

![N|Solid](../pics/RG500Q/rg500q-demo3-voice-recv3-demo.jpg)

------------

## 12.3 Data Call

This section demonstrates, how to use data call functionality using RG500Q evaluation board .This example guides with procedure for connecting to the internet, verifying the internet connectivity and stop the data call. 

To test data call ,demo application is pre-loaded into device & is available at `/usr/bin/sample_data_call` and This example uses `adb shell` to execute the pre-loaded `sample_data_call` demo application from windows command prompt, All instructions and screenshots are provided below.

### 12.3.1 Start Data Call

-   Check network registration status.Refer section 12.1 Basic Configuration.
-   Use Windows command prompt to execute below command.

__Syntax:__ adb shell sample&#95;data&#95;call  -a 1 -n < SIM APN > -i 4 -d &

```console
adb shell sample_data_call  -a 1 -n AIRTELGPRS.COM -i 4 -d &
```

 ![N|Solid](../pics/RG500Q/rg500q-demo3-data-call-demo.jpg)
 
 ```warning
Keep the command prompt open, Do not exit from the application.
```

### 12.3.2 Validate Internet Connection

-   Open a new Windows command prompt to execute below command.

__Syntax:__ adb shell -c 3 ping < websites >

```console
adb shell ping -c 3 www.google.com
```

![N|Solid](../pics/RG500Q/rg500q-demo3-ping-demo.jpg)

### 12.3.3 Disconnect

-   Use `Ctrl+C`, To exit the `sample_data_call` application and end the data call.

__Source Code :__   Data call application is located at ``/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/data_call/main_data_call.c``

------------

## 12.4 WiFi

This section demonstrates, how to use WiFi functionality using RG500Q evaluation board and it as on-board FG50V module, a high performance WiFi 6 dual band enabled device. RG500Q evaluation board can be configured as access point/hotspot, station or repeater mode configurations.

To test the WiFi, demo application is preloaded into device & is available at `/usr/bin/sample_wifi` and This example uses `adb shell` to execute the pre-loaded `sample_wifi` demo application from windows command prompt, Detailed procedure to test different modes of WiFi are explained below.

### 12.4.1 Start WiFi Test Application

Start WiFi test application using adb interface.

-   Use Windows command prompt to execute below command.

```console
adb shell sample_wifi
```
![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-menu-configure.jpg)

### 12.4.2 Access Point / Hotspot

RG500Q evaluation board can operate as an access point which can give multiple access points from one device and it also support dual bands (2.4Ghz & 5Ghz). 
This section demonstrates how to configure the RG500Q evaluation board as access point. All instructions and screenshots are provided below.

#### 12.4.2.1 Initialize WiFi

1. Select `0` option for Initialize the WiFi from the main menu `show ql_wifi_init`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-init.jpg)

#### 12.4.2.2 Configure Access Point

RG500Q evaluation board support configuration of multiple access point simultaneously, it's required to select one of the mode before proceeding with enabling WiFi. Available options for the demo application is detailed below.
<table style="width: 100%">
        <colgroup>
        <col span="1" style="width: 10%;">
        <col span="1" style="width: 20%;">
        <col span="1" style="width: 50%;">
        </colgroup>
    <tr><th>Option</th><th>Modes</th><th>Description</th></tr>
    <tr><td>1</td><td>AP</td><td>One 2.4Ghz Access Point</td></tr>
    <tr><td>2</td><td>AP-AP</td><td>Two 2.4Ghz Access Point</td></tr>
    <tr><td>3</td><td>AP-STA</td><td>One 2.4Ghz Access Point and One Station</td></tr>
    <tr><td>4</td><td>AP-AP-AP</td><td>Two 2.4Ghz and One 5Ghz Access Point</td></tr>
    </table><br

This example demonstrate how to enable 3 Access Points using demo application menu and using it's default options _(Access point can be configured by menu or changing the config file)_. Steps to enable access points are listed below.

1. Select `5` option for set the wlan configuration from the main menu `show ql_wifi_set_wlan_config`
2. Select `4` option for configure the access points `AP-AP-AP`
3. Use Default AP1 Profile, Select `0` option for `No`
4. Use Default AP2 Profile, Select `0` option for `No`
5. Use Default Station Configuration, Select `0` option for `No`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-ap-configure.jpg)

#### 12.4.2.3 Enable Hotspot

1. Select `3` option for set the hotspot from the main menu `show ql_wifi_set_enable`
2. Select `1` option for enable the hotspot `Enable`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-enable.jpg)

#### 12.4.2.4 Connect to Access Point

RG500Q evaluation board is now enabled with access point and is ready to connect with any stations. Details of the access points are listed below

<table style="width: 100%">
        <colgroup>
        <col span="1" style="width: 10%;">
        <col span="1" style="width: 20%;">
        <col span="1" style="width: 50%;">
        </colgroup>
    <tr><th>SSID</th><th>Band</th><th>Password/Encrypt mode</th></tr>
    <tr><td>QSoftAP</td><td>2.4 GHz</td><td>1234567890(WPA/WPA2-PSK(AES))</td></tr>
    <tr><td>QSoftAP_0_24G</td><td>2.4 GHz</td><td>1234567890(WPA/WPA2-PSK(AES))</td></tr>
    <tr><td>QSoftAP_1_24G</td><td>2.4 GHz</td><td>1234567890(WPA/WPA2-PSK(AES))</td></tr>
    <tr><td>QSoftAP_2_5G</td><td>5 GHz</td><td>1234567890(WPA/WPA2-PSK(AES))</td></tr>
    </table><br>

Following screenshot demonstrates the listing both 2.4Ghz and 5Ghz access points in a windows 10 machine, follow the standard procedure to connect to one of the network and test the internet

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-lists1.jpg)

#### 12.4.2.5 Validate Internet Connection

This step guides the testing procedure to validate internet access in windows laptop connected to RG500Q evaluation board.

1. Open a windows command prompt
2. Ping `www.google.com` or any website to test internet

```console
ping www.google.com
```

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-ping-windows.jpg)

#### 12.4.2.6 Disable and DeInitialize WiFi

1. Select `3` option for disable the hotspot from the main menu `show ql_wifi_set_enable`
2. Select `0` option for `Disable`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-disable.jpg)

3. Select `1` option for DeInitialize the WiFi from the main menu `show ql_wifi_deinit`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-deinit.jpg)

### 12.4.3 Station

RG500Q evaluation board can operate as a wireless Station, by configuring as station.
To test the RG500Q evaluation board as operate station only, pre-loaded application is available at `/usr/bin/QCMAP_CLI` and This example uses `adb shell` to execute the pre-loaded `QCMAP_CLI` demo application from windows command prompt, All instructions and screenshots are provided below.

#### 12.4.3.1 Start WiFi Test Application

-   Use Windows command prompt to execute below command.

```console
adb shell QCMAP_CLI
```

![N|Solid](../pics/RG500Q/rg500q-demo3-qcmap-menu-configure.jpg)

#### 12.4.3.2 Initialize WiFi

1. Select `1` option for initialize the MobileAP configuration from the main menu `MobileAP Configuration`

![N|Solid](../pics/RG500Q/rg500q-demo3-qcmap-init.jpg)

2. Select `2` option for `Enable/Disable mobileap`
3. Select `1` option to enable the MobileAP State `Enable`

![N|Solid](../pics/RG500Q/rg500q-demo3-qcmap-enable-wlan.jpg)

#### 12.4.3.3 Configure Station

RG500Q evaluation board support station mode configuration, it is required to select station mode before proceeding with enabling WiFi. 

1. Select `4` option for `WLAN Configuration`

![N|Solid](../pics/RG500Q/rg500q-demo3-qcmap-wlan-config.jpg)

2. Select `3` option for `Set WLAN Config`
3. Select `6` option for `STA-Only`
4. Use Default AP1 Profile, Select `0` option for `No`
5. Use Default AP2 Profile, Select `0` option for `No`
6. Use Default Station Configuration, Select `0` option for `No`

![N|Solid](../pics/RG500Q/rg500q-demo3-qcmap-wlan-config2.jpg)

#### 12.4.3.4 Configure SSID

This section demonstrates procedure for setup the station point by adding the network in RG500Q evaluation board.

1. Select `11` option for `WIFI parameter Configuration`
2. Select `3` option for `STA Config`
3. Select `1` option to Set WiFi confirmation `SET`

![N|Solid](../pics/RG500Q/rg500q-demo3-qcmap-wifi-config.jpg)

##### 12.4.3.4.1 Add the network details 

1. Select `0` option for add network  `0---------add network`
2. Enter the ssid and password
3. Ignore all the options by selecting `x` option

![N|Solid](../pics/RG500Q/rg500q-demo3-qcmap-add-network.jpg)

4. Select `100` option  for save and exit the network configuration  `100----save and exit` 

![N|Solid](../pics/RG500Q/rg500q-demo3-qcmap-save-exit-network.jpg)

#### 12.4.3.5 Enable WiFi

1. Select `4` option  for `WLAN Configuration`
2. Select `1` option for `Enable/Disable WLAN`
3. Select `1` option for enable the WiFi `Enable`

![N|Solid](../pics/RG500Q/rg500q-demo3-qcmap-enable-wlan2.jpg)

#### 12.4.3.6 Validate Internet Connection 

This step guides the testing procedure to validate internet access on RG500Q evaluation board.

__Syntax:__ `adb shell -c 3 ping < websites >`

-   Use windows command prompt to execute below command.

```console
adb shell ping -c 3 www.google.com
```

![N|Solid](../pics/RG500Q/rg500q-demo3-ping-demo.jpg)

### 12.4.4 Repeater

The Access Point extends the range of the wireless network by repeating the wireless signal of the remoteAP (Access Point).
This section demonstrates how to configure RG500Q evaluation board as a wireless repeater,which can use as station point and access point. All instructions and screenshots are provided below.

#### 12.4.4.1 Initialize WiFi

1. Execute the pre-loaded `sample_wifi` demo application from windows command prompt.

```console
adb shell sample_wifi
```
![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-menu-configure.jpg)

2. Select `0` option for initialize the WiFi from the main menu `show ql_wifi_init`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-init.jpg)

#### 12.4.4.2 Configure Repeater Mode

RG500Q evaluation board support configuration as access point and station point simultaneously,configuration modes are listed in previous step and it is required to select One 2.4Ghz access Point and One station mode.

This example demonstrates how to enable station point and access point using demo application menu .Steps to enable repeater mode are listed below.
1. Select `5` option for set the wlan configuration from the main menu `show ql_wifi_set_wlan_config`
2. Select `3` option for configure the Repeater mode `AP-STA`
3. Use Default AP1 Profile, Select `0` option for `No`
4. Use Default AP2 Profile, Select `0` option for `No`
5. Use Default Station Configuration, Select `0` option for `No`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-ap-sta-configure.jpg)

#### 12.4.4.3 Configure SSID

This step is configured the RG500Q evaluation board as station point by accessing the internet form router,it is required to enter the router ssid and password for connecting the internet.

1. Select `26` option for `show ql_wifi_set_sta_conf`
2. Enter the router ssid and password.

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-router-details.jpg)

#### 12.4.4.4 Enable WiFi

1. Select `3` option for set WiFi from the main menu `show ql_wifi_set_enable`
2. Select `1` option for enable the WiFi `Enable`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-enable.jpg)

#### 12.4.4.5 Validate Internet Connection 

This step guides the testing Procedure to validate internet access on RG500Q evaluation board.

-   Use windows command prompt to execute below command.

__Syntax:__ `adb shell -c 3 ping < websites >`

```console
adb shell ping -c 3 www.google.com
```

![N|Solid](../pics/RG500Q/rg500q-demo3-ping-demo.jpg)

#### 12.4.4.6 Connect RG500Q WiFi to Repeater.

RG500Q evaluation board is now enabled with WiFi and is ready to connect with any stations. Default QSoftAP is enabled in windows laptop.

Following screenshot demonstrates the listing  2.4Ghz access point in a windows laptop, follow the standard procedure to connect QSfotAP network and test the internet

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-sta-list.jpg)

#### 12.4.4.7 Validate Internet Connection 

This step guides the testing procedure to validate internet access in windows laptop connected to RG500Q evaluation board.

1. Open a new windows command prompt
2. Ping `www.google.com` or any website to test internet

```console
ping www.google.com
```

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-ping-windows.jpg)

#### 12.4.4.8 Disable and DeInitialize WiFi

1. Select `3` option for disable hotspot from the main menu `show ql_wifi_set_enable`
2. Select `0` option for `Disable`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-disable.jpg)

3. Select `1` option for DeInitialize WiFi from the main menu `show ql_wifi_deinit`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-deinit.jpg)

#### 12.4.4.9 Exit WiFi Test Application

1. Select `-1` option for exit the WiFi test application `exit`

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-exit.jpg)

__Source Code :__   WiFi application is located at `/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/wifi/main.c`

------------

## 12.5 Ethernet

This section demonstrates, how to share the data over Ethernet functionality using RG500Q evaluation board. AT Commands are used for enable Ethernet using AT Command Port of the RG500Q evaluation board. All instructions and screenshots are provided below.

### 12.5.1 Environment Setup
-   __Step 1.__ Connect the Ethernet cable between RG500Q evaluation board and Windows machine's Ethernet port


### 12.5.2 Setup Ethernet
There are two types of Ethernet modes, __Bridge__ Mode and __IP Pass-Through__ Mode. This section demonstrates how to enable and disable Ethernet in different modes. Detailed instructions and screen shots are provided below.

-   Launch Tera Term, connect to AT port and configure baud rate `115200`
-	Check network registration status for SIM, APN settings in RG500Q evaluation board. Refer section 12.1 Basic Configuration.

#### 12.5.2.1 Setup Ethernet in Bridge Mode
This section demonstrates, the procedure to enable and disable Bridge mode using RG500Q evaluation board. In Bridge Mode local IP will be assigned for client devices by RG500Q.

##### 12.5.2.1.1 Enable Bridge Mode

```console
AT+QETH="RGMII"
AT+QETH="RGMII","ENABLE",1,0
AT+CFUN=1,1
```
![N|Solid](../pics/RG500Q/rg500q-demo3-ethernet-demo.jpg)

##### 12.5.2.1.2 Disable Bridge Mode

```console
AT+QETH="RGMII"
AT+QETH="RGMII","DISABLE",1,0
AT+CFUN=1,1
```

![N|Solid](../pics/RG500Q/rg500q-demo3-ethernet-demo1.jpg)

#### 12.5.2.2 Setup Ethernet in IP Pass-Through Mode
This section demonstrates, the procedure to enable and disable IP Pass-Through mode using RG500Q evaluation board. In IP Pass-Through mode public IP will be assigned for client device(One device only) by RG500Q.

##### 12.5.2.2.1 Enable IP Pass-Through Mode

```console
AT+QETH="RGMII"
AT+QETH="RGMII","ENABLE",1,1
AT+CFUN=1,1
```
![N|Solid](../pics/RG500Q/rg500q-demo3-ethernet-demo2.jpg)

##### 12.5.2.2.2 Disable IP Pass-Through Mode

```console
AT+QETH="RGMII"
AT+QETH="RGMII","DISABLE",1,1
AT+CFUN=1,1
```

![N|Solid](../pics/RG500Q/rg500q-demo3-ethernet-demo3.jpg)

 ```warning
Disable procedure is mandatory to switch between Bridge Mode and IP Pass-Through Mode,
Interchanging the procedure can result in permanent failures.
```

### 12.5.3 Verify Connections

This section demonstrates, how to verify internet connection and Ethernet connection is available on RG500Q evaluation board.Detailed instructions and screen shots are provided below.

#### 12.5.3.1 Check the Ethernet connection

This step guides the testing procedure to check the Ethernet connection in windows laptop connected to RG500Q evaluation board.

1. Verify the Ethernet connection in windows laptop.

![N|Solid](../pics/RG500Q/rg500q-demo3-ethernet-verify1.jpg)

#### 12.5.3.2 Test Internet Connectivity

This step guides the testing procedure to validate internet access in windows laptop connected to RG500Q evaluation board.

1. Open a windows command prompt.
2. Ping `www.google.com` or any website to test internet.

```console
ping www.google.com
```

![N|Solid](../pics/RG500Q/rg500q-demo3-wifi-ping-windows.jpg)

------------

## 12.6 GNSS

This section demonstrates, how to use location services functionality using RG500Q evaluation board. This demo uses AT Port and NMEA port to demonstrates the location services. All instructions and screenshots are provided below.

### 12.6.1 Enable GNSS

1.	Launch Tera Term, connect to AT port and configure baud rate `115200`
2.	Execute below commands to enable the GNSS.

```console
AT+QGPS=1
```
![N|Solid](../pics/RG500Q/rg500q-demo3-gnss-loc-enable-demo.jpg)

### 12.6.2 NMEA Location Services 

1.	Launch another Tera Term, connect to NMEA port and configure baud rate `115200` 
2.	Wait sometime for location service messages.

![N|Solid](../pics/RG500Q/rg500q-demo3-gnss-loc1-demo.jpg)

### 12.6.3 Location Details 

1.	Execute below commands using AT terminal to display location details. 
 
```console
AT+QGPSLOC=0
```
![N|Solid](../pics/RG500Q/rg500q-demo3-gnss-loc2-demo.jpg)

### 12.6.4 End GNSS

1.	Execute below commands using AT terminal to disable GNSS.

```console
AT+QGPSEND
```

![N|Solid](../pics/RG500Q/rg500q-demo3-gnss-loc3-demo.jpg)

------------

## 12.7 USB Modem

This section demonstrates, how to use USB Data Modem functionality using RG500Q evaluation board.All instructions and screenshots are provided below. 

### 12.7.1 Environment Setup

-   __Step 1.__  Insert the SIM in RG500Q evaluation board. 
-   __Step 2.__  Connect the RG500Q evaluation board to windows laptop via USB cable.

### 12.7.2 Connect the Cellular network

This step guides the how to connect cellular network using USB modem.

1.	Check network registration status for SIM and APN settings of RG500Q evaluation board.Refer section 12.1 Basic Configuration.
2.	Check the list of cellular networks available in windows laptop and connect to the network.

![N|Solid](../pics/RG500Q/rg500q-demo3-usb-modem1-demo.jpg)

### 12.7.3 Validate IP Address

This step guides the Testing Procedure to validate IP assigned in windows laptop connected to RG500Q evaluation board.

-	Use windows command prompt to execute below command.

```console
ipconfig
```

![N|Solid](../pics/RG500Q/rg500q-demo3-usb-modem2-demo.jpg)

### 12.7.4 Validate Internet Connection

This step guides the testing procedure to validate internet access in windows laptop connected to RG500Q evaluation board.

1. Ping `www.google.com` or any website to test internet

__Syntax:__ ping www.google.com -S < IPV4 Address >

```console
ping www.google.com -S 100.105.123.3
```

![N|Solid](../pics/RG500Q/rg500q-demo3-usb-modem-ping-windows.jpg)

------------
