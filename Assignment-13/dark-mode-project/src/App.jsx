import { useLocalStorage } from './hooks/useLocalStorage';
import { useWindowSize } from './hooks/useWindowSize';
import './App.css';

function App() {
  const width = useWindowSize();
  const isDesktop = width >= 1024;

  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const currentTheme = isDesktop ? theme : 'light';

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${currentTheme}`}>
      <h1>{currentTheme.toUpperCase()} MODE</h1>

      {isDesktop && <button onClick={toggleTheme}>Toggle Theme</button>}
    </div>
  );
}

export default App;
