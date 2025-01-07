-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "transmition" TEXT NOT NULL,
    "fuel" TEXT NOT NULL,
    "isRented" BOOLEAN NOT NULL,
    "isOnsale" BOOLEAN NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "divisa" TEXT NOT NULL,
    "bodyType" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "trimLevel" TEXT NOT NULL,
    "engineCapacity" DOUBLE PRECISION NOT NULL,
    "doors" INTEGER NOT NULL,
    "passengerCapacity" INTEGER NOT NULL,
    "fuelConsumption" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "availabilityDate" TIMESTAMP(3) NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarImage" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "CarImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarFeatures" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "feature" TEXT NOT NULL,

    CONSTRAINT "CarFeatures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarImage" ADD CONSTRAINT "CarImage_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarFeatures" ADD CONSTRAINT "CarFeatures_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
