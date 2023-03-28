import { AC_Card } from "./AC_Card";
import { EmployeeCard } from "./EmployeeCard";
import { product } from "./product";
import "./styles.css";
import { SumCard } from "./SumCard";
import { employee } from "./employee";

export default function App() {
  return (
    <div className="App">
      <SumCard firstNumber={6} secondNumber={8} />
      <EmployeeCard  employee={employee} />
      <AC_Card {...product} />
    </div>
  );
}
