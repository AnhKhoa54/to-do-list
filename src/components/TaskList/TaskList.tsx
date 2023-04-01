import React from 'react'
import { Todo } from '../../@types/todo.type'
import styles from './taskList.module.scss'

// ?: Tức là có cũng được, không có cũng được. Như vậy nếu không chuyền ở ngoài nó sẽ hiểu là undefine => false

interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  setToDoDone: (id: string, done: boolean) => void
  removeToDo: (id: string) => void
  getToDoForEdit: (id: string) => void
}
export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, setToDoDone, removeToDo, getToDoForEdit } = props

  const handleOnChange = (idToDo: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoDone(idToDo, event.target.checked)
  }
  const handlegetToDoForEdit = (idToDo: string) => {
    getToDoForEdit(idToDo)
  }
  const handleRemoveToDo = (idToDo: string) => {
    removeToDo(idToDo)
  }
  return (
    <div className={styles.taskList_container}>
      <div className={styles.header_component}>
        {doneTaskList ? <span>Already Done</span> : <span>List To Do</span>}
      </div>
      {todos.map((todo) => (
        <div className={styles.body_component} key={todo.id}>
          {/* Checkbox */}
          <div className={styles.checkbox_btn}>
            <input type='checkbox' checked={todo.done} onChange={handleOnChange(todo.id)}></input>
          </div>
          {/* Content */}
          <div className={styles.content_component}>
            <span>{todo.name}</span>
          </div>
          {/* Edit Buton */}
          <div
            className={styles.edit_btn}
            onClick={() => {
              handlegetToDoForEdit(todo.id)
            }}
          >
            <span>✏️</span>
          </div>
          {/* Remove Button */}
          <div
            className={styles.remove_btn}
            onClick={() => {
              handleRemoveToDo(todo.id)
            }}
          >
            <span>🥡</span>
          </div>
        </div>
      ))}
    </div>
  )
}
