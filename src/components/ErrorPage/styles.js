import styled from "styled-components";

export const Wraper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Marvel&family=Ruda&family=Work+Sans:wght@100&display=swap');
    width: 100%;
    height:100vh;
    background-color:#fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction:column ;

    .container{
        width: 900px;
        height:600px;
        background-color:#000;
        display: flex;
        flex-direction:column ;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        margin: 50px;
    }
    h1{
        font-family: 'Marvel', sans-serif;
        font-weight: bold;
        font-size: 85px;
        color: #FFF;
    }

    h2{
        font-family: 'Marvel', sans-serif;
        font-size: 60px;
        color: #FFF;
    }


`