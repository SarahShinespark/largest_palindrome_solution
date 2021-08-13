// TODO: Given a positive integer value "N", return the largest numeric palindrome (if one exists) that can be produced by multiplying two N-digit numbers, else return 0 (if one doesn't exist)

// EXAMPLE: N=2, output should be 9009 (91*99)

// NOTE: Assume all inputs are valid (0 < N < 8)

// DIRECTIONS:
//  0. Obtain this file from https://github.com/ankur-cp/largest_palindrome_solution
//  1. Rename this file, substituting "yourname" with your name
//  2. Replace "yourname" with your name in the variable below
exports.name = "sarah";
//  3. Add your optimizations to the solution below
//  4. Submit a pull request


let isPalindrome = (num) => {
  // determine if input value matches it's reversed value (i.e. check if it's a palindrome!)
  let strNum = num.toString();
  return strNum === strNum.split("").reverse().join("");
}


exports.getLargestPalindrome = (N) => {

  let largestPalindrome = 0;
  let base = 10
  let max_value = (base ** N) - 1
  let min_value = base ** (N-1)

  // iterate through range of multiplicands
  for (let i = max_value; i >= min_value; i--) {
      
    if (i ** 2 < largestPalindrome) { break; }
    for (let j = i; j >= min_value; j--) {

      // check if the product is a palindrome
      if (isPalindrome(i * j)) {

        // check if it's larger than our largest palindrome
        if (i * j > largestPalindrome) {
                  
          // update largest palindrome
          largestPalindrome = i * j;
        }
        break
      } // end if
    } // end inner for
  } // end outer for

  // return result
  return largestPalindrome;
}

// input
const N = 5;

// CHALLENGE: Can you optimize the algorithm above so that works for input values N=4, N=5, N=6 in a "reasonable" amount of time?

// N=2, correct output = 9009
// N=3, correct output = 906609
// N=4, correct output = 99000099
// N=5, correct output = 9966006699
// N=6, correct output = 999000000999
// N=7, correct output = 99956644665999

// execution
console.time(exports.name)
console.log("result:", exports.getLargestPalindrome(N))
console.timeEnd(exports.name)
