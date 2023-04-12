import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [task, setTask] = useState([{
    id: 0,
    title: "Criar LP",
    description: "A LP deve conter...",
    dueDate: "2023-04-11"
  }]);

  const [lastId, setLastId] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, {id: lastId, title, description, dueDate}]);
    setLastId(lastId+1);
    console.log(task)
  }

  const handleRemove = (titleRemove) => {
    console.log(titleRemove);
    setTask(task.filter(item => item.title != titleRemove));
  }

  return (
    <div className="App">
      <section>
        <h2>Gerenciamento de tarefas</h2>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center', alignItems: 'center'}}>
          <div>
            <label htmlFor="idTitulo">Título:</label>
            <input id='idTitulo' type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
          </div>

          <div>
            <label htmlFor="idDescricao">Descrição:</label>
            <input id='idDescricao' type='text' value={description} onChange={(e) => setDescription(e.target.value)}></input>
          </div>

          <div>
            <label htmlFor="idDueDate">Data:</label>
            <input id='idDueDate' type='date' value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>
          </div>

          <button>Adicionar</button>
        </form>

        <table style={{margin: '0 auto'}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
          {task && task.map(task => 
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td style={{textAlign: 'center'}}><button>Editar</button></td>
              <td style={{textAlign: 'center'}}><button onClick={() => handleRemove(task.title)}>Excluir</button></td>
            </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
