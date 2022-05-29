//javascript full course exercise


//Varibales

//var

//var from variables
var baradaran = "danial"
var danial = 17
abolfazlr = 88
rah = 8
var baradaran = "new name is daniel"
// console.log(baradaran);         

//let

//let from variables
let rus = "country"
let max = "max"
daniel = "daniel"
alice = 88
const newLocal = max = "hi"
// console.log(newLocal);

//const 

//const from variables
const me = "alex"
job = "programming"
number = 898
// console.log(job);
// console.log(typeof job);

//Data Types

let string = "abolfazl";
let number_ex = 17;
let number_string = "17";
let myobject = {
    name: "abolfazl",
    love: "js"
}
let myarray = [1, 2, 3, 4, 5]
let myfunc = function () {
    // console.log(danial);
}
let my_var = true
my_var = false
undefind = undefined
null_var = null;
let date = Date();
// console.log(my_var)
// console.log(typeof my_var);


//String

let love = "javascript"
let verb = "is love"
//concat to string in condition of variable
let concatenation = love + " " + verb
//checks for number of letters in string
let stringLength = love.length
//concat two variable
let stringConcat = love.concat("     " + verb)
//changes case to upper
let stringToUpperCase = love.toUpperCase()
//changes case to lower 
let stringToLowerCase = love.toLowerCase()
//Returns the position of the first occurrence of a substring
let stringIndexOf = love.indexOf("a", 2)
//select a part of string
let stringSubstring = love.substring(0, 5)
//select a part of string
let stringSlice = love.slice(0, 5)
//Split a string into substrings using the specified separator and return them as an array
let stringSplit = love.split("")
//replaces a text in string
let stringReplace = love.replace("a", "A")
//repeats a string
let stringRepeat = love.repeat(5)
// console.log(stringSubstring);
// console.log(stringSlice);
// console.log(typeof stringRepeat);

//Number

let number1 = 7;
let number2 = 4;
let number3 = "3.21";
let number4 = 4435.34;
let numberPlus = number1 + number2;
let numberMinus = number1 - number2;
let numberTimes = number1 * number2;
let numberDivision = number1 / number2;
let numberPercentage = number1 % number2
let numberStringPlus = number1 + number3;
let numberStringMinus = number1 - number3;
let numberStringTimes = number1 * number3;
let numberStringDivision = number1 / number3;
let numberStringPercentage = number1 % number3;
let numberInfinityP = number1 / 0;
let numberInfinityN = -number1 / 0;
//changes type to string from number
let numberToString = number1.toString()
let numberToNumber = Number(number3)
//shows a Audit number to special number after dot
let numberToFixed = number4.toFixed(2)
//shows a Audit number to special number (checks all length of number)
let numberToPrecision = number4.toPrecision(1)
//exactly like number() with some little diff
let numberToParseInt = parseInt("44545.45r4")
//exactly like number() with returning point part
let numberToParseFloat = parseFloat("44545.45r4")
// console.log(numberToFixed);
// console.log(numberToPrecision);
// console.log(typeof numberToParseFloat);

//Array

