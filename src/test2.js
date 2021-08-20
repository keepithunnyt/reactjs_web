import React from "react";
import PropTypes from "prop-types";

class test extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    // ���ϴ� ������ ���� �뵵
    // ���� state�� ���� �������� ���ÿ�
    count: 0,
  };
  // ��õ
  add = () => {
    console.log("add");
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  // ����õ
  minus = () => {
    console.log("minus");
    this.setState({ count: this.state.count - 1 });
  };

  // component ���� Ȯ�� �Լ�
  componentDidMount() {
    console.log("component rendered");
  }

  // component update Ȯ�� �Լ�
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
