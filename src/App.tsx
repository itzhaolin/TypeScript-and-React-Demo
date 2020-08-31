import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HookComponent from './components/HookComponent'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HookComponent name={'zhangsan'} />
      <ClassComponent name="lisi"/>
    </div>
  );
}

export default App;
