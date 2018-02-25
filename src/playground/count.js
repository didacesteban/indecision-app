let count = 0;
const addOne = () => {
  count++;
  renderApp();
};
const removeOne = () => {
  count--;
  renderApp();
};
const reset = () => {
  count = 0;
  renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {

  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={removeOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
};

renderApp();
