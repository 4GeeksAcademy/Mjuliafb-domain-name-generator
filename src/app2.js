window.onload = function() {
    //write your code here
    const anyString = () => {

      let pronoun = ['the', 'our'];
      let adj = ['great', 'big'];
      let noun = ['jogger', 'racoon'];
      let dot = ['.com', '.net'];
  
      let pronounIndex = Math.floor(Math.random() * pronoun.length);
      let adjIndex = Math.floor(Math.random() * adj.length);
      let nounIndex = Math.floor(Math.random() * noun.length);
      let dotIndex = Math.floor(Math.random() * dot.length);
  
      for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
          for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
              for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
                  for (let dotIndex = 0; dotIndex < dot.length; dotIndex++) {
                      console.log(pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + dot[dotIndex]);
                  }
              }
          }
      }
  }
  
  // Llamada a la función
  anyString();