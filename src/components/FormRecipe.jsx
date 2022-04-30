import { useState } from 'react'
import { Button, Form, Row, Col } from "react-bootstrap"
import useRecipes from '../hooks/useRecipes'

const Formulary = () => {

    const [search, setSearch] = useState({
        name: ""
    })
    const { consultRecipe } = useRecipes()

    const handleSubmit = e => {
        e.preventDefault()
        consultRecipe(search)
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >

            <Row>
                <Col med={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre">Recipe Name</Form.Label>

                        <Form.Control
                            id="nombre"
                            type="text"
                            placeholder="Eg: Burek, Chivito uruguayo, etc"
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

            <Row className="justify-content-end">
                <Col md={5}>
                    <Button
                        className="text-uppercase w-100 p-1"
                        type="submit"
                    >
                        Search Recipe
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulary