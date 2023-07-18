# 2. Hardware

------------
## 2.1 Specification
<table class="pinout">
<tr><td>Processor</td><td>MSM8909(1.1Ghz Quad Core Processor)</td></tr>
<tr><td>Memory</td><td>8GB eMMC + 1GB LPDDR3</td></tr>
<tr><td>Operating system</td><td>Android 7.1 / Linux</td></tr>
<tr><td>Connectivity</td><td>LTE, GNSS, WiFi, BT</td></tr>
<tr><td>Camera</td><td>5MP MIPI CSI Camera</td></tr>
<tr><td>Display</td><td>Supports 5" & 3.5" MIPI-DSI Touch Panel Display</td></tr>
<tr><td>SIM Card</td><td>2 x microSIM</td></tr>
<tr><td>Storage</td><td>micro-SD</td></tr>
<tr><td>USB</td><td>micro-USB</td></tr>
<tr><td>Audio</td><td>3.5mm Jack, Loudspeaker, Earphone & Mic</td></tr>
<tr><td>Peripheral Interface</td><td>UART, SPI, I2C, ADC & GPIO’s</td></tr>
<tr><td>LED Indications</td><td>Module Status ,Net Status, Power & RGB</td></tr>
<tr><td>Debug</td><td>USB & Debug Uart</td></tr>
<tr><td>Firmware Upgrade</td><td>USB & OTA</td></tr>
<tr><td>Power Supply</td><td>5V DC</td></tr>
<tr><td>Battery</td><td>3.7V, 3000mAH, Li-Po</td></tr>
<tr><td>Board size</td><td>85mm x 65mm</td></tr>
</table>
<br>

## 2.2 Block Diagram
![N|Solid](../pics/SC20/sc20-block-diagram.jpg)


## 2.3 Connectors

### 2.3.1 Peripheral Connector 1 (P4) 

<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 40%;">
    </colgroup>
<tr><td>3.3V</td><td>1</td><td>2</td><td>GND</td></tr>
<tr><td>GPIO 92</td><td>3</td><td>4</td><td>SPI CLK</td></tr>
<tr><td>GPIO 16</td><td>5</td><td>6</td><td>SPI CS</td></tr>
<tr><td>GPIO 17</td><td>7</td><td>8</td><td>SPI MISO</td></tr>
<tr><td>GPIO 69</td><td>9</td><td>10</td><td>SPI MOSI</td></tr>
<tr><td>GPIO 23</td><td>11</td><td>12</td><td>I2C2 SDA</td></tr>
<tr><td>GPIO 68</td><td>13</td><td>14</td><td>I2C2 SCL</td></tr>
<tr><td>GPIO 97</td><td>15</td><td>16</td><td>UART1 RX</td></tr>
<tr><td>GPIO 98</td><td>17</td><td>18</td><td>UART1 TX</td></tr>
<tr><td>PWR KEY</td><td>19</td><td>20</td><td>ADC (0-1.7V)</td></tr>
<tr><td>1.8V</td><td>21</td><td>22</td><td>RESET</td></tr>
<tr><td>3.3V</td><td>23</td><td>24</td><td>GND</td></tr>
</table>

<br>

### 2.3.2 Peripheral Connector 2 (P5) 
<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 40%;">
    </colgroup>
<tr><td>3.3V</td><td>1</td><td>2</td><td>GPIO 88</td></tr>
<tr><td>1.8V</td><td>3</td><td>4</td><td>GPIO 89</td></tr>
<tr><td>VOL (+)</td><td>5</td><td>6</td><td>GPIO 94</td></tr>
<tr><td>VOL (-)</td><td>7</td><td>8</td><td>GPIO 36</td></tr>
<tr><td>I2C1 SDA</td><td>9</td><td>10</td><td>GPIO 65</td></tr>
<tr><td>I2C1 SCL</td><td>11</td><td>12</td><td>GPIO 96</td></tr>
<tr><td>VIB PWM</td><td>13</td><td>14</td><td>GND</td></tr>
</table>

------------