import './App.css'
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import store from './stor';
import { Provider } from 'react-redux';
import postStore from './context/posts/store';
import PostsList from './components/PostsList';
import MyForm from './components/MyForm';

const style_data_div = [{ border: '1px solid red', marginBottom: '20px', padding: '1rem' }];

function App() {
  return (
    <>
      {/* 1 - counter with redux */}
      <div style={style_data_div[0]} data-div>

        <h2>1 - Contador com Redux</h2>

        <Provider store={store}>
          <Counter />
        </Provider>
      </div>

      {/* 2 - to-do with context api */}
      <div style={style_data_div[0]} data-div>

        <h2>2 - Todo com context API</h2>

        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </div>

      {/* 3 - paging with redux */}
      <div style={style_data_div[0]} data-div>
        <h2>3 - Paginação com Redux</h2>
        <Provider store={postStore}>
          <PostsList />
        </Provider>
      </div>

      {/* 4 - form with react final form */}
      <div style={style_data_div[0]} data-div>
        <h2>4 - Formulário com React Final Form</h2>
        <MyForm />
      </div>
    </>
  );
}

export default App;
