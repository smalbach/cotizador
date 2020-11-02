//OBTIENE LA DIFERENCIA DE AÑOS
export function obtenerDiferenciaYear(year) {
  console.log(new Date().getFullYear(), year);
  return new Date().getFullYear() - year;
}

//CALCULA EL TOTAL A PAGAR SEGUN LA MARCA
export function calcularMarca(marca) {
  let incremento;
  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    case "americano":
      incremento = 1.15;
      break;
    default:
      break;
  }
  return incremento;
}

//calcula el tipo de seguro
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

//Muestra la primer letra mayuscula
export function primeraMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
