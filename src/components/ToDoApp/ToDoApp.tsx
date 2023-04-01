import React, { useState } from 'react'
import styles from './toDoApp.module.scss'
import Input from '../Input/Input'
import TaskList from '../TaskList/TaskList'
import { Todo } from '../../@types/todo.type'
export default function ToDoApp() {
  const [todos, setToDos] = useState<Todo[]>([])
  const [todosEdit, setTodoEdit] = useState<Todo[]>([])

  // Handle Filter To Do
  const listToDo = todos.filter((todo) => todo.done === false)
  const AlreadyDone = todos.filter((todo) => todo.done === true)
  // Handle Add New To Do
  const addToDo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setToDos((prev) => [...prev, todo])
  }
  // Set To Do Done
  const setToDoDone = (id: string, done: boolean) => {
    setToDos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }
  // Handle Edit To Do
  const getToDoForEdit = (id: string) => {
    setTodoEdit((prev) => {
      return todos.filter((todo) => todo.id === id)
    })
  }
  const editToDo = (id: string, name: string) => {
    setToDos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, name }
        }
        return todo
      })
    })
  }
  // Handle Remove To Do
  const removeToDo = (id: string) => {
    setToDos((prev) => {
      return prev.filter((todo) => todo.id !== id)
    })
  }

  return (
    <div className={styles.toDoApp_container}>
      <div className={styles.toDoApp_component}>
        <div className={styles.header}>
          <span>To Do List App</span>
        </div>
        {/* Input Component */}
        <Input addToDo={addToDo} todosEdit={todosEdit} editToDo={editToDo} />
        {/* List To Do Component */}
        <TaskList todos={listToDo} setToDoDone={setToDoDone} removeToDo={removeToDo} getToDoForEdit={getToDoForEdit} />
        {/* List Done Component */}
        <TaskList
          doneTaskList
          todos={AlreadyDone}
          setToDoDone={setToDoDone}
          removeToDo={removeToDo}
          getToDoForEdit={getToDoForEdit}
        />
      </div>
    </div>
  )
}
