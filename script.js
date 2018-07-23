let botao = document.querySelector('button');
let article = document.querySelector('article');
let sonic = document.querySelector('#sonic');
let rings = document.querySelectorAll('.rings');

function mudarCorDeFundo(){
    document.body.style.backgroundColor ='blue';
}

function logar(){
    console.log('oie');
}

function sumir(){
    rings.style.opacity = 0;
}

botao.addEventListener('click', mudarCorDeFundo);
// botao.onclick = mudarCorDeFundo;       
article.addEventListener('mouseover',logar);

function andar(){
    sonic.style.transform= 'translateX(1000px)';
    setTimeout(mudarCorDeFundo, 3500);
    setTimeout(sumir, 0);
}

sonic.addEventListener('click', andar);

// let inputNome = document.querySelector('#input-nome');
// let inputEmail = document.querySelector('#input-email');
// let inputMensagem = document.querySelector('#input-mensagem');
// let botao = document.querySelector('button');
// let caixa = document.querySelector('div');

// botao.addEventListener('click', function(){
//     caixa.innerHTML = `
//     <p>Nome: ${inputNome.value}</p>
//     <p>Email: ${inputEmail.value}</p>
//     <p>Mensagem: ${inputMensagem.value}</p>`;
// });

