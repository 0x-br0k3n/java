# Method Overloading

## What is method overloading?
If a class has multiple methods with same name but different parameter lists, then it is known as Method Overloading.

## Method overloading is achieved by:
>[!NOTE] Changing number of arguments
>```java
>void method(int i) {
>      //code
>}
>
>void method(int i , int j) {
>      //code
>}
>```

>[!NOTE] Changing type of arguments
>```java
>void method(int i) {
>      //code
>}
>
>void method(double i) {
>      //code
>}
>```

>[!WARNING] Method Overloading is not possible by changing the return type of method. On doing so, Compile time error will be raised.
>


>[!TIP] TIP
>When you are told to overload a method and some of them have same datatype in their function signature, increase the number of parameters using dummy parameters.





