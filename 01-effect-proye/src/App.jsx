import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProductView from "./views/CreateProductView"







//rafce
import ProductosReadView from "./views/ProductosReadView"


const App = () => {
  return ( 
    // <div>App  
    //   <ProductsView />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductosReadView />} />
        <Route path="/crear" element={<CreateProductView />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App


