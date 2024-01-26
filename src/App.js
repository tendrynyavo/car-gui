import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Crud from './components/crud/crud.jsx';
import BackOffice from './pages/back-office/back-office.jsx';
import Login from './pages/login/login-back-office.jsx';
import { AuthProvider } from './firebase/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthProvider>````````
          <Routes>
            <Route path="/" element={<BackOffice />}>
              <Route path='/:modele' element={<Crud />} />
            </Route>
            <Route path='/login' element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