let myArray = [4, 5, 6]
let myArray2 = [66, 77, 88]
let myArray3 = [1, 2, 3, 4, 5, 6]
let myArray4 = [{
        id: 1,
        name: "sphr"
    },
    {
        id: 2,
        name: "rhmti01"
    }
]
let myArray5 = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 1]
let myArray6 = ["a", "b", "G", "A", 4, "#", "5"]
let myString = " i love programming and this is awesome"
//Inserts new elements at the start of an array, and returns the new length of the array
let arrayUnshift = myArray.unshift(1, 2, 3)
//Inserts new elements at the end of an array, and returns the new length of the array.
let arrayPush = myArray.push(7, 8, 9)
//Removes elements from an array and, inserts new elements in their place, returning the deleted elements
let arraySplice = myArray.splice(3, 3, 4, 5, 6)
//Removes the first element from an array and returns it
let arrayShift = myArray2.shift()
//Removes the last element from an array and returns it.
let arrayPop = myArray2.pop()
//Returns the value of the first element in the array where predicate is true
let arrayFindR = myArray4.find((element) => element.name === "sphr")
//Returns the index of the first element in the array where predicate is true
let arrayFind2R = myArray4.findIndex((element) => element.name === "rhmti01")
//Returns the index of the first occurrence of a value in an array
let arrayFindF = myArray5.indexOf(3)
//Returns the index of the last occurrence of a value in an array
let arrayFInd2F = myArray5.lastIndexOf(4)
//Returns the index of the first occurrence of a value in an array
let arrayFind3F = myArray5.indexOf(4, 5)
//Determines whether an array includes a certain element
let arrayIncludes = myArray5.includes(4, 7)
//Arrow function ES6 
let arrayArrowFunction = (user, operating_system) => user + " " + operating_system
//Removes elements from an array
let arrayEmpty = myArray5.splice(0, myArray5.length)
//concat two array
let arrayConcat = myArray.concat(myArray2)
//Returns a copy of a section of an array
let arraySlice = arrayConcat.slice(3, 7)
//spread operator
let arrayCombined = [...myArray, ...myArray2]
//copying an array
let arrayCopy = [...myArray]
//iterating an array
for (const number of myArray) {
    // console.log(number);
}
//iterating an array
let arrayForEach = myArray.forEach((number, index) => {
    // console.log(`${number} = ${index}`);
});
//Adds all the elements of an array into a string, separated by the specified separator string
let arrayJoin = myArray.join("-")
//Split a string into substrings using the specified separator and return them as an array
let arraySplit = myString.split(" ")
//Adds all the elements of an array into a string, separated by the specified separator string
let arrayJoin2 = arraySplit.join(" ")
//Reverses the elements in an array in place
let arrayReverse = myArray.reverse()
//Sorts an array in place
let arraySort = myArray.sort()
// Sorts an array in place
let arraySort2 = myArray6.sort()
//Returns the elements of an array that meet the condition specified in a callback function
let arrayFilter = myArray.filter((value) => value > 3)
//Calls a defined callback function on each element of an array, and returns an array that contains the results
let arrayMap = myArray.map((number, value) => ({
    number,
    value
}))
let sum = 0
//Calls the specified callback function for all the elements in an array
let arrayReduce = myArray.reduce(value => {
    return sum += value
})
// console.log(arrayArowFunction("rhmti01","windows"));
// console.log(myArray);

//Object

let myObject = {
    first_name: "Abolfazl",
    love: "Proramming",
    age: 16,
    location: {
        city: "Tabriz",
        country: "Iran"
    }
}
//creating a factory function as a mother function 
let factoryFunctionObject = function (first_name, last_name) {
    return {
        first_name,
        last_name
    }
}
//creating a constructor function as a mother function
let constructorFunctionObject = function (first_name, last_name) {
    this.first_name = first_name,
        this.last_name = last_name
}
//emurating in object by For In
for (const element in myObject) {
    // console.log(element , myObject[element]);
}
if ("love" in myObject) console.log();
//cloning an object
let objectClone = Object.assign({}, myObject)
//PI number in js 
let objectPINumber = Math.PI
//powering number in js
let objectPow = Math.pow(4, 5)
//radical number in js
let objectRadical = Math.sqrt(4)
//absolute value in js
let objectAbsoluteValue = Math.abs(-444)
//round number in js
let objectRound = Math.round(3434234.23424)
//round to up in js
let objectRoundUP = Math.ceil(4.1)
//round to down in js
let objectRoundDOWN = Math.floor(4.7)
//sin in js
let objectSin = Math.sin(90 * Math.PI / 180);
//cos in js
Math.cos(0 * Math.PI / 180);
//max number in js
let objectMaxNumber = Math.max(0, 300, 35, 2, -8, -100)
//min number in js
let objectMinNumber = Math.min(0, 300, 35, 2, -8, -100)
//random number in js
let objectRandomNumber = Math.floor(Math.random() * 10) + 1;
//Date Object in js
let now = new Date()
now = new Date(2020, 11, 18, 21, 30);
now = new Date('december 18 2020 22:00');
now = new Date().toLocaleString();
now = now.toString();
// objectFunction = new constructorFunctionObject("milad", "nouri")
// let objectFunction = factoryFunctionObject("sphr", "bakhtarae")
// console.log(objectRandomNumber);

