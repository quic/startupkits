# 11. Demo Programs (Peripherals)

------------

EC25 have sample applications along with SDK in the location `/local/mnt/workspace/EC25/ec25_release_v1/ql-ol-sdk/ql-ol-extsdk/example/`. Pre-built binaries are available for GPIO, UART, I2C, SPI, ADC, WiFi, LTE & GNSS with `/usrdata/`. Refer mentioned location for more sample applications.

### GPIO 
<br>
<table class="pinout">
<tr><th>GPIO No</th><th>Pin</th></tr>
<tr><td>2</td><td>P5.5</td></tr>
<tr><td>3</td><td>P5.7</td></tr>
<tr><td>4</td><td>P5.9</td></tr>
<tr><td>5</td><td>P5.3</td></tr>
</table><br>

__On-Board LEDs__
<table class="pinout">
<tr><th>GPIO No</th><th>LED</th></tr>
<tr><td>R (25)</td><td>Red of RGB LED (RGB1)</td></tr>
<tr><td>G (10)</td><td>Green of RGB LED (RGB1)</td></tr>
<tr><td>B (11)</td><td>Blue of RGB LED (RGB1)</td></tr>
</table><br>

To Read     :`./example_gpio -r <gpionumber>`<br>
To Write    :`./example_gpio -w <gpionumber> <gpiolevel>`<br>
Interrupt   :`./example_gpio -i <gpionumber>`<br>

Execute the application in ADB Shell _(GPIO-2 & LEDs are used in Example)_


```console
cd /usrdata/
chmod +x example_gpio
./example_gpio  -w 2 1
./example_gpio  -r 2
./example_gpio  -i 2
```

![N|Solid](../pics/EC25/ec25-ex-gpio.jpg)

```console
cd /usrdata/
chmod +x example_gpio
./example_gpio -w R 1
./example_gpio -w G 1
./example_gpio -w B 1
```

<!-- ![N|Solid](../pics/EC25/ec25-ex-gpio-led.jpg) -->

__Source Code :__`/local/mnt/workspace/EC25/ec25_release_v1/ql-ol-sdk/ql-ol-extsdk/example/gpio1/example_gpio.c`

------------

### ADC
<br>
<table class="pinout">
<tr><th>ADC No</th><th>Pin</th></tr>
<tr><td>ADC0</td><td>P5.20</td></tr>
<tr><td>ADC1</td><td>P5.17</td></tr>
</table><br>

Execute the application in ADB Shell

```console
cd /usrdata/
chmod +x example_adc
./example_adc
```
- ``ADC0 & ADC1`` value in ``uV`` will be displayed
- ``Battery Level`` in ``mV`` will be displayed

![N|Solid](../pics/EC25/ec25-ex-adc.jpg)

__Source Code :__ ``/local/mnt/workspace/EC25/ec25_release_v1/ql-ol-sdk/ql-ol-extsdk/example/adc/example_adc.c``

------------

## UART

<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>TXD</td><td>P5.18</td></tr>
<tr><td>RXD</td><td>P5.16</td></tr>
</table><br>

Execute the application in ADB Shell _(UART1 is used in Example)_

```console
cd /usrdata/
chmod +x example_uart
./example_uart 115200
```

- __Transmit:__ Text ``“uart test, =+-_0)9(8*7&6^5%4$3#2@1!`~)”`` will be continuously printing on UART
- __Receive:__ Received data will print on Shell
    - use any Terminal application like <a href="https://en.wikipedia.org/wiki/Tera_Term" target="_blank">Tera Term</a>
    - use <a href="https://robokits.co.in/arduino/motor-control-boards/interface-boards/ft232rl-ftdi-usb-to-ttl-serial-adapter-module?gclid=EAIaIQobChMI4oLIlcPk6AIV1RyPCh02iQBqEAYYASABEgJU2fD_BwE" target="_blank">USB to UART Converter</a>



![N|Solid](../pics/EC25/ec25-ex-uart-shell.jpg)

__Source Code :__``/local/mnt/workspace/EC25/ec25_release_v1/ql-ol-sdk/ql-ol-extsdk/example/uart/example_uart.c``

------------

## I2C

<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>SCL</td><td>P5.14</td></tr>
<tr><td>SDA</td><td>P5.12</td></tr>
</table><br>

Execute the application in ADB Shell_(On-Board Audio Codec is used in Example)_


```console
cd /usrdata/
chmod +x example_i2c
./example_i2c –s 0x18 –w 0x02 –r 1
./example_i2c –s 0x18 –w 0x02 0x12
```

- ``./example_i2c –s 0x18 –w 0x02 –r 1 :`` To read ``0x02`` register of ``0x18`` slave
- ``./example_i2c –s 0x18 –w 0x02 0x12 :`` To write ``0x12`` to ``0x02`` register


![N|Solid](../pics/EC25/ec25-ex-i2c.jpg)

__Source Code :__``/local/mnt/workspace/EC25/ec25_release_v1/ql-ol-sdk/ql-ol-extsdk/example/i2c1/example_i2c.c``

------------

## SPI

<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>CLK</td><td>P5.4</td></tr>
<tr><td>CS</td><td>P5.6</td></tr>
<tr><td>MISO</td><td>P5.8</td></tr>
<tr><td>MOSI</td><td>P5.10</td></tr>
</table><br>

Execute the application in ADB Shell

```console
cd /usrdata/
chmod +x example_spi
./example_spi -t 0x74 0x27 0x00 0x00 0x00 0x00 0xFA 0x00 0x00 0x00 0x00
```

To Read Temperature value of BMP280 : `./example_spi -t 0x74 0x27 0x00 0x00 0x00 0x00 0xFA 0x00 0x00 0x00 0x00` 


![N|Solid](../pics/EC25/ec25-ex-spi.jpg)

```warning
Supported Speed : 960000(default) | 4800000 | 9600000 | 16000000 | 19200000 | 25000000 | 50000000
```
__Source Code :__``/local/mnt/workspace/EC25/ec25_release_v1/ql-ol-sdk/ql-ol-extsdk/example/spi1/example_spi.c``

------------