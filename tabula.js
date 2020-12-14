function init () {

const PogaIzpilditi = document.getElementById('PogaIzpilditi');
const PieteiktasRindas = document.getElementsByClassName('pieteikums');

PogaIzpilditi.addEventListener('click', function() {


    PogaIzpilditi.classList.toggle('selected');
    for (let i = 0; i < PieteiktasRindas.length; i++) {
      PieteiktasRindas[i].classList.toggle('slepts');
    }
  
});

const PogaNepabeigti = document.getElementById('PogaNepabeigti');
const IzpilditasRindas = document.getElementsByClassName('izpildits');

PogaNepabeigti.addEventListener('click', function() {


    PogaNepabeigti.classList.toggle('selected');
    for (let i = 0; i < IzpilditasRindas.length; i++) {
      IzpilditasRindas[i].classList.toggle('slepts');
    }
  
});


}