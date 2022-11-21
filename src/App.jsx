import './App.css'
import Idiomas from './Components/Idiomas';
import PaginaInfo from './Components/PaginaInfo';
import { ProviderPadre } from './Context/Provider';

const App = () => {
  return (
    <div className='app'>
      <ProviderPadre>
      <div className='banderas'>
        <Idiomas/>
      </div>
      <div className='contenido'>
        <PaginaInfo />
      </div>
      </ProviderPadre>
    </div>
  )
}

export default App
