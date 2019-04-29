import React from "react";
import ReactDOM from "react-dom";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import { CompA, CompB } from "./componentes/DoisComponentes";
import MultiElementos from "./componentes/MultiElementos";
import FamiliaSilva from "./componentes/FamiliaSilva";
import Familia from "./componentes/Familia";
import Membro from "./componentes/Membro";
import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
import Pai from "./componentes/Pai";
import ComponenteClasse from "./componentes/ComponenteClasse";
import Contador from "./componentes/Contador";
import Hook from "./componentes/Hook";

const elemento = document.getElementById("root");

ReactDOM.render(
  <div>
    <Hook />

    <Contador numero={0} />

    <ComponenteClasse valor="Olá classe turma!" />

    <Pai />
    <ComponenteComFuncao />

    <Familia sobrenome="Pereira">
      <Membro nome="Andre" />
      <Membro nome="Mariana" />
    </Familia>

    {/* <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Gustavo" sobrenome="Arruda" />
    </Familia> */}

    <FamiliaSilva />
    <MultiElementos />
    <CompA valor="Olá eu sou o A!" />
    <CompB valor="Olá eu sou o B!" />
    <PrimeiroComponente valor="Bom Dia!" aBcD={123} />
  </div>,
  elemento
);

// const jsx = <h1>Olá React!</h1>;
// ReactDOM.render(jsx, elemento);
