import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai = (props) => {
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [trabalha, setTrabalha] = useState(false);

  function fornecerInformacoes(nome, idade, trabalha) {
    setNome(nome);
    setIdade(idade);
    setTrabalha(trabalha);
  }

  return (
    <div>
      <div>
        <span>{nome} |</span>
        <span>{idade} |</span>
        <span>{trabalha ? 'Verdadeiro' : 'Falso'}</span>
      </div>
      <IndiretaFilho onClick={fornecerInformacoes}></IndiretaFilho>
      <button onClick={(_) => fornecerInformacoes('?', 0, false)}>
        Limpar
      </button>
    </div>
  );
};

export default IndiretaPai;
