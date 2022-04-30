import { Container, Row, Col } from 'react-bootstrap'
import FormDiscover from './components/FormDiscover'
import FormRecipe from './components/FormRecipe'
import ListingRecipes from './components/ListingRecipes'
import ModalRecipe from './components/ModalRecipe'
import { CategoriesProvider } from './context/CategoriesProvider'
import { RecipesProvider } from './context/RecipesProvider'

function App() {

  return (
    <CategoriesProvider>
      <RecipesProvider>
        <header className="py-5">
          <h1>Recipes Searcher</h1>
        </header>

        <Container className='mt-2'>
          <Row className='p-5 bg-light shadow'>
            <Col className='mb-4' md={5}>
              <h2 className='mb-4'>Search by Recipe Name</h2>
              <FormRecipe />
            </Col>

            <Col md={1}>
            </Col>
            
            <Col md={6}>
              <h2 className='mb-4'>Discover Recipes</h2>
              <FormDiscover />
            </Col>
          </Row>
          

          <ListingRecipes />

          <ModalRecipe />
        </Container>
      </RecipesProvider>
    </CategoriesProvider>
  )
}

export default App
