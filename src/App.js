import './App.css';
import React, { useState } from 'react';
import { Login } from './Componentes/Login';
import { Register } from './Componentes/Register';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return(
    <div className="App">
        {
            currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
        
    </div>
  );
};

export default App;
