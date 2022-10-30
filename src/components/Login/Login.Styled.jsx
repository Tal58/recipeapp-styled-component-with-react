import styled from "styled-components";

export const CoveredDiv = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  @media (max-width: 1000px) and (min-width: 701px) {
    margin: 15% 0%;
    font-size: 2rem;
  }
  @media (max-width: 700px) {
    margin: 15% 0%;
  }
  h1 {
    margin: 0%;
    color: #a1eeee;
  }
  h5 {
    margin: 1%;
    color: pink;
  }
`;

export const FormDiv = styled.div`
  height: 20vh;
  width: 25rem;
`;
export const FormDivUp = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15rem;
  margin: 2% auto;

  @media (max-width: 700px) {
    flex-direction: column;
  }
  input {
    margin: 2% 1%;
    @media (max-width: 1000px) and (min-width: 701px) {
      font-size: 1.5rem;
    }
    @media (max-width: 700px) {
      line-height: 1.5rem;
      width: 15rem;
    }
  }
`;
export const FormDivDown = styled.div`
  button {
    margin: 2%;
    padding: 1%;
    @media (max-width: 1000px) and (min-width: 701px) {
      font-size: 1.5rem;
    }
    :hover {
      color: white;
      background-color: #a1eeee;
      transform: scale(90%);
    }
  }
`;
export const BgImage = styled.img`
  width: 40%;
  @media (max-width: 1000px) and (min-width: 701px) {
      width:85%;
    }
  @media (max-width: 700px) {
    width: 75%;
  }
`;
