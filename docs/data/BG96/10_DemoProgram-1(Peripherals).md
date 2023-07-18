
# 10. Demo Program-1(Peripherals)

------------
Step by step procedure for testing peripherals is explained below.
 - Example 1 : UART
 - Example 2 : I2C
 - Example 3 : SPI
 - Example 4 : GPIO_in
 - Example 5 : GPIO_output
 - Example 6 : RTC
 - Example 7 : ADC

## 10.1 Example&#95;uart Application:

This is an example code for UARTs. The example application will send test messages to all three UART interfaces at one second interval. Also, any data coming to receive lines are captured and displayed. 

### 10.1.1 BG96 UART:
<table class="pinout">
<tr><th>UART no</th><th>Signal</th><th>On Dev-Kit</th><th>BG96 Pin #</th></tr>
<tr><td rowspan="2">UART1</td><td>TXD</td><td>J8.5</td><td>35</td></tr>
<tr><td>RXD</td><td>J8.4</td><td>36</td></tr>
<tr><td rowspan="2">UART2</td><td>TXD</td><td>J9.2</td><td>23</td></tr>
<tr><td>RXD</td><td>J9.19</td><td>22</td></tr>
<tr><td rowspan="2">UART3<td>TXD</td><td>J8.18</td><td>27</td></tr>
<tr><td>RXD</td><td>J8.3</td><td>28</td></tr>
</table><br>

