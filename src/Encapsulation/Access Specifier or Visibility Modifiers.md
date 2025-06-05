# Access Specifier or Visibility Modifiers

## What are access specifiers in Java?
Access specifiers in Java are the keywords that are used for controlling the use of the methods, constructors, fields, and methods in a class.

## Types of access specifiers :
>[!NOTE] public
>The public access modifier is specified using the keyword public. The public access modifier has the widest scope among all other access modifiers.
>Classes, methods, or data members that are declared as public are accessible from everywhere in the program. There is no restriction on the scope of public data members. Public methods are also called service methods that are created simply to assist a service method is called a support method.

>[!NOTE] private
>The private access modifier is specified using the keyword private. The methods or data members declared as private are accessible only within the class in which they are declared.
 
>[!NOTE] protected
> The protected access modifier is specified using the keyword protected. The methods or data members declared as protected are accessible within the same package or subclasses in different packages.

>[!NOTE] default
>(nothing)i.e.,friendly(not a keyword).When no access modifier is specified for a class, method, or data member – It is said to be having the default access modifier by default. The data members, classes, or methods that are not declared using any access modifiers i.e. having default access modifiers are accessible only within the same package.


| Access Modifiers | Within Class | Within Package | Outside the package but through child class only | Outside the package |
| -- | -- | -- | -- | -- | 
| private | yes | no | no | no |
| default | yes | yes | no | no |
| protected | yes | yes | yes | no |
| public | yes | yes | yes | yes |
