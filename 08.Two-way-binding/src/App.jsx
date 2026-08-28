import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted by', title);
  };

  return (
    <div>
      <h1>Two-way binding</h1>
      <form>
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={submitHandler}>submit </button>
      </form>
    </div>
  );
};

export default App;
