import React, { useEffect, useState } from 'react'

import * as S from './styles'

import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useCartList } from '../../context/CartList'

import { useNavigate } from 'react-router-dom'

function ShoppingCart({children}) {

    const { listComics } = useCartList()
    const navigate = useNavigate()

    return (

        <S.Wraper>
            {children}
            {listComics.length > 0 ?
                (
                    <div className='chat-box'>
                        {listComics.length}
                    </div>
                ) : (
                    <></>
                )}

            <button
            onClick={()=>{navigate('/shopping-cart')}}
            >
                <AiOutlineShoppingCart size={30} color="#FFF" />
            </button>
        </S.Wraper>

    )
}
export default ShoppingCart