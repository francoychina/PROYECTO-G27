import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProductView from "./views/CreateProductView"







//rafce
import ProductsView from './views/ProductsView'


const App = () => {
  return ( 
    // <div>App  
    //   <ProductsView />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="/crear" element={<CreateProductView />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App

