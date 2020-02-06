import React from 'react';
import './botao.css';

function Botao(props) {
    return (
        <li>
            <button
                className={props.estilo}>{props.valor}</button>
        </li>


    )
}

export default Botao;