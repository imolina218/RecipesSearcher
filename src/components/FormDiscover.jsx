import { Button, Form, Row, Col } from "react-bootstrap"
import useCategories from '../hooks/useCategories'
import useRecipes from '../hooks/useRecipes'

const Formulary = () => {

    const { categories, origins } = useCategories()
    const { consultDiscoverRecipe, search, setSearch } = useRecipes()

    const handleSubmit = e => {
        e.preventDefault()
        consultDiscoverRecipe(search)
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >

            <Row>
                <Row className='align-items-center'>
                    <Col>
                        <Form.Group className="mb-2">
                            <Form.Label htmlFor="nombre">Ingredient name</Form.Label>

                            <Form.Control
                                id="nombre"
                                type="text"
                                placeholder="Eg: Carrot, Chicken, etc"
                                name="name"
                                value={search.name}
                                onChange={e => setSearch({
                                    ...search,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </Form.Group>
                    </Col>
                    
                </Row>
                <Row className='justify-content-end' md={3}>
                    <Col>
                        <Button
                            className="text-uppercase w-100 p-1"
                            type="submit"
                        >
                            Search
                        </Button>
                    </Col>
                </Row>

                <Row className='align-items-center'>
                    <Col>
                        <Form.Group className="mb-2 mt-2">
                            <Form.Label htmlFor="category">Recipe Category</Form.Label>

                            <Form.Select
                                id="category"
                                name="category"
                                value={search.category}
                                onChange={e => setSearch({
                                    ...search,
                                    [e.target.name] : e.target.value
                                })}
                            >
                                <option value="">- Select Category -</option>
                                {categories.map(category=> (
                                    <option
                                        key={category.strCategory}
                                        value={category.strCategory}
                                    >
                                        {category.strCategory}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-end' md={3}>
                    <Col>
                        <Button
                            className="text-uppercase w-100 p-1"
                            type="submit"
                        >
                            Search
                        </Button>
                    </Col>
                </Row>

                <Row className='align-items-center'>
                    <Col>
                        <Form.Group className="mb-2 mt-2">
                            <Form.Label htmlFor="origin">Recipe Origin</Form.Label>

                            <Form.Select
                                id="origin"
                                name="origin"
                                value={search.origin}
                                onChange={e => setSearch({
                                    ...search,
                                    [e.target.name] : e.target.value
                                })}
                            >
                                <option value="">- Select Category -</option>
                                {origins.map(origin=> (
                                    <option
                                        key={origin.strArea}
                                        value={origin.strArea}
                                    >
                                        {origin.strArea}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-end' md={3}>
                    <Col>
                        <Button
                            className="text-uppercase w-100 p-1"
                            type="submit"
                        >
                            Search
                        </Button>
                    </Col>
                </Row>

            </Row>
        </Form>
    )
}

export default Formulary