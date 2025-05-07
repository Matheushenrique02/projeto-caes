function gera(){
    fetch('https://dog.ceo/api/breeds/image/random', {mode:'cors'})
    .then(resposta => resposta.json())
    .then((data) =>{
        console.log(data.message)
        img.src = data.message
    })
}

const botao = document.querySelector('#botao')
const img = document.querySelector('img')

botao.addEventListener('click',gera)
