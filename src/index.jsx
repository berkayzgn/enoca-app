import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


function App() {
  return (
    <>
      <h1>
        BERKAY
      </h1>
    </>
  );
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

