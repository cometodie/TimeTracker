import React, { Component } from "react";
import TextField from "material-ui/TextField";

class TypeField extends Component {
  constructor(props) {
    super(props);
    var isValid = this.validate(props.value);
    this.state = {
      value: props.value,
      valid: isValid,
      type: props.type,
      name: props.name,
      placeholder: props.placeholder
    };
    this.onChange = this.onChange.bind(this);
  }
  validate(val) {
    return val.length > 2;
  }
  onChange(e) {
    var val = e.target.value;
    var isValid = this.validate(val);
    this.setState({ value: val, valid: isValid });
  }
  render() {
    var color = this.state.valid === true ? "green" : "red";
    return (
      <TextField
        style={{ borderColor: color }}
        name={this.state.name}
        type={this.state.type}
        value={this.state.value}
        onChange={this.onChange}
        placeholder={this.state.placeholder}
      />
    );
  }
}

export default TypeField;
