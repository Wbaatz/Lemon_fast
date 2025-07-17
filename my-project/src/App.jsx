import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Render matched page here */}
    </div>
  );
}