import Clients from '../Components/Clients';
import Projects from '../Components/Projects';
import AddClientModal from '../Components/AddClientModel';
import AddProjectModal from '../Components/AddProjectModel';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}