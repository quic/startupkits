# 11. Demo Programs (Peripherals)

------------
This section demonstrates usage of sample applications for various peripherals such as GPIO, UART, I2C, SPI, and ADC available in the EC25 evaluation board. All sample applications are located at `/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example`. Sample applications are preloaded in the devices `/usrdata/` and can be accessed directly using command line interfaces. Detailed instructions on the peripherals and demo are explained below.

## 11.1 GPIO

This session demonstrates Output, Input and Interrupt functionality of GPIO available in the EC25 evaluation board. This example uses `adb shell` to execute the pre-loaded `example_gpio` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.1.1 GPIO's in Peripheral connector
<table class="pinout">
<tr><th>GPIO No</th><th>Connector Pin (P5)</th><th>EC25 Pin</th></tr>
<tr><td>2</td><td>P5.5</td><td>65</td></tr>
<tr><td>3</td><td>P5.7</td><td>64</td></tr>
<tr><td>4</td><td>P5.9</td><td>63</td></tr>
<tr><td>5</td><td>P5.3</td><td>66</td></tr>
</table><br>

```warning
- Use GPIO No to select gpio while executing the application : ./example_gpio 2 (or) ./example_gpio -r 3
- Interrupt example, will use corresponding EC25 Pin number to print the GPIO level
- Interrupt example, will initialize all the above mentioned GPIO's as interrupt pins
```

### 11.1.2 On-Board LEDs
<table class="pinout">
<tr><th>GPIO No</th><th>LED</th></tr>
<tr><td>R (25)</td><td>Red of RGB LED (RGB1)</td></tr>
<tr><td>G (10)</td><td>Green of RGB LED (RGB1)</td></tr>
<tr><td>B (11)</td><td>Blue of RGB LED (RGB1)</td></tr>
</table><br>

```warning
- Use R/G/B instead of GPIO Numbers, While selecting On-Boarding LEDs at the time of executing sample application.
    ./example_gpio G --> To Toggle Green LED (GPIO 10)
```
Execute the application in adb shell _(GPIO-2 & LEDs are used in below Example)_

__Syntax:__
To Toggle   : `./example_gpio <gpionumber>`<br>
To Read     : `./example_gpio -r <gpionumber>`<br>
Interrupt   : `./example_gpio eint`<br>

```console
cd /usrdata/
chmod +x example_gpio
./example_gpio  b
./example_gpio  -r 2
./example_gpio  eint
```

![N|Solid](../pics/EC25/ec25-demo2-gpio-demo.jpg)

__Source Code :__`/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/gpio1/example_gpio.c`

------------

## 11.2 ADC

This session demonstrates the ADC functionality of the EC25 evaluation board using ADC pins available at peripheral connector. This example uses `adb shell` to execute the pre-loaded `example_adc` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.2.1 Pinout
<table class="pinout">
<tr><th>ADC No</th><th>Pin</th></tr>
<tr><td>ADC0</td><td>P5.20</td></tr>
<tr><td>ADC1</td><td>P5.17</td></tr>
<tr><td>VCC</td><td>P5.23</td></tr>
</table><br>

### 11.2.2 Environment Setup
-   __Step 1.__ Connect ADC0 pin to EC25 evaluation board VCC[3.3V] and Read ADC1 default value (Without Connecting VCC), since ADC0 and ADC1 are used in this example.

### 11.2.3 ADC Read
Following example demonstrates ADC read functionality and read analog values of both ADC0 & ADC1.

- ``ADC0 & ADC1`` value in ``uV`` will be displayed
- ``Battery Level`` in ``mV`` will be displayed

__Syntax:__ ./example_adc

```console
cd /usrdata/
chmod +x example_adc
./example_adc
```

![N|Solid](../pics/EC25/ec25-demo2-adc-demo.jpg)

__Source Code :__ `/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/adc/example_adc.c`

------------

## 11.3 UART

This session demonstrates the uart functionality using EC25 evaluation board and a serial terminal(<a href="https://osdn.net/projects/ttssh2/downloads/72009/teraterm-4.105.exe/" target="_blank">Tera Term</a>) running in windows machine. This example uses `adb shell` to execute the pre-loaded `example_uart` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.3.1 Pinout
<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>TXD</td><td>P5.18</td></tr>
<tr><td>RXD</td><td>P5.16</td></tr>
<tr><td>GND</td><td>P5.24</td></tr>
</table><br>

### 11.3.2 Environment Setup
-   __Step 1.__ Connect <a href="https://robokits.co.in/arduino/motor-control-boards/interface-boards/ft232rl-ftdi-usb-to-ttl-serial-adapter-module?gclid=EAIaIQobChMI4oLIlcPk6AIV1RyPCh02iQBqEAYYASABEgJU2fD_BwE" target="_blank">USB to Serial Converter</a> to respective tx and rx pins of the development kit mentioned in the above table.
-   __Step 2.__ Launch the Tera Term, select the COM port for the USB to Serial converter and configure the baud rate to __115200__.

### 11.3.3 UART Transmit/Receive
This section details the steps for testing uart communication in desired baud rate using the pre-loaded `example_uart` demo application. This example selects serial port  and configure baud rate to __115200__.

__Syntax:__ ./example_uart < baud rate >

