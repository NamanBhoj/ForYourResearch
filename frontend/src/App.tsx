import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Library from './pages/Library';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './contexts/UserAuthContext';
import { setPersistence, browserLocalPersistence } from 'firebase/auth';
import { auth } from './firebase/firebase';

// User stays logged in even if browser window is closed
await setPersistence(auth, browserLocalPersistence);

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/library"
            element={
              <ProtectedRoute>
                <Library />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
