const resultDisplay = document.getElementById('result')
const optionsDisplay = document.getElementById('options')
const options = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
  getResults(e.target.innerHTML, options[Math.floor(Math.random() * options.length)])
}

options.forEach(option => {
  const button = document.createElement('button')
  button.setAttribute('id', option)
  button.innerHTML = option
  button.addEventListener('click', handleClick)
  optionsDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
  document.body.className = '';
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose  ${computerChoice}: <span class="result win">YOU WIN!</span>`
      document.body.classList.add('win')
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose  ${computerChoice}: <span class="result lose">YOU LOSE!</span>`
      document.body.classList.add('lose')
      break
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
      resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose  ${computerChoice}: <span class="result draw">IT'S A DRAW!</span>`
      document.body.classList.add('draw')
      break
  }
}