```console
cd /usrdata/
chmod +x example_uart
./example_uart 115200
```
-   __Transmit:__ Following message will be continuously transmitted on uart and will be displayed in serial terminal(Tera Term).
    -   ``uart test, =+-_0)9(8*7&6^5%4$3#2@1!`~)``

![N|Solid](../pics/EC25/ec25-demo2-uart-demo.jpg)

-   __Receive:__ Messages received on to serial port will be displayed continuously on the command line interface by adb shell. To test receive message, transmit following message from the serial terminal(Tera Term).
    -   ``uart test, =+-_0)9(8*7&6^5%4$3#2@1!`~)``

![N|Solid](../pics/EC25/ec25-demo2-uart-shell-demo.jpg)

__Source Code :__`/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/uart/example_uart.c`

------------

## 11.4 I2C

This session demonstrates the I2C functionality of the EC25 evaluation board using on-board audio codec connected on same i2c bus(`/dev/i2c-2`). This example uses `adb shell` to execute the pre-loaded `example_i2c` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.4.1 Pinout
<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>SCL</td><td>P5.14</td></tr>
<tr><td>SDA</td><td>P5.12</td></tr>
<tr><td>VCC</td><td>P5.23</td></tr>
<tr><td>GND</td><td>P5.24</td></tr>
</table><br>

### 11.4.2 I2C Write
Following example demonstrates I2C write functionality using on-board audio codec chip with slave address __0x18__, by writing two bytes of data starting from register __0x02__.

__Syntax:__  ./example_i2c –s < slave address > –w < register address > < data byte1 > < data byte2 >

```console
cd /usrdata/
chmod +x example_i2c
./example_i2c -s 0x18 –w 0x02 0x01 0x02
```
![N|Solid](../pics/EC25/ec25-demo2-i2c-write-demo.jpg)

### 11.4.3 I2C Read
Following example demonstrates I2C read functionality using on-board audio codec chip with slave address __0x18__, by reading two bytes of data starting from register __0x02__.

__Syntax:__ ./example_i2c –s < slave address > –w < register address > -r < number of bytes >

```console
./example_i2c –s 0x18 –w 0x02 –r 2
```
![N|Solid](../pics/EC25/ec25-demo2-i2c-read-demo.jpg)

__Source Code :__`/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/i2c1/example_i2c.c`

------------

## 11.5 SPI
This session demonstrates the SPI functionality of the EC25 evaluation board using <a href="https://www.bosch-sensortec.com/products/environmental-sensors/pressure-sensors/bmp280/" target="_blank">BMP 280 Sensor </a> (<a href="https://robu.in/product/bmp280-barometric-pressure-and-altitude-sensor-i2c-spi-module/" target="_blank">Buy</a>) connected to SPI pins available at peripheral connector . This example uses `adb shell` to execute the pre-loaded ` example_spi` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.5.1 Pinout
<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>CLK</td><td>P5.4</td></tr>
<tr><td>CS</td><td>P5.6</td></tr>
<tr><td>MISO</td><td>P5.8</td></tr>
<tr><td>MOSI</td><td>P5.10</td></tr>
<tr><td>VCC</td><td>P5.23</td></tr>
<tr><td>GND</td><td>P5.24</td></tr>
</table><br>

### 11.5.2 Environment Setup
-   __Step 1.__ Connect BMP280 sensor to respective signals of the EC25 evaluation board mentioned in the above table and supply the power signals

### 11.5.3 Compile SPI Demo Application
This session explains the procedure to generate SPI demo application, since demo application (`example_spi`) is not available on device. Demo application needs to generated from source code following application compilation procedure. As a reference follow every steps mentioned in the helloworld demo application, but use SPI demo application source code for compilation, download and upload on to device. Refer <a href="#10#10--demo-program-(hello-world!!!)" target="_blank">Section 10</a>

Source code for SPI Demo Application is available in below location, `example_spi` will be generated in same location upon successfull compilation.

```console
/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/spi/std_spi/
```

### 11.5.4 SPI Transfer Data
Following example demonstrates SPI data transfer functionality using Sensor connected to SPI signals. SPI Demo application send and receives 1024 data bytes at 19.2Mhz.

__Syntax:__ ./example_spi

```console
cd /usrdata/
chmod +x example_spi
./example_spi
```

![N|Solid](../pics/EC25/ec25-demo2-spi-read-write-demo.jpg)

Data transfer from the spi loopback test _(shorting MISO & MOSI)_ is captured in the below screenshot

![N|Solid](../pics/EC25/ec25-demo2-spi-loopback-demo.jpg)

```warning
Supported Speed : 960000(default) | 4800000 | 9600000 | 16000000 | 19200000 | 25000000 | 50000000
```
__Source Code :__`/local/mnt/workspace/EC25/Linux_SDK_EC25/ql-ol-extsdk/example/spi/std_spi/example_spi.c`

------------

## 11.6 SDCARD

This session demonstrates the SDCARD testing in EC25 evaluation board. This example uses `adb shell` to check the sdcard detection from windows command prompt. All instructions and screenshots are provided below.

### 11.6.1 Environment Setup
-   __Step 1.__	Insert Micro SD Card to J12
-   __Step 2.__	Connect the Micro USB Cable to J1.
-   __Step 3.__	Connect battery to P2.

### 11.6.2 Mount SD Card
- Enter the following command to mount the sdcard and find the content inside sdcard.

```console
mount /dev/mmcblk0p1 /mnt/
cd /mnt/
ls
```

![N|Solid](../pics/EC25/ec25-demo2-sdcard.jpg)

------------