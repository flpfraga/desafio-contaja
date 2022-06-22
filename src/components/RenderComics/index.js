import React, { useEffect, useState } from 'react'

import * as S from './styles'

import ComicElement from '../ComicElement'

function RenderComics(props) {


    return (
        <S.Wraper>
            <h1>{props.title}</h1>
            <ul>
                {props.list.map((element, e) => {
                    return (
                        <li key={e}>
                            <ComicElement comic={element} />
                        </li>
                    )
                })}
            </ul>
        </S.Wraper>
    )
}
export default RenderComics