import React from 'react';

import DiretaFilho from './DiretaFilho';

const DiretaPai = (props) => {
  return (
    <div>
      <DiretaFilho nome='Filho 1 ' idade={20} trabalha={true}></DiretaFilho>
      <DiretaFilho nome='Filho 2 ' idade={15} trabalha={false}></DiretaFilho>
    </div>
  );
};

export default DiretaPai;
