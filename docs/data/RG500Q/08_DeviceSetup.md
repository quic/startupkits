# 8 Device Setup Instructions

------------
This section guides with step by step instruction to configure device, configure the serial terminals and powering up the RG500Q evaluation board.

## 8.1 Power On RG500Q evaluation board

Follow the steps below to power up the device
-   Connect the device with battery(__J3__) or 5V/12V DC power adapter(__J4__) to respective connectors.
-   Press the power Key (__S1__) to power on the device.
-   Connect the USB Type-C cable between RG500Q evaluation board's usb connector(__J16__) and the windows laptop.

## 8.2 Connect USB to Serial Converter

Follow the below steps to connect <a href="https://robokits.co.in/arduino/motor-control-boards/interface-boards/ft232rl-ftdi-usb-to-ttl-serial-adapter-module?gclid=EAIaIQobChMI4oLIlcPk6AIV1RyPCh02iQBqEAYYASABEgJU2fD_BwE" target="_blank"> USB to Serial</a> Converter to a windows laptop.
-   Use USB Cable to connect between USB to Serial Converter and windows laptop.
-   Familiarize with the USB to Serial Converter

![N|Solid](../pics/RG500Q/rg500q-device-setup-usb-to-serial.jpg)

__Note:__ _USB to Serial Converter must operate in 3.3V, jumper configuration is required to select 3.3V_

### 8.2.1 Check USB Devices

Follow the steps to verify the device using device manager, verify all the ports highlighted in the screen shot and listed in the table below.

 ![N|Solid](../pics/RG500Q/rg500q-device-setup-list-usb-ports.jpg)

<table style="width: 80%">
        <colgroup>
        <col span="1" style="width: 30%;">
        <col span="1" style="width: 70%;">
        </colgroup>
    <tr><th>Ports</th><th>Description</th></tr>
    <tr><td>Quectel USB AT Port</td><td>COM Port for AT commands</td></tr>
    <tr><td>Quectel USB DM Port</td><td>COM Port for firmware upgrade</td></tr>
    <tr><td>Quectel USB NMEA Port</td><td>COM Port for collecting location information</td></tr>
    <tr><td>Quectel USB Modem </td><td>Modem device for connecting to internet(USB RMNET)</td></tr>
    <tr><td>ADB Interface</td><td>USB debug interface</td></tr>
    <tr><td>USB Serial port</td><td>COM Port for USB to Serial Converter</td></tr>
    </table>

 __Note:__ _ADB need to be enabled for detection, instructions are shared in the following sections._

### 8.2.2 Setup Serial Terminal

This section guides how to setup Tera Term to access serial terminal in a windows laptop. Tera Term can be connected to various serial terminals of the RG500Q evaluation board mentioned in the table below.
-   Launch Tera Term from the location `C:\RG500Q\Tools\teraterm-4.105.exe`.
-   Identify the serial port to connect with Tera Term

<table style="width: 80%">
        <colgroup>
        <col span="1" style="width: 30%;">
        <col span="1" style="width: 70%;">
        </colgroup>
    <tr><th>Ports</th><th>Baudrate</th></tr>
    <tr><td>Quectel USB NMEA Port</td><td>9600</td></tr>
    <tr><td>Quectel USB AT Port</td><td>115200</td></tr>
    <tr><td>Quectel USB Serial port</td><td>115200</td></tr>
    </table>

-   Select desired serial port _(For eg. select AT port)_

 ![N|Solid](../pics/RG500Q/rg500q-device-setup-teraterm-atport-setup1.jpg)

-   Configure baud rate _(For eg. `115200`)_

 ![N|Solid](../pics/RG500Q/rg500q-device-setup-teraterm-atport-setup2.jpg)

 -  Send messages using serial terminal _(For eg `AT`)_

 ![N|Solid](../pics/RG500Q/rg500q-device-setup-simple-at.jpg)

## 8.3 Accessing Device

This section guides with step by step instruction to access RG500Q evaluation board using AT commands, Debug UART and ADB interface over USB. This section also familiarizes with NMEA port used for location services.

### 8.3.1 AT Commands

This section demonstrates procedure for connecting to AT port, to control various operations of the RG500Q evaluation board. All instructions and screenshots are provided below.
-   Launch Tera Term, select AT port and configure baud rate `115200`
-   Send below AT Command.
```console
 AT
```

![N|Solid](../pics/RG500Q/rg500q-device-setup-simple-at.jpg)

### 8.3.2 Debug UART

This section demonstrates procedure for connecting to debug uart, to view the debug messages and login to the linux terminal for debugging. All instructions and screenshots are provided below.
#### 8.3.2.1 Pinouts

<table style="width: 40%">
        <colgroup>
        <col span="1" style="width: 25%;">
        <col span="1" style="width: 30%;">
        </colgroup>
    <tr><td>J29.1</td><td>Debug Uart-Tx</td></tr>
    <tr><td>J29.2</td><td>Debug Uart-Rx</td></tr>
    <tr><td>J29.3</td><td>Gnd</td></tr>
    </table>

