import styled from "styled-components";

export const Wraper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Marvel&family=Ruda&family=Work+Sans:wght@100&display=swap');
    width: 100%;
    
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    
    button{
        width:90%;
        height:40px;
        border:0;
        outline: none;
        background-color: rgba(255, 255, 255,0.9);
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        transition: 0.5s;
        box-shadow: -5px -5px 5px rgba(255, 255, 255,0.3);
    }

    button:hover{
        transform:scale(1.03) ;
    }
    p{
        color:rgb(220,20,60);
        font-family: 'Marvel', sans-serif;
        font-size:18px;
        font-weight: bold;
    }
`