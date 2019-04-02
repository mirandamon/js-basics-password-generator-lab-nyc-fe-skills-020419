window.addEventListener("load", () => {
  //start your code here
                          //0 1 2....................25
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = ""
  
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
      const randomIndex = Math.floor(Math.random() * 26)
      startingString += lowerCaseLetters[randomIndex]
    }

    const output = document.getElementById('result')
    output.innerHTML = startingString
    
    
  }
  
  document.addEventListener('submit', onSubmit)
});
