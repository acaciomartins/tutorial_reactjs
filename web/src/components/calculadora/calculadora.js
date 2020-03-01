import React, { useState } from 'react';
import './calculadora.css';
import Botao from '../botao/botao'
import Visor from '../visor/visor'

function Calculadora() {
    const [numeroAnterior, setNumeroAnterior] = useState('');
    const [numeroVisor, setNumeroVisor] = useState('');
    const [operacao, setOperacao] = useState();
    const [isOperacaoSelecionado, setIsOperacaoSelecionado] = useState(false);
    const [isIgualSelecionado, setIsIgualSelecionado] = useState(false);


    // Operações - Inicio
    let operacoes = new Map();
    operacoes.set('+', operacaoSomar);
    operacoes.set('-', operacaoSubtrair);
    operacoes.set('/', operacaoDividir);
    operacoes.set('*', operacaoMultiplicar);

    function operacaoSomar(num1, num2) {
        return setNumeroVisor((num1 + num2).toFixed(2).toString());
    }

    function operacaoSubtrair(num1, num2) {
        return setNumeroVisor((num1 - num2).toFixed(2).toString());
    }

    function operacaoDividir(num1, num2) {
        return setNumeroVisor((num1 / num2).toFixed(2).toString());
    }

    function operacaoMultiplicar(num1, num2) {
        return setNumeroVisor((num1 * num2).toFixed(2).toString());
    }
    // Operações - Fim

    // Acoes - Inicio
    function selecionarDigito(valor) {
        if (isOperacaoSelecionado || isIgualSelecionado) {
            setNumeroVisor(valor.target.value);
            setIsOperacaoSelecionado(false);
            setIsIgualSelecionado(false);
        } else {
            setNumeroVisor(numeroVisor.concat(valor.target.value));
        }
    }

    function selecionarOperador(operacao) {
        setOperacao(operacao.target.value);
        setIsOperacaoSelecionado(true);
        setNumeroAnterior(numeroVisor);
    }

    function operacaoIgual() {
        if (numeroVisor.length === 0) {
            return;
        }
        setIsIgualSelecionado(true);
        let op = operacoes.get(operacao);
        op(parseFloat(numeroAnterior), parseFloat(numeroVisor));
    }

    function limpar() {
        setNumeroAnterior('');
        setNumeroVisor('');
        setOperacao('');
        setIsOperacaoSelecionado(false);
        setIsIgualSelecionado(false);
    }
    // Acoes - Fim

    return (
        <>
            <div className="visor">
                <Visor valor={numeroVisor} />
            </div>
            <div className="digitos">
                <ul>
                    <Botao valor='7' acao={selecionarDigito}></Botao>
                    <Botao valor='8' acao={selecionarDigito}></Botao>
                    <Botao valor='9' acao={selecionarDigito}></Botao>
                    <Botao valor='+' acao={selecionarOperador}></Botao>

                    <Botao valor='4' acao={selecionarDigito}></Botao>
                    <Botao valor='5' acao={selecionarDigito}></Botao>
                    <Botao valor='6' acao={selecionarDigito}></Botao>
                    <Botao valor='-' acao={selecionarOperador}></Botao>

                    <Botao valor='1' acao={selecionarDigito}></Botao>
                    <Botao valor='2' acao={selecionarDigito}></Botao>
                    <Botao valor='3' acao={selecionarDigito}></Botao>
                    <Botao valor='.' acao={selecionarDigito}></Botao>

                    <Botao valor='0' acao={selecionarDigito}></Botao>
                    <Botao valor='C' acao={limpar}></Botao>
                    <Botao valor='=' estilo='igual' acao={operacaoIgual}></Botao>
                </ul>
            </div>
        </>
    )
}

export default Calculadora;
