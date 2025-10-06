//Se encargara del manejo de datos de mockapi
import axios from "axios";

const readProducts = async () => {
  try {
    const result = await axios.get(
      "https://68e1dc4a8943bf6bb3c513f9.mockapi.io/videogames"
    );

    if (result.status === 200) {
      return result.data

    }
    else{
      throw new Error("error al solicitar los datos :=0")
    }
    console.log(result);  
    return result.data;   
  } catch (error) {
    console.log(error)
  }
};
export { readProducts };