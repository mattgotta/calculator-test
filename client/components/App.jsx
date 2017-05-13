/*
    ./client/components/App.jsx
*/
import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "0",
      firstInput: "",
      addition: false,
      subtraction: false,
      division: false,
      multiplication: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleSqrt = this.handleSqrt.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDivision = this.handleDivision.bind(this);
    this.handleMultiplication = this.handleMultiplication.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleInversion = this.handleInversion.bind(this);
    this.handleClearEntry = this.handleClearEntry.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.removeNonNumeric = this.removeNonNumeric.bind(this);
  }
  removeNonNumeric () {
    let a = this.state.userInput;
    let b = a.replace(/[^\d.-]/g, '');
    this.setState({
      userInput: b
    })
  }
  setAllFalse () {
    this.setState({
      addition: false,
      subtraction: false,
      division: false,
      multiplication: false
    });
  }
  switchInputs () {
    this.setState({
      firstInput: this.state.userInput,
      userInput: "0"
  });
}
  clearAllInput () {
    this.setState({
      firstInput: "",
      userInput: "0"
    });
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });

  }

  handleClick (e) {
    if (this.state.userInput == "0"){
      this.setState({
        userInput: e.target.value
      })
    }
    else {
      this.setState({
        userInput: this.state.userInput + e.target.value
      });
    }
  }

  handleAdd () {
    this.setAllFalse();
    this.switchInputs();
    this.setState({
      addition: true,
    });
  }

  handleSubtract () {
    this.setAllFalse();
    this.setState({
      firstInput: this.state.userInput,
      userInput: "",
      subtraction: true
    });
  }

  handleSqrt () {
    let first = parseFloat(this.state.userInput);
    this.setAllFalse();
    this.clearAllInput();
    this.setState({
      userInput: Math.sqrt(first)
    });
  }
  handlePower () {
    let first = parseFloat(this.state.userInput);
    this.setAllFalse();
    this.switchInputs();
    this.setState({
      userInput: Math.pow(first,2)
    });
  }
  handleInversion() {
    let first = parseFloat(this.state.userInput);
    this.setAllFalse();
    this.switchInputs();
    this.setState({
      userInput: 1/first
    });
  }

  handleClear () {
    this.setAllFalse();
    this.clearAllInput();
  }
  handleDivision () {
    this.setAllFalse();
    this.switchInputs();
    this.setState({
      division: true
    });
    }
  handleMultiplication () {
    this.setAllFalse();
    this.switchInputs();
    this.setState({
      multiplication: true
    });
    }
  handleClearEntry () {
    this.setState({
      userInput: "0"
    })
  }
  handleBack() {
    this.setState({
      userInput: this.state.userInput.slice(0, -1)
    })
  }


  handleEquals (e) {
    this.removeNonNumeric();
    if (this.state.addition == true){
      let first = parseFloat(this.state.firstInput);
      let second = parseFloat(this.state.userInput);
      this.clearAllInput();
      this.setState({
        userInput: first + second
      });
      this.setAllFalse();

    }
    else if (this.state.subtraction == true) {
      let first = parseFloat(this.state.firstInput);
      let second = parseFloat(this.state.userInput);
      this.clearAllInput();
      this.setState({
        userInput: first - second
      });
      this.setAllFalse();
    }
    else if (this.state.division == true) {
      let first = parseFloat(this.state.firstInput);
      let second = parseFloat(this.state.userInput);
      this.clearAllInput();
      this.setState({
        userInput: first / second
      });
      this.setAllFalse();
    }
    else if (this.state.multiplication == true) {
      let first = parseFloat(this.state.firstInput);
      let second = parseFloat(this.state.userInput);
      this.clearAllInput();
      this.setState({
        userInput: first * second
      });
      this.setAllFalse();
    }

  }

  render() {
    return (
     <div style={{textAlign: 'center'}}>
       <input
          value={this.state.userInput}
          type="text"
          onChange={this.handleUserInput} />
        <button onClick={this.handleClick} value="0">0</button>
        <button onClick={this.handleClick} value="1">1</button>
        <button onClick={this.handleClick} value="2">2</button>
        <button onClick={this.handleClick} value="3">3</button>
        <button onClick={this.handleClick} value="4">4</button>
        <button onClick={this.handleClick} value="5">5</button>
        <button onClick={this.handleClick} value="6">6</button>
        <button onClick={this.handleClick} value="7">7</button>
        <button onClick={this.handleClick} value="8">8</button>
        <button onClick={this.handleClick} value="9">9</button>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleEquals}>=</button>
        <button onClick={this.handleSubtract}>-</button>
        <button onClick={this.handleSqrt}>sqrt</button>
        <button onClick={this.handleDivision}>%</button>
        <button onClick={this.handlePower}>^2</button>
        <button onClick={this.handleInversion}>1/x</button>
        <button onClick={this.handleMultiplication}>*</button>
        <button onClick={this.handleClear}>C</button>
        <button onClick={this.handleBack}>Back</button>
        <button onClick={this.handleClearEntry}>CE</button>
        <button onClick={this.handleClick} value=".">.</button>

        <h1 style={{marginRight:123+'em'}}>{this.state.userInput}</h1>
        <h2>{this.state.firstInput}</h2>



      </div>);
  }
}
