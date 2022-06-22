import styled from 'styled-components'

export const Wraper = styled.div`

    width: 100px;
    height: 65px;
    display:flex ;
    justify-content: center;
    align-items:flex-end;
    transform: scaleX(-1);

    button{

        background-color:transparent;
        border:0;
        outline:none ;
        cursor: pointer;
    }
    .chat-box{
        transform: scaleX(-1);
        box-sizing: border-box;
        background-color: #FFF;
        border-radius:10px;
        position: absolute;
        top:10px;
        width:27px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items:center;
        background-color: red;
        color:#FFF
    }

    .chat-box:before{
        content:'';
        border-left: 2px solid transparent;
        border-right: 3px solid transparent;
        border-top: 8px solid red;
        position:absolute;
        top:17px;
        right: 9px;
        
    }

`