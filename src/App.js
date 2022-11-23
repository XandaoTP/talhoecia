import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../src/logo.png'
import Gmaps from './components/googlemap/gmap';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <div className='divLogo'>
        <img src={logo} className='logo' alt='Talhoecia Logo'/>
        <p className='text-white'>EM BREVE OS MELHORES CORTES DA CIDADE</p>
      </div>
      <footer className="text-center">
        <div className="card-header">
        Casa de carne
        </div>
        <div className="card-body">
          <h5 className="card-title">TALHO&CIA</h5>
          <p className="card-text">Av. da Saudade, 1257 - Santa Marta - Uberaba/MG</p>
          <FontAwesomeIcon icon="fa-brands fa-square-whatsapp" />
          <Gmaps />
        </div>
    </footer>
  </>
  );
}

export default App
