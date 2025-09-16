import { useEffect, useState } from 'react';
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
  const [showMaintenanceNotice, setShowMaintenanceNotice] = useState(false);

  useEffect(() => {
    // Show the notice once per session
    const hasSeenNotice = sessionStorage.getItem('maintenance_notice_seen');
    if (!hasSeenNotice) {
      setShowMaintenanceNotice(true);
      sessionStorage.setItem('maintenance_notice_seen', 'true');
    }
  }, []);
  // const router = createBrowserRouter([
  //   { path: '/', element: <Home /> },
  //   { path: '/login', element: <Login /> },
  //   { path: '/signup', element: <Login /> },
  // ]);
  return (
    <>
      <UserAuthContextProvider>
        {showMaintenanceNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
              <h2 className="mb-2 text-xl font-semibold text-gray-900">Notice</h2>
              <p className="mb-4 text-sm text-red-800-700">
                This website is no longer maintained. Features and data may be outdated, and
                issues may not be addressed.
              </p>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowMaintenanceNotice(false)}
                  className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
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
