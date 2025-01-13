const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { CAR_LIST } = require('../lib/carPh.js');

const fixedAvailabilityDate = "2024-11-01T00:00:00.000Z"; // Fecha fija para todos los coches

async function main() {
  for (const carData of CAR_LIST) {
    const { imgs, features, availabilityDate, ...rest } = carData; // Eliminamos availabilityDate del array

    // Sobrescribimos availabilityDate con la fecha fija
    const carWithFixedDate = {
      ...rest,
      availabilityDate: fixedAvailabilityDate, // Usamos la fecha fija
    };

    // Eliminar coche existente si coincide por nombre y año (puedes cambiar la lógica según convenga)
    const existingCar = await prisma.car.findFirst({
      where: {
        name: carWithFixedDate.name,
        year: carWithFixedDate.year,
      },
    });

    if (existingCar) {
      await prisma.car.delete({
        where: { id: existingCar.id },
      });
      console.log(`Coche eliminado: ${carWithFixedDate.name} (${carWithFixedDate.year})`);
    }

    // Crear el coche con la fecha fija
    const car = await prisma.car.create({
      data: {
        ...carWithFixedDate, // Usamos los datos del coche con la fecha fija
        images: {
          create: imgs.map((url) => ({ url })), // Crear imágenes
        },
        features: {
          create: features.map((feature) => ({ feature })), // Crear características
        },
      },
    });

    console.log(`Coche creado: ${car.name} (${car.year})`);
  }
}

main()
  .catch((e) => {
    console.error('Error al procesar los coches:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
