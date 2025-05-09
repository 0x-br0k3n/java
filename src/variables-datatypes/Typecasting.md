# Type Casting

## Definition

Type Casting in Java is the process of converting one data type to another data type using the casting operator. When you assign a value from one primitive data type to another type, this is known as type casting.

## Types of Typecasting
 
>[!NOTE] Impilicit type casting (coercion) / Widening Casting
>Implicit type casting, also known as automatic conversion or coercion, is the process where the Java compiler automatically converts a smaller data type into a larger data type. This type of casting is safe and does not require any explicit operator or additional code from the programmer. The reason it’s considered safe is that when converting from a smaller to a larger data type, there’s no risk of losing information or precision.

>[!NOTE] Explicit type casting / Narrowing Casting
>Explicit type casting is the process which involves converting a larger data type into a smaller one, which could potentially lead to data loss/precision loss. Because of this risk, explicit casting must be performed manually by the programmer, using a casting operator to specify the desired conversion.

### Can we do explicit widening primitive conversion ?
Answer is yes we can. Look at this code snippet : 
```java
int n = 10;
double d1 = (double) n;
double d2 = n;
```

Here altough both variables d1 and d2 stores `10.0`, d1 shows Explicit Type Casting (widening primitive conversion) and d2 shows implicit type casting.
This is because in `d1` we are explicitly telling the compiler to upcast the num variable to double before assigning to d1 by using the cast `()` operator.

## When does Automatic type conversion in Java?
Automatic type conversion occurs in Java when there is a need to convert a value from a `smaller or narrower` data type to a `larger or wider` data type.

## Determiing datatype of an expression

Datatypes : a : double, b : int, c : char, d : byte
Expression : a * b + c - d
Solution : From Hierarchy of datatypes, we can tell that the expr will give a value of double datatype

Detailed_Solution :

a   *   b   +   c   -   d
↓       ↓       |       |
 double         |       |
    ↓           ↓       |
        double          |
        ↓               ↓
              double\