//Function

//Function Declarations
function myFunction1() {
    console.log("from myFunction1");
}
// Annonymous Functions Expressions
let myFunction2 = function () {
    console.log("fom myFunction2");
}

let functionDeclarations1 = function (age = 0, language = 0) {
    return age + language
}
let functionDeclarations2 = function (age = 3) {
    // console.log("my age is " + age); 
}
//Function Expression (IIFE)
(function (name, age) {
    // console.log( name +" ages' is  = " + age );
}(" mamareza", 4))
//Arguments in Function
function functionArguments1(firstName, lastName) {
    return firstName + " " + lastName;
}

function functionArguments2() {
    let totalOfArguments = 0;
    for (const args of arguments) {
        totalOfArguments += args
    }
    return totalOfArguments;
}

function functionArguments3() {
    let totalOfArguments2 = "";
    for (const args2 of arguments) {
        totalOfArguments2 += " " + args2
    }
    return totalOfArguments2;
}
//Rest operators in Function
function restOperators(...args) {
    return args.reduce((a, b) => a + b)
}
//Default Parameters in Function 
function functionDefault(b, a = 3, c = 5) {
    return a + b + c;
}
//Getter and Setter in Function
let functionGetterSetter = {
    firstName: "abolfazl",
    lastName: "rahmati",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        if (typeof value !== "string") {
            // throw new Error("Please inter a new valid string!")
        }
        let full = value.split(" ")
        if (value.length === 1) {
            // throw new Error("Please enter first name and last name correctly")
        }
        this.firstName = full[0],
            this.lastName = full[1]
    }
}
try {
    functionGetterSetter.fullName = " "
} catch (error) {
    alert(error)
}
//This in Javascript    method --> obj    function --> window , global
let thisObject = {
    title: "this in javascript",
    tags: [1, 2, 3, 4, 5],
    body() {
        // console.log(this);
    }
}
thisObject.body()
let thisFunction = function () {
    console.log(this);
}
// thisFunction()
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
let Conditional = (number > 1000) ? "Gold" : "Silver";
// Logical Operators in Javascript
//  &&    ||    ! 

// Loops & Conditional

// If & else 
let hour = 33;
if (hour >= 6 && hour <= 11) console.log("Good Morning");
else if (hour > 11 && hour <= 15) console.log("Good noon");
else if (hour > 15 && hour <= 20) console.log("Good evening");
else if (hour > 20 && hour <= 24) console.log("Good Night");
else if (hour >= 1 && hour < 6) console.log("Good Mid Night");
// else console.log("not in range");
//Switch
const programming_language = "JS"
switch (programming_language) {
    case "Javascript":
        console.log("my Programming language is Javascript");
        break;
    case "Python":
        console.log("my Programming language is Python");
        break;
    case "Solidity":
        console.log("my Programming language is Solidity");
        break;
        // default:console.log("Not interested to be a _PROGRAMMER_ ");
        break;
}
//For loop
for (let x = 0; x <= 10; x++) {
    // console.log(x);
}
let y = 5;
for (;;) {
    if (y > 10) break;
    // console.log(y);
    y++;
}
let r = 0
for (;;) {
    if (r == "15") {
        break;
    }
    // console.log(r);
    r++;
}
//While l   
x = 0;
while (x <= 10) {
    if (x % 2 == 0) {
        // console.log(x);
    }
    x += 4;
}
let timeByYear = new Date().getFullYear()
while (timeByYear == 2022) {
    // console.log("we are in 2022 NOW");
    break;
}
//Do...While
y = 1256398;
do {
    if (y % 2 == 0) {
        // console.log(y);
    }
    y++;
} while (y <= 10);
let p = 0
do {
    if (p % 3 == 0) {
        // console.log("ok");
    }
} while (p == 10);
//For In  for object (ES Standard)
let objectForin = {
    a: 1,
    b: 2,
    c: 3
}
for (const alphabet in objectForin) {
    // console.log(`${alphabet} : ${objectForin[alphabet]}`);
}
//For Of   for array  (ES Standard)
let arrayForOf = [1, 2, 3, 4, 5, 6]
for (const element of arrayForOf) {
    // console.log(element);
}
//For Each
let favoriteFruits = ['bannana', 'apple', 'orange', 'kiwi', 'strawbery'];
favoriteFruits.forEach(function (element, index) {
    // console.log(`${index}: ${element}`)
});
//Map
let person = [{
        name: 'mamareza',
        fName: 'maghsoodi'
    },
    {
        name: 'akbar',
        fName: 'ahmadi'
    },
    {
        name: 'hamid',
        fName: 'alinia'
    },
    {
        name: 'amir',
        fName: 'ashrafi'
    }
]

