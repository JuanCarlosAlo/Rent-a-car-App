import React from 'react'
import { Card, CardDescription, CardList, CardTitle, CompanyDescription, ContentWrapper, SectionContainer, Title } from './styles'
import {infoData, infoDesc, infoTitle} from '../../lib/sections/infoData'
import Button from '../MainButton/MainButton'
import { MAIN_COLORS } from '@/lib/COLORS'


const Info = () => {
  return (
    <SectionContainer id='info'>
        <ContentWrapper>
            <Title>{infoTitle}</Title>
            <CompanyDescription>
                {infoDesc}
            </CompanyDescription>
            <Button onClick={() => console.log('Navegando a la página de coches')} color={MAIN_COLORS.TERCIARY}>
        Descubre nuestros coches
      </Button>
            </ContentWrapper>
            <CardList>
                {infoData.map((item, index) => (
                    <Card key={index}>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                ))}
            </CardList>
        </SectionContainer>
  )
}

export default Info