import React from "react";
import AutoFocusTextInput from "./AutoFocusTextInput";
import CustomTextInput from "./CustomTextInput";
import MyComponent from "./MyComponent";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the homepage</h1>
        <MyComponent />
        <CustomTextInput />
        <AutoFocusTextInput />
      </div>
    );
  }
}

export default HomePage;
