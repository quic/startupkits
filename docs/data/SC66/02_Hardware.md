# 2. Hardware

------------
## 2.1 Specification

<table class="pinout">
<tr><td>Processor</td><td>SDM660(2.2Ghz 64Bit Octa Core Processor)</td></tr>
<tr><td>Memory</td><td>64GB eMMC + 4GB LPDDR4</td></tr>
<tr><td>Operating system</td><td>Android 10</td></tr>
<tr><td>Connectivity</td><td>LTE, GNSS, WiFi, BT</td></tr>
<tr><td>Camera</td><td>2 x 12MP MIPI CSI Camera</td></tr>
<tr><td>Display</td><td>Supports 5" MIPI-DSI Touch Panel Display</td></tr>
<tr><td>SIM Card</td><td>2 x microSIM</td></tr>
<tr><td>Storage</td><td>micro-SD</td></tr>
<tr><td>USB</td><td>USB 3.1 Type-C, USB 2.0 Host Type-A </td></tr>
<tr><td>Audio</td><td>3.5mm Jack, Loudspeaker, Earphone & Mic</td></tr>
<tr><td>Peripheral Interface</td><td>2xUART, 2xSPI, 2xI2C, ADC & GPIO’s</td></tr>
<tr><td>LED Indications</td><td>Module Status ,Net Status, Power & RGB</td></tr>
<tr><td>Debug</td><td>USB & Debug Uart</td></tr>
<tr><td>Firmware Upgrade</td><td>USB & OTA</td></tr>
<tr><td>Power Supply</td><td>5V DC</td></tr>
<tr><td>Battery</td><td>3.7V, 3000mAH, Li-Po</td></tr>
<tr><td>Board size</td><td>80mm x 90mm</td></tr>

</table>

<br>

## 2.2 Block Diagram
![N|Solid](../pics/SC66/sc66-block-diagram.jpg =1100x640)


## 2.3 Connectors

### 2.3.1 Peripheral Connector 1 (J13)

<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 40%;">
    </colgroup>
<tr><td>3.3V</td><td>1</td><td>2</td><td>GND</td></tr>
<tr><td>SPI4 CLK</td><td>3</td><td>4</td><td>SPI3 CLK</td></tr>
<tr><td>SPI4 MISO</td><td>5</td><td>6</td><td>SPI3 MISO</td></tr>
<tr><td>SPI4 MOSI</td><td>7</td><td>8</td><td>SPI3 MOSI</td></tr>
<tr><td>SPI4 CS</td><td>9</td><td>10</td><td>SPI3 CS</td></tr>
<tr><td>I2C6 SDA</td><td>11</td><td>12</td><td>PWR KEY</td></tr>
<tr><td>I2C6 SCL</td><td>13</td><td>14</td><td>UART6 TXD</td></tr>
<tr><td>UART1 TXD</td><td>15</td><td>16</td><td>UART6 RXD</td></tr>
<tr><td>UART1 RXD</td><td>17</td><td>18</td><td>UART6 CTS</td></tr>
<tr><td>SENSOR I2C SDA</td><td>19</td><td>20</td><td>UART6 RTS</td></tr>
<tr><td>SENSOR I2C SCL</td><td>21</td><td>22</td><td>1.8V</td></tr>
<tr><td>3.3V</td><td>23</td><td>24</td><td>GND</td></tr>
</table>

<br>

### 2.3.2 Peripheral Connector 2 (J14)
<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 40%;">
    </colgroup>
<tr><td>3.3V</td><td>1</td><td>2</td><td>GND</td></tr>
<tr><td>GPIO 41</td><td>3</td><td>4</td><td>GPIO 61</td></tr>
<tr><td>GPIO 77</td><td>5</td><td>6</td><td>GPIO 72</td></tr>
<tr><td>GPIO 71</td><td>7</td><td>8</td><td>GPIO 68</td></tr>
<tr><td>GPIO 69</td><td>9</td><td>10</td><td>GPIO 70</td></tr>
<tr><td>GPIO 34</td><td>11</td><td>12</td><td>VOL (+)</td></tr>
<tr><td>ADC1</td><td>13</td><td>14</td><td>VOL (-)</td></tr>
<tr><td>ADC2</td><td>15</td><td>16</td><td>RESERVED</td></tr>
<tr><td>3.8V~4.2V</td><td>17</td><td>18</td><td>RESERVED</td></tr>
<tr><td>3.8V~4.2V</td><td>19</td><td>20</td><td>RESERVED</td></tr>
<tr><td>1.8V</td><td>21</td><td>22</td><td>GND</td></tr>
<tr><td>3.3V</td><td>23</td><td>24</td><td>GND</td></tr>
</table>


------------
