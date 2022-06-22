import styled from "styled-components";

export const Wraper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Marvel&family=Ruda&family=Work+Sans:wght@100&display=swap');
    width: 1000px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    border: 1px solid #FFF;
    font-family: 'Marvel', sans-serif;

img{
    width: 80px;
    resize: both;
    border: 3px solid #000;
}

.frame-description{
    width: 500px;
}

h3{
    font-size: 35px;
    color:#FFF;
}

button{
    cursor: pointer;
    background: transparent;
    outline:none;
    border: 0;
}

.frame-price{
    width: 200px;
}

@media (max-width:1010px){
    width: 800px;
    .frame-description{
        width: 400px;
    }

    h3{
    font-size: 30px;
    }

    .frame-price{
    width: 120px;
    }
}
@media (max-width:810px){
    width: 500px;
    .frame-description{
        width: 250px;
    }

    h3{
    font-size: 23px;
    }

    .frame-price{
    width: 80px;
    }
}


`