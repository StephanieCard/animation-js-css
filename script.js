// let botao = document.querySelector('button');
let article = document.querySelector('article');
let sonic = document.querySelector('#sonic');
let rings = document.querySelectorAll('.rings');
let imagens = document.querySelector('.imagens');

function sumir(){
   	for(let i in rings){
   		rings[i].style.opacity = 0;
   	}
}

function andar(){
    sonic.style.transform= 'translateX(800px)';
    setTimeout(sonic.style.opacity = 0);
    setTimeout(sumir, 0);
}

sonic.addEventListener('click', andar);


