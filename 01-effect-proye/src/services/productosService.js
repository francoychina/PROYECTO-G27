// productosService.js
// Servicio que se encarga de la comunicación con la API de productos

//1) Importamos axios (una librería que simplifica las llamadas HTTP)
import axios from "axios";

// 2) URL base de tu recurso
const API_URL = "https://68afa23eb91dfcdd62bcb8f0.mockapi.io/productos";

// 3) Función principal: obtener todos los productos (READ)
export async function getProductos() {
  try {
    // Pedimos los datos al endpoint con axios
    const respuesta = await axios.get(API_URL);

    // Retornamos los datos que vienen en formato JSON
    return respuesta.data;
  } catch (error) {
    // Si algo sale mal, mostramos el error en consola
    console.error("Error al obtener productos:", error);
    throw error; // importante para que el componente sepa que falló
  }
}

// Mi función getProductos() se conecta al servidor MockAPI, hace una solicitud GET al recurso productos y devuelve los datos listos para usar en el componente.

//Separé la lógica de conexión en un servicio independiente (productosService.js).
// Este archivo usa axios para realizar solicitudes HTTP más limpias que con fetch.
// La función getProductos() envía un GET al endpoint de MockAPI y devuelve los datos listos para ser usados por el componente.”
// Así, el componente solo se preocupa por mostrar datos, no por cómo obtenerlos.