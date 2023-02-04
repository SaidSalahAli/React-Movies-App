import {FaRegCalendarAlt} from "react-icons/fa"
import {BiTime} from "react-icons/bi"

const FlexMoviesItems = ({ movie }) => {

  return (
    <div className="flex space-x-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{movie.original_title}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaRegCalendarAlt className='text-subMain w-3 h-3'/>
        <span className="text-sm font-medium">{movie.release_date}</span>
      </div>
      <div className="flex items-center gap-2">
        <BiTime className='text-subMain w-3 h-3'/>
        <span className="text-sm font-medium"> 2 hore</span>
      </div>
    </div>
  );
};

export default FlexMoviesItems;
