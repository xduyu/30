const tree = document.querySelector('.tree')
const  toysList = document.querySelectorAll('.toys-list')


tree.addEventListener('dragover', (event) => {
    event.preventDefault()
})