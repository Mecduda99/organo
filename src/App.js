import logo from './meme-sapinho.webp';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Alô, mãe? Tô aprendendo React!!
          {/* Edite <code>src/App.js</code> e salve para recarregar. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
