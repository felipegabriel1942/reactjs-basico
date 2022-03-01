import React from 'react';

const Botoes = (props) => {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
};

export default Botoes;
