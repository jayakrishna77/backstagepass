import './App.css';
import './styles.css';
import Layout from './Layout';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
