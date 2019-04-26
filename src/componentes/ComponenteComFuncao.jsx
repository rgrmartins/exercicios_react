import React from "react";

const aprovados = ["Paula", "Roberta", "Gustavo", "Julia"];

export default porps => {
  const gerarItens = itens => {
    return itens.map(item => <li>{item}</li>);
  };

  return <ul>{gerarItens(aprovados)}</ul>;
};
