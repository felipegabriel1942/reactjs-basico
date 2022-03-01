import './Input.css';

import React, { useState } from 'react';

const Input = () => {
  const [valor, setValor] = useState('Inicial');

  function aoDigitar(e) {
    setValor(e.target.value);
  }

  return (
    <div className='Input'>
      <h2>{valor}</h2>
      <input value={valor} onChange={aoDigitar} />
      <input value={valor} readOnly />
      <input value={undefined} />
    </div>
  );
};

export default Input;
