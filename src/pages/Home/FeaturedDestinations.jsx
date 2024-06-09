import featuredDestinations from "../../data/featuredDestinations";
const FeaturedDestinations = () => {
  return (
    <section
      style={{}}
      id="featuresDestination"
      className="featured-destination-section"
    >
      <h1 className="section-title">out featured destinations</h1>
      <p className="section-subtitle">
        these are the most popular destinations
      </p>
      <div className="featured-destination-content">
        {featuredDestinations.map((currentFDestination, i) => {
          return (
            <div key={i} className="featured-destination-card">
              <div className="card-image">
                <img
                  src={currentFDestination.image}
                  alt="feature destination"
                />
                 <div className="fdestination-name">
              <p >{currentFDestination.name}</p>
              </div>
              </div>
             
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
