import Header from './components/Header/StarShipsLogoComonent'
import StarshipsTab from './components/StarShips/StarShipsData'; 
import StarShipsDisplayComponent from './components/StarShips/StarShipsDisplayComponent'
import './App.css';

function App() {
   const tabData = [
    
    {
      label: 'Starships',
      content: <StarshipsTab />
    },
    
  ];
  return (
    <div className="App">
      <Header />
      <StarShipsDisplayComponent tabData={tabData}/>
    </div>
  );


}

export default App;
