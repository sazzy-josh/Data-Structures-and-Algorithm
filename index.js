//!Stacks**

// //?Check if a word is a palindrome

//word to check
let word = 'cocococo'

//reverse word to check if word is a palindrome
let rword = ''

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

function factorial(n){
    let result = 1;
    for(let i = 2 ; i <= n ; i++){
       console.log(`${i}|| ${result} * ${i}`)  
       result = result * i
       console.log(result)
    }
   console.log('-----------------')
   
}

//?fibonacci sequence whereby the the value of n in an array is the sum of the last two values,say we have [0,1,1,2,3,5]

 function fibonacci(n){
    let arr = [ 0 , 1]
    for (let i = 2 ; i <= n ; i ++ ){
        arr[i] = arr[i-1] + arr[i-2] 
        console.log(` for n = ${[i]} ||  ${arr[i]} = ${arr[i-1]} + ${arr[i-2]} `)
        console.log(arr)
        console.log('-----------------')
    }
 }
//  fibonacci(5)
//  fibonacci(8)

//?Check if a number is a prime number(Prime numbers are natural numbers that are greater than 1 and not a products of two natural numbers)
function checkPrime(n){
    if(n < 2){
     console.log(`${n} - is not a prime number`)
    }
  for(let i = 2 ; i < n ; i++ ){
     if(n % i === 0){
       console.log(`${n} % ${i}`)
        console.log(`${n} is a not Prime number because it is divisble without a remainder`)
        console.log('-------------------------')
        return false
    }  else{
        console.log(`${n} is a prime number`)
        return true
    }
    console.log('---------------------')
  }
}
// checkPrime(150)
// checkPrime(5)

//? Linear Search given a target t, find the index of t in the array and if not found return -1
const arr = [2, 3 , 4, 0 , 1 ] //find index of 4

function find(t){
   for (let i = 0 ; i < arr.length ; i ++ ){
      if(arr[i] === t){
         console.log(`${t} is at index ${[i]}`)
         return `${t} is at index ${[i]}`
      } 
   }  console.log(-1)
    return -1
}

// find(4)
// find(3)


let colors = [ 2, 9, 3, 4, 6, 5,1 ]

let i = 1
while ( i < colors.length ) {
   // console.log(`${colors[i]}`)
   i++
}

let speed = 0

while (speed <= 100){
  // console.log(`the speed of the car is ${speed}MPH`)
   speed +=10 
}

let a = 1
let b = 10

do{
   // console.log(`${a}`)
   a++
} while (a <= b) 



//?Binary Search -- only works on sorted array ,say we have an array [ -2 , 0 , 3, 4 , 8 , 24 , 30], find the target t,where t is 4
/**Pseudocode
 * Given a sorted aray,and we are to run a binary search for a target t
 * We simply find the middle index, by the dividing the length of array by 2
 * check if the value of the target is the middle index,then we assign the value of the target to the middle index
 * if the value of the target is less than the middle index, then the take the lefr half of the array,
 * else if the value of the target is greater than the middle index,we take the right half of the middle index
 * then we loop through the process until we get value t
 */

 const BinarySearch = ( arr , target) =>  {
       let leftindex = 0;
       let rightIndex = arr.length - 1


    while(leftindex <= rightIndex){   
       let middleindex = Math.floor((leftindex + rightIndex )/ 2)
       console.log(middleindex)
       if(arr[middleindex] === target){
          return middleindex
       }
       if(target < arr[middleindex]){
           rightIndex = middleindex - 1 
           console.log(` rightIndex = ${rightIndex} `)  
         }else{
            leftindex = middleindex + 1 
            console.log(` leftIndex = ${leftindex} `)
       }
      }  console.log(`couldnt find the value ${target}`)
        return  -1
    }
   

//   console.log(BinarySearch([2, 3 ,4, 6, 8  , 10] , 14))


//? Bubble Sort -  Pseudocode 
/**  
 * Bubble sort, basically checks if an array is sorted in either ascending or descending order,say we have an array [ 3, 8, 6, 1 , 9 , -2]
 * loop through the array and check if the adjacent value is greater than the present arr[i] value,if true, swap the adjacent value with the value of the arr[i]
 */

//Bubble sort approach comparing the previous values
function BubbleSort(arr){
   let swapped ;
   do{
      swapped = false
      for( let i = 1 ; i <= arr.length ; i++ ){
         if(arr[i] < arr[i-1]){
            let temp = arr[i]
            arr[i] = arr[i - 1]
            arr[i -1] = temp
            console.log(arr)
            swapped = true
         } 
      }
   } while(swapped)
}

// console.log(BubbleSort([6 , -1 , 4 , 0 , 5 , 8 ]))


//Bubble Sort comparing the adjacent values , say we have an array [ 2 , 1 , 4 , 0 , -3 , 12 , 8 ]

function BubbleSorting( arr ){
   let swapped ; 
   //run a do , while loops to run the array atleast once to see if it meets the condition ,whether it is sorted or not sorted
   do{
    let swapped = false;
    for (let i = 0 ; i < arr.length - 1 ; i ++){
      if(arr[i] > arr[i + 1]){
        //create a temp variale to store value of arr[i]
        let temp = arr[i]
        arr[i + 1] = arr[i]
        arr[i] = temp
        //notify the while loop that the array was swapped by setting ther value of swapped to true.. 
        swapped = true
      }
    }
   } while(swapped)
}

//console.log(BubbleSort( [ 2, 0 , -4 , 6 , 2 , 7 ]))

