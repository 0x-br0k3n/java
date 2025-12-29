# Properties of Arrays

## Printing Behaviour



>[!NOTE] Character Arrays (1D char Arrays)
>When a single dimensional char array is passed to print() or println(), it treats the array as if it were a string (prints concatenated characters)
>>[!INFO] Why?
>> As you know java is heavily inspired from C/C++ and a C-style string is nothing but an array of characters that is terminated by a special null character (\0) 
>
>Code :
> ```java
>char[] arr = {'H', 'i'};
>System.out.println(arr);
> ```
>Output :
> ```java
>Hi
> ```
>>[!NOTE]
>>Single dimensional Character array (wrapper of primitive char) is not treated as a string by Java
>><br>Code :
>> ```java
>>Character[] arr = {'H', 'i'};
>>System.out.println(arr);
>> ```
>>Output :
>> ```java
>>[Ljava.lang.Character;@659e0bfd
>>```
>
>>[!NOTE]
>>If other strings are present along with the single dimensional char array, Java no longer treats the array as a String
>><br>Code :
>> ```java
>>char[] arr = {'H', 'i'};
>>System.out.println("#" +arr);
>> ```
>>Output :
>> ```java
>>#[C@659e0bfd
>>```

>[!NOTE] Other Arrays
>Any other array (e.g., Character[], int[], String[], char[][], int[][]...) prints the class name and hash code (memory address representation) because it uses the default Object.toString() method
>
>Code :
> ```java
>char[][] arr0 = {{'H', 'i'}, {'h', 'i'}};
>int[] arr1 = {'H', 'i'}; // This is valid syntax since int has higher precedence over char
>String[] arr2 = { "Hello" , "World" };
>System.out.println(arr0);
>System.out.println(arr1);
>System.out.println(arr2);
> ```
>Output :
> ```java
>[[C@659e0bfd
>[I@659e0bfd
>[Ljava.lang.String;@659e0bfd
> ```

>[!NOTE] 
>Multidimensional arrays of char prints class name and hashcode but if the elements of the multidimensional array are single dimensional arrays of char, java treats it as a string
><br>Code :
> ```java
>char[][] arr = {{'H', 'I'}, {'h', 'i'}};
>System.out.println(arr);
>System.out.println(arr[0]);
> ```
>Output :
> ```java
>[[C@659e0bfd
>HI
> ```

## Some tricky code snippets

>[!NOTE] String Concatenation
>Code : 
>```java
>String[] arr = {"Hello" + "World" , "!"};
>System.out.println(arr[0]);
>```
>Output :
>```
>HelloWorld
>```

>[!NOTE] Hierarchy of datatypes
>Code : 
>```java
>int[] arr = {'H' , 'i'};
>System.out.println(arr[0]); // prints ASCII code of 'H'
>```
>Output :
>```
>72
>```

