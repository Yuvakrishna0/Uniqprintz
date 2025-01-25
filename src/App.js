import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<home/>} />
      <Route path="/shop" element={<shop/>} />
      <Route path="/shopcategory" element={<shopcategory/>} />
      <Route path="/loginsignup" element={<loginsignup/>} />
      <Route path="/contactus" element={<contactus/>} />
      <Route path="/myorders" element={<myorders/>} />
      <Route path="/product" element={<product/>}>
      <Route path=':productId' element={<product/>}/>
      </Route>
      <Route path="/cart" element={<cart/>} />
      <Route path="/login" element={<loginsignup/>}/>
      <Route path="/favourites" element={<favourites/>}/>
      <Route path="/profile" element={<profile/>}/>

    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
