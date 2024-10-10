import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DETAIL_PAGE } from "../routes/path";

const Card = ({ products }) => {
  const nav = useNavigate();

  return (
    <div className='flex mx-auto overflow-x-auto gap-x-5 items-center scrollbar scrollbar-thumb-black scrollbar-track-transparent p-5 snap-x snap-mandatory'>
      {
        products.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            className={`w-[300px] h-[190px] sm:w-[360px] sm:h-[180px] lg:w-[360px] lg:h-52 shrink-0 snap-start cursor-pointer ${item.id === null ? 'mx-auto' : ''}`}>
            <div className='bg-gray-300 w-full h-2/3'>
              <img src={item.src} alt={item.title} className='w-full h-full object-cover' />
            </div>
            <div className='bg-gray-300 w-full h-1/3 p-1 relative'>
              <h2 className='text-[15px] md:text-base font-bold'>{item.title}</h2>
              <span className="text-sm flex items-center gap-x-1"><FaStar color="black" />4.5</span>

              <div className="bg-gray-300 px-4 py-1 absolute -top-[32px] right-0">
                <h2 className="font-bold">Rs.{item.price}</h2>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

// Define PropTypes for the component
Card.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Card;
