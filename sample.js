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
    let Constructor1 = function (name , age , level) {
        // levelCheck : function() {
        this.name = name ,
        this.age = age ,
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
    let constructorP1 = new Constructor1("abolfazl",17,3.6)
    // console.log(constructorP1);
    // console.log(constructorP1.sath());
    // console.log(constructorP1.age);
    
    let Constructor2  = function (name , balance , job) {
        this.name = name ,
        this.balance = balance ,
        this.job = job 
    }
    Constructor2.prototype.nameCharacter = function () {
        if (this.name.length > 10) {
            return "THIS NAME IS LONG"
        }
        else if (this.name.length < 10 ){
            return "THIS NAME IS SHORT"
        }
    }
    let constructorP11= new Constructor2( "john" , 100000 , "programmer")
    let constructorP22 = new Constructor2( "alex" , 90000  , "lawyer")
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
        const array1 = [1,2,3,4,5]; // object 
        const array2 = new Array(1,2,3,4,5) // obejct  

    // function
        const function1 = function(a,b){
            return a + b
        } 
        // function
        const function2 = new Function('a', 'b', 'return a + b') // function
  
// Prototype
     Constructor2.prototype.info = function() {
        return  `name : ${this.name} , balance : ${this.balance} , job : ${this.job} `
    }
    // console.log(constructorP22.info());
    // console.log(constructorP22.balance);
    let constructorP33 = new constructor2("alice", 100000 ,"student") ;
    // console.log(constructorP33.info());
    constructor2.prototype.withdraw = function (amount){
        return this.balance -= amount            
    }
    constructor2.prototype.deposit = function (amount) {
        return this.balance += amount
    }
    constructorP33.deposit(3000)
    constructorP33.deposit(1000) 
    // console.log(constructorP33);

    // second prototype example
    let Constructor3 = function (student , lesson , age , average){
        this.student = student ,
        this.lesson = lesson , 
        this.age = age ,
        this.average = average ,
        this.result = function(){
            if (this.average > 17) {
                return "Smart Student"
            }
        }
    }
    Constructor3.prototype.info = function () {
        return `name : ${this.student} , lesson : ${this.lesson} , age : ${this.age} , average : ${this.average} , result : ${this.result()} ` 
    }
    let constructorP44 = new Constructor3("abolfazl","math",17,18)
    Constructor3.prototype.Erfag = function (megdar){
        this.average += megdar
    };
    constructorP44.Erfag(2);
    Constructor3.prototype.KasrNomre = function (megdar) {
        this.average -= megdar
    };
    constructorP44.KasrNomre(1);
    // console.log(constructorP44.info());  
    