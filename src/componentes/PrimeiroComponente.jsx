import React from "react";

let isLegal = false;

//uma forma mais enxuta de exportar
export default props => (
  <div>
    <h1>{props.valor}</h1>
    <h2>{props.aBcD}</h2>
    <h3>{1 + 1}</h3>
    <p>Legal? -> {isLegal ? "SIM" : "NÃO"}</p>
    <p>{Math.random()}</p>
  </div>
);
// function primeiro() {
//   return <h1>Primeiro Componente!</h1>;
// }
// export default primeiro;
