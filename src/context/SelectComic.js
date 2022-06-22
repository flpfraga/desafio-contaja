import React, { useContext, useState, createContext, useEffect } from "react";

const SelectComicContext = createContext()

export default function SelectComicProvider({ children }) {

    const [selected, setSelected] = useState([])

    return (

        <SelectComicContext.Provider
            value={{
                selected,
                setSelected
            }}
        >
            {children}
        </SelectComicContext.Provider>
    )
}

export function useSelectComic() {
    const context = useContext(SelectComicContext)
    const { selected, setSelected } = context
    return { selected, setSelected }
}