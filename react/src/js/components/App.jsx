import React, { useState } from "react";
import data from "./data.json"
import Loader from "./Loader"

const App = () => {
  const [loaderList, setLoaderList] = useState([])
  
  const handleClick = (event) => {
    event.preventDefault();
    setLoaderList(data.loaders)
  }

  return(
    <article>
      <ul>
        {loaderList.map(item => {
          return (
            <Loader {...item} key={item.id}/>
          )
        })}
      </ul>
      <button type="button" onClick={handleClick}>Mostrar lo aprendido</button>
    </article>
  )
}

export default App;