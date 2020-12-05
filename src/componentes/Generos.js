import React from 'react';

const Generos = props => {
    const { id } = props.match.params;
    return <div>
        <h1>Generos {id}</h1>
    </div>
}

export default Generos;