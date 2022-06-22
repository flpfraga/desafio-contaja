import React, { useContext, useState, createContext, useEffect } from "react";

import api, { publicKey, hash, get } from '../services/api'

const ComicContext = createContext()

export default function ComicProvider({ children }){
    const [comic, setComic] = useState([])
    const [selectComic, setSelectComic] = useState(0)
    const [title, setTitle] = useState('Últimas Edições')
    const [listComics, setListComics] = useState([])

    
    return (
        <ComicContext.Provider
            value={{
                comic,
                setComic,
                title,
                setTitle,
                selectComic,
                setSelectComic,
                listComics,
                setListComics
            }}
        >
            {children}
        </ComicContext.Provider>
    )
}

export function useComic() {
    const context = useContext(ComicContext)
    const {comic, setComic, title, setTitle} = context;
    return {comic, setComic,title, setTitle} 
}