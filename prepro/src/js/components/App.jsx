import React, { useState } from "react";
import data from "./data.json"
import Loader from "./Loader"
import logo from "../../img/platzi.png";
import video from "../../video/que-es-core.mp4";

// Prepros
import "../../sass/sass.scss"
import "../../less/less.less"
import "../../stylus/stylus.styl"

const App = () => {
  const [loaderList, setLoaderList] = useState([])
  
  const handleClick = (event) => {
    event.preventDefault();
    setLoaderList(data.loaders)
  }

  return(
    <article>
      <p>URL Loader</p>
      <img src={logo} alt="Logo" width="40"/>
      <p className="sass">Sass Loader</p>
      <p className="stylus">Stylus Loader</p>
      <p className="less">Less Loader</p>
      <p className="post-css">Postcss Loader</p>
      <video src={video} width="360" controls autoplay poster={logo}></video>
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