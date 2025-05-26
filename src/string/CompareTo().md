

>[!BOXES] <span style="font-family:Cascadia">compareTo()</span>
>The Java compareTo() method compares the given string with the current string lexicographically. It returns a positive number, a negative number, or 0. It compares strings based on the Unicode value of each character in the strings.
>
>If there is no index position at which the characters of the strings differ and they differ in lengths, in this case compareTo <mark style="background: #C41442;">returns the difference of the lengths of the strings.</mark>
>>[!BOX-GREEN] Internal implementation of compare to method 
>>```java 
>>int compareTo(String anotherString) {  
>>     int length1 = value.length;  
>>     int length2 = anotherString.value.length;  
>>     int limit = Math.min(length1, length2);  
>>     char v1[] = value;  
>>     char v2[] = anotherString.value;  
>>
>>     int i = 0;  
>>     while (i < limit) {  
>>        char ch1 = v1[i];  
>>        char ch2 = v2[i];  
>>        if (ch1 != ch2) {  
>>           return ch1 - ch2;  
>>        }  
>>        i++;  
>>      }  
>>     return length1 - length2;  
>>}  
>>```
>
>>[!BOX-BLUE] Usage and examples : 
>>```java 
>> String a = "Hello";
>> String b = "Hello";
>> int u = a.compareTo(b);                //  0
>>
>> int v = "abc".compareTo("Abc");        // 32
>> int w = "abc".compareTo("abd");        // -1
>> int x = "abd".compareTo("abc");        //  1
>> int y = "Green".compareTo("Greenery"); // -3
>> int z = "Greenery".compareTo("Green"); //  3
>>
>>```