# Introduction

## What is encapsulation?
Encapsulation means that a single thing encloses several smaller things that are its parts. This is similar to the process of abstraction. In OO technology, several simple unit are encapsulated into a more complex unit that is called the class. The simple units that are encapsulated by the class are called the members of the class.<br>
>[!NOTE]A class consists of:
>>[!INFO] Data Members
>>Data Members contain information necessary to represent the class.
>
>>[!INFO] Methods
>>Methods perform operations on the data members of the class.

## Advantages of Encapsulation

>[!NOTE] Data Hiding
>Encapsulation enables the programmer to hide desired data by making it private. It allows the programmer to give access only to the desired classes and methods. It allows the programmer to not allow the user to know how variables and data are stored.

>[!NOTE] Implementation Logic are Hidden
>What is going on behind the scene, is completely hidden from user. User only knows that to update a data member's value, call its setter method and to read a data member's value, call its getter method but what these setter and getter methods are doing, is purely hidden from them.

>[!NOTE] Flexibility
>Since implementation details are hidden, it is easier to change the inner logic. User can still use getter/setter methods without needing to know if their inner logic has changed or not.

>[!NOTE] More control in programmer's hand
>With Java encapsulation, a programmer has full control over which values are allowed via setters and also (s)he can make the data as read-only or write-only as per requirements. If for a private data member, there is no setter method provided, that become read-only. Similarly, if its getter method is not provided, it becomes write-only. All this means, more flexibility and more control in programmer's hand.