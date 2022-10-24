'use strict';

const mobileHeader = document.querySelector('.mobile_header');
const iconBurger = mobileHeader.querySelector('.icon-burger');

const iconBurgerActive = document.querySelector('.icon-burger');
const mobileMenu = document.querySelector('.menu-burger');
const body = document.querySelector('.body');
const cardImg = document.querySelectorAll('.card-img');


// mobile menu
function closeMenu(){
  mobileMenu.classList.add('menu-burger__down');
  mobileMenu.classList.remove('menu-burger__up');
}

function openMenu(){
  mobileMenu.classList.add('menu-burger__up');
  mobileMenu.classList.remove('menu-burger__down');
}

iconBurger.addEventListener('click', ()=>{
  openMenu();
})

iconBurgerActive.addEventListener('click', ()=>{
  closeMenu();
})

const itemMobileMenu = document.querySelectorAll('.nav-item');

itemMobileMenu.forEach(elem =>{
  elem.addEventListener('click', ()=>{
    closeMenu();
  })
})

document.addEventListener('click', ()=>{
  if(document.querySelector('.menu-burger__up')){
    document.addEventListener('mousedown', (e)=>{
      if(e.target !== mobileMenu){
        closeMenu();
      }
    })
  }
})

//slider 

const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelectorAll('.prev-btn');
const nextBtn = document.querySelectorAll('.next-btn');


const boxToRadioBtnDekstop = document.querySelector('.content-destinations_forms');
const labelRadioDekstop = boxToRadioBtnDekstop.querySelectorAll('.forms__radio-btn');
let offset = 0;

prevBtn.forEach(btn =>{
  btn.addEventListener('click', (event)=>{
    if(offset == 0){
      offset += - 34;
      sliderContainer.style.left = offset + '%';
    } else if (offset == 34){
        
      if(event.target == prevBtn[0] || event.target == prevBtn[1]){
        offset += - 34;
      }
      sliderContainer.style.left = offset + '%';
    } else if (offset == -34){
      
      if(target.prevBtn[2]){
        sliderContainer.style.left = offset + '%';
      } else if (target.nextBtn[1]){
        sliderContainer.style.left = offset + 34 + '%';
      }
    }

    if(offset == 0){
      for(let i = 0; i < labelRadioDekstop.length; i++){
        if(i == 1){
          labelRadioDekstop[i].classList.add('checked-form');
          labelRadioDekstop[i].classList.remove('normal-form');
        } else {
          labelRadioDekstop[i].classList.remove('checked-form');
          labelRadioDekstop[i].classList.add('normal-form');
        }
      }
    } else if (offset == 34) {
      for(let i = 0; i < labelRadioDekstop.length; i++){
        if(i == 0){
          labelRadioDekstop[i].classList.add('checked-form');
          labelRadioDekstop[i].classList.remove('normal-form');
        } else {
          labelRadioDekstop[i].classList.remove('checked-form');
          labelRadioDekstop[i].classList.add('normal-form');
        }
      }
    } else if (offset == -34){
      for(let i = 0; i < labelRadioDekstop.length; i++){
        if(i == 2){
          labelRadioDekstop[i].classList.add('checked-form');
          labelRadioDekstop[i].classList.remove('normal-form');
        } else {
          labelRadioDekstop[i].classList.remove('checked-form');
          labelRadioDekstop[i].classList.add('normal-form');
        }
      }
    }   
    
  })
})

nextBtn.forEach(btn =>{
  btn.addEventListener('click', (event)=>{
    if(offset == 0){
      offset += 34;
      sliderContainer.style.left = offset + '%';
    } else if (offset == 34){
      if(event.target == nextBtn[0]){
        offset = 34;
        sliderContainer.style.left = offset + '%';
      } 
    } else if (offset == -34){
      if(event.target == nextBtn[1] || event.target == nextBtn[2]){
        offset += 34;
      }
      sliderContainer.style.left = offset + '%';
    }

    if(offset == 0){
      for(let i = 0; i < labelRadioDekstop.length; i++){
        if(i == 1){
          labelRadioDekstop[i].classList.add('checked-form');
          labelRadioDekstop[i].classList.remove('normal-form');
        } else {
          labelRadioDekstop[i].classList.remove('checked-form');
          labelRadioDekstop[i].classList.add('normal-form');
        }
      }
    } else if (offset == 34) {
      for(let i = 0; i < labelRadioDekstop.length; i++){
        if(i == 0){
          labelRadioDekstop[i].classList.add('checked-form');
          labelRadioDekstop[i].classList.remove('normal-form');
        } else {
          labelRadioDekstop[i].classList.remove('checked-form');
          labelRadioDekstop[i].classList.add('normal-form');
        }
      }
    } else if (offset == -34){
      for(let i = 0; i < labelRadioDekstop.length; i++){
        if(i == 2){
          labelRadioDekstop[i].classList.add('checked-form');
          labelRadioDekstop[i].classList.remove('normal-form');
        } else {
          labelRadioDekstop[i].classList.remove('checked-form');
          labelRadioDekstop[i].classList.add('normal-form');
        }
      }
    }   
  })
})

// mobile slider 

const btnMob = document.querySelectorAll('.slide-card-img_btn');


let step = 0;

btnMob[0].addEventListener('click', (e)=>{
  if(step == 0){
    step = -750;
  } else {
    step = step + 375;
  }
  sliderContainer.style.left = step + 'px';
  if(step == 0){
    activeRadioBtn1();
  } else if(step == -375) {
    activeRadioBtn2();
  } else if(step == -750) {
    activeRadioBtn3();
  }
    
})

btnMob[1].addEventListener('click', (e)=>{
  if(step == -750){
    step = 0;
  } else {
    step = step - 375;
  }
  sliderContainer.style.left = step + 'px';
  if(step == 0){
    activeRadioBtn1();
  } else if(step == -375) {
    activeRadioBtn2();
  } else if(step == -750) {
    activeRadioBtn3();
  }
})

const labelRadio = document.querySelectorAll('.forms__radio-btn');

function activeRadioBtn1(){
  labelRadio[0].classList.add('checked-form');
  labelRadio[0].classList.remove('normal-form');
  labelRadio[1].classList.add('normal-form');
  labelRadio[1].classList.remove('checked-form');
  labelRadio[2].classList.add('normal-form');
  labelRadio[2].classList.remove('checked-form');
}

function activeRadioBtn2(){
  labelRadio[1].classList.add('checked-form');
  labelRadio[1].classList.remove('normal-form');
  labelRadio[0].classList.add('normal-form');
  labelRadio[0].classList.remove('checked-form');
  labelRadio[2].classList.add('normal-form');
  labelRadio[2].classList.remove('checked-form');
}

function activeRadioBtn3(){
  labelRadio[2].classList.add('checked-form');
  labelRadio[2].classList.remove('normal-form');
  labelRadio[0].classList.add('normal-form');
  labelRadio[0].classList.remove('checked-form');
  labelRadio[1].classList.add('normal-form');
  labelRadio[1].classList.remove('checked-form');
}

