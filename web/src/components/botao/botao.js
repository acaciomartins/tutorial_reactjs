import React from 'react';
import './botao.css';

function Botao(props) {
    return (
        <li className={props.estilo}>
            <button
                value={props.valor}
                className={`digito ${props.estilo}`}
                onClick={props.acao}>
                {props.valor}
            </button>
        </li>


    )
}

export default Botao;