const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const handleNav = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    barsIco.classList.toggle('hide')
    xIco.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)


function showMe(value){
    if(value=="a"){
        document.getElementById('x').style.display="block";
        document.getElementById('y').style.display="none";
    }

    if(value=="b"){
        document.getElementById('x').style.display="none";
        document.getElementById('y').style.display="block";
    }
}