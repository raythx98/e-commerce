import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const user = false
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login/>} />
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register/>} />
      </Routes>
    </Router>
  );
}

// const App = () => {
//   return <Home/>;
// };

export default App;