person.forEach(function (element, index) {
    // console.log(index , element)
});

person.map(function (element, index) {
    // console.log(index, element)
})

//BOM
//shows height of browser
let bomHeight = window.innerHeight
//shows width of browser 
let bomWidth = window.innerWidth
//shows information of browser
let bomLocation = window.location
//interface returns the number of pixels that the document is currently scrolled vertically
let bomScrollX = window.scrollX
//interface returns the number of pixels that the document is currently scrolled horizontally
let bomScrollY = window.scrollY
// reference to the parent of the current window or subframe 
let bomParent = window.parent
// returns the horizontal distance, in CSS pixels to the left side of the screen
let bomScreenX = window.screenX
// returns the vertical distance, in CSS pixels to the top edge of the screen.
let bomScreenY = window.screenY
//resizes browser width and height 
// Window.resizeTo(777,777)
//sets horizontal and vertical Coordinates
// window.scrollTo({
//     top: 100,
//     left: 100,
//     behavior: 'smooth'
//   });
//open a new window
let windowObjectReference;

function openRequestedPopup() {
    windowObjectReference = window.open(
        "https://www.rhmti01.ir/",
        "DescriptiveWindowName",
        "left=240,top=130,width=1400,height=720"
    );
}
// window.close() 
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
const logo = document.getElementById("logo")
const heading = document.getElementById("heading")
const shoppingCart = document.getElementById("shopping-cart")
const headingInner = heading.innerHTML
// heading.classList = "headingClass"
// heading.style.backgroundColor = "black"
// heading.style.fontSize = "80px"
// heading.style.color = "white"
// heading.style.borderRadius = "20px"
//Select Element by getElement by Class Name
const cards = document.getElementsByClassName("card")
const infoCard = document.getElementsByClassName("info-card")
const row = document.getElementsByClassName("row")
//Select Element by getElement by Tag Name
const h1 = document.getElementsByTagName("h1")
const div = document.getElementsByTagName("div")
const img = document.getElementsByTagName("img")
//Select Element by getElement by query selector
const headingQuery = document.querySelector("#heading")
const cardQuery = document.querySelector(".card")
const h1Query = document.querySelector("h1")
//select Element by getElement by query selector All
const cardsQuery = document.querySelectorAll(".card")
const infoCardQuery = document.querySelectorAll(".info-card")
const rowQuery = document.querySelector(".row")
//difference between getElements  and  querySelectorAll
const six = document.getElementsByClassName("six") // Html Collection
const link = document.getElementsByClassName("link") // Html Collection
//       six.forEach(element => {
//        console.log(element);
//    });
// console.log(six);

const sixQ = document.querySelectorAll(".six") // NodeList
const linkQ = document.querySelectorAll(".link") // NodeList
// sixQ.forEach(element => {
// element.remove() 
// }); 
// console.log(linkQ);
let links = document.querySelectorAll("#primary > .link ")
let rowAll = document.querySelectorAll("#courses-list > .row")



