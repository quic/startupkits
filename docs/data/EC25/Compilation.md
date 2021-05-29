
# 7. Compilation Instructions

------------

__7.1 Download Resources from CAF__
```console
cd /local/mnt/workspace/
lftp -c 'mirror --parallel=100 https://mirrors.edge.kernel.org/caf_patches/external/startupkit/ec25/EC25-Relv1.2/ EC25 ;exit'
```
![N|Solid](../pics/EC25/ec25-lftp.jpg)
 
__7.2 Prepare SDK__
```console
ls
mv ec25-qdn_relv1.0.zip EC25/
mv EC25EFAR06A01M4G_OCPU_01.001.01.001_SDK.tar.bz2 EC25/patches
```
![N|Solid](../pics/EC25/ec25-mv.jpg)

__7.3 Updating Permissions to build scripts__
```console
cd EC25/
chmod +x setup_source_and_build.sh
```
![N|Solid](../pics/EC25/ec25-chmod.jpg)
 
__7.4 Start build for EC25__ 

Execute `setup_source_and_build.sh` script to extract SDK & apply patches

#####`ATTENTION!!!`
```warning
This step may take few hours to complete
```
```console
./setup_source_and_build.sh
```
![N|Solid](../pics/EC25/ec25-setup_source_and_build-sh.jpg)
```warning
Kernel configuration window will pop-up, save it as "save.config", Follow steps below
```
_Step 1:_<br>
![N|Solid](../pics/EC25/ec25-save-config1.jpg)

_Step 2:_<br>
![N|Solid](../pics/EC25/ec25-save-config2.jpg)

_Step 3:_<br>
![N|Solid](../pics/EC25/ec25-save-config3.jpg)

_Step 4:_<br>
![N|Solid](../pics/EC25/ec25-save-config4.jpg)

__Build Completed__

![N|Solid](../pics/EC25/ec25-build-complete.jpg)

__7.3 Download Images__

Download built images from linux machine to windows machine using SFTP

```warning
from  : /local/mnt/workspace/EC25_SDK/ql-ol-sdk/target/ (Linux)
to    : C:\EC25\SW\Built_Images (Windows)
```
__`List of Images`__
<table class="pinout">
<tr><td>Boot</td><td>mdm9607-perf-boot.img</td></tr>
<tr><td>System</td><td>mdm9607-perf-sysfs.ubi</td></tr>
<tr><td>Userdata</td><td>usrdata.ubi</td></tr>
</table><br>

```warning
Use MobaXterm UI to download images from ubuntu
  - Select the files, drag and drop to desired folder
  - Total 3 files, select all 3(use Ctrl key to select) and download
```

![N|Solid](../pics/EC25/ec25-download.jpg)

__Compilation completed, Proceed with Flashing__
  - Downloaded Images are now available in `C:\EC25\SW\Built_Image`

------------