import styled from 'styled-components';

export const BodyStyle = styled.div`
margin: 0;
padding:0;
box-sizing: border-box;
text-align:center;
@media (max-width: 300px){
        margin: 0;
        padding: 0%;
        width: 100vw;
    } 
h3,h2{
    text-decoration: underline;
    color: red;
}`

export const CoveredDiv = styled.div`
margin: 1% 25% 2% 25%;
border: 2px solid red;
padding: 0 1%;
display: flex;
@media (max-width: 1000px) {
    
    margin: 2% auto;
    padding: 0%;
    flex-direction: column;
    align-items: center;
    width: 90%;
}
`

export const Headline = styled.h1`
padding-top: 2%;
margin: 0%;
`
export const Image = styled.img`
width: 55%;
@media (max-width: 1000px) {
    width: 90%;
}
`



export const LeftDiv = styled.div`
text-align: left;
width: 60%;
@media (max-width: 1000px) {
    text-align: center;
}
`

export const SubDiv = styled.div`
width: 40%;
font-size: 1rem;
@media (max-width: 1000px) {
    margin-bottom:2%;
}
`
export const HealthLabels = styled.div`
display: flex;
flex-wrap: wrap;
font-size: 1rem;
text-align: left;
p{
    margin: 1%;
}
`
export const ButtonIngredients = styled.button`
padding: 0.5%;
border-radius: 0.7rem;
font-size: 1.5rem;
color: red;
:hover{
    color: white;
    background-color: red;
    transform: scale(90%);
}`



