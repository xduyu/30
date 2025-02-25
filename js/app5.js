

// let student = {
//     name: 'name',
//     age: 20,
//     level: 'middle'
// }

// let prog = {
//     jun: 'osnovi',
//     mid: 'OOP, DOM',
//     sen: "Node.js, React"
// }

// Object.setPrototypeOf(student, prog)


// const animal = {
//     name: "name",
//     speak() { console.log(`${this.name} Выдаёт звук`) }
// }

// animal.speak()

// const dog = Object.create(animal)
// console.log(dog)
// dog.speak()
// console.log(dog)

// dog.name = "Собака"

// console.log(dog.name)
// dog.speak()
// console.log(dog)


// dog.bark = function () {
//     console.log(this.name)
// }

// dog.speak()
// dog.bark()

// function Person(userName, userAge) {
//     this.name = userName;
//     this.age = userAge;
// }

// Person.prototype.greet = function () {
//     console.log(`hello! ${this.name}`)
// }

// const andrew = new Person("Andrew", 32)

// andrew.greet()


// function Car(Color, AutoLogo) {
//     this.carColor = Color;
//     this.autoLogo = AutoLogo;
// }

// Car.prototype.drive = function () {
//     console.log(`${this.autoLogo} drive`)
// }

// Car.prototype.stop = function () {
//     console.log(`${this.autoLogo} stop`)
// }

// const myCar = new Car("Toyota", "Black")

// myCar.drive()
// myCar.stop()


// String.prototype.capitalize = function () {
//     return this.charAt(0).toUpperCase() + this.slice(1)
// }

// const nameUser = "anna"

// console.log(nameUser.capitalize())


class Car {
    constructor(nameModel, nameColor) {
        this.model = nameModel;
        this.color = nameColor;
    }
    print() {
        console.log(`${this.model} edet`)
    }
}

const car1 = new Car("Toyota", "black")
console.log(car1)
car1.print()