//Traversing from Parent to children 
let primary = document.querySelector("#primary")
let primaryChildNodes = document.querySelector("#primary").childNodes
let primaryChildren = document.querySelector("#primary").children
// console.log(primaryChildren);
let secondary = document.querySelector("#secondary")
let secondaryChildNodes = document.querySelector("#secondary").childNodes
let secondaryChildren = document.querySelector("#secondary").children
// console.log(secondaryChildren);
let footer = document.querySelector("#footer").children
let header = document.querySelector("#header").children
let price = document.querySelector(".price").children[0]
let cardChildren = document.querySelector(".card").children[1].children[2].src
// console.log(cardChildren);  
let textNodeChild = document.querySelector("#header").firstChild
// console.log(textNodeChild);
let th = document.querySelector("#header").firstElementChild.firstElementChild.children[1]
th = th.firstElementChild.firstElementChild.children[1].firstElementChild.firstElementChild.firstElementChild.children[2]
// console.log(th);
let input = document.querySelector("#hero").firstElementChild.firstElementChild.firstElementChild
input = input.firstElementChild.children[2].firstElementChild.setAttribute("placeholder", "چی میخای یادبگیری ؟!")
let paragraph = document.querySelector("#courses-list").children[1].firstElementChild.firstElementChild
paragraph = paragraph.children[1].children[1].innerHTML = "محمدرضا حاجی مقصودی !!"
// console.log(paragraph);

// Traversing from children to Parent 
let coursesList = document.querySelector(".price").parentElement.parentElement.parentElement
coursesList = coursesList.parentElement.parentElement
// console.log(coursesList);             
let coursesListNode = document.querySelector(".card").parentNode.parentNode.parentNode
// console.log(coursesListNode);

// Next Element Sibling 
let aLink = document.querySelector("h4").nextElementSibling.nextElementSibling.nextElementSibling
aLink = aLink.nextElementSibling
// console.log(aLink)

// Previous Element Sibling 
let h4 = document.querySelector(".add-to-cart").previousElementSibling.previousElementSibling
h4 = h4.previousElementSibling.previousElementSibling
// console.log(h4); 
let tr = document.querySelector("th").parentElement.firstElementChild.nextElementSibling
tr = tr.nextElementSibling.nextElementSibling.previousElementSibling.parentElement
// console.log(tr);

// Create a new element by Javascript 
let newLink1 = document.createElement("a")
// newLink.classList = "link"
newLink1.setAttribute("class", "link")
// newLink.id = "link"
newLink1.setAttribute("id", "link1")
// newLink.innerHTML = "لینک جدید 1"
// newLink1.textContent = "لینک جدید 1"
newLink1.appendChild(document.createTextNode("لینک جدید 1"))
let primaryLinkLists = document.querySelector("#primary")
primaryLinkLists.appendChild(newLink1)
// console.log(newLink1);
let newLink2 = document.createElement("a")
newLink2.classList = "link"
newLink2.id = "link2"
newLink2.appendChild(document.createTextNode("لینک جدید 2"))
let secondaryLinkLists = document.querySelector("#secondary")
secondaryLinkLists.appendChild(newLink2)
// console.log(newLink2);

//Remove Element by Javascript
let coursesListJs = document.querySelectorAll("#courses-list > .row ")
// coursesListJs[0].remove()
// coursesListJs[1].remove()
// newLink1.remove()
// newLink2.remove()
// secondary.remove()
// primary.remove() 
// console.log(coursesListJs); 

// Replace Element by Javascript
let h1Replace = document.createElement("h1")
// setting attributes
h1Replace.classList = "heading"
h1Replace.id = "headingReplace"
h1Replace.appendChild(document.createTextNode("جاوااسکریپت "))
// console.log(h1Replace); 

let coursesListReplace = document.querySelector("#courses-list")
// console.log(coursesListReplace);
let headingReplace = document.querySelector(".heading")
// console.log(headingReplace);
// Replacing Elements
coursesListReplace.replaceChild(h1Replace, headingReplace)

