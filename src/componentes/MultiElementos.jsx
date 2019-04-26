import React from "react";

//criando uma estrutura de array
export default props => [<h1>Parte 1</h1>, <h2>Parte 2</h2>];

// export default props => (

//Sem a necessidade de criar uma div a mais
//   <React.Fragment>
//     <h1>Parte 1</h1>
//     <h2>Parte 2</h2>
//   </React.Fragment>

//Solução mais utilizada
//   <div>
//     <h1>Parte 1</h1>
//     <h2>Parte 2</h2>
//   </div>
//);
