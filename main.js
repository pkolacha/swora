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



const showMe = (v) => {
    let seniorzy = document.getElementById('seniorzy');
    let js = document.getElementById('js');
    let jm = document.getElementById('jm');
    let trampkarz = document.getElementById('trampkarz');
    let mlodzik = document.getElementById('mlodzik');

    (v == "a") ? seniorzy.style.display="block" : seniorzy.style.display="none";
    (v == "b") ? js.style.display="block" : js.style.display="none";
    (v == "c") ? jm.style.display="block" : jm.style.display="none";
    (v == "d") ? trampkarz.style.display="block" : trampkarz.style.display="none";
    (v == "e") ? mlodzik.style.display="block" : mlodzik.style.display="none";
}

document.onscroll = () => {
    if (window.scrollY > 400){
        document.querySelector('.top-btn').classList.add('show');
    }else{
        document.querySelector('.top-btn').classList.remove('show');
    }
} 

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });


  // navbar hide

document.addEventListener('click', (e) => {
    let navbar = document.querySelector("body > nav > ul");
    let navbarbtn = document.querySelector("body > nav > button > i.fas.fa-bars");
    if(navbar.classList.contains('active') && e.target !== navbar && e.target !== navbarbtn){
        document.querySelector("body > nav > button").click();
    }
})