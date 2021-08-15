import React from "react";

const Helper = ({ selectMostrar, guardarPrincipal }) => {
  const mostrar = () => {
    selectMostrar(false);
    guardarPrincipal(false);
  };

  return (
    <div className="open">
      <button className="open__modal" onClick={mostrar}>
        +
      </button>
    </div>
  );
};

export default Helper;
