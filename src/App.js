
import React, { useEffect, useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';


const parseCSV = (text) => {
  const result = {
    header: [],
    data: [],
  }
  const [header, ...content] = text.split('\n');

  result.header = header.split(';');

  content.forEach((item) => {
    result.data.push(item.split(';'))
  });
  return result;
}


function App() {

  const[input, setInput] = useState('')
  const [csv, setCsv] = useState('null')
  const [adress, setAdress] = useState('null')

  useEffect(() => {
    fetch('/cep-20190602.csv')
      .then((r) => r.text())
      .then((text) => {
        setCsv(parseCSV(text));
      });
  }, []);

  function handleSearch(){    
    
    for (let i = 0; i < csv.data.length; i++) {
      let element = csv.data[i][3];
      if (element === input) {
        element = csv.data[i];
        setAdress(element);
        return element;
      }else{
        console.log('Error')
        break;
      }
    }
  };

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
