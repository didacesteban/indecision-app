console.log('App.js is running');

const app = {
  title: 'Indecision',
  subTitle: 'Your game to decide',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{(app.options && app.options.length > 0) ? 'Options ' + app.options : 'No Options'}</p>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
      <button onClick={removeAll}>Remove all</button>
      <button disabled={app.options.length < 1} onClick={onMakeDecision}>What should?</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
renderApp();
