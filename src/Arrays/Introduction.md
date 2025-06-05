# Arrays

## What is an array?
 An array is a container object that stores a fixed number of values of a single type in adjacent memory locations. The length of an array is established when the array is created. After creation, its length is fixed. This data structure allows us to quickly access and manipulate the elements, such as searching for an element or sorting them.



## Syntax

>[!TIP] Single-dimensional array
>```java
>datatype variableName[] = new datatype[size];
>
>datatype[] variableName = new datatype[size];
>
>datatype variableName[] = { x0 , x1 , x2 ....  xn};
>```

>[!TIP] Two-dimensional array
>```java
>datatype variableName[][] = new datatype[size1][size2];
>
>datatype[][] variableName = new datatype[size1][size2];
>
>datatype variableName[][] = { {x0 , x1 ...  xn} , {y0 , y1 ... yn} , ...};
>```

## Types of arrays :
- one-dimensional array or single-dimensional array :
comprised of finite homogeneous elements.

- multi-dimensional array :
comprised of elements, each of which is itself an array.

>[!TIP] Base Type
>The data type of array elements is known as the `base type` of the array

>[!WARNING] ArrayIndexOutOfBoundsException
>Reference to an out of bound subscript produces an out-of-bounds exception(`java.lang.ArrayIndexOutOfBoundsException`), and the program will crash if the exception is not handled.

## Advantage of arrays :
>[!NOTE] Easy to specify
>The declaration, allocation of memory space, initialization can all be done in one line of code.

>[!NOTE] Free from runtime overheads
>There is no run-time overhead to allocate/free memory, apart from once at the start and end.

>[!NOTE] Random access of elements
>Arrays facilitie random (direct) access to any element via its index or subscript.

>[!NOTE] Fast Sequential Access
>It is usually faster to sequentially access elements due to contiguous storage and constant time computation ( O(1) ) of the address of component.

## Disadvantage of arrays :
>[!NOTE] Not suitable for situations demanding varying memory sizes

## Why index of array starts from zero?

>[!TIP]  Prerequisites 
> When a variable is declared, the memory for the variable is allocated in the RAM(Random Access Memory) during runtime or execution of the program.The allocated memory has a unique memory address so that when we want to read or write values to a specific variable, other variables remain unaffected. Whenever we want to print the data or read the value from the variable, the value at the the memory address is fetched and is printed/read. Whenever we modify the data in a variable, the value in the memory address of the variable is modified.

>[!NOTE] We know that array is a collection of variables of similar datatype so one memory address for the whole array will not suffice. We also know that array is stored in the memory in contiguous blocks. Thus, the whole array falls within a range of memory addresses. So instead of assigning memory address to each and every element, we can assign an offset which adds to the memory adress of the first element according to the distance of the element we want from the starting element. So the array as a variable, stores the memory address or reference of its first element and the index we pass acts as the offset which is added to the reference of the array. This is the reason why when we pass an array to a method and perform any modification, original array gets affected.(When we pass an array to a method, actually it's reference is passed and hence original array gets affected)
> You can think it like an Arithmetic Progression where the value of `a` is the memory address of first element of the array , `n` is the offset/index and `d` is the size of the datatype of the array. 
> 
>The index in an array is not really an index. It is simply an offset that is the distance from the start of the array. The first element is at the start of the array so there is no distance. Therefore the offset is 0.
>`arr[n] = memory adress of arr + (n * size of datatype)`
>
>>[!INFO] Example: 
>>```java
>>int arr[] = { 3 , 14 , 15 , 92 , 65 , 35 , 9 };
>>```
>>Let us assume that the memory address of the array starts from 32.<br>
>>
>>| Data in RAM | ... |  3 | 14 | 15 | 92 | 65 | 35 | 9 | ... |
>>| ----------- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
>>|Memory Address | ... | 32 | 36 | 40 | 44 | 48 | 52 | 56 |  ... |
>>
>><br>Now if we assume that the first index of an array is one then, arr[1] should return 3.
>>now arr[1] = `32 (memory address of arr) + 1(index) * 4 (size of integer is 4 bytes)`
>>So arr[1] becomes 32 + ( 1 * 4 ) = 36;
>>But the value at memory address 36 is 14
>>Thus the first element is skipped, causing a waste of memory. This can be fixed if the program subtracts 1 from index but this would cause extra overhead and would decrease the efficiency of the program. So for the sake of utilising the whole chunk of memory without affecting the efficiency and speed of the program, index starts form zero. 
>>
>>>[!NOTE] NOTE
>>>The memory address shown here is a very simplified version of what we see in real life. 
>>>In practice, we use concepts like virtual memory, paging, zRAM, and others to achieve better performance.
>>>For example, zRAM uses a portion of RAM as compressed swap space, allowing more data to be stored in memory than would otherwise be possible.
