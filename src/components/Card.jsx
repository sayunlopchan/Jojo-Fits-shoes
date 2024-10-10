import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DETAIL_PAGE } from "../routes/path";

const Card = ({ products }) => {

  const nav = useNavigate()

  return (
    <div className='flex overflow-x-auto gap-x-10 items-center mt-10 scrollbar scrollbar-thumb-black scrollbar-track-transparent py-5 snap-x snap-mandatory'>
      {
        products.map((item, idx) => (
          <div
            key={idx}
            onClick={() => nav(`${DETAIL_PAGE.replace(':id', idx)}`)}
            className='w-[360px] h-[180px] lg:w-[360px] lg:h-52 shrink-0 snap-start'>
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

export default Card;
