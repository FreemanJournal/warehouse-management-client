import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Routing from './routing/Routing';
function App() {

  return (
    <div className="container relative">
      <Routing />
      <ToastContainer/>
    </div>
  );
}
export default App;