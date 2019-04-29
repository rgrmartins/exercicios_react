import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: 0
  };

  maisUm = () => {
    this.setState({ numero: this.state.numero + 1 });
    //Não funciona
    //this.state.numero++;
  };

  menosUm = () => {
    this.setState({ numero: this.state.numero - 1 });
    //Não funciona
    //this.state.numero++;
  };

  alterarNumero = diferenca => {
    this.setState({
      numero: this.state.numero + diferenca
    });
  };

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc (+)</button>
        <button onClick={this.menosUm}>Dec (-)</button>
        <button onClick={() => this.alterarNumero(10)}>Inc 10 (+)</button>
        <button onClick={() => this.alterarNumero(-10)}>Dec 10 (-)</button>
      </div>
    );
  }
}
//Solução mais verbosa para o This (01)
// constructor(props) {
//   super(props);
//   this.maisUm = this.maisUm.bind(this);
// }

//Solução mais prática para o THIS (2)
// <button onClick={() => this.maisUm()}>Inc (+)</button>

//Solução THIS (03)
// maisUm = () => {
//   this.props.numero++;
// };
