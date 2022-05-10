"use strict";

//javascript full course exercise
//Varibales
//var
//var from variables
var baradaran = "danial";
var danial = 17;
abolfazlr = 88;
rah = 8;
var baradaran = "new name is daniel"; // console.log(baradaran);         
//let
//let from variables

var rus = "country";
var max = "max";
daniel = "daniel";
alice = 88;
var newLocal = max = "hi"; // console.log(max);
//const 
//const from variables

var me = "alex";
job = "programming";
number = 898; // console.log(job);
// console.log(typeof job);
//Data Types

var string = "abolfazl";
var number_ex = 17;
var number_string = "17";
var myobject = {
  name: "abolfazl",
  love: "js"
};
var myarray = [1, 2, 3, 4, 5];

var myfunc = function myfunc() {// console.log(danial);
};

var my_var = true;
my_var = false;
undefind = undefined;
null_var = null;
var date = Date(); // console.log(my_var)
// console.log(typeof my_var);
//String

var love = "javascript";
var verb = "is love"; //concat to string in condition of variable

var concatenation = love + " " + verb; //checks for number of letters in string

var stringLength = love.length; //concat two variable

var stringConcat = love.concat("     " + verb); //changes case to upper

var stringToUpperCase = love.toUpperCase(); //changes case to lower 

var stringToLowerCase = love.toLowerCase(); //Returns the position of the first occurrence of a substring

var stringIndexOf = love.indexOf("a", 2); //select a part of string

var stringSubstring = love.substring(4, 5); //select a part of string

var stringSlice = love.slice(4, 5); //Split a string into substrings using the specified separator and return them as an array

var stringSplit = love.split(""); //replaces a text in string

var stringReplace = love.replace("a", "A"); //repeats a string

var stringRepeat = love.repeat(5); // console.log(stringSubstring);
// console.log(stringSlice);
// console.log(typeof stringRepeat);
//Number

var number1 = 7;
var number2 = 4;
var number3 = "3.21";
var number4 = 4435.34;
var numberPlus = number1 + number2;
var numberMinus = number1 - number2;
var numberTimes = number1 * number2;
var numberDivision = number1 / number2;
var numberPercentage = number1 % number2;
var numberStringPlus = number1 + number3;
var numberStringMinus = number1 - number3;
var numberStringTimes = number1 * number3;
var numberStringDivision = number1 / number3;
var numberStringPercentage = number1 % number3;
var numberInfinityP = number1 / 0;
var numberInfinityN = -number1 / 0; //changes type to string from number

var numberToString = number1.toString();
var numberToNumber = Number(number3); //shows a Audit number to special number after dot

var numberToFixed = number4.toFixed(2); //shows a Audit number to special number (checks all length of number)

var numberToPrecision = number4.toPrecision(1); //exactly like number() with some little diff

var numberToParseInt = parseInt("44545.45r4"); //exactly like number() with returning point part

var numberToParseFloat = parseFloat("44545.45r4"); // console.log(numberToFixed);
// console.log(numberToPrecision);
// console.log(typeof numberToParseFloat);
//Array

var myArray = [4, 5, 6];
var myArray2 = [66, 77, 88];
var myArray3 = [1, 2, 3, 4, 5, 6];
var myArray4 = [{
  id: 1,
  name: "sphr"
}, {
  id: 2,
  name: "rhmti01"
}];
var myArray5 = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 1];
var myArray6 = ["a", "b", "G", "A", 4, "#", "5"];
var myString = " i love programming and this is awesome"; //Inserts new elements at the start of an array, and returns the new length of the array

var arrayUnshift = myArray.unshift(1, 2, 3); //Inserts new elements at the end of an array, and returns the new length of the array.

var arrayPush = myArray.push(7, 8, 9); //Removes elements from an array and, inserts new elements in their place, returning the deleted elements

var arraySplice = myArray.splice(3, 3, 4, 5, 6); //Removes the first element from an array and returns it

var arrayShift = myArray2.shift(); //Removes the last element from an array and returns it.

var arrayPop = myArray2.pop(); //Returns the value of the first element in the array where predicate is true

var arrayFindR = myArray4.find(function (element) {
  return element.name === "sphr";
}); //Returns the index of the first element in the array where predicate is true

