
# 2. Hardware

------------

## 2.1 Specification

<table class="pinout">
<tr><td>Processor</td><td>MDM9207 (1.3Ghz Cortex A7 Processor)</td></tr>
<tr><td>Operating system</td><td>Linux</td></tr>
<tr><td>Connectivity</td><td>LTE, WiFi, GNSS</td></tr>
<tr><td>SIM</td><td>microSIM</td></tr>
<tr><td>Storage Card</td><td>micro-SD</td></tr>
<tr><td>USB</td><td>micro-USB</td></tr>
<tr><td>Audio</td><td>3.5mm Jack, Loudspeaker & Mic</td></tr>
<tr><td>Peripheral Connectivity</td><td>2xUART, SPI, I2C, 2xADC & GPIOs</td></tr>
<tr><td>LED Indications</td><td>Module Status, Net Status, Power & RGB</td></tr>
<tr><td>Debug</td><td>USB & Debug Uart</td></tr>
<tr><td>Firmware Upgrade</td><td>USB & OTA</td></tr>
<tr><td>Power Supply</td><td>5V DC</td></tr>
<tr><td>Battery</td><td>3.7V, 3000mAh, Li-Po</td></tr>
<tr><td>Board size</td><td>85mm x 65mm</td></tr>
</table>
<br>

## 2.2 Block Diagram

![N|Solid](../pics/EC25/ec25-block-diagram.jpg =1100x640)

## 2.3 Connectors

### 2.3.1 Peripheral Connector (P5)
<!-- <table class="spec"> -->
<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 40%;">
    </colgroup>

<tr><td>3.3V</td><td>1</td><td>2</td><td>GND</td></tr>
<tr><td>GPIO 5</td><td>3</td><td>4</td><td>SPI CLK</td></tr>
<tr><td>GPIO 2</td><td>5</td><td>6</td><td>SPI CS</td></tr>
<tr><td>GPIO 3</td><td>7</td><td>8</td><td>SPI MISO</td></tr>
<tr><td>GPIO 4</td><td>9</td><td>10</td><td>SPI MOSI</td></tr>
<tr><td>RESERVED</td><td>11</td><td>12</td><td>I2C SDA</td></tr>
<tr><td>RESERVED</td><td>13</td><td>14</td><td>I2C SCL</td></tr>
<tr><td>RESERVED</td><td>15</td><td>16</td><td>UART RX</td></tr>
<tr><td>ADC1</td><td>17</td><td>18</td><td>UART TX</td></tr>
<tr><td>PWR KEY</td><td>19</td><td>20</td><td>ADC0</td></tr>
<tr><td>1.8V</td><td>21</td><td>22</td><td>RESET</td></tr>
<tr><td>3.3V</td><td>23</td><td>24</td><td>GND</td></tr>
</table>

------------