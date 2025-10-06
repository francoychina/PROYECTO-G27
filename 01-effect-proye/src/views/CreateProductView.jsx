import { useState } from "react";

const CreateProductView = () => {
    const [product, setProduct] = useState({
    producto_nombre: "",
    producto_descripcion: "",
    producto_precio: 0,
  });

 const handleInput = (event) => {
    console.log(event.target.value)

    setProduct({...product, name: event.target.value})
 }

  return (
    /**1.Obj: crear un nuevo registro
   * 2 de donde sacamos los datos -> form
   * 3. tengo los datos tengo que transformarlos -> JSON
   * 4. Envio
   * 5. tengo que mostrar un feedback
   */
    <div>
        <h1>Crear Producto</h1>
        <form>
            <input type="text" placeholder="Nombre" value={product.name} onChange={handleInput}/>
            <input type="number" placeholder="Precio" value={product.price} onChange={handleInput}/>
        </form>
    </div>
  )
}

export default CreateProductView