// let botao = document.querySelector('button');
let article = document.querySelector('article');
let sonic = document.querySelector('#sonic');
let rings = document.querySelectorAll('.rings');
let imagens = document.querySelector('.imagens');

// function mudarCorDeFundo(){
//     document.body.style.backgroundColor ='blue';
// }

// function logar(){
//     console.log('oie');
// }

function sumir(){
   // for(let i = 0; i<=5;i++){
   	// rings[i]= 
   	

   	for(let i in rings){
   		rings[i].style.opacity = 0;
   	}
   // }
    // let i=0;
   	// while(i<=rings.lenght){
   	// 	rings.style.opacity = 0;
   	// 	i++
   	// }

}



// botao.addEventListener('click', mudarCorDeFundo);
// botao.onclick = mudarCorDeFundo;       
// article.addEventListener('mouseover',logar);

function andar(){
    sonic.style.transform= 'translateX(800px)';
    // setTimeout(mudarCorDeFundo, 3500);
    setTimeout(sonic.style.opacity = 0);
    setTimeout(sumir, 0);
    setTimeout($('.rings').hide());
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

