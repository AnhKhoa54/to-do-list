import React from 'react'
import styles from './toDoApp.module.scss'
import Input from '../Input/Input'
import TaskList from '../TaskList/TaskList'
export default function ToDoApp() {
  return (
    <div className={styles.toDoApp_container}>
      <div className={styles.toDoApp_component}>
        <div className={styles.header}>
          <span>To Do List App</span>
        </div>
        {/* Input Component */}
        <Input />
        {/* List To Do Component */}
        <TaskList />
        {/* List Done Component */}
        <TaskList />
      </div>
    </div>
  )
}
