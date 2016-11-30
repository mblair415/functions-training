// TODO: add your solutions here!

function combineWords(word1, word2) {
    return word1+word2;
}
// combineWords("dog", "house");

function repeatPhrase(phrase, n) {
    for (var i = 0; i < n; i++) {
        console.log(phrase);
    }
}

// repeatPhrase("hello", 3);

function toTheNthPower(number, power) {
    var result = number;

    for (var i = 2; i <= power; i++) {
        result *= number
    }

    console.log(result);
}

// toTheNthPower(4, 5);

function areaOfACircle(radius) {
    console.log(3.14 * (radius * radius));
}

// areaOfACircle(2);

function pythagoreanTheroem(a, b) {
    return Math.sqrt((a*a) + (b*b));
}

// pythagoreanTheroem(3, 4);


function isXEvenlyDivisibleByY(x, y) {
    console.log(x % y === 0);
}

// isXEvenlyDivisibleByY(99,3);

function countVowels(word) {
    var vowelCounter = 0;
    var vowels = "aeiou";

    for (var i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            vowelCounter++;
        }
    }

    console.log(vowelCounter);
    return vowelCounter;
}

// countVowels("stealing");


function findWdi(arr) {
    var wdi = "wdi";

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === wdi) {
            return true;
        }
    }

    return false;
}

// findWdi([9, "bart simpson", true, "wdi"]);


function printTriangle(length) {
    var astrisk = "*";

    for (var i = 1; i < length; i++) {
      console.log(astrisk);
      astrisk += "*";
    }

    console.log(astrisk);
}

// printTriangle(5);


function printPyramid(num) {
  for (var i = 0; i < num; i++) {  // levels
    var level = "";

    for (var j = num; j > 0; j--) {  // spaces before first "*"
      level += " ";
      level += " *";
      console.log(level);
    }

  }
}

printPyramid(10);

/*
there's a space between each astrisk
there are spaces being added to the front.
this will be string concatenation.
*/
