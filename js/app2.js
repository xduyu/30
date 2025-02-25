const res = document.getElementById('res')
const imgData = document.getElementById('img-data')

res.addEventListener("dragover", (event) => {
    event.preventDefault()
})

imgData.addEventListener("dragstart", (event)=>{
    event.dataTransfer.setData("img", event.target.id)
    event.target.style.opacity = 0;
})
imgData.addEventListener("dragend", (event)=>{
    event.target.style.opacity = 1;
})

res.addEventListener('drop', (event) =>{
    const elId = event.dataTransfer.getData("img")

    const dragEl = document.getElementById(elId)
    if(dragEl){
        res.append()
    }
})