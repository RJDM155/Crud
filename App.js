import { useEffect, useState } from 'react';
import Login from './services/Login';
import secureLocalStorage from 'react-secure-storage';
import './App.css';
import AddButton from './services/Add';
import AddressForm from './services/AddressForm';
import { addAddress } from './services/Api';
import handleAddAddress from './services/Api';


function App() {

  const [token, settoken] = useState(null);
  useEffect(() => {
    let storedtoken = secureLocalStorage.getItem("token");
    settoken(storedtoken);
  }, []);

  const handleSubmit = (address) => {
    // handle submit logic
  }
  < AddressForm onSubmit={handleSubmit} />

  return (


    <div className="App">
      <h1>Agregar nueva dirección</h1>
      <AddressForm onSubmit={handleAddAddress} />
      {
        token === null ? <Login onLogin={(data) => { settoken(data) }} /> :

          <div>
            <h1>Agregar nueva dirección</h1>
            <AddressForm onSubmit={handleAddAddress} />
          </div>

      }
    </div>
  );
}

export default App;

