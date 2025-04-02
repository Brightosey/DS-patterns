//  Fixed-Size Sliding Window
// Find the maximum sum of any K consecutive elements in an array.
function maxSumSlidingWindow(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // for the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  //for consecutive windows or slide window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // add new index and remove old index
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

// Find the minimum sum of any K consecutive elements in an array.
function minSumSlidingWindow(arr, k) {
  let minSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  minSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    minSum = Math.min(minSum, windowSum);
  }

  return minSum;
}

//Variable-size sliding window
// Find the smallest subarray with a sum ≥ S.
function minSubarrayLen(arr, s) {
  let minLength = Infinity;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right]; // updating the windowSum as it loops through the array.

    while (windowSum >= s) {
      minLength = Math.min(minLength, right - left + 1); // updating or redefining the minLength to chosse the minimum length of sub array that satisfies the condition
      windowSum -= arr[left]; //shrink the array to see if it still meets the condition
      left++; //move left pointer
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

//find the largest subarray with a sum ≥ s
function maxSubarrayLen(arr, s) {
  let maxLength = 0;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    while (windowSum >= s) {
      maxLength = Math.max(maxLength, right - left + 1);
      windowSum -= arr[left];
      left++;
    }
  }

  return maxLength;
}

// Sliding Window for String Problems
//Find the length of the longest substring without repeating characters.

function maxSubstringLen(s) {
  let charSet = new Set();
  let left = 0; //Initialise left pointer
  let maxLength = 0; //Initialise maxLength

  for (right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]); //delete the left side word if there is a repetition in the set
      left++; //Moves the left pointer
    }

    charSet.add(s[right]); //Moves the right pointer to add more words to the set
    maxLength = Math.max(maxLength, right - left + 1); //update or redefine the maxLength to take the max substring without repetition of characters
  }

  return maxLength; //return the max substring
}

//Leet code example question
//Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

function minSubarrayLen(arr, k) {
  let minLength = Infinity;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    while (windowSum >= k) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

/* You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted. */

function maxAvgValue(nums, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}

//Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.

function minSubarray(nums, k) {
  let minLength = Infinity;
  let windowSum = 0;
  let left = 0;

  for (right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum >= k) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? -1 : minLength;
}
