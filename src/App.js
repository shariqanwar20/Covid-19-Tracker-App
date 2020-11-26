import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GlobalGrid from './components/GlobalGrid';
import { GlobalProvider } from './ContextAPI/GlobalContext';
import { Api } from './components/Api';

function App() {
  return (
    <div>
      <Header />
      <br />
      <GlobalProvider>
        <Api />
        <GlobalGrid />
      </GlobalProvider>
    </div>
  );
}

export default App;
