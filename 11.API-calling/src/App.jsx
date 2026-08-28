//FETCH METHOD TO CALL API
/*const App = () => {
  async function getData() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    console.log(response);
  }
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  );
};
*/

//AXIOS METHOD TO CALL API
import React from 'react';
import axios from 'axios';
const APP = () => {
  const getData = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    console.log(data);
  };
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  );
};
export default APP;
