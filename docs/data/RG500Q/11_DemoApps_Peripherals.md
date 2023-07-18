# 11. Demo Programs (Peripherals)

------------
This section demonstrates usage of sample applications for various peripherals such as GPIO, I2C, SPI, ADC, Audio and PWM available in the RG500Q evaluation board. All sample applications are located at `/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/`. Sample applications are preloaded in the devices and can be accessed directly using command line interfaces. Detailed instructions on the peripherals and demo are explained below.

## 11.1 GPIO 
This session demonstrates Output, Input and Interrupt functionality of GPIO available in the RG500Q evaluation board. This example uses `adb shell` to execute the pre-loaded `gpio_test2` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.1.1 GPIO's in Peripheral connector

<table class="pinout">
<tr><th>GPIO No</th><th>Pin</th><th>Description</th></tr>
<tr><td>23</td><td>J28.11</td><td>Input/Output</td></tr>
<tr><td>22</td><td>J28.13</td><td>Input/Output/Blue LED</td></tr>
<tr><td>92</td><td>J28.15</td><td>Input/Output/Green LED</td></tr>
<tr><td>96</td><td>J28.17</td><td>Input/Output</td></tr>
<tr><td>6</td><td>J28.19</td><td>Input/Output</td></tr>
<tr><td>5</td><td>J28.21</td><td>Input/Output</td></tr>
<tr><td>7</td><td>J30.5</td><td>Input/Output</td></tr>
<tr><td>101</td><td>J30.7</td><td>Input/Output</td></tr>
<tr><td>103</td><td>J30.9</td><td>Input/Output/Interrupt</td></tr>
<tr><td>4</td><td>J30.18</td><td>Input/Output</td></tr>
<tr><td>104</td><td>J30.11</td><td>Input/Output</td></tr>
<tr><td>106</td><td>J30.12</td><td>Input/Output</td></tr>
<tr><td>32</td><td>J30.14</td><td>Input/Output/Red LED/Interrupt</td></tr>
</table><br>

### 11.1.2 GPIO Output 
This section details usage of GPIO as an output using `gpio_tes2` application. This demo uses onboard green LED(GPIO __92__) for turn on/off the led and demonstrates GPIO output functionality.

__Syntax:__ gpio_test2 -o < gpio number > < level(0/1) >

```console
adb shell gpio_test2 -o 92 0
adb shell gpio_test2 -o 92 1
```

![N|Solid](../pics/RG500Q/rg500q-demo2-gpio-output-demo.jpg)


### 11.1.3 GPIO Input 
This section details usage of GPIO as an input using `gpio_tes2` application. This demo uses GPIO __92__ available in peripheral connector to read input high or low value. _Note: Connect GND to desired pin to make it low when the pin is high_

__Syntax:__ gpio_test2 -i < gpio number >

```console
adb shell gpio_test2 -i 92
```

![N|Solid](../pics/RG500Q/rg500q-demo2-gpio-input-demo.jpg)

### 11.1.4 GPIO Interrupt 
This section details usage of GPIO as an interrupt using `gpio_tes2` application. This demo uses GPIO __103__ available in peripheral connector and wait for the interrupt and print level for desired seconds or default 15 seconds. _Note: Connect GND to desired pin to make it low when the pin is high_

__Syntax:__ gpio_test2 -n < gpio number > < wait-timeout >

```console
adb shell gpio_test2 -n 103 
```

![N|Solid](../pics/RG500Q/rg500q-demo2-gpio-interrupt-demo.jpg)

__Source Code :__ GPIO application is located at  `/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/gpio2/example_gpio.c`

------------

## 11.2 UART

This session demonstrates the uart functionality using RG500Q evaluation board and a serial terminal(<a href="https://osdn.net/projects/ttssh2/downloads/72009/teraterm-4.105.exe/" target="_blank">Tera Term</a>) running in windows machine. This example uses `adb shell` to execute the pre-loaded `uart_test` demo application from windows command prompt. All instructions and screenshots are provided below.
### 11.2.1 Pinout
<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>Uart-TX</td><td>J28.8</td></tr>
<tr><td>Uart-RX</td><td>J28.10</td></tr>
<tr><td>GND</td><td>J28.24</td></tr>
</table><br>

