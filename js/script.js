// funcion para encriptar el texto
function encriptarTexto(){

  let entrada =  document.getElementById("areatexto").value.trim();
  let salida = document.getElementById("resultado");

if(/[áéíóúÁÉÍÓÚ]/.test(entrada)||entrada.toLowerCase() != entrada ){

}
else if(entrada == ""){

let modalValidar = document.getElementById('modal');
modalValidar.style.visibility = "visible";

let closeModal = document.getElementById('close');
closeModal.onclick = function() {
let modalValidar = document.getElementById('modal');
modalValidar.style.visibility = "hidden";
}

}
else {
salida.innerText = entrada.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
salidaFinal();
}    
}

// funcion para desencriptar el texto
function desencriptarTexto(){
    
  let entrada =  document.getElementById("areatexto").value.trim();
  let salida = document.getElementById("resultado");

  if(/[áéíóúÁÉÍÓÚ]/.test(entrada)||entrada.toLowerCase() != entrada ){
      
  }
  else if(entrada == ""){

    let modalValidar = document.getElementById('modal');
    modalValidar.style.visibility = "visible";

    let closeModal = document.getElementById('close');
    closeModal.onclick = function() {
    let modalValidar = document.getElementById('modal');
    modalValidar.style.visibility = "hidden";
    }
      
  }
  else{
  salida.innerText = entrada.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
  salidaFinal();
  }
}

//funcion para limpiar la salida de texto
function salidaFinal(){

  document.getElementById("muneco").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").style.display = "none";
  document.getElementById("copiar").style.display = "inline";
}


function copiar() {
  let salida = document.getElementById("resultado").innerHTML;
  salida = salida.replace(/<[^>]+>/g, '');
  navigator.clipboard.writeText(salida).then(() => {
    // Mostrar el modal de copiado
    let modalCopiado = document.getElementById('modal-copiado');
    modalCopiado.style.visibility = "visible";
    modalCopiado.style.opacity = "1";

    // Cerrar el modal al hacer clic en aceptar
    let closeCopiado = document.getElementById('close-copiado');
    closeCopiado.onclick = function() {
      modalCopiado.style.visibility = "hidden";
      modalCopiado.style.opacity = "0";
    };
  });

  document.getElementById("areatexto").value = "";
}


//funcion que valida el texto si el usuario ingresa mayusculas o palabras con acento.
function validartexto(){

  let entrada = document.getElementById("areatexto").value;
  let error = document.getElementById("error");

  if (entrada == ""){
      error.style.color = "#616970"
      error.style.fontSize = "10px"
  }
  else if(/[áéíóúÁÉÍÓÚ]/.test(entrada)||entrada.toLowerCase() != entrada ){ 
    validarCaracteres(entrada);
      }
  else{
          error.style.color = "#617068ff"
          error.style.fontSize = "10px"
          validarCaracteres(entrada);
      }
}

let mayusculasActivadas = false;

function validarCaracteres(texto) {
  let textoMinuscula = texto.toLowerCase();
  let textoLimpio = textoMinuscula.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (texto !== textoMinuscula) {
    mayusculasActivadas = true;
    document.getElementById("mensajeTemporal").textContent = "Letras mayúsculas activadas";
  } else {
    mayusculasActivadas = false;
    document.getElementById("mensajeTemporal").textContent = "Texto en minúsculas sin acentos";
  }
  textoLimpio = textoLimpio.replace(/[^a-z\s\n]/g, "");
  document.getElementById("areatexto").value = textoLimpio;
}


//funcion para limpiar el texto de entrada y restablecer la pantalla
function limpiar() {
  // Limpiar el área de texto y el resultado
  document.getElementById("areatexto").value = "";
  document.getElementById("resultado").innerText = "";

  // Restablecer la visibilidad de los elementos
  document.getElementById("muneco").style.display = "";
  document.getElementById("texto1").style.display = "";
  document.getElementById("texto2").style.display = "";
  document.getElementById("copiar").style.display = "none";
  document.getElementById("limpiar").style.display = "none";
}

// Mostrar u ocultar el botón limpiar según el contenido
document.getElementById("areatexto").addEventListener("input", function() {
  const btnLimpiar = document.getElementById("limpiar");
  this.value.trim().length > 0
    ? btnLimpiar.style.display = "inline"
    : btnLimpiar.style.display = "none";
});
