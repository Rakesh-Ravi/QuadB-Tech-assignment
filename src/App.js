
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
     // Provide the Redux store to the entire application using the Provider component
    <Provider store={store}>
      <div className="container">
        <h1 className="heading">Simple Todos</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;