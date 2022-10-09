let container = document.getElementById('container');
let añadir = document.getElementById('añadir')
let contador = 0

// evento para crear tarjeta
añadir.addEventListener('click',nuevaCard);
function nuevaCard(){
    // contador +1
    contador++
    // insertar tarjeta nueva
    container.innerHTML +=
    `<div id="card" class="card">
    <h3 id="cardTitle" class="cardTitle">Modelo ${contador}</h3>
    <p id="cardP" class="cardP">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
      ipsam.
    </p>
    <button id="cardButon" class="cardButon" onclick="eliminarCard(event)">
      eliminar
    </button>
  </div>`;

}

// el boton tiene el evento onClick y llama esta funcion
function eliminarCard(e){
//    elminar el padre del target , parentNode detecta el padre
    e.target.parentNode.remove()
  
}

//harod Danilo MQ