import React from 'react';

const App = () => {
  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <div className="App">
      <h1>Form Handling</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
