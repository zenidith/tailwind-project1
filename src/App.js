import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="container p-4">
    <TailWindCSSButton/>
  </div>
  );
}

function TailWindCSSButton() {
  return(
    <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded">Testing Button</button>
  )
}

export default App;
