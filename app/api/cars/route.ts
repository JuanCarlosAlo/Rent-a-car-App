import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const cars = await prisma.car.findMany({
      include: {
        images: true,
        features: true,
      },
    });
    return NextResponse.json(cars);  // Cambié "newCar" a "cars"
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching cars' });
  } finally {
    await prisma.$disconnect();
  }
}
