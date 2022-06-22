import React, {createContext, useState, useContext, useEffect} from "react";

const CartListContext = createContext()

export default function CartListProvider({children}){

    const [listComics, setListComics] = useState([])
   
    return(
        <CartListContext.Provider
        value={{
            listComics, 
            setListComics
        }}
        >
            {children}
        </CartListContext.Provider>
    )

}

export function useCartList(){
    const context = useContext(CartListContext)
    const {listComics, setListComics} = context
    return {listComics, setListComics}
}