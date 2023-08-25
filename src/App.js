import Header from '../src/componants/header/Header'
import SideMenu from './componants/sidemenu/SideMenu';
import GraphicGrid from './componants/graphicgrid/GraphicGrid';
import Nutrition from './componants/nutrition/Nutrition'
import './App.css';


async function userInfo() {
  const response = await fetch('http://localhost:3000/user/12');
  const info = await response.json();

  console.log(info); 
  return info;
}

const apiData = await userInfo();

function App() {
  return (
    <>
      <Header />
      <SideMenu />

      <main className='dashboard-container'>
        <h1 className='dashboard-title'>Bonjour <span>{apiData.data.userInfos.firstName}</span></h1>
        <p className='dashboard-subtitle'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

        <div className='dashboard-content'>
          <GraphicGrid />
          <Nutrition />
        </div>
        

      </main>

      
    </>
  );
}

export default App;
