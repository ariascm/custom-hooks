# 🧩 Custom React Hooks Collection

Este repositorio contiene una colección de **4 Custom Hooks en React** reutilizables que resuelven tareas comunes.

---

## 🔧 Hooks disponibles

### 1. `useCounter`

Un hook simple y flexible para manejar contadores.

#### Uso:
const { counter, increment, decrement, reset } = useCounter(10)

#### Props:
initialValue: número inicial del contador (por defecto 10).

#### Retorna:
counter: el valor actual.

increment(value): incrementa por value (default 1).

decrement(value): decrementa por value (default 1).

reset(): reinicia al valor inicial.

### 2. `useCounter`

Realiza peticiones HTTP y gestiona estados de carga, error y caché local.

#### Uso:

const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/1')

#### Retorna:
data: respuesta de la API.

isLoading: true mientras carga.

hasError: true si hay un error.

✅ Utiliza caché para evitar peticiones duplicadas.

### 3. `useForm`
Maneja formularios fácilmente.

#### Uso:
const { formState, onInputChange, onResetForm, name, email } = useForm({
  name: '',
  email: ''
})

#### Retorna:
formState: objeto completo del formulario.

onInputChange(event): actualiza los valores.

onResetForm(): reinicia los valores al estado inicial.

También devuelve cada propiedad individual del formulario (ej: name, email).

### 4. `useTodos`
Gestión completa de una lista de tareas (TODOs) con persistencia en localStorage.

#### Uso:
const {
  todos,
  handleNewTodo,
  handleDeleteTodo,
  handleToggleTodo,
  todosCount,
  pendingTodosCount
} = useTodos()

#### Retorna:
todos: arreglo de tareas.

handleNewTodo(todo): agrega una tarea.

handleDeleteTodo(id): elimina una tarea.

handleToggleTodo(id): cambia el estado done.

todosCount: cantidad total de tareas.

pendingTodosCount: cantidad de tareas pendientes.

## 🛠 Instalación y uso
git clone https://github.com/ariascm/custom-hooks.git
cd custom-hooks
npm install
npm run dev
Este repo está pensado como utilidad o ejemplo para ser usado dentro de otros proyectos React.

📁 Estructura del proyecto css

    src/
    ├── hooks/
    │   ├── useCounter.js
    │   ├── useFetch.js
    │   ├── useForm.js
    │   └── useTodos.js

## 🧪 Tests
Cada hook puede ser probado con Jest y React Testing Library (según el caso). Asegurarse de tener mockeados correctamente los contextos o hooks anidados.