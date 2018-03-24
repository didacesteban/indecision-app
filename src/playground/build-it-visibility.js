class Template extends React.Component {
  constructor(props) {
    super(props);
    this.changeToggleState = this.changeToggleState.bind(this);
    this.state = {
      toggleVisible: false
    };
  }
  changeToggleState() {
    this.setState((prevState) => {
      return {
        toggleVisible: prevState.toggleVisible == false ? true : false
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
          <button onClick={this.changeToggleState}>{this.state.toggleVisible == false ? 'Show details' : 'Hide details'}</button>
          {this.state.toggleVisible && (
            <div>
            <p>Some details</p>
            </div>
          )}
      </div>
    )
  }
}

ReactDOM.render(<Template />, document.getElementById('app'));