let h4Replace = document.createElement("h4")
h4Replace.id = "h4Replace"
h4Replace.classList.add("h4Replace")
h4Replace.appendChild(document.createTextNode("دوره مقدماتی جاوا اسکریپت"))
// console.log(h4Replace); 

let infoCardReplace = document.querySelector(".info-card")
// console.log(infoCardReplace); 
let h4Text = document.querySelector(".info-card").firstElementChild
// console.log(h4Text);
infoCardReplace.replaceChild(h4Replace, h4Text)

// classList
const linkAttr = document.querySelector('.link')
let linkClassList = linkAttr.classList
let LinkClassName = linkAttr.className
// adding classList
linkAttr.classList.add('new-class')
// removing classList
linkAttr.classList.remove('link')
// id
element = linkAttr.id
// adding Id
linkAttr.id = 'link'
// removing Id
linkAttr.id = ' '
// attribute  function
// getAttribute
element = linkAttr.getAttribute('class')
// setAttribute
element = linkAttr.setAttribute('id', 'newId')
// hasAttribute
element = linkAttr.hasAttribute('target')

// Event Listeners

// syntax
let clearCart = document.querySelector("#clear-cart")
clearCart.addEventListener("click", clearCartClick)

function clearCartClick() {
    // console.log("you clicked ClearCart Button !!!"); 
}
// console.log(clearCart);          
document.addEventListener("scroll", scroll)

function scroll() {
    // console.log("you scrolled page , TNX!");  
}

// Event Parameter in EventListener
let mainBar = document.querySelector(".main-bar")
mainBar.addEventListener("click", mainBarClick)

function mainBarClick(event) {
    console.log(event);
    // console.log(event.type);
    // console.log(event.pageX);
    // console.log(event.target);   
    // event.target.outerText = "ok"  
    // console.log(event.target.baseURI);
    // console.log(event.target.localName);  
    // console.log(event.target.nodeName);  
}

// Mouse Events
const clearCartBtn = document.querySelector('#clear-cart')
// click 
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
    console.log(e)
    console.log(`THE EVENT IS: ${e.type}`)
}

// KeyBoard Events
let submitSearchCourse = document.querySelector("#search")
let searchCourse = document.querySelector("#search-course")
// submit for form
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
function PrintEvent2(e) {
    // console.log(`The Event Type is = ${e.type}`);
    // console.log(e); 
}

// Event Bubbling 
let cardFirst = document.querySelector(".card")
let cardSecond = document.querySelector(".info-card")
let cardThird = document.querySelector("#add-to-card")
cardFirst.addEventListener("click", function (e) {
    e.preventDefault()
    // console.log(`you clicked first card`);
})
cardSecond.addEventListener("click", function () {
    // console.log(`you clicked second card`);
})
cardThird.addEventListener("click", function () {
    // console.log(`you clicked third card`);
})
// The Solution is in below

// Propagation (first Solution)
const cardCard = document.querySelector('.card')
const infoCardCard = document.querySelector('.info-card')
const addToCartCard = document.querySelector('.add-to-cart')
cardCard.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    // console.log('you Click the card')
})
infoCardCard.addEventListener('click', function (e) {
    // console.log('you Click the infoCard')
    e.stopPropagation()
    e.preventDefault()
})
addToCartCard.addEventListener('click', function (e) {
    // console.log('you Click the addToCart')
    e.stopPropagation()
    e.preventDefault()
})

// Delegation (second solution)
const coursesListDele = document.querySelector('#courses-list');
coursesListDele.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
        console.log(e.target)
    }
})

const footerListsFor = document.querySelector("footer")
footerListsFor.addEventListener("click", function (e) {
    if (e.target.classList.contains("link")) {
        e.preventDefault()
        //    console.log(e.target);
    }
})

// localStorage

// setting in local Storage 
localStorage.setItem("Javascript", "React", "reactNative")
localStorage.setItem("Python", "Django")
localStorage.setItem("PHP", "Laravel")
localStorage.setItem("Dart", "Flutter")
localStorage.setItem("Ruby", "Ruby on Rails")
localStorage.setItem("CSS", "Tailwind")

