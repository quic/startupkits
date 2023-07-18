# 6. Device Setup Instructions

------------
## 6.1 Power up device

- Power-up the dev-kit with provided power adapter (or) battery & check the device detection in the COM ports of device manger as shown below.<br> 

![N|Solid](../pics/BG96/bg96-comport.jpg)
<table class=pinout>
               <tr>
                  <th>Ports</th>
                  <th>Description</th>
               </tr>
               <tr>
                  <td>Quectel USB AT Port</td>
                  <td>COM Port for AT commands</td> 
               </tr>
               <tr>
                   <td>Quectel USB DM Port	</td>
                   <td>	COM Port for firmware upgrade</td>
               </tr>
               <tr>
                  <td>Quectel USB NMEA Port</td>
                  <td>COM Port for collecting location information</td>
               </tr>
               </table><br>
               
## 6.2 Connect USB to TTL serial adapter to dev-kit

   - Connect debug-UART port to USB to TTL serial adapter to below mentioned pins through jumper wires to view debug logs
   - Debug UART pinouts
<table class="pinout">
<tr><th>UART no</th><th>Signal</th><th>On Dev-Kit</th><th>BG96 Pin</th></tr>
<tr><td rowspan="2">UART2</td><td>TXD</td><td>J9.2</td><td>23</td></tr>
<tr><td>RXD</td><td>J9.19</td><td>22</td></tr>
</table><br>
    
- <a href="https://5.imimg.com/data5/XL/VE/MY-1833510/ft232rl-usb-to-ttl-5v-3-3v-convertor.pdf"target="_blank">USB to TTL </a> pin outs<br>
![N|Solid](../pics/BG96/bg96-usb-ttl.jpg)

__Note:__ Ensure jumper is towards 3.3V side on USB to TTL serial adapter
- Check for the COM ports in device manager & teraterm for serial port detection<br>
![N|Solid](../pics/BG96/bg96-serialport.jpg)<br>
<table class=pinout>
               <tr>
                  <th>Ports</th>
                  <th>Description</th>
               </tr>
               <tr>
                  <td>USB Serial port</td>
                  <td>COM Port for USB to Serial Converter</td>
               </tr>
               </table>
               
- Launch Tera Term & select the serial port<br>            
![N|Solid](../pics/BG96/bg96-usb-serial.jpg)

- Enter AT in Teraterm to get the response from the dev-kit as shown below<br>
![N|Solid](../pics/BG96/bg96-teraterm.jpg)

## 6.3 Set up QFOLGS method(optional method)
`Attention!!!`

```warning
Below QFLOG procedure is to setup command line interface for serial port monitoring,
its optional and not a mandatory procedure to follow but instead any serial port softwares can be used example(Teraterm,putty ..etc).
```
### 6.3.1 Setting up of CLI
   - Copy the downloaded python 3.6.1 software into c drive
      `c:\Python 3.6.1`    
- <a href="https://www.howtogeek.com/197947/how-to-install-python-on-windows/"target="_blank"> Set up </a> Python 3.6.1 by following steps in the link.
   - Install Python 3.6.1 
   - Install pyserial 3.4 [pip install pyserial] 
      - Open command prompt and go to the below file directory,
         - `C:\Users\<user_name>\AppData\Local\Programs\Python\Python37\Scripts`
   - For installation execute the below command
     - `pip install pyserial`
   - Add python directory path to the system environment variable value and create variable name has `PYTHONPATH` .Please find steps below to configure the said environment variable:<br>
        - Go to Computer -> Properties -> Advanced System Settings<br> 
        - Click Environment Variables<br>
        - Create the PYTHONPATH system environment variable if it isnot already set<br>
        - Add the below QFLOG path to the already created variable name`PYTHONPATH` system environment variable<br>
         (`C:\BG96\SW\BG96MAR04A02M1G_01.002.01.002\SDK\Quectel_BG96_QuecOpen_SDK_Package_V4.2.4\QFLOG\src`) to the PYTHONPATH environment variable

### 6.3.2 Enable QFLOG

QFLOG function is provided for logging of the QuecOpen user application. QFLOG is disabled on BG96 by default. Use the below AT commands to enable this function
 ```console
 AT+QCFGEXT=qflogport,1
 AT+QCFGEXT=qflogen,1
 ```

![N|Solid](../pics/BG96/bg96-QFLOG-enable.jpg)<br>

  `Attention!!!`

```warning
Reset the module after executing these two AT commands
Use "USB AT PORT" in python script.`
```

### 6.3.3 Executing the CLI
  - First send a "HELLO" command to check the connectivity. 
  - QFLOG.py -p HELLO<br> 
If communication is successful, the following response is received:<br>
   ![N|Solid](../pics/BG96/bg96-QFLOG-MSG.jpg)

 - Get help with Help command
 QFLOG.py -p COM14 -h<br>
![N|Solid](../pics/BG96/bg96-QFLOG-MSG-test.jpg)

### 6.3.4 Logging
  - Logging function can be enabled in the QuecOpen application with below operation.
   - Include qflog_utils.h file. 
               The below statement is to be used for logging a message. 
               QFLOG&#95;MSG(MSG&#95;SSID&#95;DFLT,MSG&#95;MASK&#95;, "Presence sensor application successfully registered");       
               QFLOG&#95;MSG(MSG&#95;SSID&#95;DFLT,MSG&#95;MASK&#95;, "Sensor time value is %d" , sensor&#95;time&#95;val); 
   - Please ensure to run the python script with the following command to receive logs. In the console. 
     -    QFLOG.py -p VIEW&#95;LOGS
- A session can be terminated by sending Ctrl + C.

------------









