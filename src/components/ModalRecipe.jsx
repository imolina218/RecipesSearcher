import { Modal, Image } from 'react-bootstrap'
import useRecipes from '../hooks/useRecipes'

const ModalRecipe = () => {

    const { modal, handleModalClick, recipe, loading } = useRecipes()

    const showIngredients = () => {
        let ingredients = []

        for(let i = 1; i < 16; i++) {
            if( recipe[`strIngredient${i}`] ) {
                ingredients.push(
                    <li key={[`strIngredient${i}`]}>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }

    return (
        !loading && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image 
                    src={recipe.strMealThumb}
                    alt={`Image recipe ${recipe.strMeal}`}
                />
                <Modal.Header>
                    <Modal.Title>{recipe.strMeal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Instructions</h2>
                        {recipe.strInstructions}
                        <h2>Ingredients and Quantities</h2>
                        {showIngredients()}
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalRecipe