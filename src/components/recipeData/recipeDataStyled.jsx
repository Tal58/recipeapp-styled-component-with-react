import styled from 'styled-components';


export const CoveredDiv = styled.div`
justify-content: space-evenly;
display: grid;
grid-template-columns: auto auto auto;

@media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      margin: auto;
      justify-content: center;
      align-items: center;
   
    }

`
export const Recipe = styled.div`
margin-bottom: 5%;
width: 20rem;
border: 2px solid red;
padding: 0%; 
@media (max-width: 300px) {
    width: 15rem;
}

:hover{
    transform: scale(90%);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

img{
    height: auto;
    width: 100%;
}

`