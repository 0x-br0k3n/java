# Introduction

## What are Wrapper Classes?
Wrapper classes are part of Java's standard library java.lang and these convert primitive datatypes in an object. To be more specific, a wrapper class wraps a value of primitive type in an object. In addition, the wrapper classes also provide tools , methods and constants(the smallest and largest int value, etc.)<br>

All wrapper classes are part of `java.lang` package.

## Available Wrapper Classes :
 - Boolean - java.lang.Boolean
 - Byte - java.lang.Boolean
 - Character - java.lang.Character
 - Double - java.lang.Double
 - Float - java.lang.Float
 - Integer - java.lang.Integer
 - Long Short - java.lang.Short

>[!DANGER] Void class
>There is also Void class but it's object cannot be created.


## Reasons for having wrapper classes :

 - Java is an object oriented language where everything is used as objects. The wrapper classes enable a primitive value to be used as objects. As objects they can be used with all types of classes and their methods.

 - Wrapper classes provide many ready-to-use utility methods such as converting a string having primitive type value to equivalent primitive form e.g., "10" can be converted to integer 10 using a wrapper class method; and many other functions.

 - Primitive data types are passed by value, but objects are passed by reference. Wrapper classes facilitate passing primitives by reference, as an argument to a method, if so required.

 - There are some other reasons that make wrapper classes useful in advanced Java (such as with data structures and some frameworks etc.)

>[!INFO] The wrapper classes are final, i.e. once assigned to a value, the value cannot of the wrapper class cannot be changed. Java does this to ensure uniform capabilities accross all instances.

---

>[!NOTE] Autoboxing
>You can assign a primitive value to its wrapper class object and Java will automatically wrap around or box around sn object on the primitive value, this is called autoboxing.

>[!NOTE] Unboxing
>You can assign a wrapper class  object's value to its primitive type and Java will automatically unwrap the object around the primitive value, this is called unboxing.
