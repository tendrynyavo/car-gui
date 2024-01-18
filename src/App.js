import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from './layout/layout';
import Crud from './components/crud/crud.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/:modele' element={<Crud />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