var arrayFind2R = myArray4.findIndex(function (element) {
  return element.name === "sphr";
}); //Returns the index of the first occurrence of a value in an array

var arrayFindF = myArray5.indexOf(3); //Returns the index of the last occurrence of a value in an array

var arrayFInd2F = myArray5.lastIndexOf(4); //Returns the index of the first occurrence of a value in an array

var arrayFind3F = myArray5.indexOf(4, 5); //Determines whether an array includes a certain element

var arrayIncludes = myArray5.includes(4, 7); //Arrow function ES6 

var arrayArrowFunction = function arrayArrowFunction(user, operating_system) {
  return user + " " + operating_system;
}; //Removes elements from an array and


var arrayEmpty = myArray5.splice(0, myArray5.length); //concat two array

var arrayConcat = myArray.concat(myArray2); //Returns a copy of a section of an array

var arraySlice = arrayConcat.slice(3, 7); //spread operator

var arrayCombined = [].concat(myArray, myArray2); //copying an array

var arrayCopy = [].concat(myArray); //iterating an array

for (var _i = 0, _myArray = myArray; _i < _myArray.length; _i++) {
  var _number = _myArray[_i];
} // console.log(number);
//iterating an array


var arrayForEach = myArray.forEach(function (number, index) {// console.log(`${number} = ${index}`);
}); //Adds all the elements of an array into a string, separated by the specified separator string

var arrayJoin = myArray.join("-"); //Split a string into substrings using the specified separator and return them as an array

var arraySplit = myString.split(" "); //Adds all the elements of an array into a string, separated by the specified separator string

var arrayJoin2 = arraySplit.join(" "); //Reverses the elements in an array in place

var arrayReverse = myArray.reverse(); //Sorts an array in place

var arraySort = myArray.sort(); // Sorts an array in place

var arraySort2 = myArray6.sort(); //Returns the elements of an array that meet the condition specified in a callback function

var arrayFilter = myArray.filter(function (value) {
  return value > 3;
}); //Calls a defined callback function on each element of an array, and returns an array that contains the results

var arrayMap = myArray.map(function (number, value) {
  return {
    number: number,
    value: value
  };
});
var sum = 0; //Calls the specified callback function for all the elements in an array

var arrayReduce = myArray.reduce(function (value) {
  return sum += value;
}); // console.log(arrayArowFunction("rhmti01","windows"));
// console.log(myArray);
//Object

var myObject = {
  first_name: "Abolfazl",
  love: "Proramming",
  age: 16,
  location: {
    city: "Tabriz",
    country: "Iran"
  }
}; //creating a factory function as a mother function 

var factoryFunctionObject = function factoryFunctionObject(first_name, last_name) {
  return {
    first_name: first_name,
    last_name: last_name
  };
}; //creating a constructor function as a mother function


var constructorFunctionObject = function constructorFunctionObject(first_name, last_name) {
  this.first_name = first_name, this.last_name = last_name;
}; //emurating in object by For In


for (var _element in myObject) {// console.log(element , myObject[element]);
}

if ("love" in myObject) console.log(); //cloning an object

var objectClone = Object.assign({}, myObject); //PI number in js 

var objectPINumber = Math.PI; //powering number in js

var objectPow = Math.pow(4, 5); //radical number in js

var objectRadical = Math.sqrt(4); //absolute value in js

var objectAbsoluteValue = Math.abs(-444); //round number in js

var objectRound = Math.round(3434234.23424); //round to up in js

var objectRoundUP = Math.ceil(4.1); //round to down in js

var objectRoundDOWN = Math.floor(4.7); //sin in js

var objectSin = Math.sin(90 * Math.PI / 180); //cos in js

Math.cos(0 * Math.PI / 180); //max number in js

var objectMaxNumber = Math.max(0, 300, 35, 2, -8, -100); //min number in js

var objectMinNumber = Math.min(0, 300, 35, 2, -8, -100); //random number in js

var objectRandomNumber = Math.floor(Math.random() * 10) + 1; //Date Object in js

var now = new Date();
now = new Date(2020, 11, 18, 21, 30);
now = new Date('december 18 2020 22:00');
now = new Date().toLocaleString();
now = now.toString(); // objectFunction = new constructorFunctionObject("milad", "nouri")
// let objectFunction = factoryFunctionObject("sphr", "bakhtarae")
// console.log(objectRandomNumber);
//Function
//Function Declarations

