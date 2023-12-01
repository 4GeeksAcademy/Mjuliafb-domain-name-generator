/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generateString = (pronoun, adj, noun, dot) => {
  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (let dotIndex = 0; dotIndex < dot.length; dotIndex++) {
          console.log(
            `${pronoun[pronounIndex]}${adj[adjIndex]}${noun[nounIndex]}${dot[dotIndex]}`
          );
        }
      }
    }
  }
};

window.onload = function() {
  const pronoun = ["las", "los", "nuestros"];
  const adj = ["grandes", "aflables", "amables"];
  const noun = ["animal", "conejos", "miop"];
  const dot = [".com", ".net", ".org", ".es"];

  generateString(pronoun, adj, noun, dot);
};
