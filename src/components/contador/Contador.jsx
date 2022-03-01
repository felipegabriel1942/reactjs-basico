import './Contador.css';

import React from 'react';
import Display from './Display';
import Botoes from './Botoes';
import Formulario from './Formulario';

class Contador extends React.Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  increment = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  decrement = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className='Contador'>
        <h2>Contador</h2>

        <div>
          <Display numero={this.state.numero}></Display>
          <Formulario
            passo={this.state.passo}
            setPasso={this.setPasso}
          ></Formulario>
        </div>
        <Botoes increment={this.increment} decrement={this.decrement}></Botoes>
      </div>
    );
  }
}

export default Contador;
