/* eslint-disable */


// export default function() {
	// console.log('Hello world!!!!')

	// debugger
	// var firstName = "Euna" // String
	// var age = 30 // number
	// var isMale = true // boolean
	// var dontKnow = null // unknown value
	// var a // undefined
	// var person = {
	// 	name: 'Filip',
	// 	lastName: 'Jerga'
	// }

	// var person = {
	// 	name: 'Filip',
	// 	lastName: 'Jerga'

	// }

	// var person1 = {
	// 	name: 'John',
	// 	lastName: 'Snow'
	// }

	// console.log(person.name)
	// console.log(person['name'])
	// console.log(person.lastName)
	// console.log(person['lastName'])

	
	// printUserInfo(person)
	// printUserInfo(person1)

	// // functions
	// function printUserInfo(user) {
	// 	debugger
	// 	console.log('Consoling log out person information!')
	// 	console.log('Hello ' + user.name + ' ' + user.lastName)
	// }

	
	// var hours = 23
	// var seconds = hours * 60 * 60
	// console.log(seconds)

	// function transformHoursToSeconds(hours){
	// 	var seconds = hours * 60 * 60
	// 	return seconds
	// }
	// // debugger
	// // var result = transformHoursToSeconds(19)
	// // console.log(result)

	// function printSomething(something) {
	// 	console.log(something)
	// }
	// debugger
	// printSomething(transformHoursToSeconds(10))

	// // Annoymous fuction
	// printSomething((function() {
	// 	console.log('Hello world, Euna!')
	// 	return 'Hello Euna, Good job with coding!'
	// }()))
	// printSomething({a: 1, b: 2})





	// TODO: Create function called "countPersonBirthYear"
	// specify 1 param: personAge
	// in function body resolve person year of birth from passed age
	// return year of birth from fuction
	// call function "countPersonBirthYear" and assign return value to
	// variable called "resolvedYear"
	// console.log resolvedYear

	// function countPersonBirthYear(personAge) {
	// 	var currentYear = 2020
	// 	var birthYear = currentYear - personAge
	// 	return birthYear
	// }

	// var resolvedYear = countPersonBirthYear(31)
	// console.log(resolvedYear)

	// export default function() {

	// 	debugger
	// 	var result = 7 + 5
	// 	var result2 = 7 / 1
	// 	var result3 = 7 % 3
	// 	var result4 = 7 - 5
	// 	var result5 = 7 / 0
	// 	var result6 = 7 * 0

	// 	var b = 9
	// 	var result7 = ++b
	// 	var a = 2
	// 	var result8 = --a
	// 	var result9 = "Euna" + " Cho"
	// 	var result10 = "1" + 2
	// 	var result11 = 2 + "1"
	// 	var result12 = 3 + 3 + "1"
	// 	var result13 = 7 - "2"

	// 	var result14 = "8" / "4"
	// 	var result15 = 2 ** 3

	// 	result13 -= 2
	// 	result15 += 7

	// }


	// export default function() {
	// 	const a = "Filip"
	// 	//a = "poteer"

	// 	let b = "28"
	// 	b =14
	// 	function functionA() {
 //    // "const" is like "var"
 //    // it's like saying var greeting = "Hello from ..."
 //    // There are some differences I will be talking about later in lecture
 //    const greeting = "Hello from FunctionA"
 //    console.log("Hello from FunctionA")

 //    functionB('Ola')
 //    console.log('Execution is almost finished')
 //    const lastMessage = 'Bye Bye'
 //    functionE()
 //    console.log(lastMessage)
 //  }

 //  function functionB(greeting) {
 //    const name = 'Filip'
 //    console.log(greeting + " Filip")
 //    functionC();
 //    console.log('Done done done')
 //  }

 //  function functionC() {
 //    console.log('Not Much to do :(')
 //    const hmm = functionD(7 + 7)
 //    throw Error()
 //    console.log(hmm)
 //  }

 //  function functionD(sum) {
 //    const times2 = sum * 2
 //    console.log(times2)
 //    return times2
 //  }

 //  function functionE() {
 //    console.log('Annoying Here')
 //  }

 //  debugger
 //  functionA()
	// }


