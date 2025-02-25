const predictions = [
    { id: 1, text: "Вы начнёте изучать новый язык и это откроет новые горизонты." },
    { id: 2, text: "Вы обнаружите скрытый талант, который порадует вас." },
    { id: 3, text: "У вас появится возможность путешествовать и расширить свои горизонты." },
    { id: 4, text: "Вы примете важное решение, которое изменит вашу жизнь." },
    { id: 5, text: "Вы встретите человека, который станет вам хорошим другом." },
    { id: 6, text: "Ваша креативность возрастет, что поможет в работе." },
    { id: 7, text: "Вы получите новую информацию, которая повлияет на ваше мнение." },
    { id: 8, text: "На вас ждёт приятный сюрприз от родных." },
    { id: 9, text: "Вы научитесь управлять своими эмоциями." },
    { id: 10, text: "Вы встретите старого друга, который напомнит о добрых временах." },
    { id: 11, text: "Вы обрете гармонию в личной жизни." },
    { id: 12, text: "Вы найдете время для любимого занятия, что улучшит настроение." },
    { id: 13, text: "Ваша работа принесет признание и уважение." },
    { id: 14, text: "Вы примете участие в интересном проекте, который вас вдохновит." },
    { id: 15, text: "У вас появится шанс на карьерный рост." },
    { id: 16, text: "Вы начнете заботиться о своем здоровье и самочувствии." },
    { id: 17, text: "Вы научитесь отпускать прошлое и смотреть в будущее." },
    { id: 18, text: "На горизонте появится возможность для финансового успеха." },
    { id: 19, text: "Вам предложат сотрудничество, которое окажется выгодным." },
    { id: 20, text: "Вы откроете для себя новые литературные произведения, которые вдохновят." }
];

const preditionRes = document.getElementById('predition__res')
const preditionBtn = document.getElementById('predition__btn')

let currentIndex = 0;
let isClick = false;

let predictionInterval;


// function for display predictions with interval

function showPredInterval(el) {
    predictionInterval = setInterval(() => {
        if(currentIndex >= predictions.length){
            currentIndex = 0
        }
        preditionRes.textContent = predictions[currentIndex].text;
        preditionRes.style.opacity = 0.3
        currentIndex++ 
    }, 100)
}

preditionBtn.addEventListener('click', (event) => {
    if(!isClick){
        clearInterval(predictionInterval)
        preditionRes.textContent = predictions[currentIndex].text
        preditionRes.style.opacity = 1
    }else{
        showPredInterval();
    }
    isClick = !isClick
})

showPredInterval()