const kabineti = Kabineti;


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

    //const kabineti = ["11. kab", "Lielais koridors", "352.kab.", "111.kab.", "102.kab", "119.kab.", "Zāle"];
    const apraksti = ["Nedeg lampiņa", "Neslēdzas durvis", "Nestrādā kaut kas", "Salauzsts krēsls", "Bojāta siena"];
    
    let rinduSkaits = Math.floor(Math.random() * 3)+5;

    let tabulasRindas = document.querySelector('.rindas');
    tabulasRindas.innerHTML = '';
    for (let i = 0; i < kabineti.length; i++)
       {
//      let randKorp = Math.floor(Math.random() * 4);
//      let randKab = Math.floor(Math.random() * kabineti.length);
        let randApr = Math.floor(Math.random() * apraksti.length);
        tabulasRindas.innerHTML += 
        `<tr>
        <td>${i+1}.</td>
        <td>${Math.floor(Math.random() * 30)+1}.${Math.floor(Math.random() * 12)+1}.2020</td>
        <td>${kabineti[i].Stavs} Korpuss</td>       
        <td>${kabineti[i].Vards}</td>
        <td>${apraksti[randApr]}</td>
        `;
       }
  
  
});

const PogaJason = document.getElementById('PogaJason');
PogaJason.addEventListener('click', function(){
  
  let tabulasRindasJason = document.querySelector('.rindas');
  tabulasRindasJason.innerHTML = '';

});


}
// beidzas funkcija init(), kura gaida, kamēr ieladēsies html lapa


 /* for (e, o = [], r = 0; r < e.length; r++)
      for (var t in e[r])-1 === o.indexOf(t) && o.push(t);

  var n = document.createElement("table"), a = n.insertRow(-1);
  for (r = 0; r < o.length; r++) {
      var i = document.createElement("th");
      i.innerHTML = o[r], a.appendChild(i)
  }
  for (r = 0; r < e.length; r++) {
      a = n.insertRow(-1);
      for (var c = 0; c < o.length; c++) {
          a.insertCell(-1).innerHTML = e[r][o[c]]
      }
  }
  var l = document.getElementById("showData"); 
  n.setAttribute('id', 'tab'); l.innerHTML = "", l.appendChild(n) 
*/


// beidzas CreateTableFromJSON
