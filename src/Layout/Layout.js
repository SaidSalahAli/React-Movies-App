import Footer from "./Footer/Footer";
import ModileFooter from "./Footer/ModileFooter";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children, getAllMovieSarsh,lengthfavourites}) => {
  return (
    <div 
    className="bg-main text-white">
      <Navbar getAllMovieSarsh={getAllMovieSarsh} lengthfavourites={lengthfavourites}/>
      {children}
      <Footer />
    <ModileFooter lengthfavourites={lengthfavourites} />
    </div>
  );
};

export default Layout;