function myFunction1() {
  console.log("from myFunction1");
} // Annonymous Functions Expressions


var myFunction2 = function myFunction2() {
  console.log("fom myFunction2");
};

var functionDeclarations1 = function functionDeclarations1() {
  var age = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return age + language;
};

var functionDeclarations2 = function () {
  var age = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
} // console.log("my age is " + age); 
//Function Expression (IIFE)
(function (name, age) {// console.log( name +" ages' is  = " + age );
}(" mamareza", 4)); //Arguments in Function


function functionArguments1(firstName, lastName) {
  return firstName + " " + lastName;
}

function functionArguments2() {
  var totalOfArguments = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var args = _step.value;
      totalOfArguments += args;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return totalOfArguments;
}

function functionArguments3() {
  var totalOfArguments2 = "";
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var args2 = _step2.value;
      totalOfArguments2 += " " + args2;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return totalOfArguments2;
} //Rest operators in Function


function restOperators() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  });
} //Default Parameters in Function 


function functionDefault(b) {
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  return a + b + c;
} //Getter and Setter in Function


var functionGetterSetter = {
  firstName: "abolfazl",
  lastName: "rahmati",

  get fullName() {
    return "".concat(this.firstName, " ").concat(this.lastName);
  },

  set fullName(value) {
    if (typeof value !== "string") {// throw new Error("Please inter a new valid string!")
    }

    var full = value.split(" ");

    if (value.length === 1) {// throw new Error("Please enter first name and last name correctly")
    }

    this.firstName = full[0], this.lastName = full[1];
  }

};

try {
  functionGetterSetter.fullName = " ";
} catch (error) {
  alert(error);
} //This in Javascript    method --> obj    function --> window , global


var thisObject = {
  title: "this in javascript",
  tags: [1, 2, 3, 4, 5],
  body: function body() {// console.log(this);
  }
};
thisObject.body();

var thisFunction = function thisFunction() {
  console.log(this);
}; // thisFunction()
// console.log(functionDeclarations1(9));
// functionDeclarations2()
// console.log(restOperators("abolfazl ", "rahmati" ));
// functionGetterSetter.fullName ="mrm rhmti"
//Operators
// Arithmetic Operators in Javascript
// +   -   *   /   %   ++   --   **
// Assignment Operators in Javascript
// +=   -=   *=   /=   %=   <<=   >>=   **=
// Comparison Operators in Javascript
// ==   ===   !==   >=   <=  <   >
// Conditional Operators in Javascript


var Conditional = number > 1000 ? "Gold" : "Silver"; // Logical Operators in Javascript
//  &&    ||    ! 
// Loops & Conditional
// If & else 

var hour = 33;
if (hour >= 6 && hour <= 11) console.log("Good Morning");else if (hour > 11 && hour <= 15) console.log("Good noon");else if (hour > 15 && hour <= 20) console.log("Good evening");else if (hour > 20 && hour <= 24) console.log("Good Night");else if (hour >= 1 && hour < 6) console.log("Good Mid Night"); // else console.log("not in range");
//Switch

var programming_language = "JS";

switch (programming_language) {
  case "Javascript":
    console.log("my Programming language is Javascript");
    break;

  case "Python":
    console.log("my Programming language is Python");
    break;

  case "Solidity":
    console.log("my Programming language is Solidity");
    break; // default:console.log("Not interested to be a _PROGRAMMER_ ");

    break;
} //For loop


for (var _x = 0; _x <= 10; _x++) {// console.log(x);
}

var y = 5;

for (;;) {
  if (y > 10) break; // console.log(y);

  y++;
}

var r = 0;

for (;;) {
  if (r == "15") {
    break;
  } // console.log(r);


  r++;
} //While l   


x = 0;

while (x <= 10) {
  if (x % 2 == 0) {// console.log(x);
  }

  x += 4;
}

var timeByYear = new Date().getFullYear();

while (timeByYear == 2022) {
  // console.log("we are in 2022 NOW");
  break;
} //Do...While


y = 1256398;

do {
  if (y % 2 == 0) {// console.log(y);
  }

  y++;
} while (y <= 10);

var p = 0;

do {
  if (p % 3 == 0) {// console.log("ok");
  }
} while (p == 10); //For In  for object (ES Standard)


