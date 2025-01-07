const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {

  // const carId = 3; // Cambia esto al ID real del coche en tu base de datos.

  // const deletedCar = await prisma.car.delete({
  //   where: {
  //     id: carId, // Identificador del coche a eliminar.
  //   },
  // });

  // console.log('Coche eliminado:', deletedCar);

  const car = await prisma.car.create({
    data: {
      name: 'Corolla',
      year: 2024,
      description: 'Lorem ipsum dolor sit amet consectetur...',
      brand: 'Toyota',
      model: 'Corolla',
      cover: 'https://res.cloudinary.com/dfvznarq2/image/upload/v1736018265/toyotaC1_aq2teu.png',
      transmition: 'manual',
      fuel: 'petrol',
      isRented: false,
      isOnsale: false,
      price: 500,
      divisa: 'euro',
      bodyType: 'Sedan',
      mileage: 15000,
      color: 'White',
      trimLevel: 'SE Hybrid',
      engineCapacity: 1.8,
      doors: 4,
      passengerCapacity: 5,
      fuelConsumption: '7L/100km',
      location: 'Madrid, España',
      condition: 'Used',
      availabilityDate: new Date('2024-11-01'),
      rating: 4.5,
      images: {
        create: [
          { url: 'https://res.cloudinary.com/dfvznarq2/image/upload/v1736018265/toyotaC1_aq2teu.png' },
          { url: 'https://res.cloudinary.com/dfvznarq2/image/upload/v1736018266/toyotaC2_huio2n.png' },
          { url: 'https://res.cloudinary.com/dfvznarq2/image/upload/v1736018266/toyotaC3_po1ep8.png' },
        ],
      },
      features: {
        create: [
          { feature: 'airbags' },
          { feature: 'ABS' },
          { feature: 'GPS' },
        ],
      },
    },
  });

  console.log('Coche creado:', car);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });