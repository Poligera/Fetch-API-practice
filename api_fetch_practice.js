// Random Joke API

const jokeURL = "https://official-joke-api.appspot.com/random_joke";
const button = document.querySelector("button");
const section = document.querySelector("section");
const jokeParagraph = document.createElement("p");
jokeParagraph.style.padding = "5rem 1rem";
jokeParagraph.style.fontSize = "1.5rem";

function fetchJoke() {
  fetch(jokeURL)
    .then((response) => response.json())
    .then((data) => {
      addJoketoDOM(data);
    })
    .catch((err) => console.warn("Oops, something went wrong!", err));
  console.log("Waiting for a joke...");
}

function addJoketoDOM(joke) {
  jokeParagraph.innerHTML = `- ${joke.setup}<br /><br/>-${joke.punchline}`;
  section.appendChild(jokeParagraph);
}

button.addEventListener("click", fetchJoke);
setTimeout;
