import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Cards from "./components/Cards/Cards";
import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Filter />
          <Cards />
        </main>
      </div>
    </>
  );
}

export default App;
