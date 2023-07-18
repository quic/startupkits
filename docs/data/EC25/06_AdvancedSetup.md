# 6. Advanced Setup Instructions

------------

## 6.1 Install Ubuntu 16.04 Server 

   - __Option1:__ Use two physical machines (Use a second physical machine to install ubuntu 16.04 server)
       - Download Ubuntu 16.04 Image <a href="http://old-releases.ubuntu.com/releases/16.04.5/ubuntu-16.04.6-server-amd64.iso" target="_blank">ubuntu-16.04.6-server-amd64.iso</a> __(~900MB)__
       - Install ubuntu 16.04 server using standard ubuntu tutorial. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604" target="_blank">Click here</a>
           - Create bootable disk if required. Follow instructions <a href="https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview" target="_blank">Click here</a>
           - `Important Step:` Select OpenSSH server as part of installation. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604#10-software-selection" target="_blank">Click here</a>
   - __Option2:__ Use One physical machine (Use Virtual Box to install ubuntu 16.04 server)
       - Download Ubuntu 16.04 Image <a href="http://old-releases.ubuntu.com/releases/16.04.5/ubuntu-16.04.6-server-amd64.iso" target="_blank">ubuntu-16.04.6-server-amd64.iso</a> __(~900MB)__ and copy to __C:&#92;__
       - Download & Install Virtual Box (from virtualbox.org or alternative location)(Use Default options for installations)
           - Use Virtual Box to create a Virtual Machine (Min Configuration: 8GB/500GB/ubuntu16.04)
           - Configure Network Adapter to Bridged Adapter
           - `Important Step:` _Hardware virtualization need to be enabled in BIOS for Virtual Box to work_
       - Install ubuntu 16.04 server in Virtual Machine created in previous step using standard ubuntu tutorial. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604" target="_blank">Click here</a>
           - Step by Step Instruction and Screen Shots available. <a href="../VM/" target="_blank">Click here</a>
           - `Important Step:` Use Guided - Use Entire Disk Option. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604#8-storage-configuration" target="_blank">Click here</a>
           - `Important Step:` Select OpenSSH server as part of installation. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604#10-software-selection" target="_blank">Click here</a>

```warning
Proceed with either Option1 or Option2
```
## 6.2 Ubuntu Configuration

This section guides how to mount partitions, create folder structure and get __ip&#95;address__, __hostname__ & __username__.
   - Execute below commands in terminal of ubuntu 16.04 server created in previous step
```console
sudo mkdir /local/
sudo mount /dev/sda1 /local/
sudo mkdir -p /local/mnt/workspace
sudo chmod 777 /local/mnt/workspace/
hostname; hostname -I
```

![N|Solid](../pics/Common/common-adv-instructions-ubuntu-setup.jpg)

```warning
Remember the IP Address from the above session
```
![N|Solid](../pics/Common/common-adv-instructions-view-host-details.jpg)

## 6.3 Setup Environment to access Ubuntu Machine from Windows 10

   - Download and Install MobaXterm ([MobaXterm&#95;Installer&#95;v23.1.zip](https://download.mobatek.net/2312023031823706/MobaXterm_Installer_v23.1.zip)) _Use default options to install_
   - Create SSH session in MobaXterm and save the session for future use
   ![N|Solid](../pics/EC25/ec25-adv-instructions-setup-ssh.jpg)
   - Create SFTP session in MobaXterm and save the session for future use
   ![N|Solid](../pics/EC25/ec25-adv-instructions-setup-sftp.jpg)

## 6.4 Upload SDK to Linux Machine
  - Connect to SFTP session using MobaXterm & proceed
    - Use SFTP session created in previous step
<table class="pinout" style="width: 100%">
<tr><th style="width:10%">Sl No</th><th style="width:70%">File Name</th><th style="width:20%">Description</th></tr>
<tr><td>1</td><td>ec25-qdn_relv1.0.zip</td><td>QDN Patches</td></tr>
<tr><td>2</td><td>EC25EFAR06A01M4G_OCPU_01.001.01.001_SDK.tar.bz2</td><td>SDK</td></tr>
</table><br>

![N|Solid](../pics/EC25/ec25-adv-instructions-sdk-upload.jpg)

## 6.5 Connect to Linux Machine

  - Connect to SSH terminal using MobaXterm & proceed
    - Use SSH session created in previous step

## 6.6 Linux Machine Version

-	Execute the below command in linux machine (SSH session) to verify the ubuntu linux-version.

```console
lsb_release -a
```

![N|Solid](../pics/EC25/ec25-adv-instructions-view-linux-version.jpg)


**Setup Completed, Proceed with Compilation**

------------