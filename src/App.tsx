import { useState } from 'react';
import { Vite } from '@/assets/svg';
import { React } from '@/assets/svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev'>
          <Vite width='100' height='100' className='logo' />
        </a>
        <a href='https://react.dev'>
          <React width='100' height='100' className='logo react' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
