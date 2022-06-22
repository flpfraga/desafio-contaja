import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'

import CartRender from './components/CartRender'

import DetailsComic from './components/DetailsComic/index.js'

import ErrorPage from './components/ErrorPage/index.js'

import SearchResults from './components/SearchResults'



function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/search" exact={true} element={<SearchResults />} />
                <Route path="/shopping-cart" element={<CartRender />} />
                <Route path="/details/:id" element={<DetailsComic />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp