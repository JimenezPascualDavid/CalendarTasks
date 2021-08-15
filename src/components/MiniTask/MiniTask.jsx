import React, { useState, Fragment } from "react";
import Tarea from "../Modal/modal";

const Tareas = ({ tareas, tarea, guardarTareas }) => {
  const [verTarea, cogerTarea] = useState();
  const [mostrar, selectMostrar] = useState(true);

  const { prioridad } = tarea;

  const verTareas = () => {
    cogerTarea(tarea);
    selectMostrar(false);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);

    guardarTareas(nuevasTareas);
  };

  return (
    <Fragment>
      {tarea || mostrar ? (
        <div className="tasks__minitask" onClick={verTareas}>
          <div
            className={
              prioridad === "low"
                ? "tasks__minitask--low"
                : "" || prioridad === "normal"
                ? "tasks__minitask--normal"
                : "" || prioridad === "high"
                ? "tasks__minitask--high"
                : "" || prioridad
                ? "tasks__minitask--low"
                : ""
            }
          >
            <div className="tasks__minitask--month">{tarea.mes}</div>
          </div>
          <div className="tasks__minitask--day">{tarea.dia}</div>
        </div>
      ) : (
        "No hay tareas"
      )}

      {!mostrar ? (
        <Tarea
          verTarea={verTarea}
          selectMostrar={selectMostrar}
          eliminarTarea={eliminarTarea}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Tareas;
