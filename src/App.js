import Products from './Products'
import NavBar from './NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className="m-3" style={{color:"white"}}>E-commerce app built using React, Redux, Bootstrap</h1>
      <Products />
    </div>
  );
}

export default App;
