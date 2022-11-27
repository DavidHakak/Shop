import { ContextProvider } from "./context/ManegeContext"
import Layout from "./Components/Layout/Layout";
import './App.css';

function App() {


  return (
    <div className="App">
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </div>
  );
}

export default App;
