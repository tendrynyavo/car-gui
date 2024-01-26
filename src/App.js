import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Crud from './components/crud/crud.jsx';
import BackOffice from './pages/back-office/back-office.jsx';
import Login from './pages/login/login-back-office.jsx';
import Energie from './pages/back-office/energie/energie.jsx';
import LayoutMoteur from './pages/back-office/moteur/layout-moteur.jsx';
import TypeMoteur from './pages/back-office/moteur/type-moteur.jsx';
import Modele from './pages/back-office/modele/modele.jsx';
import Design from './pages/back-office/modele/design.jsx';
import Moteur from './pages/back-office/moteur/moteur.jsx';
import DesignModele from './pages/back-office/modele/design-modele.jsx';
import TypeCrud from './pages/back-office/moteur/type.jsx';
import Test from './test.jsx';
import LayoutMarque from './pages/back-office/marque/layout-marque.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BackOffice />}>
          <Route path='/test' element={<Test />} />
          <Route path='/marque' element={<LayoutMarque />} >
            <Route index element={<Crud modele={'marque'} />} />
            <Route path='modele' element={<Modele />} />
          </Route>
          <Route path='/categorie' element={<Crud modele={'categorie'} />} />
          <Route path='/design' element={<Design />} />
          <Route path='/design-modele' element={<DesignModele />} />
          <Route path='/energie' element={<Energie />} />
          <Route path='/moteur' element={<LayoutMoteur />} >
            <Route index element={<Moteur />} />
            <Route path='type' element={<TypeCrud />} />
            <Route path='vitesse' element={<Crud modele={'vitesse'} />} />
            <Route path='carburant' element={<Crud modele={'carburant'} />} />
          </Route>
          <Route path='/moteur-type' element={<TypeMoteur />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;