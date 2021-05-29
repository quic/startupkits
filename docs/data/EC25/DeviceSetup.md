# 9. Device Setup Instructions

------------

__9.1 Power Up__
- Power-up the dev-kit with provided power adapter (or) battery
- Press `PWR-KEY` switch `SW1`(at back side of dev-kit) to boot the device

__9.2 Debug using Shell__

EC25 Device shell can be accessed in two ways,
1. __USB (ADB port)__ 
    - using Windows command prompt & ADB
```console
adb devices
adb shell
```
2. __Debug_UART__
    - use any Serial Monitor like <a href="https://en.wikipedia.org/wiki/Tera_Term" target="_blank">Tera Term</a>  &amp; <a href="https://robokits.co.in/arduino/motor-control-boards/interface-boards/ft232rl-ftdi-usb-to-ttl-serial-adapter-module?gclid=EAIaIQobChMI4oLIlcPk6AIV1RyPCh02iQBqEAYYASABEgJU2fD_BwE" target="_blank">USB to UART Converter</a>
    - BaudRate  : `115200`
    - Connector : P6
    <table class="pinout">
    <tr><th>Signal Name</th><th>On Dev-Kit</th></tr>
    <tr><td>TXD</td><td>P6.2</td></tr>
    <tr><td>RXD</td><td>P6.1</td></tr>
</table><br/>

__9.3 Shell login__

Login to the Device Shell through ADB (or) Debug-UART, use following credentials
```warning
Login    : root 
Password : quectel123
```

![N|Solid](../pics/EC25/ec25-ashell.jpg)

__9.4 Additional Informations(optional)__

- Audio Configuration

After completion of board flashing use the below command in the shell to configure audio

```console
echo e “AT+QDAI=5 r n” > /dev/smd9
```
------------