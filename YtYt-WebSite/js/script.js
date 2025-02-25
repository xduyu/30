const goToTestBtn = document.getElementById('goToTestBtn');
const overlay = document.getElementById('overlay');
const modelGoTest = document.getElementById('model__go-test');
const goTestBtnModel = document.getElementById('go__test-btn__model');
const wrapper = document.getElementById('wrapper');
const wrapperMenu = document.getElementById('wrapper-menu');
const closeBtnWrpMenu = document.getElementById('close__btn-wrp-menu');
const burgerMenu = document.getElementById('burger-menu');


burgerMenu.addEventListener('click', () => {
    wrapper.style.display = 'none'
    wrapperMenu.style.display = 'block'
})

closeBtnWrpMenu.addEventListener('click', () => {
    wrapper.style.display = 'block'
    wrapperMenu.style.display = 'none'
})

goToTestBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'
    modelGoTest.style.display = 'block'
})

overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
    modelGoTest.style.display = 'none'
})

goTestBtnModel.addEventListener('click', () => {
    overlay.style.display = 'none'
    modelGoTest.style.display = 'none'
})


// 1 создать функцию конструктор студент курс фокултет имя фио 
// 2 увлечение курс при вызове элемента
// 3 сделать проверку если курс = 4 то писать вы были на магистратуру 
// прототип + обьект + 



function Student(Name, FamilyName, Course, Faculty) {
    this.name = Name;
    this.surname = FamilyName;
    this.course = Course;
    this.faculty = Faculty;

    this.greet = function () {
        this.course++;
        console.log(`Ваш новый курс: ${this.course}`);
        if (this.course > 4) {
            console.log('Вас перевели на "Магистратуру"')
        }
    };
}

const FirstStudent = new Student('Rodion', 'Sedov', 1, "None")

FirstStudent.greet()
FirstStudent.greet()
FirstStudent.greet()
FirstStudent.greet()


// 1 создать базовый обьект DATA который будет хранить свойство ширины и высоты, создать два класса 1 первый обьект будет находить площадь и периметр, сделать чтоб на основе, каждый метод расчитывал высоту и ширину


const DATA = {
    width: 10,
    height: 5
}

/**
 * function Geometry(width, height) {
    
}

Geometry.prototype.getArea = function () {
    return DATA.width * DATA.height
}
Geometry.prototype.getPerimetr = function () {
    return 2 * (DATA.width + DATA.height)
}

 */

const Geometry = {
    getArea() {
        return DATA.width * DATA.height
    },

    getPerimetr() {
        return 2 * (DATA.width + DATA.height)
    }
}

console.log('area = ')
Geometry.getArea()
console.log('perimetr = ')
Geometry.getPerimetr()



console.log(DATA)
