import "./styles.css";
import { SumCard } from "./SumCard";
function EmployeeCard(){
  return(
    <div className="App"> 
      <h2> Shashank</h2>
      <p> Designation : Senior Software Engineer </p>
      <p> Experience : 5 years </p>
    </div>
  )
}

export default function App() {
  return (
    <div className="App"> 
    <SumCard/>    
   <EmployeeCard/>
    </div>
   
  );
}
