import Header from "./components/Header";

function App({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default App;
