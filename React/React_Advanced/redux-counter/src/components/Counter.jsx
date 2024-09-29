import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement ,reset} from '../redux/slices/CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <div className='flex flex-col items-center gap-4'>
        <button
          className='border-2 border-black px-4 py-2'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <div className='border-2 border-black px-4 py-2'>
          {count}
        </div>
        
        <button
          className='border-2 border-black px-4 py-2'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      
      <button
        className='border-2 border-black px-4 py-2'
        onClick={()=>dispatch(reset())}
      >
        RESET
      </button>
    </div>
  );
}

export default Counter;
