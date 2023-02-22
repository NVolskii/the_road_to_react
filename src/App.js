import './App.css';

const welcome = {
  greeting: 'Wazzup',
  title: 'React',
};

function getTitle(welcome) {
  return welcome.title;
};

function App() {
  return (
    <div className="App">
      <h1>
        {welcome.greeting} {getTitle(welcome)}!
      </h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />

    </div>
  );
}

export default App;
