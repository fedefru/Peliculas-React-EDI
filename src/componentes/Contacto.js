import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const Contacto = () => {
    return <div>
        <h2 className="text-center my-3">Contactanos</h2>

        <Row>
            <Col xs="0" sm="0" md="3" />
            <Col xs="12" sm="12" md="6">
                <Form className="formulario-contacto">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo Electronico<span className="text-danger"> *</span></Form.Label>
                        <Form.Control type="email" placeholder="ejemplo@correo.com" />
                    </Form.Group>

                    <Form.Group controlId="nombre">
                        <Form.Label>Nombre<span className="text-danger"> *</span></Form.Label>
                        <Form.Control type="text" placeholder="Mateo" />
                    </Form.Group>
                    <Form.Group controlId="apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Gonzalez" />
                    </Form.Group>
                    <Form.Group controlId="mensaje">
                        <Form.Label>Mensaje<span className="text-danger"> *</span></Form.Label>
                        <Form.Control as="textarea" placeholder="..." rows={4} />
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

    </div>
}

export default Contacto;