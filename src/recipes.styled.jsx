import styled from 'styled-components';

export const CoveredDiv = styled.div`
flex-direction: column;
display: flex;
margin: 0;
padding: 0%;
width: 100%
`
export const SubCoveredDiv = styled.div`
padding: 2%;

`
export const HeaderDiv = styled.div`
background-color: #0fa2a9;
display: flex;
justify-content: space-between;
padding: 3%;
@media (max-width: 1000px) {
    flex-direction: column;
      margin: 0;
    }
    @media (max-width: 300px){
        margin: 0;

        width: 100vw;
        font-size: 0.5rem;

    } 
`
export const LeftHeaderDiv = styled.div`
margin: 0%;
padding: 0%;
`
export const RightHeaderDiv = styled.div`
padding-right: 7%;
@media (max-width: 1000px)  {
    padding: 0%;
   margin: auto;
   justify-content: center;
    }

display: flex;
h1{
    margin-right:5%;
    color: white;
    text-decoration: underline;
    :hover{
        cursor: pointer;
    }
}

`
export  const FormDiv = styled.div`
margin: 2%;
input{
    font-size: 1.5rem;
    border-radius: 0.4rem;
    @media (max-width: 1000px) {
      margin: 2%;
      font-size: 1rem;
    }
    @media (max-width: 300px){
      
        font-size: 0.6rem;

    } 

}
button{
    font-size: 1.5rem;
    border-radius: 0.4rem;
    :hover{
        color: red;
        background-color: white;
        transform: scale(90%);
    }
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
    @media (max-width: 300px){
      
      font-size: 0.5rem;

  } 
}
select{
    font-size: 1.6rem;
    border-radius: 0.4rem;
    margin: 0% 2%;
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
@media (max-width: 300px){
      
      font-size: 0.5rem;

  } 
}

`
export const ImageDiv = styled.div`
margin:auto;
`
export const CheffImage = styled.img`
width:100%;`




