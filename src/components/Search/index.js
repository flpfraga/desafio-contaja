import React, { useEffect, useState } from 'react'

import * as S from './styles'

import { useComic } from '../../context/Comic'

import { getSearch } from '../../services/api'

import { useNavigate } from 'react-router-dom'

function Search({ children }) {

    const navigate = useNavigate()
    const [inputSearch, setInputSearch] = useState('')
    const { setTitle, setComic } = useComic()

    function listIds(list) {
        if (list.length === 0) {
            return ''
        }
        const listId = list.map((element) => {
            return element.id
        })
        
        return listId.join()
    }
    async function buscar() {
        if (inputSearch === "") {
            return
        }
        let isActive = true
        try {
            const comics = await getSearch(inputSearch)
            if (isActive) {
                const validsComics = comics.data.data.results.filter(comic => comic.images[0] !== undefined)
                setComic(validsComics)
                setTitle("Resultados para: " + inputSearch)
            }
        }
        catch (error) {
            console.log(error)
            alert(error.message)
        }
        navigate('/search?=' + inputSearch)
        return () => {
            isActive = false;
        }
    }
    return (
        <S.Wraper>
            {children}
            <input
                placeholder='Buscar por HQ. Ex: Avengers 2012'
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
            />
            <button
                onClick={() => { buscar() }}
            >
                Buscar
            </button>

        </S.Wraper>
    )
}
export default Search