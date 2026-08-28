import React from 'react';
/*const age = localStorage.getItem('age');
const user = localStorage.getItem('user');
localStorage.removeItem('age')*/
/*
const App = () => {
  const usera = {
    username: 'ishaq',
    age: 21,
    city: 'Aamchi-Mumbai'
  };
  localStorage.setItem('usera', JSON.stringify(usera));
*/
const App = () => {
  const usera = JSON.parse(localStorage.getItem('usera'));
  console.log(usera);
  return <div>App</div>;
};

export default App;
