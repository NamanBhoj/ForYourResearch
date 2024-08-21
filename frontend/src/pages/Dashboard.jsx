import Sidebar from '../components/Sidebar';
import PapersTable from './PapersTable';
import Library from './Library';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