function test(arr){
   for (let i = 0 ; i < arr.length - 1 ; i ++){
      if(arr[i] > arr[i + 1]){
        //create a temp variale to store value of arr[i]
        let temp = arr[i]
        arr[i] = arr[ i + 1]
        arr[i + 1] = temp
        console.log(arr)
      } 
   }
}
// console.log(test([2 , 15 , -1 , 9 , -4 , 0]))


//reverse case for Bubble Sort, say we have an array [ 2, 3 , 0 , 5 ,-1], we expect an outout of [  ]

function ReverseSorting(arr){
   let swapped = false; 
   do{
      for ( let i = 0 ; i < arr.length ; i++ ){
         if(arr[i] < arr[i + 1]){
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            swapped = true
            console.log(arr) 
         }
      } 
   }while(swapped)
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
function insertionSort(arr){
  for(let i = 1; i < arr.length ; i++){
      let NIS = arr[i]
      let j;
      for(j = i - 1 ; j >= 0  && arr[j] > NIS; j--){
         arr[j + 1] = arr[j]
      }
       arr[j + 1] = NIS
   }
  return arr
}

// console.log(insertionSort([ -4 ,8 ,6, 3 , 13 ,2 ]))

//Second approach

function InsertionSort2(nums){
   for(let i = 1 ; i < nums.length ; i++){
      let NIS = nums[i]
      let j = i - 1
      while(j >= 0 && nums[j] > NIS){
         nums[j + 1] = nums[j]
         j--
      }
      nums[j + 1] = NIS
   }  return nums
}

// console.log(InsertionSort2([-4 ,8 ,6, 3 , 13 ,2 ]))

/**
 * Quick sort- Pseudocode
 * Simple work by first picking a pivot element,which could be the first element of the arr ,median or the last index of the array .(in this approach we pick the last element)
 * then we trasverse the array and place the values less than the pivot element to the left of the pivot element and the values greater than the pivot element to the right 
 * we continue to repeat this process until the lenth of the array is 1
 * then we concatenate all the values of the left array , pivot element  and right array,Viola we have a sorted array in ascending order 
 */

function QuickSort(arr){
   ///base case for recursion to break
   if(arr.length < 2){
      return arr
   }
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for(let i = 0 ; i < arr.length - 1 ; i++){
    if(arr[i] < pivot){
      left = [...left , arr[i]]  //or left.push(arr[i])
    }else{
      right = [ ...right , arr[i]] // or right.push(arr[i]) 
  }
 }  return [...QuickSort(left) , pivot , ...QuickSort(right)  ]   
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

numA = [ 3 ,-2 , 0 , 2 , 12 , 9]

// console.log(numA.slice(3))

numA.sort((a , b ) => a - b )

const numbers = [ 'aas' , 'baz' , 'ark' , 'arev' , 'act' , 'abel']
// numbers.sort((a , b) => a.localeCompare(b))
// console.log(numbers)


const array = [{
   name:"Sandra" ,
   age: 20,
   text:" I am the first",
   date: 2018,
},{   
   name:"Zebra" ,
   age: 24,
   text:" I am the first",
   date: 2011,
},{
   name:"Tobi" ,
   age: 18,
   text:" I am the first",
   date: 2010,
},{
   name:"Benjamin" ,
   age: 32,
   text:" I am the first",
   date: 2019,
},{
   name:"Osaze" ,
   age: 27,
   text:" I am the first",
   date: 2022,
},{
   name:"Ben" ,
   age: 32,
   text:" I am the first",
   date: 1902,
}]

//Excercise
//Given the data above sort the array by age , name , date . 
//sort by name , age ,date in ascending order, descending order

function sortArray(arr , filterTerm){
  for(let i = 0 ; i < arr.length ; i++){
    if(filterTerm === "asc"){
      arr.sort((a ,b ) => a.name.localeCompare(b.name))
    }
    else if(filterTerm === "desc"){
      arr.sort((a ,b ) => b.name.localeCompare(a.name))
    }
    else if(filterTerm === "high-low"){
      arr.sort((a ,b ) => b.age - a.age)
    }
    else if(filterTerm === "low-high"){
      arr.sort((a ,b ) => a.age - b.age)
    }
    else if(filterTerm === "old-date"){
      arr.sort((a ,b ) => a.date - b.date)
    }
    else if(filterTerm === "new-date"){
      arr.sort((a ,b ) => a.date - b.date)
    }
    else if(filterTerm === "default"){
      // arr.sort((a ,b ) => a.date - a.date)
      return arr
    }
  }  return arr
}


// console.log(sortArray(array , "default"))

//Exercise
//Given two arrays array1 = ["x" , "a" , "g" , "i" , "o"] , array2 = ["s" , "j" , "a" , "i"], create a function that returns true if there's a common element between this two array and false if there is no common element

const array1 = ["x" , "a" , "g" , "o" , "i"] 
const array2 = ["s" , "j" , "b" , "i"]

function findCommonElement(arr1, arr2){
   for(let i = 0 ; i < arr1.length; i++){
      for (let j = 0 ; j < arr2.length ; j ++){
         if(arr1[i] === arr2[j]){
            console.log(`common element exist at ${arr1[i]} at index ${[i]} and ${arr2[j]} at index ${j}`)
            return true
         } 
      }
   } return false
}

// console.log(findCommonElement(array1,array2 ))


const maps = {
   a: true,
   b: false,
   c: true,
   d: false
}

console.log(maps[1])