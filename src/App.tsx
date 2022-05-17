import { useState } from 'react';
import Title from './components/Title';
import './assets/styles/index.scss';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className='ass' onClick={() => setCount((prev) => prev + 1)}>
        asssssss
      </h1>
      {count}
      <Title />
    </div>
  );
};

export default App;
