"use strict";

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

//impede sinais no input so numeros
const sinais = ["/", "*", "-", "+"]
function testaSinais(entrada) {
  entrada.addEventListener("keypress", (e) => {
    if (sinais.includes(e.key)) {
      e.preventDefault()
    }
  })  
}
testaSinais(inputAdultos)
testaSinais(inputCriancas)
testaSinais(inputDuracao)




function calcular() {
  console.log("calculando.....");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;
  resultado.innerHTML = `<p> ${qtdTotalCarne / 1000} kg de carne</P>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalCerveja / 355
  )} latas de cerveja</P>`;
  resultado.innerHTML += ` <p>${Math.ceil(
    qtdTotalBebidas / 2000
  )} garrafas de bebidas</P>`;
}

//
//
function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
