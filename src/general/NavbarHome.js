import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import * as ROUTES from './Routes';
import { Genero } from '../componentes/AgregarPelicula';

const NavbarHome = () => {
    return <div>
        <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
            <Navbar.Brand href="#home">Peliculon</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to={ROUTES.INICIO}>Inicio</Nav.Link>
                    <Nav.Link as={Link} to={ROUTES.PELICULAS}>Peliculas</Nav.Link>
                    <Nav.Link as={Link} to={ROUTES.CONTACTO}>Contacto</Nav.Link>
                    <Nav.Link as={Link} to={ROUTES.AGREGAR}>Agregar</Nav.Link>

                    <NavDropdown as={Link} to={ROUTES.GENERO} title="Genero" id="collasible-nav-dropdown" >
                        {
                            Genero.map(gen =>{
                            return <NavDropdown.Item key={gen} as={Link} to={`/genero/${gen.toLowerCase()}`}>{gen}</NavDropdown.Item>
                            })
                        }
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Cerrar sesion</Nav.Link>
                    <Navbar.Text>
                        Usuario conectado: <a href="#login">Usuario</a>
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
}

export default NavbarHome;