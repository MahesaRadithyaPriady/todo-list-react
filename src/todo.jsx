import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './TodoMain.jsx'
import './todo.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
)