export default function() {

	const person = {

		firstName: 'Euna',
		lastName: 'Cho',
		age: 30,
		printUserInfo() {
			//console.log('Hello ' + this.firstName + ' ' + this.lastName)
			console.log(`Hello ${this.firstName} of age: ${this.age}`)
		},
		printSomething(callback) {
			callback()
		},
		helpers: {
			helperVar: "testing variable",
			helperFunc: function() {
				console.log(this.helperVar)
			}
		}
	}

	// var key = 'printUserInfo'
	// var key1 = 'printSomething'
	// //person.printUserInfo()
	// //person['printUserInfo']()
	// //person[key]()
	// //person[key1]('Hello key Test')
	// person[key1](function() {
	// 	console.log('Hellow function key test')
	// })

	// //person.helpers.helperFunc()
	// person['helpers']['helperFunc']()





	// ------------- person class starts from -------------------------
	class Person {
		firstName = ''
		lastName = ''
		age
		helpers = {
			helperVar: "testing variable",
			helperFunc: function() {
				console.log(this.helperVar)
			}
		}

		// constructor(personData) {
		
		// 	const {firstName, lastName, age = 48} = personData

		// 	this.firstName = firstName
		// 	this.lastName = lastName
		// 	this.age = age
		// }	

		constructor(firstName, lastName, age = 0) {
			
			this.firstName = firstName
			this.lastName = lastName
			this.age = age
		}

		printUserInfo() {
			console.log(`Hello ${this.firstName} of age: ${this.age}`)
		}

		printSomething(callback) {
			callback()
		}

		// ------- persist fucntion with Arrow fucntion
		persist(database) {
			
			database.save(() => 
				({
					userName: `${this.firstName} ${this.lastName}`,
					age: this.age
				})
			)

		}
	}
	// -------------   Person class ends here -------------------------

		class Doctor extends Person {
		
		hospital = ''
		school = ''


		// constructor({school, hospital, ...rest}) {
			
		// 	//const personData = {firstName: firstName, lastName: lastName, age: age}
		// 	super(rest)

		// 	this.hospital = hospital
		// 	this.school = school

		// }

		constructor(firstName, lastName, age, hospital, school) {
			
			//const personData = {firstName: firstName, lastName: lastName, age: age}
			super(firstName, lastName, age)

			this.hospital = hospital
			this.school = school

		}

		printUserInfo () {
			super.printUserInfo()
			alert('I am calling printUserInfo FROM DOctor')
		}
	}
	// -------------   Database class starts here -------------------------
	class Database {
		items = []

		save(getDataCallback) {
			const data = getDataCallback()

			this.items.push(data)
		}
	}
	// -------------   Database class ends here -------------------------


	// ----------- Normal function vs Arrow function ------------------
		// function displayGreeting(greeting) {
		// 	return greeting + ' ' + 'Euna'
		// }

		// const displayGreeting2 = greeting => `${greeting} Euna!!`

		// console.log(displayGreeting('normal: Hello'))
		// console.log(displayGreeting2('arrow: Hola'))
	// ----------- Normal function vs Arrow function ------------------
	const db = new Database()
	
	// const doctor = new Doctor({
	// 	firstName: 'Euna', 
	// 	lastName: 'Doc', 
	// 	age: 30, 
	// 	hospital: 'new hospital', 
	// 	school: 'Test school'})

	// Person.prototype.myProtoFunction = function() {
	// 	console.log('I AM PROTO!!!')
	// }

	// Object.prototype.myObjectProto = function () {
	// 	console.log('I AM myObjectProto')
	// }

	//const doctor = new Doctor('Euna', 'Doc', 30,'new hospital','Test school')

	// doctor.printUserInfo();
	// doctor.persist(db)

	//const person1 = new Person({firstName:'Peter', lastName:'Green'})
	//person1.printUserInfo()

	//every instance created using new Person() has a __proto__ property
	// which points to the Person.prototype 
	// ex) person1.__proto__ === Person.prototype

	// __proto__ is the actual object that is used in the looup chanin to
	// resolve methods, etc. prototype is the object that is used to build 
	// __proto__ when you create an object with new:

	// const person2 = new Person({age:22, lastName:'Green', firstName:'Sally'})
	// person2.printUserInfo()

	// person1.persist(db)
	// person2.persist(db)

	//console.log(db.items)

	const personList = [
		{firstName: 'Filip', lastName: 'Jerga'},
		{firstName: 'John', lastName: 'Snow'},
		{firstName: 'Filip', lastName: 'Smith'},
		{firstName: 'Emma', lastName: 'Green'}

	]

	const dog = {
		breed: 'German Shepard',
		age: 5,
		children: 3,
		isAfterInjury: true,
		vacination: {
			vacination1: true,
			vacination2: false
		},
		testFunction1: () => "test value1",
		testFunction2: () => "test value2"
	}

	// const assins only one time
	// let name = "Filip"
	// name = "John"
	// var name = "Filip"
	// let name1 = "Emma"

	//var name = "John"
		// cannot redeclare let variable. but var can be re-declared
	//let name1 = "Victor"
    
    
    // console.log(a)
    // console.log(b)
    // if (dog.age > 3) {
    // 	var a = "something"
    // 	let b = "anything"
    // }
    // console.log(a)
    // console.log(b)
  
  	// debugger
  	// // if dog age is greater than 3, run testFunction, otherwise run testFunction2
  	// //dog.age > 6 ? dog.testFunction1() : dog.testFunction2()
  	// const someVar = dog.age > 6? dog.testFunction1() : dog.testFunction2()
  	// dog.age > 3 && dog.isAfterInjury && dog.testFunction1()

  	// const {breed, isAfterInjury } = dog

  	// const breed = dog.breed
  	// const {breed} = dog
  	// const isAfterInjury = dog.isAfterInjury
  	// const {isAfterInjury} = dog

  	// debugger
	// for (let i = 0; i < personList.length; i++) {
	// 	debugger
	// 	console.log(i)

	// }
	

	// personList.forEach(function(person) {
	// 	console.log(person.firstName)
	// })

	//personList.forEach(person => console.log(person.firstName))


	// const personNameList = personList.map(function(person) {
	// 	debugger
	// 	return person.firstName
	// })

	//const personNameList = personList.map(person => return person.firstName)

	// const filteredNames = personList.filter(function(person){

	// 	return person.firstName === 'Filip'
	// })

	//const filteredNames = personList.filter(person => return person.firstName === 'Filip')

	// Array.prototype.forEach2 = function(callback) {
	// 	for(let i = 0; i < this.length; i++) {
	// 		callback(this[i], i)
	// 	}
	// }
	
	// personList.forEach2(function(person, index) {
	
	// 	console.log(index)
	// 	console.log(person.firstName)
	// })

	// Array.prototype.map2 = function(callback) 
	// {
	// 	let newArray = []
	// 	for(let i = 0; i < this.length; i++) 
	// 	{
	// 		let transformedValue = callback(this[i], i)
			
	// 		newArray.push(transformedValue)
	// 	}

	// 	return newArray
	// }

	// const personNameList = personList.map2(function (person) {
	
	// 	return person.firstName
	// })

	// Array.prototype.filter2 = function(callback) {
	// 	let newArray = []

	// 	for(let i = 0; i < this.length; i++) {
	// 		let canAddToArray = callback(this[i], i)
	// 		debugger
	// 		if (canAddToArray) {
	// 			newArray.push(this[i])
	// 		}
	// 	}
	// 	return newArray
	// }
	// debugger
	// const filteredNames = personList.filter2(function(person) {
	// 	debugger
	// 	return person.firstName === 'Filip'
	// })
	// debugger

	const globalScope = "globalScope"
	function a() {
		const aScope = "aScope"
		console.log(aScope)
		console.log(globalScope)
	

	function b() {
		const bScope = "bScope"
		console.log(aScope)
		console.log(globalScope)
	}

	if (5 > 3) {
		const ifScope = "ifScope"
		console.log(aScope)
		// console.log(bScope)
		console.log(globalScope)
	}

	// console.log(bScope)
	// console.log(ifScope)

	b()
	}
	debugger
	a()
}



























