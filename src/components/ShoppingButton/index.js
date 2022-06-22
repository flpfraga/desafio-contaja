import React from 'react'

import * as S from './styles'

import {useCartList} from '../../context/CartList'

import { useNavigate } from 'react-router-dom'

function ShoppingButton(props, {children}) {

    const {listComics, setListComics} = useCartList()
    const {comic} = props
    const navigate = useNavigate()

    function shopping(){
        
        var list = listComics
        list.push(comic)
        setListComics(list)
        navigate('/shopping-cart')
    }

    return (
        <S.Wraper>
            {children}
            <button
            onClick={()=>shopping()}
            >
                <p>
                   Comprar
                </p>
            </button>
        </S.Wraper>
    )
}
export default ShoppingButton