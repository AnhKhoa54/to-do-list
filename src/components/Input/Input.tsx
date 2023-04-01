import React, { useEffect, useState } from 'react'
import { Todo } from '../../@types/todo.type'
import styles from './input.module.scss'

interface inputProps {
  todosEdit: Todo[]
  addToDo: (name: string) => void
  editToDo: (id: string, name: string) => void
}
export default function Input(props: inputProps) {
  const { addToDo, todosEdit, editToDo } = props
  const [content, setContent] = useState<string>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleSubmit = () => {
    addToDo(content)
    setContent('')
  }
  const handleEdit = (id: string, name: string) => {
    editToDo(id, name)
    setContent('')
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setContent(value)
  }

  useEffect(() => {
    if (todosEdit.length > 0) {
      setContent(todosEdit[0].name)
      setIsEdit(true)
    }
  }, [todosEdit])

  return (
    <div className={styles.input_container}>
      <div className={styles.header_component}>Add Need To Do</div>
      <div className={styles.input_component}>
        <div className={styles.input_text}>
          {isEdit === true ? (
            <input type='text' placeholder='Type Somthing ...' value={content} onChange={onChangeInput}></input>
          ) : (
            <input type='text' placeholder='Type Somthing ...' value={content} onChange={onChangeInput}></input>
          )}
        </div>
        <div
          className={styles.submit_btn}
          onClick={() => {
            isEdit === true ? handleEdit(todosEdit[0].id, content) : handleSubmit()
          }}
        >
          <span>✚</span>
        </div>
      </div>
    </div>
  )
}
