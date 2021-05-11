import './App.css';
import Navigation from './components/Navigation';

function App() {

  const [people, setPeople] = React.useState([]);
  const [planets, setPlanets] = React.useState([]);
  const [vehicles, setVehicles] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);
  return (
    <>
    <div className="App">
      <Navigation />
    </div>

    </>
  );
}

export default App;
