import { Car } from "@/types/car";

export const fetchCarsOnSale = async (): Promise<Car[]> => {
  const res = await fetch(`http://localhost:3000/api/cars/onSale`, {
    next: {
      revalidate: 60, 
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener los coches en oferta");
  }

  return res.json();
};
