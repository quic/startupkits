# 2. Hardware

------------
##2.1 Specification

<table class="spec">
<tr><td>Processor</td><td>SDM660(64Bit,2.2Ghz, Octa core, Kyro 260)</td></tr>
<tr><td>Memory</td><td>32GB eMMC+3GB LPDDR4x(default)</td></tr>
<tr><td>Operating system</td><td>Android 10</td></tr>
<tr><td>Power Supply</td><td>Supply voltage: 3.55V~4.4V & Typical supply voltage: 4.0V</td></tr>
<tr><td>Battery Emulation</td><td>To support board boot up even during absence of the battery</td></tr>
<tr><td>Connectivity</td><td>Cellular/GNSS/WIFI/BT</td></tr>
<tr><td>SIM &amp; SD card interfaces </td><td>Micro & Hybrid slots</td></tr>
<tr><td>Camera</td><td>12MP primary & secondary MIPI CSI Camera</td></tr>
<tr><td>Display</td><td>Supports 5inch & 3.5-inch MIPI-DSI Touch Panel Display</td></tr>
<tr><td>USB</td><td>Compliant with USB 3.1 and 2.0 specifications, with transmission rates up to 5Gbps on USB 3.1 and 480Mbps on USB 2.0,Support USB OTG</td></tr>
<tr><td>Audio</td><td>3.5mm Jack/Loudspeaker/Mic/Earphones</td></tr>
<tr><td>UART Interfaces</td><td>4 UART interfaces: UART1,UART6,DEBUG UART & LPI_UART_2, UART6: 4-wire UART interface with RTS/CTS hardware flow control; baud rate up to 4Mbps, UART1: 2-wire UART interface used for debugging, LPI_UART_2: 2-wire low power UART, DBG_UART: 2-wire UART interface used for debugging, LPI_UART_2: 2-wire low power UART</td></tr>
<tr><td>I2C interfaces</td><td>Support up to 5 I2C interfaces, used for peripherals such as TP, camera, sensor, etc.</td></tr>
<tr><td>Peripheral connector 1</td><td>SPI, I2C:, UART, PWR_KEY, Power:3.3V, 1.8V &amp; Gnd</td></tr>
<tr><td>Peripheral connector 2</td><td>GPIO’S, PWM, ADC, vol_up, vol_down, Power: 3.3V,1.8V &amp; Gnd</td></tr>
<tr><td>LED Indications</td><td>Status, Net-Light, Power on &amp; RGB</td></tr>
<tr><td>Board size</td><td>80mm x 90mm</td></tr>
<tr><td>Firmware Upgrade</td><td>A/B OTA firmware upgrade via USB</td></tr>
<tr><td>Applications</td><td>Machine Learning, Tensor Flow, High computation needs, Dual Camera ,GPU</td></tr>
</table>

##2.2 Block Diagram__
![N|Solid](../pics/SC66/sc66-block-diagram.jpg =1100x640)

##2.3 Peripheral Connector 1: J13

<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 40%;">
    </colgroup>
<tr><td>3.3 V</td><td>1</td><td>2</td><td>GND</td></tr>
<tr><td>SPI4_CLK</td><td>3</td><td>4</td><td>SPI3_CLK</td></tr>
<tr><td>SPI4_MISO</td><td>5</td><td>6</td><td>SPI3_MISO</td></tr>
<tr><td>SPI4_MOSI</td><td>7</td><td>8</td><td>SPI3_MOSI</td></tr>
<tr><td>SPI4_CS</td><td>9</td><td>10</td><td>SPI3_CS</td></tr>
<tr><td>I2C6_SDA</td><td>11</td><td>12</td><td>PWR_KEY</td></tr>
<tr><td>I2C6_SCL</td><td>13</td><td>14</td><td>UART6_TXD</td></tr>
<tr><td>UART1_TXD</td><td>15</td><td>16</td><td>UART6_RXD</td></tr>
<tr><td>UART1_RXD</td><td>17</td><td>18</td><td>UART6_CTS</td></tr>
<tr><td>Sensor_I2C_SDA</td><td>19</td><td>20</td><td>UART6_RTS</td></tr>
<tr><td>Sensor_I2C_SCL</td><td>21</td><td>22</td><td>VCC_1v8</td></tr>
<tr><td>3.3 V</td><td>23</td><td>24</td><td>GND</td></tr>
</table>


##2.4 Peripheral Connector 2: J14
<table style="width: 40%">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 40%;">
    </colgroup>
<tr><td>3.3 V</td><td>1</td><td>2</td><td>GND</td></tr>
<tr><td>GPIO_41</td><td>3</td><td>4</td><td>GPIO_61</td></tr>
<tr><td>GPIO_77</td><td>5</td><td>6</td><td>GPIO_72</td></tr>
<tr><td>GPIO_71</td><td>7</td><td>8</td><td>GPIO_68</td></tr>
<tr><td>GPIO_69</td><td>9</td><td>10</td><td>GPIO_70</td></tr>
<tr><td>VIB_GPIO</td><td>11</td><td>12</td><td>VOL_UP</td></tr>
<tr><td>ADC_IN1</td><td>13</td><td>14</td><td>VOL_DOWN</td></tr>
<tr><td>ADC_IN2</td><td>15</td><td>16</td><td>NC</td></tr>
<tr><td>VBAT</td><td>17</td><td>18</td><td>NC</td></tr>
<tr><td>VABT</td><td>19</td><td>20</td><td>NC</td></tr>
<tr><td>VCC_1v8</td><td>21</td><td>22</td><td>GND</td></tr>
<tr><td>3.3 V</td><td>23</td><td>24</td><td>GND</td></tr>
</table>


------------
