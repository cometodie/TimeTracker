import React,{Component} from "react";

class TimeTrackerRow extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  componentWillReceiveProps(nProps) {
    // console.log(nProps);
    this.setState({ timeStore: nProps.timeStore });
  }
  
  render() {
    
      return <div>sdfsd</div>;
  }
}

export default TimeTrackerRow;