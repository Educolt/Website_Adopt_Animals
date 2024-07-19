//import dependencies
import { BrowserRouter as Router } from 'react-router-dom'

// app routes
import { Routes } from './routes';

// AuthProvider
import { AuthProvider } from './hooks/useAuth'

// import app global styles
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <AuthProvider>
      <Router> 
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthProvider>
  );
}

export default App;
