import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const cars = await prisma.car.findMany({
            include: {
                images: true,
                features: true,
            },
        });

        const carsOnSale = cars.filter(car => car.isOnsale);

        if (carsOnSale.length === 0) {
            return NextResponse.json({ message: 'No cars on sale.' });
        }

        const randomCar = carsOnSale[Math.floor(Math.random() * carsOnSale.length)];


        return NextResponse.json(randomCar);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching cars' });
    } finally {
        await prisma.$disconnect();
    }
}
