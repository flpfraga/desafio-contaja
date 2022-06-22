import React, { useEffect, useState } from 'react'

import * as S from './styles'

import Header from '../Header'

import RenderComics from '../RenderComics'

import { useComic } from '../../context/Comic'

import Footer from '../Footer'

function SearchResults() {

    const { comic, title } = useComic()
    const [nowComics, setNowComics] = useState([])
    return (

        <S.Wraper>
            <Header />
            <RenderComics list={comic} title={title} />
            <Footer />
        </S.Wraper>


    )
}
export default SearchResults 