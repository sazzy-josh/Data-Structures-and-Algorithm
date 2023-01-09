//!Stacks**

// //?Check if a word is a palindrome

//word to check
let word = "cocococo";

//reverse word to check if word is a palindrome
let rword = "";

//stack is initially an  empty array
let stack;

//loop through and then push each item into the stack
// for(let i = 0 ; i < word.length ; i++){
//     stack.push((word[i]))
// }

// for(let i = 0 ; i < word.length ; i++){

//     rword += stack.pop()
//    console.log(`${rword} -- ${stack}`)
// }

// if(word === rword){
//    console.log(`${word} is a palindrome`)
// }else{
//    console.log(`${word} is not a palindrome`)
// }

//?factorial

function factorial(n) {
   let result = 1;
   for (let i = 2; i <= n; i++) {
      console.log(`${i}|| ${result} * ${i}`);
      result = result * i;
      console.log(result);
   }
   console.log("-----------------");
}

//?fibonacci sequence whereby the the value of n in an array is the sum of the last two values,say we have [0,1,1,2,3,5]

function fibonacci(n) {
   let arr = [0, 1];
   for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
      console.log(
         ` for n = ${[i]} ||  ${arr[i]} = ${arr[i - 1]} + ${arr[i - 2]} `
      );
      console.log(arr);
      console.log("-----------------");
   }
}
//  fibonacci(5)
//  fibonacci(8)

//?Check if a number is a prime number(Prime numbers are natural numbers that are greater than 1 and not a products of two natural numbers)
function checkPrime(n) {
   if (n < 2) {
      console.log(`${n} - is not a prime number`);
   }
   for (let i = 2; i < n; i++) {
      if (n % i === 0) {
         console.log(`${n} % ${i}`);
         console.log(
            `${n} is a not Prime number because it is divisble without a remainder`
         );
         console.log("-------------------------");
         return false;
      } else {
         console.log(`${n} is a prime number`);
         return true;
      }
      console.log("---------------------");
   }
}
// checkPrime(150)
// checkPrime(5)

//? Linear Search given a target t, find the index of t in the array and if not found return -1
const arr = [2, 3, 4, 0, 1]; //find index of 4

function find(t) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === t) {
         console.log(`${t} is at index ${[i]}`);
         return `${t} is at index ${[i]}`;
      }
   }
   console.log(-1);
   return -1;
}

// find(4)
// find(3)

let colors = [2, 9, 3, 4, 6, 5, 1];

let i = 1;
while (i < colors.length) {
   // console.log(`${colors[i]}`)
   i++;
}

let speed = 0;

while (speed <= 100) {
   // console.log(`the speed of the car is ${speed}MPH`)
   speed += 10;
}

let a = 1;
let b = 10;

do {
   // console.log(`${a}`)
   a++;
} while (a <= b);

//?Binary Search -- only works on sorted array ,say we have an array [ -2 , 0 , 3, 4 , 8 , 24 , 30], find the target t,where t is 4
/**Pseudocode
 * Given a sorted aray,and we are to run a binary search for a target t
 * We simply find the middle index, by the dividing the length of array by 2
 * check if the value of the target is the middle index,then we assign the value of the target to the middle index
 * if the value of the target is less than the middle index, then the take the lefr half of the array,
 * else if the value of the target is greater than the middle index,we take the right half of the middle index
 * then we loop through the process until we get value t
 */

const BinarySearch = (arr, target) => {
   let leftindex = 0;
   let rightIndex = arr.length - 1;

   while (leftindex <= rightIndex) {
      let middleindex = Math.floor((leftindex + rightIndex) / 2);
      console.log(middleindex);
      if (arr[middleindex] === target) {
         return middleindex;
      }
      if (target < arr[middleindex]) {
         rightIndex = middleindex - 1;
         console.log(` rightIndex = ${rightIndex} `);
      } else {
         leftindex = middleindex + 1;
         console.log(` leftIndex = ${leftindex} `);
      }
   }
   console.log(`couldnt find the value ${target}`);
   return -1;
};

//   console.log(BinarySearch([2, 3 ,4, 6, 8  , 10] , 14))

