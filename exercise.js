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
        // console.log(max);

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
        let stringSubstring = love.substring(4, 5)
        //select a part of string
        let stringSlice = love.slice(4, 5)
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
        let arrayFind2R = myArray4.findIndex((element) => element.name === "sphr")
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
        //Removes elements from an array and
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
        let objectClone = Object.assign({},myObject)
        //PI number in js 
        let objectPINumber = Math.PI
        //powering number in js
        let objectPow = Math.pow(4,5)
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
        let objectRandomNumber = Math.floor(Math.random() * 10) +1;
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
        let myFunction2 = function() {
            console.log("fom myFunction2");
        }
        
        let functionDeclarations1 = function(age=0,language=0) {
            return age + language 
        }
        let functionDeclarations2 = function(age = 3) {
            // console.log("my age is " + age); 
        }
        //Function Expression (IIFE)
        (function(name,age){
            // console.log( name +" ages' is  = " + age );
        }(" mamareza",4))    
        //Arguments in Function
        function functionArguments1( firstName, lastName) {
            return firstName + " " +  lastName;
        }
        function functionArguments2() {
            let totalOfArguments = 0;
            for (const args of arguments) {
                totalOfArguments += args 
            }
            return totalOfArguments;
        }
        function  functionArguments3() {
            let totalOfArguments2 = "";
            for (const args2 of arguments) {
                totalOfArguments2 += " " + args2
            }
            return totalOfArguments2;
        } 
        //Rest operators in Function
        function restOperators(...args) {
            return args.reduce((a,b)=> a + b)
        }
        //Default Parameters in Function 
        function functionDefault(b,a=3,c=5) {
            return a + b + c;
        } 
        //Getter and Setter in Function
        let functionGetterSetter = {
            firstName : "abolfazl",
            lastName : "rahmati",
            get fullName(){
                return `${this.firstName} ${this.lastName}`
            },
            set fullName(value){
                if (typeof value !== "string") {
                    // throw new Error("Please inter a new valid string!")
                }
                let full = value.split(" ")
                if (value.length ===1 ) {
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
            title : "this in javascript",
            tags : [1,2,3,4,5],
            body(){
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
          let  Conditional = (number>1000) ? "Gold" : "Silver" ;
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
        for ( ; ; ){
            if (y > 10) break;
            // console.log(y);
            y++;
        }
        let r = 0
        for ( ; ;  ) {
            if ( r=="15" ) {
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
            x+=4;
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
        let p =0
        do {
            if (p % 3 ==0 ) {
                // console.log("ok");
            }
        } while (p==10);
    //For In  for object (ES Standard)
        let objectForin = {a: 1,b: 2,c: 3}
        for (const alphabet in objectForin) {
            // console.log(`${alphabet} : ${objectForin[alphabet]}`);
        }    
    //For Of   for array  (ES Standard)
        let arrayForOf = [1,2,3,4,5,6] 
        for (const element of arrayForOf) {
            // console.log(element);
        }
    //For Each
        let favoriteFruits = ['bannana', 'apple', 'orange', 'kiwi', 'strawbery'];
        favoriteFruits.forEach(function(element , index) {
            // console.log(`${index}: ${element}`)
        });
    //Map
        let person = [
            {name: 'mamareza', fName: 'maghsoodi'},
            {name: 'akbar', fName: 'ahmadi'},
            {name: 'hamid', fName: 'alinia'},
            {name: 'amir', fName: 'ashrafi'}
        ]
        
        person.forEach(function(element, index) {
            // console.log(index , element)
        });
        
        person.map(function(element, index){
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
        );}
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
        
    //Select Element by getElement
        const logo = document.getElementById("logo")
        const heading  =  document.getElementById("heading")
        const headingInner = heading.innerHTML
        heading.classList = "headingClass"
        heading.style.backgroundColor = "black"
        heading.style.fontSize = "80px"
        heading.style.color = "white"
        heading.style.borderRadius = "20px"
        const headingQuery = document.querySelector(".headingClass")
        
        console.log(heading);
        console.log(logo);
        console.log(headingQuery);

        
         