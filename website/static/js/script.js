// script.js

const App = () => {

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Hello World!</h1>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );

};

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  ReactDOM.render(<App />, app);
});