# Datatypes

## Default values of datatypes
```shell
 double : 0.0
 float : 0.0 / 0.0F 
 long : 0 / 0L
 int : 0
 short : 0
 char : '\u0000' (null character)
 byte : 0
 boolean : false
 String : null
 Object : null
```

>[!WARNING] Important
> Never use **''** ( two <mark style="background: #C41442;">apostrophe **without space**</mark> in between ) for assigning empty value to a char variable, instead use **' '** ( two apostrophe **with space** between ).
>
>>[!TIP] char c = '';
>>>[!CAUTION] error: empty character literal
>
>>[!NOTE] char c = ' '; 

## Hierarchy of datatypes
```shell
double
float  
long
int 
short
char
byte
boolean
```

>[!TIP]
>To calculate **Range** of a datatype of  **n bits** use the formula : **`-2ⁿ⁻¹` to `2ⁿ⁻¹ - 1`**
>
>**Reason** : In **binary** system or **Base₂** number system, **n bits** can store a maximum **decimal / Base₁₀** number of **`2ⁿ`**.(positive numbers only). But Java doesn't support **unsigned datatypes**.(i.e. only positive numbers). So to store equal number of positive and negative numbers in a variable, the range is reduced by half and becomes **-2ⁿ⁻¹ to 2ⁿ⁻¹ - 1**.  
>>[!NOTE]
>> We have to subtract **1** from range in the last (**2ⁿ⁻¹**) so that we can include **`0`** in the range.
>> Range = **`2ⁿ⁻¹` negative numbers** + **`0`** + **`2ⁿ⁻¹ - 1`** positive numbers

>[!NOTE]
>**1** byte  =  **8** bits

## Sizes of datatypes
```shell
double : 64 bits / 8 bytes
float  : 32 bits / 4 bytes
long   : 64 bits / 8 bytes
int    : 32 bits / 4 bytes
short  : 16 bits / 2 bytes
char   : 16 bits / 2 bytes
byte   :  8 bits / 1 bytes
boolean:  8 bits / 1 bytes
```

>[!NOTE]
> Java reserves **8 bits** for **boolean** datatype but uses only **1 bit**.

>[!TIP] ASCII
'A' = 65
'a' = 97



>[!WARNING] Suffix
> - The suffix 'l' or 'L' when used after an integer signifies long value.
> 
>>[!TIP] Example :
>>```java
>>long phoneNumber = 0000000000L;
>>```
>>>[!TIP] 
>>>Use `long` datatype for accepting large numbers like phone number from user because using `int` might cause an overflow. 
>
> - The suffix 'f' or 'F' when used after an floating point integer signifies float value 
>
>>[!NOTE] Example :
>>```java
>>float pi = 3.14F;
>>```
>>>[!TIP]
>>>Always try to use `double` instead of `float` to avoid confusion. 

>[!CAUTION] final
>Keyword final when used with a declaration similar to a variable, creates a named constant.<br>
>Syntax : `final <datatype> <variable_name> = <value>;`<br>
>Example: 
>```java
>final double pi = 3.14;
>```


## Types of Data Types :
>[!NOTE] Primitive Data Types
>>[!IMPORTANT] Integer Data Types
>> byte , short , int , long
>
>>[!IMPORTANT] Floating-point Data Types
>>double , float
>
>>[!IMPORTANT] Character Data Type
>>char
>
>>[!IMPORTANT] Boolean Data Type
>>boolean


>[!NOTE] Reference Data Types
>>[!IMPORTANT] Arrays
>
>>[!IMPORTANT] Classes
>
>>[!IMPORTANT] Interfaces
