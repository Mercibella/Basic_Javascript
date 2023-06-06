//N0.1 Create a function that will be able to convert figures from
// Fahrenheit to Celsius.

function fahrenheitToCelsius(a) {
    return (a-32)/1.8 ; 
   } 
   var a = fahrenheitToCelsius(50);
   console.log(a);


//N0.2 Create a function that will calculate the average of numbers in an array.


function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
  }


  var numbers = [5, 10, 15, 20, 25];
var average = calculateAverage(numbers);
console.log(average);


//N0.3 Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    return (n % x === 0) && (n % y === 0);
  }


 var n = 15;
 var x = 3;
 var y = 5;



 //No.4 Create a function that will output the first 100 prime numbers.

    function getPrimes(count) {
        var primes = [];
        var num = 2;
      
        while (primes.length < count) {
          if (isPrime(num)) {
            primes.push(num);
          }
          num++;
        }
      
        return primes;
      }
      
      function isPrime(num) {
        for (var i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num > 1;
      }
      
      var primeNumbers = getPrimes(100);
      console.log(primeNumbers);


      //No.5  Create a function that will return a boolean specifying if a number is a prime number.

      function isPrime(number) {
        if (number <= 1) {
          return false;
        }
      
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
          }
        }
      
        return true;
      }


      var number = 17;
      var isPrimeNumber = isPrime(number);
      console.log(isPrimeNumber);



//var number = 17;
var isPrimeNumber = isPrime(number);
console.log(isPrimeNumber);



//No.6  Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function getPositiveNumbers(numbers) {
    var positiveNumbers = [];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]);
      }
    }
  
    return positiveNumbers;
  }
  
  

  var numbers = [1, -2, 3, -4, 5, -6, 7];
var positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers);





//N0.7  Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }




  //N0.8 The marketing team is spending way too much time typing in 
  //hashtags. Let’s create a hashtag generator for them, our hashtag
  // generator will meet the following criteria: 

//   .It must start with a hash symbol, #.

//   .Ignore all spaces in the input.

//   .All words must have their first letter capitalized.

//   .If the final result is going to be longer than 140 characters, it should return false.

//   .If the input or result is an empty string, it should return false.

function generateHashtag(input) {
    // Remove spaces and split input into an array of words
    var words = input.trim().split(/\s+/);
  
    // Check if input is empty or result would exceed 140 characters
    if (input === '' || words.length === 0 || input.length > 140) {
      return false;
    }
  
    // Capitalize the first letter of each word and join them
    var hashtag = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  
    // Add the hash symbol at the beginning
    return '#' + hashtag;
  }
  
  
  
  
  var input = "hello world";
  var hashtag = generateHashtag(input);
  console.log(hashtag);

    