// getting item in local Storage
localStorage.getItem("Python")
localStorage.getItem("PHP")
localStorage.getItem("Ruby")
localStorage.getItem("CSS")
const JavascriptLS = localStorage.getItem("Javascript")
// console.log(JavascriptLS);
// console.log(localStorage.length);

// removing item in local Storage
localStorage.removeItem("Javascript")
localStorage.removeItem("CSS")
localStorage.removeItem("Python")
localStorage.removeItem("Dart")
localStorage.removeItem("PHP")
// Clearing all in LS
localStorage.clear()

// Adding multiple items in value 
localStorage.setItem("JS", ["React", "Vue", "Angular"]) // Not Advised
localStorage.removeItem("JS")
// better way 
let myArray7 = ["React", "Vue", "Angular", "React Native", "NodeJS", "ExpressJS"]
let myarray7Stringify = JSON.stringify(myArray7)
localStorage.setItem("JavascriptLocalS", myarray7Stringify)
let JavascriptLocalS = localStorage.getItem("JavascriptLocalS")
JavascriptLocalS = JSON.parse(JavascriptLocalS)
// console.log(JavascriptLocalS);
let programming_languages = ["Javascript", "Python", "Solidity", "Swift", "C#", "Java"]
let myArray8 = JSON.stringify(programming_languages)
localStorage.setItem("PLLS", myArray8)
let PLLS = localStorage.getItem("PLLS")
PLLS = JSON.parse(PLLS)
localStorage.removeItem("JavascriptLocalS")
localStorage.removeItem("PLLS")

let sampleObject = {
    name: "abolfazl",
    favorite: "javascript"
}

localStorage.setItem("test", JSON.stringify(sampleObject))

// console.log(PLLS); 


// OOP 

//Object literals
let programmer = {
    name: "abolfazl",
    age: 17,
    level: 9.5,
    sath() {
        if (this.level < 5) {
            return "Junior"
        } else if (this.level > 5 && this.level < 8) {
            return "MidLevel"
        } else if (this.level > 8) {
            return "Senior"
        }
    }
}
// console.log(programmer.name);
// console.log(programmer.age);
// console.log(programmer.sath());

// Object Constructor
let Constructor1 = function (name, age, level) {
    // levelCheck : function() {
    this.name = name,
        this.age = age,
        this.level = level,
        this.sath = function () {
            if (this.level < 5) {
                return "Junior"
            } else if (this.level > 5 && this.level < 8) {
                return "MidLevel"
            } else if (this.level > 8) {
                return "Senior"
            }
        }
}
let constructorP1 = new Constructor1("abolfazl", 17, 3.6)
// console.log(constructorP1);
// console.log(constructorP1.sath());
// console.log(constructorP1.age);

let Constructor2 = function (name, balance, job) {
    this.name = name,
        this.balance = balance,
        this.job = job
}
Constructor2.prototype.nameCharacter = function () {
    if (this.name.length > 10) {
        return "THIS NAME IS LONG"
    } else if (this.name.length < 10) {
        return "THIS NAME IS SHORT"
    }
}
let constructorP11 = new Constructor2("john", 100000, "programmer")
let constructorP22 = new Constructor2("alex", 90000, "lawyer")
// console.log(constructorP21);
// console.log(constructorP22);
// console.log(constructorP2);
// console.log(constructorP2.nameCharacter());

// pre-set Object Consctructors 
// string
const string1 = 'danial' // string
const string2 = new String('danial') // object
// console.log(string1); 
// console.log(string2); 
// console.log(string1 == string2);

// number 
const numberConstructor1 = 21; // number
const numberConstructor2 = new Number(21) // object
// console.log(numberConstructor1); 
// console.log(numberConstructor2); 
// console.log(numberConstructor1 == numberConstructor2);

// array
const array1 = [1, 2, 3, 4, 5]; // object 
const array2 = new Array(1, 2, 3, 4, 5) // obejct  

// function
const function1 = function (a, b) {
    return a + b
}
// function
const function2 = new Function('a', 'b', 'return a + b') // function

