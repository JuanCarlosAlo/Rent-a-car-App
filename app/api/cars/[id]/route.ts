// api/cars/[id].ts (para obtener un solo coche por id)

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const car = await prisma.car.findUnique({
      where: { id },
      include: {
        images: true, // Incluir las imágenes relacionadas
        features: true, // Incluir las características relacionadas
      },
    });

    if (!car) {
      return NextResponse.json({ error: 'Coche no encontrado' }, { status: 404 });
    }

    return NextResponse.json(car); // Retornar el coche encontrado
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching car details' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
