# Sorting Algorithms

## What is Bubble Sort?
In computer science, bubble sort is is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.


## Bubble Sort Implementation 
```java
static void bubbleSort(int arr[]) {

    int temp = -1;

    for(int i = 0; i < arr.length - 1; i++)
        for(int j = 0; j < arr.length - i - 1; j++)
           if(arr[j] > arr[j + 1]) {
               temp = arr[j];
               arr[j] = arr[j + 1];
               arr[j + 1] = temp;
         }
     
}
```

## What is Selection Sort?
In computer science, selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 


## Selection Sort Implementation
```java
 static void selectionSort(int arr[]) {
 
      int small = -1;
      int temp = -1;
      
      for(int i = 0; i < arr.length - 1; i++) {
         small = i;
         for(int j = i + 1; j < arr length; j++)
              if(arr[small] > arr[j] )
                  small = j;
                  
          temp = arr[small];
          arr[small] = arr[i];
          arr[i] = temp;
      }     
 }
```