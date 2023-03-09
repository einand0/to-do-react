import React, { useState } from 'react'
import uniqid from 'uniqid'
import { Trash, Check } from '@phosphor-icons/react'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { TaskCard } from './components/TaskCard';
import { TaskList } from './components/TaskList';

function App() {

  const [task, setTask] = useState({ title: "", description: "", id: "", status: false });
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);


  const handleChangeTitle = (e) => {
    setTask(
      {
        ...task,
        title: e.target.value
      })
  }

  const handleChangeDesc = (e) => {
    setTask(
      {
        ...task,
        description: e.target.value,
        id: uniqid()
      })
  }

  const addTask = (e) => {
    e.preventDefault();
    if (task.title && task.description) {
      setTasks([...tasks, task]);
      setModalOpen(false);
      setTask({
        title: "",
        description: "",
        id: ""
      })
    }
  }

  const onHideModal = (e) => {
    e.preventDefault();
    let target = e.target;

    if (target.id === "modal" || target.id === "fechar") {
      setModalOpen(false);
    }
  }

  const deleteTask = (e) => {
    setTasks(tasks.filter((task) => task.id != e.target.id))
  }

  const taskDone = (e) => {

    let updatedItems = tasks.map(task => {
      if(task.id === e.target.id){
        task.status = !task.status;
      }
      return task;
    })

    setTasks(updatedItems);
  }


  return (
    <>
      <Modal isOpen={isModalOpen} onClick={onHideModal} id="modal">
        <Form>

          <div className="input-wrapper">
            <label htmlFor="inputTitle">título da tarefa:</label>
            <input type="text" id="inputTitle" onChange={handleChangeTitle} value={task.title} required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="inputDescription">descrição da tarefa:</label>
            <input type="text" id="inputDescription" onChange={handleChangeDesc} value={task.description} />
          </div>


          <div className="button-wrapper">
            <button onClick={addTask}>Adicionar</button>
            <button onClick={onHideModal} id="fechar">Fechar</button>
          </div>

        </Form>
      </Modal>
      <Header>
        <h1>to do list</h1>
        <button onClick={() => { setModalOpen(true) }}>+</button>
      </Header>

      <TaskList>
        <ul>
          {tasks.map((task) => {
            return (
              <TaskCard key={task.id} status={task.status}>
                <h2>{task.title}</h2>
                <hr />
                <p>{task.description}</p>

                <div className="button-wrapper">
                <button className="deleteBtn" onClick={deleteTask} id={task.id}>Deletar <Trash size={16} id={task.id} /></button>
                <button className="checkBtn" onClick={taskDone} id={task.id}>Feita <Check size={16} id={task.id} /></button>
                </div>
                
              </TaskCard>
            )
          })}
        </ul>
      </TaskList>
    </>
  )
}

export default App