//? Bubble Sort -  Pseudocode
/**
 * Bubble sort, basically checks if an array is sorted in either ascending or descending order,say we have an array [ 3, 8, 6, 1 , 9 , -2]
 * loop through the array and check if the adjacent value is greater than the present arr[i] value,if true, swap the adjacent value with the value of the arr[i]
 */

//Bubble sort approach comparing the previous values
function BubbleSort(arr) {
   let swapped;
   do {
      swapped = false;
      for (let i = 1; i <= arr.length; i++) {
         if (arr[i] < arr[i - 1]) {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            console.log(arr);
            swapped = true;
         }
      }
   } while (swapped);
}

// console.log(BubbleSort([6 , -1 , 4 , 0 , 5 , 8 ]))

//Bubble Sort comparing the adjacent values , say we have an array [ 2 , 1 , 4 , 0 , -3 , 12 , 8 ]

function BubbleSorting(arr) {
   let swapped;
   //run a do , while loops to run the array atleast once to see if it meets the condition ,whether it is sorted or not sorted
   do {
      let swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
         if (arr[i] > arr[i + 1]) {
            //create a temp variale to store value of arr[i]
            let temp = arr[i];
            arr[i + 1] = arr[i];
            arr[i] = temp;
            //notify the while loop that the array was swapped by setting ther value of swapped to true..
            swapped = true;
         }
      }
   } while (swapped);
}

//console.log(BubbleSort( [ 2, 0 , -4 , 6 , 2 , 7 ]))

function test(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
         //create a temp variale to store value of arr[i]
         let temp = arr[i];
         arr[i] = arr[i + 1];
         arr[i + 1] = temp;
         console.log(arr);
      }
   }
}
// console.log(test([2 , 15 , -1 , 9 , -4 , 0]))

//reverse case for Bubble Sort, say we have an array [ 2, 3 , 0 , 5 ,-1], we expect an outout of [  ]

function ReverseSorting(arr) {
   let swapped = false;
   do {
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] < arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
            console.log(arr);
         }
      }
   } while (swapped);
}

// console.log(ReverseSorting( [2, 3 , 0 , 5 , -1]))

//? Insertion Sort- Pseudocode
/** say we have an array   [ -4 , 3,   1 , 13  , 8 , 2  ] and we expect our output to be [ -4 , 1 , 2 , 3 , 8, 13  ] ,create a function to sort the array using the insertion sort approach;
 * First we split our array into two parts,sorted part and an unsorted part, we usually assume an array has atleast one sorted value,lets assume the first element of the array is usually the sorted element.
 * so we pick an element in the unsorted part (NIS) and compare with the elements in the sorted (SE) part,
 *check if the sorted array element[i] (SE) is greater than the selected unsorted element(NIS), if true , shift the value of sorted array element[i] to the right
 * else place the value of (NIS) unsorted array to the right of sorted element[i] .
 */

// Say we have an array to sort with Insertion sort approach [-1 ,3 ,8 ,2 ,10 , 29]

//First approach
function insertionSort(arr) {
   for (let i = 1; i < arr.length; i++) {
      let NIS = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > NIS; j--) {
         arr[j + 1] = arr[j];
      }
      arr[j + 1] = NIS;
   }
   return arr;
}

// console.log(insertionSort([ -4 ,8 ,6, 3 , 13 ,2 ]))

//Second approach

function InsertionSort2(nums) {
   for (let i = 1; i < nums.length; i++) {
      let NIS = nums[i];
      let j = i - 1;
      while (j >= 0 && nums[j] > NIS) {
         nums[j + 1] = nums[j];
         j--;
      }
      nums[j + 1] = NIS;
   }
   return nums;
}

// console.log(InsertionSort2([-4 ,8 ,6, 3 , 13 ,2 ]))

/**
 * Quick sort- Pseudocode
 * Simple work by first picking a pivot element,which could be the first element of the arr ,median or the last index of the array .(in this approach we pick the last element)
 * then we trasverse the array and place the values less than the pivot element to the left of the pivot element and the values greater than the pivot element to the right
 * we continue to repeat this process until the lenth of the array is 1
 * then we concatenate all the values of the left array , pivot element  and right array,Viola we have a sorted array in ascending order
 */

