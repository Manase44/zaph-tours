import about1 from '../../assets/aboutimages/aboutimage1.jpg'
import about2 from '../../assets/aboutimages/aboutimage2.jpg'
import about3 from '../../assets/aboutimages/aboutimage3.jpg'
import about4 from '../../assets/aboutimages/aboutimage4.jpg'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="section-title">about us</h1>
      <p className="section-subtitle">learn more about zaph tours</p>
      <div className="about-section-content">
        <div className="about-image-styling">
          <div className="col1">
            <div className="col-pic">
              <img src={about1} alt="about image" />
            </div>
            <div className="col-pic">
              <img src={about2} alt="about image" />
            </div>
          </div>
          <div className="col2">
            <div className="col-pic">
              <img src={about3} alt="about image" />
            </div>
            <div className="col-pic">
              <img src={about4} alt="about image" />
            </div>
          </div>
        </div>
        <div className="about-text">
        <p>
          Zaph Tours is a premier travel company based in Kenya, specializing in
          providing the best safaris and adventure tours. With a strong
          reputation for delivering exceptional travel experiences, Zaph Tours
          offers a variety of packages that showcase the natural beauty and
          cultural richness of Kenya and other destinations.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo porro adipisci sed officiis excepturi dolores tempora repudiandae fugiat natus assumenda? Dolores eos asperiores, tempore ipsum totam eveniet illum adipisci necessitatibus incidunt esse officia similique? Dolorum beatae soluta incidunt possimus a?</p>
        </div>
      </div>
    </section>
  );
};

export default About;
