import leia from 'mclainsmt-cli-prompt';
import generate_image from './generate-image.js';


const nome = leia('Digite seu nome: ');
const idade = leia('Digite sua idade: ');


generate_image(`
[Cartão de aniversario]

Olá ${nome}!

Parabens pelos seus ${idade} anos de idade!

`)