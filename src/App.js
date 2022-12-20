
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';


function App() {

  const[input, setInput] = useState('')

  function handleSearch(){
    alert("Valor do input " + input)
  }

  return (
    <div className="container">
      <h1 className="title">Zip Code Finder</h1>

      <div className="containerInput">
        <input type="text" 
        placeholder="Type your zip code" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      
      <main className='main'>
        <h2> Zip Code: 508410440</h2>

        <span> Rua Teste</span>
        <span> Complemento: Algum</span>
        <span> Catolé</span>
        <span> Campina Grande - PB</span>

      </main>
      
    </div>
  );
}

export default App;
