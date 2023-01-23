
import FormularioSimulador from './pages/formulario';
import Recebera from './pages/Recebera';
import { useState } from 'react';
import './App.css';

function App() {
  const [dadosApi, setDadosApi] = useState([])

  return (
    <div className='App'>
      <section>
        <FormularioSimulador setDadosApi={setDadosApi}/>
        <Recebera dadosApi={dadosApi}/>
      </section>
    </div>
  );
}

export default App;
