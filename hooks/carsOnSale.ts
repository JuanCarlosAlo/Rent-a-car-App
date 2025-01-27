export const fetchCarsOnSale = async <T>(): Promise<T> => {
    const response = await fetch(`/api/cars/onSale`, {
      cache: "no-store", // No cache para datos dinámicos (ajústalo según necesidad)
    });
  
    if (!response.ok) {
      throw new Error("Error al obtener los coches en oferta");
    }
  
    return response.json();
  };