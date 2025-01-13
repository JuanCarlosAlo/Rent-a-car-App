import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET(req: Request) {
    try {
  
      const carsOnSale = await prisma.car.findMany({
        where: {
          isOnsale: true, 
        },
        include: {
          images: true,
          features: true,
        },
      });
      return NextResponse.json(carsOnSale); 
    } catch (error) {
      return NextResponse.json({ error: 'Error fetching cars' });
    } finally {
      await prisma.$disconnect();
    }
  }