var objectForin = {
  a: 1,
  b: 2,
  c: 3
};

for (var alphabet in objectForin) {} // console.log(`${alphabet} : ${objectForin[alphabet]}`);
//For Of   for array  (ES Standard)


var arrayForOf = [1, 2, 3, 4, 5, 6];

for (var _i2 = 0, _arrayForOf = arrayForOf; _i2 < _arrayForOf.length; _i2++) {
  var _element2 = _arrayForOf[_i2];
} // console.log(element);
//For Each


var favoriteFruits = ['bannana', 'apple', 'orange', 'kiwi', 'strawbery'];
favoriteFruits.forEach(function (element, index) {// console.log(`${index}: ${element}`)
}); //Map

var person = [{
  name: 'mamareza',
  fName: 'maghsoodi'
}, {
  name: 'akbar',
  fName: 'ahmadi'
}, {
  name: 'hamid',
  fName: 'alinia'
}, {
  name: 'amir',
  fName: 'ashrafi'
}];
person.forEach(function (element, index) {// console.log(index , element)
});
person.map(function (element, index) {// console.log(index, element)
}); //BOM
//shows height of browser

var bomHeight = window.innerHeight; //shows width of browser 

var bomWidth = window.innerWidth; //shows information of browser

var bomLocation = window.location; //interface returns the number of pixels that the document is currently scrolled vertically

var bomScrollX = window.scrollX; //interface returns the number of pixels that the document is currently scrolled horizontally

var bomScrollY = window.scrollY; // reference to the parent of the current window or subframe 

var bomParent = window.parent; // returns the horizontal distance, in CSS pixels to the left side of the screen

var bomScreenX = window.screenX; // returns the vertical distance, in CSS pixels to the top edge of the screen.

var bomScreenY = window.screenY; //resizes browser width and height 
// Window.resizeTo(777,777)
//sets horizontal and vertical Coordinates
// window.scrollTo({
//     top: 100,
//     left: 100,
//     behavior: 'smooth'
//   });
//open a new window

var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open("https://www.rhmti01.ir/", "DescriptiveWindowName", "left=240,top=130,width=1400,height=720");
} // window.close() 
// openRequestedPopup()      
//make a new alert
// alert("javascript is good")
//yes no question with javascript
// confirm("Are You JS Developer?")
//question with javascript with text and answer
// prompt("what is your name?")
//setting time to run costume function 
// setTimeout(() => {console.log("this is the first message")}, 500)
//repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
// setInterval(() => {console.log("hi");}, 2000);
//history in javascript
// history.back()
// history.go();
// history.go(-1)
// history.forward() 
// document.URL = " http://127.0.0.1:5500/ "   
// document.title = " ok  "
//location of website in bom
// location.href = " "
//location.assign(" ")
//window navigators
// console.log(navigator.userAgent)  
// console.log(navigator.language);
// console.log(navigator.platform);
// console.log(navigator.onLine);
// console.log(navigator.javascriptEnabled());
//window screen 
// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availHeight);   
// console.log(screen.availWidth);   
// console.log(screen.colorDepth);
//DOM
//Select Element by getElement by ID


var logo = document.getElementById("logo");
var heading = document.getElementById("heading");
var shoppingCart = document.getElementById("shopping-cart");
var headingInner = heading.innerHTML; // heading.classList = "headingClass"
// heading.style.backgroundColor = "black"
// heading.style.fontSize = "80px"
// heading.style.color = "white"
// heading.style.borderRadius = "20px"
//Select Element by getElement by Class Name

var cards = document.getElementsByClassName("card");
var infoCard = document.getElementsByClassName("info-card");
var row = document.getElementsByClassName("row"); //Select Element by getElement by Tag Name

var h1 = document.getElementsByTagName("h1");
var div = document.getElementsByTagName("div");
var img = document.getElementsByTagName("img"); //Select Element by getElement by query selector

var headingQuery = document.querySelector("#heading");
var cardQuery = document.querySelector(".card");
var h1Query = document.querySelector("h1"); //select Element by getElement by query selector All

var cardsQuery = document.querySelectorAll(".card");
var infoCardQuery = document.querySelectorAll(".info-card");
var rowQuery = document.querySelector(".row"); //difference between getElements  and  querySelectorAll

var six = document.getElementsByClassName("six"); // Html Collection

