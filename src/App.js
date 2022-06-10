import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>{process.env.NODE_ENV}</h1>
    <img src="/logo192.png" /> 
    <img src={logo} /> 
    </div>
  );
}

export default App;
