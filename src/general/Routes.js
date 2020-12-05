import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Inicio from '../componentes/Inicio';
import Peliculas from '../componentes/Peliculas';
import Contacto from '../componentes/Contacto';
import AgregarPelicula from '../componentes/AgregarPelicula';
import Generos from '../componentes/Generos';
import NavbarHome from './NavbarHome';

export const INICIO = '/';
export const PELICULAS = '/peliculas';
export const CONTACTO = '/contacto';
export const AGREGAR = '/agregar-pelicula';
export const GENERO = '/genero/:id';

const Routes = () => {

    return <BrowserRouter>
        <Route path='/' component={NavbarHome}></Route>
        <Route exact path={INICIO} component={Inicio}></Route>
        <Route exact path={PELICULAS} component={Peliculas}></Route>
        <Route exact path={CONTACTO} component={Contacto}></Route>
        <Route exact path={AGREGAR} component={AgregarPelicula}></Route>
        <Route exact path={GENERO} component={Generos}></Route>
    </BrowserRouter>

}

export default Routes;