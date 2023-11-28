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
  
      console.log(pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex]+ dot[dotIndex]);
  }
  
  // Llamada a la función
  anyString();