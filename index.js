function hasTargetSum(array, target) {
  // Write your algorithm here
  let result = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(`target: ${target}`)
        console.log(`Sum: ${array[i] + array[j]}`)
        result = true;
      }
    }
  }
  return result;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum(array, target) {
    for each number in the array {
      for each element in the array {
        if the sum of each index 2 numbers is equal to the target {
          return true
      }
    }
  }


*/

/*
  Add written explanation of your solution here
  has a target sum takes in 2 arguments, an array and a target number
  The function will return true if any 2 numbers in the array add up to the target number
  The function will return false if no 2 numbers in the array add up to the target number

  Step 1: Create a variable called result and set it equal to false
  Step 2: Create a for loop that will iterate through the array
  Step 3: Create a second for loop that will iterate through the array
  Step 4: Create an if statement that will check if the sum of the 2 numbers in the array is equal to the target number
  Step 5: If the sum of the 2 numbers in the array is equal to the target number, set the result variable equal to true
  Step 6: Return the result variable

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
