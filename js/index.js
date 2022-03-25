let rangeValue = document.querySelector('.form__range')
let rangeText = document.querySelector('.form__percent-value')
let typeForm = document.querySelector('.form__type')
let typeFormImg = document.querySelector('.form__type-img')
let typeFormHidden = document.querySelector('.form__type-hidden')
let menuBurger = document.querySelector('.menu__burger')
let menuList = document.querySelector('.menu__list-items')
let typeFormText = document.querySelectorAll('.form__type-text')

let events = ['mousemove', 'touchmove']

const changeValue = function(event) {
    for( let i=0; i<event.length; i++) {
        rangeValue.addEventListener(event[i], ()=> {
            rangeText.innerHTML=rangeValue.value
        })
    }
}
changeValue(events)

let formImages = ['img/checkup.svg', 'img/checkdown.svg']
let formAlts = ['checkup', 'checkdown']
let formBackColor = ['#3D4050', 'rgba(255, 255, 255, 0.85)']

const hidden = function(div) {
    div.classList.toggle('hidden')
}
const choiceForm = function() {
    num = 0
    typeFormImg.alt === 'checkup' ? num = 1 : num = 0
    typeFormImg.src = formImages[num]
    typeFormImg.alt = formAlts[num]
    typeForm.style.backgroundColor = formBackColor[num]
    typeForm.style.borderColor = formBackColor[num]
}

const choiceType = function() {
    for(let i=0; i<typeFormText.length; i++) {
        typeFormText[i].addEventListener('click', ()=>{
            typeForm.placeholder=typeFormText[i].innerHTML
            hidden(typeFormHidden)
            choiceForm()
        })
    }
}
choiceType()

const changeTypeForm = function() {
    typeForm.addEventListener('click', ()=> {
        choiceForm()
        hidden(typeFormHidden)
    })
}       
changeTypeForm()

const getMenu = function() {
    menuBurger.addEventListener('click', ()=>{
        hidden(menuList)
        menuList.classList.toggle('absolute')

    })
}
getMenu()



