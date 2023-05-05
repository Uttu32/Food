import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Works from './components/How it Workd/Works';
import Meal from './components/Meals/Meal';
import Testimonial from './components/Testimonial/Testimonial';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/work" element={<Works/>}></Route>
        <Route path="/meal" element={<Meal/>}></Route>
        <Route path="/testimonial" element={<Testimonial/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
