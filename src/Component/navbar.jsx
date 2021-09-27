import React, { Component } from "react";

//Stateless Functional Components:

// const Navbar = (props) => {
//   return console.log("NavBar Rendered")(
//     <nav className="navbar navbar-light bg-light">
//       <div
//         className="container-fluid f4 bold center mw6"
//         style={{ fontSize: 42 }}
//       >
//         Counter App with React Js
//       </div>
//       <a className="navbar-brand ">
//         <span className="bg m-4 rounded-pill bg-info">
//           {this.props.totalCounters}
//         </span>
//       </a>
//     </nav>
//   );
// };

// export default Navbar;

class Navbar extends Component {
  render() {
    console.log("NavBar Rendered");
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div
          className="container-fluid f4 bold center mw6"
          style={{ fontSize: 45 }}
        >
          Counter with React Js
        </div>
        <a className="navbar-brand " href="#">
          <span
            className="bg m-4 rounded-pill bg-info"
            style={{ fontStyle: "italic" }}
          >
            Total Counter = {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
