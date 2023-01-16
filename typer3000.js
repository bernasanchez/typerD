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
let randomWord = document.getElementById('randomWord') //h1 random word
let input = document.getElementById('text') //User input 
let timeSpan = document.getElementById('timeSpan') //time
let scoreText = document.getElementById('score') //score
let endGame = document.getElementById('end-game-container') //endGameContainer
let div = document.querySelector('.main') //divMain

//Inicio de Variables
let palabraIngresada = ''
let palabraAleatoria = ''
let time = 10.0
let score = 0

//Funciones 

//Palabra Aleatoria 
const rndWord = (words) => palabraAleatoria = words[Math.floor(Math.random() * words.length)]

//Agregar al DOM 
const addToDOM = () => {
    rndWord(words)
    randomWord.textContent = palabraAleatoria
    timeSpan.textContent = `${time.toFixed(1).toString().padStart(4, '0')}`
}
//Actualizar tiempo
const actualizarTiempo = () => {
    time -= 0.1
    timeSpan.textContent = `${time.toFixed(1).toString().padStart(4, '0')}`
    time <= 0
      ? (clearInterval(timeInterval),gameOver())
      : ''
}
let timeInterval = setInterval(actualizarTiempo, 100);

//Actualizar Score
const updateScore = () => {
    score++
    scoreText.textContent = score
}

//Game Over: actualizacion de DOM
const gameOver = () => {
    div.style.display = 'none'
    endGame.style.display = 'flex'
  
    const h1 = document.createElement('h1')
    h1.textContent = 'Juego terminado'
  
    const p = document.createElement('p')
    p.textContent = `El puntaje final es ${score}`
  
    const button = document.createElement('button')
    button.setAttribute('onclick', 'location.reload()') //Recargar pagina 
    button.textContent = 'Volvé a empezar'
  
    endGame.append(h1, p, button)
  
    button.focus()
}

//Evento Input: comparar palabraIngresada vs palabraAleatoria
input.addEventListener('input', (e) =>{
    palabraIngresada = e.target.value
    if (palabraAleatoria === palabraIngresada) {
      time += 3
      input.value = ''
      addToDOM()
      updateScore()
    }
})

const init = () => {
    rndWord(words)
    addToDOM()
    input.focus()
}

init()