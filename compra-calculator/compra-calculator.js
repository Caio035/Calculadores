const btn = document.querySelector("#calc");


btn.addEventListener("click", function(e) {

  e.preventDefault();

const quant = document.querySelector("#quant-box");
const valor = document.querySelector("#value-box");

let a = quant.value;
let b = valor.value;

num1 = parseFloat(a.replace(",", "."))
num2 = parseFloat(b.replace(",", "."))

let resultado = num1 * num2;

let resultadoS = String(resultado)

let resultadoString = resultadoS.replace(".", ",")

let valorFinal = document.getElementById('valor-compra')
valorFinal.innerHTML = ''

const el = document.querySelector("#valor_da_compra")
const interval = 300 

function showText(el, resultadoString, interval){

  const char = resultadoString.split("").reverse()

  const typer = setInterval(() => {

    if (!char.length){
      return clearInterval(typer)
    }

    const next = char.pop()

    valorFinal.innerHTML += next

  }, interval)

}

showText(el, resultadoString, interval)

let tam = 500
let tam2 = 8
function aumenta(){
tam = tam + 100
tam2 = tam2 + 5
if ('valor-compra'.length > tam2)
 {
 document.getElementById("produto-info").style.width = tam + "px"
 }
}
aumenta()
})







