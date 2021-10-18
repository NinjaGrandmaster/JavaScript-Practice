"use strict";

/*
    The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

    The task is: find the contiguous subarray of arr with the maximal sum of items.

    Write the function getMaxSubSum(arr) that will return that sum.
*/

// Kadane’s Algorithm O(n)
function getMaxSubSum(arr) {
    let maxSum = 0; // current max sum of array subarray
    let partialSum = 0; // sum following each individual element

    for(let i = 0; i < arr.length; i++) {

        partialSum += arr[i]; // add to partial sum following an individual element

        // if the partial sum is larger than the current max sum set it as the new max sum
        if(maxSum < partialSum) {
            maxSum = partialSum;
        }

        // if the sum following the currnet element is negative reset sum to zero
        if (partialSum < 0) {
            partialSum = 0;
        }
    }

    return maxSum;
}

let input_arr = [1, -2, 3, 4, -9, 6];

console.log("Max sum from subString")
console.log(getMaxSubSum(input_arr)); // 7
console.log(getMaxSubSum([-1, 2, 3, -9] )); //5
console.log(getMaxSubSum([2, -1, 2, 3, -9]) ); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11] )); // 11
console.log(getMaxSubSum([-2, -1, 1, 2] )); // 3  
console.log(getMaxSubSum([100, -9, 2, -3, 5] )); // 100
console.log(getMaxSubSum([1, 2, 3] )); //6
console.log(getMaxSubSum([-1, -2, -3] )); //0
