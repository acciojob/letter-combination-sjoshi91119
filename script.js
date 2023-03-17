function letterCombinations(input_digit) {
  //Complete the function

	 let result = [];
  
  // Define a recursive function to build the letter combinations
  function backtrack(combination, nextDigits) {
    // Base case: if there are no more digits left to process, add the combination to the results array
    if (nextDigits.length === 0) {
      result.push(combination);
    }
    // Recursive case: iterate over the letters for the current digit and call the function recursively for the remaining digits
    else {
      const digit = nextDigits[0];
      const letters = digitMap[digit];
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        backtrack(combination + letter, nextDigits.slice(1));
      }
    }
  }
  
  // Call the recursive function with an empty combination and the full input digits string
  if (input_digit) {
    backtrack('', input_digit);
  }
  
  // Return the array of letter combinations, sorted lexicographically
  return result.sort();
	
}

module.exports = letterCombinations;
