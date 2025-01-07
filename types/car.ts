// @types/car.ts

export interface Car {
    id: string;
    name: string;
    year: number;
    description: string;
    brand: string;
    model: string;
    cover: string;
    transmition: string;
    fuel: string;
    isRented: boolean;
    isOnsale: boolean;
    price: number;
    divisa: string;
    bodyType: string;
    mileage: number;
    color: string;
    trimLevel: string;
    engineCapacity: number;
    doors: number;
    passengerCapacity: number;
    fuelConsumption: string;
    location: string;
    condition: string;
    availabilityDate: string; // Asegúrate de que la fecha sea un string
    rating: number;
    images: { url: string }[]; // La relación con las imágenes
    features: { feature: string }[]; // La relación con las características
  }
  