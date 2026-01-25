# Basic Math Functions in Java

## pow()
This method returns the first argument raised to the power of the second argument.

Return type : `double`

Syntax : 
```java
double x = Math.pow(2,3); // 8
```

>[!TIP] Use <code>Math.pow(x , 1/n)</code> to get nth root

## sqrt()
This method returns sqrt of the argument.

Return type : `double`

Syntax : 
```java
double x = Math.sqrt(9); // 3.0
```

## cbrt()
This method returns cube root of the argument.

Return type : `double`
>[!INFO] This method was introduced in Java 5

Syntax : 
```java
double x = Math.cbrt(27); // 3.0
```

## ceil()
This method returns the smallest number greater than or equal to the argument.

Return type : `double`

Syntax : 
```java
double a = Math.ceil(6.1); // 7.0
double b = Math.ceil(6); // 6.0
double c = Math.ceil(-6.1); // -6.0
```

## floor()
This method returns the largest number that is less than or equal to the argument argument.
Also known as the greatest integer function in Mathematics.

Return type : `double`

Syntax : 
```java
double a = Math.floor(6.1); // 6.0
double b = Math.floor(6); // 6.0
double c = Math.floor(-6.1); // -7.0
```

## round()
This method returns the value of the argument, as an integer (if argument is float) or long(if argument is double), rounded to the nearest whole number.

Return type : `long` / `int`

Syntax : 
```java
double a = Math.round(6.5);  //  7
double b = Math.round(6.4);  //  6
double c = Math.round(-6.5); // -6
double d = Math.round(-6.4); // -6
double e = Math.round(-2.6); // -3
```
        
>[!TIP] Note the above syntax carefully. ( .5 round up is done in case of positive values and .6 round down is done in case of negative numbers.)

## abs()
This method returns the absolute value of the argument.

Return type : `double` / `float` / `int` / `long` (same as argument datatype)

Syntax : 
```java
double a = Math.abs(6.5); //  6.5
double b = Math.abs(-6.5); // 6.5
double c = Math.abs(-6); // 6
double d = Math.abs(6); // 6
```
        

## max()
This method returns the maximum of the given two arguments.

Return type : `double` / `float` / `int` / `long` (same as argument datatype)

Syntax : 
```java
double x = Math.max(6.5, 6.4); // 6.5
double y = Math.max(-2 , -3); // -2
```  

## min()
This method returns the minimum of the given two arguments.

Return type : `double` / `float` / `int` / `long` (same as argument datatype)

Syntax : 
```java
double x = Math.min(6.5, 6.4); // 6.4
double y = Math.min(-2 , -3); // -3
```

## random()
This method returns a random double value greater than or equal to 0.0 and less than 1.0

Return type : `double`

Syntax : 
```java
double x = Math.random(); // 0.1358...
double y = Math.random(); // 0.0
```

<br>

>[!WARNING] Math.PI
>Java stores pi as a constant in the Math class.
>>[!NOTE] Syntax :
>>`double pi = Math.PI();`
