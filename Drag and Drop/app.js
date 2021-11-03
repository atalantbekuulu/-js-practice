const item = document.querySelector('.item')
const placeholder = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragStart)
item.addEventListener('dragend',Dragend)

for( const element of placeholder){
    element.addEventListener('dragover',dragover)
    element.addEventListener('dragenter',dragenter)
    element.addEventListener('dragleave',dragleave)
    element.addEventListener('drop',dragdrop)
}

function dragStart(event){
    event.target.classList.add('hold')
    setTimeout(()=>{
    event.target.classList.add('hide')
    },0)
}

function Dragend(event){
    event.target.classList.remove('hold','hide')
    event.target.classList.remove('hovered')
}

function dragover(event){
    event.preventDefault()
}

function dragenter(event){
    event.target.classList.add('hovered')
}


function dragleave(event){
    event.target.classList.remove('hovered')
}

function dragdrop(event){
    event.target.classList.remove('hovered')
    event.target.append(item)
}