import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../context/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Valor inicial: {count}</p>

            <div>
                <button style={{ margin: '5px 10px' }} onClick={() => dispatch(increment())}>Incrementar</button>
                <button style={{ margin: '5px 10px' }} onClick={() => dispatch(decrement())}>Decrementar</button>
                <button style={{ margin: '5px 10px' }} onClick={() => dispatch(reset())}>Resetar</button>
            </div>
        </div>
    );
}

export default Counter;