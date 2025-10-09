import { useState, useEffect } from "react";
import { readProducts } from "../services/productService";
import TableData from "../components/TableData";

const ProductsView = () => {
  //truthy y falsy
  const [products, setProducts] = useState(null);
  /**1. Objetivo:mostrar productos
   * 2. Donde estan los productos -> mockapi
   * 3. Cómo los obtengo???? -> axios/service
   * 4. Cómo los muestro??? -> transformandolo a algo que el navegador entienda
   */


  //El nombre que esta desde la API
  //Label como queremos mostrar
  const  headers = [
    {name: "name", label: "Nombre"},
    {name: "tipe", label: "Tipo"},
    {name: "price", label: "Precio"}
  ]



  useEffect(() => {
    const getProducts = async () => {
      try {
        const ProductsObtained = await readProducts();
        console.log(ProductsObtained);    
        setProducts(ProductsObtained);
      } catch (error) {
        console.log(error)
      }
    };
    getProducts();
  }, []);


  //renderizar listas 

  return (
    <div>
    {/* {products ? ( //condicionamos
      products.map((prod) => ( //trasformamos
      <div key={prod.id}>
        <h3>{prod.name}</h3>
      </div>
    ))
    ) : ( //si es falso
      <p>No hay Videojuegos</p>
    )} */}
    <TableData data={products} headers={headers}/>
    </div>
    
  );
}

export default ProductsView;