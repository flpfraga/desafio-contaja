import React, { useEffect, useState } from 'react'

import * as S from './styles'

import Header from '../Header'

import RenderComics from '../RenderComics'

import { useComic } from '../../context/Comic'

import { get } from '../../services/api'

import Footer from '../Footer'

import { Spinner } from "react-activity";

function Home({ }) {

    const { setComic } = useComic()
    const [nowComics, setNowComics] = useState([])
    useEffect(() => {
        let isActive = true
        async function getComics() {
            try {
                const comics = await get()
                if (isActive) {
                    setComic(comics.data.data.results)
                    setNowComics(comics.data.data.results)
                }
            }
            catch (error) {
                alert(error)
            }
            if (isActive) {

            }
        }
        getComics();

        return () => {

            isActive = false;

        }
    }, [])

    return (

        <S.Wraper>

            <Header />
            <RenderComics list={nowComics} title={"Últimos Lançamentos"} />
            <Footer />
        </S.Wraper>
    )
}




export default Home 