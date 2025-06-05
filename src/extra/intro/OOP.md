# Object Oriented Programming

## Terms related to OOP
>
>[!NOTE] Paradigm
> Paradigm means organising principle of a program. It is an approach towards programming.
> <p align="center">or</p>
> Programming paradigms are different ways or styles in which a given program or programming language can be organized. Each paradigm consists of certain structures, features, and opinions about how common programming problems should be tackled.
>
> >[!TIP] Examples :
> >
> > - Procedural Programming
> > - Functional Programming
>> - Object Oriented Programming

>[!NOTE] Module
>A Module is an identifiable piece of code within a program, with a set of inputs and outputs. It has a sole purpose, and processes its inputs in a way dictated by its goal and provides some output. The act of partitioning program into modules is called modularity.

>[!INFO] Class
>A class is a template/blueprint representing a group of objects that share common properties and relationships.
>It is a user-defined data type. It consists of data members and member functions, which can be accessed and used by creating an instance of that class.

>[!NOTE] Object
>Object is an identifiable entity with some characteristics and behaviour.
>It is an instance of a class. When a class is defined, no memory is allocated but when it is `instantiated` (i.e. an object is created) memory is allocated. An object has an identity, state, and behavior. Each object contains data and code to manipulate the data.
>>[!CAUTION] While class is a conceptual blueprint, an object is an actual entity which is an instance of a class.

>[!INFO] Data Abstraction
>Abstraction or Data Abstraction refers to the act of representing essential features without including the background details or explanations.

>[!NOTE] Encapsulation
>The wrapping up of data and operations/functions (that operate on the data) into a single unit (called class) is known as Encapsulation.

>[!NOTE] Inheritance
>Inheritance is the capability of one class of things to inherit capabilities or properties from another class.
>>[!TIP] Base Class & Subclass
>>
>> - Base Class : A base class is a super class from which another class inherits properties. It is also known as parent class.
>> - Subclass : A class that is derived from another class (base class) is called a subclass. It is also known as derived / extended / child class.
>>
>>>[!INFO] Example :
>>>
>>>```java
>>>class child extends parent {
>>>      //code
>>>}
>>>```

>[!INFO] Polymorphism
>Polymorphism is the ability for a message or data to be processed in more than one form.

>[!NOTE] Dynamic Binding
> In dynamic binding, the code to be executed in response to the function call is decided at `runtime`. Dynamic binding means that the code associated with a given procedure call is not known until the time of the call at run time. This feature is known as `subtype polymorphism`.
> <p></p>
>
> Dynamic binding in Java occurs through `inheritance & method overriding` . When a subclass extends a superclass and overrides one of its methods and the overridden method in the subclass gets called at runtime based on the actual object type, not the reference type.
> <p></p>
>
> This behavior is possible because the JVM (Java Virtual Machine) determines the actual method to be called at runtime by checking the `object's type`. It looks for the overridden method in the object's class hierarchy, starting from the actual class of the object & moving up to its superclasses until a matching method is found.
>
> ::: details Code {collapsed}
> ``` java
>class parent {
>   public void sayHello() {
>       System.out.println("Hello from parent");
>   }
>}
>
>class child1 extends parent {
>    @Override
>    public void sayHello() {
>        System.out.println("Hello from child1");
>    }
>}
>
>class child2 extends parent {
>    @Override
>    public void sayHello() {
>        System.out.println("Hello from child2");
>    }
>}
>
>public class Main {
>   public static void main(String[] args) {
>       Parent obj11 = new child1();
>       Parent obj22 = new child2();
>       obj1.sayHello();
>       obj2.sayHello();
>   }
>}
> ``` 
> :::
> ::: details Output {collapsed}
> ```shell
>Hello from child1
>Hello from child2
>
> ```
> :::

>[!NOTE] Message passing
> It is a form of communication used in object-oriented programming as well as `parallel programming`. Objects communicate with one another by sending and receiving information to each other. A message for an object is a request for execution of a block of code and therefore will invoke a function in the receiving object that generates the desired results. Message passing involves specifying the name of the object, the name of the function, and the information to be sent.

## Advantages of OOP
>
>[!NOTE] Re-use of code
>Functions to objects allows related objects to share code. Encapsulation allows class definitions to be re-used in other applications. The availability of a consistent interface to objects lessens code duplication and thereby improves code re-usability.

>[!NOTE] Ease of comprehension
>The classes can be set up to closely represent the generic application concepts and processes. OOP codes are more near to real-world models than other programming methodologies' codes.

>[!NOTE] Ease of fabrication and maintenance
>The concepts such as encapsulation, data abstraction allow for very clean designs. When an object is going into disallowed states, which are not permitted, only its methods need be investigated e.g., if student is getting more than maximum marks, only the functions are to be retested. This narrows down search for problems.

>[!NOTE] Easy redesign and extension
>The same concepts facilitate easy redesign and extension. Although OOP has proved revolutionary in software development.

## Disadvantages of OOP
>
>[!NOTE] Overgeneralisation
>With OOP, classes thend to be overly generalised.

>[!NOTE] Artificial relation among classes
>The relations among classes become artificial at times.

>[!NOTE] Tricky
>The OOP programs' design is tricky.

>[!NOTE] Planning and Design
>One needs to do proper planning and proper design for OOP programming.

>[!CAUTION] Skill issue
>To program with OOP, programmer need proper skills such as design skills, programming skills, thinking in terms of objects, etc.
