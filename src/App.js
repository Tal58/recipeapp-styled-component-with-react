

import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import Recipes from './components/Recipes';
import Ingredients from './components/Ingredients/Ingredients';
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import { BodyStyle } from "./components/Ingredients/Ingredients.styled";


function App() {
  const [check, setCheck] = useState(false);
  const control = () => {
    setCheck(!check)
  }
  // console.log(check);
  // useEffect(() => {
  // }, [control])
  return (

    < BodyStyle>
      <Routes>
        <Route path="/" element={<Login control={control} />} />
        {check && <Route path="/about" element={<About />} />}
        {/* <Route path="/recipes" element={<Recipes />} /> */}
        {check && <Route path="/recipes" element={<Recipes />} control={control} />}
        {check && <Route path="/recipes/:ingredients" element={<Ingredients />} />}
        <Route path="*" element={<Error />} />

      </Routes>
    </BodyStyle>

  );
}

export default App;
