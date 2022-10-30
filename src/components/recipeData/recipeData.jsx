import React from "react";
import { useNavigate } from "react-router-dom";
import { CoveredDiv, Recipe } from "./recipeDataStyled";

function RecipeData({ foodData, check }) {
  const navigate = useNavigate();
  //   console.log(foodData["data"]["hits"]);
  return (
    check && (
        <CoveredDiv>
        {foodData["data"]["hits"].map((item, key) => {
          const { recipe } = item;
          console.log(recipe);

          return (
           
              <Recipe
                key={key}
                onClick={() =>
                  navigate(`/Recipes/${recipe["label"]}`, { state: recipe })
                }
              >
                <p><b>Meal Name:</b> {recipe["label"]}</p>
                <p><b>Calories:</b> {`${recipe["calories"].toFixed(2)}`}</p>
                <img alt="" src={recipe["image"]} />
              </Recipe>
           
          );
        })}
      </CoveredDiv>
    )
  );
}

export default RecipeData;
