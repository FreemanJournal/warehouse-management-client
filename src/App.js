import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Routing from './routing/Routing';
function App() {

  return (
    <div className="container relative">
      <HelmetProvider>
        <Routing />
      </HelmetProvider>
      <ToastContainer />
    </div>
  );
}
export default App;