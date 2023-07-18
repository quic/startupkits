# 2. Hardware

------------
## 2.1 Specification
<table class="pinout">
<tr><td>Processor</td><td>SDX55(1.5Ghz Cortex A7 Processor)</td></tr>
<tr><td>Memory</td><td>512MB NAND, 512MB LPDDR4</td></tr>
<tr><td>Operating system</td><td>Linux</td></tr>
<tr><td>Connectivity</td><td>5GNR sub-6 GHz(FR1), LTE, WiFi6, GNSS</td></tr>
<tr><td>SIM</td><td>2 x microSIM</td></tr>
<tr><td>Storage </td><td>micro-SD</td></tr>
<tr><td>USB</td><td>USB 3.0 Type-C</td></tr>
<tr><td>Audio</td><td>3.5mm Jack/Loudspeaker/Mic</td></tr>
<tr><td>Peripheral Interface</td><td>UART, SPI, I2C, 2xADC, PWM & GPIOs</td></tr>
<tr><td>LED Indications</td><td>Module-status, Net-status, Power & RGB</td></tr>
<tr><td>Debug</td><td>USB & Debug Uart</td></tr>
<tr><td>Firmware Upgrade</td><td>USB & OTA</td></tr>
<tr><td>Power Supply</td><td>5/12V DC</td></tr>
<tr><td>Battery</td><td>3.7V, 5000mAh, Li-Po</td></tr>
<tr><td>Board size</td><td>95mm x 95mm</td></tr>
</table>
<br>

## 2.2 Block Diagram

![N|Solid](../pics/RG500Q/rg500q-hardware-block-diagram.jpg =1100x640)


## 2.3 Connectors

### 2.3.1 Peripheral Connector 1 (J28)

<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 40%;">
    </colgroup>
<tr><td>3.3V</td><td>1</td><td>2</td><td>GND</td></tr>
<tr><td>1.8V</td><td>3</td><td>4</td><td>RESET</td></tr>
<tr><td>PWR KEY</td><td>5</td><td>6</td><td>ADC0</td></tr>
<tr><td>ADC1</td><td>7</td><td>8</td><td>UART1 TX</td></tr>
<tr><td>AIRPLANE MODE</td><td>9</td><td>10</td><td>UART1 RX</td></tr>
<tr><td>GPIO 23</td><td>11</td><td>12</td><td>I2C1 SCL</td></tr>
<tr><td>GPIO 22</td><td>13</td><td>14</td><td>I2C1 SDA</td></tr>
<tr><td>GPIO 92</td><td>15</td><td>16</td><td>SPI1 MOSI</td></tr>
<tr><td>GPIO 96</td><td>17</td><td>18</td><td>SPI1 MISO</td></tr>
<tr><td>GPIO 6</td><td>19</td><td>20</td><td>SPI1 CS</td></tr>
<tr><td>GPIO 5</td><td>21</td><td>22</td><td>SPI1 CLK</td></tr>
<tr><td>3.3V</td><td>23</td><td>24</td><td>GND</td></tr>
</table>

<br>

### 2.3.2 Peripheral Connector 2 (J30)
<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 40%;">
    </colgroup>
<tr><td>3.3V</td><td>1</td><td>2</td><td>1.8V</td></tr>
<tr><td>3.3V</td><td>3</td><td>4</td><td>1.8V</td></tr>
<tr><td>GPIO 7</td><td>5</td><td>6</td><td>3.8V~4.2V</td></tr>
<tr><td>GPIO 101</td><td>7</td><td>8</td><td>3.8V~4.2V</td></tr>
<tr><td>GPIO 103</td><td>9</td><td>10</td><td>3.8V~4.2V</td></tr>
<tr><td>GPIO 104</td><td>11</td><td>12</td><td>GPIO 106</td></tr>
<tr><td>UART1 DCD</td><td>13</td><td>14</td><td>GPIO 32</td></tr>
<tr><td>UART1 DTR</td><td>15</td><td>16</td><td>PWM</td></tr>
<tr><td>UART1 RI</td><td>17</td><td>18</td><td>GPIO 4</td></tr>
<tr><td>NC</td><td>19</td><td>20</td><td>NC</td></tr>
<tr><td>NC</td><td>21</td><td>22</td><td>NC</td></tr>
<tr><td>GND</td><td>23</td><td>24</td><td>GND</td></tr>
</table>

<br>

### 2.3.3 Debug Uart Connector(J29)
<table style="width: 40%">
        <colgroup>
        <col span="1" style="width: 25%;">
        <col span="1" style="width: 30%;">
        </colgroup>
    <tr><td>J29.1</td><td>Debug Uart-Tx</td></tr>
    <tr><td>J29.2</td><td>Debug Uart-Rx</td></tr>
    <tr><td>J29.3</td><td>GND</td></tr>
    </table>

<br>

### 2.3.4 WLAN Debug Uart Connector(J10)
<table style="width: 40%">
        <colgroup>
        <col span="1" style="width: 25%;">
        <col span="1" style="width: 30%;">
        </colgroup>
    <tr><td>J10.1</td><td>Debug Uart-Tx(WiFi)</td></tr>
    <tr><td>J10.2</td><td>Debug Uart-Rx(WiFi)</td></tr>
    <tr><td>J10.3</td><td>GND</td></tr>
    </table>

<br>

