>[!BOXES] <span style="font-family:Cascadia">substring()</span>
>A part of String is called substring. In other words, substring is a subset of another String. Java String class provides the built-in substring() method that extract a substring from the given string by using the index values passed as an argument. In case of substring() method startIndex is inclusive and endIndex is exclusive.
>>[!BOX-BLUE] Usage and examples :
>>```java
>>String s = "Hello World";
>>String a = s.substring(0 , 5); // "Hello"
>>String b = s.substring(0, 7); // "Hello W"
>>String c = s.substring(0); // "Hello World"
>>/*The line below will cause an error and will throw 
>>java.lang.StringIndexOutOfBoundsException*/
>>String d = s.substring(100); 
>>```



