import React from "react";
import PropTypes from "prop-types";

class test extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    // 변하는 데이터 저장 용도
    // 절대 state를 직접 변경하지 마시오
    count: 0,
  };
  // 추천
  add = () => {
    console.log("add");
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  // 비추천
  minus = () => {
    console.log("minus");
    this.setState({ count: this.state.count - 1 });
  };

  // component 생성 확인 함수
  componentDidMount() {
    console.log("component rendered");
  }

  // component update 확인 함수
  componentDidUpdate() {
    console.log("updated");
  }

  componentWillUnmount() {
    console.log("goodbye");
  }

  render() {
    console.log("hello2");
    return (
      <div>
        <h1>the number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

// export default App;
