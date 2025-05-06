
>[!INFO]
> Created by **James Gosling** in **1991**
> Was initially named **Oak** , later renamed to Java

 # Compilation process
>[!TIP] Java Compiler
> Java compiler converts source code into bytecode.
>>[!NOTE] Source Code is the Java program written in a file with a .java extension.
>
>>[!NOTE] Java bytecode files end with a **.class** extension. This file makes Java **Platform Independent**. It is the machine language for Java Virtual Machine.
>

>[!NOTE] Java Virtual Machine (JVM)
> It is a part of **Java Runtime Environment** (JRE) .It is a **virtual machine** which reads bytecode and interprets machine code depending on underlying operating system and hardware.

>[!NOTE] Just In Time (JIT) Compiler
> It is a part of JVM. Converts Bytecode to native executable code in real time, on a piece by piece basis.(Machine code). This **machine code** is **machine dependent**.The use of JIT is optional as it serves to increase the performance of program execution.
>
> Some examples of native machine code file extensions :
>>[!WARNING] .exe for Windows
>
>>[!CAUTION] .osx for MacOs (Not in syllabus)
>
>>[!CAUTION] .out for linux (Not in syllabus)


# Characteristics of Java
>[!NOTE] Write Once Run Anywhere (WORA)
> Java programs written once can be run on different platforms without making any changes to the program.

>[!NOTE] Light Weight Code
>No huge coding is required.

>[!NOTE] Security
>Java offers many enhanced security features.

>[!NOTE] Object-Oriented Language
>Java is object-oriented, hence very near to real world.

>[!NOTE] Platform Independent
>Java is essentially platform independent. Change of platform does not affect original Java program/application.

# Types of Java Programs
>[!NOTE] Internet Applets
>**Internet Applets** are small programs that are embedded in web pages and are run on the viewer's machine in a secured manner (which means limited access to system resources i.e., the hard disk) by Java capable browsers.
>
>Applets are designed to be delivered to Internet Web browsers and that is why an applet has a built-in graphical window. But Java applets have some security restrictions (e.g., it cannot write to a local file).

>[!NOTE] Standalone Application 
>It is generally a software application that does not require low level operating system or hardware access. This includes most off the usual desktop applications such as word processors or spreadsheets. Standalone Java applications could be distributed and installed on any Java capable machine. Every stand alone application of Java begins executing with a main method.

# Packages in Java
>[!NOTE] java.applet : Java Applet Package

>[!NOTE] java.awt : Java Abstract Window Toolkit Package 

>[!NOTE] java.io : Java Input/Output Package

> [!NOTE] java.lang : Java Language package

>[!NOTE] java.net : Java Networking Package

>[!NOTE] java.util : Java Utility Package

<br style="line-height:4px">

>[!TIP] Token
>Smallest individual unit in a program is called a token. Keywords, identifiers, literals, operators and punctuators are tokens in a Java program. 

