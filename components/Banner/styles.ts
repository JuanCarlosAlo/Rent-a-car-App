"use client"

import { MAIN_COLORS } from "@/lib/COLORS"
import styled from "styled-components"

export const BannerContainer = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
height: 400px;
margin: 6rem;
padding: 2REM;
border-radius: 1rem;
border: 1px solid ${MAIN_COLORS.CARDS_BORDER};
box-shadow: ${MAIN_COLORS.CARDS_SHADOW};
`

export const BannerImage = styled.img`
width: 40%;
object-fit: cover;
height: 400px;
`

export const BannerTextWrap = styled.div`
width: 40%;
`