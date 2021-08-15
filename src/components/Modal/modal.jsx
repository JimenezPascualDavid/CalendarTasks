import React from "react";

const tarea = ({ verTarea, selectMostrar, eliminarTarea }) => {
  const { id, dia, mes, titulo, descripcion, prioridad } = verTarea;

  console.log(verTarea);

  const volver = () => {
    selectMostrar(true);
  };

  return (
    <div className="modal">
      <div className="modal__calendar">
        <div
          className={
            prioridad === "low"
              ? "modal__calendar--low"
              : "" || prioridad === "normal"
              ? "modal__calendar--normal"
              : "" || prioridad === "high"
              ? "modal__calendar--high"
              : "" || prioridad
              ? "modal__calendar--low"
              : ""
          }
        >
          <div className="modal__date">
            <div className="modal__date--month">{mes}</div>
            <div className="modal__date--day">{dia}</div>
          </div>
        </div>
        <div className="modal__title">{titulo}</div>
        <div className="modal__description">{descripcion}</div>
      </div>
      <div className="modal__buttons">
        <button className="modal__buttons--red" onClick={volver}>
          Volver
        </button>
        <button
          className="modal__buttons--red"
          onClick={() => eliminarTarea(id)}
        >
          Eliminar tarea
        </button>
      </div>
    </div>
  );
};

export default tarea;
