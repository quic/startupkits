# 6. Advanced Setup Instructions

------------

__6.1 Install Ubuntu 16.04 Server (Proceed with either Option1 or Option2)__

   - __Option1:__ Use two physical machines (_Use a second physical machine to install ubuntu 16.04 server_)
       - Download Ubuntu 16.04 Image <a href="http://old-releases.ubuntu.com/releases/16.04.5/ubuntu-16.04.6-server-amd64.iso" target="_blank">ubuntu-16.04.6-server-amd64.iso</a> __(~900MB)__
       - Install ubuntu 16.04 server using standard ubuntu tutorial. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604" target="_blank">Click here</a>
           - Create bootable disk if required. Follow instructions <a href="https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview" target="_blank">Click here</a>
           - `Important Step:` Select OpenSSH server as part of installation. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604#10-software-selection" target="_blank">Click here</a>
   - __Option2:__ Use One physical machine (Use Virtual Box to install ubuntu 16.04 server)
       - Download Ubuntu 16.04 Image <a href="http://old-releases.ubuntu.com/releases/16.04.5/ubuntu-16.04.6-server-amd64.iso" target="_blank">ubuntu-16.04.6-server-amd64.iso</a> __(~900MB)__ and copy to __C:&#92;__
       - Download & Install Virtual Box (_From virtualbox.org or alternative location & Use Default options for installations_)
           - Use Virtual Box to create a Virtual Machine (Min Configuration: _4GB/250GB/ubuntu16.04_)
           - _Configure Network Adapter to Bridged Adapter_
           - `Important Step:` _Hardware virtualization need to be enabled in BIOS for Virtual Box to work_
       - Install ubuntu 16.04 server in Virtual Machine created in previous step using standard ubuntu tutorial. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604" target="_blank">Click here</a>
           - Step by Step Instruction and Screen Shots available. <a href="../VM/" target="_blank">Click here</a>
           - `Important Step:` Use Guided - Use Entire Disk Option. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604#8-storage-configuration" target="_blank">Click here</a>
           - `Important Step:` Select OpenSSH server as part of installation. <a href="https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604#10-software-selection" target="_blank">Click here</a>

__6.2 Mount Partitions, Create Folder Structure and Get _ip&#95;address_, _hostname_ & _username___
   - Execute below commands in terminal of ubuntu 16.04 server created in previous step
```console
sudo mkdir /local/
sudo mount /dev/sda1 /local/
sudo mkdir -p /local/mnt/workspace
sudo chmod 777 /local/mnt/workspace/
hostname; hostname -I
```
![N|Solid](../pics/ubuntu_vb/ub_setup_46.png =1280x720)
__`Notes:`__
```warning
Remember the IP Address from the above session
```
![N|Solid](../pics/vm/sc20-ip-host.jpg)\

__6.3 Setup Enviorment to access ubuntu machine from Windows 10__

   - Download and Install Mobaxterm ([MobaXterm_Installer_v20.1.zip](https://download.mobatek.net/2012020021813110/MobaXterm_Installer_v20.1.zip)) _Use default options to install_
   - Create SSH sesstion in MobaXterm and save the session for future use

![N|Solid](../pics/EC25/ec25-ssh.jpg)

   - Create SFTP sesstion in MobaXterm and save the session for future use

![N|Solid](../pics/EC25/ec25-sftp.jpg)

__6.4 Upload SW Packages to Ubuntu__
  - Start & Connect to SFTP explorer using MobaXterm
  - Upload files using sftp session created in previous step
  
```code
  From : C:\EC25\SW\EC25EFAR06A01M4G_OCPU_01.001.01.001_SDK.tar.bz2 & C:\EC25\SW\ec25-qdn_relv1.0.zip (From Windows)
  To   : /local/mnt/workspace/  (To Linux)
```

  ![N|Solid](../pics/EC25/ec25-upload.jpg)

__6.5 Login & Start Working on Linux Machine__
  - Connect to SSH terminal using MobaXterm & proceed
  - Use ssh session created in previous step


__6.6 Verify the linux machine version__

```console
lsb_release -a
```

![N|Solid](../pics/EC25/ec25-linux-version.jpg)

__6.7 Installing required packages__

```console
sudo apt-get update
sudo apt-get install zip python lftp build-essential lib32ncurses5-dev bc
```
![N|Solid](../pics/EC25/ec25-update.jpg)

__`Notes:`__
```warning
- FAIL-CASE!: Repeat the above steps incase of failure
- Provide ‘yes’ when prompt for additional  memory requirement.
- Might take few minutes to complete, wait for completion of package install.
```
__6.8 Configure git before use__

```console
git config --global user.name "EC25 Developer"
git config --global user.email "myname@company.com"
```
![N|Solid](../pics/EC25/ec25-git.jpg)

__`Notes:`__
```warning
Execute above git config commands as it is. Actual username and email not required
```

#### Setup Completed, Proceed with Compilation


------------
