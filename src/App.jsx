import './App.css';
import React from 'react';

import ParOrImpar from './components/condicional/ParOuImpar';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Sorteio from './components/sorteio/Sorteio';

const App = () => (
  <div className='App'>
    <div className='Cards'>
      <Card titulo='#12 - Sorteio' color='#FA6900'>
        <Sorteio qtde={8}></Sorteio>
      </Card>
      <Card titulo='#11 - Contador' color='#FA6900'>
        <Contador numeroInicial={100}></Contador>
      </Card>
      <Card titulo='#10 - Componente Controlado' color='#FA6900'>
        <Input></Input>
      </Card>
      <Card titulo='#09 - Comunicação Indireta' color='#FA6900'>
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo='#08 - Comunicação Direta' color='#FA6900'>
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo='#07 - Renderização Condicional' color='#FA6900'>
        <ParOrImpar numero={21}></ParOrImpar>
        <UsuarioInfo usuario={{ nome: 'Felipe' }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: 'pinheiro@yahoo.com' }}></UsuarioInfo>
      </Card>

      <Card titulo='#06 - Desafio Repetição' color='#FA6900'>
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo='#05 - Repetição' color='#FA6900'>
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo='#04 - Componente com Filhos' color='#E94C6F'>
        <Familia sobrenome='Pinheiro'>
          <FamiliaMembro nome='Felipe'></FamiliaMembro>
          <FamiliaMembro nome='Eduardo'></FamiliaMembro>
          <FamiliaMembro nome='Paçoca'></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo='#03 - Desafio Aleatório' color='#FA6900'>
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>

      <Card titulo='#02 - Primeiro' color='#E94C6F'>
        <Primeiro></Primeiro>
      </Card>

      <Card titulo='#01 - Com Parâmetro' color='#588C73'>
        <ComParametro
          titulo='Situação do Aluno'
          aluno='Felipe'
          nota='9.5'
        ></ComParametro>
      </Card>
    </div>
  </div>
);

export default App;