function QuickSort(arr) {
   ///base case for recursion to break
   if (arr.length < 2) {
      return arr;
   }
   let pivot = arr[arr.length - 1];
   let left = [];
   let right = [];
   for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
         left = [...left, arr[i]]; //or left.push(arr[i])
      } else {
         right = [...right, arr[i]]; // or right.push(arr[i])
      }
   }
   return [...QuickSort(left), pivot, ...QuickSort(right)];
}

// console.log(QuickSort([8, 2 , 10 , 5 , -1 , 6]))
//  Visual representation of a quick sort
//                     [6]
//       [-1 , 2 , 5]       [ 8 , 10 ]

//             [5]                 [10]
//    [-1 , 2]     [ null ]  [ 8 ]      [ null ]

//         [2]
// [ -1 ]       [ null]    //base case arr.lenght now equal to 1,note that an array with a single element is a sorted array..

// [ -1 , 2 , 5]    [null]   [ 6 ]     [ 8 , 10 ] [ null]

//           [ -1 , 2 ,5 , 6 ,8 ,10 ]

numA = [3, -2, 0, 2, 12, 9];

// console.log(numA.slice(3))

numA.sort((a, b) => a - b);

const numbers = ["aas", "baz", "ark", "arev", "act", "abel"];
// numbers.sort((a , b) => a.localeCompare(b))
// console.log(numbers)

const array = [
   {
      name: "Sandra",
      age: 20,
      text: " I am the first",
      date: 2018,
   },
   {
      name: "Zebra",
      age: 24,
      text: " I am the first",
      date: 2011,
   },
   {
      name: "Tobi",
      age: 18,
      text: " I am the first",
      date: 2010,
   },
   {
      name: "Benjamin",
      age: 32,
      text: " I am the first",
      date: 2019,
   },
   {
      name: "Osaze",
      age: 27,
      text: " I am the first",
      date: 2022,
   },
   {
      name: "Ben",
      age: 32,
      text: " I am the first",
      date: 1902,
   },
];

//Excercise
//Given the data above sort the array by age , name , date .
//sort by name , age ,date in ascending order, descending order

function sortArray(arr, filterTerm) {
   for (let i = 0; i < arr.length; i++) {
      if (filterTerm === "asc") {
         arr.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filterTerm === "desc") {
         arr.sort((a, b) => b.name.localeCompare(a.name));
      } else if (filterTerm === "high-low") {
         arr.sort((a, b) => b.age - a.age);
      } else if (filterTerm === "low-high") {
         arr.sort((a, b) => a.age - b.age);
      } else if (filterTerm === "old-date") {
         arr.sort((a, b) => a.date - b.date);
      } else if (filterTerm === "new-date") {
         arr.sort((a, b) => a.date - b.date);
      } else if (filterTerm === "default") {
         // arr.sort((a ,b ) => a.date - a.date)
         return arr;
      }
   }
   return arr;
}

// console.log(sortArray(array , "default"))

//Exercise
//Given two arrays array1 = ["x" , "a" , "g" , "i" , "o"] , array2 = ["s" , "j" , "a" , "i"], create a function that returns true if there's a common element between this two array and false if there is no common element

const array1 = ["x", "a", "g", "o", "i"];
const array2 = ["s", "j", "b", "i"];

function findCommonElement(arr1, arr2) {
   for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
         if (arr1[i] === arr2[j]) {
            console.log(
               `common element exist at ${arr1[i]} at index ${[i]} and ${arr2[j]
               } at index ${j}`
            );
            return true;
         }
      }
   }
   return false;
}

// console.log(findCommonElement(array1,array2 ))

// const maps = {
//    a: true,
//    b: false,
//    c: true,
//    d: false
// }

// console.log(maps[2])

//create a function that reverses a string,say we have this 'Hey my name is Osaze' should return "ezaso si eman ym yeh"
const string = "Hey my name is Osaze";

function ReverseWord(str) {
   if (typeof str !== "string") {
      return "Params is not a string,please pass in a string";
   }
   let word = [];
   let rword = [];
   for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
      word += str[i];
   }

   for (let i = str.length - 1; i >= 0; i--) {
      rword += word[i];
   }
   return rword;
}

// console.log(ReverseWord(string))

//Given two sorted arrays,merge the two arrays and maintain them in ascending order.

const sortedArray1 = [0, 3, 4, 31];
const sortedArray2 = [4, 6, 30];

