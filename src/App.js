
import React, { useEffect, useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';


const parseCSV = (text) => {
  const result = {
    header: [],
    data: [],
  }
  const [header, ...content] = text.split('\n');

  result.header = header.split('  ');
  console.log(result);
}


function App() {

  const[input, setInput] = useState('')

  function handleSearch(){
   
  };

  useEffect(() => {
    fetch('/zipcodes_brazil.csv')
      .then((r) => r.text())
      .then((text) => {
        parseCSV(text);
      });
  }, []);


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

        <span> UF</span>
        <span> Cidade</span>
        <span> Bairro</span>
        <span> Rua Teste</span>

      </main>
      
    </div>
  );
}

export default App;
