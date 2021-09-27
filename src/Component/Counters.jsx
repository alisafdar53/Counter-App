import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   state = {
  //     counters: [
  //       { id: 1, value: 0 },
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //       { id: 5, value: 5 },
  //     ],
  //   };

  //   handleIncrement = (counter) => {
  //     const counters = [...this.state.counters];
  //     const index = counters.indexOf(counter);
  //     counters[index] = { ...counter };
  //     counters[index].value++;
  //     this.setState({ counters });
  //   };

  //   handleReset = () => {
  //     const counters = this.state.counters.map((c) => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({ counters });
  //   };

  //   handleDelete = (counterId) => {
  //     console.log("Clicked", counterId);
  //     const counters = this.state.counters.filter((c) => c.id !== counterId);
  //     this.setState({ counters });
  //   };

  render() {
    console.log("Counters Rendered");

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-outline-primary btn-lg m-4"
          style={{ fontFamily: "fantasy" }}
        >
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          >
            <h4>Welcome to React Js</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
