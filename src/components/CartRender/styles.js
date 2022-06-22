import styled from "styled-components";

export const Wraper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Marvel&family=Ruda&family=Work+Sans:wght@100&display=swap');
    width: 100%;
    min-height:100vh;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: auto;
    
    *{
        font-family: 'Marvel', sans-serif;
    }

    .container-cart-element{
        width: 100%;
        height:auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 80px;
    }

    h1{
        font-size: 60px;
        font-weight: bold;
        height: 20px;
        
    }
    h2{
        font-size: 30px;
        color: #000;
        width: 90%;
        height: 100px;
        text-align:center ;
        padding-top: 50px;
        height: 20px;
    }

    .price-text{
        width: 60%;
        height: 50px;
        display: flex;
        justify-content: flex-end   ;
        align-items: center;
    }

`