function elem(id) {
  return document.getElementById(id);
}

// 1-100 while loop
function loops() {
  var count = 1;
  var sum = 0;
  while(count <= 100) {
    sum += count;
    count++;
  }
  elem('while').innerHTML = "while: " + sum;

  count = 1;
  sum = 0;
  do {
    sum += count;
    count++;
  } while(count <= 100);
  elem('do_while').innerHTML = "do while: " + sum;

  sum = 0;
  for(count = 1; count <= 100; count++) {
    sum += count;
  }
  elem('for').innerHTML = "for: " + sum;
}

function fizzBuzz() {
  var output = "";
  for(var count = 0; count <= 100; count++) {
    if(isEven(count)) output += "Fizz";
    if(isOdd(count)) output += "Buzz";
  }
  elem('fizzbuzz').innerHTML = output;
  function isEven(number) {
    // If it's even, then % 2 will result in 0 (ie false)
    // when we're evaluating the conditional.
    return number % 2 ? false : true;
  }
  function isOdd(number) {
    return number % 2 ? true : false;
  }
}

function ASCII() {
  // start a table with headers
  var output = "<table><tr><th>Character</th><th>Integer</th><th>Hex</th></tr>";
  var ascii, hex;
  for(var count = 0; count <= 255; count++) {
    ascii = String.fromCharCode(count);
    hex = count.toString(16).toUpperCase(); // argument is the base, in this case 16 (hex)
    output += "<tr><td>" + ascii + "</td><td>" + count + "</td><td>" + hex + "</td></tr>";
  }
  output += "</table>";
  elem('ASCII').innerHTML = output;
}

function isEmptyArray(arr) {
  return arr.length ? false : true;
}

function arrayOperations(arr) {

  elem('first_elem').innerHTML = "First element: " + arr[0]; // first element
  elem('last_elem').innerHTML = "Last element: " +  arr[arr.length - 1]; // last element
  elem('third_elem').innerHTML = "Third element: " + arr[2];
  arr[1] = 6;
  elem('change_to_six').innerHTML = "Change the second element to six: " + arr;
  arr.splice(3, 0, [100, 101, 102]); // 1st: index, 2nd: how many to delete, 3..: elements being added)
  elem('insert_into').innerHTML = "Add [100, 101, 102] at index 3: " + arr;
  arr = arr.splice(0, 5);
  elem('first_five').innerHTML = "First five elements (which flattens [100, 101, 102], so there's 7): " + arr;
}

function sortEmails() {
  var emails = [];
  var email = "";
  while(email != "END") {
    email = prompt('Please enter an email, or type END to stop');
    emails.push(email);
  }
  emails.sort();

  var output = ""
    for(var i = 0; i < emails.length; i++) {
      output += emails[i] + "<br />";
    }
  elem('sortEmails').innerHTML = output;
}

function bubbleSort(arr) {
  var original = arr; // so we can say what the array started as
  var swapped;
  do {
    swapped = false;
    // we'll be checking arr[i + 1], which is why we loop to
    // arr.length - 1, so we aren't out of bounds
    for(var i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i+1]) { 
        var swap = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = swap;
        swapped = true;
      }
    }
  } while (swapped);

  elem('bubbleSort').innerHTML = "Before bubble sort: " + original + ". After bubble sort: " + arr;
}
elem('sortEmailsButton').addEventListener('click', sortEmails);
loops();
fizzBuzz();
ASCII();
arrayOperations([0,1,2,3,4,5]);
bubbleSort([1,5,9,3,6,2,4,11]);

