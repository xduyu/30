// static m.

// class MathHelper {
//     static area(x) {
//         return x * x
//     };
//     static cube(x) {
//         return x * x * x
//     }
// }

// console.log(MathHelper.area(12), MathHelper.cube(2))

// class Person {
//     static rAge = 65;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getInfo() {
//         return console.log(`name: ${this.name}, age: ${this.age}`)
//     }
//     static callAge(user) {
//         if (this.rAge > user.age) {
//             return console.log('до пенсии осталось: ' + this.rAge - user.age)
//         } else {
//             return console.log('вы уже на пенсии')
//         }
//     }
// }

// const user1 = new Person('123', 64)
// console.log(user1)

// Person.callAge(user1)

class StringUtils {
    static reverse(str) {
        return str.split("").reverse()
    };
    static isPolindrom(str) {
        return str === this.reverse(str)
    }
}

console.log(StringUtils.isPolindrom("топот"))
console.log(StringUtils.isPolindrom("1"))