import React from 'react';

import { Form, Button, Row, Col } from 'react-bootstrap';

const AgregarPelicula = () => {
    return <div className="mb-3">
        <h2 className="text-center my-3">Agregar una pelicula</h2>
        {/* <div className="d-flex justify-content-center"> */}
            <Row>
                <Col xs="0" sm="0" md="3" />
                <Col xs="12" sm="12" md="6">
                    <Form className="formulario-contacto w-100">
                        <Form.Group controlId="pelicula">
                            <Form.Label>Pelicula</Form.Label>
                            <Form.Control type="text" placeholder="Titanic" />
                        </Form.Group>
                        <Form.Group controlId="fecha">
                            <Form.Label>Fecha de lanzamiento</Form.Label>
                            <Form.Control type="date" placeholder="Gonzalez" />
                        </Form.Group>
                        <Form.Group controlId="puntaje">
                            <Form.Label>Puntaje</Form.Label>
                            <Form.Control type="number" placeholder="9.5" step="0.1" />
                        </Form.Group>
                        <Form.Group controlId="duracion">
                            <Form.Label>Duración <Form.Text muted>En minutos</Form.Text></Form.Label>
                            <Form.Control type="number" placeholder="125" step="1" />
                        </Form.Group>
                        <Form.Group controlId="genero">
                            <Form.Label>Genero</Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                {
                                    Genero.map(gene => {
                                        return <option key={gene}>{gene}</option>
                                    })
                                }
                            </Form.Control>

                        </Form.Group>
                        <Form.Group controlId="descripcion">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" placeholder="..." rows={4} />
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="imagen" label="Seleccione una imagen" />
                        </Form.Group>
                        <div className="d-flex justify-content-center aling-item-center">
                            <Button variant="primary" type="submit">
                                Enviar mensaje
                    </Button>
                        </div>
                    </Form>
                </Col>
                <Col xs="0" sm="0" md="3" />
            </Row>
        {/* </div> */}
    </div>
}

export const Genero = [
    'COMEDIA',
    'DRAMA',
    'TERROR',
    'ACCION',
    'ROMANTICA',
    'AVENTURA'
]

export default AgregarPelicula;