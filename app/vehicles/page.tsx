import Banner from '@/components/Banner/Banner'
import CarList from '@/components/CarList/CarList'

import MainContent from '@/components/MainContent/MainContent'
import { fetchAllCards, fetchCarsOnSaleRandom } from '@/hooks/carsOnSale'
import { Car } from '@/types/car'
import React from 'react'

const Veicles = async () => {

  const carOnSale: Car = await fetchCarsOnSaleRandom();
  const allCars: Car[] = await fetchAllCards()

  return (
    <MainContent>
      <Banner car={carOnSale} />
      <CarList cars={allCars} />
    </MainContent>
  )
}

export default Veicles