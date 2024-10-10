import Carousel from "../../components/Carousel";
import HomeBanner from "../components/HomeBanner";


import { productData } from "../../assets/Data/productData";
import { bannerData } from "../../assets/Data/productData";
import Card from "../../components/Card";



const HomePage = () => {
  return (
    <div className="px-5">
      <HomeBanner />
      <Carousel products={bannerData} />
      <Card products={productData} />
    </div>
  );
};

export default HomePage;
