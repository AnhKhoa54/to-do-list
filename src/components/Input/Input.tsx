import React from 'react'
import styles from './input.module.scss'
export default function Input() {
  return (
    <div className={styles.input_container}>
      <div className={styles.header_component}>Add Need To Do</div>
      <div className={styles.input_component}>
        <div className={styles.input_text}>
          <input type='text' placeholder='Type Somthing ...'></input>
        </div>
        <div className={styles.submit_btn}>
          <span>✚</span>
        </div>
      </div>
    </div>
  )
}
