import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm(props) {
  const { addTodoHandler } = props
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodoHandler(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Введите задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Добавить">
          Добавить
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
