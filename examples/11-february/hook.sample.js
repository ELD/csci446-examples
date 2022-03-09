const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter clicks: ${counter}`;
  }, [counter]);

  return (
    <div className="App">
      <p>The counter has been clicked {counter} times.</p>
      <button onClick={() => setCounter(counter + 1)}>
        Click to Increment
      </button>
    </div>
  );
};
