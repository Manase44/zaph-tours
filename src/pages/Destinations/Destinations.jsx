import Header from "../../components/Header/Header";
import "./Destinations.css";
import destinationsData from "../../data/destinations.js";

const Destinations = () => {
  return (
    <div>
      <Header />
      <div className="destination-section" id="destination">
        <h2 className="section-title">our destinations</h2>
        <p className="section-subtitle">
          have a look at our beatiful destinations, we can make your fantancy a
          reality.
        </p>
        <div className="destinations">
          {destinationsData.map((currentDestination, i) => {
            return (
              <div key={i} className="destination-item card">
                <div className="destination-image">
                  <img src={currentDestination.image} alt="dstination image" />
                </div>
                <div className="destination-details">
                  <p className="destination-name">{currentDestination.name}</p>
                  <p className="short-description">
                    {currentDestination.description}
                  </p>
                  <p className="group-price">
                    Group price: Ksh {currentDestination.groupPrice}
                  </p>
                  <p className="individual-price">
                    Individual price: Ksh {currentDestination.individualPrice}
                  </p>
                </div>
                <a href="#" className="destination-more-link view-more-button">
                  more details
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
