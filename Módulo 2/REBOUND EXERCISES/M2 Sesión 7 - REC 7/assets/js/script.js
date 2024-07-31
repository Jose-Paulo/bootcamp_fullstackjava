const numero1 = prompt("Ingresa el primer número");
const numero2 = prompt("Ingresa el segundo número");

let resultado;

if (numero1 > numero2) {
    resultado = "El primer número es mayor que el segundo";
} else if (numero1 < numero2) {
    resultado = "El segundo número es mayor que el primero"; 
} else {
    resultado = "Los dos números son iguales";
} 

alert(resultado)