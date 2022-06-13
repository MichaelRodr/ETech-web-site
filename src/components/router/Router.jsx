import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from '../header/Navigation';
import Home from '../page/Home';

const Router = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Route exac path='/' element={<App />} />
        <Route exac path='/home' element={<Home />} />
        <Route exac path='/servicios' element={<Servicios />} />
        <Route exac path='/empresa' element={<Empresa />} />
        <Route exac path='/contacto' element={<Contacto />} />
        <Route exac path='/contacto' element={<Contacto />} />
        <Route exac path='/pageNotFound' element={<PageNotFound />} />
      </Router>
    </div>
  );
};

export default Router;
