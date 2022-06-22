import styled from "styled-components";


export const Wraper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Marvel&family=Ruda&family=Work+Sans:wght@100&display=swap');
    width: 100%;
    min-height:100vh;
    display: flex;
    justify-content:space-between;
    align-items:center;
    flex-direction: column;
    position:relative;
    *{
        font-family: 'Marvel', sans-serif;
    }
    .container{
        width: 1300px;
        height: auto;
        display: flex;
        justify-content:space-around ;
        align-items:center;
        background:#000 ;
        margin-bottom: 80px;
    }

    .infomations{
        width: 47%;
        height: 95%;
        background-color: #FFF;
        display:flex ;
        flex-direction: column;
        justify-content: space-between;
        align-items:flex-start ;
        
    }

    h1{
        font-size: 50px;
        font-weight: bold;
        color: #000;
        font-family: 'Marvel', sans-serif;
    }
    h2{
        font-size: 35px;
        font-weight: bold;
        color: #000;
        font-family: 'Marvel', sans-serif;
    }
    h3{
        font-size: 20px;
        color: #000;
        font-family: 'Marvel', sans-serif;
    }

    .cover-img{
        width: 380px;
        display:flex ;
        justify-content:center ;
        align-items:center;
        border: 2 solid #FFF;
        color:#FFF;
    }

    .container-buttons{
        width:100%;
        height: 100px;
        justify-content: center;
        align-items:flex-end ;
        background-color:#000 ;
    }
    @media(max-width:1150px){
        .container{
            width: 800px;
        }
    }
    @media(max-width:950px){
        flex-direction:column;
        justify-content:flex-start ;
        .container{
            width: 650px;
            height: auto;
            flex-direction: column;
            justify-content:flex-start;

            
        }
        .infomations{
            width: 480px;
            margin-top: 15px;
        }
        .container-buttons{
            display:flex;
            flex-direction: column  ;
            height: 150px;
            align-items: center;
        }
        
    }

`