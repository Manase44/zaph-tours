import Header from "../../components/Header/Header";
import "./Trips.css";
import tripsData from "../../data/tripsData.js";

const Trips = () => {
  return (
    <div>
      <Header />
      <section className="trips-section" id="trips">
        <h1 className="section-title">trip types</h1>
        <p className="section-subtitle">
          view our different trip packages, we have a package to accomodate
          everyone.
        </p>
        <div className="trip-section-packages">
          {tripsData.map((currentPackage) => {
            return (
              <div key={currentPackage.id} className="trip-package">
                <div className="package-header">
                  <h3 className="package-name">{currentPackage.name}</h3>
                  <p className="package-description"></p>
                </div>
                <div className="package-gallery">
                  {currentPackage.gallery.map((currentCard, i) => {
                    return (
                      <div key={i} className="package-gallery-card card">
                        <div className="package-gallery-card-image">
                          <img src={currentCard.image} alt="package gallery" />
                        </div>
                        <div className="package-gallery-card-details">
                          <p className="card-name">
                            {currentCard.name}
                          </p>
                          <p className="card-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum veniam in voluptatibus animi, neque illo
                            quibusdam consectetur, aut consequatur officia
                            nobis, iusto architecto voluptas fugiat dignissimos
                            pariatur. Dolor, nesciunt alias.
                          </p>
                          <p className="card-price">
                            Ksh {currentCard.price} per person
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <a href="#" className="view-more-button">
                  view more
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Trips;
