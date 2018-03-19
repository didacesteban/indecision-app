let toggleVisible = false;

const changeToggleState = () => {
  toggleVisible = !toggleVisible;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={changeToggleState}>{toggleVisible == false ? 'Show details' : 'Hide details'}</button>
      {toggleVisible && (
        <div>
          <p>Some details</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
