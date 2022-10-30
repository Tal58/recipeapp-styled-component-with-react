import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RecipeData from "./recipeData/recipeData";
import { FaChessKing } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  CoveredDiv,
  FormDiv,
  HeaderDiv,
  LeftHeaderDiv,
  RightHeaderDiv,
  SubCoveredDiv,
  CheffImage,
  ImageDiv,
} from "../recipes.styled";

function Recipes({ control }) {
  const types = ["breakfast", "lunch", "dinner", "snack", "teatime"];
  const [foodName, setFoodName] = useState("");
  const [mealType, setMealType] = useState();
  const [foodData, setFoodData] = useState();
  const [check, setCheck] = useState(false);
  const [checkImage, setCheckImage] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    const url = `https://api.edamam.com/search?q=${foodName}&app_id=100cedcc&app_key=b8d0abfb489f63edadef165b1afffa04&mealType=${mealType}`;
    try {
      const data = await axios(url);
      console.log(data);
      setFoodData(data);
      setCheck(true);
      setCheckImage(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecipe = (e) => {
    e.preventDefault();
    getData();
  };
  useEffect(() => {});
  const checkControl = () => {
    control();
  };

  return (
    <CoveredDiv>
      <HeaderDiv>
        <LeftHeaderDiv>
          <h1>
            <FaChessKing />{" "}
            <NavLink
              to=""
              style={{ color: "white" }}
           
            >
              Recipe
            </NavLink>
          </h1>
        </LeftHeaderDiv>
        <RightHeaderDiv>
          <h1 onClick={() => navigate(`/about`)}>About</h1>
          <h1>
            <a
              href="https://github.com/Tal58"   
              style={{ color: "white" }}        
            >
              Github
            </a>
          </h1>
          <h1>
            <NavLink
              to="/"
              onClick={checkControl}
              style={{ color: "white" }}
            >
              Logout
            </NavLink>
          </h1>
        </RightHeaderDiv>
      </HeaderDiv>
      <SubCoveredDiv>
        <h2>Please Enter Your Food and Its Type</h2>
        <FormDiv>
          <form onSubmit={getRecipe}>
            <input
              type="text"
              id="title"
              placeholder="Please enter here..."
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
            />
            <select onClick={(e) => setMealType(e.target.value)} required>
              {types.map((item, key) =>
                key === 0 ? (
                  <option key={key} value={mealType}>
                    {item}
                  </option>
                ) : (
                  <option key={key}>{item}</option>
                )
              )}
            </select>
            <button type="submit">search</button>
          </form>
        </FormDiv>
        <RecipeData foodData={foodData} check={check} />
      </SubCoveredDiv>
      {checkImage && (
        <ImageDiv>
          <CheffImage src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0845c232253239.56766f2d063c9.gif" />
        </ImageDiv>
      )}
    </CoveredDiv>
  );
}

export default Recipes;
