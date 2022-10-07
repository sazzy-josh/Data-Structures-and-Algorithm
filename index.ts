//!Stacks**

// //?Check if a word is a palindrome

//word to check
// let word = 'cocococo'

//reverse word to check if word is a palindrome
// let rword = ''

//stack is initially an  empty array
// let stack: string[]; 

//loop through and then push the each item into the stack 
// for(let i = 0 ; i < word.length ; i++){
//     stack.push((word[i]))
// }
// console.log(stack)

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

console.log(InsertionSort2([-4 ,8 ,6, 3 , 13 ,2 ]))