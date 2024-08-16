import Sidebar from '../components/Sidebar';
import Library from './Library';
import PapersTable from './PapersTable';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <PapersTable />
          {/* <Library /> */}
        </div>
      </main>
    </>
  );
}

export default Dashboard;
