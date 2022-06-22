import styled from 'styled-components'

export const Wraper = styled.div`

    padding-top:10px;
    width: 80%;
    height: 50px;
    background-color: #000;
    display: flex;
    align-items:center;
    justify-content: center;

    button{ 
        width: 100px;
        height:40px;
        border: 0;
        outline: none;
        justify-content:center ;
        align-items: center;
        background: red;
        border-radius: 20px;
        color:#FFF;
        font-weight: bold;
        /* font-family: 'Marvel', sans-serif; */
        font-size: 20px;
        margin-left: 20px;
        transition: 0.3s;
    };

    button:hover{
        transform: scale(1.05);
       
    }

    input{
        width: 800px;
        height:40px;
        border: 0;
        outline: none;
        justify-content:center ;
        align-items: center;
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        padding-left:30px;
        color: red;
        font-weight:bold ;
        /* font-family: 'Marvel', sans-serif; */
        font-size: 20px;
        transition: 0.5s;
    }

    input::placeholder{
        color:red;
        transition: 0.5s;
        /* font-family: 'Marvel', sans-serif; */
        font-size: 20px;
    }
    @media(max-width:1000px){
        width: 80%;
        input{
            width: 400px;
        }
    }
    @media (max-width:850px){
        button{
            width: 80px;
            font-weight: lighter;
        }
        input{
            width:300px;
            font-size: 13px;
            font-weight:lighter;
            
        }
        
    }

`