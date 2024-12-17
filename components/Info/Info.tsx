import React from 'react'
import { Card, CardDescription, CardList, CardTitle, CompanyDescription, ContentWrapper, SectionContainer, Title } from './styles'
import {infoData, infoDesc, infoTitle} from '../../lib/sections/infoData'
import { MAIN_COLORS } from '@/lib/COLORS'
import MainButton from '../MainButton/MainButton'



const Info = () => {
  return (
    <SectionContainer id='info'>
        <ContentWrapper>
            <Title>{infoTitle}</Title>
            <CompanyDescription>
                {infoDesc}
            </CompanyDescription>
            <MainButton onClick={() => console.log('Navegando a la página de coches')} color={MAIN_COLORS.PRIMARY} bgColor={MAIN_COLORS.SECONDARY}>
        Descubre nuestros coches
      </MainButton>
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