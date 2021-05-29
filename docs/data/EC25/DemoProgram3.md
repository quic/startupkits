# 12. Demo Programs (Connectivity)

------------

## Voice Call

Execute the application in ADB Shell

```console
cd /usrdata/
chmod +x example_voice
./example_voice
```

![N|Solid](../pics/EC25/ec25-ex-voice.jpg)

__Source Code :__ `/local/mnt/workspace/EC25/ec25_release_v1/ql-ol-sdk/ql-ol-extsdk/example/voice/example_voice.c`

__`Notes`__
```warning
- Make sure proper SIM card inserted
- Make sure LTE Antenna (Connector-J3) connected to the device
```
------------
## WiFi

Execute the application in ADB Shell

```console
cd /usrdata/
chmod +x example_wifi_api_test
./wifi_api_test
```
__Connecting to WiFi Network:__<br>
Step 1 -  `case 1: Configure WiFi`
![N|Solid](../pics/EC25/ec25-ex-wifi-configure.jpg)

Step 2 -  `case 2: Enable WiFi`
![N|Solid](../pics/EC25/ec25-ex-wifi-enable.jpg)

Step 3 -  `case 100: exit`

__Internet Ping:__  

Checking Internet connectivity by pinging google.com
```console
ping google.com
```
![N|Solid](../pics/EC25/ec25-ex-wifi-ping.jpg)

__Internet Download:__ 

Downloading `Quectel_EC25_LTE_Standard_Specification_V2.0.pdf` by executing below command, pdf will be save to the working directory<br>
```console
wget --no-check-certificate https://www.quectel.com/UploadFile/Product/Quectel_EC25_LTE_Standard_Specification_V2.0.pdf
```
![N|Solid](../pics/EC25/ec25-ex-wifi-dwnld.jpg)

__Source Code :__ `/local/mnt/workspace/EC25/ec25_release_v1/ql-ol-sdk/ql-ol-extsdk/example/Wifi/example_wifi.c`

Compile ``example_wifi.c`` by ``make`` command, ``wifi_api_test`` will be created in the same folder

__`Notes`__
```warning
- Make sure Wi-Fi Antenna (Connector-J11) connected to the device
- ping / download test in example carried out without cellular connectivity.
```
------------