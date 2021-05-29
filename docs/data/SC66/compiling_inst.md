
# 7. Compilation Instructions

------------

__7.1 Download Resources from CAF__
```console
cd /local/mnt/workspace/
lftp -c 'mirror --parallel=100 https://mirrors.edge.kernel.org/caf_patches/external/startupkit/sc66/SC66-Relv0.1/ SC66 ;exit'
```

![N|Solid](../pics/SC66/sc66-lftp.jpg)

__7.2 Prepare SDK__
```console
ls
mv sc66-qdn_relv0.1.zip SC66/
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
```warning
   Make sure to replace 'n' with the number of CPUs
```

__7.5 Download Images from Linux Machine to Windows Machine using SFTP__
```console
from: /local/mnt/workspace/SC66/Android_sc66/out/target/product/sdm660/
to   : C:\SC20\SW\Built_images
```

```console
boot              boot.img
super             super.img
userdata          userdata.img
vemeta            vemeta.img
vmeta_system      vemeta_system.img
abl               abl.elf
dtbo              dtbo.img
```

__7.6 Use MobaXterm UI to download images from ubuntu__
  - Select the files, drag and drop to desired folder
  - Total 7 files, select all 7(use Ctrl key to select) and download

![N|Solid](../pics/SC66/sc66-download.jpg)

__7.7 Compilation completed, Proceed with Flashing__
  - Downloaded Images are now available in `C:\SC66\Built_Images`

------------