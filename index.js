window.addEventListener("load", () => {
  //start your code here
                          //0 1 2....................25
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  function onSubmit(event) {
    // prevent the default native behavior
    event.preventDefault()
    // get the thing that was entered
    const input = document.getElementById('password-length')
    const howManyCharacters = input.value
    // ex: howManyCharacters = 10
    // we want to loop and make a random letter every time
    // start from 0, finish at 9
    let startingString = ''
    
    for (let i = 0; i < howManyCharacters; i++) {
      // we pick a random letter 
      let randomIndex = Math.floor(Math.random() * lowerCaseLetters.length)
      startingString += lowerCaseLetters[randomIndex]
      
      randomIndex = Math.floor(Math.random() * upperCaseLetters.length)
      startingString += upperCaseLetters[randomIndex]
      
      randomIndex = Math.floor(Math.random() * numbers.length)
      startingString += numbers[randomIndex]
      
      randomIndex = Math.floor(Math.random() * specialCharacters.length)
      startingString += specialCharacters[randomIndex]
    }

    const output = document.getElementById('result')
    output.innerHTML = startingString
    
    
  }
  
  document.addEventListener('submit', onSubmit)
});
