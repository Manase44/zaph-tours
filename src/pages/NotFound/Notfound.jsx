import Header from "../../components/Header/Header";
import pageNotFoundSVG from "../../assets/page_not_found.svg";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div>
      <Header />
      <div className="page-not-found-section">
        <img src={pageNotFoundSVG} alt="pae not found" />
      </div>
    </div>
  );
};

export default Notfound;