### 11.2.2 Environment Setup
-   __Step 1.__ Connect <a href="https://robokits.co.in/arduino/motor-control-boards/interface-boards/ft232rl-ftdi-usb-to-ttl-serial-adapter-module?gclid=EAIaIQobChMI4oLIlcPk6AIV1RyPCh02iQBqEAYYASABEgJU2fD_BwE" target="_blank">USB to Serial Converter</a> to respective tx and rx pins of the development kit mentioned in the above table.
-   __Step 2.__ Launch the Tera Term, select the COM port for the USB to Serial Converter and configure the baud rate to __115200__.

### 11.2.3 UART Transmit/Receive
This section details the steps for testing uart communication in desired baud rate using the pre-loaded `uart_test` demo application. This example selects serial port `/dev/ttyHS0` and configure baud rate to __115200__.

__Syntax:__ _uart_test < baud rate >_

```console
adb shell uart_test 115200
```
-   __Transmit:__ Following message will be continuously transmitted on uart and will be displayed in serial terminal(Tera Term)
    -   ``uart test, =+-_0)9(8*7&6^5%4$3#2@1!`~)``

![N|Solid](../pics/RG500Q/rg500q-demo2-uart-demo.jpg)

-   __Receive:__ Messages received on to serial port will be displayed continuously on the command line interface by adb shell. To test receive message, transmit following message from the serial terminal(Tera Term).
    -   ``uart test, =+-_0)9(8*7&6^5%4$3#2@1!`~)``

![N|Solid](../pics/RG500Q/rg500q-demo2-uart-shell-demo.jpg)

__Source Code :__ UART application is located at ``/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/uart/main.c``

------------

## 11.3 I2C

This session demonstrates the I2C functionality of the RG500Q evaluation board using on-board audio codec connected on same i2c bus(`/dev/i2c-3`). This example uses `adb shell` to execute the pre-loaded `i2c_test2` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.3.1 Pinout

<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>SCL</td><td>J28.12</td></tr>
<tr><td>SDA</td><td>J28.14</td></tr>
<tr><td>VCC</td><td>J28.23</td></tr>
<tr><td>GND</td><td>J28.24</td></tr>
</table><br>

### 11.3.2 I2C Write 
Following example demonstrates I2C write functionality using on-board audio codec chip with slave address __0x18__, by writing two bytes of data starting from register __0x02__.

__Syntax:__  i2c_test2 –s < slave address > –w < register address > < data byte1 > < data byte2 >  

```console
adb shell i2c_test2 –s 0x18 –w 0x02 0x01 0x02
```
![N|Solid](../pics/RG500Q/rg500q-demo2-i2c-write-demo.jpg)

### 11.3.3 I2C Read 
Following example demonstrates I2C read functionality using on-board audio codec chip with slave address __0x18__, by reading two bytes of data starting from register __0x02__.

__Syntax:__ i2c_test2 –s < slave address > –w < register address > -r < number of bytes >

```console
adb shell i2c_test2 –s 0x18 –w 0x02 –r 2
```
![N|Solid](../pics/RG500Q/rg500q-demo2-i2c-read-demo.jpg)

__Source Code :__ I2C application is located at ``/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/i2c2/example_i2c.c``

------------

## 11.4 SPI

This session demonstrates the SPI functionality of the RG500Q evaluation board using <a href="https://www.bosch-sensortec.com/products/environmental-sensors/pressure-sensors/bmp280/" target="_blank">BMP 280 Sensor </a> (<a href="https://robu.in/product/bmp280-barometric-pressure-and-altitude-sensor-i2c-spi-module/" target="_blank"> Buy</a>) connected to SPI (`/dev/spidev1.0`) pins available at peripheral connector . This example uses `adb shell` to execute the pre-loaded `spi_test2` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.4.1 Pinout
<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>CLK</td><td>J28.22</td></tr>
<tr><td>CS</td><td>J28.20</td></tr>
<tr><td>MISO</td><td>J28.18</td></tr>
<tr><td>MOSI</td><td>J28.16</td></tr>
<tr><td>VCC</td><td>J28.23</td></tr>
<tr><td>GND</td><td>J28.24</td></tr>
</table><br>

### 11.4.2 Environment Setup
-   __Step 1.__ Connect BMP280 sensor to respective signals of the RG500Q evaluation board mentioned in the above table and supply the power signals

### 11.4.3 SPI Transfer Data
Following example demonstrates SPI data transfer functionality using Sensor connected to SPI signals, by writing ten bytes of data.

__Syntax:__ spi_test2 -t < byte1 > < byte2 > < byte3 > < byte4 > < byte5 > < byte6 > < byte7 > < byte8 > < byte9 > < byte10 >

```console
adb shell spi_test2 -t 0x74 0x27 0x00 0x00 0x00 0x00 0xFA 0x00 0x00 0x00
```
Data transfer from the sensor is captured in the below screenshot

![N|Solid](../pics/RG500Q/rg500q-demo2-spi-read-write-demo.jpg)

Data transfer from the spi loopback test _(shorting MISO & MOSI)_ is captured in the below screenshot

![N|Solid](../pics/RG500Q/rg500q-demo2-spi-loopback-demo.jpg)

```warning
Supported Speed : 960000(default) | 4800000 | 9600000 | 16000000 | 19200000 | 25000000 | 50000000
```
__Source Code :__ SPI application is located at ``/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/spi2/example_spi.c``

------------

## 11.5 ADC

This session demonstrates the ADC functionality of the RG500Q evaluation board using ADC pins available at peripheral connector . This example uses `adb shell` to execute the pre-loaded `adc_test` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.5.1 Pinout
<table class="pinout">
<tr><th>ADC No</th><th>Pin</th></tr>
<tr><td>ADC0</td><td>J28.6(Max 1.8V)</td></tr>
<tr><td>ADC1</td><td>J28.7(Max 1.8V)</td></tr>
<tr><td>VCC</td><td>J28.3</td></tr>
</table><br>

### 11.5.2 Environment Setup
-   __Step 1.__ Connect ADC0 pin to RG500Q evaluation board VCC[1.8V], since ADC0 is used in this example.

### 11.5.3 ADC Read
Following example demonstrates ADC read functionality and read analog values of both ADC0 & ADC1 and display in micro volts.

__Syntax:__ adc_test 

```console
adb shell adc_test
```
![N|Solid](../pics/RG500Q/rg500q-demo2-adc-demo.jpg)

__Source Code :__ ADC application is located at ``/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/adc/main.c``

------------

## 11.6 Audio

### 11.6.1 Record Audio (Using 3.5mm Headphone Connector)

This session demonstrates audio record functionality using headphones connected to on-board 3.5mm audio connector. This example uses `adb shell` to execute the pre-loaded `audio_test` demo application from windows command prompt. All instructions and screenshots are provided below.

__Syntax:__ audio_test -f < file path > -c

```console
adb shell 
audio_test -f /data/test.wav -c
```

![N|Solid](../pics/RG500Q/rg500q-demo2-audio-rec-head-phone-demo.jpg)

- Use `Ctrl+C` to finish/end the record 
- Recorded audio (`test.wav`) is available in same location

### 11.6.2 Playback Audio (Using 3.5mm Headphone Connector)

This session demonstrates audio playback functionality using headphones connected to on-board 3.5mm audio connector. This example uses `adb shell` to execute the pre-loaded `audio_test` and `audio_cfg` demo applications from windows command promt. All instructions and screenshots are provided below.

```warning
Headphone volume is low by default
To configure HeadPhone volume to maximum, first execute "audio_test"(audio playback) and then execute "audio_cfg" in separate command prompts.
```

__Syntax:__ audio_test -f < file path > -p

```console
adb shell 
audio_test -f /data/test.wav -p
```

![N|Solid](../pics/RG500Q/rg500q-demo2-audio-playback-demo.jpg)

-	Use new windows command prompt to execute below command.

__Syntax:__ adb shell audio_cfg h

```console
adb shell audio_cfg h
```

![N|Solid](../pics/RG500Q/rg500q-demo2-audio-cfg-head-phone.jpg)

_Limitation - This device supports only mono audio_

### 11.6.3 Record Audio (Using Microphone Connector)

This session demonstrates audio record functionality using microphone(Electret Condenser type) connected to two pin microphone connector. This example uses `adb shell` to execute the pre-loaded `audio_test` demo application from windows command promt. Script is basically to configure audio codec for enabling on board mic. All instructions and screenshots are provided below.

```warning
On board Microphone is disable by default
To Enable the Microphone, first execute "audio_cfg"and then execute "audio_test" (audio record) in separate command prompts.
```

__Syntax:__ adb shell audio_cfg m

```console
adb shell audio_cfg m
```

![N|Solid](../pics/RG500Q/rg500q-demo2-audio-cfg-mic-conn.jpg)

-	Use new windows command prompt to execute below command.

__Syntax:__ audio_test -f < file path > -c

```console
adb shell 
audio_test -f /data/test.wav -c
```

![N|Solid](../pics/RG500Q/rg500q-demo2-audio-rec-head-phone-demo.jpg)

- Use `Ctrl+C` to finish/end the record 
- Recorded audio (`test.wav`) is available in same location

### 11.6.4 Playback Audio (Using Loudspeaker Connector)

This session demonstrates audio playback functionality using loudspeaker(8ohm,2W) connected to two pin loudspeaker connector. This example uses `adb shell` to execute the pre-loaded `audio_test` demo application & `audio_etc` script from windows command prompt. Script is basically to configure audio codec volume control registers to increase the volume from the loudspeaker. All instructions and screenshots are provided below.

```warning
Loudspeaker volume is low by default
To configure Loudspeaker volume to maximum, first execute "audio_test"(audio playback) and then execute "audio_cfg" in separate command prompts.
```

__Syntax:__ audio_test -f < file name > -p

```console
adb shell 
audio_test -f test.wav -p
```

![N|Solid](../pics/RG500Q/rg500q-demo2-audio-playback-demo.jpg)

-	Use new windows command prompt to execute below command.

__Syntax:__ adb shell audio_cfg l

```console
adb shell audio_cfg l
```

![N|Solid](../pics/RG500Q/rg500q-demo2-audio-cfg-loud-spk.jpg)

__Source Code :__  Audio application is located at ``/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/audio/main.c``

------------

## 11.7 PWM

This session demonstrates the PWM signal capability of the RG500Q evaluation board. This example uses `adb shell` to execute the pre-loaded `pwm_test` demo application from windows command prompt. All instructions and screenshots are provided below.

### 11.7.1 Pinout
<table class="pinout">
<tr><th>Signal</th><th>Pin</th></tr>
<tr><td>PWM</td><td>J30.16(1.8V)</td></tr>
<tr><td>Gnd</td><td>J30.24</td></tr>
</table><br>

### 11.7.2 Environment Setup
-   __Step 1.__ Connect an external 2 pin LED or Oscilloscope to a PWM pin(J30.16) & Gnd, run the below PWM command to observe led blinking 

### 11.7.3 PWM Config

Following example demonstrates PWM enable and disable functionality and configures PWM for 4 sec period and 50%(2 sec) duty cycle. Once configured LED's will start blink according to the configuration. All values entered here are in nano seconds.

__Syntax:__ pwm_test < enable/disable > < period ns > < duty_cycle ns>

```console
adb shell pwm_test 1 4000000000 200000000
adb shell pwm_test 0
```

![N|Solid](../pics/RG500Q/rg500q-demo2-pwm-demo.jpg)

__Source Code :__ PWM application is located at `/local/mnt/workspace/RG500Q/Linux_SDK_RG500Q/sample/etc/scripts/pwm_test`

------------

## 11.8 SDCARD

This session demonstrates the sdcard testing in RG500Q evaluation board. This example uses `adb shell` to check the sdcard detection using the `df` command from windows command prompt. All instructions and screenshots are provided below.

### 11.8.1 Environment Setup
-   __Step 1.__	Insert Micro SD Card to J17 Connector.
-   __Step 2.__	Connect the USB Cable Type C to J16.
-   __Step 3.__	Connect battery to J3.

### 11.8.2 SDCARD Detection

SD card should get detected & mounted automatically in RG500Q evaluation board.

__Note:__: It's detected in /mnt/sdcard block and find the content inside sdcard by executing the below command.

```console
adb shell
cd /mnt/sdcard/
ls
```

![N|Solid](../pics/RG500Q/rg500q-demo2-sdcard-demo.jpg)

------------