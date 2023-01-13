//Array de Palabras 
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
]

//Variables 

let time = 10;
let score = 0
let word; 


//Funcion Palabra Aletaria 
let randomWords = (words) => {
    word = words[Math.floor(Math.random() * words.length)]
    return word
}
randomWords(words)

//Funcion Agregar al DOM la palabra Aleatoria 
let addToDOM = () => {
    let palabraAleatoria = word
    let h1 = document.querySelector('h1')
    h1.textContent = palabraAleatoria
    return palabraAleatoria //no funciona , no se por qué 
}
addToDOM()

//Funcion Evento del Tipo Input 
let inputText = document.querySelector('#text')
let palabraIngresada; 
inputText.addEventListener('input', function(e){
    palabraIngresada = (e.target.value).toLowerCase()
    // console.log(palabraIngresada) 
    // return palabraIngresada
    
    let compararPalabras = (time) => {
        if(palabraIngresada == word){
           document.querySelector('#timeSpan').innerHTML = time + 3; 
           document.querySelector('#text').value = ""; 
           addToDOM(); 
        }
    }
    compararPalabras(time)
})








