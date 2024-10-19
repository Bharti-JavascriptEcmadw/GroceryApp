
import './App.css';
import Header from './Component/Header.js';
import ExploreCategory from './Component/ExploreCategory.js';
import Banner1 from './Component/Banner1.js';
import FeaturedCategories from './Component/FeaturedCategories.js';
import Footer from './Component/Footer.js';
import CategoryNav from './Component/CategoryNav.js';
import Banner from './Component/Banner.js'
import DailyBestSells from './Component/DailyBestSells.js';
import LargeBanner from './Component/LargeBanner.js'



function App() {
  return (<>
    <Header/>
   <CategoryNav/>
   <Banner/>
   <ExploreCategory/> 
   <FeaturedCategories/>
   <Banner1/>
   <DailyBestSells/>
   <LargeBanner/>
  
   <Footer/>
   </>
  );
}

export default App;
