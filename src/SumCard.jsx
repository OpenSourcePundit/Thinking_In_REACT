export function SumCard({firstNumber,secondNumber})  {

    return(
         <div className="App">
      <h2> Sum of Numbers</h2>
      <p> First number : {firstNumber} </p>
      <p> Second number : {secondNumber} </p>
      <p> Sum : {firstNumber+secondNumber} </p>
    </div>
    )
}

