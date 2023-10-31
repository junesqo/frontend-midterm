import './App.css';
import ColorChangingTextArea from './components/ColorChangingTextArea';
import AnimatedLogo from './components/AnimatedLogo';

function App() {
  return (
    <div className="App">
      <h1>Моё React Приложение</h1>
      <AnimatedLogo />
      <ColorChangingTextArea />
    </div>
  );
}

export default App;
