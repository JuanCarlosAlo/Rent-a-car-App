import {infoTitle} from './infoData'
import {stepsTitle} from './stepsData'
import {brandsTitle} from './brandsData'

export const NAV_ITEMS = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: infoTitle,
        href: '/#info'
    },
    {
        title: stepsTitle,
        href: '/#steps'
    },
    {
        title: brandsTitle,
        href: '/#brands'
    },
    {
        title: 'Vehiculos',
        href: '/vehicles'
    },
   
    
]

export const NOT_USER_NAV_ITEMS = [
    {
        title: 'Login',
        href: '/login'
    },
    {
        title: 'Register',
        href: '/register'
    }

]
export const USER_NAV_ITEMS = [
    {
        title: 'Dashboard',
        href: '/dashboard'
    }
   
]