import styled from 'styled-components'



export const Wraper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Marvel&family=Ruda&family=Work+Sans:wght@100&display=swap');
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    

  
    h1{
        color:#000;
        font-family: 'Marvel', sans-serif;
        font-size:35px ;
        padding-left:35px ;
    }

    ul{
        width: 95%;
        height: auto;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        padding-left: 20px;
        padding-right: 20px;
        transition: 0.3s;
        flex-wrap:wrap;
        margin-bottom: 80px;
    }


    li{
        width: 270px;
        height: 650px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-left: 5px;
        background-color: #000;
        margin-bottom: 15px;
    }
 


   



    

`