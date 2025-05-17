# Strings

## What are Strings in Java?
Strings are the type of `objects` that can store the character of values and in Java, every character is stored in 16 bits i,e using UTF 16-bit encoding. A string acts the same as an array of characters in Java.

## Why String is not a primitive datatype?
A String is a Class present in `java.lang` package. Thus the variables of String data type are nothing but `objects` of this class. And due to the nature of objects, we cannot use '`==`' operator to compare Strings for equality.

## Features of String
>[!NOTE] It stores the sequence of character data in memory which are accessible by its name.

>[!NOTE] It offers many methods offering different functionality such as concatenation of string, comparison of string, find sub string etc.

>[!NOTE] Most importantly, String types are immutable (i.e., unchangeable). That is, once you have created a string type object and assigned some string value to it, you cannot change it.



## Why is String immutable in Java?

>[!NOTE] Prerequisites
> Read about [Stack](/extra/Memory#stack) , [Heap](/extra/Memory#heap) , [String pool](/extra/Memory#string-pool) , [Reference of a variable](/extra/Memory#reference-of-a-variable)

One of the key goals of any programming language is to make efficient use of memory.As applications grow, it’s very common for String literals to occupy a large area of memory, which can even cause redundancy. So, in order to make Java more efficient, the JVM sets aside a special area of memory called the “String constant pool”.When the compiler sees a String literal, it looks for the String in the pool. If a match is found, the reference to the new literal is directed to the existing String and no new String object is created. The existing String simply has one more reference. Here comes the point of making String objects immutable.

In the String constant pool, a String object is likely to have one or many references. If several references point to the same String without even knowing it, it would be bad if one of the references modified that String value. That’s why String objects are immutable.

>[!NOTE] Example :
>Code
>```java
>class Main {
>      public static void main(String args[]) {
>          String a = "Hi";
>          String b = "Hi";
>          String c = new String("Hi");
>          System.out.println(a == b);
>          System.out.println( a == c );
>          b = c;
>          System.out.println( a == b);
>      }
>}
>```
>Output
>```shell
>true
>false
>false
>```
>>[!INFO] Explanation
>>When the variable `a` is declared, the compiler checks if there is any string literal already present in the string pool with the same value, but this is the first time we are declaring a String with value "Hi", so compiler would not find any match and would allocate memory for the String literal and store it's reference or memory address as the value of the String `a`.<br><br> Now, when variable `b` is declared with value "Hi" , compiler again checks if there is any string literal already present in the string pool with the same value. This time, a match would be found because of the variable `a` which has same String value. Now the compiler, instead of allocating new memory for the string literal "Hi", it will store the reference or memory address of the already allocated memory for String literal "Hi" as the reference or value of the variable `b`. Now if we want to modify the String value of the variable `a`, we need to modify the value at the reference of `a`. If strings were mutable then the value of variable`b` would also get affected because both of them share same reference. So that is why Strings are immutable in java.<br><br>When variable `c` is declared with the keyword `new`, compiler doesn't check for any match in the String pool, rather it allocates new memory for the given String in the `heap` (not in the string pool) even if reference for the same String literal is already available in the String pool.
>
>>[!INFO] When we are using <code>==</code> operator for comparing strings, we are not comparing their String literals rather we are comparing their references. For comparing two strings always use <code>.equals()</code> function to avoid unwanted errors.
