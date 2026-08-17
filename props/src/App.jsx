import Card from './card.jsx';

const App = () => {
  return (
    <div ClassName="parent">
      <Card
        user="ishaque khan"
        age={22}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqMy8nTPR-3xphPQmIFCrEkzB53AeHtQ_H1MtWsEhPuBwufaZPXOUkyQ&s=10"
      />
      <Card
        user="username "
        age={20}
        img="https://uploads.sitepoint.com/wp-content/uploads/2016/03/1458289957powerful-images3.jpg"
      />
    </div>
  );
};

export default App;
