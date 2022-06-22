import React from 'react'

import * as S from './styles'

import { useCartList } from '../../context/CartList'

function CartButton(props, { children }) {

    const { listComics, setListComics } = useCartList()
    const { comic } = props

    function addToCart() {
        var list = listComics
        list.push(comic)
        setListComics(list)
    }

    return (

        <S.Wraper>
            <button
                onClick={() => { addToCart() }}
            >
                <p>
                    Adicionar ao carrinho {children}
                </p>
            </button>
        </S.Wraper>

    )
}
export default CartButton