import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';

import ModelY from '../src/assets/Desktop-ModelY.jpeg'
import ModelX from '../src/assets/Desktop-ModelX.jpeg'
import ModelS from '../src/assets/Desktop-ModelS.jpeg'
import Model3 from '../src/assets/Desktop-Model3.jpeg'
import Accesorries from '../src/assets/Desktop-Accessories.jpg'
import SolarPanel from '../src/assets/Desktop-SolarPanels.jpeg'
import SolarRoof from '../src/assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemContainer">
        <Item
          title='Model S'
          desc='Order Online for '
          descLink='Touchless Delivery'
          backgroundImg={ModelS}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title='Model Y'
          desc='Order Online for '
          descLink='Touchless Delivery'
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model 3'
          desc='Order Online for '
          descLink='Touchless Delivery'
          backgroundImg={Model3}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'  
        />
        <Item
          title='Model X'
          desc='Order Online for '
          descLink='Touchless Delivery'
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'  
        />
        <Item
          title='Lowest Cost Solar Panels in America'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarPanel}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Solar for New Roofs'
          desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Accessories'
          desc=''
          descLink=''
          backgroundImg={Accesorries}
          midBtnTxt='SHOP NOW'
          midBtnLink=''
          none
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
