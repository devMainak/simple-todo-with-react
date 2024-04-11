import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TodoList = ({todos}) => {
  return (
    <ul className='list-group w-50'>
      {todos.map(todo => {
      return (
        <li key={todo.id} className='list-group-item'>
          <Link className='link-primary fw-semibold' to={`/todos/${todo.id}`}>{todo.title}</Link>
        </li>
      )
      })}
    </ul>
  )
}

const Todos = () => {
  
  const todos = [
    {
      id: 1,
      title: "Buy Bread",
      description: "Description of Todo 1",
      date: "24-02-24",
    },
    {
      id: 2,
      title: "Go for a Walk",
      description: "Description of Todo 2",
      date: "24-02-24",
    },
    {
      id: 3,
      title: "Attend Painting class",
      description: "Description of Todo 3",
      date: "24-02-24",
    },
    {
      id: 4,
      title: "Buy flowers",
      description: "Description of Todo 4",
      date: "24-02-24",
    },
    {
      id: 5,
      title: "Visit Church",
      description: "Description of Todo 5",
      date: "12-02-24",
    },
    {
      id: 6,
      title: "Write Journal",
      description: "Description of Todo 6",
      date: "13-03-24",
    },
    {
      id: 7,
      title: "Water the plants",
      description: "Description of Todo 7",
      date: "22-03-24",
    },
    {
      id: 8,
      title: "Clean the windows",
      description: "Description of Todo 8",
      date: "28-03-24",
    },
    {
      id: 9,
      title: "Buy Gifts for Holi",
      description: "Description of Todo 9",
      date: "24-03-24",
    },
  ]
  
  return (
    <>
      <Header/>
      <main className='container'>
        <section className='pt-3 pb-5'>
          <h1>Todo List</h1>
          <TodoList todos={todos}/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Todos;