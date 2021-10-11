import React from "react";

const tarea = ({ verTarea, selectMostrar, eliminarTarea }) => {
  const { id, dia, mes, titulo, descripcion, prioridad } = verTarea;

  console.log(verTarea);

  const volver = () => {
    selectMostrar(true);
  };

  return (
    <div className="task">
    <div className="modal">
      <div className="modal__header">
        <div
          className={
            prioridad === "low"
              ? "modal__header--low"
              : "" || prioridad === "normal"
              ? "modal__header--normal"
              : "" || prioridad === "high"
              ? "modal__header--high"
              : "" || prioridad
              ? "modal__header--low"
              : ""
          }
        >
          <div className="modal__date">
            <p className="modal__month">{mes}</p>
            <p className="modal__day">{dia}</p>
          </div>
        </div>
        <div className="modal__content">
        <div className="modal__title">{titulo}</div>
        <div className="modal__description">{descripcion}</div>
      </div>
    </div>
    </div>
    <div className="content">
        <button className="content__buttons content__buttons--red" onClick={volver}>
          Volver
        </button>
        <button
          className="content__buttons content__buttons--red"
          onClick={() => eliminarTarea(id)}
        >
          Eliminar tarea
        </button>
      </div>
    </div>
  );
};

export default tarea;
