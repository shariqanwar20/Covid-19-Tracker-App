import './App.css';
import Header from './components/Header';
import GlobalGrid from './components/GlobalGrid';
import { GlobalProvider } from './ContextAPI/GlobalContext';

function App() {
  return (
    <div>
      <Header />
      <br />
      <GlobalProvider>
        <GlobalGrid />
      </GlobalProvider>
    </div>
  );
}

export default App;