function mergeSort(sortedArr1, sortedArr2) {
   let finalArray = [];
   for (let i = 0; i < sortedArr1.length; i++) {
      for (let j = 0; j < sortedArr2.length; j++) {
         if (sortedArr1[i] < sortedArr2[j]) {
            finalArray.push(sortedArr1[i]);
            i++;
            console.log(sortedArr1[i]);
         } else if (sortedArr2[j] < sortedArr1[i]) {
            finalArray.push(sortedArr2[j]);
            j++;
            console.log(sortedArr1[j]);
         }
      }
   }
   return finalArray;
}

// console.log(mergeSort(sortedArray1 , sortedArray2))

//understanding recursion

// const values = [ 5 , 2 , 8, 5 ]

// const countdown = (arr , n ) => {
//    let acc = 0 ;
//    if( n === arr.length - 1 ){
//       return acc
//    }
//    else{
//       acc = acc + arr[n]
//       console.log("acc" , acc , arr[n])
//    }
//    return countdown(values , n - 1)
// }

// console.log(countdown(values , values.length ))

function factoriall(n) {
   if (n === 1) {
      return 1;
   }
   return n * factoriall(n - 1);
}

// console.log(factoriall(5))
const arrNums = [2, 1, 5, 6];

function WrapperFunction(array) {
   function addValues(index, total) {
      total += array[index];
      //* BASE CASE
      if (index === array.length - 1) {
         return parseInt(total);
         //*RECURSIVE CASE
      } else {
         return addValues(index + 1, total);
      }
   }
   return addValues(0, 0);
}

// const ans = WrapperFunction(arrNums)
// console.log(ans)

//REAL LIFE CASE SCENARIO FOR RECURSION...
function AIRTIME_TOPUP() {
   let dialCode = prompt("Enter USSD CODE");
   if (dialCode === "*123#") {
      let selectOption = prompt(`Airtime TopUP 
           1. Recharge From Bank
           2. Borrow Credit
           3. Me2U
           4. Recharge Voucher
      `);
      let selectedOption = parseInt(selectOption);
      if (
         selectedOption === 1 ||
         selectedOption === 2 ||
         selectedOption === 3 ||
         selectedOption === 4
      ) {
         if (confirm("Are you sure ?")) {
            alert("Congrats!Your transaction was successfull");
         }
         return;
      } else {
         alert("Wrong input");
         return AIRTIME_TOPUP();
      }
   } else {
      alert("Invalid ussd code");
      return AIRTIME_TOPUP();
   }
}

// AIRTIME_TOPUP()

function factorial(num) {
   debugger;
   if (num <= 1) {
      return 1;
   }
   return num * factorial(num - 1);
}

// console.log(factorial(5))

// Given the array ['s' , 'cr' , 't cod']  try to accumulate the values with a joinstring 'e' on every iteration

function accumulateValues(array, joinstring) {
   debugger;
   let resultSoFar = "";
   for (let i = 0; i < array.length; i++) {
      resultSoFar += array[i] + joinstring;
   }
   return resultSoFar;
}

let values = ["s", "cr", "t cod"];

// console.log(accumulateValues(values, 'e'))

// UNDERSTANDING THE CONCEPT OF STACK IN JS
/**
 * PUSH - BASICALLY IS TO INSERT INTO THE TO STACK,OR ADD A NEW ELEMENT ONTOP OF THE STACK
 * POP - MEANS TO REMOVE THE LAST ELEMENT FROM A STACK
 * PEEK - MEANS TO GLANCE THROUGH THE LAST ELEMENT OF A STACK,THIS DOESNT REMOVE OR ADD TO THE STACK
 */

class Stack {
   constructor() {
      this._top = -1;
      this._values = [];
   }
   //THE PUSH METHOD
   push(data) {
      this._top += 1;
      this._values[this._top] = data;
   }
   //THE POP METHOD
   pop() {
      //first check if the stack is empty,if true then return null
      if (this._values.length < 0) {
         return null;
      }

      const topElement = this._values[this._top];
      this.top--;
      this._values.length--;
      return topElement;
   }
   //THE PEEK METHOD
   peek() {
      if (this._top < 0) {
         return null;
      }

      return this._values[this._top];
   }
}

