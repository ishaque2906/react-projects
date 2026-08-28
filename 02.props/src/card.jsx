function Card(props) {
  console.log(props.user);
  return (
    <div className="card">
      <img src={props.img} alt="eyes Image" />
      <h1>
        {props.user},{props.age}
      </h1>
      <p>This is a simple card component.</p>
      <button>Click Me</button>
    </div>
  );
}
export default Card;
