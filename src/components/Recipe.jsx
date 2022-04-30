import { Col, Card, Button } from 'react-bootstrap'
import useRecipes from '../hooks/useRecipes'

const Recipe = ({recipe}) => {

    const { handleModalClick, handleRecipeIdClick } = useRecipes()

    return (
        <Col md={6} lg={3}>
            <Card className="mb-4">
                <Card.Img 
                    variant="top"
                    src={recipe.strMealThumb}
                    alt={`Image of ${recipe.strMeal}`}
                />

                <Card.Body>
                    <Card.Title>{recipe.strDrink}</Card.Title>

                    <Button
                        variant='warning'
                        className='w-100 text-uppercase mt-2'
                        onClick={ () => {
                            handleModalClick()
                            handleRecipeIdClick(recipe.idMeal)
                        }}
                    >
                        See Recipe
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Recipe