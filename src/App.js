import './App.css';
import PriceRange from './Components/PriceRange';

function App() {

  return (
    <>
      <h1 className='header'>Slider without libraries</h1>
      <PriceRange minRange={1} maxRange={100} /> 
    </>
  );
}

export default App;
