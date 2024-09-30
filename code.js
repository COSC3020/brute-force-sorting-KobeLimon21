function permutationSort(array) {
  var permutationsTried = 0; // declare permutations

  if (array.length === 0) {
      return permutationsTried; // base case for empty array
  }

  function genPermutations(array, currentIndex) {  
      if (currentIndex === array.length - 1) { // base case to see if it has reached last element
          permutationsTried++; // increments permutations as it goes through
          if (isSorted(array)) {
              return true; // if latest permutation has it all sorted, returns true 
          }
      }

      for (let i = currentIndex; i < array.length; i++) { // iterates through the array 
          swap(array, i, currentIndex); 
          if (genPermutations(array, currentIndex + 1)) { // makes more permutations 
              return true; 
          }
          swap(array, i, currentIndex); 
      }
      return false;  
  }

  function isSorted(array) {  
      for (let i = 0; i < array.length - 1; i++) {
          if (array[i] > array[i + 1]) { // checks to see if any elements are out of order
              return false; 
          }
      }
      return true; 
  }

  function swap(array, i, j) { 
      const temp = array[i]; // temp variable for swapping later
      array[i] = array[j]; // swaps value at j 
      array[j] = temp; // swaps value at i 
  }

  genPermutations(array, 0); 

  return permutationsTried; 
}

//let arr = [3,1,22,5,4,2,3,2,1,23,23,42];
// let arr = [0,1];
//let arr = [0];
//permutationSort(arr);
//console.log("The total amount of permutations tried was " + permutationsTried);


