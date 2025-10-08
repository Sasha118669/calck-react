import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("0;;");
  let [operand1, operator, operand2] = value.split(";")

  const clickBtn = (e) => {
    let currentValue = e.target.innerText;

     if (currentValue === "=") {
      setValue(customEval(operand1, operand2, operator));
      return;
    } else if (operand2 && /[\+\-\/\*]/.test(currentValue)) {
      console.log("Condition Fulfilled");
      setValue(customEval(operand1, operand2, operator) + ';' + currentValue + ";");
      return;
    }

    if(currentValue === "."){
      if(!operator && operand1?.split(".").length > 1)return;
      if(operator && operand2?.split(".").length > 1)return;
    }

      if(operand2 || operand2 && currentValue === "."){
        setValue(operand1 + ';' + operator + ";" + (operand2 + currentValue));
      } else if(operator && e.target.classList.contains("number")){
    setValue(operand1 + ';' + operator + ";" + currentValue);

    } else if (operand1 === "0" && e.target.classList.contains("number")) {
      setValue(currentValue + ";" + ";");
    } else if(e.target.classList.contains("number")){
      setValue(operand1 + currentValue + ";" + ";");
    } else if(operand1 === "0" && currentValue === "." || operand1 && currentValue === "."){
      setValue(operand1 + currentValue + ";" + ";");

    } else if (/[\+\-\/\*]/.test(currentValue)){
      setValue(operand1 + ';' + currentValue + ";");
    } else if (operator && /[\+\-\/\*]/.test(currentValue)){
      setValue(operator.slice(-1) + currentValue + ";" + ";");
    }    

    function customEval(operand1, operand2, operator) {
      switch (operator) {
        case "+":
          return (parseFloat(operand1) + parseFloat(operand2)).toString();
        case "-":
          return (parseFloat(operand1) - parseFloat(operand2)).toString();
        case "*":
          return (parseFloat(operand1) * parseFloat(operand2)).toString();
        case "/":
          if (parseFloat(operand2) === 0) return "You can't divide by zero";
          return (parseFloat(operand1) / parseFloat(operand2)).toString();
        default:
          console.log("Error");
          return "";
      }
    }
  };
  return (
    <>
      <div className="calck">
        <input id="inputVield" disabled value={value.split(";").reduce((acc, current) => acc + current) } />
        <div className="buttons">
          <div className="row">
            <button className="number" id="btn7" onClick={clickBtn}>
              7
            </button>
            <button className="number" id="btn8" onClick={clickBtn}>
              8
            </button>
            <button className="number" id="btn9" onClick={clickBtn}>
              9
            </button>
            <button className="operators" id="btnDivide" onClick={clickBtn}>
              /
            </button>
          </div>
          <div className="row">
            <button className="number" id="btn4" onClick={clickBtn}>
              4
            </button>
            <button className="number" id="btn5" onClick={clickBtn}>
              5
            </button>
            <button className="number" id="btn6" onClick={clickBtn}>
              6
            </button>
            <button className="operators" id="btnMultiply" onClick={clickBtn}>
              *
            </button>
          </div>
          <div className="row">
            <button className="number" id="btn1" onClick={clickBtn}>
              1
            </button>
            <button className="number" id="btn2" onClick={clickBtn}>
              2
            </button>
            <button className="number" id="btn3" onClick={clickBtn}>
              3
            </button>
            <button className="operators" id="btnMinus" onClick={clickBtn}>
              -
            </button>
          </div>
          <div className="row">
            <button className="number" id="btn0" onClick={clickBtn}>
              0
            </button>
            <button className="operators" id="btnDot" onClick={clickBtn}>
              .
            </button>
            <button className="operators" id="btnEqual" onClick={clickBtn}>
              =
            </button>
            <button className="operators" id="btnPlus" onClick={clickBtn}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
