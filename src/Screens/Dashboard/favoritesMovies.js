import Table from "../../Components/Table";
import SideBar from "./SideBar";

const FavoritesMovies = ({
  favourites,
  lengthfavourites,
  removeAllMovies,
  removeFavouriteMovie,
}) => {
  return (
    <SideBar lengthfavourites={lengthfavourites}>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Favorites Movies</h2>
          <button
            onClick={() => removeAllMovies(favourites)}
            className="bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded ">
            Delet All
          </button>
        </div>
        <Table
          movies={favourites}
          removeFavouriteMovie={removeFavouriteMovie}
          admin={true}
        />
      </div>
    </SideBar>
  );
};

export default FavoritesMovies;
