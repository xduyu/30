// const person = {
//     nama: 'tom',
//     age: 30,
//     greet: function () {
//         console.log(`Ya ${this.name}, i mne ${this.age}`)
//     },
//     celebrateBirthday: function () {
//         this.age++
//         console.log(`${this.age}`)
//     }
// }



// person.greet()
// person.celebrateBirthday()
// person.greet()


// person.name = 'ya'

// function Person(pName, pAge) {
//     this.name = pName
//     this.age = pAge
//     this.greet = function () {
//         console.log(`Ya ${this.name}, i mne ${this.age}`)
//     }
//     this.celebrateBirthday = function () {
//         this.age++
//         console.log(`${this.name}:${this.age}`)
//     }
// }

// const user1 = new Person('anna', 20)
// console.log(user1)

// user1.greet()
// user1.celebrateBirthday()

// const user2 = new Person(
//     'tom',
//     30
// )

// document.getElementById('testUser').addEventListener('click', () => {
//     user1.celebrateBirthday()
//     user2.celebrateBirthday()
// })


// function Employee(pName, pCompany) {
//     this.name = pName;
//     this.company = pCompany;
//     this.print = function () {
//         console.log(`${this.name}, ${this.company}`)
//     }
// }

// const tom = new Person("tom", 30)
// const bob = new Employee("Bob", 'Google')


// console.log(tom instanceof Employee)
// console.log(tom instanceof Person)

// console.log(bob instanceof Employee)
// console.log(bob instanceof Person)


// const personData = [['name', 'tom'], ['age', 30]]

// const personObject = Object.fromEntries(personData)

// console.log(personObject.name)




// const counter = {
//     value: 0,
//     increment() {
//         this.value++
//     },
//     decrement() {
//         this.value--
//     },
//     getValue() {
//         return this.value
//     }
// }

// console.log(counter.getValue())
// counter.increment()
// console.log(counter.getValue())
// counter.decrement()
// console.log(counter.getValue())

// 1

// function Counter(pValue) {
//     this.value = pValue;
//     this.getValue = function () {
//         return this.value
//     };
//     this.increment = function () {
//         this.value++
//     };
//     this.decrement = function () {
//         this.value--
//     }
// }

// const val1 = new Counter(10)

// console.log(val1.getValue())
// val1.increment()
// console.log(val1.getValue())

// 2


// const library = {
//     books: [],
//     addBook: function (elBook) {
//         this.books.push(elBook)
//     },
//     getBook: function () {
//         return this.books
//     }
// }

// const book1 = {
//     title: 'E',
//     author: 'Author'
// }

// const book2 = {
//     title: 'A',
//     author: 'Author2'
// }
// // library.addBook(book1)
// // console.log(library.getBook())


// function library() {
//     this.books = [];
//     this.addBook = function (elBook) {
//         this.books.push(elBook)
//     }
//     this.getBook = function () {
//         return this.books
//     }
// }

// const libraryAddBook = new library()
// libraryAddBook.addBook(book1)
// console.log(libraryAddBook.getBook())






// 3

// function CreateUser(UserName, Email, UserAge) {
//     this.name = UserName;
//     this.email = Email;
//     this.age = UserAge;


//     this.updateEmail = function (NewEmail) {
//         this.email = NewEmail
//     };

//     this.celebrateBirthday = function () {
//         this.age++
//     }
// }


// const user1 = new CreateUser('Rodion', 'Email@google.com', 13)

// console.log(user1)

// user1.updateEmail('fsdfqw.cle')

// console.log(user1)

// const user2 = new CreateUser('Tom', 'Email@googledfssdf.com', 1324672342342234)

// console.log(user2)

// 4


// function Calculator(read, sum, mul) {
//     this.read = read;
//     this.sum = sum;
//     this.mul = mul;

//     this.sumFunc = function (x, y) {
//         this.sum = x + y
//         console.log(sum)
//     };

//     this.mulFunc = function (mul) {
//         this.mul = x * y
//     };

// }

// let x = prompt('Введите ваше число1');
// let y = prompt('Введите ваше число2')

// const sumEl = new Calculator()
// sumEl.sumFunc(x, y)

// function Calculator(read, sum, mul) {
//     this.read = function () {
//         this.data1 = +prompt('Введите ваше число'), 0;
//         this.data2 = +prompt('Введите ваше число'), 0;
//     }
//     this.sum = function () {
//         console.log(this.data1 + this.data2)
//     }
//     this.mul = function () {
//         console.log(this.data1 * this.data2)
//     }
// }

// const sumEl = new Calculator()
// sumEl.read()
// console.log(sumEl)
// sumEl.mul()



let a = {
    name: 'test',
    age: 30
}


let b = {
    hobby: 'coding',
    __proto__: a
}

console.log(b.hobby)
console.log(b.name)
console.log(b)


let student = {
    name: 'name',
    age: 20,
    level: 'middle'
}

let prog = {
    jun: 'osnovi',
    mid: 'OOP, DOM',
    sen: "Node.js, React"
}

Object.setPrototypeOf(student, prog)


console.log(student.sen)

console.log(student.hasOwnProperty('jun'))


function user(nameUser, ageUser) {
    this.name = nameUser;
    this.age = ageUser;
    this.sayHello = function () {
        console.log(`${this.name}, Hello!`)
    }
    user.prototype.getInfo = function () {
        
    }
}

const user3 = new user('tom', 30)
user3.sayHello()
console.log(user3)

const abc = Object.create(user)
abc.company = "google";

console.log(abc)
console.log(abc.name)