### 2.3.5 RTC Connector(J1)
<table style="width: 40%">
        <colgroup>
        <col span="1" style="width: 25%;">
        <col span="1" style="width: 30%;">
        </colgroup>
    <tr><td>J1.1</td><td>RTC Battery(+)</td></tr>
    <tr><td>J1.2</td><td>RTC Battery(-)</td></tr>
    </table>

<br>

### 2.3.6 Battery Connector(J3)

<table style="width: 40%">
        <colgroup>
        <col span="1" style="width: 25%;">
        <col span="1" style="width: 30%;">
        </colgroup>
    <tr><td>J3.1</td><td>Battery (+)</td></tr>
    <tr><td>J3.2</td><td>Battery NTC</td></tr>
    <tr><td>J3.3</td><td>Battery (-)</td></tr>
    </table>

<br>

### 2.3.7 Microphone connector(J13)
<table style="width: 40%">
        <colgroup>
        <col span="1" style="width: 25%;">
        <col span="1" style="width: 30%;">
        </colgroup>
    <tr><td>J13.1</td><td>Mic(-)</td></tr>
    <tr><td>J13.2</td><td>Mic(+)</td></tr>
    </table>

<br>

### 2.3.8 Loudspeaker connector(J14)
<table style="width: 40%">
        <colgroup>
        <col span="1" style="width: 25%;">
        <col span="1" style="width: 30%;">
        </colgroup>
    <tr><td>J14.1</td><td>Speaker(-)</td></tr>
    <tr><td>J14.2</td><td>Speaker(+)</td></tr>
    </table>

<br>

### 2.3.9 Other Connectors

<table style="width: 90%">
        <colgroup>
        <col span="1" style="width: 15%;">
        <col span="1" style="width: 60%;">
        <col span="1" style="width: 25%;">
        </colgroup>
    <tr><th>Connector</th><th>Description</th><th>Notes</th></tr>  
    <tr><td>J4</td><td>DC-Jack</td><td>NA</td></tr>
    <tr><td>J11</td><td>Ethernet connector(RJ45)</td><td>NA</td></tr>
    <tr><td>J12</td><td>3.5mm Audio Jack</td><td>NA</td></tr>
    <tr><td>J16</td><td>USB 3.0/Type-C</td><td>NA</td></tr>
    <tr><td>J17</td><td>SD Card/SIM2 SLOT</td><td>NA</td></tr>
    <tr><td>J18</td><td>SIM1 SLOT</td><td>NA</td></tr>
    <tr><td>ANT0</td><td>5G NR: n41 TRX1 & n79 DIV1<br>LTE: LMHB_TRX</td><td>50 Ohm Impedance</td></tr>
    <tr><td>ANT1</td><td>5G NR: n41 DIV1 & n79 TRX1<br>LTE: LB_TRX1 & LMHB_DRX</td><td>50 Ohm Impedance</td></tr>
    <tr><td>ANT2</td><td>5G NR: n79 DIV0</td><td>50 Ohm Impedance</td></tr>
    <tr><td>ANT3</td><td>5G NR: n79 TRX0</td><td>50 Ohm Impedance</td></tr>
    <tr><td>ANT4</td><td>5G NR: n77/78 TRX0<br>LTE: MHB_PRX MIMO & UHB_TRX & LAA_DRX</td><td>50 Ohm Impedance</td></tr>
    <tr><td>ANT5</td><td>5G NR: n41 TRX0 & n77/78 TRX1<br>LTE: UHB_PRX MIMO & LAA_PRX</td><td>50 Ohm Impedance</td></tr>
    <tr><td>ANT6</td><td>5G NR: n41/n77/n78 DIV0<br>LTE: MHB_DRX MIMO & UHB_DRX & LAA_PRX_MIMO</td><td>50 Ohm Impedance</td></tr>
    <tr><td>ANT7</td><td>5G NR: n77/78 DIV1<br>LTE: MHB_TRX1 & UHB_DRX MIMO & LAA_DRX_MIMO</td><td>50 Ohm Impedance</td></tr>
    <tr><td>ANT-GNSS</td><td>GNSS Antenna</td><td>50 Ohm Impedance</td></tr>
    </table>

<br>

## 2.4 LED

### 2.4.1 RGB LED (DS10)
<table style="width: 40%">
       <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 30%;">
    </colgroup>
<tr><td>RED</td><td>GPIO 32</td></tr>
<tr><td>GREEN</td><td>GPIO 92</td></tr>
<tr><td>BLUE</td><td>GPIO 22</td></tr>
</table>

<br>

### 2.4.2 Other LEDs

<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 30%;">
    </colgroup>
<tr><td>DS11</td><td>Module Status</td></tr>
<tr><td>DS12</td><td>Network Registration</td></tr>
<tr><td>DS13</td><td>Network Activity</td></tr>
<tr><td>DS14</td><td>Sleep Indication</td></tr>
</table>

<br>

## 2.5 Switches

### 2.5.1 Power-On switch(S1)

Power On switch is used to Turn on/off the RG500Q Evaluation kit by pressing the push button `S1`.

### 2.5.2 Reset switch(S2)

Reset switch can be used to reset the module by pressing the push button `S2`. 

### 2.5.3 USB Boot switch(S3-1)

USB Boot is used to force the module to enter emergency download mode by pulling up USB&#95;BOOT pin to VDD&#95;EXT through `S3.1`

### 2.5.4 Auto Power-On(S3-2)

PON is an auto power on feature & the module can be turned on by pulling this pin high through `S3.2`

------------