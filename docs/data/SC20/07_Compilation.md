
# 7. Compilation Instructions

------------

__7.1 Download Resources from CAF__
```console
cd /local/mnt/workspace/
lftp -c 'mirror --parallel=100 https://mirrors.edge.kernel.org/caf_patches/external/startupkit/sc20/SC20-Relv1.4/ SC20 ;exit'
```

![N|Solid](../pics/SC20/sc20-lftp.jpg)

__7.2 Prepare SDK__
```console
ls
mv sc20-qdn_relv1.0.zip SC20/
mv SC20_Android7.1.2_Quectel_SDK_r00049_20181106.tar.gz SC20/patches
```
![N|Solid](../pics/SC20/sc20-mv.jpg)

__7.3 Updating Permissions to build scripts__
```console
cd SC20/
chmod +x getsourceandbuild.sh
```
![N|Solid](../pics/SC20/sc20-chmod.jpg)

__7.4 Start Build for the Android(For 5" & 3.5" display)__
Identify the display size and select the build option(1 or 2)
  - __Option 1:__ Build for 5 inch display
```console
./getsourceandbuild.sh
```
#####`ATTENTION!!!`
```warning
- Download source code from open-source might take 4-6 hours.
- Build Android might take 10-15 hours, depends on Linux machine configuration.
```
![N|Solid](../pics/SC20/sc20-build-5p.jpg)

  - __Option 2:__ Build for 3.5 inch display
```console
./getsourceandbuild.sh 3p5
```
![N|Solid](../pics/SC20/sc20-build-3p5.jpg)

__7.3 Build Completed__

![N|Solid](../pics/SC20/sc20-build-completed.jpg)
```warning
Repeat below instructions incase of failure
```
```console
cd /local/mnt/workspace/SC20/Android_sc20_lcd_5in/
source build/envsetup.sh
lunch msm8909-userdebug
make -j8
```


__7.5 Download Images from Linux Machine to Windows Machine using SFTP__
```code
From : /local/mnt/workspace/Android_sc20_lcd_5in/out/target/product/msm8909/ (Linux)
To   : C:\SC20\SW\Built_images (Windows)
```
__`List of Images`__
<table class="pinout">
<tr><td>aboot</td><td>emmc_appsboot.mbn</td></tr>
<tr><td>boot</td><td>boot.img</td></tr>
<tr><td>system</td><td>system.img</td></tr>
<tr><td>userdata</td><td>userdata.img</td></tr>
<tr><td>recovery</td><td>recovery.img</td></tr>
<tr><td>persist</td><td>persist.img</td></tr>
<tr><td>cache</td><td>cache.img</td></tr>
</table>
<br>

__7.6 Use MobaXterm UI to download images from ubuntu__
  - Select the files, drag and drop to desired folder
  - Total 7 files, select all 7(use Ctrl key to select) and download

![N|Solid](../pics/SC20/sc20-download.jpg)

__7.7 Compilation completed, Proceed with Flashing__
  - Downloaded Images are now available in `C:\SC20\SW\Built_Images`

------------