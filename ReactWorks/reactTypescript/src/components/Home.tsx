import { DataTypes } from "./propsTypes";

function Home(props: DataTypes) {
  return (
    <div>
      Merhaba ben {props.name} {props.surname}. I'm {props.age} years old. I'm
      studying {props.department} at {props.school}.
      {props.isBest ? (
        <div>I like working in react</div>
      ) : (
        <div>I don't like in react</div>
      )}
    </div>
  );
}

export default Home;
