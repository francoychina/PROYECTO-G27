import { useState } from "react";
import Input from "../components/Input";
import { createProduct } from "../services/productService";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const CreateProductView = () => {
    const [product, setProduct] = useState({
    producto_nombre: "",
    producto_descripcion: "",
    producto_precio: 0,
  });
 
 let navigate = useNavigate()

 const handleInput = (event) => {
    console.log(event.target.value)

    setProduct({...product, [event.target.name]: event.target.value})
 }

 const handleSubmit = async (event) => {
  event.preventDefault()
  try{
    await createProduct(product)
    // alert("Producto creado")
    Swal.fire({
      title: 'Producto creado',
      text: 'Tu Producto se ha creado exitosamente',
      icon: 'success',
      theme: 'dark'
    })
    navigate("/")
  } catch (error) {
    console.log(error)
  }}
 


  const inputsInfo = [
    {name: "producto_nombre", label: "Nombre del producto", type: "text"},
    {name: "producto_descripcion", label: "Descripción del producto", type: "text"},
    {name: "producto_precio", label: "Precio del producto", type: "number"},

  ]


  return (
    /**1.Obj: crear un nuevo registro
   * 2 de donde sacamos los datos -> form
   * 3. tengo los datos tengo que transformarlos -> JSON
   * 4. Envio
   * 5. tengo que mostrar un feedback
   */
    <div>
        <h1>Crear Producto</h1>

        <form onSubmit={handleSubmit}>
          {inputsInfo.map((item, index) => (
          <Input
          key={index}
          value={product}
          name ={item.name}
          label={item.label}
          type={item.type}
          handleInput={handleInput}
          />
          ))}

          <button 
          type="submit" 
          className="
          btn
          bg-green-600 
          text-white 
          p-3 
          rounded"
          >
            Guardar
          </button>
        </form>
    </div>
  )
}

export default CreateProductView