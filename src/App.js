
import React, {useEffect, useState }from "react";
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [food, setFood] = useState([]);

  useEffect(()=> {
    function carregarApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
      .then((resultadoRequisiçãoURL) => resultadoRequisiçãoURL.json())
      .then((json) => {
        
        setFood(json);
      })
    }
    carregarApi();
  }, []);
  return (
    <div className="container">
      <header>
        <strong>React Food</strong>
      </header>
      {food.map((itensdaAPI)=>{
        return(
          <article key={itensdaAPI.id} className='post'>
            <strong className="titulo">{itensdaAPI.titulo}</strong>
                <img src={itensdaAPI.capa} 
                alt={itensdaAPI.titulo}className='capa'/>
                <p className="subtitulo">{itensdaAPI.subtitulo}</p>
                <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
