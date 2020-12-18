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

const PogaVisi = document.getElementById('PogaVisi');
PogaVisi.addEventListener('click', function(){

    const kabineti = ["11. kab", "Lielais koridors", "352.kab.", "111.kab.", "102.kab", "119.kab.", "Zāle"];
    const apraksti = ["Nedeg lampiņa", "Neslēdzas durvis", "Nestrādā kaut kas", "Salauzsts krēsls", "Bojāta siena"];
    
    let rinduSkaits = Math.floor(Math.random() * 3)+5;

    let tabulasRindas = document.querySelector('.rindas');
    tabulasRindas.innerHTML = '';
    for (let i = 0; i < rinduSkaits; i++)
       {
        let randKorp = Math.floor(Math.random() * 4);
        let randKab = Math.floor(Math.random() * kabineti.length);
        let randApr = Math.floor(Math.random() * apraksti.length);
        tabulasRindas.innerHTML += 
        `<tr>
        <td>${i+1}.</td>
        <td>${randKorp+1}. Korpuss</td>
        <td>${Math.floor(Math.random() * 30)+1}.${Math.floor(Math.random() * 12)+1}.2020</td>
        <td>${kabineti[randKab]}</td>
        <td>${apraksti[randApr]}</td>
        `;
       }
  
  
});


}



// beidzas funkcija init(), kura gaida, kamēr ieladēsies html lapa


