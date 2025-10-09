import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProductView from "./views/CreateProductView"
import Navbar from "./components/Navbar";
//rafce
import ProductosReadView from "./views/ProductosReadView"


const App = () => {
  return ( 
    // <div>App  
    //   <ProductsView />
    // </div>
  <div className="max-w-[1120px] mx-auto">
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductosReadView />} />
        <Route path="/crear" element={<CreateProductView />} />
      </Routes>
    
    </BrowserRouter>
  </div>
  )
}

export default App