__Steps to setup Dev-kit & serial port__
- Clean and build the UART example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
- Flash the UART binary image (quectel&#95;demo&#95;uart.bin and oem&#95;app&#95;path.ini). <a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Restart the board.
- A USB to serial converter can be connected to UART1/UART2/UART3 for test validation, Review debug logs<br>
- Open the TeraTerm or QCOM terminal tool and configure the terminal as below,
    - Baud rate: 115200
    - Byte size: 8 bit
     - Parity: None
     - Stop bit : 1
     - Flow control: No flow control<br>
     ![N|Solid](../pics/BG96/UART1.jpg)<br>
     ![N|Solid](../pics/BG96/UART2.jpg)<br>
     ![N|Solid](../pics/BG96/UART3.jpg)<br>

## 10.2 Example&#95;I2C Application:

This is an example code for I2C. This example code reads/writes from/to a register of MAG3110 Magnetometer sensor. Any I2C sensor can be integrated to the BG96 board. Based on the sensor chip, need to modify the slave address and register address in the example code. 

__Note:__ I2C read/write procedures are different from some manufacturers. Hence also need to modify i2c read() and i2c write() functions as it is

### 10.2.1 BG96 I2C:
<table class="pinout">
<tr><th>I2C signals</th><th>On Dev-Kit</th><th>BG96 Pin #</th></tr>
<tr><td>SCL</td><td>J8.7</td><td>40</td></tr>
<tr><td>SDA</td><td>J8.8</td><td>41</td></tr>
<tr><td>GND</td><td>J8.11</td><td>NA</td></tr>
</table><br>

__Steps to setup Dev-kit & serial port__
- Connect an I2C based sensor to the BG96 board. 
- Go to I2C example code directory (..quectel/example/i2c/src), Open example&#95;i2c.c file. Configure the slave address and register address (line number 31 and 32). Save the file. Changes are shown below for reference

&#35;define I2C&#95;SLAVE&#95;ADDRESS			        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;0x0E<br>
&#35;define I2C&#95;TEST&#95;REG&#95;ADDRESS			 &ensp;&ensp;&ensp;0x09 
- Clean and build I2C example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
- Flash the I2C binary image (quectel&#95;demo&#95;i2c.bin and oem&#95;app&#95;path.ini). <a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Restart the board
- Use TeraTerm or QFLOG to see the debug logs. <a href="#Compilation%20Instructions"><a href="#" target="_blank" onclick="LoadPage(5);return false;">Refer section 5.5</a><br>

![N|Solid](../pics/BG96/bg96-i2c.jpg)

## 10.3 Example&#95;SPI Application:

This is an example code for SPI. This example code reads/writes from/to a register of LIS3DL Magnetometer sensor. 
Any SPI sensor can be integrated to the BG96 board. Based on the sensor chip, need to modify register address in the example code. 

__Note:__ SPI read/write procedures are different from some manufacturers. Hence also need to modify spi_read() and spi_write() functions as it is.<br>

__Steps to setup Dev-kit & serial port__
- Connect an SPI based sensor to the SPI1 pins of BG96 board
- Go to SPI example code directory (..quectel/example/spi/src), Open example&#95;spi.c file. Configure the register address (line number 28). Save the file. Changes are shown below for reference

&#35;define SPI&#95;TEST&#95;REG&#95;ADDR				32

- Clean and build SPI example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
- Flash the SPI binary image (quectel&#95;demo&#95;spi.bin and oem&#95;app&#95;path.ini).<a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Restart the board
- Use TeraTerm or QFLOG to see the debug logs. <a href="#Compilation%20Instructions"><a href="#" target="_blank" onclick="LoadPage(5);return false;">Refer section 5.5</a><br>
![N|Solid](../pics/BG96/bg96-spi.jpg)


## 10.4 Example&#95;GPIO&#95;input&#95;Application:

This is an example code for GPIO inputs. This example application generates a 500 mS in daisy chain format.By default, all GPIO's are in active high state.

__Steps to setup EVK & serial port__
- Go to GPIO example code directory (../quectel/example/gpio/inc), Open example&#95;gpio.h file. Change GPIO&#95;TEST&#95;MODE macro definition to ‘0’ (input test mode, line number 17). Save the file. Changes are shown below for reference

&#35;define GPIO&#95;TEST&#95;MODE   0	//1: test pin output; 0: test pin input;

- Clean and build the GPIO example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
- Flash the GPIO binary image (quectel&#95;demo&#95;gpio.bin and oem&#95;app&#95;path.ini). <a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Restart the board.
- Use TeraTerm or QFLOG to see the debug logs. <a href="#Compilation%20Instructions"><a href="#" target="_blank" onclick="LoadPage(5);return false;">Refer section 5.5</a>

![N|Solid](../pics/BG96/bg96-gpio-i.jpg)


## 10.5 Example&#95;GPIO&#95;output&#95;Application:

This is an example code for GPIO outputs. This example application generates a 500 mS active low pulse on each GPIOs in daisy chain format. By default, all GPIOs are drive active high.

__Steps to setup Dev-kit & serial port__
- Go to GPIO example code directory (../quectel/example/gpio/inc), Open example&#95;gpio.h file. Change GPIO&#95;TEST&#95;MODE macro definition to ‘1’ (output test mode, line   number 17). Save the file. Changes are shown below for reference

&#35;define GPIO&#95;TEST&#95;MODE   1	//1: test pin output; 0: test pin input;

- Clean and build the GPIO example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
- Flash the GPIO binary image (quectel&#95;demo&#95;gpio.bin and oem&#95;app&#95;path.ini). <a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Restart the board.
- Use TeraTerm or QFLOG to see the debug logs. <a href="#Compilation%20Instructions"><a href="#" target="_blank" onclick="LoadPage(5);return false;">Refer section 5.5</a>

![N|Solid](../pics/BG96/bg96-gpio-o.jpg)


## 10.6 Example&#95;RTC Application:

This is an example code for RTC. This example application set a defined time (19/11/11,15:14:06) and reads the time at one second interval.

-  Disable QFLOG or upgrade the firmware on BG96 board 
-  Clean and build atc&#95;pipe example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
-  Flash rtc&#95;pipe binary image (quectel&#95;demo&#95;rtc&#95;pipe.bin and oem&#95;app&#95;path.ini). <a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Connect UART2 to the PC using USB to serial converter, and open a terminal tool at baud rate 115200, Review the logs<br>
![N|Solid](../pics/BG96/bg96-rtc.jpg)<br>

## 10.7 Example&#95;ADC Application:

This is an example code for ADC input.  This example application reads ADC0 and ADC1 pins at one second interval. ADC reads in millivolt. 

__Note:__ Maximum ADC input voltage is 1800mv. Please make sure that the ADC input voltage is not more than 1800mv.

- Clean and build adc&#95;pipe example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
- Flash the ADC binary image (quectel&#95;demo&#95;adc.bin and oem&#95;app&#95;path.ini). <a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Restart the board
- Use TeraTerm or QFLOG to see the debug logs. <a href="#Compilation%20Instructions"><a href="#" target="_blank" onclick="LoadPage(5);return false;">Refer section 5.5</a><br>
![N|Solid](../pics/BG96/bg96-adc.jpg)
- Inputs (voltage level less than 1800mv) can be connected to ADC for test validation


------------