import { useLocation, useNavigate } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import {
  ButtonIngredients,
  CoveredDiv,
  Headline,
  HealthLabels,
  Image,
  LeftDiv,
  SubDiv,
} from "./Ingredients.styled";

function Ingredients() {
  const { state: recipe } = useLocation();
  const navigate = useNavigate();
  console.log(recipe);
  return (
    <>
      <Headline>{recipe["label"]}</Headline>
      <CoveredDiv>
        <LeftDiv>
          <h2>Ingredients:</h2>
          {recipe["ingredients"].map((item, key) => {
            return (
              <p key={key}>
                {item["text"]} {item["weight"].toFixed(2)}gr
              </p>
            );
          })}
          <Image src={recipe["image"]} />
        </LeftDiv>

        <SubDiv>
          <h2>{recipe["calories"].toFixed(2)} Calories</h2>
          <p>
            <b>Cuisine Type:</b>{" "}
            {recipe["cuisineType"][0][0].toUpperCase() +
              recipe["cuisineType"][0].slice(1)}
          </p>
          <p>
            <b>Total Weight:</b> {recipe["totalWeight"].toFixed(2)}
          </p>
          <p>
            <b>
              Cautions
              <CgDanger />{" "}
            </b>
            {recipe["cautions"].length === 0
              ? "No cautions :)"
              : recipe["cautions"]}
          </p>
          <h3>Health Labels</h3>
          <HealthLabels>
            {recipe["healthLabels"].map((item, key) => {
              return (
                <p key={key}>
                  <b>{key + 1}: </b>
                  {item}{" "}
                </p>
              );
            })}
          </HealthLabels>
        </SubDiv>
      </CoveredDiv>
      <ButtonIngredients onClick={() => navigate(-1)}>Back</ButtonIngredients>
    </>
  );
}

export default Ingredients;
