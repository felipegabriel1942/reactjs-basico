import './TabelaProdutos.css';
import React from 'react';

import produtos from '../../data/produtos';

const TabelaProdutos = (props) => {
  const tableBody = produtos.map((produto, i) => {
    return (
      <tr className={i % 2 === 0 ? 'Par' : 'Impar'} key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
      </tr>
    );
  });

  return (
    <div className='TabelaProdutos'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
