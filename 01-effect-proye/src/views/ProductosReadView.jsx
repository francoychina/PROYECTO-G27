// ProductosReadView.jsx
import { useEffect, useState } from "react";
import { getProductos } from "../services/productosService";

export default function ProductosReadView() {
  // Estado para almacenar los productos que vienen de la API
  const [productos, setProductos] = useState([]);
  // Estado para manejar errores
  const [error, setError] = useState(null);

  // useEffect: se ejecuta una sola vez al cargar el componente
  useEffect(() => {
    // Función interna que llama al servicio
    async function fetchData() {
      try {
        const data = await getProductos();
        setProductos(data); // guardamos los productos
      } catch (e) {
        setError("No se pudieron cargar los productos");
      }
    }

    fetchData(); // ejecutamos la función
  }, []);

  // Renderizado condicional (qué mostrar en pantalla)
  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (productos.length === 0) {
    return <div>Cargando productos...</div>;
  }

  // Renderizamos los productos en una tabla
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4" style= {{ fontFamily: "'Roboto Slab', serif" }}>Productos Seiri_peru</h1>
      <table className="table-auto w-full border">
        <thead className="bg-gray-200 text-black">
          <tr>
            <th className="border px-2 py-1">Nombre</th>
            <th className="border px-2 py-1">Precio</th>
            <th className="border px-2 py-1">Descripción</th>
            <th className="border px-2 py-1">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td className="border px-2 py-1">{p.producto_nombre}</td>
              <td className="border px-2 py-1">S/ {p.producto_precio}</td>
              <td className="border px-2 py-1">{p.producto_descripcion}</td>
              <td className="border px-2 py-1">
                <img
                  src={p.producto_imagen}
                  alt={p.producto_nombre}
                  className="h-24 w-24 object-cover rounded-xl border mx-auto"
                  onError={(e) => {
                    e.currentTarget.onerror = null; // evita loop si también falla
                    e.currentTarget.src = `https://picsum.photos/seed/${p.id}/200/200`;
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
