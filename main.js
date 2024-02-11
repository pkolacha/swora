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
        document.getElementById('seniorzy').style.display="block";
        document.getElementById('js').style.display="none";
        document.getElementById('jm').style.display="none";
        document.getElementById('trampkarz').style.display="none";
        document.getElementById('mlodzik').style.display="none";
    }

    if(value=="b"){
        document.getElementById('seniorzy').style.display="none";
        document.getElementById('js').style.display="block";
        document.getElementById('jm').style.display="none";
        document.getElementById('trampkarz').style.display="none";
        document.getElementById('mlodzik').style.display="none";
    }

    if(value=="c"){
        document.getElementById('seniorzy').style.display="none";
        document.getElementById('js').style.display="none";
        document.getElementById('jm').style.display="block";
        document.getElementById('trampkarz').style.display="none";
        document.getElementById('mlodzik').style.display="none";
    }

    if(value=="d"){
        document.getElementById('seniorzy').style.display="none";
        document.getElementById('js').style.display="none";
        document.getElementById('jm').style.display="none";
        document.getElementById('trampkarz').style.display="block";
        document.getElementById('mlodzik').style.display="none";
    }

    if(value=="e"){
        document.getElementById('seniorzy').style.display="none";
        document.getElementById('js').style.display="none";
        document.getElementById('jm').style.display="none";
        document.getElementById('trampkarz').style.display="none";
        document.getElementById('mlodzik').style.display="block";
    }
}