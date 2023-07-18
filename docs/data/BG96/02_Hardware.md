# 2. Hardware

------------

## 2.1 Specifications
<table class="spec">
<tr><th>Items</td><th>Description</th></tr>
<tr><td>Processor</td><td>MDM9206(1.3Ghz Cortex A7 Processor)</td></tr>
<tr><td>Operating system</td><td>ThreadX</td></tr>
<tr><td>Connectivity</td><td>Cellular, GNSS</td></tr>
<tr><td>SIM card</td><td>uSIM slot</td></tr>
<tr><td>USB</td><td>Micro USB </td></tr>
<tr><td>Peripheral interfaces</td><td>3x UART, 2xSPI, I2C, 2x ADC, GPIO’s</td></tr>
<tr><td>LED Indications</td><td>Status ,Net Light ,Power</td></tr>
<tr><td>Firmware Upgrade</td><td>USB interface and OTA</th></tr>
<tr><td>Power Supply</td><td>5V DC</td></tr>
<tr><td>Battery</td><td>3.7V, 3000mAH, Li-Po</th></tr>
<tr><td>Board size</td><td>50mm x 45mm</th></tr>
</table>
<br>

## 2.2 Block diagram
![N|Solid](../pics/BG96/bg96-block-diagram.jpg)

## 2.3 Connectors

### 2.3.1 Peripheral Connector : J8

<!-- <table class="spec"> -->
<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 60%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 60%;">
    </colgroup>

<tr><td>3.3V</td><td>1</td><td>20</td><td>RESET</td></tr>
<tr><td>GPIO09</td><td>2</td><td>19</td><td>NC</td></tr>
<tr><td>UART3 RXD</td><td>3</td><td>18</td><td>UART3 TXD</td></tr>
<tr><td>UART1 RXD</td><td>4</td><td>17</td><td>UART1 DTR</td></tr>
<tr><td>UART1 TXD</td><td>5</td><td>16</td><td>UART1 CTS</td></tr>
<tr><td>UART1 RTS</td><td>6</td><td>15</td><td>NC</td></tr>
<tr><td>I2C SCL</td><td>7</td><td>14</td><td>NC</td></tr>
<tr><td>I2C SDA</td><td>8</td><td>13</td><td>ADC0</td></tr>
<tr><td>NC</td><td>9</td><td>12</td><td>ADC1</td></tr>
<tr><td>3.3V</td><td>10</td><td>11</td><td>GND</td></tr>
</table><br>

### 2.3.2 Peripheral Connector : J9

<!-- <table class="spec"> -->
<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 60%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 60%;">
    </colgroup>

<tr><td>3.3V</td><td>1</td><td>20</td><td>VBAT</td></tr>
<tr><td>UART2 TXD</td><td>2</td><td>19</td><td>UART2 RXD</td></tr>
<tr><td>GPIO06</td><td>3</td><td>18</td><td>W_DISABLE</td></tr>
<tr><td>SPI2 MISO</td><td>4</td><td>17</td><td>SPI2 CS</td></tr>
<tr><td>SPI2 CLK</td><td>5</td><td>16</td><td>SPI2 MOSI</td></tr>
<tr><td>UART1 DCD</td><td>6</td><td>15</td><td>PWRKEY</td></tr>
<tr><td>GPIO21</td><td>7</td><td>14</td><td>UART1 RI</td></tr>
<tr><td>SPI1 MISO</td><td>8</td><td>13</td><td>SPI1 CS</td></tr>
<tr><td>SPI1 CLK</td><td>9</td><td>12</td><td>SPI1 MOSI</td></tr>
<tr><td>PSM IND</td><td>10</td><td>11</td><td>GND</td></tr>
</table><br>


## 2.4 Hardware Board details.

![N|Solid](../pics/BG96/bg96-hw-details.jpg)
<br>

1.	3.7V Rechargeable Battery Connector (B1)
2.	5V Micro USB Connector (J2)
3.	5V DC Power Jack (J1)
4.	Power Key (SW1) 
5.	Power Reset (SW2)
6.	Battery status LEDs
7.	Status LEDs
8.	Main Antenna (J4)
9.	BG96 Module
10.	GNSS Antenna (J6)
11.	Reserved.
12.	Micro Sim Holder
13.	20-Pin Header Connector (J8)
14.	20-Pin Header Connector (J9)

### 2.4.1 Power Supply

There are three power inlet options: 
- 5V Micro USB connector (J2)
- 5V DC Power Jack (J1)
- Battery (B1)

### 2.4.2 Power Switches

- Power Key (`SW1`) - Turn on/off the module. BG96-board can be turned ON by driving the PWRKEY pin to a low level for at least 500ms. It can be turned OFF by driving the PWRKEY pin to a low level voltage for at least 650ms
- Power Reset (`SW2`) – This switch is used to reset the module. The module can be reset by driving the RESET_N to a low level voltage for time between 150ms and 460ms

### 2.4.3 Status LED's
- Battery Power Good Status LED (D4)
    - LED turn OFF when valid input source is connected
    - LED turn ON when invalid source is connected
- Battery charging Status LED (D5)
    - LED turn ON when charging / charging suspended by thermal loop
    - LED turn OFF when charging done / recharging after termination / IC disabled or no valid input power / battery absent
    - LED blink at 2 Hz when safety timers expired
- Network Status Indication(D8) - Indicate the module’s network activity status
    - Flicker slowly (200ms High/1800ms Low) when network searching
    - Flicker slowly (1800ms High/200ms Low) when idle
    - Flicker quickly (125ms High/125ms Low) when Data transfer is ongoing
    - Always high when voice calling 
- Operation Status LED (D10) - Indicate the module’s operation status
    - LED turn ON when module powered on normally
    - LED turn OFF when module power failure
- Power Status LED (D11) – Board Power status
    - LED turn ON when board powered
  
### 2.4.4 Antenna
- GSM Antenna (J4)
- GNSS Antenna (J6)
 
------------