
// SHOES
import img_1 from '../images/Shoes/custom-nike-dunk-high-by-you-shoes.webp'
import img_2 from '../images/Shoes/custom-nike-dunk-low-by-you-su24-1.webp'
import img_3 from '../images/Shoes/custom-nike-dunk-low-by-you-su24.webp'
import img_4 from '../images/Shoes/NIKE+COURT+VISION+LO+NN.webp'
import img_5 from '../images/Shoes/NIKE+COURT+VISION+LO.webp'
import img_6 from '../images/Shoes/W+NIKE+DUNK+HIGH.webp'

// BANNER
import banner_1 from '../images/Carousel banner/nike-banner-1.jpg'
import banner_2 from '../images/Carousel banner/Nike-Header-min.jpg'
import banner_3 from '../images/Carousel banner/NIKE_DUNK_LOW_racer_blue.webp'

const shoes = [
  {
    id: 1,
    src: img_1,
    alt: "Carousel Image 1",
    title: "Custom Nike Dunk High",
    description: "Personalize your Nike Dunk High with custom colors and details.",
    discount: "20% off",
    sizes: [7, 8, 9, 10, 11, 12],
    color: "Blue/White",
    price: 6000
  },
  {
    id: 2,
    src: img_2,
    alt: "Carousel Image 2",
    title: "Custom Nike Dunk Low - Summer Edition",
    description: "A fresh and vibrant summer edition of the classic Nike Dunk Low.",
    discount: "15% off",
    sizes: [6, 7, 8, 9, 10],
    color: "Red/Black",
    price: 6000
  },
  {
    id: 3,
    src: img_3,
    alt: "Carousel Image 3",
    title: "Nike Dunk Low Custom",
    description: "Design your own pair of Nike Dunk Lows for a unique look.",
    discount: "10% off",
    sizes: [5, 6, 7, 8, 9, 10],
    color: "Green/Yellow",
    price: 6000
  },
  {
    id: 4,
    src: img_4,
    alt: "Carousel Image 4",
    title: "Nike Court Vision Lo NN",
    description: "Classic court-inspired Nike shoes with a modern twist.",
    discount: "25% off",
    sizes: [6, 7, 8, 9, 10, 11],
    color: "White",
    price: 6000
  },
  {
    id: 5,
    src: img_5,
    alt: "Carousel Image 5",
    title: "Nike Court Vision Lo",
    description: "Timeless and versatile sneakers, perfect for any occasion.",
    discount: "30% off",
    sizes: [7, 8, 9, 10, 11],
    color: "Black/White",
    price: 6000
  },
  {
    id: 6,
    src: img_6,
    alt: "Carousel Image 6",
    title: "W Nike Dunk High",
    description: "A women's exclusive high-top Nike Dunk with bold colors.",
    discount: "18% off",
    sizes: [5, 6, 7, 8, 9],
    color: "Purple/Black",
    price: 6000
  },
];

const bannerData = [
  {
    id: 1,
    src: banner_1,
    alt: "Carousel Image 1",
    title: "Custom Nike Dunk High",
    description: "Personalize your Nike Dunk High with custom colors and details.",
    discount: "20% off",
    sizes: [7, 8, 9, 10, 11, 12],
    color: "Blue/White",
  },
  {
    id: 2,
    src: banner_2,
    alt: "Carousel Image 1",
    title: "Custom Nike Dunk High",
    description: "Personalize your Nike Dunk High with custom colors and details.",
    discount: "20% off",
    sizes: [7, 8, 9, 10, 11, 12],
    color: "Blue/White",
  },
  {
    id: 3,
    src: banner_3,
    alt: "Carousel Image 1",
    title: "Custom Nike Dunk High",
    description: "Personalize your Nike Dunk High with custom colors and details.",
    discount: "20% off",
    sizes: [7, 8, 9, 10, 11, 12],
    color: "Blue/White",
  },
]

const productData = {
  shoes,
  bannerData,
}

export default productData;