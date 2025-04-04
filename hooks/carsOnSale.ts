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

export const fetchCarsOnSaleRandom = async (): Promise<Car> => {
  const res = await fetch(`http://localhost:3000/api/cars/onSale/random`, {
    next: {
      revalidate: 60, 
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener los coches en oferta");
  }

  return res.json();
};

export const fetchAllCards= async (): Promise<Car[]> => {
  const res = await fetch(`http://localhost:3000/api/cars/`, {
    next: {
      revalidate: 60, 
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener los coches en oferta");
  }

  return res.json();
};

export const fetchCarById = async (id: string): Promise<Car> => { 

  console.log(id);
  const res = await fetch(`http://localhost:3000/api/cars/${id}`, {
    next: { revalidate: 60 }, 
  });


  if (!res.ok) {
    throw new Error("Error al obtener el coche.");
  }

  return res.json();
};