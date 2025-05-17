>[!BOXES] <span style="font-family:Cascadia">indexOf()</span>
>The Java String class indexOf() method returns the position of the first occurrence of the specified character or string in a specified string. If it is not found, it returns -1. The index counter starts from zero.
>
>
>>[!BOX-BLUE] Usage and examples : 
>>```java 
>> String s = "Hello World. Hello Java.";
>> //find index of H from the beginning of the String
>> int a = s.indexOf('H'); //  0
>> //find indexOf('H') from index 1 of the string
>> int b = s.indexOf('H' , 1); // 13
>> //find index of the given substring
>> int c = s.indexOf("Hello"); // 0
>> //find index of the given substring starting from index 1
>> int d = s.indexOf("Hello" , 1); // 13
>> //find index of h outside the length of string/character not present
>> int e = s.indexOf('H' , s.length()); // -1
>>```




>[!BOXES] <span style="font-family:Cascadia">lastIndexOf()</span>
>The Java String class lastIndexOf() method returns the last index of the given character value or substring. If it is not found, it returns -1. The index counter starts from zero.
>
>
>>[!BOX-BLUE] Usage and examples : 
>>```java 
>> String s = "Hello World. Hello Java.";
>> 
>> int a = s.lastIndexOf('H'); //  13
>> 
>> int b = s.lastIndexOf('H' , 1); // 13
>>
>> int c = s.lastIndexOf("Hello"); // 13
>>
>> int d = s.lastIndexOf("Hello" , 1); // 13
>> 
>> int e = s.lastIndexOf('H' , s.length()); // -1
>>```
>>








>[!BOX-BLUE]  `.indexOf()` vs `.lastIndexOf()`
>
>>[!FLAME-GREEN] Similarities 
>> - Both the indexOf() method and the lastIndexOf() method returns int values.
>><br>
>> - Both return -1 when required charcter is not present within the specified string or within the specified search space of the specified string.
>
>
>>[!FLAME-RED] Difference 
>> - The Java string indexOf() method returns a int value corresponding to the first occurance of the given character or substring in a specified string whereas lastIndexOf() method returns a int value corresponding to the last occurance of the given character or substring in a specified string.
>>