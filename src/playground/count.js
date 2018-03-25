
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
//   count++;
//   renderApp();
// };
// const removeOne = () => {
//   count--;
//   renderApp();
// };
// const reset = () => {
//   count = 0;
//   renderApp();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderApp = () => {
//
//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={removeOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//
//   ReactDOM.render(template2, appRoot);
// };
//
// renderApp();
