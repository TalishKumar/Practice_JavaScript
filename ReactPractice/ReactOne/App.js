import logo from './logo.svg';
import './App.css';
import User from "./User";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
        <Counter/>
        <User userName={'First User'} tweet={"What a nice day"}/>
        <User userName={'Tony Stark'} tweet={"I am Iron Man"}/>
        <User userName={'Bob'} tweet={"Hello everyone"}/>
        <User userName={'Julia Roberts'} tweet={"My new movie is out"}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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