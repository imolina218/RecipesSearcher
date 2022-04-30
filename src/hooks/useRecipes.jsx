import { useContext } from "react";
import RecipesProvider from "../context/RecipesProvider";

const useRecipes = () => {
    return useContext(RecipesProvider)
}

export default useRecipes