# Introduction

## What is a method?
A method is a named piece of code within a program and executes when it is called from another section of code.

>[!NOTE] Syntax
>`[access-specifier] [return-type] [method name](parameters) {[code]}` 
><br>*static keyword is used to declare a static method

>[!INFO] A method can return only a single value, although it can have multiple return statements.

## Method/Function Signature
A method signature basically refers to the method name and the number and type of arguments of a method.

## Method/Function Prototype
A method/function prototype is the first line of the function definition that tells the program about the type of the value returned by the method and the number and type of arguments.

>[!NOTE] Conclusion
>Function prototype = Access specifier + return type + function signature 

---

>[!NOTE] Pure Method
> A pure method is the one that takes objects and/or primitives as arguments but dose not modify the objects.

>[!NOTE] Impure Method
> An impure method is the one that takes objects and/or primitives as arguments and modifies the state or received objects.

## Types of method
>[!NOTE] Static method
>Methods with the keyword static in their function prototype are called static methods
>
> - Keyword static is present in function definition.
> - They are called class methods.
> - We don't need to create objects to invoke a static method.

>[!NOTE] Non-static method
>Methods without the keyword static in their function prototype are called Non-static methods
>
> - Keyword static absent in function definition.
> - They are called instance/object method.
> -  We need to create object to invoke a non-static method.

## Types of parameters
>[!NOTE] Formal parameters 
> - Parameters present in the function definition statement (function prototype) are called formal parameters.
> - It is compulsary to mention data type in formal parameters.
> - It is general

>[!NOTE] Actual parameters
> - Parameters present in the function call statement are called Actual parameters.
> - Not required to mention data type of informal parameters.
> - It is specified.

## Types of member methods of a class

>[!NOTE] Accessor Methods
>These are those member methods that allow us to access the data member (instance variables) of object. However, accessor methods cannot change the value of data members. <br>
>Accessor methods are used to read values of private data members of a class which are directly not accessible in non-member methods. We should provide public accessor methods so that, the values of private data members become accessible yet remain safe as accessor methods do not modify data.

>[!NOTE] Mutator Methods
>These are the member methods that allow us to change the data members of an object. Any member method that changes the values of an instance variable of a class is a mutator method.

>[!NOTE] Manager Methods
>These are member methods with specific methods (e.g constructors) that deal with initializing class instances.

## Why Accessors and Mutators?

If the instance variables of a class are public or have default access, data may become unsafe and vulnerable, defeating the very purpose of object orientation.<br>
By providing accessors and mutators, we make sure that data is edited in desired manner through a mutator method. Further, if a user wants to know current value of a private data member, it can be done through an accessor method. For their functionality, accessors and mutators are sometimes also called getters and setters.