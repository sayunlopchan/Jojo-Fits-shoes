import Carousel from "../../components/Carousel";
import HomeBanner from "../components/HomeBanner";


import productData from "../../assets/Data/productData";
import Card from "../../components/Card";



const HomePage = () => {



  return (
    <div className="px-5 ">
      <HomeBanner />
      <Carousel products={productData.bannerData} />
      <Card products={productData.shoes} />
    </div>
  );
};

export default HomePage;
