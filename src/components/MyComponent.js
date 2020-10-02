import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef}>my component with ref myRef</div>;
  }
}

export default MyComponent;