>[!NOTE]Array Covariance & ArrayStoreException
>Arrays are covariant, meaning if Integer is a subtype of Number, then Integer[] is a subtype of Number[]. This allows for polymorphic assignment but can cause runtime errors.<br>
>Read about <code><a href="/Libs/Wrapper Classes/Introduction#number-class">Number Class</a></code> and <code><a href="/string/Introduction/#string-as-subtype-of-object-class">String as subtype of Object Class</a></code> <br>
>Code :
>```java :line-numbers=1
>Object[] arr0 = new String[1];
>Number[] arr1 = new Integer[1];
>
>Number[][] arr = new Number[4][];
>arr[0] = new Integer[2];
>arr[1] = new Long[2];
>
>// Assignment using Anonymous Arrays
>arr[2] = new Double[]{ new Double(2) };
>arr[3]= new Float[]{ 1.618F }; // Golden Ratio
>
>// The code below will compile but throws ArrayStoreException at RUNTIME
>arr[0][0] = 3.14; // [!code error]
>//The code below will raise error for Incompatible types
>arr[3]= new Float[]{ 3.14 }; // There's no f or F suffix at the end so Java treats it as a double // [!code error]
>```
>Output :
>```
>ERROR!
>Exception in thread "main" java.lang.ArrayStoreException: java.lang.Double
>	at Main.main(Main.java:11)
>
>ERROR!
>Main.java:13: error: incompatible types: double cannot be converted to Float
>        arr[3] = new Float[]{ 3.14 };
>                              ^
>```
>>[!NOTE] Difference between ArrayStoreException and Incompatible Types
>> - ArrayStoreException: A Runtime Exception (The code builds, but crashes when running)
>> - Incompatible Types: A Compile-Time Error (The code won't even build)
>
>>[!NOTE] Incompatible Types (Compile-Time)
>>This error happens when the Compiler looks at your code and sees that two types fundamentally do not match. Since Java is statically typed, it stops you immediately
>>>[!TIP] When it happens?
>>>When you try to assign Type A to Type B, and they have no relationship (neither is a parent of the other)
>>
>>>[!TIP] Example
>>>```java
>>>Integer[] arr = new String[5]; //[!code error]
>>>```
>>
>>>[!TIP] Why?
>>>The compiler knows an Integer[] can NEVER be a String[]
>>
>
>>[!NOTE] ArrayStoreException (Runtime)
>>This error happens because of Array Covariance. The compiler lets the code pass because the assignment looks valid based on the variable types, but the actual object in memory rejects the value
>>>[!TIP] When it happens?
>>>When you use a parent reference (like Object[]) to point to a child array (Integer[]), and then try to put the wrong subclass (let's say String) into it.
>>
>>>[!TIP] Example
>>>```java
>>>Object[] arr = new Integer[5];
>>>arr[0] = "Hi"; //[!code error]
>>>```
>>
>>>[!TIP] Why?
>>>- Compile Check: The compiler sees arr[0] = "Hi". Since arr is an array of Objects and "Hi" is also an Object(since String is a subtype of Object class). This is valid (Passes)
>>>- Runtime Check: The JVM sees you are trying to shove a String into what is actually an Integer array in memory. It panics and throws the exception (Fails)
>
>>[!IMPORTANT] Summary
>>| Feature | Incompatible types | ArrayStoreException |
>>| -------- | -------------------- | ---------------------- |
>>| Type | Error (Code won't run) | Exception (Code crashes) |
>>| Detected by | Compiler (javac) | JVM (Runtime) |
>>| Cause | Types have no relationship | Actual array type doesn't match the value being stored |

>[!NOTE] Arrays with <code>final</code> keyword
>Declaring an array as final only makes the reference immutable, not the elements inside it
><br>Code :
>```java
>final int[] arr = {1, 2, 3};
> int[] arr2 = {2, 3};
>
>arr[0] = 99;  // VALID: You can change the data inside
>arr = new int[5]; // ERROR: You cannot point 'arr' to a new array object [!code error]
>arr = arr2; // ERROR: You cannot point 'arr' to an existing array [!code error]

>[!NOTE] Zero-Sized Arrays
>It is perfectly legal to create an array with a size of 0. This is often used when a method needs to return "no results" but wants to avoid returning null
><br>Code :
>```java
>int[] arr = new int[0];
>System.out.println(arr.length); // Output: 0
>```

>[!NOTE] Jagged Arrays (Multi-dimensional)
>Java doesn't strictly have multi-dimensional arrays; it has "arrays of arrays." This means sub-arrays can have different lengths
><br>Code :
>```java
>int[][] arr = new int[2][]; // Leave the second dimension empty
>arr[0] = new int[3];        // First row has 3 columns
>arr[1] = new int[1];        // Second row has 1 column
>```

>[!NOTE] Anonymous Arrays
>You can create an array without assigning it to a variable, often used for passing arguments to methods on the fly
><br>Code :
>```java
>// Passing an anonymous array to a method
>printSum(new int[]{10, 20, 30});
>
>// Some other uses of Anonymous Arrays
>int[][] arr = new int[2][];
>arr[0] = new int[]{1, 2, 3};
>arr[1] = {1, 2, 3, 4}; // ERROR: This can be only be used when you are declaring the variable on the same line [!code error]
>```

>[!NOTE]Size Limitations
>- Type: The size of an array must be an int. You cannot use long to define the size
>>[!TIP] Example
>><br>Code :
>>```java :line-numbers=6
>>int[] arr = new int[1L];
>>```
>>Output :
>>```
>>ERROR!
>>Main.java:6: error: incompatible types: possible lossy conversion from long to int
>>        int[] arr = new int[1L];
>>                            ^
>>```
>
>>[!TIP]Example 2
>><br>Code :
>>```java
>>int[] arr = new int['A'];
>>int[] arr2 = new int['A' - 64];
>>System.out.println(arr.length);
>>System.out.println(arr2.length);
>>```
>>Output :
>>```
>>65
>>1
>>```
>- Max Size: Theoretically Integer.MAX_VALUE, but practically limited by available heap memory (usually slightly less than $2^{31}-1$)
