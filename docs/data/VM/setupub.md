
## 4. ubuntu system boot up.

##### Step 43 : Choose the boot option
![N|Solid](../pics/ubuntu_vb/ub_setup_43.png =1280x720)
##### Step 44 : Initial Boot of Linux
![N|Solid](../pics/ubuntu_vb/ub_setup_44.png =1280x720)
##### Step 45 : Ubuntu login prompt
```console
please use the following username and password
username: dev
password: dev123
```
![N|Solid](../pics/ubuntu_vb/ub_setup_45.png =1280x720)
##### Step 46 : Check the home folder and system
   - Execute below commands in terminal of ubuntu 16.04 server created in previous step
```console
sudo mkdir /local/
sudo mount /dev/sda1 /local/
sudo mkdir -p /local/mnt/workspace
sudo chmod 777 /local/mnt/workspace/
hostname; hostname -I
```
![N|Solid](../pics/ubuntu_vb/ub_setup_46.png =1280x720)


##### That’s All now you are set to connect from ssh terminal
##### Remember hostname and ip-address to connect
<br>
<a href="#" target="_blank" onclick="LoadPage(1);return false;">Click to go back to Virtualbox and ubuntu download page</a>
<br>