var link = document.getElementsByClassName("link"); // Html Collection
//       six.forEach(element => {
//        console.log(element);
//    });
// console.log(six);

var sixQ = document.querySelectorAll(".six"); // NodeList

var linkQ = document.querySelectorAll(".link"); // NodeList
// sixQ.forEach(element => {
// element.remove() 
// }); 
// console.log(linkQ);

var links = document.querySelectorAll("#primary > .link ");
var rowAll = document.querySelectorAll("#courses-list > .row"); //Traversing from Parent to children 

var primary = document.querySelector("#primary");
var primaryChildNodes = document.querySelector("#primary").childNodes;
var primaryChildren = document.querySelector("#primary").children; // console.log(primaryChildren);

var secondary = document.querySelector("#secondary");
var secondaryChildNodes = document.querySelector("#secondary").childNodes;
var secondaryChildren = document.querySelector("#secondary").children; // console.log(secondaryChildren);

var footer = document.querySelector("#footer").children;
var header = document.querySelector("#header").children;
var price = document.querySelector(".price").children[0];
var cardChildren = document.querySelector(".card").children[1].children[2].src; // console.log(cardChildren);  

var textNodeChild = document.querySelector("#header").firstChild; // console.log(textNodeChild);

var th = document.querySelector("#header").firstElementChild.firstElementChild.children[1];
th = th.firstElementChild.firstElementChild.children[1].firstElementChild.firstElementChild.firstElementChild.children[2]; // console.log(th);

var input = document.querySelector("#hero").firstElementChild.firstElementChild.firstElementChild;
input = input.firstElementChild.children[2].firstElementChild.setAttribute("placeholder", "چی میخای یادبگیری ؟!");
var paragraph = document.querySelector("#courses-list").children[1].firstElementChild.firstElementChild;
paragraph = paragraph.children[1].children[1].innerHTML = "محمدرضا حاجی مقصودی !!"; // console.log(paragraph);
// Traversing from children to Parent 

var coursesList = document.querySelector(".price").parentElement.parentElement.parentElement;
coursesList = coursesList.parentElement.parentElement; // console.log(coursesList);             

var coursesListNode = document.querySelector(".card").parentNode.parentNode.parentNode; // console.log(coursesListNode);
// Next Element Sibling 

var aLink = document.querySelector("h4").nextElementSibling.nextElementSibling.nextElementSibling;
aLink = aLink.nextElementSibling; // console.log(aLink)
// Previous Element Sibling 

var h4 = document.querySelector(".add-to-cart").previousElementSibling.previousElementSibling;
h4 = h4.previousElementSibling.previousElementSibling; // console.log(h4); 

var tr = document.querySelector("th").parentElement.firstElementChild.nextElementSibling;
tr = tr.nextElementSibling.nextElementSibling.previousElementSibling.parentElement; // console.log(tr);
// Create a new element by Javascript 

var newLink1 = document.createElement("a"); // newLink.classList = "link"

newLink1.setAttribute("class", "link"); // newLink.id = "link"

newLink1.setAttribute("id", "link1"); // newLink.innerHTML = "لینک جدید 1"
// newLink1.textContent = "لینک جدید 1"

newLink1.appendChild(document.createTextNode("لینک جدید 1"));
var primaryLinkLists = document.querySelector("#primary");
primaryLinkLists.appendChild(newLink1); // console.log(newLink1);

var newLink2 = document.createElement("a");
newLink2.classList = "link";
newLink2.id = "link2";
newLink2.appendChild(document.createTextNode("لینک جدید 2"));
var secondaryLinkLists = document.querySelector("#secondary");
secondaryLinkLists.appendChild(newLink2); // console.log(newLink2);
//Remove Element by Javascript

var coursesListJs = document.querySelectorAll("#courses-list > .row "); // coursesListJs[0].remove()
// coursesListJs[1].remove()
// newLink1.remove()
// newLink2.remove()
// secondary.remove()
// primary.remove() 
// console.log(coursesListJs); 
// Replace Element by Javascript

var h1Replace = document.createElement("h1"); // setting attributes

h1Replace.classList = "heading";
h1Replace.id = "headingReplace";
h1Replace.appendChild(document.createTextNode("جاوااسکریپت ")); // console.log(h1Replace); 

var coursesListReplace = document.querySelector("#courses-list"); // console.log(coursesListReplace);

