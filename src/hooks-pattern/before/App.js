import React, { Component } from 'react';

class ContadorSinHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default ContadorSinHooks;
