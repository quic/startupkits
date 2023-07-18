# 8. Device Setup Instructions

------------

## 8.1 Power Up
- Power-up the dev-kit with provided power adapter (or) battery
- Press `PWR-KEY` switch `SW1`(at back side of dev-kit) to boot the device

## 8.2 Debug using Shell

EC25 device shell can be accessed in two ways,
### 8.2.1 USB (ADB port)

using Windows command prompt & ADB

```console
adb devices
adb shell
```
### 8.2.2 Debug_UART

use any Serial Monitor like <a href="https://en.wikipedia.org/wiki/Tera_Term" target="_blank">Tera Term</a>  &amp; <a href="https://robokits.co.in/arduino/motor-control-boards/interface-boards/ft232rl-ftdi-usb-to-ttl-serial-adapter-module?gclid=EAIaIQobChMI4oLIlcPk6AIV1RyPCh02iQBqEAYYASABEgJU2fD_BwE" target="_blank">USB to UART Converter</a>
    - BaudRate  : `115200`
    - Connector : P6
    <table class="pinout">
    <tr><th>Signal Name</th><th>On Dev-Kit</th></tr>
    <tr><td>TXD</td><td>P6.2</td></tr>
    <tr><td>RXD</td><td>P6.1</td></tr>
</table><br/>

## 8.3 Shell login

Login to the device Shell through ADB (or) Debug-UART, use the following credentials
```warning
Login    : root 
Password : quectel123
```

![N|Solid](../pics/EC25/ec25-ashell.jpg)

## 8.4 Additional Informations (_optional_)

- Audio Configuration

After completion of board flashing use the below command in the shell to configure audio

```console
echo e “AT+QDAI=5 r n” > /dev/smd9
```
------------