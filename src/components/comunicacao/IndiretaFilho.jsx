import React from 'react';

const IndiretaFilho = (props) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={_ => props.onClick('Felipe', 33, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};

export default IndiretaFilho;
