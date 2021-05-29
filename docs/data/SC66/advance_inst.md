# 6. Advanced Setup Instructions

------------

__6.1 Install Ubuntu 16.04 Server (Proceed with either Option1 or Option2)__

   - __Option1:__ Use two physical machines (Use a second physical machine to install ubuntu 16.04 server)
       - Download Ubuntu 16.04 Image [ubuntu-16.04.6-server-amd64.iso](http://releases.ubuntu.com/16.04/ubuntu-16.04.6-server-amd64.iso) __(~900MB)__
       - Install ubuntu 16.04 server using standard ubuntu tutorial. [Click here](https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604)
           - Create bootable disk if required. Follow instructions [Click here](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview)
           - `Important Step:` Select OpenSSH server as part of installation. [Click here]
   - __Option2:__ Use One physical machine (Use Virtual Box to install ubuntu 16.04 server)
       - Download Ubuntu 16.04 Image [ubuntu-16.04.6-server-amd64.iso](http://releases.ubuntu.com/16.04/ubuntu-16.04.6-server-amd64.iso) __(~900MB)__ and copy to __C:&#92;__
       - Download & Install Virtual Box (from virtualbox.org or alternative location)(Use Default options for installations)
           - Use Virtual Box to create a Virtual Machine (Min Configuration: 8GB/500GB/ubuntu16.04)
           - Configure Network Adapter to Bridged Adapter
           - `Important Step:` _Hardware virtualization need to be enabled in BIOS for Virtual Box to work_
       - Install ubuntu 16.04 server in Virtual Machine created in previous step using standard ubuntu tutorial. [Click here](https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604) 
           - Step by Step Instruction and Screen Shots available. <a href="../VM/" target="_blank">Click here</a>
           - `Important Step:` Use Guided - Use Entire Disk Option. [Click Here](https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604#8-storage-configuration)
           - `Important Step:` Select OpenSSH server as part of installation. [Click here](https://ubuntu.com/tutorials/tutorial-install-ubuntu-server-1604#10-software-selection)

__6.2 Mount Partitions, Create Folder Structure and Get _ip&#95;address_, _hostname_ & _username___
   - Execute below commands in terminal of ubuntu 16.04 server created in previous step
```console
sudo mkdir /local/
sudo mount /dev/sda1 /local/
sudo mkdir -p /local/mnt/workspace
sudo chmod 777 /local/mnt/workspace/
hostname; hostname -I
```
![N|Solid](../pics/vm/sc20-ip-host.jpg)

__6.3 Setup Enviorment to access ubuntu machine from Windows 10__

   - Download and Install Mobaxterm ([MobaXterm_Installer_v20.1.zip](https://download.mobatek.net/2012020021813110/MobaXterm_Installer_v20.1.zip)) _Use default options to install_
   - Create SSH sesstion in MobaXterm and save the session for future use
   ![N|Solid](../pics/SC66/sc66-ssh.jpg)
   - Create SFTP sesstion in MobaXterm and save the session for future use
   ![N|Solid](../pics/SC66/sc66-sftp.jpg)

__6.4 Upload SW Packages to Ubuntu__
  - Start & Connect to SFTP explorer using MobaXterm
  - Upload files using sftp session created in previous slide
  
```console
  from : C:SC66\SW\sc66-qdn_relv0.1.zip and C:SC66\SW\SC66_Android10.0_Quectel_SDK_r008_20200604.tar.gz
  to   : /local/mnt/workspace/
```
- ![N|Solid](../pics/SC66/sc66-upload.jpg)

__6.5 Login & Start Working on Linux Machine__
  - Connect to SSH terminal using MobaXterm & proceed
    - Use ssh session created in previous step


__6.6 Verify the linux machine version__

```console
lsb_release -a
```

![N|Solid](../pics/SC66/sc66-shell1.jpg)

__6.7 Installing required packages__

```console
sudo apt-get update
sudo apt-get install git-core gnupg lftp flex bison gperf build-essential zip curl zlib1g-dev libc6-dev lib32ncurses5-dev x11proto-core-dev libx11-dev lib32readline6-dev lib32z1-dev libgl1-mesa-dev g++-multilib mingw-w64 tofrodos python-markdown libxml2-utils xsltproc openjdk-8* phablet-tools bc
```
![N|Solid](../pics/SC66/sc66-shell2.jpg)
##### `Notes:`
```warning
Run sudo apt-get update again incase of apt-get install failure.
Provide ‘yes’ when prompt for additional  memory requirement.
Might take few minutes to complete, wait for completion of package install.
```

__6.8 Configure git before use__

```console

git config --global user.name "SC66 Developer"
git config --global user.email "myname@company.com"
```
![N|Solid](../pics/SC66/sc66-shell3.jpg)
##### `Notes:`
```warning
Execute commands as it is. Actual username and email not required
```

__6.9 Setup Completed, Proceed with Compilation__


------------
