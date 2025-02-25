// class LocalAuthUsers {
//     constructor(userPassword, userName, userEmail, userAge) {
//         this.userpass = userPassword;
//         this.username = userName;
//         this.useremail = userEmail;
//         this.userage = userAge;
//     }
//     func() {
//         this.userage++
//         console.log(`Hi ${this.username}! you: ${this.userage}`)
//     }
//     getInfo() {
//         console.log(`User: ${this.username} - Pass: ${this.userpass} ${this.userpass.length}`)
//     }
//     testForPassError() {
//         if (this.userpass.length < 8) {
//             console.log('Слишком короткий пароль')
//         } else {
//             console.log('Все хорошо!')
//         }
//     }
// }

// const Jhon = new LocalAuthUsers('123', 'jhon', '123@mail.com', 20)
// Jhon.testForPassError()

// console.log('1')
// console.log(Jhon.username, Jhon.userage)
// Jhon.func()
// console.log(Jhon.username, Jhon.userage)
// Jhon.getInfo()




// class Book {
//     constructor(Author, Name, date) {
//         this.bookauthor = Author;
//         this.bookname = Name;
//         this.bookdate = date;
//     }
//     getInfo() {
//         console.log(` | Book Author: ${this.bookauthor} \n | Book Name: ${this.bookname} \n | Book Date: ${this.bookdate}`)
//     }

// }

// const Book1 = new Book('А. С. Пушкин', 'Руслан и Людмила', 1817)


// Book1.getInfo()



// class Rectangle {
//     constructor(Cwidth, Cheigth) {
//         this.width = Cwidth;
//         this.heigth = Cheigth;
//     }

//     getArea() {
//         const area = this.width * this.heigth;
//         console.log(area)
//     }

//     getPerimter() {
//         const per = (2 * (this.width + this.heigth));
//         console.log(per)
//     }
// }

// const rect1 = new Rectangle(10, 10)

// rect1.getArea()
// rect1.getPerimter()

// class BankAccount {
//     constructor(BankAccountNCount, BankAccountName, BankAccountBalance) {
//         this.ncount = BankAccountNCount;
//         this.name = BankAccountName;
//         this.balance = BankAccountBalance;
//     }
//     sendMoney() {
//         const newBalance = this.balance + Number(prompt('Введите сумму:'))
//         if (newBalance <= 0) {
//             console.log('Ошибка, слишком маленькая сумма!')
//             alert('Ошибка, слишком маленькая сумма!')
//             return this.sendMoney()
//         }
//         console.log(newBalance)
//         this.balance = newBalance
//     }

//     takeOff() {
//         const takeoffnewbalance = this.balance - Number(prompt('Введите сумму для снятия:'))
//         if (takeoffnewbalance <= 0) {
//             console.log('Ошибка, слишком маленькая сумма!')
//             alert('Ошибка, слишком маленькая сумма!')
//             return this.sendMoney()
//         }
//         console.log(takeoffnewbalance)
//         this.balance = takeoffnewbalance
//     }

//     infoBalance() {
//         console.log(`
// Count: ${this.ncount}
// Name: ${this.name}
// Balance: ${this.balance}
//             `)
//     }

// }


// const user1 = new BankAccount(100210, 'user', 1000)
// user1.sendMoney()
// user1.infoBalance()
// user1.takeOff()
// user1.infoBalance()


class user {
    constructor(username, userlogin, userpassword) {
        this.name = username;
        this.login = userlogin;
        this.password = userpassword;
    }
    info() {
        console.log(`name: ${this.name}, login: ${this.login}, role: ${this.role}`)
    }
}

class Admin extends user {
    constructor(username, userlogin, userpassword) {
        super(username, userlogin, userpassword)
        this.role = 'Admin';
    }
    info() {
        console.log(`123`)
    }
}

class Student extends user {
    constructor(username, userlogin, userpassword) {
        super(username, userlogin, userpassword)
        this.role = 'Student';
    }
    info() {
        console.log(`${this.name}, Проходит курс`)
    }
}

class Teacher extends user {
    constructor(username, userlogin, userpassword) {
        super(username, userlogin, userpassword)
        this.role = 'Teacher';
    }
    info() {
        console.log(`${this.name}, Проверяет д/з [role: ${this.role}]`)
    }
}

const userA = new Admin('admin1', '123alogin', '123apass')
const userS = new Student('stu1', '123slogin', '123slogin')
const userT = new Teacher('teacher1', '123tlogin', '123tlogin')


userT.info()
userS.info()
console.log(userT)
console.log(userS)
console.log(userA)

