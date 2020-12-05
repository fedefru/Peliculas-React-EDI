import React from 'react';
import Gafas from '../imagenes/gafas.svg';

export const Header = () => {
    return <div className="header d-flex justify-content-center align-items-center">
        <h2 className="header-tittle text-center">Peliculon</h2>
        <img src={Gafas} alt="gafas-3d" className="logo-gafas"/>
    </div>
}

export default Header;