var headingReplace = document.querySelector(".heading"); // console.log(headingReplace);
// Replacing Elements

coursesListReplace.replaceChild(h1Replace, headingReplace);
var h4Replace = document.createElement("h4");
h4Replace.id = "h4Replace";
h4Replace.classList.add("h4Replace");
h4Replace.appendChild(document.createTextNode("دوره مقدماتی جاوا اسکریپت")); // console.log(h4Replace); 

var infoCardReplace = document.querySelector(".info-card"); // console.log(infoCardReplace); 

var h4Text = document.querySelector(".info-card").firstElementChild; // console.log(h4Text);

infoCardReplace.replaceChild(h4Replace, h4Text); // classList

var linkAttr = document.querySelector('.link');
var linkClassList = linkAttr.classList;
var LinkClassName = linkAttr.className; // adding classList

linkAttr.classList.add('new-class'); // removing classList

linkAttr.classList.remove('link'); // id

element = linkAttr.id; // adding Id

linkAttr.id = 'link'; // removing Id

linkAttr.id = ' '; // attribute  function
// getAttribute

element = linkAttr.getAttribute('class'); // setAttribute

element = linkAttr.setAttribute('id', 'newId'); // hasAttribute

element = linkAttr.hasAttribute('target'); // Event Listeners
// syntax

var clearCart = document.querySelector("#clear-cart");
clearCart.addEventListener("click", clearCartClick);

function clearCartClick() {} // console.log("you clicked ClearCart Button !!!"); 
// console.log(clearCart);          


document.addEventListener("scroll", scroll);

function scroll() {} // console.log("you scrolled page , TNX!");  
// Event Parameter in EventListener


var mainBar = document.querySelector(".main-bar");
mainBar.addEventListener("click", mainBarClick);

function mainBarClick(event) {
  console.log(event); // console.log(event.type);
  // console.log(event.pageX);
  // console.log(event.target);   
  // event.target.outerText = "ok"  
  // console.log(event.target.baseURI);
  // console.log(event.target.localName);  
  // console.log(event.target.nodeName);  
} // Mouse Events


var clearCartBtn = document.querySelector('#clear-cart'); // click 
// clearCartBtn.addEventListener('click', printEvent )
// Double click 
// clearCartBtn.addEventListener('dblclick', printEvent )
// mouse enter
// clearCartBtn.addEventListener('mouseenter', printEvent )
// mouse leave
// clearCartBtn.addEventListener('mouseleave', printEvent )
// mouse over
// clearCartBtn.addEventListener('mouseover', printEvent )
// mouse out
// clearCartBtn.addEventListener('mouseout', printEvent )
// mouse up
// clearCartBtn.addEventListener('mouseup', printEvent )
// mouse down
// clearCartBtn.addEventListener('mousedown', printEvent )
// mouse move
// clearCartBtn.addEventListener('mousemove', printEvent )

function printEvent1(e) {
  console.log(e);
  console.log("THE EVENT IS: ".concat(e.type));
} // KeyBoard Events


var submitSearchCourse = document.querySelector("#search");
var searchCourse = document.querySelector("#search-course"); // submit for form
// submitSearchCourse.addEventListener("click",PrintEvent2)
// Key Press
// searchCourse.addEventListener("keypress",PrintEvent2)
// Key Down
// searchCourse.addEventListener("keydown",PrintEvent2)
// Key Up
// searchCourse.addEventListener("keyup",PrintEvent2)
// focus
// searchCourse.addEventListener('focus',PrintEvent2) 
// Blur
// searchCourse.addEventListener("blur",PrintEvent2)
// copy
// searchCourse.addEventListener("copy",PrintEvent2)
// cut
// searchCourse.addEventListener("cut",PrintEvent2)
// paste
// searchCourse.addEventListener("paste",PrintEvent2)

function PrintEvent2(e) {} // console.log(`The Event Type is = ${e.type}`);
// console.log(e); 
// Event Bubbling 


var cardFirst = document.querySelector(".card");
var cardSecond = document.querySelector(".info-card");
var cardThird = document.querySelector("#add-to-card");
cardFirst.addEventListener("click", function (e) {
  e.preventDefault(); // console.log(`you clicked first card`);
});
cardSecond.addEventListener("click", function () {// console.log(`you clicked second card`);
});
cardThird.addEventListener("click", function () {// console.log(`you clicked third card`);
}); // The Solution is in below
// Propagation (first Solution)

