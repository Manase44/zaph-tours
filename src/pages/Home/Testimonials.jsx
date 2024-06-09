import testimonials from "../../data/testimonials";
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-ection">
      <h1 className="section-title">testimonials</h1>
      <p className="section-subtitle">
        this is what our esteemed customers say about us
      </p>
      <div className="testimonials-content">
        {testimonials.map((currentTestimony, i) => {
          return (
            <div className="testimony-card">
              <div className="testimony-card-header">
                <div className="testimony-card-profile">
                  <img src={currentTestimony.image} alt="attestant profile" />
                </div>
                <div className="testimony-card-details">
                  <p className="attestant-name">{currentTestimony.name}</p>
                  <p className="attestant-accupation">
                    {currentTestimony.title}
                  </p>
                </div>
              </div>
              {/* <hr className="line" /> */}
              <div className="testimony">
                <p>{currentTestimony.testimony}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
