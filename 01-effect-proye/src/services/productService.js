//Se encargara del manejo de datos de mockapi
import axios from "axios";

const readProducts = async () => {
  try {
    const respuesta = await axios.get(
      "https://68afa23eb91dfcdd62bcb8f0.mockapi.io/productos"
    );

    if (respuesta.status === 200) {
      return respuesta.data

    }
    else{
      throw new Error("error al solicitar los datos :=0")
    }  

  } catch (error) {
    console.log(error)
  }  
};

const createProduct = async (newProduct)  => {
  try{
    const respuesta = await axios.post(
      "https://68afa23eb91dfcdd62bcb8f0.mockapi.io/productos", newProduct
    )
    console.log(respuesta)
    if (respuesta.status === 201) {
      return respuesta.data

    }
    else{
      throw new Error("error al crear recursos :=0")
    }
  }
  
  catch(error){
    console.log(error)
    throw error;
  }
};

export { 
  readProducts,
  createProduct
};