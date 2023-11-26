import logo from './logo.svg';
import './App.css';
import MainView from './component/Main';
import { FetchApiContext } from './context/context';

function App() {
  return (
    <div className="App">
        <MainView />
        <FetchApiContext />
    </div>
  );
}

export default App;
