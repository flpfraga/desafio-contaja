import React, { useEffect, useState } from 'react'

import * as S from './styles'

import { useCartList } from '../../context/CartList'

import CartElement from '../CartElement'

import Header from '../Header'

import Footer from '../Footer'

function CartRender() {


    const { listComics } = useCartList()
    const [comicsCart, setComicsCart] = useState([])
    const [total, setTotal] = useState(0.0)

    useEffect(() => {
        const noRepeatList = []
        const tamList = listComics.length
        noRepeatList.push({ qnt: 1, comic: listComics[0] })
        for (let c = 1; c < tamList; c++) {
            const tamList = noRepeatList.length
            let isRepeat = false
            for (let k = 0; k < tamList; k++) {
                if (noRepeatList[k].comic.id === listComics[c].id) {
                    noRepeatList[k].qnt++
                    isRepeat = true
                }

            }
            if (!isRepeat) {
                noRepeatList.push({ qnt: 1, comic: listComics[c] })
            }
        }
        var priceTotal = 0.0
        noRepeatList.map((element, _) => {
            priceTotal += element.comic.prices[0].price
        })
        setTotal(priceTotal.toFixed(2))
        setComicsCart(noRepeatList)


    }, [])

    function renderCartElement() {
        return (
            <>
                {comicsCart.map((element, e) => {

                    return (
                        <CartElement element={element} key={e} />
                    )
                })}
                <div className='price-text'>

                    <h1>Total: R$ {total}</h1>
                </div>

            </>
        )
    }
    return (
        <S.Wraper>
            <Header />
            <h1>
                Carrinho de compras
            </h1>
            <h2>
                Confira os itens em seu carrinho antes de prosseguir
            </h2>
            <div className='container-cart-element'>
                {listComics.length ? (
                    renderCartElement()
                ) : (
                    <h2>Você ainda não tem nenhum item no seu carrinho!</h2>
                )
                }

            </div>
            <Footer />
        </S.Wraper>
    )
}
export default CartRender