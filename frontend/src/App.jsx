import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import PapersTable from './pages/PapersTable';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './contexts/AuthContext';

function App() {
  // const router = createBrowserRouter([
  //   { path: '/', element: <Home /> },
  //   { path: '/login', element: <Login /> },
  //   { path: '/signup', element: <Login /> },
  // ]);
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="library" element={<Library />} />
            <Route path="search" element={<PapersTable />} />
          </Route>
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
