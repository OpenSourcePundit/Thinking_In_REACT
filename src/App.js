import "./styles.css";
import { SumCard } from "./SumCard";
function EmployeeCard() {
  return (
    <div className="App">
      <h2> Shashank</h2>
      <p>
        {" "}
        <span style={{ color: "red" }}>Designation</span> : Senior Software
        Engineer{" "}
      </p>
      <p>
        {" "}
        <span style={{ color: "blue" }}> Experience</span> :{" "}
        <span style={{ fontSize: "18px" }}>5 years</span>{" "}
      </p>
    </div>
  );
}

export default function App() {
  console.log("done");
  return (
    <div className="App">
      <SumCard firstNumber={6} secondNumber={8} />
      <EmployeeCard />
    </div>
  );
}
