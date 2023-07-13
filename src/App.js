import Header from '../src/componants/header/Header'
import SideMenu from './componants/sidemenu/SideMenu';
import GraphicGrid from './componants/graphicgrid/GraphicGrid';
import Nutrition from './componants/nutrition/Nutrition'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <SideMenu />

      <main className='dashboard-container'>
        <h1 className='dashboard-title'>Bonjour <span>Thomas</span></h1>
        <p className='dashboard-subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        <div className='dashboard-content'>
          <GraphicGrid />
          <Nutrition />
        </div>
        

      </main>

      
    </>
  );
}

export default App;
