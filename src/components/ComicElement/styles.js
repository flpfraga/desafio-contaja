import styled from 'styled-components'


export const Wraper = styled.div`
 width: 320px;
 height: 600px;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: flex-start;
 
`
export const WraperImg = styled.div`
 width: 270px;
 height: 75%;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 
 img{
    width: 270px;
    height: 80%;
    transition: 0.4s;
    box-shadow: -20px -10px 10px rgba(255, 255, 255,0.3);
}

img:hover{
    transform: translateY(-10px);
    
}


h3{
    color:#FFF;
    font-family: 'Marvel', sans-serif;
    font-size:15px;
}

button{
    background:transparent;
    border:0;
    outline:none ;
    cursor: pointer;
    }

`

export const WraperTxt = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Marvel&family=Ruda&family=Work+Sans:wght@100&display=swap');
width: 250px;
 height: 20%;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: flex-start;
 
 
 
 h2{
    color:#FFF;
    font-family: 'Marvel', sans-serif;
    font-size:25px;
    font-weight: lighter;
}

h3{
    color:#FFF;
    font-family: 'Marvel', sans-serif;
    font-size:13px;
    text-align:center;
}


`

