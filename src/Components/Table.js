import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Text = "text-sm  text-left leading-6 whitespace-nowrap  px-5 py-3 ";
const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";

const Table = ({ movies, admin, removeFavouriteMovie }) => {
  // const [movies, setMovies] = useState([]);
  // // console.log(movies)
  // const dispatch = useDispatch;
  // const dataMovies = useSelector((state) => state.movies);

  // useEffect(() => {
  //   setMovies(dataMovies);
  // }, [dataMovies]);

  //   useEffect(() => {
  //     dispatch(getAllMoviess());
  //   }, []);

  const Rows = (movie, id, admin) => {
    return (
      <tr key={id}>
        <td className={`${Text}`}>
          <div className="w-15 bg-dry h-20 rounded overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
              alt={movie?.title}
            />
          </div>
        </td>
        <td className={`${Text} truncate`}>{movie?.title}</td>
        <td className={`${Text}`}>{movie?.original_language}</td>
        <td className={`${Text}`}>{movie?.release_date}</td>
        <td className={`${Text}`}>2 hover</td>
        <td className={`${Text}float-right flex  gap-2`}>
          {admin === true ? (
            <>
              <button
                onClick={() => removeFavouriteMovie(movie)}
                className="bg-subMain text-white rounded flex-colo w-6 h-7 ">
                <MdDelete />
              </button>
            </>
          ) : (
            <>
              <Link
                to={`/movie/${movie?.id}`}
                className="bg-subMain  text-white rounded flex-colo w-6 h-7 ">
                <AiOutlineCloudDownload />
              </Link>
            </>
          )}
        </td>
      </tr>
    );
  };

  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border diviode-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              imgag
            </th>
            <th scope="col" className={`${Head}`}>
              Name
            </th>
            <th scope="col" className={`${Head}`}>
              Language
            </th>
            <th scope="col" className={`${Head}`}>
              year
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Hover
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {movies && movies?.map((movie, id) => Rows(movie, id, admin))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
