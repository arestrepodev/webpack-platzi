import '../css/index.css';
import search from "./search"
import render from "./render"

const id = prompt("¿Quién es ese Pokemón?");

search(id)
  .then((data) => {
    console.log(data);
    render(data);
  }).catch(error => {
    Error(error);
  })
