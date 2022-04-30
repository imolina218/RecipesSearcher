import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CategoriesContext = createContext()

const CategoriesProvider = ({children}) => { 

    const [categories, setCategories] = useState([])
    const [origins, setOrigin] = useState([])

    const obtainCategories = async () => {
        try {
            const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"

            const { data } = await axios(url)
            
            setCategories(data.meals);
        } catch (error) {
            console.log(error);
        }
    }

    const obtainOrigins = async () => {
        try {
            const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list"

            const { data } = await axios(url)
            
            setOrigin(data.meals);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtainCategories()
        obtainOrigins()
    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories,
                origins
            }}
        >
            {children}
        </CategoriesContext.Provider>
    )
}

export {
    CategoriesProvider
}
export default CategoriesContext