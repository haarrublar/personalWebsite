const App = () => {

  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('app'));