
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <TaskProvider>
    <App />
  </TaskProvider>
</ThemeProvider>
)
