import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value }) => {
  return (
    <>
      <span> 
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar  />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt  />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 6 ? (
          <FaStar />
        ) : value >= 5.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 7 ? (
          <FaStar />
        ) : value >= 6.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 8 ? (
          <FaStar />
        ) : value >= 7.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 9 ? (
          <FaStar />
        ) : value >= 8.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    </>
  );
};

export default Rating;
