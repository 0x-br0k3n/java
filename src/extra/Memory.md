# Memory (RAM)

## Introduction
To run an application in an optimal way, JVM divides memory into stack and heap memory. Whenever we declare new variables and objects, call a new method, declare a String, or perform similar operations, JVM designates memory to these operations from either Stack Memory or Heap Space.

## Stack
Stack Memory in Java is used for static memory allocation and the execution of a thread. It contains primitive values that are specific to a method and references to objects referred from the method that are in a heap.
Access to this memory is in `Last-In-First-Out (LIFO)` order. Whenever we call a new method, a new block called a stack frame is `created on top` of the stack which contains values specific to that method, like primitive variables and references to objects.
When the method finishes execution, its corresponding stack frame is flushed, the flow goes back to the calling method, and space becomes available for the next method.
While the stack grows and shrinks dynamically within the allocated space, the overall stack size is generally fixed. The operating system typically determines the stack size, and this size is usually set when the program starts. 


## Heap
Heap space is a part of JRE(Java Runtime Environment) used for the dynamic memory allocation of Java objects and JRE classes at runtime. New objects are always created in heap space, and the references to these objects are stored in stack memory.
These objects have global access and we can access them from anywhere in the application.

## Reference of a variable
Reference of a variable applies only to variables that hold reference/non-primitive data types, which are essentially `objects`.
Unlike primitive variables which directly store the value in the memory location associated with the variable, a variable of a non-primitive type (an object type) does not store the object itself. Instead, it stores a reference to the object.
This reference is essentially a pointer to the location in the computer's memory (specifically, the heap) where the object's data is stored. When you interact with a reference variable, you are using this reference to access and manipulate the object it points to.

#### Think of it like this:
Let's say you want to visit your friend's house, but to do that you will need the `address` of your friend's house which `uniquely points` to the `location` of your friend's house in the Map.\
<br>Similarly in non-primitive/reference variables, the reference or memory `address` of the variable is stored in stack which `uniquely points` to the `location` of the variable's value in the Heap(Memory).

## String pool
String Pool is a storage area in Java heap used for storing strings. String pool is used to increase performance and memory efficiency of the program.
