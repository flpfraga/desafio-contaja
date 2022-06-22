import React, { useEffect, useState } from 'react'

import * as S from './styles'

import Header from '../Header'

import { useComic } from '../../context/Comic'

import { useSelectComic } from '../../context/SelectComic'

import ShoppingButton from '../ShoppingButton'

import CartButton from '../CartButton'

import { getId } from '../../services/api'

import { useNavigate, useParams } from 'react-router-dom'

import Footer from '../Footer'

function DetailsComic({ children }) {

    const { id } = useParams()
    const { comic } = useComic()
    const { selected, setSelected } = useSelectComic()
    const [comicImg, setComicImg] = useState('')
    const [comicTitle, setComicTitle] = useState('')
    const [comicDescription, setComicDescription] = useState('')
    const [comicPrice, setComicPrice] = useState(0.0)
    const [comicSelected, setComicSelected] = useState(0.0)
    const navigate = useNavigate()


    useEffect(() => {

        async function getComicId() {
            try {
    
                const comicId = await getId(parseInt(id))
                if (comicId) {
                    setSelected(comicId)
                    setComicImg(comicId.images[0].path + '.' + comicId.images[0].extension)
                    setComicPrice(comicId.prices[0].price)
                    setComicTitle(comicId.title)
                    setComicDescription(comicId.description)
                    setComicSelected(comicId)
                }
            } catch (error) { 
                alert("Erro ao buscar o HQ solicitado")
                navigate('/error-page')
            }
        }
        if (comic === undefined && selected === undefined || comic)  {
            getComicId()
        }
        else {
            const selectedComic = comic.find(element => element.id === selected)
            setComicImg(selectedComic.images[0].path + '.' + selectedComic.images[0].extension)
            setComicPrice(selectedComic.prices[0].price)
            setComicTitle(selectedComic.title)
            setComicDescription(selectedComic.description)
            setComicSelected(selectedComic)
            
        }
    }, [])

    return (


        <S.Wraper>
            <Header />
            {children}
            <div className='container'>
                <img className='cover-img' src={comicImg} alt='Cover Image' />
                <div className='infomations'>
                    <h1>R$ {comicPrice}</h1>
                    <h2>{comicTitle}</h2>
                    <h3>Sobre:</h3>
                    <h3>{comicDescription}</h3>
                    <div className='container-buttons'>
                        <ShoppingButton comic={comicSelected} />
                        <CartButton comic={comicSelected} />
                    </div>
                </div>
            </div>
            <Footer />
        </S.Wraper>

    )
}
export default DetailsComic