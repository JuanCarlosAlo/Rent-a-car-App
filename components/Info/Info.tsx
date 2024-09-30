import React from 'react'
import { Card, CardDescription, CardList, CardTitle, CompanyDescription, ContentWrapper, SectionContainer, Title } from './styles'
import {infoData, infoDesc} from '../../lib/sections/infoData'
import Button from '../MainButton/MainButton'


const Info = () => {
  return (
    <SectionContainer>
        <ContentWrapper>
            <Title>Que es Rac?</Title>
            <CompanyDescription>
                {infoDesc}
            </CompanyDescription>
            <Button onClick={() => console.log('Navegando a la página de coches')}>
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