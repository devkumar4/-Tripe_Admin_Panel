
import './App.css';
import AddFoodData from './components/AddFoodData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrderSection } from './components/OrderSection/OrderSection';
import { ShowOrderSpecific } from './components/OrderSection/ShowOrderSpecific';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderSection />} />
        <Route path="/addfood" element={<AddFoodData />} />
        <Route path="/orders" element={<OrderSection />} />
        <Route path="/orderdetails/:orderid" element={<ShowOrderSpecific />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
