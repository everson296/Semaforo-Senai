'use strict';

const img = document.querySelector('img');
const botoes = document.getElementById('containerBtn');
let numero = 0;
let itervalo = null

const qualBtn = (event) => {
    pararAuto();
    ligar[event.target.id]();
}

const proximoNumero = () => numero = numero < 2 ? ++numero : 0;

const farol = () => {
    const cores = ['vermelho', 'amarelo', 'verde']
    const cor = cores[ numero ];
    ligar[cor]();
    proximoNumero();
}

const pararAuto = () => {
    clearInterval(itervalo);
}

const ligar = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'desligado': () => img.src = './img/desligado.png',
    'auto': () => itervalo = setInterval( farol, 1000 ),
}

botoes.addEventListener('click', qualBtn);
            
