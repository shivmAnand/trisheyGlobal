import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ContactUs } from './pages/ContactUs';
import { AboutUs } from './pages/AboutUs';
import { MyLayout } from './components/layouts/MyLayout';

function App() {
  return (
    <Routes>
      <Route element={<MyLayout />} >
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;

