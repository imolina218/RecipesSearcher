import { useState, useEffect, createContext, Alert } from "react";
import axios from "axios";

const RecipesContext = createContext()

const RecipesProvider = ({children}) => { 

    const [search, setSearch] = useState({
        name: "",
        category: "",
        origin: ""
    })
    const [recipes, setRecipes] = useState([])
    const [modal, setModal] = useState(false)
    const [recipeId, setRecipeId] = useState(null)
    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const obtainRecipe = async () => {
            if(!recipeId) return

            try {
                const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`

                const { data } = await axios(url)
                setRecipe(data.meals[0]);
            } catch (error) {
                console.log(error);
            }
            setLoading(false)
        }
        obtainRecipe()
    }, [recipeId])
    
    const consultDiscoverRecipe = async entries => { 

        let name = "&i=" + entries.name
        let category = "&c=" + entries.category
        let origin = "&a=" + entries.origin

        try {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${entries.name.length < 2 ? "" : name}${entries.category.length < 2 ? "" : category}${entries.origin.length < 2 ? "" : origin}`
            if(url === "https://www.themealdb.com/api/json/v1/1/filter.php?") {
                return
            }
            const { data } = await axios(url)
            setRecipes(data.meals);
            setSearch({
                name: "",
                category: "",
                origin: ""
            })
        } catch (error) {
            console.log(error);
        }
    }

    const consultRecipe = async entries => {
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${entries.name}`

            const { data } = await axios(url)
            setRecipes(data.meals);
        } catch (error) {
            console.log(error);
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleRecipeIdClick = id => {
        setRecipeId(id)
    }

    return (
        <RecipesContext.Provider
            value={{
                setSearch,
                search,
                consultDiscoverRecipe,
                consultRecipe,
                recipes,
                handleModalClick,
                modal,
                handleRecipeIdClick,
                recipe,
                loading
            }}
        >
            {children}
        </RecipesContext.Provider>
    )
}

export {
    RecipesProvider
}
export default RecipesContext