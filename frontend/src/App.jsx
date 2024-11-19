import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Library from './components/Dashboard/Library';
import Container from './components/Dashboard/Container';
import ScreeningTable from './components/Dashboard/ScreeningTable';

import ProtectedRoute from './components/Layout/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './contexts/AuthContext';
import QueryExplainer from './pages/QueryExplainer';
import MarkdownViewPage from './pages/MarkdownViewPage';
import PaperViewPage from './pages/PaperViewPage';

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
          <Route path="/view-paper" element={<PaperViewPage />} />

          <Route path="/paper-view" element={<MarkdownViewPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/info" element={<QueryExplainer />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="library" element={<Library />} />
            <Route path="search" element={<Container />} />
            {/* <Route path="search" element={<ScreeningTable />} /> */}
          </Route>
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