var cardCard = document.querySelector('.card');
var infoCardCard = document.querySelector('.info-card');
var addToCartCard = document.querySelector('.add-to-cart');
cardCard.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation(); // console.log('you Click the card')
});
infoCardCard.addEventListener('click', function (e) {
  // console.log('you Click the infoCard')
  e.stopPropagation();
  e.preventDefault();
});
addToCartCard.addEventListener('click', function (e) {
  // console.log('you Click the addToCart')
  e.stopPropagation();
  e.preventDefault();
}); // Delegation (second solution)

var coursesListDele = document.querySelector('#courses-list');
coursesListDele.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    console.log(e.target);
  }
});
var footerListsFor = document.querySelector("footer");
footerListsFor.addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
    e.preventDefault(); //    console.log(e.target);
  }
}); // localStorage
// setting in local Storage 

localStorage.setItem("Javascript", "React");
localStorage.setItem("Python", "Django");
localStorage.setItem("PHP", "Laravel");
localStorage.setItem("Dart", "Flutter");
localStorage.setItem("Ruby", "Ruby on Rails");
localStorage.setItem("CSS", "Tailwind"); // getting item in local Storage

localStorage.getItem("Python");
localStorage.getItem("PHP");
localStorage.getItem("Ruby");
localStorage.getItem("CSS");
var JavascriptLS = localStorage.getItem("Javascript"); // console.log(JavascriptLS);
// console.log(localStorage.length);
// removing item in local Storage

localStorage.removeItem("Javascript");
localStorage.removeItem("CSS");
localStorage.removeItem("Python");
localStorage.removeItem("Dart");
localStorage.removeItem("PHP"); // Clearing all in LS

localStorage.clear(); // Adding multiple items in value 

localStorage.setItem("JS", ["React", "Vue", "Angular"]); // Not Advised

localStorage.removeItem("JS"); // better way 

var myArray7 = ["React", "Vue", "Angular", "React Native", "NodeJS", "ExpressJS"];
var myarray7Stringify = JSON.stringify(myArray7);
localStorage.setItem("JavascriptLocalS", myarray7Stringify);
var JavascriptLocalS = localStorage.getItem("JavascriptLocalS");
JavascriptLocalS = JSON.parse(JavascriptLocalS); // console.log(JavascriptLocalS);

var programming_languages = ["Javascript", "Python", "Solidity", "Swift", "C#", "Java"];
var myArray8 = JSON.stringify(programming_languages);
localStorage.setItem("PLLS", myArray8);
var PLLS = localStorage.getItem("PLLS");
PLLS = JSON.parse(PLLS); // console.log(PLLS); 
// OOP 
//Object literals

var programmer = {
  name: "abolfazl",
  age: "17",
  level: 9.5,
  // levelCheck : function() {
  // }
  sath: function sath() {
    if (this.level < 5) {
      return "Junior";
    } else if (this.level > 5 && this.level < 8) {
      return "MidLevel";
    } else if (this.level > 8) {
      return "Senior";
    }
  }
}; // console.log(programmer.name);
// console.log(programmer.age);
// console.log(programmer.sath());
// Object Constructor

var Constructor1 = function Constructor1(name, age, level) {
  this.name = name, this.age = age, this.level = level; // levelCheck : function() {
  // }

  this.sath = function () {
    if (this.level < 5) {
      return "Junior";
    } else if (this.level > 5 && this.level < 8) {
      return "MidLevel";
    } else if (this.level > 8) {
      return "Senior";
    }
  };
};

var constructorP1 = new Constructor1("abolfazl", 17, 3.6); // console.log(constructorP1);
// console.log(constructorP1.sath());
// console.log(constructorP1.age);

var constructor2 = function constructor2(name, date, job) {
  this.name = name, this.date = date, this.job = job, this.nameCharacter = function () {
    if (this.name.length > 10) {
      return "THIS NAME IS LONG";
    } else if (this.name.length < 10) {
      return "THIS NAME IS SHORT";
    }
  };
};

var constructorP2 = new constructor2("abolfazl", 29, "programmer"); // console.log(constructorP2);
// console.log(constructorP2);
// console.log(constructorP2.nameCharacter());