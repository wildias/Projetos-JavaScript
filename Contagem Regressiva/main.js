"use strict";
const formatarDia = (dia) => parseInt(dia, 10);
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
  const dias = document.getElementById("dias");
  const horas = document.getElementById("horas");
  const minutos = document.getElementById("minutos");
  const segundos = document.getElementById("segundos");

  const qtdDias = Math.floor(tempo / (60 * 60 * 24));
  const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
  const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
  const qtdSegundos = tempo % 60;

  dias.textContent = formatarDia(qtdDias);
  horas.textContent = formatarDigito(qtdHoras);
  minutos.textContent = formatarDigito(qtdMinutos);
  segundos.textContent = formatarDigito(qtdSegundos);
};

const contagemRegressiva = (tempo) => {
  const pararContagem = () => clearInterval(id);

  const contar = () => {
    if (tempo === 0) {
      pararContagem();
    }
    atualizar(tempo);
    tempo--;
  };
  const id = setInterval(contar, 1000);
};

const tempoRestante = () => {
  const dataEvento = new Date("2022-10-17 23:00:00");
  const hoje = Date.now();
  return Math.floor((dataEvento - hoje) / 1000);
};

contagemRegressiva(tempoRestante());
