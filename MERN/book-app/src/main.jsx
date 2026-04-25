import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './ContextAPI/ShareContext.jsx'
import AuthContext from './ContextAPI/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="585913691959-s7t4vs7fl7vce1ro7qgs9ric0ti8csud.apps.googleusercontent.com">
      <ShareContext>
        <AuthContext>
          <App />
        </AuthContext>
      </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
