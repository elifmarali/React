import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <div>Learn React</div>
      <Todo></Todo>
    </div>
  );
}

export default App;
