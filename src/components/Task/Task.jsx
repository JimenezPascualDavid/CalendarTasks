import React, { useState } from "react";
import shortid from "shortid";

const Calendario = ({
  crearTarea,
  selectMostrar,
  guardarCargando,
  guardarPrincipal,
}) => {
  const [tarea, guardarTarea] = useState({
    dia: "",
    mes: "",
    titulo: "",
    descripcion: "",
    prioridad: "",
  });

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const [prioridad, guardarPrioridad] = useState("blue");

  const [error, guardarError] = useState(false);

  setTimeout(() => {
    guardarError(false);
  }, 4000);

  const recogerTarea = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  const { dia, mes, titulo, descripcion } = tarea;

  const submitTarea = (e) => {
    e.preventDefault();

    if (
      dia < 1 ||
      dia > 31 ||
      mes === "" ||
      titulo.trim() === "" ||
      descripcion.trim() === "" ||
      prioridad === ""
    ) {
      guardarError(true);
      return;
    }
    tarea.id = shortid();
    tarea.prioridad = prioridad;

    crearTarea(tarea);
    console.log(tarea);

    guardarCargando(true);

    setTimeout(() => {
      guardarCargando(false);

      guardarTarea({
        dia: "",
        titulo: "",
        descripcion: "",
      });
    }, 1000);
    guardarPrincipal(false);
    selectMostrar(true);
  };

  return (
    <div className="form">
      {error ? (
        <div className="form__alert">
          <p class="form__alert--info form__alert--text">
            Todos los campos son oblgatorios
          </p>
          <p class="form__alert--text">Fecha (0-31)</p>
          <p class="form__alert--text">Mes</p>
          <p class="form__alert--text">Titulo</p>
          <p class="form__alert--text">Descripcion</p>
          <p class="form__alert--text">Prioridad</p>
        </div>
      ) : (
        ""
      )}
      <form onSubmit={submitTarea}>
        <div className="form__task">
          <div
            className={
              prioridad === "low"
                ? "form__task--low"
                : "" || prioridad === "normal"
                ? "form__task--normal"
                : "" || prioridad === "high"
                ? "form__task--high"
                : "" || prioridad
                ? "form__task--low"
                : ""
            }
          >
            <div className="form__field">
              <input
                type="number"
                placeholder="00"
                name="dia"
                onChange={recogerTarea}
                id="fecha"
                value={dia}
                min="01"
                max="31"
                className="form__input--day"
              />
            </div>
          </div>
          <div className="form__field">
            <select className="form__select" name="mes" onChange={recogerTarea}>
              <option>Seleccione un mes</option>
              {meses.map((mes) => (
                <option className="form__select--option" key={mes} value={mes}>
                  {mes}
                </option>
              ))}
            </select>
          </div>
          <div className="form__field">
            <input
              type="text"
              placeholder="Escriba un titulo"
              name="titulo"
              onChange={recogerTarea}
              value={titulo}
              className="form__input--title"
              maxLength={18}
            />
          </div>
          <div className="form__field">
            <textarea
              placeholder="Escriba su nota..."
              name="descripcion"
              onChange={recogerTarea}
              value={descripcion}
              className="form__textarea"
            />
          </div>
        </div>
        <div className="form__options">
          <div className="form__options--title">
            <span>Prioridad</span>
          </div>
          <div className="form__field">
            <input
              type="radio"
              name="prioridad"
              value="irrelevante"
              onChange={recogerTarea}
              onClick={() => guardarPrioridad("low")}
            />
            <span>Irrelevante</span>
            <input
              type="radio"
              name="prioridad"
              value="normal"
              onChange={recogerTarea}
              onClick={() => guardarPrioridad("normal")}
            />
            <span>Normal</span>
            <input
              type="radio"
              name="prioridad"
              value="relevante"
              onChange={recogerTarea}
              onClick={() => guardarPrioridad("high")}
            />
            <span>Relevante</span>
          </div>
          <button type="submit" className="form__options--submit">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calendario;
