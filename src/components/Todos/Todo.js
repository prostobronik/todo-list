import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo(props) {
  const { todo, deleteTodoHandler, toogleTodoHandler } = props
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        onClick={() => deleteTodoHandler(todo.id)}
        className={styles.deleteIcon}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toogleTodoHandler(todo.id)}
      />
    </div>
  )
}

export default Todo
