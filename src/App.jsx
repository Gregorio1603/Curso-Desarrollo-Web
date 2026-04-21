import { Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <Container className="app-container">
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Navbar.Brand className="mx-auto">
          Lista de Tareas y Metas
        </Navbar.Brand>
      </Navbar>

      {/* Formulario */}
      <div className="card mb-4">
        <div className="card-body">
          <form className="row">
            <div className="col-md-5 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de la tarea"
              />
            </div>

            <div className="col-md-4 mb-3">
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-3 d-grid">
              <button className="btn btn-primary">Agregar</button>
            </div>
          </form>
        </div>
      </div>

      {/* Lista */}
      <div className="card">
        <div className="card-body">
          <div className="row task-item align-items-center">
            <div className="col-md-6">
              <strong>Terminar actividad de React</strong>
            </div>

            <div className="col-md-3 task-date">
              2026-04-30
            </div>

            <div className="col-md-3 d-flex gap-2 justify-content-center">
              <button className="btn btn-success btn-sm">✔</button>
              <button className="btn btn-danger btn-sm">✖</button>
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
}

export default App;