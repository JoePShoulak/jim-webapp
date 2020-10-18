import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="app-card">
              <div className={"centered"}>
                  <h2>Fibonacci Counter</h2>
                  <Counter />
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
