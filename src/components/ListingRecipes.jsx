import { Row, Alert } from 'react-bootstrap'
import useRecipes from "../hooks/useRecipes"
import Recipe from './Recipe'

const ListingRecipes = () => {

    const { recipes } = useRecipes()

    return (
        <Row className='mt-5'>
            { recipes === null
                ?
                <Alert variant="danger" className='text-center'>
                    No Results
                </Alert>
                :
                recipes.map(recipe => (
                    <Recipe 
                        key={recipe.idMeal}
                        recipe={recipe}
                    />
                ))
            }
        </Row>
    )
}

export default ListingRecipes