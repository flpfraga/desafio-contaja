import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import * as S from './styles'

function CartElement(props,) {
    const { element } = props
    const [comicImg, setComicImg] = useState('')
    const [comicTitle, setComicTitle] = useState('')
    const [comicPrice, setComicPrice] = useState('')
    const [comicId, setComicId] = useState()
    const navigate = useNavigate()
    const [comicQnt, setComicQnt ] = useState(1)

    useEffect(() => {
        setComicImg(element.comic.images[0].path + '.' + element.comic.images[0].extension)
        setComicPrice(element.comic.prices[0].price)
        setComicTitle(element.comic.title)
        setComicQnt(element.qnt)
        setComicId(element.comic.id)
    }, [])

    function calcPrice() {
        return comicQnt * comicPrice
    }
    return (
        <S.Wraper>
          
            <button
                onClick={() => { navigate('/details/' + comicId) }}
            >
                <img src={comicImg} alt="Cover Img" />
            </button>
            <div className='frame-description'>
                <button
                    onClick={() => { navigate('/details/' + comicId) }}
                >
                    <h3>{comicTitle}</h3>
                </button>
            </div>

            <h3>
                {comicQnt}
            </h3>
            <div className='frame-price'>
                <h3>
                    R$ {calcPrice()}
                </h3>
            </div>
        </S.Wraper>
    )
}
export default CartElement