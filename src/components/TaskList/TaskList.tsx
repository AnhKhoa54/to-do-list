import React from 'react'
import styles from './taskList.module.scss'
export default function TaskList() {
  return (
    <div className={styles.taskList_container}>
      <div className={styles.header_component}>
        <span>List To Do</span>
      </div>
      <div className={styles.body_component}>
        <div className={styles.checkbox_btn}>
          <input type='checkbox'></input>
        </div>
        <div className={styles.content_component}>
          <span>Học React Js</span>
        </div>
        <div className={styles.edit_btn}>
          <span>✍︎</span>
        </div>
        <div className={styles.remove_btn}>
          <span>🥡</span>
        </div>
      </div>
      <div className={styles.body_component}>
        <div className={styles.checkbox_btn}>
          <input type='checkbox'></input>
        </div>
        <div className={styles.content_component}>
          <span>Học React Js</span>
        </div>
        <div className={styles.edit_btn}>
          <span>✍︎</span>
        </div>
        <div className={styles.remove_btn}>
          <span>🥡</span>
        </div>
      </div>
      <div className={styles.body_component}>
        <div className={styles.checkbox_btn}>
          <input type='checkbox'></input>
        </div>
        <div className={styles.content_component}>
          <span>Học React Js</span>
        </div>
        <div className={styles.edit_btn}>
          <span>✍︎</span>
        </div>
        <div className={styles.remove_btn}>
          <span>🥡</span>
        </div>
      </div>
    </div>
  )
}
