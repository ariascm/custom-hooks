import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"



const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

  //useReducer es como useState pero se le agrega la funcion Reducer para manejar mas logica
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {   //guardo en LOCALSTORAGE cada vez que hay un cambio en "TODOs"
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] remove todo',
      payload: id
    }
    dispatch(action)
  }

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] add todo',    //Agrego una ACTION para hacer el dispatch de la accion en la funcion todoReducer que creamos
      payload: todo   //agrego el objeto todo NUEVO
    }

    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle todo',
      payload: id
    }

    dispatch(action)
  }

  // const todosCount = () => todos.length
  // const pendingTodosCount = () => todos.filter(todo => !todo.done).length

  return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}

