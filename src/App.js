import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      
      <AuthProvider>
      <Router>
      <Header></Header>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<OrderReview />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          {/* <PrivateRoute path="/placeorder" element={<PlaceOrder />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
