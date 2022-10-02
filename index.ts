//!Stacks**

// //?Check if a word is a palindrome

// //word to check
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
/**
 * Given a sorted aray,and we are to run a binary search for a target t
 * We simply find the middle index, by the dividing the length of array by 2
 * check if the value of the target is the middle index,then we assign the value of the target to the middle index
 * if the value of the target is less than the middle index, then the take the lefr half of the array,
 * else if the value of the target is greater than the middle index,we take the right half of the middle index
 * then we loop through the process until we get value t
 */

 let array = [ -2 , 3 , 4 , 7, 10 , 40]


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


/**
 * Bubble sort, basically checks if an array is sorted in either ascending or descending order,say we have an array [ 3, 8, 6, 1 , 9 , -2]
 * loop through the array and check if the adjacent value is greater than the present arr[i] value,if true, swap the adjacent value with the value of the arr[i]
 */

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

console.log(BubbleSort([6 , -1 , 4 , 0 , 5 , 8 ]))


