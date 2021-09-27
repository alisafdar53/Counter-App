import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    // tags: ["tags1", ["tags2"], ["tags3"]],
  };

  //  = > Binding Method

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //  = > Increment Handler

  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  //   console.log("Increment Clicked", this);
  // };

  //  = > Passing Parameter

  // dohandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  styles = {
    fontSize: 23,
    fontWeight: "light",
    fontStyle: "italic",
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There is no Tags</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    console.log("Counter Rendered");

    console.log("props", this.props);
    return (
      <div>
        <h5>{this.props.id}</h5>
        {this.props.children}

        <span style={this.styles} className={this.getBadgeClasses()}>
          Count = {this.formatCount()}
        </span>


        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-md m-3"
          style={{ fontFamily: "cursive" }}
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-md m-3"
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className=" btn btn-danger btn-md m-3"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && "Please Create New Tags!!!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "bg m-4 rounded-pill bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
