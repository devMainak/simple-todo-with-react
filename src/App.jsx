import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header/>
      <main className='container'>
        <section className='pt-4  text-center'>
          <img className='img-fluid' src='https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg' alt='Todo List' height={"450px"} width={"650px"} />
        </section>
        <section className='py-5 text-center'>
          <h3>Todos</h3>
          <p className='fs-5 fw-normal'>Welcome to the Todo application!</p>
          <Link className='btn btn-primary' to="/todos">View Todos</Link>
        </section>
      </main>
      <Footer/>
    </>
  )
}
