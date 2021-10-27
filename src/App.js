//import logo from './logo.svg';
import './App.css';
/* Ejercicos varios
function aleatorio(){
  return Math.trunc(Math.random()*10);
}

function App() {
  var profesion = "Ingeniero";
  const persona = {
    nombre: 'Carlos',
    id: 123456789
  };
  var dirEmails = ['https://espanol.yahoo.com/', 'https://outlook.live.com/owa/', 'https://mail.google.com/' ]
  return ( // formato JSX JavaScript XML
    <div>
      <h1>Hola mundo</h1>
      <p>La persona seleccionada es {profesion}</p>
      <p>Su nombre es {persona.nombre} y su id es {persona.id}</p>
      <p>El numero de la rifa es:</p>
      {aleatorio()}
      <p>Expresiones inmediatas:</p>
      5*8 = {40}
      <br/>
      <a href= {dirEmails[0]}>Yahoo</a><br/>
      <a href= {dirEmails[1]}>Hotmail</a><br/>

    </div>
    

  );
}
*/
/* utilizando partes de jsx fuera de la funcion app
function mensaje(titulo){
  return(<h1>{titulo}</h1>)
}

function App(){
  return(
    <div>
        {mensaje('Hola mundo')}
        {mensaje('Esta es una prueba')}
    </div>
  )
}
*/

/* Eventos y captura de datos de un formulario
function App(){
  return(
    <div>
      <form onSubmit = {sumar}>
          <p>Digite número 1 <input type='number' name= 'num1'></input></p>
          <p>Digite número 2 <input type='number' name= 'num2'></input></p>
          <input type='submit' value='Sumar'></input>
      </form>
    </div>
  )
}

function sumar(e){
  e.preventDefault();
  var n1 = parseInt(e.target.num1.value);
  var n2 = parseInt(e.target.num2.value);
  var resultado = n1 + n2;
  alert('La suma es: '+resultado);
}
*/
/* Hook de estado
import React, {useState} from 'react';
function App(){

  function aleatorio(){
    var array1 = new Array(5);
    for (var i = 0; i<5; i++){
      array1[i] = Math.trunc(Math.random()*10);
    }
    //var numAleatorio =  Math.trunc(Math.random()*10);
    setNum(array1)
  }
  var [num, setNum] = useState([0,0,0,0,0]);
  return(
    <div>
      <p>Números aleatorios:</p>
      {num.map(num =>(<p>{num}</p>))}
      <button onClick= {aleatorio}>Jugar</button>
      
    </div>
  )
}*/

//Componente
import Dado from './Dado';
import {useState} from 'react';




function App(){

  function aleatorio(){
    return Math.trunc(Math.random()*6)+1;
  }
  
  function jugar(){
    setNum1(aleatorio());
    setNum2(aleatorio());
    setNum3(aleatorio());
  
  }
  var [num1, setNum1] = useState(aleatorio());
  var [num2, setNum2] = useState(aleatorio());
  var [num3, setNum3] = useState(aleatorio());
  return(
    <div>
      <Dado valor ={num1}/>
      <Dado valor ={num2}/>
      <Dado valor ={num3}/>
      <button onClick= {jugar}>Jugar</button>
      
    </div>
  )
}

export default App;
