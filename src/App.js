import { useState, useEffect } from "react";
import "./scss/main.scss";
import Calendario from "./components/Task/Task";
import Tareas from "./components/MiniTask/MiniTask";
import Spinner from "./components/Spinner/Spinner";
import Helper from "./Helper";
function App() {
  let tareasLocal = JSON.parse(localStorage.getItem("tareas"));
  if (!tareasLocal) {
    tareasLocal = [];
  }
  const [tareas, guardarTareas] = useState(tareasLocal);
  const [mostrar, selectMostrar] = useState(true);
  const [principal, guardarPrincipal] = useState(true);

  const crearTarea = (tarea) => {
    guardarTareas([...tareas, tarea]);
  };
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    if (tareasLocal) {
      localStorage.setItem("tareas", JSON.stringify(tareas));
    } else {
      localStorage.setItem("tareas", JSON.stringify([]));
    }
    if (tareas.length === 0) {
      guardarPrincipal(true);
    } else {
      guardarPrincipal(false);
    }
  }, [tareas]);

  return (
    <div className="App">
      {!mostrar ? (
        <Calendario
          crearTarea={crearTarea}
          selectMostrar={selectMostrar}
          guardarCargando={guardarCargando}
          guardarPrincipal={guardarPrincipal}
        />
      ) : (
        ""
      )}
      {cargando ? <Spinner /> : ""}

      <div className="tasks">
        {principal ? (
          <div className="tasks__advise">
            <p>No hay tareas.</p>
            <span>
              {" "}
              Pulse en <div className="tasks__advise--button">+</div> y cree
              una nueva tarea
            </span>
          </div>
        ) : (
          ""
        )}

        {!principal && mostrar && !cargando
          ? tareas.map((tarea) => (
              <Tareas
                key={tarea.id}
                tarea={tarea}
                tareas={tareas}
                selectMostrar={selectMostrar}
                guardarTareas={guardarTareas}
              />
            ))
          : ""}
      </div>

      <Helper
        selectMostrar={selectMostrar}
        guardarPrincipal={guardarPrincipal}
      />
    </div>
  );
}

export default App;
