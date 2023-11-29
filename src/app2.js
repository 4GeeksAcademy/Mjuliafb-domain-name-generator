window.onload = function() {
    //write your code here
    const anyString = () => {

        let pronoun = ['las', 'los','nuestros' ];
        let adj = ['grandes', 'aflables','amables'];
        let noun = ['animal', 'conejos','miop'];
        let dot = ['.com', '.net', ".org"];
    
        let pronounIndex = Math.floor(Math.random() * pronoun.length);
        let adjIndex = Math.floor(Math.random() * adj.length);
        let nounIndex = Math.floor(Math.random() * noun.length);
        let dotIndex = Math.floor(Math.random() * dot.length);
        
            for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
                for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
                    for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
                        for (let dotIndex = 0; dotIndex < dot.length; dotIndex++) {
                            // Tu condición if aquí
                            if (noun[nounIndex] === 'animal'|| noun[nounIndex] === 'miop' ) {
                                console.log(pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".es");
                            } else {
                                // Console.log solo si la condición no se cumple
                                console.log(pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + dot[dotIndex]);
                            }
                        }
                    }
                }
            }
        }
        
        // Llamada a la función
        anyString();