/**
 * QUEUE IS A FIFO KIND OF DATA STRUCTURE
 * It's a linear collection where items are inserted at the end and are removed from the front.
 * Inserting into the queue is called Enqueue.
 * Extracting from the queue is called Deque
 */

class Queue {
   constructor() {
      this._head = 0;
      this._data = [];
   }
   //Better approach to dequeue
   dequeue() {
      if (this._head < 0 || this._head >= this._data.length) {
         return null;
      }

      var dequeuedItem = this._data[this._head];
      this._head++;

      if (this._head === 100) {
         // We have 100 items in garbage
         // Remove items at indexes 0 to 99.
         this._data.splice(0, 100);

         // Reset the head
         this._head = 0;
      }

      return dequeuedItem;
   }
}

//LINKEDLIST

class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}

class LinkedList {
   constructor() {
      this._length = 0;
      this._head = null;
   }
   push(data) {
      // Instantiate a new node with Data ..PS => A NODE IS JUST AN OBJECT THAT MAKES IT POSSIBLE TO CREATE REUSABLE OBJECTS
      var node = new Node(data);

      //Check if we are inserting the first node in the list
      if (this._head === null) {
         this._head = node;
      } else {
         // Find the last node
         var current = this._head;

         while (current.next) {
            current = current.next;
            console.log(current);
         }

         current.next = node;
      }

      // Increment the length
      this._length++;
   }

   // We follow the 0 based indexes just like Arrays
   itemAt(index) {
      // Ensure that the index is within bounds
      if (index < 0 || index >= this._length) {
         // Return Null when index is out of bounds
         return null;
      }

      var current = this._head;
      var counter = 0;

      while (counter < index) {
         current = current.next;
         counter++;
      }

      return current.data;
   }
   // Returns Size of Current Linked List
   size() {
      return this._length;
   }

   //Remove an item from the linkedlist
   remove(index) {
      // Ensure that the index is within bounds
      if (index < 0 || index >= this._length) {
         return null;
      }

      var current = this._head;

      if (index === 0) {
         // Special case for removing the head node.
         this._head = current.next;
      } else {
         // Track previous element
         var previous = null;
         var counter = 0;

         while (counter < index) {
            previous = current;
            current = current.next;
            counter++;
         }

         // Set previous node's next to the node after the deleted node
         previous.next = current.next;
      }

      this._length--;
      return current.data;
   }
   //Search for an item in the list
   search(index) {
      if (index < 0 || index >= this._length) {
         return null;
      }

      let current = this._head;
      let counter = 0;
      while (counter < index) {
         current = current.next;
         counter++;
      }

      return current.data;
   }
}

// Let's create a Linked List and add 3 nodes
var list = new LinkedList();
list.push("Stacks");
list.push("Queues");
list.push("Arrays");
list.push("Sets");

//  console.log("searched:" + search)
var search = list.search(2);

// Remove the 3rd element
var removed = list.remove(2);
//  console.log("removed: " + removed);

// Remove the head node
var removed = list.remove(0);
//  console.log("removed: " + removed);

//Let's create a Linked List and add 3 nodes
var list = new LinkedList();
list.push(100);
list.push(200);
list.push(300);

for (i = 0; i < list.size(); i++) {
   // console.log("Node value: " + list.itemAt(i));
}

//BINARY SEARCH TREE

class BSTNode {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}

class BST {
   constructor() {
      this._node = null;
   }

   insert(data) {
      var node = new Node(data);

      // If it's the first node
      if (this._root === null) {
         this._root = node;
         return;
      }

      var current = this._root;

      while (current) {
         if (data < current.data) {
            if (current.left === null) {
               current.left = node;
               return;
            }
            current = current.left;
         } else if (data > current.data) {
            if (current.right === null) {
               current.right = node;
               return;
            }
            current = current.right;
         } else {
            // Duplicates are not supported
            return;
         }
      }
   }

   contains(data) {
      var current = this._root;

      while (current) {
         if (data === current.data) {
            return true;
         }

         if (data < current.data) {
            current = current.left;
         } else {
            current = current.right;
         }
      }
      return false;
   }
}
//Implementing Search in a BST
//We've already described how lookup works in Binary Search Tree. Let's look
//at the code for the lookup method as well. It returns True if the key is found
//and returns false otherwise.
