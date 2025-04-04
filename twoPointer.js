// The Two-Pointer Pattern in JavaScript
/* The two-pointer pattern is a technique used to solve problems that involve searching, sorting, or iterating through an array efficiently. Instead of using nested loops (which can be slow), two pointers traverse the array in a way that reduces unnecessary comparisons and operations. 

Types of Two-Pointer Approaches
1. Opposite Ends (Left and Right Pointers)

Used for sorted arrays.

Common in problems like finding pairs that sum to a target or checking if a string is a palindrome.

2. Sliding Window (Fast and Slow Pointers)

Used for contiguous subarray problems.

Common in problems like finding the longest/shortest subarray with a condition. */

//Given a sorted array nums and a target sum, determine if there exist two numbers in the array that sum to the target.

function hasPairWithSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      return true;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

function twoSum(nums, target) {
  let map = new Map(); // This will store the number and its index

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    // Check if the complement is already in the map
    if (map.has(complement)) {
      return [map.get(complement), i]; // Return indices of the two numbers
    }

    map.set(nums[i], i); // Store the current number and its index
  }

  return []; // In case no solution is found
}

//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

function removeDuplicate(nums) {
  if (nums.length === 0) return 0; //Edge case

  let i = 0; //initializing the pointer i

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      // found a unique number
      i++;
      nums[i] = nums[j]; // replace index i with index j which overides duplicates
    }
  }

  return i + 1; // returns number of unique elements in the array
}

//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

function removeElement(nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

function sortedSquare(nums) {
  let left = 0;
  let right = nums.length - 1;
  let array = new Array(nums.length);
  let index = nums.length - 1;

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      array[index] = leftSquare;
      left++;
    } else {
      array[index] = rightSquare;
      right--;
    }

    index--;
  }
  return array;
}
