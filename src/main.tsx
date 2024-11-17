// import { StrictMode } from 'react'
import "./default.css"
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "./context/Theme.tsx"

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter >
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </StrictMode>,
)
