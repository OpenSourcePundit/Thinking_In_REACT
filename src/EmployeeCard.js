// Made dynamic from app prop is sent having product object. 
// So here basically double destructuring is done .
// first- inline no 5 while getting the Props
// second in line 6 default destruring method
export function EmployeeCard({employee}) {
    const {name,designation,experience}=employee
    return (
        <div className="App">
            <h2>{name}</h2>
            <p>
                <span style={{ color: "red" }}>Designation</span> : {designation}
      </p>
            <p>
                <span style={{ color: "blue" }}> Experience</span> :
        <span style={{ fontSize: "18px" }}>{experience} years</span>
            </p>
        </div>
    );
}
