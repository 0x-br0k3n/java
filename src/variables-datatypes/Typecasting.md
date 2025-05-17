# Type Casting

## Definition
The process of converting one pre-defined data type into another is called Type Conversion.

When constants and variables of different datatypes are mixed in an expression, they are converted to same data type.

>[!NOTE] Type casting or Type conversion ?
> In Java, the terms "type conversion" and "type casting" are often used interchangeably, but they refer to the same concept: changing the data type of a value.

## Types of Typecasting
 
>[!NOTE] Impilicit type casting (coercion) / Widening Casting / Type promotion 
>Implicit type casting, also known as automatic conversion or coercion, is the process where the Java compiler automatically converts a smaller data type into a larger data type. This type of casting is safe and does not require any explicit operator or additional code from the programmer. The reason it’s considered safe is that when converting from a smaller to a larger data type, there’s no risk of losing information or precision.

>[!NOTE] Explicit type casting / Narrowing Casting
>Explicit type casting is the process which involves converting a larger data type into a smaller one using a casting operator. It could potentially lead to data loss/precision loss and because of this risk, explicit casting must be performed manually by the programmer using a casting operator to specify the desired conversion.

### Can we do explicit widening primitive conversion ?
Yes we can! Look at this code snippet : 
```java
int n = 10;
double d1 = (double) n;
double d2 = n;
```

Here altough both variables d1 and d2 stores `10.0`, d1 shows Explicit Type Casting (widening primitive conversion) and d2 shows implicit type casting.
This is because in `d1` we are explicitly telling the compiler to upcast the num variable to double before assigning to d1 by using the cast `()` operator.

## When does Automatic type conversion in Java?
Automatic type conversion occurs in Java when there is a need to convert a value from a `smaller or narrower` data type to a `larger or wider` data type.

## Difference between Implicit and Explicit Type Conversion
<table>
    <thead>
        <tr>
            <th style="text-align: center;">Implicit</th>
            <th style="text-align: center;">Explicit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Doesn't require a cast operator</td>
            <td>Cast operator is required</td>
        </tr>
        <tr>
            <td>Not a forceful conversion</td>
            <td>Forceful conversion</td>
        </tr>
        <tr>
            <td>There is no chance of precision loss hence safe.</td>
            <td>There is chance of precision loss and hence unsafe.</td>
        </tr>
    </tbody>
</table>

## Determining datatype of an expression

Datatypes : a : double, b : int, c : char, d : byte\
Expression : a * b + c - d\
Solution : From Hierarchy of datatypes, we can tell that the expr will give a value of double datatype

Forgot hierarchy of datatypes? [`Revise here`](Datatypes#hierarchy-of-datatypes)

