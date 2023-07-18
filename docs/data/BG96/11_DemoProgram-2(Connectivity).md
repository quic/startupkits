# 11. Demo Program-2(Connectivity)

------------
Step by step procedure for testing connectivity peripherals is explained below.<br>
- Example 1 : GNSS
- Example 2 : HTPP
- Example 3 : MQTT

## 11.1 Example&#95;GNSS Application:

__Steps to setup Dev-kit & serial port__
- Connect GPS antenna to J6
- Clean and build the GPS example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
- Flash the GPS binary image. (quectel&#95;demo&#95;gpio.bin and oem&#95;app&#95;path.ini) <a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Restart the board.
- Connect UART2 to the PC using USB to serial converter, and open a terminal tool at baud rate 115200, Review the logs

![N|Solid](../pics/BG96/bg96-gps.jpg)


## 11.2 Example&#95;HTTP Application:

This is an example code for HTTP. This example application connects to an HTTP server (http://httpbin.org) and downloads an html file in to datatx directory of BG96 module.

__Steps to setup Dev-kit & serial port__

- Connect a main antenna to J4 and insert a micro SIM to J1
- Open the HTTP example code from below directory,
C:\BG96\SW\Apps\BG96MAR04A02M1G_01.002.01.002\SDK\Quectel&#95;BG96&#95;QuecOpen&#95;SDK&#95;Package&#95;V4.2.4\SDK\quectel\example\http
- Configure the APN in the example&#95;http.c file, line number 43. Save the file. Changes are shown below for reference<br>
&#35;define QL&#95;DEF&#95;APN	        "hologram"
- Clean and build the HTTP example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
- Flash the HTTP Binary Image (quectel&#95;demo&#95;http.bin and oem&#95;app&#95;path.ini). <a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Reset the board
- Connect USB to serial converted to UART2, and open any terminal at baud rate 115200, Review the logs as below<br>
![N|Solid](../pics/BG96/bg96-HTTP-Teraterm.jpg)<br>
- After download success log, Open QEFS Explorer and go to datatx directory to see the downloaded file in the /datatx directory.<br>
![N|Solid](../pics/BG96/bg96-HTTP-QEFS1.jpg)<br>
- Right click on “downloadedfile.bin”, and select “Copy data to PC” option<br>
![N|Solid](../pics/BG96/bg96-HTTP-QEFS2.jpg)<br>
- Browse the directory to save the file.<br>
![N|Solid](../pics/BG96/bg96-HTTP-QEFS3.jpg)<br>
- Give any file name with file extension .html<br>
![N|Solid](../pics/BG96/bg96-HTTP-QEFS4.jpg)<br>
- Open the saved file.<br>
![N|Solid](../pics/BG96/bg96-HTTP-desk.jpg)<br>


## 11.3 Example&#95;MQTT Application:

This is an example code for MQTT. This example application connects to MQTT client (broker.hivemq.com) and subscribe to the topic “hello_topic”. Also publish test messages to the same topic. 

__Steps to setup Dev-kit & serial port__
- Connect main antenna to J4 and insert micro SIM to J1.
- Open the MQTT example code from below directory,
C:\BG96\SW\Apps\BG96MAR04A02M1G_01.002.01.002\SDK\Quectel&#95;BG96&#95;QuecOpen&#95;SDK&#95;Package&#95;V4.2.4\SDK\quectel\example\mqtt
- Configure the APN name in the example&#95;mqtt.c file, line number 43. Save the file. Changes are shown below for reference<br>
&#35;define QL&#95;DEF&#95;APN	        "hologram" 
- Clean and Build the MQTT example code. <a href="#" target="_blank" onclick="LoadPage(8);return false;">Refer section 8</a>
- Flash the MQTT binary image (quectel&#95;demo&#95;mqtt.bin and oem&#95;app&#95;path.ini). <a href="#" target="_blank" onclick="LoadPage(9);return false;">Refer section 9</a>
- Restart the Board.
- Connect USB to serial converted to UART2, and open any terminal at baud rate 115200. Review the logs<br>
![N|Solid](../pics/BG96/bg96-MQTT-Teraterm.jpg)<br>
- Setup the MQTT Client (broker.hivemq.com) using MQTTFx.<br>
Brocker name : broker.hivemq.com
<a href="https://www.hivemq.com/blog/mqtt-toolbox-mqtt-fx/"target="_blank">click here for more info</a><br>
![N|Solid](../pics/BG96/bg96-MQTT-broker.jpg)<br>

- Subscribe on topic “hello&#95;topic” to see the published messages.<br>
![N|Solid](../pics/BG96/bg96-MQTT-subscribe.jpg)<br>
- Publish messages to the topic “hello&#95;topic”. Review the logs.<br>
![N|Solid](../pics/BG96/bg96-MQTT-publish1.jpg)<br>
![N|Solid](../pics/BG96/bg96-MQTT-publish2.jpg)<br>


------------