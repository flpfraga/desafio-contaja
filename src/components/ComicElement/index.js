import React, { Fragment, useEffect, useState } from 'react'

import ShoppingButton from '../ShoppingButton'

import CartButton from '../CartButton'

import * as S from './styles'

import { useNavigate } from 'react-router-dom'

import {useSelectComic} from '../../context/SelectComic'


function ComicElement(props, { children }) {

   
    const [comicImg, setComicImg] = useState('')
    const [comicTitle, setComicTitle] = useState('')
    const [comicPrice, setComicPrice] = useState(0.0)
    const navigate = useNavigate()
    const { setSelected } = useSelectComic()
    const { comic } = props

    useEffect(() => {
        setComicImg(comic.images[0].path + '.' + comic.images[0].extension)
        setComicPrice(comic.prices[0].price)
        setComicTitle(comic.title)
        

    }, [props])

    function detailsPage() {
        setSelected(comic.id)
        navigate('/details/'+comic.id)
    }
    return (

        <S.Wraper>
            {children}
            <S.WraperImg>
                <button
                    onClick={() => { detailsPage() }}
                >
                    <img src={comicImg} alt="Cover Img" />
                </button>
                <button
                    onClick={() => { detailsPage() }}
                >
                    <h3>{comicTitle}</h3>
                </button>
            </S.WraperImg>
            <S.WraperTxt>

                <h2>R$ {comicPrice}</h2>
                <ShoppingButton  comic={comic}>

                </ShoppingButton>
                <CartButton comic={comic}>

                </CartButton>
            </S.WraperTxt>

        </S.Wraper>
    )
}
export default ComicElement