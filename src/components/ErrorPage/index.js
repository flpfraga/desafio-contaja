import React from 'react'

import * as S from './styles'

import Header from '../Header'
import Footer from '../Footer'

function ErrorPage() {

    return (
        <S.Wraper>
            <Header />
            <div className='container'>
                <h1>
                    404
                </h1>
                <h2>
                    Not found page!
                </h2>
            </div>
            <Footer />
        </S.Wraper>
    )
}
export default ErrorPage