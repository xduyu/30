// // 1

// console.log("hello world")

// // 2

// let str = 'str'

// alert(str)


// // 3

// let inputData = prompt('Ваши баллы')
// let score = Number(inputData)

// mark.textContent = ''

// if(score >= 0 && score <= 59){
//     alert('F')
// } else if(score >= 60 && score <= 69){
//     alert('C')
// } else if(score >= 70 && score <= 79){
//     alert('B')
// } else if(score >= 80 && score <= 100){
//     alert('A')
// } else {
//     alert("Ошибка")
// }

// // 4

// let n = prompt("n:")
// n = Number(n)

// for (let index = 0; index < n; index++) {
//     if(index % 2 === 0){
//         console.log(index)
//     }
// }

// 5.1

// function nepridumal(el) {
//     return el.map(element => element * 2)
// }

// let number = [1, 2, 3, 4, 5]
// console.log(nepridumal(number))

// 5.2

// function nepridumal(el) {
//     return el.filter(element => element % 2 === 0)
// }

// let number = [1, 2, 3, 4, 5]
// console.log(nepridumal(number))

// 5.3

// function sumArray(array) {
//     return array.reduce((sum, element) => sum + element, 0)
// }

// let number = [1, 2, 3, 4, 5]
// console.log(sumArray(number))

// 6

// let pet = {
//     petName: "Oleg",
//     age: 51,
//     type: "Собака" 
// }

// console.log(`name ${pet.petName}`)
// console.log(`age ${pet.age}`)
// console.log(`type ${pet.type}`)

// 7

// function countVowels(el) {
//     const vowels = "aeiouыяию"
//     let count = 0;

//     for (let i of el.toLowerCase()) {
//         if(vowels.includes(i)){
//             count ++
//         }
//     }
//     return count
// }

// let inputData = prompt("Введите строку:");
// alert(`количество гласных: ${countVowels(inputData)}`)

// 8

// const inputDataTask = document.getElementById('inputDataTask')
// const addTask = document.getElementById('addTask')
// const dataList = document.getElementById('dataList')
// addTask.addEventListener('click', () => {
//     const task = inputDataTask.value.trim()
    
//     const li = document.createElement('li')
//     li.textContent = task
//     li.addEventListener('click', () => {
//         dataList.removeChild(li)
//     })
//     dataList.appendChild(li)
//     addTask.value = ''
// })

// 9

// problema 1
// const myDiv = document.getElementById("myDiv")
// const changeColorBtn = document.getElementById('changeColorBtn')

// changeColorBtn.addEventListener('click', () => {
//     const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
//     myDiv.style.backgroundColor = `${randomColor}`
// })


// 10

// const imgArray = ['https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery', 'https://media1.thrillophilia.com/filestore/l9fcy3sj95mwp23zvk13hdefpx0o_49090236931_e27408bbcc_o.jpg', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1']
// let currentIndex = 0

// document.getElementById('nextBtn').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % imgArray.length;
//     document.getElementById('sliderImg').src = imgArray[currentIndex]
// })
// document.getElementById('prevBtn').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
//     document.getElementById('sliderImg').src = imgArray[currentIndex]
// })

// 11


const timerRes = document.getElementById('timerRes')
const startTimer = document.getElementById('startTimer')

let timerValue = 60
let timer



function startTimerFunction() { if(timer) return
    timer = setInterval(() => {
        timerValue--;
        timerRes.textContent = timerValue
        if(timerValue <= 0){
            clearInterval(timer)
        }
    }, 1000)
}



// 12

// let valueNow = 0;

// const dataValue = document.getElementById('dataValue')
// const addBtn = document.getElementById('add')
// const removeBtn = document.getElementById('remove')
// const deleteBtn = document.getElementById('delete')

// addBtn.addEventListener('click', () => {
//     valueNow++
//     dataValue.textContent = valueNow

// })
// removeBtn.addEventListener('click', () => {
//     valueNow--;
//     dataValue.textContent = valueNow
// })
// deleteBtn.addEventListener('click', () => {
//     dataValue.textContent = 0
// })


