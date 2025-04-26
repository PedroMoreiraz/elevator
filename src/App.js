import './App.css';
import './components/ElevatorContainer'
import ElevatorContainer from './components/ElevatorContainer';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  return (
    <div className="App">
      <ElevatorContainer/>
      <ButtonsContainer/>
    </div>
  );
}

export default App;
