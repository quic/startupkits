
# 7. Compilation Instructions

------------

__7.1 Download Resources from CAF__
```console
cd /local/mnt/workspace/
lftp -c 'mirror --parallel=100 https://mirrors.edge.kernel.org/caf_patches/external/startupkit/sc66/SC66-Relv1.1/ SC66 ;exit'
```

![N|Solid](../pics/SC66/sc66-lftp.jpg)

__7.2 Prepare SDK__
```console
ls
mv sc66-qdn_relv1.0.zip SC66/
mv SC66_Android10.0_Quectel_SDK_r008_20200604.tar.gz SC66/patches
```
![N|Solid](../pics/SC66/sc66-mv.jpg)

__7.3 Updating Permissions to build scripts__
```console
cd SC66/
chmod +x getsourceandbuild.sh
```
![N|Solid](../pics/SC66/sc66-chmod.jpg)

__7.4 Build the source__

```console
./getsourceandbuild.sh
```
#####`ATTENTION!!!`
```warning
- Download source code from open-source might take 4-6 hours.
- Build Android might take 10-15 hours, depends on Linux machine configuration.
```
![N|Solid](../pics/SC66/sc66-build.JPG)

__7.5 Build Completed__

![N|Solid](../pics/SC66/sc66-build-completed.jpg)
```warning
Repeat below instructions incase of failure
```
```console
cd /local/mnt/workspace/Android_SDK_SC66
source build/envsetup.sh
lunch sdm660_64-userdebug
./build.sh dist -j8

```
__7.6 Download Images from Linux Machine to Windows Machine using SFTP__
```code
From: /local/mnt/workspace/SC66/Android_sc66/out/target/product/sdm660/
To   : C:\SC66\SW\Built_images
```

__`List of Images`__
<table class="pinout">
<tr><td>boot</td><td>boot.img</td></tr>
<tr><td>super</td><td>super.img</td></tr>
<tr><td>userdata</td><td>userdata.img</td></tr>
<tr><td>vemeta</td><td>vemeta.img</td></tr>
<tr><td>vmeta_system</td><td>vemeta_system.img</td></tr>
<tr><td>abl</td><td>abl.elf</td></tr>
<tr><td>dtbo</td><td>dtbo.img</td></tr>
</table>
<br>

__7.7 Use MobaXterm UI to download images from ubuntu__
  - Select the files, drag and drop to desired folder
  - Total 7 files, select all 7(use Ctrl key to select) and download

![N|Solid](../pics/SC66/sc66-download.jpg)

__7.8 Compilation completed, Proceed with Flashing__
  - Downloaded Images are now available in `C:\SC66\Built_Images`

------------