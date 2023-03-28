import "./styles.css";
import { SumCard } from "./SumCard";
function EmployeeCard() {
  return (
    <div className="App">
      <h2> Shashank</h2>
      <p>
        <span style={{ color: "red" }}>Designation</span> : Senior Software
        Engineer
      </p>
      <p>
        <span style={{ color: "blue" }}> Experience</span> :
        <span style={{ fontSize: "18px" }}>7 years</span>
      </p>
    </div>
  );
}

const product = {
  id: "AC1023",
  name: "Air Conditioner",
  price: 29600,
  specification: "1 Ton, 4 Star Rating",
  warranty: "5 Years Compressor Warranty",
};

function AC_Card({ name, id, price, specification, warranty }) {
  return (
    <div className="header-name">
      <h2 style={{ color: "yellow", fontSize: "20px" }}>
        {id} {name}
      </h2>
      <p>Price: INR {price} </p>
      <p>Specification: {specification}</p>
      <p>Warranty: {warranty} years</p>
    </div>
  );
}

export default function App() {
  console.log("done");
  return (
    <div className="App">
      <SumCard firstNumber={6} secondNumber={8} />
      <EmployeeCard />
      <AC_Card {...product} />
    </div>
  );
}