// Prototype
Constructor2.prototype.info = function () {
    return `name : ${this.name} , balance : ${this.balance} , job : ${this.job} `
}
// console.log(constructorP22.info());
// console.log(constructorP22.balance);
let constructorP33 = new Constructor2("alice", 100000, "student");
// console.log(constructorP33.info());
Constructor2.prototype.withdraw = function (amount) {
    return this.balance -= amount
}
Constructor2.prototype.deposit = function (amount) {
    return this.balance += amount
}
constructorP33.deposit(3000)
constructorP33.deposit(1000)
// console.log(constructorP33);

// second prototype example
let Constructor3 = function (student, lesson, age, average) {
    this.student = student,
        this.lesson = lesson,
        this.age = age,
        this.average = average,
        this.result = function () {
            if (this.average > 17) {
                return "Smart Student"
            }
        }
}
Constructor3.prototype.info = function () {
    return `name : ${this.student} , lesson : ${this.lesson} , age : ${this.age} , average : ${this.average} , result : ${this.result()} `
}
let constructorP44 = new Constructor3("abolfazl", "math", 17, 18)
Constructor3.prototype.Erfag = function (megdar) {
    this.average += megdar
};
constructorP44.Erfag(2);
Constructor3.prototype.KasrNomre = function (megdar) {
    this.average -= megdar
};
constructorP44.KasrNomre(1);
// console.log(constructorP44.info());    

// Inheriting

let Constructor4 = function (student, lesson, age, average, phone) {
    Constructor3.call(this, student, lesson, age, average)
    this.phone = phone
}

Constructor4.prototype = Object.create(Constructor3.prototype)

Constructor4.prototype.constructor = Constructor4

let constructorP55 = new Constructor4("hossein", "history", 17, 19, 0914)
// console.log(constructorP55);

// Class Base (ES6)
// ( same for constructor 3 In Class Base ) 
class Constructor5 {
    constructor(student, lesson, age, average) {
        this.student = student,
            this.lesson = lesson,
            this.age = age,
            this.average = average,
            this.result = function () {
                if (this.average > 17) {
                    return "Smart Student"
                }
            }
    }
    info() {
        return `name : ${this.student} , lesson : ${this.lesson} , age : ${this.age} , average : ${this.average} , result : ${this.result()} `
    }
    Erfag(megdar) {
        this.average += megdar
    };
    KasrNomre(megdar) {
        this.average -= megdar
    };
}
let constructorP66 = new Constructor5("abolfazl", "math", 17, 18)
constructorP44.Erfag(2);
constructorP44.KasrNomre(1);
// console.log(constructorP66);
// next class example
class Constructor6 extends Constructor3 {
    constructor(student, lesson, age, average, phone, weight) {
        super(student, lesson, age, average)
        this.phone = phone,
            this.weight = weight
    }
    getClientInfo() {
        return ` student : ${this.student} , lesson : ${this.lesson} , age : ${this.age} , average : ${this.average} , phone : ${this.phone} , weight : ${this.weight}  `
    }
}
let constructorP77 = new Constructor6("rhmti02", "math", 17, 19, 09143333333, 70)
// console.log(constructorP77);
// console.log(constructorP77.result());
constructorP77.Erfag(6);
constructorP77.KasrNomre(2);
// console.log(constructorP77.average);


// Ajax

// first step 
let lgMegajs = document.querySelector("#logo")
let h2 = document.querySelector("#h2")
let ptg = document.querySelector("#p")

lgMegajs.addEventListener("click", function (e) {
    e.preventDefault()
    // second step
    let xhr = new XMLHttpRequest()

    // third step
    xhr.open("GET", "sample.txt", true)

    // fourth step
    xhr.onload = function () {
        if (this.status === 200 || this.readyState === 4) {
            h2.innerHTML = `${this.responseText}`
            ptg.innerHTML = `${this.responseText}`
            console.log(this.status);
            console.log(this.readyState);
        }
    }

    // fifth step
    xhr.send()

})