import './App.css'
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import store from './stor';
import { Provider } from 'react-redux';

const style_div_externa = [{ border: '1px solid red', marginBottom: '20px', padding: '1rem' }];

function App() {
  return (
    <>
      {/* 1 - counter with redux */}
      <div style={style_div_externa[0]}>
       
        <h2>1 - Contador com Redux</h2>

        <Provider store={store}>
          <Counter />
        </Provider>
      </div>

      {/* 2 - to-do with context api */}
      <div style={style_div_externa[0]}>
       
        <h2>2 - Todo com context API</h2>

        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </div>
    </>
  );
}

export default App;
