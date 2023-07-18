
# 8. COMPILATION INSTRUCTIONS

 ------------

## 8.1 Compile & Build App
  - In windows, go to the below directory
    - `C:\BG96\SW\BG96MAR04A02M1G_01.002.01.002\SDK\Quectel_BG96_QuecOpen_SDK_Package_V4.2.4\SDK\build_quectel_demo_app.BAT`
  - Before building application, it is recommended to edit the batch file to set the correct path for the compiler tools in the build script<br>

![N|Solid](../pics/BG96/bg96-script-update.jpg)

`Attention!!!`
```warning
- Left window from the above snapshot is showing the the default batch file received as a part of SDK
- Right window from the above snapshot is showing the updated batch file with toolchain & python path
- Ensure LLVM compiler folder path in the PC is matching with the default batch file
```
 - Open the command prompt from the above path and run the command for Clean & new build(Example : UART,GPIO,I2C…etc.) as shown below.

```console
C:\BG96\SW\SDK
build_quectel_demo_app.bat -c
build_quectel_demo_app.bat uart
```
__Note:__<br>
Only UART build example is shown above,any application(UART,GPIO,I2C…etc.) can be built using above batch file by just entering the name of the application in place of uart
  - Below snapshot shows the compilation and build processed in command prompt<br>
  ![N|Solid](../pics/BG96/bg96-compile-build.jpg)

  - Build Completed
    - Build output App binary files are `quectel_demo_xxx.bin` and `oem_app_path.ini`
    - Built output App binary files are available this path: `C:\BG96\SW\BG96MAR04A02M1G_01.002.01.002\SDK\Quectel_BG96_QuecOpen_SDK_Package_V4.2.4\SDK\bin`

------------