-   Connect Tx-Rx, Rx-Tx & GND-GND to respective pins of USB to Serial Converter
-   Launch Tera Term, select USB to Serial Converter port and configure baud rate `115200`

![N|Solid](../pics/RG500Q/rg500q-device-setup-teraterm-usbserial-setup1.jpg)
-   _(Optional)_ User can login to linux terminal after the initial bootup logs

![N|Solid](../pics/RG500Q/rg500q-device-setup-teraterm-serial-debug.jpg)

```warning
-   To access this shell, user need to enable key from Quectel
-   To get the key user need to share the output of `AT+QADBKEY?` using AT Port
-   Once key is received, enable shell access by applying the key using `AT+QADBKEY=<key>`
eg:)
Step 1 : AT+QADBKEY? , response will be like +QADBKEY: XXXXXXXX 
Step 2 : Share the key “QADBKEY: XXXXXXXX “ of every board with Quectel
Step 3 : Quectel will share the ADB login password for every board
```

## 8.4 ADB over USB

This section demonstrates the procedure to access ADB interface using windows command prompt for debugging with RG500Q evaluation board. ADB interface can be used to debug, access linux terminal, read/write files to device, execution of applications/commands and view debug messages. All instructions and screenshots are provided below.

### 8.4.1 Check ADB Devices

```console
adb devices
```
 ![N|Solid](../pics/RG500Q/rg500q-device-setup-adb-devices.jpg)

### 8.4.2 Login to the shell

```console
adb shell
```
 ![N|Solid](../pics/RG500Q/rg500q-device-setup-adb-shell.jpg)

### 8.4.3 Enable ADB _(Optional Step - ADB Not Detected)_

-   This step is required only once, after firmware update using emergency download procedure.
-   Launch Tera Term, select AT port and configure baud rate `115200`.
-   Send the following commands.

```console
AT
AT+QCFG="usbcfg",0x2C7C,0x0800,1,1,1,1,1,1
AT+CFUN=1,1
```

![N|Solid](../pics/RG500Q/rg500q-device-setup-enable-adb-atcommands.jpg)

```warning
-   Device will restart after enabling ADB using above step
-   Check ADB detection; use first two steps.
```

## 8.5 Fastboot  _(Optional)_

This section guides to access fastboot interface using windows command prompt for flashing and upgrading activities of RG500Q evaluation board in development phase. All instructions and screenshots are provided below.
-   Use __adb__ to reboot the device in fastboot mode

```warning
Fastboot mode is required only for flashing purpose.
```

```console
adb reboot bootloader
```
-   Check for __fastboot__ devices
```console
fastboot devices
```
-   Use __fastboot__ to reboot the device to normal mode
```console
fastboot reboot
```
-   Check for __adb__  devices
```console
adb devices
```
![N|Solid](../pics/RG500Q/rg500q-device-setup-fastboot-demo.jpg)


## 8.6 NMEA Port _(Optional)_

This section demonstrates procedure for connecting to NMEA port, to view the location service messages from the RG500Q evaluation board. All instructions and screenshots are provided below.

-   Launch Tera Term, select to NMEA Command port and configure baud rate `9600` 
-   Wait for messages to get the location services details.
-	More information Refer 12.6 _GNSS_ section in DemoApps_Connectivity session.

![N|Solid](../pics/RG500Q/rg500q-device-setup-nmea-demo.jpg)

------------

## 8.7 AT Commands(UART)

This section demonstrates, how to use AT Command functionality over serial port using RG500Q evaluation board using its uart pins available in peripheral connector. This demo requires AT Command Firmware for the RG500Q evaluation board and flash the binary using emergency download procedure.

### 8.7.1 AT Command Firmware
-   Use the following binary received from Quectel .
-   Extract the `RG500QEAAAR11A02M4G_01.001.01.001` AT Firmware and flash using emergency download procedure.<a href="#" target="_blank" onclick="LoadPage(13);return false;">Click here for instructions</a>

```warning
This UART is act like a AT port only with AT Binaries/Firmware.
```
### 8.7.2 Pinout
<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>Uart-TX</td><td>J28.8</td></tr>
<tr><td>Uart-RX</td><td>J28.10</td></tr>
<tr><td>Uart-RTS</td><td>J28.13</td></tr>
<tr><td>Gnd</td><td>J28.2</td></tr>
</table><br>

### 8.7.3 Test AT Commands

This section demonstrates procedure for connecting to AT port using UART pins available in the peripheral connector. All instructions and screenshots are provided below.
-   Connect USB to Serial Converter to respective Tx-Rx, Rx-Tx, RTS-RTS and Gnd pins of the RG500Q evaluation board mentioned in the above table.
-   Launch Tera Term, select USB to Serial Converter port and configure the baud rate to `115200`
-   Send below AT Commands.

```console
 AT
 AT+QGMR
 ```

 ![N|Solid](../pics/RG500Q/rg500q-device-setup-at-command-demo.jpg)

------------
