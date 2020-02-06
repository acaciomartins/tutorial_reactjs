import React from 'react';
import './calculadora.css';
import Botao from '../botao/botao'
import Visor from '../visor/visor'

function Calculadora() {
    return (
        <>
            <div className="visor">
                <Visor valor='1234' />
            </div>
            <div className="digitos">
                <ul>
                    <Botao valor='7'></Botao>
                    <Botao valor='8'></Botao>
                    <Botao valor='9'></Botao>
                    <Botao valor='+'></Botao>

                    <Botao valor='4'></Botao>
                    <Botao valor='5'></Botao>
                    <Botao valor='6'></Botao>
                    <Botao valor='-'></Botao>

                    <Botao valor='1'></Botao>
                    <Botao valor='2'></Botao>
                    <Botao valor='3'></Botao>
                    <Botao valor='.'></Botao>

                    <Botao valor='0'></Botao>
                    <Botao valor='C'></Botao>
                    <Botao valor='=' estilo='igual'></Botao>
                </ul>
            </div>
        </>
    )
}

export default Calculadora;
