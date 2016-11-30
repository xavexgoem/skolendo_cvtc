function bitwise_and(x, y) {
  return x & y;
}

function bitwise_or(x, y) {
  return x | y;
}

function bitwise_xor(x, y) {
  return x ^ y;
}

function left_shift(x, y) {
  return x << y;
}

function right_shift(x, y) {
  return x >> y;
}

function remove_substring(fullString, stringToRemove) {
  return fullString.split(stringToRemove).join('');
}

function im_awesome(numRepetitions) {
  document.write("I AM AWESOME! ".repeat(numRepetitions));
}

function is_palindrome(potentialPalindrome) {
  var reversed = potentialPalindrome.split("").reverse().join("");
  if (reversed == potentialPalindrome) {
    return true;
  } else {
    return false;
  }
}

function sort_three(num1, num2, num3) {
  var sorted = [];
  if(num1 < num2 && num1 < num3) {
    if(num2 < num3) {
      sorted = [num1, num2, num3];
    } else {
      sorted = [num1, num3, num2];
    }
  } else if (num2 < num1 && num2 < num3) {
    if(num1 < num3) {
      sorted = [num2, num1, num3];
    } else {
      sorted = [num2, num3, num1];
    }
  } else {
    if(num1 < num2) {
      sorted = [num3, num1, num2];
    } else {
      sorted = [num3, num2, num1];
    }
  }
  return sorted;
}


function letter_grade(score) {
  if(score < 0 || score > 100) {
    return "The score needs to be between 0 and 100 inclusive";
  }
  switch(true) {
    case (score > 90):
      return "A";
    case (score > 80):
      return "B";
    case (score > 70):
      return "C";
    case (score > 60):
      return "D";
    case (score <= 60):
        return "F";
  }
}

var bitwise1 = prompt('Number #1');
var bitwise2 = prompt('Number #2');
alert("AND: " + bitwise_and(bitwise1, bitwise2)); 
alert("OR: " + bitwise_or(bitwise1, bitwise2));
alert("XOR: " + bitwise_xor(bitwise1, bitwise2));
alert("Left shift: " + left_shift(bitwise1, bitwise2));
alert("Right shift: " + right_shift(bitwise1, bitwise2));
var fullString = prompt('What is the full string (we\'ll be removing a part of it)');
var stringToRemove = prompt('Of "' + fullString + '", what part do you want to remove?');
alert(remove_substring(fullString, stringToRemove));  
im_awesome(prompt('How often are you awesome?'));
alert(sort_three(Number(prompt('num 1')), Number(prompt('num 2')), Number(prompt('num 3'))));
alert(letter_grade(prompt('What was the score on the assignment?')));


