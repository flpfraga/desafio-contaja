import React, { useEffect, useState } from 'react'

import * as S from './styles'

import logoImg from '../../assets/images/logo-marvel.png'

import Search from '../Search'

import ShoppingCart from '../ShoppingCart'

import { useNavigate } from 'react-router-dom'


function Header() {
    const navigate = useNavigate()
   
    
    function goHome() {
        navigate('/')
    }
    return (

        <S.Wraper>
            <button className='logo-button'
                onClick={() => { goHome() }}
            >
                <img className='logo-img' src={logoImg} alt="Logo" />
            </button>
            <Search />
            <ShoppingCart />
        </S.Wraper>

    )
}
export default Header