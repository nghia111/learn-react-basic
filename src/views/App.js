import logo from './logo.svg';
import './App.scss';
import { MyComponent } from './Example/MyComponent';
/**
* có 2 loại component: class component / function component
*                      
*
*
*
*
*/
const App = () => {
  return ( //JSX
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          xin chào
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
