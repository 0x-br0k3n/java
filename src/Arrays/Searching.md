# Searching algorithms

## What is linear Search?
Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of an array until the desired element is found, otherwise the search continues till the end of the array.

## Linear Search Implementation 
```java
static int linearSearch(int arr[] , int key) {
      for(int i = 0; i < arr.length; i++)
          if(arr[i] == key)
            return i;
      return -1;
}
```

## What is Binary Search?
In computer science, binary search is a search algorithm that finds the position of a target value within a `sorted array`.

>[!NOTE] How to remember?
>Imagine a situation where you want to search for the meaning of a word, say "zebra," in a dictionary. One way is to go through every page from the beginning—this is called a linear search. However, this method is very inefficient because dictionaries are organized alphabetically based on the first letter of each word (i.e., the data is sorted).
>
>A more efficient method would be to use a binary search approach. You can start by opening the middle page of the dictionary and checking the first word on that page. Since you know that 'Z' is the last alphabet, it's clear that words starting with 'Z' won't be in the first half of the dictionary. So, you can eliminate that half from your search space.
>
>Next, you divide the remaining half again and check the middle, repeating the process of elimination and division until you find the word you're looking for.

## Binary Search Implementation 
```java
static int binarySearch(int arr[] , int key) {
  
     int low = 0;
     int high = arr.length - 1; 
     int mid = -1;
    
     while(low <= high) {
         mid = low + (high - 1) / 2;
         if(arr[mid] == key)
             return mid;
         if (arr[mid] < key)
         low = mid + 1;        
         else
         high = mid - 1;
      }
    
     return -1;
  }
```

>[!WARNING] Not recommended for ICSE
>With this approach , binary search is implemented within 3 lines of code. If you are memorising programs , it is easier to memorize this program but `you won't get full marks in ICSE with this approach` because this approach is too much alienated from traditional approach. If you are still willing to use this piece of code in exam then rename the variable `i` to `mid` and `index` to `low`.
>
>```java
>int arr[] = new int[6];
>int key = 2;
>int index = 0;
>
>for(int i = arr.length >> 1; i >= 1; i >>= 1)
>   while((index + i < arr.length) && arr[index + i] <= key))
>       index += i;
>```
>>[!INFO] NOTE
>> - `arr.length >> 1`is same as `arr.length / 2`
>> - `i >>= 1` is same as `i /= 2` or `i = i / 2`

## Why Binary Search is Faster than Linear Search?

>[!NOTE] Easier to understand
>If linear search is used for searching in an array of n elements, then it takes n steps in the worst case scenario ( when the target element is not present in the array) but if binary search is used instead , the number of elements to be searched ( search space) gets halved after every iteration. Thus at the worst case scenario, binary search will take a maximum of log₂n steps only.
>>[!INFO]Example : If there is an array of 32 elements, and we are trying to search for an element which is not present in the array, then Linear search will take 32 steps before returning output whereas binary search will take only 5 steps( ∵ log ₂ 32 = 5 log ₂ 2 = 5) before returning an output. 

>[!DANGER] Easier to write
>Linear search uses sequential  traversal approach and has a time complexity of O(N), which in turn makes it slow for large datasets whereas Binary Search uses divide-and-conquer approach and has a time complexity of O(log N) , making it efficient and faster algorithm when operating with large datasets.
