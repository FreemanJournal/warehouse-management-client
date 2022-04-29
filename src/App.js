import UploadNewProducts from './components/UploadNewProducts';
import "./App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
 
  return (
    <div className="container">
      <UploadNewProducts/>
      <ToastContainer/>
    </div>
  );
}
export default App;