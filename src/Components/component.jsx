import React, { Component } from "react";
import "./component.css";

class App extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    answer: 0,
    equation: "",
    value: "",
  };

  handleChange = (e) => {
    this.setState({ equation: e.target.value });
  };

  handleAdd1 = (number) => {
    this.setState({ num1: number });
  };

  handleAdd2 = (number2) => {
    this.setState({ num2: number2 });
  };

  handleClear = () => {
    this.setState({ num1: 0, num2: 0, answer: 0 });
  };

  handlePlus = (sign) => {
    switch (sign) {
      case "+":
        this.setState({ answer: this.state.num1 + this.state.num2 });
        break;

      case "-":
        this.setState({ answer: this.state.num1 - this.state.num2 });
        break;

      case "x":
        this.setState({ answer: this.state.num1 * this.state.num2 });
        break;

      case "/":
        this.setState({ answer: this.state.num1 / this.state.num2 });
        break;
    }
  };

  handleOnClick = (e) => {
    try {
      this.setState({ equation: eval(this.state.equation) });
      return eval(this.state.equation);
    } catch (e) {
      this.setState({ equation: "Error" });
    }
  };

  render() {
    return (
      <div>
        <div>
          <center>
            <h1>React Calculator</h1>
          </center>
        </div>
        <div>
          <center>
            <h1>{this.state.num1}</h1>
            <button className="button1" onClick={() => this.handleAdd1(1)}>
              1
            </button>
            <button className="button1" onClick={() => this.handleAdd1(2)}>
              {" "}
              2{" "}
            </button>
            <button className="button1" onClick={() => this.handleAdd1(3)}>
              {" "}
              3{" "}
            </button>
            <button className="button1" onClick={() => this.handleAdd1(4)}>
              {" "}
              4{" "}
            </button>
            <button className="button1" onClick={() => this.handleAdd1(5)}>
              {" "}
              5{" "}
            </button>
            <button className="button1" onClick={() => this.handleAdd1(6)}>
              {" "}
              6{" "}
            </button>
            <button className="button1" onClick={() => this.handleAdd1(7)}>
              {" "}
              7{" "}
            </button>
            <button className="button1" onClick={() => this.handleAdd1(8)}>
              {" "}
              8{" "}
            </button>
            <button className="button1" onClick={() => this.handleAdd1(9)}>
              {" "}
              9{" "}
            </button>
            <button className="button1" onClick={() => this.handleAdd1(0)}>
              {" "}
              0{" "}
            </button>
          </center>
        </div>

        <div>
          <center>
            <h1>{this.state.num2}</h1>
            <button className="button2" onClick={() => this.handleAdd2(1)}>
              {" "}
              1{" "}
            </button>
            <button className="button2" onClick={() => this.handleAdd2(2)}>
              {" "}
              2{" "}
            </button>
            <button className="button2" onClick={() => this.handleAdd2(3)}>
              {" "}
              3{" "}
            </button>
            <button className="button2" onClick={() => this.handleAdd2(4)}>
              {" "}
              4{" "}
            </button>
            <button className="button2" onClick={() => this.handleAdd2(5)}>
              {" "}
              5{" "}
            </button>
            <button className="button2" onClick={() => this.handleAdd2(6)}>
              {" "}
              6{" "}
            </button>
            <button className="button2" onClick={() => this.handleAdd2(7)}>
              {" "}
              7{" "}
            </button>
            <button className="button2" onClick={() => this.handleAdd2(8)}>
              {" "}
              8{" "}
            </button>
            <button className="button2" onClick={() => this.handleAdd2(9)}>
              {" "}
              9{" "}
            </button>
            <button className="button2" onClick={() => this.handleAdd2(0)}>
              {" "}
              0{" "}
            </button>
          </center>
        </div>

        <div>
          <center>
            <button className="button3" onClick={() => this.handlePlus("+")}>
              +
            </button>
            <button className="button3" onClick={() => this.handlePlus("-")}>
              -
            </button>
            <button className="button3" onClick={() => this.handlePlus("x")}>
              x
            </button>
            <button className="button3" onClick={() => this.handlePlus("/")}>
              /
            </button>
          </center>
        </div>

        <div>
          <center>
            <button className="button4" onClick={this.handleClear}>
              Clear
            </button>
            <h1>{this.state.answer}</h1>
            <input
              type="text"
              value={this.state.equation}
              onChange={this.handleChange}
            ></input>
            <button className="button4" onClick={this.handleOnClick}>
              Enter
            </button>
            <h1 className="answerh1">Answer: {this.state.equation} </h1>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
