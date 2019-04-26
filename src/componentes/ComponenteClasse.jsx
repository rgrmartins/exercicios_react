import React, { Component } from "react";

export default class ComponenteClasse extends Component {
  // tem que ter o método render (obrigatório) e não tem nenhum parametro
  render() {
    return <h1>{this.props.valor || "Padrão"}</h1>;
  }
}
