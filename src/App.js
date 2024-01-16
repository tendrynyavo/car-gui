import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from './layout/layout';
import Category from './pages/category/category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
