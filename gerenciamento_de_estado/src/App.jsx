import './App.css'
import Counter from './components/Counter';
import store from './stor';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      {/* 1 - counter with redux */}
      <div style={{ border: '1px solid red', marginBottom: '20px', padding: '1rem' }}>
        <h2>1 - Contador com Redux</h2>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    </>
  );
}

export default App;
