import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Todos from './pages/todos'
import TodoDetails from './pages/todoDetails'
import About from './pages/about'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/todos",
    element: <Todos/>
  },
  {
    path: "todos/:todoId",
    element: <TodoDetails/>
  },
  {
    path: "/about",
    element: <About/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
)